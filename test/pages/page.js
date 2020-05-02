const DEFAULT_TIMEOUT = 11000;

export default class Page {
  open(path) {
    browser.url(path);
  }

  constructor(selector) {
    this.selector = selector;
  }

  /**
 * Wait for the screen to be visible
 *
 * @param {boolean} isShown
 * @return {boolean}
 */
  waitForIsShown(isShown = true) {
    return $(this.selector).waitForDisplayed(DEFAULT_TIMEOUT, !isShown);
  }
}
