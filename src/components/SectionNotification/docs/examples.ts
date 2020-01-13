export const importExample = `
  import { SectionNotification } from 'wix-ui-tpa/dist/src/components/SectionNotification';
`;

import { NOTIFICATION_TYPE } from '../types';

const errorIcon = `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm.5 17h-1v-9h1v9zm-.5-12c.466 0 .845.378.845.845 0 .466-.379.844-.845.844-.466 0-.845-.378-.845-.844 0-.467.379-.845.845-.845z"/></svg>`;
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
  const sectionNotifications = `
    <SectionNotification type="${type}">
      <SectionNotification.Text>${
        exampleText.notification
      }</SectionNotification.Text>
    </SectionNotification>

    <br/>

    <SectionNotification type="${type}">
      <SectionNotification.Icon icon={${errorIcon}} />
      <SectionNotification.Text>${exampleText.error}</SectionNotification.Text>
    </SectionNotification>


    ${
      type !== NOTIFICATION_TYPE.error
        ? `
        <br/>
        <SectionNotification type="${type}">
          <SectionNotification.Icon icon={${errorIcon}} />
          <SectionNotification.Text>${exampleText.confrirmation}</SectionNotification.Text>
          <SectionNotification.Button type="text" key="primary" size={SIZE.tiny} priority={PRIORITY.basic}>Decline</SectionNotification.Button>
          <SectionNotification.Button type="default" key="secondary" size={SIZE.tiny} priority={PRIORITY.basicSecondary}>Approve</SectionNotification.Button>
        </SectionNotification>
        `
        : ''
    }
  `;

  return isMobile
    ? `<ExampleWithContextProps mobile="true"><div style={{ width: '400px'}}>${sectionNotifications}</div></ExampleWithContextProps>`
    : `<>${sectionNotifications}</>`;
}
