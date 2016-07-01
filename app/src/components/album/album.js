import template from './album.html';
import styles from './album.scss';

export default {
  template,
  bindings: {
    display: '<',
    animal: '<'
  },
  controllerAs: 'album',
  controller: ['$location', '$anchorScroll', 'albumService', '$scope', controller]
};

function controller ($location, $anchorScroll, albumService, $scope){
  $scope.$watch('album.animal', function(newValue) {
    console.log(`album receives new animal of ${newValue}`);
  });


  this.select = function(myId){
    // Switch to Full display
    this.display = 'full';
    // Go to anchor tab with ID
    $location.hash(myId);
    $anchorScroll();
  },
  this.remove = function(myId){
    albumService.remove(myId)
    .then( () => {
      const index = this.arrayOfPics.findIndex( pic => pic._id === myId);
      if (index !== -1) this.arrayOfPics.splice(index, 1);
    })
    .catch( err => {
      console.log(err);
    });
  },
  this.addpic = function(newpic){
    albumService.add(newpic)
    .then( data => {
      this.arrayOfPics.push(data);
    })
    .catch( err => {
      console.log(err);
    });
  },
  this.get = function(albumId){
    albumService.get(albumId)
    .then( data => {
      this.arrayOfPics = data;
    });
  };
  this.styles = styles;

  // Initial pics loading

  this.get('577576fd2cf646f53a23a7e0');

}
