import { ComponentMeta, ComponentStory } from "@storybook/react";

import { default as SimpleButton } from "./Simple";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: SimpleButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SimpleButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SimpleButton> = (args) => (
  <SimpleButton {...args}>
    <p>Button</p>
  </SimpleButton>
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Simple = Template.bind({});
Simple.args = {
  disabled: false,
  shape: "rectangle",
};
