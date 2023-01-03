import React from "react";
import "./text.scss";
interface TextProps {
    family?: string;
    textSize?: number | string;
    textColor?: string;
    weight?: number;
    children: any;
    style?: React.CSSProperties;
    upper?: boolean;
}
declare const Text: ({ family, textSize, textColor, weight, children, upper, style, }: TextProps) => JSX.Element;
export default Text;
