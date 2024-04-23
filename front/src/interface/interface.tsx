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

export interface ColorsProps {
  color: string;
  id: number;
}

export interface StyleProps {
  
  fontSize: string | number | null;
  fontWeight: number | null;
  color: string | null;
}