import { Meta, Story } from "@storybook/react";
type ChartProps = {
    series: object[] | number[];
    chartOptions?: any;
    colors?: string[];
    chartType?: string;
};
declare const meta: Meta;
export default meta;
export declare const SimpleChart: Story<ChartProps>;
export declare const ChartWithColors: Story<ChartProps>;
export declare const ChartWithCustomOptions: Story<ChartProps>;
export declare const BarChart: Story<ChartProps>;
export declare const BarChartCustomOptions: Story<ChartProps>;
export declare const LineChartCustomOptions: Story<ChartProps>;
