import React from "react";
import DataPanel from "../../components/DataPanel";

export default {
  title: "UI/DataPanel",
  component: DataPanel,
};

const Template = (args) => <DataPanel {...args} />;

export const SimpleDataPanel = Template.bind({});
SimpleDataPanel.args = {
  title: "Data Panel",
  titleTextSize: 30,
  textSize: 20,
  upper: true,
  children: "12345",
};

export const DataPanelMore = Template.bind({});
DataPanelMore.args = {
  title: "Data Panel with more props",
  titleTextSize: 30,
  textSize: 20,
  upper: true,
  children: "33345",
  bgColor: "red",
};

export const DataPanelWithRightText = Template.bind({});
DataPanelWithRightText.args = {
  title: "Data Panel with right text and bold title",
  titleTextSize: 40,
  titleWeight: 600,
  textSize: 30,
  upper: true,
  children: "23456",
  rightText: "Rigth Text",
};
