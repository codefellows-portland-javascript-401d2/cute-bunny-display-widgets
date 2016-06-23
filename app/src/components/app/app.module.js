import ng from 'angular';
import albumModule from '../album/album.module';

const appModule = ng
  .module('app', [albumModule]);

export default appModule.name;
