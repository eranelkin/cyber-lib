import { Grid } from "@mui/material";
import React from "react";
import BarsItem from "./BarItem";
import Text from "../Text/Text";
import clsx from "clsx";

const MAX_BAR_WIDTH = 200;

interface barsData {
  name: string;
  value: number;
}
interface BarsPanelProps {
  barsData: barsData[];
  title?: string;
  itemsClassName?: any;
}

const BarsPanel: React.FC<BarsPanelProps> = ({
  barsData,
  title,
  itemsClassName,
}) => {
  const values = barsData.map((bar) => bar.value);
  const maxValue = Math.max(...values);
  const data = barsData.map((bar) => ({
    ...bar,
    width: MAX_BAR_WIDTH * (bar.value / maxValue),
  }));

  return (
    <Grid container className="bars-panel">
      {!!title && (
        <Grid item sx={{ marginBottom: 2 }} className="bars-panel-title">
          <Text upper textSize={12} weight={600}>
            {title}
          </Text>
        </Grid>
      )}
      <Grid
        item
        className={clsx("bars-panel-items", {
          [itemsClassName]: itemsClassName,
        })}
        sm={12}
        md={12}
      >
        {data.length > 0 &&
          data.map((item) => (
            <BarsItem
              key={item.name}
              itemText={item.name}
              itemValue={item.value}
              barValue={item.width}
            />
          ))}
      </Grid>
    </Grid>
  );
};

export default BarsPanel;
