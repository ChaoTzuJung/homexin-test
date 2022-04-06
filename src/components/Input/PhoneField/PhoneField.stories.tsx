import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PhoneField } from "./PhoneField";

export default {
  title: "Components/Input/PhoneField",
  component: PhoneField,
} as ComponentMeta<typeof PhoneField>;

const Template: ComponentStory<typeof PhoneField> = (args) => (
  <PhoneField {...args} />
);

export const Default = Template.bind({});

Default.args = {
  label: "電話",
  value: "0938379357",
};
