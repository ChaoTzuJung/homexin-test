import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Card } from "./Card";

export default {
  title: "Components/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>{args.children}</Card>
);

export const Default = Template.bind({});
export const CustomColorCard = Template.bind({});
export const HaveShadowCard = Template.bind({});
export const HaveBorderCard = Template.bind({});

Default.args = {
  children: "我是卡片",
  color: "#FFF",
};

CustomColorCard.args = {
  children: "我是客製化卡片",
  color: "#F1F3F6",
};

HaveShadowCard.args = {
  children: "我是客製化卡片",
  color: "#F1F3F6",
  type: "border",
};

HaveBorderCard.args = {
  children: "我是客製化卡片",
  type: "shadow",
};
