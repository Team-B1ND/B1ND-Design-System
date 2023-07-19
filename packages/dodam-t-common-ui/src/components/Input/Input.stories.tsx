import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "./Input";
export default {
  title: "ui/Input",
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Common = Template.bind({});
Common.args = {};
