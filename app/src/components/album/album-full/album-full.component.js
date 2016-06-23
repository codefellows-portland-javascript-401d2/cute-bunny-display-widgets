import template from './album-full.view.html';

export default {
  template,
  bindings: {
    data: '='
  },
  require: {
    app: '^^'
  }
};
