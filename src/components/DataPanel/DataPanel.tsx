import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Text from "components/Text";
import NA from "components/NA";
import { getFormatedNumber, isNum } from "utils";

import "./data-panel.scss";

interface StylesDataPanelProps {
  textColor?: string;
  family?: string;
  weight?: number;
  textSize?: number | string;
  bgColor?: string;
}

const StyledDataPanel = styled.div<StylesDataPanelProps>`
  color: ${(props) => (props.textColor ? props.textColor : "#454549")};
  background-color: ${(props) => (props.bgColor ? props.bgColor : "")};
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
  font-size: ${(props) =>
    props.textSize
      ? typeof props.textSize === "string"
        ? props.textSize
        : `${props.textSize}px`
      : "14px"};
  font-family: ${(props) => (props.family ? props.family : "Rubik")};
`;

interface DataPanelProps {
  title?: any;
  children: any;
  textColor?: string;
  family?: string;
  bgColor?: string;
  textSize?: number | string;
  titleTextSize?: number | string;
  titleUpper?: boolean;
  titleWeight?: number;
  titleStyle?: React.CSSProperties;
  weight?: number;
  rightText?: string;
  rightTextClassName?: string;
  style?: React.CSSProperties;
  upper?: boolean;
}

// /**
//  * DataPanel component
//  * @param {any} title,
//  * @param {number? | string?} titleTextSize,
//  * @param {number?} titleWeight,
//  * @param {string?} textColor,
//  * @param {string?} bgColor,
//  * @param {number? | string?} textSize,
//  * @param {number?} weight,
//  * @param {string?} family,
//  * @param {string?} rightText,
//  * @param {boolean?} upper,
//  * @param {React.CSSProperties?} style,
//  * @param {any} children
//  * @returns {JSX.Element}
//  */
const DataPanel = ({
  title,
  titleTextSize,
  titleWeight,
  titleStyle,
  titleUpper,
  textColor,
  bgColor,
  textSize,
  weight,
  family,
  upper,
  rightText,
  style,
  rightTextClassName,
  children,
}: DataPanelProps) => {
  let content;
  const titleProps = {
    ...(textColor ? { textColor: textColor } : {}),
    ...(titleTextSize ? { textSize: titleTextSize } : {}),
    ...(titleWeight ? { weight: titleWeight } : {}),
    ...(titleUpper ? { upper: true } : {}),
  };

  if (isNum(children)) {
    content = getFormatedNumber(children);
  } else if (typeof children === "string") {
    content = upper ? children.toUpperCase() : children;
  } else {
    content = children ? children : <NA textSize={textSize} />;
  }
  const colorProp = textColor ? textColor : "#454549";
  return (
    <Grid container flexDirection="column" className="data-panel-container">
      <Grid item>
        <Text
          style={{ marginBottom: 5, ...(titleStyle ? { ...titleStyle } : {}) }}
          {...titleProps}
        >
          {title}
        </Text>
      </Grid>
      {rightText ? (
        <Grid container alignItems="center">
          <Grid item>
            <StyledDataPanel
              family={family}
              weight={weight}
              textColor={textColor}
              bgColor={bgColor}
              textSize={textSize}
              style={style}
            >
              {content}
            </StyledDataPanel>
          </Grid>
          <Grid
            item
            className={rightTextClassName ? rightTextClassName : ""}
            sx={{
              width: 70,
              wordBreak: "break-word",
              marginLeft: 1,
              fontSize: 11,
              color: colorProp,
            }}
          >
            {rightText}
          </Grid>
        </Grid>
      ) : (
        <Grid item>
          <StyledDataPanel
            family={family}
            weight={weight}
            textColor={textColor}
            bgColor={bgColor}
            textSize={textSize}
            style={style}
          >
            {content}
          </StyledDataPanel>
        </Grid>
      )}
    </Grid>
  );
};

export default DataPanel;
