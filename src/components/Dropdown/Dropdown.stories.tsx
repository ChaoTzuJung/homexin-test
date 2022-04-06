import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Dropdown } from "./Dropdown";
import { Option } from "./Option";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  subcomponents: { Option },
  decorators: [
    (Story) => (
      <div style={{ height: "160px" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} placeholder="Search">
    <Option value="Ant">Ant</Option>
    <Option value="Bear">Bear</Option>
    <Option value="Cat">Cat</Option>
  </Dropdown>
);

export const Default = Template.bind({});
export const Disabled = Template.bind({});
export const haveLabel = Template.bind({});

Disabled.args = {
  disabled: true,
};

haveLabel.args = {
  label: "主要服務縣市",
};
