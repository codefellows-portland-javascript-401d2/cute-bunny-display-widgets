import template from './album.html';
import styles from './album.scss';

export default {
  template,
  bindings: {
    display: '='
  },
  controllerAs: 'album',
  controller: ['$location', '$anchorScroll', 'albumService', controller]
};

function controller ($location, $anchorScroll, albumService){

  this.select = function(myId){
    // Switch to Full display
    this.display = 'full';
    // Go to anchor tab with ID
    $location.hash(myId);
    $anchorScroll();
  },
  this.styles = styles;

  albumService.get()
  .then( result => {
    this.arrayOfPics = result;
  });

}
