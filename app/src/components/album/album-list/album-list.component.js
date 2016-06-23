import template from './album-list.view.html';

export default {
  template,
  bindings: {
    bunnies: '='
  },
  require: {
    app: '^^'
  }
};
