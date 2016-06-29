const chai = require('chai');
const chaiHttp = require('chai-http');
const database = require('../lib/database');
const app = require('../lib/app');

const assert = chai.assert;
const databaseConnection = database.connect(process.env.MONGODB_URI);

chai.use(chaiHttp);

describe('End to End Testing', () => {
  let request = chai.request(app);

  before(done => {
    databaseConnection.on('open', () => {
      databaseConnection.collections['albums'].drop();
      databaseConnection.collections['images'].drop();
      done();
    });
  });

  describe('Albums', () => {
    let bunniesAlbum = {
      name: 'bunnies'
    };

    let bunnyImage = {
      title: 'Calico Bunny',
      description: 'Too cute to be real.',
      imageLink: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
      imageThumbWidth: 150,
      imageThumbHeight: 100,
      imageFullWidth: 504,
      imageFullHeight: 337
    };

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
          bunnyImage.albums = [data.result._id];

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

    it('Create an image for bunnies album', done => {
      request
      .post(`/api/albums/${bunniesAlbum.id}/images`)
      .set('Content-Type', 'application/json')
      .send(bunnyImage)
      .end((err, res) => {
        if (err) return done(err);

        let data = res.body;

        assert.property(data, 'status');
        assert.equal(data.status, 'success');
        assert.property(data, 'result');
        assert.property(data.result, '_id');
        assert.property(data.result, 'title');
        assert.equal(data.result.title, bunnyImage.title);
        assert.property(data.result, 'description');
        assert.equal(data.result.description, bunnyImage.description);
        assert.property(data.result, 'imageLink');
        assert.equal(data.result.imageLink, bunnyImage.imageLink);
        assert.property(data.result, 'imageThumbWidth');
        assert.equal(data.result.imageThumbWidth, bunnyImage.imageThumbWidth);
        assert.property(data.result, 'imageThumbHeight');
        assert.equal(data.result.imageThumbHeight, bunnyImage.imageThumbHeight);
        assert.property(data.result, 'imageFullWidth');
        assert.equal(data.result.imageFullWidth, bunnyImage.imageFullWidth);
        assert.property(data.result, 'imageFullHeight');
        assert.equal(data.result.imageFullHeight, bunnyImage.imageFullHeight);
        assert.property(data.result, 'albums');
        assert.deepEqual(data.result.albums, bunnyImage.albums);

        bunnyImage.id = data.result._id;

        done();
      });
    });

    it('Get all images from bunnies album', done => {
      request
        .get(`/api/albums/${bunniesAlbum.id}/images`)
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

    it('Get an image from bunnies album by ID', done => {
      request
        .get(`/api/albums/${bunniesAlbum.id}/images/${bunnyImage.id}`)
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          if (err) return done(err);

          let data = res.body;

          assert.property(data, 'status');
          assert.equal(data.status, 'success');
          assert.property(data, 'result');
          assert.lengthOf(data.result, 1);
          assert.equal(data.result[0]._id, bunnyImage.id);

          done();
        });
    });
  });

  after(done => {
    databaseConnection.close(done);
  });
});
