import React from "react";
import { Avatar, Grid } from "@mui/material";
import Text from "../Text/Text";
interface ServiceInfoProps {
  appData: any;
}

const ServiceInfo: React.FC<ServiceInfoProps> = ({ appData }) => {
  const {
    assets_found_running_other_vulnerable_versions,
    assets_using_this_version,
    known_cves,
    logo_url,
    min_cvss,
    most_vulnerable_version,
    label,
    top_cvss,
    top_cvss_other_versions,
  } = appData;
  const first = `(${known_cves} know CVE${
    known_cves > 1 ? "s" : ""
  }, top CVSS ${top_cvss})`;

  return (
    <Grid container flexDirection="column">
      <Grid item sm={12} md={12}>
        <Grid container>
          <Grid item sm={1.5} md={1.5}>
            {logo_url ? (
              <img src={logo_url} alt="pic" style={{ width: 28, height: 28 }} />
            ) : (
              <Avatar
                sx={{ bgcolor: "red", fontSize: 12, width: 30, height: 30 }}
              >
                {label.slice(0, 2).toUpperCase()}
              </Avatar>
            )}
          </Grid>
          <Grid item sm={10} md={10}>
            <Text>{label}</Text>
          </Grid>
        </Grid>
        <Grid container flexDirection="column" sx={{ marginTop: 1 }}>
          <Grid item sx={{ marginBottom: 0.5 }}>
            <Text textSize={12}>
              <b>{most_vulnerable_version}</b> {first}
            </Text>
          </Grid>
          <Grid item sx={{ marginBottom: 0.5 }}>
            <Text textSize={12}>
              <b>
                {assets_using_this_version}{" "}
                {assets_using_this_version > 1 ? "assets" : "asset"}
              </b>{" "}
              {assets_using_this_version > 1 ? "use" : "uses"} this version
            </Text>
          </Grid>
          <Grid item>
            <Text textSize={12}>
              <b>
                {assets_found_running_other_vulnerable_versions}
                {assets_found_running_other_vulnerable_versions > 1
                  ? " assets"
                  : " asset"}
              </b>{" "}
              {assets_found_running_other_vulnerable_versions > 1
                ? "run"
                : "runs"}{" "}
              other vulnerable versions (CVSS {min_cvss} -{" "}
              {top_cvss_other_versions})
            </Text>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ServiceInfo;
