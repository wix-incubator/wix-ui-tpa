import * as React from 'react';

import { Avatar as CoreAvatar } from 'wix-ui-core/avatar';

import styles from './Avatar.st.css';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';

export enum AvatarSize {
  large = 'large',
  medium = 'medium',
  small = 'small',
  xLarge = 'xLarge',
}

export interface AvatarProps  {
  name?: string;
  size?: AvatarSize,
  src?: string;
}

interface DefaultProps {
  size: AvatarSize,
}

/** Avatar is a type of element that visually represents a user, either as an image, placeholder or text (name initials). */
export class Avatar extends React.Component<AvatarProps> {
  static displayName = 'Avatar';
  static defaultProps: DefaultProps = {
    size: AvatarSize.medium,
  };

  render() {
    const { size, src, ...rest } = this.props;

    const placeholder = getDefaultAvatar(size);

    const imgProps = {
      src,
      width: getDimention(size),
      heigh: getDimention(size)
    };
    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <CoreAvatar
            {...rest}
            {...styles('root', { mobile }, rest)}
            placeholder={placeholder()}
            imgProps={imgProps}
          />
        )}
      </TPAComponentsConsumer>
    );
  }
}

function getDimention(avatarSize: AvatarSize = AvatarSize.medium): number {
  return {
    [AvatarSize.large]: 52,
    [AvatarSize.medium]: 36,
    [AvatarSize.small]: 28,
    [AvatarSize.xLarge]: 60
  }[avatarSize];
}

