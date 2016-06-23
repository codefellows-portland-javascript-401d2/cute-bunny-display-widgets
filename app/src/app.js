import angular from 'angular';
import mainCtrl from './main-controller';
import components from './components';

const app = angular.module('displayApp', [mainCtrl, components]);

export default app.name;