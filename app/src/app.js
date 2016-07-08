import angular from 'angular';
import components from './components';
import services from './services';
import router from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import satellizer from 'satellizer';
import ngDialog from 'ng-dialog';
import 'ng-dialog/css/ngDialog.css';
import 'ng-dialog/css/ngDialog-theme-default.css';
import 'angular-ui-router/release/stateEvents';

const app = angular.module('displayApp', [components, services, router, ngAnimate, satellizer, ngDialog, angular.module( 'ui.router.state.events' ).name]);

app.constant('apiUrl', 'http://localhost:3000/api');


export default app;