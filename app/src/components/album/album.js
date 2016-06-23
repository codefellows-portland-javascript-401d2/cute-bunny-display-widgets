import template from './album.html';

export default {
  template,
  bindings: {
    display: '='
  },
  controllerAs: 'album',
  controller: function(){
    this.arrayOfPics = [
      {
        title: 'Melville',
        description: 'Calico bunny next to a brick wall',
        thumbpic: './src/data/small1.jpg',
        url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
      },
      {
        title: 'Rhonda',
        description: 'Orange bunny sticking out its tongue',
        thumbpic: './src/data/small2.jpg',
        url: 'http://cdn.earthporm.com/wp-content/uploads/2014/07/cute-bunnies-tongues-6.jpg'
      },
      {
        title: 'Cedar',
        description: 'Floppy eared bunny',
        thumbpic: './src/data/small3.jpg',
        url: 'http://rexrabbitsusa.com/wp-content/uploads/2015/03/Bunny-Wallpapers-bunny-rabbits-128637_1024_768.jpg'
      },
      {
        title: 'Marv',
        description: 'White bunny on grass',
        thumbpic: './src/data/small4.jpg',
        url: 'http://slodive.com/wp-content/uploads/2013/02/cute-bunny-pictures/cute.jpg'
      },
      {
        title: 'Hank',
        description: 'Tiny white bunny looking up',
        thumbpic: './src/data/small5.jpg',
        url: 'http://maxcdn.thedesigninspiration.com/wp-content/uploads/2014/07/Cute-Rabbits-026.jpg'
      },
      {
        title: 'Eloise',
        description: 'White bunny on a log',
        thumbpic: './src/data/small6.jpg',
        url: 'http://media1.santabanta.com/full1/Animals/Rabbits/rabbits-12a.jpg'
      },
      {
        title: 'Quian',
        description: 'Kooky askew bunny with tongue',
        thumbpic: './src/data/small7.jpg',
        url: 'http://cdn.earthporm.com/wp-content/uploads/2014/07/cute-bunnies-tongues-3.jpg'
      },
      {
        title: 'Roz',
        description: 'Fluffy tiny orange bunny',
        thumbpic: './src/data/small8.jpg',
        url: 'http://cdn.kickvick.com/wp-content/uploads/2015/09/cutest-bunny-rabbits-05.jpg'
      },
      {
        title: 'Elmer',
        description: 'Bunny inside a knitted cap',
        thumbpic: './src/data/small9.jpg',
        url: 'https://www.viewfoo.com/uploads/images/125_1419030600_croppicorgimgbunnyjpg.jpg'
      },
      {
        title: 'Sissy',
        description: 'Superhero bunny in disguise',
        thumbpic: './src/data/small10.jpg',
        url: 'http://cdnpix.com/show/imgs/1fa0e6dd961b82cee622fa9710ea7d4a.jpg'
      }
    ];
  }
};
