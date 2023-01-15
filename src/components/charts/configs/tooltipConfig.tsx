// @ts-nocheck
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import {Tooltip} from 'components';

const getTooltipItems = (series: any, filteredType: string[]) =>
    series
      .filter((s) => !!s.data.length && s.visible && (!filteredType || (filteredType.includes(s.series_type))))
      .map((s) => ({
        id: s.id,
        color: s.color,
        y: [{4: [2,4]}],  // s?.data.map((point) => ({ [point[0]]: point[1] })),
        key: s.name,
        type: s.series_type
      }));

const getTooltipConfig = (
  series: any,
  tooltipType: string,
  colors?: string[]
) => {
  const tooltipItems = getTooltipItems(series);
  return {
    tooltip: {
      backgroundColor: '#FCFFC5',
      borderRadius: 10,
      padding: 20,
  
      formatter: function (): string {
        const points = tooltipItems.reduce((all: any, curr: any) => {
          const ttItem = curr.y.find((item: any) => item[this.x]);
          return [...all, { ...curr, y: ttItem ? ttItem[this.x] : null }];
        }, []);
        // // const date = this.points?.[0]?.key;
        const date = new Date();
        // console.log(points)
        
        // return "<div><div>A</div><div>B</div></div>"
        return renderToStaticMarkup(
          <div><Tooltip points={points} date={new Date()}/></div>
        );
      },
      // // eslint-disable-next-line object-shorthand
      positioner: function (boxWidth: number, boxHeight: number, point: any) {
        try {
          return { x: point.plotX - boxWidth + 15, y: point.plotY - boxHeight + 40 };
        } catch (err) {}
      }
    },
}}

export default getTooltipConfig;