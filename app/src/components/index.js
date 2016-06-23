import angular from 'angular';
import app from './app/app';
import picker from './picker/picker';
import description from './description/description';
import thumb from './thumb/thumb';
import full from './full/full';
import album from './album/album';

const components = angular.module('components', [])
.component('app', app)
.component('picker', picker)
.component('description', description)
.component('thumb', thumb)
.component('full', full)
.component('album', album);

export default components.name;
