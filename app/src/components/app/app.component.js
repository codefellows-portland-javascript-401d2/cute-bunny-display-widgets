import template from './app.view.html';
import bunnies from '../../data/bunnies.json';

export default {
	template,
	controller() {
		this.currentSection = 'list';
		this.bunnies = bunnies;
	}
};
