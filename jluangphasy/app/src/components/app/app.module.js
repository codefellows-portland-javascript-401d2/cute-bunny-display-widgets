import ng from 'angular';
import albumModule from '../album/album.module';
import servicesModule from '../../services/services.module'

const appModule = ng.module('app', [
  albumModule,
  servicesModule
]);

export default appModule;
