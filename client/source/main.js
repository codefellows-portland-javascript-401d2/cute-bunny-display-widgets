import './styles/main.scss';

import angular from 'angular';
import appModule from './app/app.module';

angular.bootstrap(document, [
  appModule.name
]);
