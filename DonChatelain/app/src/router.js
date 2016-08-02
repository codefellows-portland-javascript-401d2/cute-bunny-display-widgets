configRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function configRoutes($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('landing', {
      url: '/',
      data: {requiresAuth: false},
      views: {
        main: {
          template: '<h2 class="welcome">Welcome</h2><h2 class="reflection">Welcome</h2>' 
        }
      }
    })
    .state('gallery', {
      url: '/gallery/:album?view',
      data: {requiresAuth: true},
      params: {
        view: {dynamic: true}
      },
      resolve: {
        images: ['imageService', '$stateParams', (imgSvc, params) => {
          if (params.album) {
            return imgSvc.getByAlbum(params.album);
          } 
          else {
            return imgSvc.get();
          }
        }],
        albumSelect: ['$stateParams', params => params.album],
        viewOption: ['$stateParams', params => params.view || 'thumb']
      },
      views: {
        main: {
          component: 'toggler'
        }
      }
    })
    .state('newPost', {
      url: '/addimage',
      data: {requiresAuth: true},
      views: {
        main: {
          component: 'newPost'
        }
      }
    })
    .state('albums', {
      url: '/albums',
      data: {requiresAuth: true},
      views: {
        main: {
          component: 'albumControl'
        }
      }
    });

  $urlRouterProvider.otherwise( '/' );

};