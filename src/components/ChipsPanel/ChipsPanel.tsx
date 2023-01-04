import React from "react";
import Chip from "@mui/material/Chip";
import { Link } from "@mui/material";
import Text from "components/Text";
import NA from "components/NA";

import "./chipsPanel.scss";
interface ChipsPanelProps {
  data: any;
  style?: React.CSSProperties;
  title?: string;
  href?: string;
  displayAsLinks?: boolean;
}

const ChipsPanel: React.FC<ChipsPanelProps> = ({
  data,
  displayAsLinks = true,
  style,
  title,
  href,
}) => {
  const displayTotal = data.other > 0;
  const linkText = `${
    displayTotal ? "+ " + data.other + " Other" : ""
  } Connected organizations`;

  const panelStyle = style ? style : {};
  // FIX: need to calclulate the height (need to be limitted to 2 rows)
  return (
    <div className="chip-panel" style={panelStyle}>
      {!!title && (
        <Text textSize={12} weight={600} upper style={{ marginBottom: 15 }}>
          {title}
        </Text>
      )}
      <div className="chips-panel">
        {data.results.length > 0 &&
          data.results.map((chip: string) => (
            <Chip key={chip} label={chip} size="small" sx={{ fontSize: 11 }} />
          ))}
      </div>

      {data.results.length === 0 && <NA textSize={32} />}
      {displayTotal && displayAsLinks && (
        <div style={{ marginTop: 10 }}>
          <Link
            href={href}
            variant="body2"
            underline="hover"
            style={{ marginLeft: 5, fontSize: 10 }}
          >
            {linkText}
          </Link>
        </div>
      )}
      {displayTotal && !displayAsLinks && (
        <div style={{ marginTop: 10 }}>
          <Text style={{ marginLeft: 5, fontSize: 11, color: "#D1D2D3" }}>
            {linkText}
          </Text>
        </div>
      )}
    </div>
  );
};

export default ChipsPanel;
