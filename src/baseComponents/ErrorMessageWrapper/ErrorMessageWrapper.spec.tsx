import * as React from 'react';
import {errorMessageWrapperDriverFactory} from './ErrorMessageWrapper.driver';
import {ErrorMessageWrapper} from './';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {mount} from 'enzyme';
import {ErrorMessageWrapperProps} from './ErrorMessageWrapper';

const generateDefaultProps = () => {
  return {
    disabled: false,
    error: false,
    errorMessage: '',
    inputValue: '',
    render: jest.fn()
  };
};

describe('ErrorMessageWrapper', () => {
  const createDriver = createDriverFactory(errorMessageWrapperDriverFactory);

  let props: ErrorMessageWrapperProps = generateDefaultProps();

  beforeEach(() => {
    props = generateDefaultProps();
  });

  it('should render', () => {
    const driver = createDriver(<ErrorMessageWrapper {...props}/>);
    expect(driver.exists()).toBeTruthy();
    expect(driver.hasErrorMessage()).toBeFalsy();
  });

  describe('empty state', () => {
     it('should be in empty state', () => {
       const driver = createDriver(<ErrorMessageWrapper {...props}/>);
       expect(driver.hasEmptyState()).toBeTruthy();
       expect(props.render).toHaveBeenCalledWith({error: false, empty: true});
     });

    it('should not be in empty state', () => {
      props.inputValue = 'some value';
      const driver = createDriver(<ErrorMessageWrapper {...props}/>);
      expect(driver.hasEmptyState()).toBeFalsy();
      expect(props.render).toHaveBeenCalledWith({error: false, empty: false});
    });
  });

  describe('show error message', () => {
    beforeEach(() => {
      props.error = true;
      props.errorMessage = 'some error';
    });

    it('should display an error message', () => {
      const driver = createDriver(<ErrorMessageWrapper {...props}/>);
      expect(driver.hasErrorMessage()).toBeTruthy();
      expect(driver.getErrorMessage()).toEqual('some error');
      expect(props.render).toHaveBeenCalledWith({error: true, empty: true});
    });

    it('should not display an error message when disabled', () => {
      props.disabled = true;
      const driver = createDriver(<ErrorMessageWrapper {...props}/>);
      expect(driver.hasErrorMessage()).toBeFalsy();
      expect(props.render).toHaveBeenCalledWith({error: false, empty: true});
    });
  });
});
