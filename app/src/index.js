import angular from 'angular';
import displayApp from './app';
import router from './router';

import './scss/main.scss';

displayApp.config(router);

angular.bootstrap(document, [displayApp.name]);
