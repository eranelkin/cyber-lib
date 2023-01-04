import React from "react";
import VerticalList from "../../components/VerticalList";

import "./vertical.scss";

const items = [
  {
    name: "NAME I",
    value: 20,
  },
  {
    name: "NAME II",
    value: 30,
  },
  {
    name: "NAME III",
    value: 40,
  },
];

export default {
  title: "UI/VerticalList",
  component: VerticalList,
};

const Template = (args) => (
  <div style={{ width: "500px" }}>
    <VerticalList {...args} />
  </div>
);

export const SimpleVerticalList = Template.bind({});
SimpleVerticalList.args = {
  titleTextSize: 20,
  totalText: "total",
  title: "VerticalList",
  items,
  displayTotal: false,
};
export const VerticalListWithClass = Template.bind({});
VerticalListWithClass.args = {
  titleTextSize: 18,
  totalText: "total",
  title: "VerticalList with additional className and total (not as text)",
  items,
  itemClassName: "additional-class",
  displayTotal: true,
  totalText: "total Text",
};

export const VerticalListWithLink = Template.bind({});
VerticalListWithLink.args = {
  titleTextSize: 18,
  totalText: "total",
  title: "VerticalList with additional className and total as link",
  items,
  displayTotal: true,
  displayAsLinks: true,
  totalText: "+ 100 Other - as link",
};

export const VerticalListLegend = Template.bind({});
VerticalListLegend.args = {
  titleTextSize: 20,
  totalText: "total",
  title: "VerticalList as Legend and format %",
  items: [
    {
      name: "NAME I",
      value: 20,
      color: "green",
    },
    {
      name: "NAME II",
      value: 30,
      color: "red",
    },
    {
      name: "NAME III",
      value: 40,
      color: "blue",
    },
  ],
  isLegend: true,
  displayTotal: true,
  displayAsLinks: true,
  totalText: "+ 100 Other - as link",
  formatType: "%",
  upperTitle: true,
};

const TemplateMulti = (args) => (
  <div style={{ width: "800px" }}>
    <VerticalList {...args} />
  </div>
);

export const VerticalListMultiColumn = TemplateMulti.bind({});
VerticalListMultiColumn.args = {
  titleTextSize: 20,
  totalText: "total",
  title: "VerticalList as Multi column",
  items: [
    {
      name: "NAME I",
      value: 20,
    },
    {
      name: "NAME II",
      value: 30,
    },
    {
      name: "NAME III",
      value: 40,
    },
    {
      name: "NAME IV",
      value: 25,
    },
    {
      name: "NAME V",
      value: 35,
    },
    {
      name: "NAME VI",
      value: 45,
    },
    {
      name: "NAME VII",
      value: 21,
    },
    {
      name: "NAME VIII",
      value: 31,
    },
    {
      name: "NAME IX",
      value: 42,
    },
  ],
  isLegend: true,
  displayTotal: true,
  displayAsLinks: false,
  totalText: "+ 299 Other - as TEXT",
  formatType: "%",
  isMultiColumns: true,
  upperTitle: true,
};
