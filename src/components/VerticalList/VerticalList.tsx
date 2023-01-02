import React from "react";
import Grid from "@mui/material/Grid";
import Text from "../Text/Text";
import NA from "../NA/NA";
import VerticalItem from "./VerticalItem";
import { Link } from "@mui/material";
import VerticalItemEmptyState from "./EmptyState/VerticalItemEmptyState";

interface LegendProps {
  name: string;
  value: number | string;
  color?: string;
}
interface VerticalListProps {
  title?: any;
  items: LegendProps[];
  isMultiColumns?: boolean;
  displayTotal?: boolean; // should display the total line (as link or as text)
  displayAsLinks?: boolean; // should display total line as link
  totalText?: string; // the total text (as link or as text)
  isLegend?: boolean;
  itemClassName?: string;
  containerClassName?: string;
  formatType?: "%";
  upperTitle?: boolean;
  titleTextSize?: number | string;
  titleWeight?: number;
  linkHref?: string;
}

// TODO: empty state to the link
const VerticalList: React.FC<VerticalListProps> = ({
  title,
  titleTextSize,
  items,
  isMultiColumns,
  displayTotal = true,
  displayAsLinks,
  totalText,
  isLegend,
  itemClassName,
  containerClassName,
  formatType,
  upperTitle,
  titleWeight,
  linkHref,
}) => {
  const titleProps = {
    ...(titleTextSize ? { textSize: titleTextSize } : { textSize: 13 }),
    ...(upperTitle ? { upper: true } : {}),
    ...(titleWeight ? { weight: titleWeight } : {}),
  };
  const isEmpty = items.length === 0;

  return (
    <Grid container>
      {!!title && (
        <Grid item md={12}>
          <Text weight={600} {...titleProps}>
            {title}
          </Text>
        </Grid>
      )}
      <Grid item md={12} sx={{ width: "100%" }}>
        <Grid
          container
          sx={{ padding: "10px 0", ...(isEmpty ? { marginTop: 1.5 } : {}) }}
          className={!!containerClassName ? containerClassName : ""}
        >
          {items.map((item, index) => {
            const verticalItemProps = {
              ...(!!isLegend ? { color: item.color } : {}),
            };
            return (
              <Grid
                key={index}
                item
                sm={isMultiColumns ? 4 : 12}
                md={isMultiColumns ? 4 : 12}
                paddingBottom={0.5}
                className={!!itemClassName ? itemClassName : ""}
              >
                {!!item ? (
                  <VerticalItem
                    key={item.name}
                    name={item.name}
                    value={item.value}
                    isMultiColumns={isMultiColumns}
                    formatType={formatType}
                    isLegend={isLegend}
                    {...verticalItemProps}
                  />
                ) : (
                  <VerticalItemEmptyState />
                )}
              </Grid>
            );
          })}
          {isEmpty && (
            <Grid item>
              <NA textSize={36} />
            </Grid>
          )}
          {displayTotal && displayAsLinks && (
            <Link
              href={linkHref}
              variant="body2"
              underline="hover"
              style={{ fontSize: 10, marginTop: 2, cursor: "pointer" }}
            >
              {totalText}
            </Link>
          )}
          {displayTotal && !displayAsLinks && (
            <Text style={{ fontSize: 10, marginTop: 2, color: "#D1D2D3" }}>
              {totalText}
            </Text>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default VerticalList;
