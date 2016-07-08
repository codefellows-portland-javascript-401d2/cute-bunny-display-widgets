import template from './header.html';
import styles from './header.scss';

export default {
  template,
  bindings: {
    display: '<',
    animal: '<',
    animalname: '<'
  },
  controller: ['userService', function(userService){
    this.styles = styles;
    this.logout = () => userService.logout();
  }]
};
