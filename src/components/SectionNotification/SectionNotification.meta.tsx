import Registry from '@ui-autotools/registry';
import * as React from 'react';
import { NOTIFICATION_TYPE, SectionNotification } from '.';
import { ReactComponent as ErrorIcon } from '../../assets/icons/Error.svg';
import { Button } from '../Button';

const SectionNotificationMetadata = Registry.getComponentMetadata(
  SectionNotification,
);
SectionNotificationMetadata.nonReactStrictModeCompliant = true;

Object.values(NOTIFICATION_TYPE).forEach(type => {
  SectionNotificationMetadata.addSim({
    title: `Render notification of type ${type}`,
    props: {
      type,
      text: `This group will only be created after you approve it.`,
      icon: <ErrorIcon />,
      controls: <Button>Approve</Button>,
    },
  });
});
