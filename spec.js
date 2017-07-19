describe('Testing an animal adoption flow using page object', function() {

    beforeEach(function() {
        browser.get('http://www.thetestroom.com/jswebapp/index.html');
    });

    it ('Should be able to adopt an animal by page object', function() {

        // enter name
        element(by.model('person.name')).sendKeys('Milenka');
        // validate that the dynamic text is the entered name
        expect(element(by.binding('person.name')).getText()).toBe('Milenka');
        // click on continue
        element(by.buttonText('CONTINUE')).click();

        // select an animal from a list
        element(by.model('animal')).$('[value="2"]').click();
        // click on continue
        element(by.buttonText('CONTINUE')).click();

        // validate the operation was successful
        expect($('#title').getText()).toContain('Thank');

    });
});
