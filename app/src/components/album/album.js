import template from './album.html';
import styles from './album.scss';

export default {
  template,
  bindings: {
    animal: '<',
    animalname: '<',
    display: '<',
    picId: '<',
    arrayOfAnimals: '<',
    arrayOfPics: '<'
  },
  controller: ['albumService', '$scope', '$state', controller]
};

function controller (albumService, $scope, $state){
  this.styles = styles;

  $scope.$watch('$ctrl.animal', () => {
    if (this.animal) {
      $scope.critter = this.animal;
    }
  });

  $scope.$watch('critter', (newValue) => {
    if (newValue){
      const index = this.arrayOfAnimals.findIndex(item => item._id === newValue);
      const animalname = (index !== -1) ? this.arrayOfAnimals[index].name : 'Hector Spektor';
      $state.go('album', {'albumId': newValue, 'animalname': animalname});
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
}
