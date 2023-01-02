import React, { useState, useCallback, useEffect } from "react";
import getDefaultConfigByType from "../configs/chartsConfigs";
import { mergeObject } from "../../../utils";

const colors = ["#245293", "#5598D6", "#80D0F6", "#C2EAFE"];

interface IuseCharts {
  series: any;
  chartType: string;
  chartColors?: string[];
  chartOptions?: any;
  tooltipOptions?: any;
}
const useChart = ({
  series,
  chartColors = colors,
  chartType,
  chartOptions,
  tooltipOptions,
}: any) => {
  const [options, setOptions] = useState<any>(null);

  // const generateTooltip = (value, label, hasTZ) => {
  //   return (ReactDOMServer.renderToStaticMarkup(
  //     hasTZ
  //       ? <span className="af-highcharts-xAxis" title={value}>
  //           <span>{tzWithTick ? label : ''}</span>
  //           <svg height="7px" width="10px" class="tooltip-svg">
  //             <circle cx="3" cy="3" r="3" fill={yellow[800]} class="timezone-tooltip"/>
  //           </svg>
  //         </span>
  //       : <span class="af-highcharts-xAxis" title={value}>{label}</span>
  //   ))
  // };

  const validateOptions = (options: any) => {
    // const yAxisSeriesCount = [...new Set(options.series.map((x) => x.yAxis))].length;
    // const yAxisConfigCount = options.yAxis.length || Number(typeof options.yAxis === 'object');
    // if (options && (yAxisSeriesCount === yAxisConfigCount || !options.yAxis?.[0]?.visible)) return true;

    return options && Object.keys(options).length > 0;
  };

  const buildConfig = useCallback(() => {
    const chartConfig = getDefaultConfigByType(series, chartType, chartColors);

    return mergeObject({}, chartConfig, chartOptions);
  }, [series, chartColors, chartOptions, chartType, tooltipOptions]);

  useEffect(() => {
    if ((series && series.length > 0) || chartOptions) {
      const config = buildConfig();

      if (validateOptions(config)) setOptions(config);
    }
  }, [series]); // , chartOptions, buildConfig]);

  return {
    options,
  };
};

export default useChart;
