import angular from 'angular';
import cuteBunny from './cute-bunny';
import routes from './routes';
import './scss/main.scss';

cuteBunny.config(routes);

cuteBunny.value('apiUrl', 'http://localhost:3000/api');

angular.bootstrap(document, [cuteBunny.name]);
