import auth from './auth/auth.routes';
import home from './home/home.routes';
import albums from './albums/albums.routes';
import photos from './photos/photos.routes';

routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
  [].concat(auth, home, albums, photos).forEach(route => {
    $stateProvider.state(route.name, route.config)
  });

  $urlRouterProvider.otherwise('/');
}
