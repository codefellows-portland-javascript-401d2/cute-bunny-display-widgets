import angular from 'angular';
import router from 'angular-ui-router';
import components from './app.components';
import interceptors from './app.interceptors';
import routes from './app.routes';
import services from './app.services'
import authInit from './auth/auth.init';

import 'angular-ui-router/release/stateEvents';

const app = angular
  .module('app', [
    router,
    angular.module('ui.router.state.events').name,
    components.name,
    services.name
  ])
  .constant('apiUrl', process.env.API_URL)
  .constant('tokenName', process.env.TOKEN_NAME)
  .config(interceptors)
  .config(routes)
  .run(authInit);

export default app;
