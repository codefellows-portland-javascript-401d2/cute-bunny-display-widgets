import template from './album-picker.html';
import styles from './album-picker.scss';

export default {
  template,
  bindings: {
    animal: '=',
    arrayOfAnimals: '='
  },
  controller: ['animalService', controller]
};

function controller (animalService){
  this.styles = styles;

  this.animalselect = function(animalObj){
    this.animal = animalObj;
  };

  this.addanimal = function(newanimal) {
    animalService.add(newanimal)
    .then( data => {
      this.arrayOfAnimals.push(data);
    })
    .catch( err => {
      console.log(err);
    });
  },

  animalService.get()
    .then( data => {
      this.arrayOfAnimals = data;
    })
    .catch();



}
