import angular from 'angular';
import components from './components';
import services from './services';
import router from 'angular-ui-router';
import ngAnimate from 'angular-animate';

const app = angular.module('displayApp', [components, services, router, ngAnimate]);

app.value('apiUrl', 'http://localhost:3000/api');

export default app;