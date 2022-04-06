import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FileField } from "./FileField";

export default {
  title: "Components/Input/FileField",
  component: FileField,
  argTypes: {
    value: { type: "number" },
  },
} as ComponentMeta<typeof FileField>;

const Template: ComponentStory<typeof FileField> = (args) => (
  <FileField {...args} />
);

export const Default = Template.bind({});
export const withPreview = Template.bind({});

Default.args = {
  label: "點擊上傳身分證照",
};

withPreview.args = {
  label: "點擊上傳身分證照",
  preview: "https://fakeimg.pl/327x184/",
};
