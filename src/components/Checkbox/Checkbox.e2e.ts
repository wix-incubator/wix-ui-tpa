import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { checkboxTestkitFactory } from '../../testkit/protractor';
import { StoryCategory } from '../../../stories/storyHierarchy';

const hoveredColor = 'rgb(0, 0, 0)';
const errorColor = 'rgb(223, 49, 49)';

describe('checkbox', () => {
  const storyUrl = createStoryUrl({
    kind: StoryCategory.TESTS,
    story: 'Checkbox',
    withExamples: true,
  });
  const dataHook = 'storybook-e2e-Checkbox';
  const dataHookWithError = 'storybook-e2e-CheckboxError';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = checkboxTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find Checkbox');
    expect((await driver.element()).isDisplayed()).toBe(true);
  });

  it('should hover checkbox', async () => {
    const driver = checkboxTestkitFactory({ dataHook });

    await waitForVisibilityOf(await driver.element(), 'Cannot find Checkbox');

    await driver.hoverCheckbox();

    expect(await driver.getBorderColor()).toBe(hoveredColor);
  });

  it('should show error border-color', async () => {
    const driver = checkboxTestkitFactory({ dataHook: dataHookWithError });

    await waitForVisibilityOf(await driver.element(), 'Cannot find Checkbox');

    expect(await driver.getBorderColor()).toBe(errorColor);
  });

  it('should show hovered border with error state', async () => {
    const driver = checkboxTestkitFactory({ dataHook: dataHookWithError });

    await waitForVisibilityOf(await driver.element(), 'Cannot find Checkbox');

    await driver.hoverCheckbox();

    expect(await driver.getBorderColor()).toBe(hoveredColor);
  });
});
