import { top, bottom, left, right, getArrowByPlacement } from './Arrows';

describe('Tooltip - Custom arrows', () => {
  test.each`
    placement         | expected
    ${'top-start'}    | ${top}
    ${'top'}          | ${top}
    ${'top-end'}      | ${top}
    ${'right-start'}  | ${right}
    ${'right'}        | ${right}
    ${'right-end'}    | ${right}
    ${'bottom-end'}   | ${bottom}
    ${'bottom'}       | ${bottom}
    ${'bottom-start'} | ${bottom}
    ${'left-end'}     | ${left}
    ${'left'}         | ${left}
    ${'left-start'}   | ${left}
  `(
    'Should return the correct SVG for $placement',
    ({ placement, expected }) => {
      expect(getArrowByPlacement(placement)).toEqual(expected);
    },
  );
});
