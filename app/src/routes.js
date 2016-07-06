configRoutes.$inject = [ '$stateProvider', '$urlRouterProvider' ];

export default function configRoutes( $stateProvider, $urlRouterProvider) {

  $stateProvider
    .state( 'home', {
      url: '/?display?albumId?animalname',
      resolve: {
        display: [ '$stateParams', params => params.display],
        animal: [ '$stateParams', ( params ) => params.albumId],
        animalname: [ '$stateParams', (params) => params.animalname || 'Choose an album']
      },
      views: {
        main: {
          template: '<p>Welcome. Here you will find photos of adorable animals.</p>'
        },
        header: {
          component: 'header'
        }
      }
    })
    .state( 'animals', {
      url: '/animal?display?albumId?animalname',
      resolve: {
        display: ['$stateParams', params => params.display],
        animal: [ '$stateParams', ( params ) => params.albumId],
        animalname: [ '$stateParams', (params) => params.animalname || 'Choose an album'],
        arrayOfAnimals: [ 'animalService', (animalService) => {
          return animalService.get();
        }]
      },
      views: {
        main: {
          component: 'albumPicker'
        },
        header: {
          component: 'header'
        }
      }
    })
    .state( 'album', {
      url: '/album/?display?albumId?animalname?picId',
      resolve: {
        display: [ '$stateParams', ( params ) => params.display || 'thumb' ],
        animal: [ '$stateParams', ( params ) => params.albumId],
        animalname: [ '$stateParams', (params) => params.animalname || 'Choose an album'],
        arrayOfPics: [ 'albumService', '$stateParams', (albumService, params) => {
          if (params.albumId){
            let myAlbum = params.albumId;
            return albumService.get(myAlbum);
          }else{
            return [];
          }
        }],
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
        },
        header: {
          component: 'header'
        }
      }
    });
  $urlRouterProvider.otherwise('/');

}
