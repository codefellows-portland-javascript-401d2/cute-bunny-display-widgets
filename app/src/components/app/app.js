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

  this.addImage = (image) => {
    imageService
      .post(image)
      .then(image => {
        this.images.unshift(image);
      })
      .catch(err => {
        console.log(err);
        if (err.data.content.message == 'Monster validation failed') {
          console.log('Image Needs a Title');
        }

      });
  };
}
