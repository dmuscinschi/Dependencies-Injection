import type { IoCResources, User } from './types';
import { createIoCContainer } from './ioc';
import IoCContainer from 'ioc-lite';

let ioc: IoCContainer<IoCResources> = createIoCContainer();

const renderUsers = async () => {
  // Resolve resources
  const usersService = ioc.resolve('users');

  const users = await usersService.getUsers();

  const listNode = document.getElementById('users-list');

  users.forEach((user: User) => {
    const listItemNode = document.createElement('li');

    listItemNode.innerHTML = user.name;
    listNode.appendChild(listItemNode);
  });
};

const app = () => {
  const config = (window as any).__CONFIG__;
  delete (window as any).__CONFIG__;

  ioc.register('apiConfig', config.api);

  renderUsers();
};

window.onload = () => {
  const logger = ioc.resolve('logger');

  logger.info('Page is loaded.');

  app();
};
