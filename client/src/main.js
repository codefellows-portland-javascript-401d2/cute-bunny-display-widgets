import angular from 'angular';
import app from './app/app.module';

import './styles/main.scss';

angular.bootstrap(document, [
  app.name
]);
