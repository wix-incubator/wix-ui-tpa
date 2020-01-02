import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { ReactComponent as ErrorIcon } from '../../assets/icons/Error.svg';
import { Button, SIZE } from '../Button';
import { TPAComponentsProvider } from '../TPAComponentsConfig';
import { SectionNotification, SectionNotificationProps } from './';
import { NOTIFICATION_TYPE } from './types';

interface SectionNotificationVisualProps {
  mobile: boolean;
  rtl: boolean;
}

class SectionNotificationVisual extends React.Component<
  SectionNotificationVisualProps & SectionNotificationProps
> {
  static defaultProps = {
    mobile: false,
    rtl: false,
  };

  render() {
    const { mobile, rtl, ...componentProps } = this.props;

    return (
      <TPAComponentsProvider value={{ mobile, rtl }}>
        <VisualTestContainer>
          <SectionNotification {...componentProps} />
        </VisualTestContainer>
      </TPAComponentsProvider>
    );
  }
}

const textSamples = {
  short: `You will be redirected to the payment provider's page.`,
  long: `We're having some trouble authorizing and charging your card. Please make sure it's valid or try a different payment method.`,
};

function getTests({ isMobile = false, isRTL = false, text }) {
  return Object.values(NOTIFICATION_TYPE).map(type => ({
    it: type,
    props: {
      mobile: isMobile,
      rtl: isRTL,
      type,
      text,
      icon: <ErrorIcon />,
      controls: <Button size={SIZE.tiny} />,
    },
  }));
}

const tests = [
  {
    describe: 'desktop',
    its: [
      ...getTests({ text: textSamples.short }),
      ...getTests({ text: textSamples.long }),
    ],
  },
  {
    describe: 'mobile',
    its: [
      ...getTests({ text: textSamples.short, isMobile: true }),
      ...getTests({ text: textSamples.long, isMobile: true }),
    ],
  },
  {
    describe: 'rtl',
    its: [
      ...getTests({ text: textSamples.short, isRTL: true }),
      ...getTests({ text: textSamples.long, isRTL: true }),
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`SectionNotification/${describe}`, module).add(it, () => (
      <SectionNotificationVisual {...props} />
    ));
  });
});
