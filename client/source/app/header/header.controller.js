import data from './header.data.json';
import style from './header.style.scss';

export default function headerController() {
  this.style = style;
  this.sections = data.sections;

  this.toggleNav = ($event, sectionName) => {
    $event.preventDefault();

    this.currentSection = sectionName;
  };
};
