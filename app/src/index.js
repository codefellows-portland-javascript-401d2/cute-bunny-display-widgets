import angular from 'angular';
import displayApp from './app';

import './scss/main.scss';

// displayApp.value('apiUrl', 'http://localhost:3000/api');

angular.bootstrap(document, [displayApp.name]);
