// import angular from 'angular';
import template from './app.html';
import styles from './app.scss';

export default {
  template: template,
  controllerAs: 'app',
  bindings: {
  },
  controller: ['animalService', controller]
};


function controller (animalService){

  this.styles = styles;
  this.animal = null;
  this.arrayOfAnimals;
  this.display = 'thumb';
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



};
