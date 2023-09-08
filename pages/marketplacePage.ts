export default class MarketPlace {
  driver: WebdriverIO.Browser;

  /**
   * The constructor function initializes a class instance with a driver object.
   * @param driver - The `driver` parameter is of type `WebdriverIO.Browser`. It represents the browser
   * instance that will be used for automation.
   */
  constructor(driver: WebdriverIO.Browser) {
    this.driver = driver;
  }
  /**
   * The function returns the element with the locator "~Login here".
   * @returns The loginHere_button element is being returned.
   */
  public get loginHere_button() {
    return $("~Login here");
  }
  /**
   * The function returns the element with the locator "~Smash".
   * @returns The code is returning the element with the identifier "~Smash".
   */
  public get smash_button() {
    return $("~Smash");
  }
  /**
   * The function returns the element with the name "Log in" in the XCUIElementTypeStaticText type.
   * @returns The code is returning an element with the XPath '//XCUIElementTypeStaticText[@name="Log
   * in"]'.
   */
  public get login_text() {
    return $('//XCUIElementTypeStaticText[@name="Log in"]');
  }
  /**
   * The function waits for the loginHere_button element to be displayed and then clicks on it.
   */
  async clickOnLoginHere() {
    await (await this.loginHere_button).waitForDisplayed();
    await (await this.loginHere_button).click();
  }
  /**
   * The function clicks on a "smash" button if it is displayed on the page.
   */
  async clickOnSmashButton() {
    if (await (await this.smash_button).isDisplayed()) {
      await (await this.smash_button).waitForDisplayed();
      await (await this.smash_button).click();
    }
  }
  /**
   * The function `getLoginText` waits for the login text element to be displayed and then returns the
   * text content of that element.
   * @returns The text content of the login_text element.
   */
  async getLoginText() {
    await (await this.login_text).waitForDisplayed();
    return await (await this.login_text).getText();
  }
  /**
   * The function validates that the login text is "Log in".
   */
  async validateLoginText() {
    await expect(await this.getLoginText()).toBe("Log in");
  }
}
