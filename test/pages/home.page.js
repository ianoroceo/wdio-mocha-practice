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
  get shopPants() {return $('.block-promo-hp .home-pants');}
  get shopTees() {return $('.block-promo-hp .home-t-shirts');}
  get shopErin() {return $('.block-promo-hp .home-erin');}
  get shopPerformance() {return $('.block-promo-hp .home-perormance');}
  get shopEco() {return $('.block-promo-hp .home-eco');}

  get blockPromos() {return $$('.block-promo-hp a');}
  get blockPromoImages() {return $$('.block-promo-hp img');}

  get hotSellerItems() {return $$('.widget-product-grid .product-item-info');}
  get hotSellerItemName() {return $$('.widget-product-grid .product-item-name');}

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
