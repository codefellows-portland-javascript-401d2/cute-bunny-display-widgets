import template from './album-tile.view.html';

export default {
  template,
  bindings: {
    data: '='
  },
  require: {
    app: '^^'
  }
};
