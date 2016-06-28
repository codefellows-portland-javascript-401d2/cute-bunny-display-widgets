import angular from 'angular';
import components from './components';
import services from './services';
import ngAnimate from 'angular-animate';

const app = angular.module('displayApp', [components, services, ngAnimate]);

export default app;