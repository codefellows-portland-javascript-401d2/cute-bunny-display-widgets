import ng from 'angular';
import components from './components';

const app = ng
  .module('bunnyApp', [components]);

export default app.name;
