import React from 'react';
import styled from 'styled-components';

const variantsColors = {
  simple: '#2C2C30',
  disabled: '#D1D2D3'
};

interface StyledNAProps {
  variant?: string;
  weight?: number;
  textSize?: number | string;
  family?: string;
}

const StyledNA = styled.span<StyledNAProps>`
  color: ${(props) => props.variant};
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
  font-size: ${(props) =>
    props.textSize ? (typeof props.textSize === 'string' ? props.textSize : `${props.textSize}px`) : '12px'};
  font-family: ${(props) => (props.family ? props.family : 'Rubik')};
`;

interface NAProps {
  variant?: string;
  weight?: number;
  textSize?: number | string;
  family?: string;
  style?: React.CSSProperties;
}

/**
 * NA Component
 * @param [variant] [string?] default = 'disabled' affect the font color
 * @param [weight] [number?] - optional
 * @param [textSize] [number?] - optional
 * @param [family] [number?] - optional, font-family
 * @param [style] [CSSProperties] - optional, addition style
 * @returns RiskIndicator JSX
 */
const NA: React.FC<NAProps> = ({ variant = 'disabled', weight, textSize, family, style }) => {
  const color = variantsColors[variant as keyof typeof variantsColors];
  return (
    <StyledNA variant={color} weight={weight} textSize={textSize} family={family} style={style}>
      N/A
    </StyledNA>
  );
};

export default NA;
