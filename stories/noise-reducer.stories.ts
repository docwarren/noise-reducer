import { html, TemplateResult } from 'lit';
import '../src/noise-reducer.js';

export default {
  title: 'NoiseReducer',
  component: 'noise-reducer',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ header, backgroundColor = 'white' }: ArgTypes) => html`
  <noise-reducer style="--noise-reducer-background-color: ${backgroundColor}" .header=${header}></noise-reducer>
`;

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
