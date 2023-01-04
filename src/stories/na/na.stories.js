import React from "react";
import NA from "../../components/NA";

export default {
  title: "UI/NA",
  component: NA,
};

const Template = (args) => <NA {...args} />;

export const SimpleNA = Template.bind({});
SimpleNA.args = {
  textSize: 30,
};

export const NAWithStyle = Template.bind({});
NAWithStyle.args = {
  textSize: 34,
  style: { color: "green" },
};
