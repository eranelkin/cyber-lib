import React from "react";
import ServiceInfo from "../../components/ServiceInfo";

const apps = {
  count: 22,
  results: [
    {
      name: "jenkins",
      logo_url: null,
      assets_found_running_other_vulnerable_versions: 1,
      top_cvss: 7.5,
      min_cvss: 4.3,
      assets_using_this_version: 1,
      most_vulnerable_version: "2.319.2",
      top_cvss_other_versions: 7.5,
      known_cves: 3,
    },
    {
      name: "mod_ssl",
      logo_url: null,
      assets_found_running_other_vulnerable_versions: 1,
      top_cvss: 7.5,
      min_cvss: 4.6,
      assets_using_this_version: 1,
      most_vulnerable_version: "2.2.27",
      top_cvss_other_versions: 7.5,
      known_cves: 2,
    },
    {
      name: "prototype",
      logo_url: null,
      assets_found_running_other_vulnerable_versions: 1,
      top_cvss: 7.5,
      min_cvss: 7.5,
      assets_using_this_version: 1,
      most_vulnerable_version: "1.6.0.1",
      top_cvss_other_versions: 7.5,
      known_cves: 1,
    },
    {
      name: "mod_jk",
      logo_url:
        "https://res.cloudinary.com/cyberpion/image/upload/v1654697346/Apache.png",
      assets_found_running_other_vulnerable_versions: 1,
      top_cvss: 9.8,
      min_cvss: 7.5,
      assets_using_this_version: 1,
      most_vulnerable_version: "1.2.41",
      top_cvss_other_versions: 9.8,
      known_cves: 3,
    },
  ],
};
export default {
  title: "UI/ServiceInfo",
  component: ServiceInfo,
};

const Template = (args) => <ServiceInfo {...args} />;

export const Services = Template.bind({});
Services.args = {
  appData: apps,
};
