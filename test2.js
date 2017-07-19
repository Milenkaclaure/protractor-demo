describe('angularjs homepage', function() {
    it('should greet the named user', function() {
        browser.driver.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        browser.get('https://www.google.com');

       var element = browser.driver.findElement(by.id("lst-ib"));
        element.sendKeys("protractor", protractor.Key.ENTER);
        browser.sleep(200);

    });
});
