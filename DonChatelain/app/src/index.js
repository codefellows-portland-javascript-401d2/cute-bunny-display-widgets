import angular from 'angular';
import displayApp from './app';
import router from './router';
import auth from './auth';
import http from './config-http';

import './scss/main.scss';

displayApp.config(router);
displayApp.config(http);
displayApp.run(auth);

angular.bootstrap(document, [displayApp.name]);
