import angular from 'angular';
import app from './app/app';
import picker from './picker/picker';
import cell from './cell/cell';
import album from './album/album';

const components = angular.module('components', [])
.component('app', app)
.component('picker', picker)
.component('cell', cell)
.component('album', album);

export default components.name;
