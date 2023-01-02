import React, { useEffect, useState, useCallback } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import getDefaultConfigByType from "../configs/chartsConfigs";
import { mergeObject } from "../../../utils";

export const chartType = {
  Line: "line",
  Pie: "pie",
  Bar: "bar",
};

interface IChart {
  series: any;
  chartType?: string;
  colors?: string[];
  chartOptions?: any;
  tooltipOptions?: any;
}
const Chart: React.FC<IChart> = ({
  series,
  chartOptions,
  colors,
  chartType = "pie",
  tooltipOptions,
}) => {
  const buildConfig = useCallback(() => {
    const chartConfig = getDefaultConfigByType(series, chartType, colors);

    return mergeObject({}, chartConfig, chartOptions);
  }, [series, colors, chartOptions, chartType, tooltipOptions]);

  return <HighchartsReact highcharts={Highcharts} options={buildConfig()} />;
};

export default Chart;
