declare const getDefaultConfigByType: (series: any, chartType: string, colors?: string[]) => {
    title: {
        text: string;
    };
    accessibility: {
        enabled: boolean;
    };
    exporting: {
        enabled: boolean;
    };
    credits: {
        enabled: boolean;
    };
    legend: {
        enabled: boolean;
    };
    chart: {
        plotBackgroundColor: null;
        plotBorderWidth: number;
        plotShadow: boolean;
        width: number;
        height: number;
        margin: number;
    };
    plotOptions: {
        pie: {
            borderWidth: number;
            dataLabels: {
                enabled: boolean;
            };
            colors: string[] | undefined;
        };
    };
    series: {
        type: string;
        innerSize: string;
        data: any;
    }[];
} | {
    colors: string[] | undefined;
    accessibility: {
        enabled: boolean;
    };
    xAxis: {
        categories: number[];
        labels: {
            style: {
                fontSize: string;
            };
        };
    };
    credits: {
        enabled: boolean;
    };
    title: {
        text: string;
    };
    yAxis: {
        title: {
            enabled: boolean;
            text: string;
            style: {
                fontSize: string;
            };
        };
        labels: {
            align: string;
            x: number;
            style: {
                fontSize: string;
            };
        };
        gridLineDashStyle: string;
    };
    plotOptions: {
        bar: {
            borderWidth: number;
            grouping: boolean;
        };
        series: {
            pointWidth: number;
        };
        accessibility: {
            enable: boolean;
        };
    };
    series: {
        type: string;
        dashStyle: string;
        name: string;
        colorByPoint: boolean;
        data: any;
        showInLegend: boolean;
    }[];
} | {
    credits: {
        enabled: boolean;
    };
    title: {
        text: string;
    };
    legend: {
        enabled: boolean;
    };
    plotOptions: {
        series: {
            marker: {
                fillColor: string;
                lineWidth: number;
                lineColor: null;
                radius: number;
            };
        };
    };
    xAxis: {
        lineColor: string;
        tickLength: number;
        plotLines: {
            color: string;
            width: number;
            value: number;
            dashStyle: string;
        }[];
    };
    yAxis: {
        visible: boolean;
    };
    series: {
        data: any;
    }[];
    chart: {
        marginLeft: number;
    };
} | undefined;
export default getDefaultConfigByType;
