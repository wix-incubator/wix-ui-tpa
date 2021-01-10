import Registry from '@ui-autotools/registry';
import * as React from 'react';
import { NOTIFICATION_TYPE, SectionNotification } from '.';
import { ReactComponent as ErrorIcon } from '../../assets/icons/Error.svg';

const SectionNotificationMetadata = Registry.getComponentMetadata(
  SectionNotification,
);
SectionNotificationMetadata.nonReactStrictModeCompliant = true;

// tslint:disable:jsx-wrap-multiline
Object.values(NOTIFICATION_TYPE).forEach((type) => {
  SectionNotificationMetadata.addSim({
    title: `Render notification of type ${type}`,
    props: {
      children: [
        <SectionNotification.Icon icon={<ErrorIcon />} key="icon" />,
        <SectionNotification.Text key="text">
          This group will only be created after you approve it.
        </SectionNotification.Text>,
        <SectionNotification.Button key="approve">
          Approve
        </SectionNotification.Button>,
      ],
    },
  });
});
