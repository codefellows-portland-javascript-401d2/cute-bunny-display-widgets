import ng from 'angular';
import appComponent from '../app/app.component';
import albumNavComponent from './album-nav/album-nav.component';
import albumTextComponent from './album-text/album-text.component';
import albumThumbComponent from './album-thumb/album-thumb.component';
import albumFullComponent from './album-full/album-full.component';

const albumModule = ng
  .module('components', [])
	.component('app', appComponent)
  .component('albumNav', albumNavComponent)
  .component('albumText', albumTextComponent)
  .component('albumThumb', albumThumbComponent)
  .component('albumFull', albumFullComponent);

export default albumModule.name;
