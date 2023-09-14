export interface AssetTableDetailsProps {
  tableHeaders: string[];
  datasets: Record<string,string | number | undefined | null>[];
}