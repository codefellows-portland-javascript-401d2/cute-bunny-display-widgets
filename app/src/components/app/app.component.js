import template from './app.view.html';
import styles from './app.styles.scss';

function controller(albumsService) {
  this.styles = styles;
	this.currentSection = 'list';
	this.bunnies = [];
	this.bunniesLoaded = false;

  albumsService
    .getAlbums()
    .then(result => {
      console.log(result);
    });

	// $http
	// 	.get('http://localhost:3000/api/bunnies')
	// 	.then(result => {
	// 		this.bunnies = result.data;
	// 		this.bunniesLoaded = true;
	// 	})
  //   .catch(err => {
  //     console.error(err)
  //   });
}

controller.$inject = ['albumsService'];

export default {
	template,
	controller
};
