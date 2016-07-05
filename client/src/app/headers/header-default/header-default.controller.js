import data from './header-default.data.json';
import style from './header-default.style.scss';

export default function headerDefaultController() {
  this.style = style;
  this.pages = data.pages;
  this.displays = data.displays;

  this.toggleNav = ($event, sectionName) => {
    $event.preventDefault();

    this.currentSection = sectionName;
  };
};
