import { Me } from 'ordercloud-javascript-sdk';
import { Endpoints } from '../../types';

export const listCategories: Endpoints['listCategories'] = async (context, params) => {
  try {
    return await Me.ListCategories(params);
  } catch (e) {
    throw e;
  }
}
