import template from './display-thumb.html';
import style from './thumb.css';

export default {
  template,
  controllerAs: 'thumb',
  require: {
    app: '^^'
  },
  controller: function() {
    this.style = style;
  }
};