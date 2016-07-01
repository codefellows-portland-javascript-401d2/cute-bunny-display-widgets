import angular from 'angular';
import components from './app.components';
// import routes from './app.routes';
import services from './app.services'

const appModule = angular
  // .config(routes)
  .module('app', [
    components.name,
    services.name
  ])
  .value('apiUrl', process.env.API_URL);

export default appModule;
