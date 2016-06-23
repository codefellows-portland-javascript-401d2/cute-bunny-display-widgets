import ng from 'angular';
import app from './app';
import bunnyText from './bunny-text';

const components = ng
  .module('components', [])
	.component('app', app)
  .component('bunnyText', bunnyText)

export default components.name;
