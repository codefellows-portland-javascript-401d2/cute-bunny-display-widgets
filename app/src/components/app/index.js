import template from './app.html';

export default {
	template,
	controllerAs: 'app',
	controller() {
		this.currentSection = 'text';
		this.data = {
			title: 'Calico Bunny',
			description: 'Too cute to be real.',
			imageLink: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
			imageThumbWidth: 100,
			imageThumbHeight: 67,
			imageFullWidth: 2896,
			imageFullHeight: 1936
		};
	}
};
