import controller from './album-list.controller.js';
import template from './album-list.view.html';

export default {
	bindings: {
		albums: '<'
	},
	controller,
	template
};
