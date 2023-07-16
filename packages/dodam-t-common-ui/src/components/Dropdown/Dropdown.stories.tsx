import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Dropdown from "./Dropdown";

export default {
  title: "ui/Dropdown",
  component: Dropdown,
  argTypes: {},
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Common = Template.bind({});
Common.args = {
  children: (
    <>
      <option value="1">전체 보기</option>
      <option value="2">대기중</option>
      <option value="3">거절됨</option>
      <option value="4">승인됨</option>
      <option value="5">복귀</option>
    </>
  ),
};
