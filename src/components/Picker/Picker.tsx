import * as React from 'react';
import { Text } from '../Text';
// import ChevronRight from 'wix-ui-icons-common/ChevronRight';
//import ChevronLeft from 'wix-ui-icons-common/ChevronLeft';
import { ReactComponent as ChevronLeft } from '../../assets/icons/ChevronLeft.svg';
import { ReactComponent as ChevronRight } from '../../assets/icons/ChevronRight.svg';
import { IconButton } from '../IconButton';
import styles from './Picker.st.css';

export interface PickerProps {
  value: any;
  previousClickHandler(): void;
  nextClickHandler(): void;
  arrowsSize?: string;
}

interface DefaultProps {
  arrowsSize: string;
}

/** Picker */
export class Picker extends React.Component<PickerProps> {
  static defaultProps: DefaultProps = {
    arrowsSize: '20px',
  };

  render() {
    const {
      previousClickHandler,
      value,
      nextClickHandler,
      arrowsSize,
      ...rest
    } = this.props;

    return (
      <div {...styles('root', {}, rest)}>
        <IconButton
          {...styles('arrowIcon', {})}
          icon={<ChevronLeft height={arrowsSize} width={arrowsSize} />}
        />
        <Text className={styles.value}>{value}</Text>
        <IconButton
          {...styles('arrowIcon', {})}
          icon={<ChevronRight height={arrowsSize} width={arrowsSize} />}
        />
      </div>
    );
  }
}
