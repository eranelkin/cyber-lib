import React from "react";
import Divider from "@mui/material/Divider";
import Text from "../Text/Text";
import { getFormatedNumber, isNum } from "utils";
import clsx from "clsx";

import "./verticalItem.scss";
interface VerticalItemProps {
  name: string;
  value: number | string;
  isMultiColumns?: boolean;
  isLegend?: boolean;
  color?: string;
  className?: any;
  formatType?: "%";
}

const VerticalItem: React.FC<VerticalItemProps> = ({
  name,
  value,
  formatType,
  isMultiColumns,
  isLegend,
  color,
  className,
}) => {
  let content: any;
  if (!value || Number.isNaN(value)) {
    content = 0;
  } else if (isNum(value)) {
    content = getFormatedNumber(value);
  } else {
    content = value;
  }

  return (
    <div
      className={clsx("vertical-item-wrapper", { [className]: !!className })}
    >
      <div
        className={clsx("vertical-item", {
          ["multi-columns"]: isMultiColumns,
          ["not-multi-columns"]: !isMultiColumns,
        })}
      >
        {/* <div style={{ width: isMultiColumns ? 180 : 160, display: 'flex', alignItems: 'center' }}> */}
        {isLegend && (
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: color,
              marginRight: 10,
            }}
          ></div>
        )}
        <Text style={{ marginRight: 10 }} textSize={11}>
          {name}
        </Text>
        <Divider
          className="vertical-item-divider"
          sx={{
            borderStyle: "dashed",
            marginTop: 0.6,
            flexGrow: 1,
          }}
        />
        <Text textSize={11} style={{ marginLeft: 10 }}>
          {formatType === "%" ? `${content}%` : content}
        </Text>
      </div>
    </div>
  );
};

export default VerticalItem;
