// import { chartType as types } from "../index";

const types = {
  Line: "line",
  Pie: "pie",
  Bar: "bar",
};
const pieConfig = (series: any, colors?: string[]) => ({
  title: {
    text: "",
  },
  accessibility: {
    enabled: false,
  },
  exporting: {
    enabled: false,
  },
  credits: {
    enabled: false,
  },
  legend: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: 0,
    plotShadow: false,
    width: 130,
    height: 130,
    margin: 0,
  },
  plotOptions: {
    pie: {
      borderWidth: 0,
      dataLabels: {
        enabled: false,
      },
      colors: colors,
    },
  },
  series: [
    {
      type: "pie",
      innerSize: "82%",
      data: series,
    },
  ],
});

const barsConfig = (series: any, colors?: string[]) => ({
  colors,
  accessibility: {
    enabled: false,
  },
  xAxis: {
    categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    labels: {
      style: {
        fontSize: "9px",
      },
    },
  },
  credits: {
    enabled: false,
  },
  title: {
    text: "",
  },
  yAxis: {
    title: {
      enabled: true,
      text: "CVEs",
      style: {
        fontSize: "9px",
      },
    },
    labels: {
      align: "right",
      x: 0,
      style: {
        fontSize: "9px",
      },
    },
    gridLineDashStyle: "longdash",
  },
  plotOptions: {
    bar: {
      borderWidth: 0,
      grouping: false,
    },
    series: {
      pointWidth: 14,
    },
    accessibility: {
      enable: false,
    },
  },
  series: [
    {
      type: "column",
      dashStyle: "Dot",
      name: "CVES",
      colorByPoint: true,
      data: series,
      showInLegend: false,
    },
  ],
});

const lineConfig = (series: any, colors?: string[]) => ({
  credits: { enabled: false },
  title: { text: "Line Chart" },
  legend: { enabled: false },
  plotOptions: {
    series: {
      marker: {
        fillColor: "#FFFFFF",
        lineWidth: 3,
        lineColor: null,
        radius: 5,
      },
    },
  },
  xAxis: {
    lineColor: "transperent",
    // labels: { enabled: false },
    tickLength: 0,
    plotLines: [
      {
        color: "grey",
        width: 1,
        value: 4,
        dashStyle: "dash",
      },
    ],
  },
  yAxis: {
    visible: true,
  },
  series: [
    {
      data: series,
    },
  ],
  chart: { marginLeft: 30 },
});

// const lineWithGradientConfig = (series) => ({
//   chart: {
//     type: "area",
//   },
//   xAxis: {
//     tickLength: 0,
//   },

//   plotOptions: {
//     series: {
//       marker: {
//         fillColor: "#FFFFFF",
//         lineWidth: 3,
//         lineColor: null,
//         radius: 5,
//       },
//       fillColor: {
//         linearGradient: [0, 0, 0, 300],
//         stops: [
//           [0, '#BBC233'],
//           [
//             1,
//             "#AA2B12")
//               .setOpacity(0)
//               .get("rgba"),
//           ],
//         ],
//       },
//     },
//   },

//   series: [
//     {
//       data: series,
//     },
//   ],
// });

// const lineWithSPLineConfig = (series) => ({
//   chart: {
//     type: 'area'
//   },
//   xAxis: {
//     tickLength: 0
//   },

//   plotOptions: {
//     series: {
//       marker: {
//         fillColor: '#FFFFFF',
//         lineWidth: 3,
//         lineColor: null,
//         radius: 5
//       },
//       fillColor: {
//         linearGradient: [0, 0, 0, 300],
//         stops: [
//           [0, Highcharts.getOptions().colors[0]],
//           [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
//         ]
//       }
//     }
//   },

//   series: [
//     {
//       data: [20, 30.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
//     },
//     {
//       type: 'spline',
//       name: 'Average',
//       data: [47, 120, 160, 200, 220, 240, 265, 280, 290, 290, 290],
//       marker: {
//         enabled: false
//       }
//     }
//   ]
// });

const getDefaultConfigByType = (
  series: any,
  chartType: string,
  colors?: string[]
) => {
  if (chartType === types.Pie) return pieConfig(series, colors);
  if (chartType === types.Bar) return barsConfig(series, colors);
  if (chartType === types.Line) return lineConfig(series, colors);
};

export default getDefaultConfigByType;
