import React from "react";
export declare const chartType: {
    Line: string;
    Pie: string;
    Bar: string;
};
interface IChart {
    series: any;
    chartType?: string;
    colors?: string[];
    chartOptions?: any;
    tooltipOptions?: any;
}
declare const Chart: React.FC<IChart>;
export default Chart;
