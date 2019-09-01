import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { TPAComponentsProvider } from '../../src/components/TPAComponentsConfig';
import { VisualTestContainer } from './VisualTestContainer';
import { Tabs } from '../../src/components/Tabs';

const stories = {};
let currentTest = [];

export function visualize(visualName, tests) {
  if (currentTest.length) {
    throw new Error("Previous test didn't end as expected!");
  }

  if (!visualName) {
    throw new Error('Must have a test name');
  }

  currentTest.push(visualName);

  try {
    tests();
  } catch (e) {}

  currentTest = null;
}

export function story(storyName, cb) {
  currentTest.push(storyName);

  try {
    cb();
  } catch (e) {}

  currentTest.pop();
}

export function snap(snapshotName, cb) {
  const eyesStorybookOptions = {};
  const fullStoryName = [...currentTest].join('/');
  console.log('adler', 'Snapper.tsx:42', fullStoryName, snapshotName);
  storiesOf(fullStoryName, module).add(
    snapshotName,
    () => <VisualTestContainer>{cb()}</VisualTestContainer>,
    eyesStorybookOptions,
  );
}
