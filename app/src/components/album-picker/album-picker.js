import template from './album-picker.html';
import styles from './album-picker.scss';

export default {
  template,
  bindings: {
    animal: '='
  },
  controller: ['animalService', controller]
};

function controller (animalService){
  this.styles = styles;
  this.arrayOfAnimals;

  this.animalselect = function(id){
    // console.log(id);
    this.animal = id;

  };

  animalService.get()
    .then( data => {
      console.log(data);
      this.arrayOfAnimals = data;
    })
    .catch();

}
