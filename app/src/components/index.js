import ng from 'angular';
import app from './app';
import bunnyText from './bunny-text';
import bunnyThumb from './bunny-thumb';
import bunnyFull from './bunny-full';

const components = ng
  .module('components', [])
	.component('app', app)
  .component('bunnyText', bunnyText)
  .component('bunnyThumb', bunnyThumb)
  .component('bunnyFull', bunnyFull)

export default components.name;
