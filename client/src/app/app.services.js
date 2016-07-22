import angular from 'angular';
import albumsService from './albums/albums.service';
import authService from './auth/auth.service';
import photosService from './photos/photos.service';
import tokenService from './token/token.service';

const services = angular
  .module('services', [])
  .factory('albumsService', albumsService)
  .factory('authService', authService)
  .factory('photosService', photosService)
  .factory('tokenService', tokenService);

export default services;
