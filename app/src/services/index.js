import angular from 'angular';
import albumService from './album-service';
import animalService from './animal-service';

const services = angular.module('services', [])
.factory('albumService', albumService)
.factory('animalService', animalService);

module.exports = services.name;
