export const importExample = `import { TextField } from 'wix-ui-tpa/TextField';`;

export const placeholder = `
<TextField placeholder="Placeholder Text"/>
`;

export const value = `
<TextField value="Test text" />
`;

export const success = `
<TextField success value="Test text" />
`;

export const successWithIcon = `
<TextField success successIcon value="Test text" />
`;

export const error = `
<TextField error value="Test text" />
`;

export const errorWithErrorMessage = `
<TextField error errorMessage="TestError" value="Test text" />
`;

export const clearButton = `
    class TextFieldExample extends React.Component {
      state = {
        value: 'Hello',
      };
    
      _onClearButtonClick = () => this.setState({ value: '' });
      _onChange = (e) => this.setState({value: e.target.value })
    
      render() {
        const { value } = this.state;
        
        return (
          <TextField placeholder="Placeholder Text" value={value} withClearButton onClear={this._onClearButtonClick} onChange={this._onChange} />
        );
      }
    }
`;

export const customSuffix = `
    <TextField suffix={<Calendar />} value="Test text" />
`;

export const customSuffixAndError = `
    <TextField error errorMessage="TestError" suffix={<Calendar />} value="Test text" />
`;

export const lineTheme = `
<TextField theme="line"  value="Test text" />
`;

export const lineThemeSuccess = `
<TextField success theme="line"  value="Test text" />
`;

export const lineThemeSuccessWithIcon = `
<TextField success successIcon theme="line"  value="Test text" />
`;

export const lineThemeError = `
<TextField error theme="line" value="Test text" />
`;

export const lineThemeErrorMessage = `
<TextField error errorMessage="Test text" theme="line" value="Test text" />
`;
