describe('angularjs homepage', function() {
    it('should greet the named user', function() {
        // Load the AngularJS homepage.
        browser.get('http://www.angularjs.org');
        element(by.model('yourName')).sendKeys('Mile');
        var greeting = element(by.binding('yourName'));

        expect(greeting.getText()).toEqual('Hello Mile!');
    });
});
