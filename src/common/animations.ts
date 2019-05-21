const easeInOutSin = (time: number): number => {
  return (1 + Math.sin(Math.PI * time - Math.PI / 2)) / 2;
};

export const animateElementByProp = (
  propToAnimate: string,
  element: Element,
  amountToMove: number,
) => {
  const ease = easeInOutSin;
  const duration = 700;
  const startPoint: number = element[propToAnimate];
  let start: number = null;
  let cancelled: boolean = false;

  const cancel = () => {
    cancelled = true;
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
      return;
    }

    requestAnimationFrame(step);
  };

  if (startPoint === amountToMove) {
    return cancel;
  }

  requestAnimationFrame(step);
  return cancel;
};
