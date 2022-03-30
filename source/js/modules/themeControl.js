let pageHeaderMenuElement = document.querySelector(`.page-header__menu`);

export default class ThemeControl {
  constructor() {
    this.element = pageHeaderMenuElement;
  }

  addThemeClass() {
    this.element.classList.add(`theme`);
  }

  removeThemeClass() {
    this.element.classList.remove(`theme`);
  }

  addFirstThemeClass() {
    this.element.classList.add(`theme--1`);
  }

  addSecondThemeClass() {
    this.element.classList.add(`theme--2`);
  }

  addThirdThemeClass() {
    this.element.classList.add(`theme--3`);
  }

  addFourthThemeClass() {
    this.element.classList.add(`theme--4`);
  }

  removeThemeClasses() {
    this.element.classList.remove(`theme--1`);
    this.element.classList.remove(`theme--2`);
    this.element.classList.remove(`theme--3`);
    this.element.classList.remove(`theme--4`);
  }
}
