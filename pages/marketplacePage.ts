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
  public get loginHere_button() {
    return $("~Login here");
  }

  async clickOnLoginHere() {
    (await this.loginHere_button).click();
  }
}
