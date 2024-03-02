import { Pager } from "../model/pager";

export class PagerFactory {
  static create(): Pager {
    return {
      page: 0,
      pageSize: 25,
      pageSizes: [5, 10, 25, 50, 100],
      totalPages: 0,
      totalElements: 0,
      sortBy: undefined
    }
  }
}
