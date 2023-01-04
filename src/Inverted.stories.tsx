import { ComponentMeta, ComponentStory } from "@storybook/react";

import { default as InvertedButton } from "./Inverted";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: InvertedButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof InvertedButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InvertedButton> = (args) => (
  <InvertedButton {...args}>
    <p>Button</p>
  </InvertedButton>
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Inverted = Template.bind({});
Inverted.args = {
  disabled: false,
  shape: "rectangle",
};
