import { OrdercloudIntegrationContext, TODO } from '..'
import type { CategoriesEnpoints } from './categories';

/**
 * Definition of all API-client methods available in {@link https://docs.vuestorefront.io/v2/advanced/context.html#context-api | context}.
 */
export interface Endpoints extends CategoriesEnpoints {

  /**
   * Here you can find an example endpoint definition. Based on this example, you should define how your endpoint will look like.
   * This description will appear in the API extractor, so try to document all endpoints added here.
   */
  exampleEndpoint(
    context: OrdercloudIntegrationContext,
    params: TODO
  ): Promise<TODO>;
}
