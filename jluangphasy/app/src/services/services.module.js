import ng from 'angular';
import albumsService from './albums.service';

const services = ng
  .module('services', [])
  .factory('albumsService', albumsService);

export default services.name;
