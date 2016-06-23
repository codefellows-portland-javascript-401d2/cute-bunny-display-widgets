import template from './app.view.html';
import randomBunny from '../../lib/random-bunny';

export default {
	template,
	controller() {
		this.currentSection = 'text';
		this.data = randomBunny();
	}
};
