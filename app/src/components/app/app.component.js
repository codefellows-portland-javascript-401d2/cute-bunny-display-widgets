import template from './app.view.html';
import styles from './app.styles.scss';

function controller($http) {
  this.styles = styles;
	this.currentSection = 'list';
	this.bunnies = [];
	this.bunniesLoaded = false;

	$http
		.get('http://localhost:3000/api/bunnies')
		.then(result => {
			this.bunnies = result.data;
			this.bunniesLoaded = true;
		})
    .catch(err => {
      console.error(err)
    });
}

controller.$inject = ['$http'];

export default {
	template,
	controller
};
