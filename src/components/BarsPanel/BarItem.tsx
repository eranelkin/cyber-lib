import React from 'react';
import Text from '../Text/Text';
import { Grid } from '@mui/material';

interface BarItemProps {
  itemText: string;
  itemValue: number;
  barValue: number;
}
const BarItem: React.FC<BarItemProps> = ({ itemText, itemValue, barValue }) => {
  return (
    <Grid container sx={{ marginBottom: '6px' }}>
      <Grid item sm={12} md={12}>
        <Grid container alignItems="center">
          <Grid item sm={6} md={6}>
            <Text textSize={11}>{itemText}</Text>
          </Grid>
          <Grid item sm={4} md={4} display="flex" alignItems={'center'}>
            <div style={{ height: 13, border: '1px solid #BCBFC8' }} />
            <div style={{ height: 7, width: `${barValue / 2}px`, backgroundColor: '#4B7AE7' }} />
          </Grid>
          <Grid item sm={2} md={2}>
            <div
              style={{
                height: 20,
                width: 30,
                backgroundColor: '#4B7AE7',
                borderRadius: 4,
                color: '#FFFFFF',
                textAlign: 'center'
              }}
            >
              <span style={{ fontSize: 11 }}>{`${itemValue}%`}</span>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BarItem;
