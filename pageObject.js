var HomePage = function() {
    this.viewOnGitHubButton = element(by.css(".button.button-small.button-plain"));

};
describe('angularjs.org', function() {
    //var homePage =  require("./pages/HomePage");
    var homePage = new HomePage();

    beforeEach(function() {
        browser.get('https://angularjs.org/');
    });

    it('should have a github buttons', function() {
        expect(homePage.viewOnGitHubButton.isDisplayed()).toBe(true);
    });
    it('should redirect to github', function(){
        homePage.viewOnGitHubButton.click();
    });
});