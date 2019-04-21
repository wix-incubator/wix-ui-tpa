import { CardDriver, cardDriverFactory } from '../Card/Card.driver';

export interface StackedCardDriver extends CardDriver {}

export const stackedCardDriverFactory: (
  UniDriver,
) => StackedCardDriver = cardDriverFactory;
