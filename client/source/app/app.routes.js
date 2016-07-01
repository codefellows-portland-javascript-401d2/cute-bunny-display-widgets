import homeRoutes from './home/home.routes';
import albumsRoutes from './albums/albums.routes';
import photosRoutes from './photos/photos.routes';

routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
				url: '/',
				// views: {
				// 	header: {
				// 	  component: 'homeHeader'
				// 	},
				// 	main: {
				// 	  template: '<p>welcome to our todo app</p>'
				// 	}
			  // }
		});

	$urlRouterProvider.otherwise('/');
}
