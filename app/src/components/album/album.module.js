import ng from 'angular';
import appComponent from '../app/app.component';
import albumNavComponent from './album-nav/album-nav.component';
import albumListComponent from './album-list/album-list.component';
import albumTileComponent from './album-tile/album-tile.component';
import albumFullComponent from './album-full/album-full.component';

const albumModule = ng
  .module('components', [])
	.component('app', appComponent)
  .component('albumNav', albumNavComponent)
  .component('albumList', albumListComponent)
  .component('albumTile', albumTileComponent)
  .component('albumFull', albumFullComponent);

export default albumModule.name;
