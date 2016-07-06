configRoutes.$inject = [ '$stateProvider', '$urlRouterProvider' ];

export default function configRoutes( $stateProvider, $urlRouterProvider) {

  $stateProvider
    .state( 'home', {
      url: '/',
      views: {
        main: {
          template: '<p>Welcome. Here you will find photos of adorable animals.</p>'
        }
      }
    })
    .state( 'animals', {
      url: '/animal',
      resolve: {
        arrayOfAnimals: [ 'animalService', (animalService) => {
          return animalService.get();
        }]
      },
      views: {
        main: {
          component: 'albumPicker'
        }
      }
    })
    .state( 'album', {
      url: '/album/?albumId?display?picId?animalname',
      resolve: {
        animal: [ '$stateParams', ( params ) => params.albumId || '577576fd2cf646f53a23a7e0' ],
        arrayOfPics: [ 'albumService', '$stateParams', (albumService, params) => {
          let myAlbum = params.albumId || '577576fd2cf646f53a23a7e0';
          return albumService.get(myAlbum);
        }],
        animalname: [ '$stateParams', (params) => params.animalname || 'George of the Jungle'],
        display: [ '$stateParams', ( params ) => params.display || 'thumb' ],
        picId: [ '$stateParams', '$timeout', '$anchorScroll', ( params, $timeout, $anchorScroll ) => {
          if (params.picId){
            $timeout(() => {
              $anchorScroll(params.picId);
            }, 400);
          }
          return params.picId;
        }],
        arrayOfAnimals: [ 'animalService', (animalService) => {
          return animalService.get();
        }]
      },
      views: {
        main: {
          component: 'album'
        }
      }
    });
  $urlRouterProvider.otherwise('/');

}
