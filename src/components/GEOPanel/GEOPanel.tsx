import Highcharts from 'highcharts/highmaps';
import HighchartsReact from 'highcharts-react-official';
import mapDataWorld from '@highcharts/map-collection/custom/world.topo.json';

interface IGeoCategory {
  results: IGeoListItem[];
}

interface GeoProps {
  [key: string]: IGeoCategory;
}

interface IGeoListItem {
  [key: string]: any;
}

const prepareCountriesData = (data: GeoProps) => {
  // This function prepares the data as required by HighCharts API.
  // #TODO: we need to get this data from the server in this fashion:
  // [{code: 'XX', value: 'TOTAL_EXTERNAL + TOTAL_ORG'}]
  // It is redundent to make this calculations in the client
  const countries: IGeoListItem = {};
  Object.keys(data).forEach((item: string) => {
    data[item].results.forEach((row: {}) => {
      countries[Object.keys(row)[0]] = (countries[Object.keys(row)[0]] || 0) + Object.values(row)[0];
    });
  });
  return Object.keys(countries).map((c: string) => {
    return { code: c.toUpperCase(), value: countries[c] };
  });
};

const getOptions = (data: GeoProps) => {
  return {
    accessibility: {
      enabled: false
    },
    chart: {
      marginTop: 50,
      marginLeft: -50,
      padding: 0,
      width: 440,
      height: 270,
      map: mapDataWorld
    },
    title: {
      text: 'ORGANIZATIONAL ASSETS GEO MAP',
      align: 'left',
      x: -10,
      style: {
        FontFamily: 'Rubik',
        fontWeight: 600,
        fontSize: '12px'
      }
    },
    plotOptions: {
      series: {
        colorByPoint: true
      }
    },
    colorAxis: {
      minColor: '#ffffff',
      maxColor: '#333333'
    },
    tooltip: { enabled: false },
    credits: { enabled: false },
    legend: { enabled: false },
    series: [
      {
        data: prepareCountriesData(data),
        joinBy: ['iso-a2', 'code'],
        name: 'Assets',
        states: { hover: { enabled: false } }
      }
    ]
  };
};

const GEOPanel = (props: GeoProps) => {
  return <HighchartsReact highcharts={Highcharts} options={getOptions(props)} constructorType={'mapChart'} />;
};

export default GEOPanel;
