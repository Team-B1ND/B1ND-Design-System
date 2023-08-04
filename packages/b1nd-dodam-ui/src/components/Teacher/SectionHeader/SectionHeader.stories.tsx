import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SectionHeader } from "./SectionHeader";

export default {
  title: "ui/SectionHeader",
  component: SectionHeader,
  argTypes: {},
} as ComponentMeta<typeof SectionHeader>;

const Template: ComponentStory<typeof SectionHeader> = (args) => (
  <SectionHeader {...args} />
);

export const Agree = Template.bind({});
Agree.args = {
  subTitle:
    "가입 신청자가 표시됩니다 가입자는 승인 완료 후 서비스를 이용 할 수 있습니다",
  title: "가입 승인",
};
