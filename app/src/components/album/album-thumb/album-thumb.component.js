import template from './album-thumb.view.html';

export default {
  template,
  bindings: {
    data: '='
  },
  require: {
    app: '^^'
  }
};
