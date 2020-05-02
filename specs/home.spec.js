import homePage from '../pageObjects/home.page';

describe('HomePage Suite', function () {
    beforeEach(function () {
        homePage.open();
    });

    it('Should display promos', function () {
        homePage.waitForIsShown(true);
        expect(homePage.blockPromoMain.isDisplayed()).toEqual(true);
    });
});
