const chai = require('chai');
const chaiHttp = require('chai-http');
const database = require('../lib/database');
const app = require('../lib/app');

const assert = chai.assert;
const databaseConnection = database.connect(process.env.MONGODB_URI);

chai.use(chaiHttp);

describe('End to End Testing', () => {
  let request = chai.request(app);
  let bunniesAlbum = {
    name: 'bunnies'
  };
  let bunnyPhoto = {
    title: 'Calico Bunny',
    description: 'Too cute to be real.',
    photoLink: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
    photoThumbWidth: 150,
    photoThumbHeight: 100,
    photoFullWidth: 504,
    photoFullHeight: 337,
    albums: []
  };

  before(done => {
    databaseConnection.on('open', () => {
      databaseConnection.collections['albums'].drop();
      databaseConnection.collections['photos'].drop();
      done();
    });
  });

  describe('Albums', () => {
    it('Create bunnies album', done => {
      request
        .post('/api/albums')
        .set('Content-Type', 'application/json')
        .send(bunniesAlbum)
        .end((err, res) => {
          if (err) return done(err);

          let data = res.body;

          assert.property(data, 'status');
          assert.equal(data.status, 'success');
          assert.property(data, 'result');
          assert.property(data.result, '_id');
          assert.property(data.result, 'name');
          assert.equal(data.result.name, bunniesAlbum.name);

          bunniesAlbum.id = data.result._id;
          bunnyPhoto.albums.push(data.result._id);

          done();
        });
    });

    it('Get all albums', done => {
      request
        .get('/api/albums')
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          if (err) return done(err);

          let data = res.body;

          assert.property(data, 'status');
          assert.equal(data.status, 'success');
          assert.property(data, 'result');
          assert.lengthOf(data.result, 1);

          done();
        });
    });

    it('Get an album by ID', done => {
      request
        .get(`/api/albums/${bunniesAlbum.id}`)
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          if (err) return done(err);

          let data = res.body;

          assert.property(data, 'status');
          assert.equal(data.status, 'success');
          assert.property(data, 'result');
          assert.property(data.result, '_id');
          assert.equal(data.result._id, bunniesAlbum.id);
          assert.property(data.result, 'name');
          assert.equal(data.result.name, bunniesAlbum.name);

          done();
        });
    });
  });

  describe('Photos', () => {
    it('Create a photo for bunnies album', done => {
      request
      .post('/api/photos')
      .set('Content-Type', 'application/json')
      .send(bunnyPhoto)
      .end((err, res) => {
        if (err) return done(err);

        let data = res.body;

        assert.property(data, 'status');
        assert.equal(data.status, 'success');
        assert.property(data, 'result');
        assert.property(data.result, '_id');
        assert.property(data.result, 'title');
        assert.equal(data.result.title, bunnyPhoto.title);
        assert.property(data.result, 'description');
        assert.equal(data.result.description, bunnyPhoto.description);
        assert.property(data.result, 'photoLink');
        assert.equal(data.result.photoLink, bunnyPhoto.photoLink);
        assert.property(data.result, 'photoThumbWidth');
        assert.equal(data.result.photoThumbWidth, bunnyPhoto.photoThumbWidth);
        assert.property(data.result, 'photoThumbHeight');
        assert.equal(data.result.photoThumbHeight, bunnyPhoto.photoThumbHeight);
        assert.property(data.result, 'photoFullWidth');
        assert.equal(data.result.photoFullWidth, bunnyPhoto.photoFullWidth);
        assert.property(data.result, 'photoFullHeight');
        assert.equal(data.result.photoFullHeight, bunnyPhoto.photoFullHeight);
        assert.property(data.result, 'albums');
        assert.deepEqual(data.result.albums, bunnyPhoto.albums);

        bunnyPhoto.id = data.result._id;

        done();
      });
    });

    it('Get all photos from bunnies album', done => {
      request
      .get('/api/photos')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        if (err) return done(err);

        let data = res.body;

        assert.property(data, 'status');
        assert.equal(data.status, 'success');
        assert.property(data, 'result');
        assert.lengthOf(data.result, 1);

        done();
      });
    });

    it('Get a photo from bunnies album by ID', done => {
      request
      .get(`/api/photos/${bunnyPhoto.id}`)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        if (err) return done(err);

        let data = res.body;

        assert.property(data, 'status');
        assert.equal(data.status, 'success');
        assert.property(data, 'result');
        assert.lengthOf(data.result, 1);
        assert.equal(data.result[0]._id, bunnyPhoto.id);

        done();
      });
    });
  });

  after(done => {
    databaseConnection.close(done);
  });
});
