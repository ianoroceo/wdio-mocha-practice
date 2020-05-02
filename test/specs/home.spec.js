import homePage from '../pages/home.page';

describe('HomePage Suite', function() {
  it('Should display promos', function() {
    homePage.open();
    homePage.waitForIsShown(true);
    expect(homePage.blockPromoMain.isDisplayed()).toEqual(true);
  });
});
