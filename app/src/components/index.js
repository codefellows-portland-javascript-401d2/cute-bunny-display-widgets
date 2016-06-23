import angular from 'angular';
import displayText from './display-text/display-text';
import displayThumb from './display-thumb/display-thumb';
import displayFull from './display-full/display-full';
import toggle from './toggle/toggle';
import app from './app/app';

const components = angular.module('components', [])
  .component('text', displayText)
  .component('thumb', displayThumb)
  .component('full', displayFull)
  .component('toggler', toggle)
  .component('app', app);

export default components.name;