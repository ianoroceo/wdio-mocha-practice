import config from '../config/config';
import { DEFAULT_TIMEOUT } from '../constants';

export default class Page {
    open () {
        browser.url(config.url);
    }

    constructor (selector) {
        this.selector = selector;
    }

    /**
     * Wait for the screen to be visible
     *
     * @param {boolean} isShown
     * @return {boolean}
     */
    waitForIsShown (isShown = true) {
        return $(this.selector).waitForDisplayed(DEFAULT_TIMEOUT, !isShown);
    }
}
