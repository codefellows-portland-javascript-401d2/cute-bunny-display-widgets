import angular from 'angular';
import appComponent from './app.component';
import headerComponent from './header/header.component';
import homeComponent from './home/home.component';
import albumListComponent from './albums/album-list/album-list.component';
import albumDetailComponent from './albums/album-detail/album-detail.component';
import photoListComponent from './photos/photo-list/photo-list.component';
import photoDetailComponent from './photos/photo-detail/photo-detail.component';

const components = angular
  .module('components', [])
  .component('appComponent', appComponent)
  .component('headerComponent', headerComponent)
  .component('homeComponent', homeComponent)
  .component('albumList', albumListComponent)
  .component('albumDetail', albumDetailComponent)
  .component('photoList', photoListComponent)
  .component('photoDetail', photoDetailComponent);

export default components;
