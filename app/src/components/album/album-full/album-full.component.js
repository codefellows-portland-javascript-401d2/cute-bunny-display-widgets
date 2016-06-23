import template from './album-full.view.html';

export default {
  template,
  bindings: {
    bunnies: '='
  },
  require: {
    app: '^^'
  }
};
