import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TextField } from "./TextField";

export default {
  title: "Components/Input/TextField",
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Default = Template.bind({});
export const BankCode = Template.bind({});
export const BankAccount = Template.bind({});
export const Required = Template.bind({});

Default.args = {
  label: "姓名",
  value: "李姍姍",
};

BankCode.args = {
  label: "銀行代碼",
  value: "812",
};

BankAccount.args = {
  label: "銀行帳號",
  value: "03112340210583",
};

Required.args = {
  label: "銀行帳號",
  value: "03112340210583",
  required: true,
  error: true,
  helperText: "此欄位為必填",
};
