import homePage from '../pages/home.page';
import testData from '../testData/testData';
import { expect } from 'chai';

describe('HomePage Suite', () => {
  beforeEach(() => {
    homePage.open();
    homePage.waitForIsShown(true);
  });

  it('Verify that Homepage displays promos and shopping options', () => {
    expect(homePage.blockPromoMain.isDisplayed()).to.equal(true);

    const promoTexts = testData.promoText;
    let i;
    for (i = 0; i < homePage.blockPromos.length && i < homePage.blockPromoImages.length; i++) {
      // Validates Text for each promo tiles
      expect(homePage.blockPromos[i].getText().includes(promoTexts[i])).to.equal(true);

      // Validates Image exists for each promo tiles
      expect(homePage.blockPromoImages[i]).to.exist;
    }

  });

  it('Verify that Homepage displays Hot Sellers', () => {
    const productNames = testData.hotSellerItemName;
    let i;
    for (i = 0; i < homePage.hotSellerItemName.length; i++) {
      // Validate Product Name for each Hot Seller Items
      expect(homePage.hotSellerItemName[i].getText()).to.equal(productNames[i]);
    }
  });
});
