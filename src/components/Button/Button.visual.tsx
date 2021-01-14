import * as React from 'react';
import { Button } from './';
import { snap, story, visualize } from 'storybook-snapper';
import { ReactComponent as Heart } from '../../assets/icons/Heart.svg';
import { ReactComponent as Share } from '../../assets/icons/Share.svg';
import { SIZE, PRIORITY } from './Button';

function priorityTestSuite() {
  story(`Priority`, () => {
    Object.values(PRIORITY).forEach((priority) => {
      snap(`${priority}`, () => (
        <Button priority={priority}>{priority}</Button>
      ));
    });
  });
}

function sizeTestSuite() {
  story(`Size`, () => {
    Object.values(SIZE).forEach((size) => {
      snap(`${size}`, () => <Button size={size}>{size}</Button>);
    });
  });
}

function upgradeTestSuite() {
  story(`Upgrade`, () => {
    story(`Size`, () => {
      Object.values(SIZE).forEach((size) => {
        snap(`${size}`, () => (
          <Button upgrade size={size}>
            {size}
          </Button>
        ));
      });
    });
    story(`Priority`, () => {
      Object.values(PRIORITY).forEach((priority) => {
        snap(`${priority}`, () => (
          <Button upgrade priority={priority}>
            {priority}
          </Button>
        ));
      });
    });

    story(`With icons`, () => {
      snap(`prefix icon`, () => (
        <Button upgrade prefixIcon={<Heart />}>
          Button
        </Button>
      ));
      snap(`suffix icon`, () => (
        <Button upgrade suffixIcon={<Share />}>
          Button
        </Button>
      ));
      snap(`both icon`, () => (
        <Button upgrade prefixIcon={<Heart />} suffixIcon={<Share />}>
          Button
        </Button>
      ));
    });
  });
}

visualize('Button', () => {
  priorityTestSuite();
  sizeTestSuite();
  upgradeTestSuite();
});
