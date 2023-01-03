import React from "react";
import styled from "styled-components";

import "./text.scss";

interface StylesTextProps {
  family?: string;
  textColor?: string;
  weight?: number;
  textSize?: number | string;
}

const StyledText = styled.div<StylesTextProps>`
  color: ${(props) => (props.textColor ? props.textColor : "#454549")};
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
  font-size: ${(props) =>
    props.textSize
      ? typeof props.textSize === "string"
        ? props.textSize
        : `${props.textSize}px`
      : "12px"};
  font-family: ${(props) => (props.family ? props.family : "Rubik")};
`;

interface TextProps {
  family?: string;
  textSize?: number | string;
  textColor?: string;
  weight?: number;
  children: any;
  style?: React.CSSProperties;
  upper?: boolean;
}

const Text = ({
  family,
  textSize,
  textColor,
  weight,
  children,
  upper,
  style,
}: TextProps) => (
  <StyledText
    family={family}
    textSize={textSize}
    weight={weight}
    textColor={textColor}
    style={style}
  >
    {upper && typeof children === "string" ? children.toUpperCase() : children}
  </StyledText>
);

export default Text;
