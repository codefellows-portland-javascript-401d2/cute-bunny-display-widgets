import template from './app.html';

export default {
  template,
  controllerAs: 'app',
  controller
};

controller.$inject = ['imageService'];

function controller(imageService) {

  imageService
    .get()
    .then(images => {
      this.images = images;
    })
    .catch(err => console.log('Error:', err));

  this.addImage = (post) => {
    this.images.unshift(post);
  };
}
