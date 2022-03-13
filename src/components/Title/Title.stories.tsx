import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Title } from "./Title";

export default {
  title: "Components/Title",
  component: Title,
  argsType: {},
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => (
  <Title {...args}>{args.children}</Title>
);

export const Default = Template.bind({});

Default.args = {
  children: "副標題",
};
