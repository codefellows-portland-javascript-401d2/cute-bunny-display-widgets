import angular from 'angular';
import cuteBunny from './cute-bunny';
import routes from './routes';
import http from './http';
import auth from './auth';
import './scss/main.scss';

cuteBunny.config(http);
cuteBunny.config(routes);
cuteBunny.value('apiUrl', 'https://animal-photo-album.herokuapp.com/api');
cuteBunny.run(auth);

angular.bootstrap(document, [cuteBunny.name]);
