export type PaginatedResponse<T> = {
  data: T[];
  total: number;
  has_more: boolean;
  offset?: number;
  limit: number;
  page?: number;
  pageSize?: number;
  total_pages?: number;
};

export interface SabiResponse<T> {
  data: T;
  message: string;

}

export type ApiResponse<T> = Promise<SabiResponse<T>>;