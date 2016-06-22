import angular from 'angular';
import displayText from './display-text/display-text';
import displayThumb from './display-thumb/display-thumb';
import displayFull from './display-full/display-full';

const components = angular.module('components', [])
  .component('text', displayText)
  .component('thumb', displayThumb)
  .component('full', displayFull);

export default components.name;