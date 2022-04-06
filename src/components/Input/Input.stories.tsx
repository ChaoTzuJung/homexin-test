import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "./Input";

export default {
  title: "Components/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
export const Text = Template.bind({});
export const Number = Template.bind({});
export const Password = Template.bind({});
export const File = Template.bind({});
export const Tel = Template.bind({});

Default.args = {
  value: "text",
};

Text.args = {
  value: "text",
  type: "text",
};

Number.args = {
  value: 12,
  type: "number",
};

Password.args = {
  value: "text",
  type: "password",
};

File.args = {
  type: "file",
};

Tel.args = {
  type: "tel",
  value: "0938379357",
  placeholder: "0938-379-357",
};
