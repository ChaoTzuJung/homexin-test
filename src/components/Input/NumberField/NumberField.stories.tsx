import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NumberField } from "./NumberField";

export default {
  title: "Components/Input/NumberField",
  component: NumberField,
  argTypes: {
    value: { type: "number" },
  },
} as ComponentMeta<typeof NumberField>;

const Template: ComponentStory<typeof NumberField> = (args) => (
  <NumberField {...args} />
);

export const Default = Template.bind({});
export const Height = Template.bind({});
export const Weight = Template.bind({});

Default.args = {
  label: "身高",
  value: 180,
};

Height.args = {
  label: "身高",
  value: 158,
  unit: "公分",
  maxLength: 300,
  minLength: 100,
  required: true,
};

Weight.args = {
  label: "體重",
  value: 47,
  unit: "公斤",
  maxLength: 200,
  minLength: 20,
  required: true,
};
