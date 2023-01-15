import { Meta, Story } from "@storybook/react";
import {Chart, chartType } from "../../components/charts";

type ChartProps = {
  series: object[] | number[];
  chartOptions?: any;
  colors?: string[];
  chartType?: string;
};

const meta: Meta = {
  title: "UI/Charts",
  component: Chart,
  argTypes: {
    series: {
      control: {
        type: "object",
      },
      defaultValue: [{ y: 40 }, { y: 30 }, { y: 20 }, { y: 10 }],
    },
  },
};

export default meta;

const Template: Story<ChartProps> = (args) => <Chart {...args} />;

// export const SimpleChart = Template.bind({});
// SimpleChart.args = {
//   series: [{ y: 40 }, { y: 30 }, { y: 20 }, { y: 10 }],
// };

// export const ChartWithColors = Template.bind({});
// ChartWithColors.args = {
//   colors: ["#09AE13", "#7BCB27", "#C1E035", "#E0B935"],
// };

// const chartOptions = {
//   title: {
//     text: "Custom Options",
//   },
//   chart: { width: 220, height: 230, marginLeft: 0, marginTop: 50 },
// };
// export const ChartWithCustomOptions = Template.bind({});
// ChartWithCustomOptions.args = {
//   chartOptions,
// };

// export const BarChart = Template.bind({});
// BarChart.args = {
//   chartType: chartType.Bar,
//   series: [10, 9, 8, 7, 6, 5, 4],
// };

// export const BarChartCustomOptions = Template.bind({});
// BarChartCustomOptions.args = {
//   chartType: chartType.Bar,
//   series: [10, 9, 8, 7, 6, 5, 4],
//   chartOptions: {
//     chart: { width: 370, height: 230, marginLeft: 35 },
//   },
//   colors: [
//     "#FFE2E1",
//     "#FFE2E1",
//     "#F6BDBB",
//     "#F6BDBB",
//     "#EF827F",
//     "#EF827F",
//     "#EB3323",
//     "#EB3323",
//   ],
// };

// export const LineChartCustomOptions = Template.bind({});
// LineChartCustomOptions.args = {
//   chartType: chartType.Line,
//   series: [10, 9, 15, 7, 2, 5, 4],
//   chartOptions: {
//     chart: { width: 470, height: 230 },
//   },
// };

const data = [
  {
    name: 'size',
    data: [10,4,7,2,9,4,1],
    id: 'size',
    series_type: 'size',
    visible: true,
    color: '#22FF44',
  },
  {
    name: 'reach',
    data: [15,8,4,1,2,4,10],
    id: 'reach',
    series_type: 'reach',
    visible: true,
    color: '#555666',
  }
]
export const LinesChartCustomOptions = Template.bind({});
LinesChartCustomOptions.args = {
  chartType: chartType.Line,
  series: data,
  chartOptions: {
    chart: { width: 670, height: 300 },
  },
};
