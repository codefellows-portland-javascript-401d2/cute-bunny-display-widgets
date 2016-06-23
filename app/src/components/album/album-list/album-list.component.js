import template from './album-list.view.html';

export default {
  template,
  bindings: {
    data: '='
  },
  require: {
    app: '^^'
  }
};
