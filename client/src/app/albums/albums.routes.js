export default [
  {
    name: 'album-list',
    config: {
  		url: '/albums',
      resolve: {
				albums: [
          'albumsService',
          '$stateParams',
          albumsService => albumsService
            .readAlbums()
            .then(data => data.result)
        ]
			},
  		views: {
        header: {
          component: 'headerDefault'
        },
  			main: {
  				component: 'albumList'
  			}
  	  }
    }
	},
  {
    name: 'album-detail',
    config: {
  		url: '/albums/:albumId',
      resolve: {
				album: [
          'albumsService',
          '$stateParams',
          (albumsService, params) => albumsService
            .readAlbum(params.albumId)
            .then(data => data.result)
        ],
        photos: [
          'photosService',
          '$stateParams',
          (photosService, params) => photosService
            .readPhotos(params.albumId)
            .then(data => data.result)
        ]
			},
  		views: {
        header: {
          component: 'headerDefault'
        },
  			main: {
  				component: 'albumDetail'
  			}
  	  }
    }
	}
];
