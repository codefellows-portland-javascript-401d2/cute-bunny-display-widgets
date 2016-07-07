import angular from 'angular';
import app from './app.component';
import headerDefault from './headers/header-default/header-default.component';
import home from './home/home.component';
import albumList from './albums/album-list/album-list.component';
import albumDetail from './albums/album-detail/album-detail.component';
import addAlbum from './albums/add-album/add-album.component';
import editAlbum from './albums/edit-album/edit-album.component';
import photoDetail from './photos/photo-detail/photo-detail.component';
import addPhoto from './photos/add-photo/add-photo.component';
import editPhoto from './photos/edit-photo/edit-photo.component';

const components = angular
  .module('components', [])
  .component('app', app)
  .component('headerDefault', headerDefault)
  .component('home', home)
  .component('albumList', albumList)
  .component('albumDetail', albumDetail)
  .component('addAlbum', addAlbum)
  .component('editAlbum', editAlbum)
  .component('photoDetail', photoDetail)
  .component('addPhoto', addPhoto)
  .component('editPhoto', editPhoto);

export default components;
