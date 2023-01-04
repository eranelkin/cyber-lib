import React from "react";
import styled from "styled-components";
import Text from "components/Text";
import "./info-panel.scss";

interface StylesInfoPanelProps {
  width: number | string;
  height?: number | string;
  textColor?: string;
  family?: string;
  weight?: number;
  textSize?: number | string;
  bgColor?: string;
  borderRadius?: number | string;
}

const StyledInfoPanel = styled.div<StylesInfoPanelProps>`
  width: ${(props) =>
    props.width
      ? typeof props.width === "string"
        ? props.width
        : `${props.width}px`
      : "auto"};
  height: ${(props) =>
    props.height
      ? typeof props.height === "string"
        ? props.height
        : `${props.height}px`
      : "auto"};
  color: ${(props) => (props.textColor ? props.textColor : "#FFFFFF")};
  background: ${(props) => props.bgColor};
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
  font-size: ${(props) =>
    props.textSize
      ? typeof props.textSize === "string"
        ? props.textSize
        : `${props.textSize}px`
      : "12px"};
  font-family: ${(props) => (props.family ? props.family : "Rubik")};
  border-radius: ${(props) =>
    props.borderRadius
      ? typeof props.borderRadius === "string"
        ? props.borderRadius
        : `${props.borderRadius}px`
      : ""};
  word-wrap: break-word;
  line-height: 18px;
`;

interface InfoPanelProps {
  width: number | string;
  title?: string;
  height?: number | string;
  textColor?: string;
  family?: string;
  bgColor?: string;
  textSize?: number | string;
  weight?: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
  upper?: boolean;
  borderRadius?: number | string;
}

const InfoPanel = ({
  title,
  width,
  height,
  textColor,
  bgColor,
  textSize,
  weight,
  family,
  upper,
  style,
  borderRadius,
  children,
}: InfoPanelProps) => {
  const textProps = {
    ...(textColor ? { textColor: textColor } : {}),
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {!!title && (
        <Text style={{ marginBottom: 15 }} upper {...textProps}>
          {title}
        </Text>
      )}
      <StyledInfoPanel
        family={family}
        weight={weight}
        textColor={textColor}
        bgColor={bgColor}
        textSize={textSize}
        style={style}
        width={width}
        height={height}
        borderRadius={borderRadius}
      >
        {upper && typeof children === "string"
          ? children.toUpperCase()
          : children}
      </StyledInfoPanel>
    </div>
  );
};

export default InfoPanel;
