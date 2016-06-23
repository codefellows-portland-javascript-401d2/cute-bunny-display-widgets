import template from './app.html';
import randomBunny from '../../lib/random-bunny';

export default {
	template,
	controllerAs: 'app',
	controller() {
		this.currentSection = 'text';
		this.data = randomBunny();
	}
};
