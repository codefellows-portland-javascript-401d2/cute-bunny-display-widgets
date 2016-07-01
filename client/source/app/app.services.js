import angular from 'angular';
import albumsService from './albums/albums.service';
import photosService from './photos/photos.service';

const services = angular
  .module('services', [])
  .factory('albumsService', albumsService)
  .factory('photosService', photosService);

export default services;
