import { TextArea, TextAreaProps } from '.';
import Registry from '@ui-autotools/registry';

const TextAreaMetadata = Registry.getComponentMetadata(TextArea);

const minPropsSet: TextAreaProps = {
  onChange(): any {},
  value: 'Test value',
  ariaLabel: 'Test',
};

TextAreaMetadata.nonReactStrictModeCompliant = true;

TextAreaMetadata.addSim({
  title: 'render',
  props: minPropsSet,
});
