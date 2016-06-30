import angular from 'angular';
import displayApp from './app';
import router from './router';

import './scss/main.scss';

displayApp.config(router);

// displayApp.value('apiUrl', 'http://localhost:3000/api');

angular.bootstrap(document, [displayApp.name]);
