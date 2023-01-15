import React from "react";
import RiskIndicator from "../../components/RiskIndicator";

export default {
  title: "UI/RiskIndicator",
  component: RiskIndicator,
};

const Template = (args) => <RiskIndicator {...args} />;

export const RiskScore = Template.bind({});
RiskScore.args = {
  type: "ranks",
  size: "b",
  letter: "A",
  color: "#fd2f2f"
};

export const RiskLegend = Template.bind({});
RiskLegend.args = {
  type: "legend",
  color: "#f64a8a",
};
