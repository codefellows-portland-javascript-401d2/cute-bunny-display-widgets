import angular from 'angular';
import displayText from './display-text/display-text';
import displayThumb from './display-thumb/display-thumb';
import displayFull from './display-full/display-full';
import app from './app/app';

const components = angular.module('components', [])
  .component('text', displayText)
  .component('thumb', displayThumb)
  .component('full', displayFull)
  .component('app', app);

export default components.name;