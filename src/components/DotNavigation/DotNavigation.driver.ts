import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { UniDriverList } from '@unidriver/core';
import { DotNavigationDataKeys, DotNavigationDataHooks } from './dataHooks';

const getByDataHook = (dataHook: string) => `[data-hook="${dataHook}"]`;

export interface DotNavigationDriver extends BaseUniDriver {
  getDots(): UniDriverList;
  getDot(index: number): UniDriver;
  getShowBorder(): Promise<boolean>;
  getTheme(): Promise<string>;
  getSavedCurrentIndex(): Promise<number>;
}

export const dotNavigationDriverFactory = (
  base: UniDriver,
): DotNavigationDriver => {
  return {
    ...baseUniDriverFactory(base),
    getDots: () => base.$$(getByDataHook(DotNavigationDataHooks.Dot)),
    getDot: (index: number) =>
      base.$$(getByDataHook(DotNavigationDataHooks.Dot)).get(index),
    getShowBorder: async () =>
      JSON.parse(await base.attr(DotNavigationDataKeys.ShowBorder)),
    getTheme: async () => base.attr(DotNavigationDataKeys.Theme),
    getSavedCurrentIndex: async () =>
      parseInt(await base.attr(DotNavigationDataKeys.SavedCurrentIndex), 10),
  };
};
