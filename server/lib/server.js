const express = require('express');
const app = express();

app.use(express.static(__dirname + './../public'));

app.use( ( req, res, next ) => {
  const url = '*';
  res.header( 'Access-Control-Allow-Origin', url );
  res.header( 'Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE' );
  res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );
  next();
});

const arrayOfBunnies = [
  {
    id: 1,
    title: 'Melville Mulligan',
    description: 'Calico bunny next to a brick wall',
    url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
  },
  {
    id: 2,
    title: 'Rhonda Straits',
    description: 'Orange bunny sticking out its tongue',
    url: 'http://cdn.earthporm.com/wp-content/uploads/2014/07/cute-bunnies-tongues-6.jpg'
  },
  {
    id: 3,
    title: 'Cedar River',
    description: 'Floppy eared bunny',
    url: 'http://rexrabbitsusa.com/wp-content/uploads/2015/03/Bunny-Wallpapers-bunny-rabbits-128637_1024_768.jpg'
  },
  {
    id: 4,
    title: 'Marv',
    description: 'White bunny on grass',
    url: 'http://slodive.com/wp-content/uploads/2013/02/cute-bunny-pictures/cute.jpg'
  },
  {
    id: 5,
    title: 'Hank',
    description: 'Tiny white bunny looking up',
    url: 'http://maxcdn.thedesigninspiration.com/wp-content/uploads/2014/07/Cute-Rabbits-026.jpg'
  },
  {
    id: 6,
    title: 'Eloise',
    description: 'White bunny on a log',
    url: 'http://media1.santabanta.com/full1/Animals/Rabbits/rabbits-12a.jpg'
  },
  {
    id: 7,
    title: 'Quian',
    description: 'Kooky askew bunny with tongue',
    url: 'http://cdn.earthporm.com/wp-content/uploads/2014/07/cute-bunnies-tongues-3.jpg'
  },
  {
    id: 8,
    title: 'Roz',
    description: 'Fluffy tiny orange bunny',
    url: 'http://cdn.kickvick.com/wp-content/uploads/2015/09/cutest-bunny-rabbits-05.jpg'
  },
  {
    id: 9,
    title: 'Elmer',
    description: 'Bunny inside a knitted cap',
    url: 'https://www.viewfoo.com/uploads/images/125_1419030600_croppicorgimgbunnyjpg.jpg'
  },
  {
    id: 10,
    title: 'Sissy',
    description: 'Superhero bunny in disguise',
    url: 'http://cdnpix.com/show/imgs/1fa0e6dd961b82cee622fa9710ea7d4a.jpg'
  }
];

app.get('/api/bunnies', (req, res)=> {
  res.send(arrayOfBunnies);
});

module.exports = app;
