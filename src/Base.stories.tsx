import { ComponentMeta, ComponentStory } from "@storybook/react";

import { default as BaseButton } from "./Base";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: BaseButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BaseButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BaseButton> = (args) => (
  <BaseButton {...args}>
    <p>Button Long enough</p>
  </BaseButton>
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Base = Template.bind({});
Base.args = {
  disabled: false,
  shape: "rectangle",
};
