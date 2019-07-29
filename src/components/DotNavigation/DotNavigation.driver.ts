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
  getCurrent(): Promise<number>;
  getStart(): Promise<number>;
  getAnimation(): Promise<string>;
  getStartButton(): UniDriver;
  getPreviousButton(): UniDriver;
  getNextButton(): UniDriver;
  getEndButton(): UniDriver;
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
    getCurrent: async () =>
      parseInt(await base.attr(DotNavigationDataKeys.Current), 10),
    getStart: async () =>
      parseInt(await base.attr(DotNavigationDataKeys.Start), 10),
    getAnimation: async () => base.attr(DotNavigationDataKeys.Animation),
    getStartButton: () =>
      base.$(getByDataHook(DotNavigationDataHooks.StartButton)),
    getPreviousButton: () =>
      base.$(getByDataHook(DotNavigationDataHooks.PreviousButton)),
    getNextButton: () =>
      base.$(getByDataHook(DotNavigationDataHooks.NextButton)),
    getEndButton: () => base.$(getByDataHook(DotNavigationDataHooks.EndButton)),
  };
};
