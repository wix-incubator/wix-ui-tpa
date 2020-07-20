export const importExample = `
  import { SectionNotification } from 'wix-ui-tpa/SectionNotification';
`;
import { NOTIFICATION_TYPE } from '../types';

const errorIcon = `<Error />`;

const exampleText = {
  error: `We're having some trouble authorizing and charging your card. Please make sure it's valid or try a different payment method.`,
  notification: `You will be redirected to the payment provider's page.`,
  confrirmation: 'This group will only be created after you approve it.',
};

export const example = Object.values(NOTIFICATION_TYPE).reduce(
  (acc, type) => {
    return {
      ...acc,
      desktop: {
        ...acc.desktop,
        [type]: getSectionNotification(type),
      },
      mobile: {
        ...acc.mobile,
        [type]: getSectionNotification(type, true),
      },
    };
  },
  { desktop: {}, mobile: {} },
);

function getSectionNotification(
  type: NOTIFICATION_TYPE,
  isMobile?: boolean,
): string {
  const icon = type === NOTIFICATION_TYPE.error ? errorIcon : null;
  const sectionNotifications = `
    <SectionNotification type="${type}">
      <SectionNotification.Text>${
        exampleText.notification
      }</SectionNotification.Text>
    </SectionNotification>

    <br/>

    <SectionNotification type="${type}">
      ${icon ? `<SectionNotification.Icon icon={${icon}} />` : ''}
      <SectionNotification.Text>${exampleText.error}</SectionNotification.Text>
    </SectionNotification>


    ${
      type !== NOTIFICATION_TYPE.error && type !== NOTIFICATION_TYPE.alert
        ? `
        <br/>
        <SectionNotification type="${type}">
          ${icon ? `<SectionNotification.Icon icon={${icon}} />` : ''}
          <SectionNotification.Text>${
            exampleText.confrirmation
          }</SectionNotification.Text>
          <SectionNotification.Button type="text" key="secondary" size={SIZE.tiny} priority={PRIORITY.basic}>Text Button</SectionNotification.Button>
          <SectionNotification.Button type="default" key="primary" size={SIZE.tiny} priority={PRIORITY.basic}>Regular Button</SectionNotification.Button>
        </SectionNotification>
        <br/>
        <SectionNotification type="${type}">
          ${icon ? `<SectionNotification.Icon icon={${icon}} />` : ''}
          <SectionNotification.Text>${
            exampleText.confrirmation
          }</SectionNotification.Text>
          <SectionNotification.Button type="default" key="secondary" size={SIZE.tiny} priority={PRIORITY.basicSecondary}>Decline</SectionNotification.Button>
          <SectionNotification.Button type="default" key="primary" size={SIZE.tiny} priority={PRIORITY.basic}>Approve</SectionNotification.Button>
        </SectionNotification>
        `
        : ''
    }
  `;

  return isMobile
    ? `<ExampleWithContextProps mobile="true"><div style={{ width: '400px'}}>${sectionNotifications}</div></ExampleWithContextProps>`
    : `<>${sectionNotifications}</>`;
}
