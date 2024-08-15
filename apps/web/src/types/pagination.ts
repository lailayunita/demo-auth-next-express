export interface IPaginationMeta {
  page: number;
  take: number;
  total: number;
}

export interface IPageableResponse<T> {
  //<T> Generic fitur typescript
  data: T[];
  meta: IPaginationMeta;
}

export interface IPagintaionQueries {
  take?: number;
  page?: number;
  sortBy?: string;
  sortOrder?: string;
}
