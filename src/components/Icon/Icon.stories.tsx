import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Icon } from "./Icon";

export default {
  title: "Components/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const SearchIcon = Template.bind({});
export const ArrowIcon = Template.bind({});

SearchIcon.args = {
  name: "search",
  color: "#CED1D5",
  size: 16,
};

ArrowIcon.args = {
  name: "arrow",
  color: "#CCCFD3",
  size: 14,
};
