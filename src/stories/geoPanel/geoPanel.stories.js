import React from "react";
import GEOPanel from "../../components/GEOPanel";

export default {
  title: "UI/GEOPanel",
  component: GEOPanel,
};

const Template = (args) => <GEOPanel {...args} />;

const data = {
  results: [
    {
      us: 11893,
    },
    {
      br: 589,
    },
  ],
  count: 14925,
};
export const SimpleGEO = Template.bind({});
SimpleGEO.args = {
  orgCountries: data,
  externalCountries: data,
};
