import template from './app.view.html';
import styles from './app.styles.scss';

function controller(albumsService) {
  this.styles = styles;
	this.currentSection = 'list';
	this.bunnies = [];
	this.bunniesLoaded = false;

  albumsService
    .getAlbums()
    .then(data => {
      albumsService
        .getImages(data.result[0]._id)
        .then(data => {
          this.bunnies = data.result;
    			this.bunniesLoaded = true;
        });
    });
}

controller.$inject = ['albumsService'];

export default {
	template,
	controller
};
