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
            {buttons.map((title) => (
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

const textSample = `We're having some trouble authorizing and charging your card. Please make sure it's valid or try a different payment method.`;

function getTests({
  description,
  icon = null,
  buttons = [],
  isMobile = false,
}) {
  return Object.values(NOTIFICATION_TYPE).map((type) => ({
    it: `${description} - ${type}`,
    props: {
      mobile: isMobile,
      type,
      text: textSample,
      icon,
      buttons,
    },
  }));
}

const tests = [
  {
    describe: 'desktop',
    its: [
      ...getTests({ description: 'Basic' }),
      ...getTests({ description: 'With icon', icon: <ErrorIcon /> }),
      ...getTests({ description: 'With button', buttons: ['Approve'] }),
      ...getTests({
        description: 'With icon and two buttons',
        icon: <ErrorIcon />,
        buttons: ['Approve', 'Decline'],
      }),
    ],
  },
  {
    describe: 'mobile',
    its: [
      ...getTests({ description: 'Basic', isMobile: true }),
      ...getTests({
        description: 'With icon',
        icon: <ErrorIcon />,
        isMobile: true,
      }),
      ...getTests({
        description: 'With button',
        buttons: ['Approve'],
        isMobile: true,
      }),
      ...getTests({
        description: 'With icon and two buttons',
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
