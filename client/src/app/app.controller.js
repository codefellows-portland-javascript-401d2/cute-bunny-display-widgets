import style from './app.style.scss';

export default function appController() {
  this.style = style;
	// this.currentSection = 'list';
	// this.bunnies = [];
	// this.bunniesLoaded = false;

  // albumsService
  //   .readAlbums()
  //   .then(data => {
  //     photosService
  //       .readPhotos(data.result[0]._id)
  //       .then(data => {
  //         this.bunnies = data.result;
  //   			this.bunniesLoaded = true;
  //       });
  //   });
};
