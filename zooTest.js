require('./pages/home_page');

describe('Testing an animal adoption flow using page object', function() {

    beforeEach(function() {
        browser.get('http://www.thetestroom.com/jswebapp/index.html');

    });


    var home_page = require('./pages/home_page');
    it ('Should be able to adopt an animal by page object', function() {
        home_page.enterName('Blabla');
        expect(home_page.getDynamicText()).toBe('Blabla');
        var animal_page = home_page.clickContinue();

        animal_page.selectAnimal(1);
        animal_page.clickContinue();

        /*
        var confirm_page = animal_page.clickContinue();

        expect(confirm_page.getTitle()).toContain('Thank');*/
    });
});