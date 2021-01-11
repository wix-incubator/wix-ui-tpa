import { getArrowPlacement } from './Arrows';

describe('Tooltip - Custom arrows', () => {
  test.each`
    placement         | expected
    ${'top-start'}    | ${'top'}
    ${'top'}          | ${'top'}
    ${'top-end'}      | ${'top'}
    ${'right-start'}  | ${'right'}
    ${'right'}        | ${'right'}
    ${'right-end'}    | ${'right'}
    ${'bottom-end'}   | ${'bottom'}
    ${'bottom'}       | ${'bottom'}
    ${'bottom-start'} | ${'bottom'}
    ${'left-end'}     | ${'left'}
    ${'left'}         | ${'left'}
    ${'left-start'}   | ${'left'}
  `(
    'Should return the correct Arrow placement for $placement',
    ({ placement, expected }) => {
      expect(getArrowPlacement(placement)).toEqual(expected);
    },
  );
});
