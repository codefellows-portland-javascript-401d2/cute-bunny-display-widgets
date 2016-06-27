import template from './app.view.html';
import styles from './app.styles.scss';
import bunnies from '../../data/bunnies.json';

export default {
	template,
	controller() {
		this.styles = styles;
		this.currentSection = 'list';
		this.bunnies = bunnies;
	}
};
