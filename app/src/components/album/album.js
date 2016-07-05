import template from './album.html';
import styles from './album.scss';

export default {
  template,
  bindings: {
    animal: '<'
  },
  controllerAs: 'album',
  controller: ['$location', '$anchorScroll', 'albumService', 'animalService', '$scope', controller]
};

function controller ($location, $anchorScroll, albumService, animalService, $scope){

  $scope.$watch('album.animal', (newValue) => {
    if (this.animal) {
      this.get(newValue);
    }
  });

  this.animalName = '';
  this.arrayOfAnimals = [];

  this.display = 'thumb';

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
    newpic.album = this.animal;
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

  animalService.get()
    .then( data => {
      this.arrayOfAnimals = data;
      const index = this.arrayOfAnimals.findIndex( animalObj => animalObj._id === this.animal);
      if (index !== -1) this.animalname = this.arrayOfAnimals[index].name;
    })
    .catch();

}
