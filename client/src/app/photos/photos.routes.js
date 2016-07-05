export default [
  {
    name: 'photo-list',
    config: {
  		url: '/photos',
      resolve: {
				photos: [
          'photosService',
          '$stateParams',
          photosService => photosService
            .readPhotos()
            .then(data => data.result)
        ]
			},
  		views: {
        header: {
          component: 'headerDefault'
        },
  			main: {
  				component: 'photoList'
  			}
  	  }
    }
	},
  {
    name: 'photo-detail',
    config: {
  		url: '/photos/:photoId',
      resolve: {
        photo: [
          'photosService',
          '$stateParams',
          (photosService, params) => photosService
            .readPhoto(params.photoId)
            .then(data => data.result)
        ]
      },
  		views: {
        header: {
          component: 'headerDefault'
        },
  			main: {
  				component: 'photoDetail'
  			}
  	  }
    }
	}
];
