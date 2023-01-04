import React from "react";
import ChipsPanel from "../../components/ChipsPanel";

export default {
  title: "UI/ChipsPanel",
  component: ChipsPanel,
};

const Template = (args) => <ChipsPanel {...args} />;

export const SimplePanel = Template.bind({});
SimplePanel.args = {
  data: { results: ["chip 1", "chip 2", "chip 3"] },
  title: "ChipsPanel simple",
};

export const PanelWithLink = Template.bind({});
PanelWithLink.args = {
  data: { other: 10, results: ["chip 1", "chip 2", "chip 3"] },
  title: "ChipsPanel with link",
  displayAsLinks: true,
};

export const PanelWithNoLink = Template.bind({});
PanelWithNoLink.args = {
  data: { other: 20, results: ["chip 1", "chip 2", "chip 3"] },
  title: "ChipsPanel with No Link",
  displayAsLinks: false,
};

export const PanelWithNoData = Template.bind({});
PanelWithNoData.args = {
  data: { results: [] },
  title: "ChipsPanel with no data",
  displayAsLinks: false,
};
