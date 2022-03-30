let pageHeaderMenu = document.querySelector(`.page-header__menu`);

export default class MenuClassControl {
  constructor() {
    this.element = pageHeaderMenu;
  }

  addHistoryScreenClass() {
    this.element.classList.add(`page-header__menu--history`);
  }

  removeHistoryScreenClass() {
    this.element.classList.remove(`page-header__menu--history`);
  }

  addFirstHistoryScreenClass() {
    this.element.classList.add(`page-header__menu--history-1`);
  }

  addSecondHistoryScreenClass() {
    this.element.classList.add(`page-header__menu--history-3`);
  }

  addThirdHistoryScreenClass() {
    this.element.classList.add(`page-header__menu--history-5`);
  }

  addFourthHistoryScreenClass() {
    this.element.classList.add(`page-header__menu--history-7`);
  }

  removeHistoryClasses() {
    this.element.classList.remove(`page-header__menu--history-1`);
    this.element.classList.remove(`page-header__menu--history-3`);
    this.element.classList.remove(`page-header__menu--history-5`);
    this.element.classList.remove(`page-header__menu--history-7`);
  }
}
