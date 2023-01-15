import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import RiskIndicator from 'components/RiskIndicator';
// import MetricsSizeIndicator from './MetricsSizeIndicator';
// import { metricsReachColors, metricsSizeColors } from '../../../consts/colors';

// const availableColors = Object.values(metricsReachColors);

// const parseTooltipValue = Intl.NumberFormat(Translate.currentLocale(), {
//   notation: 'compact',
//   minimumFractionDigits: 1,
//   maximumFractionDigits: 1
// });

interface ITooltipRow {
  point: any;
}
const TooltipRow: React.FC<ITooltipRow> = ({ point }) => (
  <Grid container direction="row" >
    <Grid item>
      <RiskIndicator type="legend" size="b" color="#f64a8a" />
    </Grid>
    <Grid item >
      <Typography variant="body1" component="span">
        {point.key}
      </Typography>
    </Grid>
    <Grid item >
      <Typography variant="body1" component="span" >
        {/* {point.y ? parseTooltipValue.format(Number(point.y)) : 'N/A'} */}
        {point.y ? point.y : 'N/A'}
      </Typography>
    </Grid>
  </Grid>
);
interface ITooltip {
  date: any,
  points: any;
}
const Tooltip: React.FC<ITooltip> = ({ date, points }) => {
  const p = points.filter((p: any) => p.type === 'reach');
  console.log(p)
  // const formattedDate = new Date(date).toLocaleDateString(Translate.currentLocale(), {
  //   year: 'numeric',
  //   month: 'short',
  //   day: 'numeric'
  // });
  return (
    <Paper >
      <Grid container direction="column">
        <Grid item>
          <Typography variant="body1">
            {/* {formattedDate} */}
            {/* {new Date()} */}
            05-01-2023
          </Typography>
        </Grid>
        {p?.length > 0 && (
          <Grid item>
            <Typography variant="body1" component="div" >
              trans
            </Typography>
          </Grid>
        )}
        <Grid item>
          {p.map((r: any) => (
            // <div>111</div>
            <TooltipRow key={r.id} point={r} />
          ))}
        </Grid>
          <Grid item>
            item
          </Grid>
      </Grid>
    </Paper>
  );
};

export default Tooltip;
