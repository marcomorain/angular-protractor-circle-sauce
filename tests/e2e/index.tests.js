describe("angular-protractor-circle-sauce", function () {
  // if the problem is a timing issues, these could help:
  // browser.manage().timeouts().pageLoadTimeout(10000);
  // browser.manage().timeouts().setScriptTimeout(30);

  describe("index", function () {
    it("should display the correct title", function () {
      browser.get('/#');
      expect(browser.getTitle()).toBe('Hello World');
    });
  });
});
