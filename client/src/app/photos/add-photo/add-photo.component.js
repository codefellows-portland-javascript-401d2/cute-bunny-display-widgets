import controller from './add-photo.controller.js';
import template from './add-photo.view.html';

export default {
	bindings: {
		album: '=',
		photos: '='
	},
	controller,
	template
};
