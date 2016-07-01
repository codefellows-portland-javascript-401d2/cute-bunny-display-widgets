import angular from 'angular';
import cuteBunny from './cute-bunny';
import './scss/main.scss';

cuteBunny.value('apiUrl', 'http://localhost:3000/api');

angular.bootstrap(document, [cuteBunny.name]);
