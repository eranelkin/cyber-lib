declare const getTooltipConfig: (series: any, tooltipType: string, colors?: string[]) => {
    tooltip: {
        backgroundColor: string;
        borderRadius: number;
        padding: number;
        formatter: () => string;
        positioner: (boxWidth: number, boxHeight: number, point: any) => {
            x: number;
            y: number;
        } | undefined;
    };
};
export default getTooltipConfig;
