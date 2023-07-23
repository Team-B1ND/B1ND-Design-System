import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SearchBar } from "./SearchBar";
export default {
  title: "ui/Input",
  component: SearchBar,
  argTypes: {},
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar {...args} />
);

export const Common = Template.bind({});
Common.args = {};
