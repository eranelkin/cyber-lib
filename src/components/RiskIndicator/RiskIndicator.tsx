import React from "react";
import styled from "styled-components";

const variantsColors = {
  A: { bg: "#1aa88433", border: "#1AA884" },
  B: { bg: "#00bdd733", border: "#00BDD7" },
  C: { bg: "#e7b70e33", border: "#E7B70E" },
  D: { bg: "#e0691533", border: "#E06915" },
  E: { bg: "#e7b70e33", border: "#E7B70E" },
  F: { bg: "#f4666633", border: "#F46666" },
  NA: { bg: "#F6F6F6", border: "#D1D2D3" },
};

interface StyledRiskIndicatorProps {
  bgColor: string;
  borderColor: string;
  height: number;
  width: number;
  textSize: number;
}

const StyledRiskIndicator = styled.div<StyledRiskIndicatorProps>`
  background-color: ${(props) => props.bgColor};
  border: ${(props) => `1px solid ${props.borderColor}`};
  height: ${(props) =>
    typeof props.height === "string" ? props.height : `${props.height}px`};
  width: ${(props) =>
    typeof props.width === "string" ? props.width : `${props.width}px`};
  font-size: ${(props) => `${props.textSize}px`};
  transform: rotate(45deg);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;

interface StyledLegendIndicatorProps {
  bgColor: string;
  size?: number;
}

const StyledLegendIndicator = styled.div<StyledLegendIndicatorProps>`
  background-color: ${(props) => props.bgColor};
  height: ${(props) => `${props.size}px`};
  width: ${(props) => `${props.size}px`};
  border-radius: 50%;
`;

const legendSizes = {
  b: 10,
  m: 6,
  s: 4,
};

const ranksSizes = {
  b: { box: 50, text: 40 },
  m: { box: 35, text: 20 },
  s: { box: 20, text: 14 },
};

const riskRanges = {
  A: { min: 901, max: 1000 },
  B: { min: 801, max: 900 },
  C: { min: 701, max: 800 },
  D: { min: 501, max: 700 },
  E: { min: 201, max: 500 },
  F: { min: 1, max: 200 },
};
const getVariant = (value: string | number) => {
  const variant = Object.entries(riskRanges).find(([key, { min, max }]) => {
    return +value >= min && +value <= max;
  });
  return variant ? variant[0] : undefined;
};

interface RiskIndicatorProps {
  type?: "ranks" | "legend";
  letter?: string;
  value?: string | number;
  size?: "b" | "m" | "s";
  color?: string;
}

/**
 * RiskIndicator Component
 * @param [value] [number] will be translated to risk letter.
 * @param [size] [string?: 'b' | 'm' | 's'] - optional, default 'm', Risk indicatore size
 * @returns RiskIndicator JSX
 */
const RiskIndicator: React.FC<RiskIndicatorProps> = ({
  type = "ranks",
  value,
  letter,
  size = "m",
  color,
}) => {
  if (type === "legend" && !!color) {
    const legendSize = legendSizes[size];
    return <StyledLegendIndicator bgColor={color} size={legendSize} />;
  }
  if (type === "ranks") {
    // && (!!value || !!letter)) {
    let variant: any = value ? getVariant(value) : letter;
    if (!variantsColors[variant as keyof typeof variantsColors]) variant = "NA";

    const { box, text } = ranksSizes[size];

    const borderColor =
      variantsColors[variant as keyof typeof variantsColors].border;
    const bgColor = variantsColors[variant as keyof typeof variantsColors].bg;

    return (
      <div className="risk-indicator-ranks">
        <StyledRiskIndicator
          bgColor={bgColor}
          borderColor={borderColor}
          height={box}
          width={box}
          textSize={text}
        >
          <span style={{ position: "absolute", transform: "rotate(-45deg)" }}>
            {variant !== "NA" ? variant : ""}
          </span>
        </StyledRiskIndicator>
      </div>
    );
  }
  return <></>;
};

export default RiskIndicator;
