import controller from './album-detail.controller.js';
import template from './album-detail.view.html';

export default {
	bindings: {
		album: '<',
		photos: '<'
	},
	controller,
	template
};
