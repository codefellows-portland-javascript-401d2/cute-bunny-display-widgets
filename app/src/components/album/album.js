import template from './album.html';
import styles from './album.scss';

export default {
  template,
  bindings: {
    animal: '<',
    display: '<',
    picId: '<'
  },
  controllerAs: 'album',
  controller: ['$location', '$anchorScroll', 'albumService', 'animalService', '$scope', '$state', '$timeout', controller]
};

function controller ($location, $anchorScroll, albumService, animalService, $scope, $state, $timeout){

  this.styles = styles;
  this.animalName = '';
  this.arrayOfAnimals = [];

  $scope.$watch('album.animal', (newValue) => {
    if (this.animal) {
      this.get(newValue);
    }
  });

  $scope.$watch('critter', (newValue) => {
    if (newValue){
      $state.go('album', {'albumId': newValue});
    }
  });

  $scope.$watch('album.picId', (newValue) => {
    if (newValue) {
      console.log(newValue);
      $timeout(() => {
        $location.hash(newValue);
        $anchorScroll();
        // $location.hash('');
      }, 100);

    }
  });

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

  animalService.get()
    .then( data => {
      this.arrayOfAnimals = data;
      const index = this.arrayOfAnimals.findIndex( animalObj => animalObj._id === this.animal);
      if (index !== -1) {
        this.animalname = this.arrayOfAnimals[index].name;
        $scope.critter = this.arrayOfAnimals[index]._id;
      }
    })
    .catch();
}
