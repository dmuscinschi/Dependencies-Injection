import { HTTP } from 'src/services/http';
import { Logger } from 'src/services/logger';
import { Users } from 'src/services/users';

export interface User {
  id: number;
  name: string;
}

export interface ApiConfig {
  path: string;
  resources: { [key: string]: string };
}

export type IoCResources = {
  logger: typeof Logger;
  http: typeof HTTP;
  users: typeof Users;
  apiConfig: ApiConfig;
};
