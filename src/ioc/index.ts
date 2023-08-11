import IoCContainer from 'ioc-lite';

import { Logger } from '../services/logger';
import { HTTP } from '../services/http';
import { Users } from '../services/users';
import { IoCResources } from '../types/index';

export const createIoCContainer = () => {
  const ioc = new IoCContainer<IoCResources>();
  // register some resources below...

  ioc.registerClass('logger', Logger);
  ioc.registerClass('http', HTTP);
  ioc.registerClass('users', Users);
  return ioc;
};
