import angular from 'angular';
import displayApp from './app';
import template from './template.html';

import './css/main.css';

document.body.innerHTML = template;
angular.bootstrap(document, [displayApp]);
