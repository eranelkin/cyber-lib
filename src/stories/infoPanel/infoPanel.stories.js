import React from "react";
import InfoPanel from "../../components/InfoPanel";

export default {
  title: "UI/InfoPanel",
  component: InfoPanel,
};

const Template = (args) => <InfoPanel {...args}>InfoPanel Text</InfoPanel>;

export const SimpleInfoPanel = Template.bind({});
SimpleInfoPanel.args = {
  title: "InfoPanel Title",
  width: 300,
  height: 80,
  textColor: "blue",
  textSize: 24,
  bgColor: "green",
  borderRadius: "10px",
};

export const InfoPanelWithStyle = Template.bind({});
InfoPanelWithStyle.args = {
  title: "InfoPanel Title",
  width: 500,
  height: 100,
  textColor: "yellow",
  textSize: 24,
  bgColor: "linear-gradient(180deg, #1A90DE 0%, #103772 100%)  ",
  borderRadius: "10px",
  style: {
    padding: "20px 20px 20px 25px",
    marginLeft: 48,
    marginTop: 10,
  },
};

export const InfoPanelRadius = Template.bind({});
InfoPanelRadius.args = {
  title: "InfoPanel with different borderRadius",
  width: 400,
  height: 40,
  textColor: "#FFFFFF",
  textSize: 24,
  bgColor: "linear-gradient(180deg, #D63E3E 0%, #B41111 100%)",
  borderRadius: "10px 0 0 10px",
  style: {
    padding: "20px 20px 20px 25px",
    marginLeft: 48,
    marginTop: 10,
  },
};
