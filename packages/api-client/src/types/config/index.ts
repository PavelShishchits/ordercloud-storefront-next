import type { ApiRole } from 'ordercloud-javascript-sdk';

export interface MiddlewareConfig {
  // Add the fields provided in the `middleware.config.js` file.
  baseApiUrl: string;
  clientID: string;
  scope: ApiRole[];
  anonymousUserId: string;
}
