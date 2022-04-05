import { ComponentStory, ComponentMeta } from "@storybook/react";
import { OutsideClicker } from "./OutsideClicker";

export default {
  title: "Components/OutsideClicker",
  component: OutsideClicker,
  decorators: [
    (Story) => (
      <span
        style={{
          display: "inline-block",
          padding: "4px",
          border: "1px solid black",
        }}
      >
        <Story />
      </span>
    ),
  ],
} as ComponentMeta<typeof OutsideClicker>;

const Template: ComponentStory<typeof OutsideClicker> = (args) => (
  <OutsideClicker {...args}>{args.children}</OutsideClicker>
);

export const Default = Template.bind({});

Default.args = {
  open: true,
  action: () => alert("Click Outside"),
  children: "Click Me!",
};
