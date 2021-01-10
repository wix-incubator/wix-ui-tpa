const easeInOutSin = (time: number): number => {
  return (1 + Math.sin(Math.PI * time - Math.PI / 2)) / 2;
};

interface AnimateElementByPropArgs {
  propToAnimate: string;
  element: Element;
  moveTo: number;
  duration?: number;
}

interface AnimateElementByPropReturnValue {
  cancel(): void;
  updateBy(number): void;
  done: Promise<void>;
}

export function animateElementByProp({
  propToAnimate,
  element,
  moveTo,
  duration = 700,
}: AnimateElementByPropArgs): AnimateElementByPropReturnValue {
  const ease = easeInOutSin;
  const startPoint: number = element[propToAnimate];
  let start: number = null;
  let doneResolve;
  const done: Promise<void> = new Promise((res) => {
    doneResolve = res;
  });
  let animationId = null;

  const cancel = () => {
    cancelAnimationFrame(animationId);
  };

  const updateBy = (newTarget: number) => {
    moveTo += newTarget;
  };

  const step = (timestamp) => {
    if (start === null) {
      start = timestamp;
    }

    const time = Math.min(1, (timestamp - start) / duration);
    element[propToAnimate] = startPoint + ease(time) * (moveTo - startPoint);

    if (time === 1) {
      start = null;
      doneResolve();
    } else {
      animationId = requestAnimationFrame(step);
    }
  };

  if (startPoint !== moveTo) {
    animationId = requestAnimationFrame(step);
  }

  return {
    cancel,
    updateBy,
    done,
  } as AnimateElementByPropReturnValue;
}
