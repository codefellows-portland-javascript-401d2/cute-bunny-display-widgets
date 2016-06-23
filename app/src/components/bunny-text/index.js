import template from './bunny-text.html';

export default {
  template,
  bindings: {
    data: '='
  },
  require: {
    app: '^^'
  },
  controllerAs: 'bunnyText'
};
