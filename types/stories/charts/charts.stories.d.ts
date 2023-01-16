import { Meta, Story } from "@storybook/react";
type ChartProps = {
    series: object[] | number[];
    chartOptions?: any;
    colors?: string[];
    chartType?: string;
};
declare const meta: Meta;
export default meta;
export declare const LinesChartCustomOptions: Story<ChartProps>;
