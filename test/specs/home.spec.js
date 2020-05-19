import homePage from '../pages/home.page';
import testData from '../testData/testData';
import { expect } from 'chai';

describe('HomePage Test Suite', () => {
  beforeEach(() => {
    homePage.open();
    homePage.waitForIsShown(true);
  });

  it('Should display the promos and shopping options in the Homepage', () => {
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

  it('Should display Hot Sellers im the HomePage', () => {
    const productNames = testData.hotSellerItemName;
    let i;
    for (i = 0; i < homePage.hotSellerItemName.length; i++) {
      // Validate Product Name for each Hot Seller Items
      expect(homePage.hotSellerItemName[i].getText()).to.equal(productNames[i]);
    }
  });
});
