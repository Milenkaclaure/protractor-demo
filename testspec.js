// spec.js
describe('Protractor Demo App', function() {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));
    var history = element.all(by.repeater('result in memory'));
    beforeEach(function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
    });
    function add(a, b) {
        firstNumber.sendKeys(a);
        secondNumber.sendKeys(b);
        goButton.click();
    }
    it('should count all the history', function() {
        add(1, 2);
        add(3, 4);
        add(5, 6);
        var numberOfElements =  element.all(by.repeater('result in memory')).count();
        expect(numberOfElements).toEqual(3);
    });


    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('should reduse two from three', function() {
        firstNumber.sendKeys(3);
        element(by.cssContainingText('option', '-')).click();
        secondNumber.sendKeys(2);
        goButton.click();

        expect(latestResult.getText()).toEqual('1');
    });

    it('should add four and six', function() {
        firstNumber.sendKeys(3);
        secondNumber.sendKeys(7);
        goButton.click();

        expect(latestResult.getText()).toEqual('10');
    });

    it('should have a history', function() {
        add(1, 2);
        add(3, 4);
        add(5, 6);

        expect(history.last().getText()).toContain('1 + 2');
    });




});