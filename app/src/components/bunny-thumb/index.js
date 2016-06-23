import template from './bunny-thumb.html';

export default {
  template,
  bindings: {
    data: '='
  },
  require: {
    app: '^^'
  },
  controllerAs: 'bunnyThumb'
};
