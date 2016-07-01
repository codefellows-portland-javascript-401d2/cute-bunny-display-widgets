import './styles/main.scss';

import ng from 'angular';
import appModule from './components/app/app.module';

appModule.value('apiUrl', process.env.API_URL);

ng.bootstrap(document, [appModule.name]);
