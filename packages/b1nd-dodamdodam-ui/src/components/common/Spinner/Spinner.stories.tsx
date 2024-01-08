import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Spinner } from "./Spinner";

export default {
  title: "Common-UI/Spinner",
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
);

export const PrimarySpinner = Template.bind({});

PrimarySpinner.args = {
  isAbsolute: false,
  isLoading: true,
};

export const AbsoluteSpinner = Template.bind({});

AbsoluteSpinner.args = {
  isAbsolute: true,
  isLoading: true,
};
