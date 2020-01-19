const easeInOutSin = (time: number): number => {
  return (1 + Math.sin(Math.PI * time - Math.PI / 2)) / 2;
};

interface AnimateElementByPropArgs {
  propToAnimate: string;
  element: Element;
  amountToMove: number;
  duration?: number;
}

interface AnimateElementByPropReturnValue {
  cancel(): void;
  update(number): void;
  done: Promise<void>;
}

export function animateElementByProp({
  propToAnimate,
  element,
  amountToMove,
  duration = 700,
}: AnimateElementByPropArgs): AnimateElementByPropReturnValue {
  const ease = easeInOutSin;
  const startPoint: number = element[propToAnimate];
  let start: number = null;
  let cancelled: boolean = false;
  let doneResolve;
  const done: Promise<void> = new Promise(res => {
    doneResolve = res;
  });

  const cancel = () => {
    cancelled = true;
  };

  const update = (newAmount: number) => {
    console.log('adler', 'animations.ts:38', newAmount);
    amountToMove += newAmount;
  };

  const step = timestamp => {
    if (cancelled) {
      return;
    }

    if (start === null) {
      start = timestamp;
    }
    const time = Math.min(1, (timestamp - start) / duration);
    element[propToAnimate] =
      ease(time) * (amountToMove - startPoint) + startPoint;

    if (time >= 1) {
      return doneResolve();
    }

    requestAnimationFrame(step);
  };

  if (startPoint !== amountToMove) {
    requestAnimationFrame(step);
  }

  return { cancel, update, done } as AnimateElementByPropReturnValue;
}
