import angular from 'angular';
import albumService from './album-service';
import animalService from './animal-service';
import tokenService from './token-service';
import userService from './user-service';

const services = angular.module('services', [])
.factory('albumService', albumService)
.factory('animalService', animalService)
.factory('tokenService', tokenService)
.factory('userService', userService);

module.exports = services.name;
