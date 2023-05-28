export type TReport = {
  fileId: string;
  status: string;
  fileName: string;
  created_at: string;
  filters: TFilter;
};

type TFilter = {
  diagnosis: string[];
  doctors: string[];
  codes: string[];
};
