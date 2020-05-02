import Page from '../page';

class Header extends Page {
  /**
     * define elements
     */
  get headerMsg() {return $('.page-header .welcome');}
  get signIn() {return $('.page-header .authorization-link');}
  get createAccount() {return $('.page-header li:last-child');}

  /**
     * define or overwrite page methods
     */

  clickCreateAccount() {
    this.createAccount.click();
    return this;
  }
}

export default new Header();
