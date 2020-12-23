import * as React from 'react';
import { Button } from './';
import { snap, story, visualize } from 'storybook-snapper';
import { SIZE, PRIORITY } from './Button';

function priorityTestSuite() {
  story(`Priority`, () => {
    Object.values(PRIORITY).forEach(priority => {
      snap(`${priority}`, () => (
        <Button priority={priority}>{priority}</Button>
      ));
    });
  });
}

function sizeTestSuite() {
  story(`Size`, () => {
    Object.values(SIZE).forEach(size => {
      snap(`${size}`, () => <Button size={size}>{size}</Button>);
    });
  });
}

function upgradeTestSuite() {
  story(`Upgrade`, () => {
    story(`Size`, () => {
      Object.values(SIZE).forEach(size => {
        snap(`${size}`, () => (
          <Button upgrade size={size}>
            {size}
          </Button>
        ));
      });
    });
    story(`Priority`, () => {
      Object.values(PRIORITY).forEach(priority => {
        snap(`${priority}`, () => (
          <Button upgrade priority={priority}>
            {priority}
          </Button>
        ));
      });
    });
  });
}

visualize('Button', () => {
  priorityTestSuite();
  sizeTestSuite();
  upgradeTestSuite();
});
