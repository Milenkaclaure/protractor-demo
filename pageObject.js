
var HomePage = function() {


    this.viewOnGitHubButton = element(by.css(".button.button-small.button-plain"));

};
describe('angularjs.org', function() {
    var homePage = new HomePage();

    beforeEach(function() {
        browser.get('https://angularjs.org/');
    });

    it('should have a three buttons', function() {
        expect(homePage.viewOnGitHubButton.isDisplayed()).toBe(true);
    });
});