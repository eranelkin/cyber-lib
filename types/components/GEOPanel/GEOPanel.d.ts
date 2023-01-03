interface IGeoCategory {
    results: IGeoListItem[];
}
interface GeoProps {
    [key: string]: IGeoCategory;
}
interface IGeoListItem {
    [key: string]: any;
}
declare const GEOPanel: (props: GeoProps) => JSX.Element;
export default GEOPanel;
