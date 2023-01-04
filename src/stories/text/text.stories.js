import React from "react";
import Text from "../../components/Text";

export default {
  title: "UI/Text",
  component: Text,
  argTypes: {
    textColor: { control: "color" },
    textSize: { control: "number" },
  },
};

const Template = (args) => <Text {...args}>{args.text}</Text>;

export const TextCustom = Template.bind({});
TextCustom.args = {
  text: "Cyberpion Text",
};

export const BigSizeText = Template.bind({});
BigSizeText.args = {
  text: "Cyberpion Text",
  textSize: "50px",
  textColor: "blue",
  upper: true,
};
