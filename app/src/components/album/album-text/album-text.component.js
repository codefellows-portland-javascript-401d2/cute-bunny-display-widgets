import template from './album-text.view.html';

export default {
  template,
  bindings: {
    data: '='
  },
  require: {
    app: '^^'
  }
};
