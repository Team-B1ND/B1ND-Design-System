import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "ui/Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Agree = Template.bind({});
Agree.args = {
  children: "수락",
  type: "agree",
};

export const Agreed = Template.bind({});
Agreed.args = {
  children: "복귀 처리",
  type: "agreed",
};

export const Disagree = Template.bind({});
Disagree.args = {
  children: "거절",
  type: "disagree",
};

export const Disagreed = Template.bind({});
Disagreed.args = {
  children: "승인 취소",
  type: "disagreed",
};

export const Cancel = Template.bind({});
Cancel.args = {
  children: "거절됨",
  type: "cancel",
};
