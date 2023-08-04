import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Table, TableScrollWrapper, TBody, TD, TH, THead, TR } from "./Table";

export default {
  title: "ui/Table",
  component: Table,
  argTypes: {},
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = () => (
  <>
    <Table customStyle={{ width: 950 }}>
      <THead>
        <TR>
          <TH customStyle={{ minWidth: 175 }}>회원ID</TH>
          <TH customStyle={{ minWidth: 210 }}>이름</TH>
          <TH customStyle={{ minWidth: 180 }}>날짜</TH>
          <TH customStyle={{ minWidth: 160 }}>직급</TH>
          <TH customStyle={{ minWidth: "100%", textAlign: "right" }}>
            승인 / 거절
          </TH>
        </TR>
      </THead>
    </Table>
  </>
);

export const Common = Template.bind({});
