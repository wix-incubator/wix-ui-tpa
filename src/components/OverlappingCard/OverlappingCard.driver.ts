import { CardDriver, cardDriverFactory } from '../Card/Card.driver';

export interface OverlappingCardDriver extends CardDriver {}

export const overlappingCardDriverFactory: (
  UniDriver,
) => OverlappingCardDriver = cardDriverFactory;
