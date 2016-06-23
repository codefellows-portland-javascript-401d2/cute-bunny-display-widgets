import template from './bunny-full.html';

export default {
  template,
  bindings: {
    data: '='
  },
  require: {
    app: '^^'
  },
  controllerAs: 'bunnyFull'
};
