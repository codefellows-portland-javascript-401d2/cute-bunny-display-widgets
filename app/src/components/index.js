import ng from 'angular';
import app from './app/app';

const components = ng
  .module('components', [])
	.component('app', app)

export default components.name;
