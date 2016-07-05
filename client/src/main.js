import './styles/main.scss';

import angular from 'angular';
import app from './app/app.module';

angular.bootstrap(document, [
  app.name
]);
