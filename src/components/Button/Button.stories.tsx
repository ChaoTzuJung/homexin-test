import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args.children}</Button>
);

export const Default = Template.bind({});
export const ContainedButton = Template.bind({});
export const OutlinedButton = Template.bind({});
export const ShadowButton = Template.bind({});
export const TextButton = Template.bind({});

Default.args = {
  children: "我是Default按鈕",
};

ContainedButton.args = {
  children: "我是Contained按鈕",
  variant: "contained",
};

OutlinedButton.args = {
  children: "我是Outline按鈕",
  variant: "outlined",
};

ShadowButton.args = {
  children: "我是Shadow按鈕",
  variant: "shadow",
};

TextButton.args = {
  children: "我是Text按鈕",
  variant: "text",
};
