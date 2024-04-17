type data = string | number | null;
export type TableType = [data[] | data[]];

export interface WorkerProps {
  binary: string | null;
  initial: any | null;
}

export interface FileProps {
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}
