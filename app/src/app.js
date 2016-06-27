import angular from 'angular';
import components from './components';
import ngAnimate from 'angular-animate';

const app = angular.module('displayApp', [components, ngAnimate]);

export default app.name;