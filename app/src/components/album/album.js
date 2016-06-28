import template from './album.html';
import styles from './album.scss';

export default {
  template,
  bindings: {
    display: '='
  },
  controllerAs: 'album',
  controller: ['$location', '$anchorScroll', '$http', controller]
};

function controller ($location, $anchorScroll, $http){

  this.select = function(myId){
    // Switch to Full display
    this.display = 'full';
    // Go to anchor tab with ID
    $location.hash(myId);
    $anchorScroll();
  },
  this.styles = styles;

  $http.get('http://localhost:3000/api/bunnies')
  .then( result => {
    this.arrayOfPics = result.data;
  });

}
