import React from "react";
import NA from "../../components/NA";
import CustomDocumentation from '../CustomDocumentation/CustomDocumentation'
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';

export default {
  title: "UI/NA",
  component: NA,
  parameters: {
    docs: {
      page: () => <CustomDocumentation dataDoc={null} />
    },
  },
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
