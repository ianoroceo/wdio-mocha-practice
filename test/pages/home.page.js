import Page from './page';

class HomePage extends Page {
/**
* define elements
/
/**
* Common sections. This need to move to specific common pageObjects
*/
  get headerSection() {return $('.page-header');}
  get mainContent() {return $('#maincontent');}
  get footerSection() {return $('.page-footer');}
  get copyright() {return $('.copyright');}

  /**
       * Main Section Content
       */
  get blockPromoMain() {return $('.block-promo.home-main');}
  get shopPants() {return $('.home-pants');}
  get shopTees() {return $('.home-t-shirts');}
  get shopErin() {return $('.home-erin');}
  get shopPerformance() {return $('.home-perormance');}
  get shopEco() {return $('.home-eco');}

  /**
       * define or overwrite page methods
       */

  open() {
    super.open('/');
    return this;
  }

  constructor() {
    super('#maincontent');
  }
}

export default new HomePage();
