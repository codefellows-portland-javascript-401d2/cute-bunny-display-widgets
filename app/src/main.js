import './styles/main.scss';

import ng from 'angular';
import appModule from './components/app/app.module';

appModule.value('apiUrl', 'http://localhost:3000/api');

ng.bootstrap(document, [appModule.name]);
