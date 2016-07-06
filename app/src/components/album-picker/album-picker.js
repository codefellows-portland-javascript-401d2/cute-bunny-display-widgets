import template from './album-picker.html';
import styles from './album-picker.scss';

export default {
  template,
  bindings: {
    arrayOfAnimals: '='
  },
  controller: ['animalService', controller]
};

function controller (animalService){
  this.styles = styles;
  this.animal;

  this.animalselect = function(animalObj){
    this.animal = animalObj;
  },
  this.addanimal = function(newanimal) {
    animalService.add(newanimal)
    .then( data => {
      this.arrayOfAnimals.push(data);
    })
    .catch( err => {
      console.log(err);
    });
  },
  this.removealbum = function(albumId){
    console.log('remove album fires in app');
    console.log(albumId);
    animalService.remove(albumId)
    .then( () => {
      const index = this.arrayOfAnimals.findIndex( album => album._id === albumId);
      if (index !== -1) this.arrayOfAnimals.splice(index, 1);
      this.animal = null;
    })
    .catch();
  };
}
