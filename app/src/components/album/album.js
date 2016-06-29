import template from './album.html';
import styles from './album.scss';

export default {
  template,
  bindings: {
    display: '='
  },
  controllerAs: 'album',
  controller: ['$location', '$anchorScroll', 'albumService', controller]
};

function controller ($location, $anchorScroll, albumService){
  this.select = function(myId){
    // Switch to Full display
    this.display = 'full';
    // Go to anchor tab with ID
    $location.hash(myId);
    $anchorScroll();
  },
  this.remove = function(myId){
    albumService.remove(myId)
    .then( () => {
      const index = this.arrayOfPics.findIndex( pic => pic._id === myId);
      if (index !== -1) this.arrayOfPics.splice(index, 1);
    })
    .catch( err => {
      console.log(err);
    });
  },
  this.addpic = function(newpic){
    console.log('addpic fires');
    console.log(newpic);
    albumService.add(newpic)
    .then( data => {
      this.arrayOfPics.push(data);
    })
    .catch( err => {
      console.log(err);
    });
  },
  this.styles = styles;

  albumService.get()
  .then( result => {
    this.arrayOfPics = result;
  });

}
