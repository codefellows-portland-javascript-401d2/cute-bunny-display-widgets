import angular from 'angular';
import app from './app/app';
import picker from './picker/picker';

const components = angular.module('components', [])
.component('app', app)
.component('picker', picker);

export default components.name;
