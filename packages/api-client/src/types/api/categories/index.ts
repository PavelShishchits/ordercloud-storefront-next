import type { OrdercloudIntegrationContext } from '../..'
import type { Searchable, Sortable, Filters, RequiredDeep, ListPage, Category } from 'ordercloud-javascript-sdk';

export type listCategoriesParams = {
  depth?: string;
  catalogID?: string;
  productID?: string;
  search?: string;
  searchOn?: Searchable<'Me.ListCategories'>;
  sortBy?: Sortable<'Me.ListCategories'>;
  page?: number;
  pageSize?: number;
  filters?: Filters;
};

export interface CategoriesEnpoints {
  listCategories(context: OrdercloudIntegrationContext, params: listCategoriesParams): Promise<RequiredDeep<ListPage<Category>>>
}

