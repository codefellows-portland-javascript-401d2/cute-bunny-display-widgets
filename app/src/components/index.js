import ng from 'angular';
import app from './app';
import bunnyText from './bunny-text';
import bunnyThumb from './bunny-thumb';

const components = ng
  .module('components', [])
	.component('app', app)
  .component('bunnyText', bunnyText)
  .component('bunnyThumb', bunnyThumb)

export default components.name;
