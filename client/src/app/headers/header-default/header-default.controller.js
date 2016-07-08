import data from './header-default.data.json';
import style from './header-default.style.scss';

headerDefaultController.$inject = ['$state'];

export default function headerDefaultController($state) {
  this.style = style;
  this.pages = data.pages;
  this.displays = data.displays;
  this.isPrivate = $state.current.data.requireAuth;

  this.toggleNav = ($event, sectionName) => {
    $event.preventDefault();

    this.currentSection = sectionName;
  };
};
