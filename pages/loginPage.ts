export default class LoginPage {
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
   * define selectors using getter methods
   */
  public get inputUsername() {
    return $("~test-Username");
  }

  /**
   * The function returns the element with the identifier "~test-Password".
   * @returns The element with the locator "~test-Password" is being returned.
   */
  public get inputPassword() {
    return $("~test-Password");
  }

  /**
   * The function returns the element with the identifier "test-LOGIN".
   * @returns The code is returning the element with the locator "~test-LOGIN".
   */
  public get btnSubmit() {
    return $("~test-LOGIN");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  public async login(username: string, password: string) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }
}
