import angular from 'angular';
import router from 'angular-ui-router';
import components from './app.components';
import routes from './app.routes';
import services from './app.services'

const app = angular
  .module('app', [
    router,
    components.name,
    services.name
  ])
  .config(routes)
  .value('apiUrl', process.env.API_URL);

export default app;
