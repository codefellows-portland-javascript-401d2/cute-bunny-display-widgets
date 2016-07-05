import angular from 'angular';
import app from './app.component';
import headerDefault from './headers/header-default/header-default.component';
import home from './home/home.component';
import albumList from './albums/album-list/album-list.component';
import albumDetail from './albums/album-detail/album-detail.component';
import photoList from './photos/photo-list/photo-list.component';
import photoDetail from './photos/photo-detail/photo-detail.component';

const components = angular
  .module('components', [])
  .component('app', app)
  .component('headerDefault', headerDefault)
  .component('home', home)
  .component('albumList', albumList)
  .component('albumDetail', albumDetail)
  .component('photoList', photoList)
  .component('photoDetail', photoDetail);

export default components;
