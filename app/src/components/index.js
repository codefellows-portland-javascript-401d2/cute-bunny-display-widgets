import angular from 'angular';
import app from './app/app';
import picker from './picker/picker';
import cell from './cell/cell';
import album from './album/album';
import addPic from './add-pic/add-pic';

const components = angular.module('components', [])
.component('app', app)
.component('picker', picker)
.component('cell', cell)
.component('album', album)
.component('addPic', addPic);

export default components.name;
