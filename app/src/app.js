import angular from 'angular';
import components from './components';
import services from './services';
import router from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import satellizer from 'satellizer';
import ngDialog from 'ng-dialog';

const app = angular.module('displayApp', [components, services, router, ngAnimate, satellizer, ngDialog]);

app.constant('apiUrl', 'http://localhost:3000/api');


export default app;