import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, ButtonWrapper } from "./Button";

export default {
  title: "ui/Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const onClick = () => {
  console.log("hi");
};

const Template: ComponentStory<typeof Button> = () => (
  <ButtonWrapper>
    <Button onClick={onClick} ButtonType="agree">
      수락
    </Button>
    <Button onClick={onClick} ButtonType="disagree">
      거절
    </Button>
  </ButtonWrapper>
);

export const Agree = Template.bind({});
Agree.args = {
  children: "수락",
  ButtonType: "agree",
};

export const Agreed = Template.bind({});
Agreed.args = {
  children: "복귀 처리",
  ButtonType: "agreed",
};

export const Disagree = Template.bind({});
Disagree.args = {
  children: "거절",
  ButtonType: "disagree",
};

export const Disagreed = Template.bind({});
Disagreed.args = {
  children: "승인 취소",
  ButtonType: "disagreed",
};

export const Cancel = Template.bind({});
Cancel.args = {
  children: "거절됨",
  ButtonType: "cancel",
};
