import controller from './photo-list.controller.js';
import template from './photo-list.view.html';

export default {
	bindings: {
		photos: '<'
	},
	controller,
	template
};
