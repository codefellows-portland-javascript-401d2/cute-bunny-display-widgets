import angular from 'angular';
import albumService from './album-service';

const services = angular.module('services', [])
.factory('albumService', albumService);

module.exports = services.name;
