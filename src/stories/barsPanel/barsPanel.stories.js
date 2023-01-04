import React from "react";
import BarsPanel from "../../components/BarsPanel";
import "./bars.scss";

export default {
  title: "UI/BarsPanel",
  component: BarsPanel,
};

const Template = (args) => <BarsPanel {...args} />;

export const SimplePanel = Template.bind({});
SimplePanel.args = {
  title: "Bars Panel Simple",
  barsData: [
    {
      name: "Bar I",
      value: 10,
    },
    {
      name: "Bar II",
      value: 20,
    },
    {
      name: "Bar III",
      value: 30,
    },
  ],
};

export const PanelWithClass = Template.bind({});
PanelWithClass.args = {
  title: "Bars Panel with additional className for styling",
  barsData: [
    {
      name: "Bar I",
      value: 90,
    },
    {
      name: "Bar II",
      value: 100,
    },
    {
      name: "Bar III",
      value: 120,
    },
  ],
  itemsClassName: "additional-class",
};