function getDefaultAvatar(avatarSize: AvatarSize = AvatarSize.medium) {
  const defaultAvatars = {
    [AvatarSize.large]: () => (
      <svg width="52px" height="52px" viewBox="0 0 52 52" version="1.1" >
        <g id="01-Elements/Avatar-1.1-/Single/Large/-Anonymous" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <circle id="Oval" fill="#979797" cx="26" cy="26" r="26"></circle>
            <path d="M6.09381758,42.8071949 C2.29091903,38.2775293 0,32.4313687 0,26.0491243 C0,11.6625902 11.6405965,3.55271368e-15 26,3.55271368e-15 C40.3594035,3.55271368e-15 52,11.6625902 52,26.0491243 C52,32.8364342 49.4090548,39.017453 45.1640281,43.6535469 C41.5933521,36.965883 34.3250916,32.1347656 25.875,32.1347656 C17.1766277,32.1347656 9.61006335,36.3259877 6.09381758,42.8071949 Z M26.64,29.3735077 C32.1628475,29.3735077 36.64,24.887896 36.64,19.3546137 C36.64,13.8213314 32.1628475,9.33571976 26.64,9.33571976 C21.1171525,9.33571976 16.64,13.8213314 16.64,19.3546137 C16.64,24.887896 21.1171525,29.3735077 26.64,29.3735077 Z" id="Combined-Shape" fill="#D8D8D8"></path>
            <path d="M26,52 C11.6405965,52 0,40.3594035 0,26 C0,11.6405965 11.6405965,0 26,0 C40.3594035,0 52,11.6405965 52,26 C52,40.3594035 40.3594035,52 26,52 Z M26,49.92 C39.2106512,49.92 49.92,39.2106512 49.92,26 C49.92,12.7893488 39.2106512,2.08 26,2.08 C12.7893488,2.08 2.08,12.7893488 2.08,26 C2.08,39.2106512 12.7893488,49.92 26,49.92 Z" id="Combined-Shape"></path>
        </g>
      </svg>),
    [AvatarSize.medium]: () => (
      <svg width="36px" height="36px" viewBox="0 0 36 36" version="1.1">
        <g id="01-Elements/Avatar-1.1-/Single/Medium/Anonymous" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <circle id="Oval" fill="#979797" cx="18" cy="18" r="18"></circle>
            <path d="M4.21879679,29.6357503 C1.58602087,26.499828 0,22.452486 0,18.0340091 C0,8.0741009 8.0588745,0 18,0 C27.9411255,0 36,8.0741009 36,18.0340091 C36,22.732916 34.2062687,27.0120829 31.2674041,30.2216863 C28.7953976,25.5917652 23.7635249,22.2471454 17.9134615,22.2471454 C11.8915115,22.2471454 6.65312078,25.1487607 4.21879679,29.6357503 Z M18.4430769,20.3355053 C22.2665867,20.3355053 25.3661538,17.2300819 25.3661538,13.399348 C25.3661538,9.56861403 22.2665867,6.46319061 18.4430769,6.46319061 C14.6195671,6.46319061 11.52,9.56861403 11.52,13.399348 C11.52,17.2300819 14.6195671,20.3355053 18.4430769,20.3355053 Z" id="Combined-Shape" fill="#D8D8D8"></path>
            <path d="M18,36 C8.0588745,36 0,27.9411255 0,18 C0,8.0588745 8.0588745,0 18,0 C27.9411255,0 36,8.0588745 36,18 C36,27.9411255 27.9411255,36 18,36 Z M18,34.56 C27.1458355,34.56 34.56,27.1458355 34.56,18 C34.56,8.85416454 27.1458355,1.44 18,1.44 C8.85416454,1.44 1.44,8.85416454 1.44,18 C1.44,27.1458355 8.85416454,34.56 18,34.56 Z" id="Combined-Shape"></path>
        </g>
      </svg>
    ),
    [AvatarSize.small]: () => (
      <svg width="28px" height="28px" viewBox="0 0 28 28" version="1.1">
        <g id="01-Elements/Avatar-1.1-/Single/Small/Anonymous-" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Group-2">
                <circle id="Oval" fill="#979797" cx="14" cy="14" r="14"></circle>
                <g id="Group">
                    <path d="M3.28128639,23.050028 C1.23357178,20.6109773 0,17.4630447 0,14.0264515 C0,6.27985625 6.2680135,-5.32907052e-15 14,-5.32907052e-15 C21.7319865,-5.32907052e-15 28,6.27985625 28,14.0264515 C28,17.6811569 26.6048756,21.0093978 24.319092,23.505756 C22.3964204,19.9047062 18.4827416,17.3033353 13.9326923,17.3033353 C9.24895336,17.3033353 5.1746495,19.5601472 3.28128639,23.050028 Z M14.3446154,15.8165041 C17.3184563,15.8165041 19.7292308,13.4011748 19.7292308,10.4217151 C19.7292308,7.44225536 17.3184563,5.02692603 14.3446154,5.02692603 C11.3707744,5.02692603 8.96,7.44225536 8.96,10.4217151 C8.96,13.4011748 11.3707744,15.8165041 14.3446154,15.8165041 Z" id="Combined-Shape" fill="#D8D8D8"></path>
                    <path d="M14,28 C6.2680135,28 0,21.7319865 0,14 C0,6.2680135 6.2680135,0 14,0 C21.7319865,0 28,6.2680135 28,14 C28,21.7319865 21.7319865,28 14,28 Z M14,26.88 C21.1134276,26.88 26.88,21.1134276 26.88,14 C26.88,6.88657242 21.1134276,1.12 14,1.12 C6.88657242,1.12 1.12,6.88657242 1.12,14 C1.12,21.1134276 6.88657242,26.88 14,26.88 Z" id="Combined-Shape"></path>
                </g>
            </g>
        </g>
      </svg>
    ),
    [AvatarSize.xLarge]: () => (
      <svg width="60px" height="60px" viewBox="0 0 60 60" version="1.1">
        <g id="01-Elements/Avatar-1.1-/Single/XLarge/-Anonymous" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <circle id="Oval" fill="#979797" cx="30" cy="30" r="30"></circle>
            <path d="M7.03132798,49.3929172 C2.64336811,44.1663799 0,37.42081 0,30.0566818 C0,13.4568348 13.4314575,3.55271368e-15 30,3.55271368e-15 C46.5685425,3.55271368e-15 60,13.4568348 60,30.0566818 C60,37.8881933 57.0104478,45.0201381 52.1123401,50.3694772 C47.9923293,42.652942 39.6058749,37.0785757 29.8557692,37.0785757 C19.8191858,37.0785757 11.0885346,41.9146012 7.03132798,49.3929172 Z M30.7384615,33.8925088 C37.1109779,33.8925088 42.2769231,28.7168031 42.2769231,22.3322466 C42.2769231,15.94769 37.1109779,10.7719843 30.7384615,10.7719843 C24.3659452,10.7719843 19.2,15.94769 19.2,22.3322466 C19.2,28.7168031 24.3659452,33.8925088 30.7384615,33.8925088 Z" id="Combined-Shape" fill="#D8D8D8"></path>
            <path d="M30,60 C13.4314575,60 0,46.5685425 0,30 C0,13.4314575 13.4314575,0 30,0 C46.5685425,0 60,13.4314575 60,30 C60,46.5685425 46.5685425,60 30,60 Z M30,57.6 C45.2430591,57.6 57.6,45.2430591 57.6,30 C57.6,14.7569409 45.2430591,2.4 30,2.4 C14.7569409,2.4 2.4,14.7569409 2.4,30 C2.4,45.2430591 14.7569409,57.6 30,57.6 Z" id="Combined-Shape"></path>
        </g>
      </svg>
    )
  };
  return defaultAvatars[avatarSize];
}
