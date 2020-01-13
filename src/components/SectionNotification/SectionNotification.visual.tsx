import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { ReactComponent as ErrorIcon } from '../../assets/icons/Error.svg';
import { SectionNotification, SectionNotificationProps } from './';
import { NOTIFICATION_TYPE } from './types';

interface SectionNotificationVisualProps {
  mobile: boolean;
  text: string;
  icon?: React.ReactNode;
  buttons?: string[];
}

class SectionNotificationVisual extends React.Component<
  SectionNotificationVisualProps & SectionNotificationProps
> {
  static defaultProps = {
    mobile: false,
    buttons: [],
  };

  render() {
    const { mobile, icon, text, buttons = [], ...componentProps } = this.props;

    const styles: { maxWidth?: string } = {};
    if (mobile) {
      styles.maxWidth = '400px';
    }

    return (
      <VisualTestContainer>
        <div style={styles}>
          <SectionNotification {...componentProps}>
            {icon ? <SectionNotification.Icon icon={icon} /> : null}
            <SectionNotification.Text>{text}</SectionNotification.Text>
            {buttons.map(title => (
              <SectionNotification.Button key={title}>
                {title}
              </SectionNotification.Button>
            ))}
          </SectionNotification>
        </div>
      </VisualTestContainer>
    );
  }
}

const textSamples = {
  short: `You will be redirected to the payment provider's page.`,
  long: `We're having some trouble authorizing and charging your card. Please make sure it's valid or try a different payment method.`,
};

function getTests({ text, icon = null, buttons = [], isMobile = false }) {
  return Object.values(NOTIFICATION_TYPE).map(type => ({
    it: type,
    props: {
      mobile: isMobile,
      type,
      text,
      icon,
      buttons,
    },
  }));
}

const tests = [
  {
    describe: 'desktop',
    its: [
      ...getTests({ text: textSamples.short }),
      ...getTests({ text: textSamples.short, icon: <ErrorIcon /> }),
      ...getTests({
        text: textSamples.short,
        icon: <ErrorIcon />,
        buttons: ['Approve'],
      }),
      ...getTests({
        text: textSamples.short,
        icon: <ErrorIcon />,
        buttons: ['Approve', 'Decline'],
      }),
      ...getTests({ text: textSamples.long }),
      ...getTests({ text: textSamples.long, icon: <ErrorIcon /> }),
      ...getTests({ text: textSamples.long, buttons: ['Approve'] }),
      ...getTests({
        text: textSamples.long,
        icon: <ErrorIcon />,
        buttons: ['Approve', 'Decline'],
      }),
    ],
  },
  {
    describe: 'mobile',
    its: [
      ...getTests({ text: textSamples.short, isMobile: true }),
      ...getTests({
        text: textSamples.short,
        icon: <ErrorIcon />,
        isMobile: true,
      }),
      ...getTests({
        text: textSamples.short,
        icon: <ErrorIcon />,
        buttons: ['Approve'],
        isMobile: true,
      }),
      ...getTests({
        text: textSamples.short,
        icon: <ErrorIcon />,
        buttons: ['Approve', 'Decline'],
        isMobile: true,
      }),
      ...getTests({ text: textSamples.long, isMobile: true }),
      ...getTests({
        text: textSamples.long,
        icon: <ErrorIcon />,
        isMobile: true,
      }),
      ...getTests({
        text: textSamples.long,
        buttons: ['Approve'],
        isMobile: true,
      }),
      ...getTests({
        text: textSamples.long,
        icon: <ErrorIcon />,
        buttons: ['Approve', 'Decline'],
        isMobile: true,
      }),
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
