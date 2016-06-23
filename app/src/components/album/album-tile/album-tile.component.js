import template from './album-tile.view.html';

export default {
  template,
  bindings: {
    bunnies: '='
  },
  require: {
    app: '^^'
  }
};
