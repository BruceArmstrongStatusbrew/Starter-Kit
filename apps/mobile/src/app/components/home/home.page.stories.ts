import {
  applicationConfig,
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { HomePage } from './home.page';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { appConfig } from '../../app.config';
import { PrimeNGWrapperComponent } from '../../app.component.stories';

const meta: Meta<HomePage> = {
  component: HomePage,
  decorators: [
    applicationConfig({
      providers: [...appConfig.providers],
    }),
    moduleMetadata({
      declarations: [],
      imports: [PrimeNGWrapperComponent],
    }),
    componentWrapperDecorator(
      (story) => `
        <primeng-wrapper>
          ${story}
        </primeng-wrapper>
      `
    ),
  ],
  title: 'HomePage',
};
export default meta;
type Story = StoryObj<HomePage>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/home.page works!/gi)).toBeTruthy();
  },
};
