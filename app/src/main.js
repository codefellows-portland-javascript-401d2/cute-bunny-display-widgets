import angular from 'angular';
import cuteBunny from './cute-bunny';
import template from './index.html';
import './css/main.css';

document.body.innerHTML = template;
angular.bootstrap(document, [cuteBunny]);
