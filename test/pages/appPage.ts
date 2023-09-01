import testData from "../../Fixtures/testData.ts";
export default class AppPage {
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
   * The function returns the element with the locator "~App".
   * @returns The code is returning the element with the locator "~App".
   */
  public get app_Button() {
    return $("~App");
  }
  /**
   * The function returns the element with the locator "~Activity".
   * @returns The code is returning the element with the locator "~Activity".
   */
  public get activity_Button() {
    return $("~Activity");
  }
  /**
   * The function returns the element with the identifier "Custom Title".
   * @returns The code is returning the element with the locator "~Custom Title".
   */
  public get customTitle_Button() {
    return $("~Custom Title");
  }
  /**
   * The function returns the element with the ID "left_text_edit" from the Android app with the package
   * name "io.appium.android.apis".
   * @returns The element with the id "left_text_edit" from the Android app with the package name
   * "io.appium.android.apis".
   */
  public get left_text() {
    return $("id=io.appium.android.apis:id/left_text_edit");
  }
  /**
   * The function returns the element with the identifier "~Change Left".
   * @returns The code is returning the element with the locator "~Change Left".
   */
  public get changeLeft_button() {
    return $("id=io.appium.android.apis:id/left_text_button");
  }
  /**
   * The function returns the element with the content description "Left is best" on an Android device.
   * @returns The method is returning an element with the content description "Left is best" as a
   * WebElement.
   */
  public get leftIsBest_text() {
    return $('//android.widget.TextView[@content-desc="Left is best"]');
  }

  /**
   * The function clicks on the app button asynchronously.
   */
  async clickOnAppButton() {
    (await this.app_Button).click();
  }
  /**
   * The function clicks on the activity button asynchronously.
   */
  async clickOnActivityButton() {
    (await this.activity_Button).click();
  }
  /**
   * The function clicks on a custom title button asynchronously.
   */
  async clickOnCustomTitleButton() {
    (await this.customTitle_Button).click();
  }
  /**
   * The function clears the value of a text field and then adds a new value to it.
   * @param {any} string - The parameter "string" is the text that you want to type into the field.
   */
  async typeIntoField(string: any) {
    (await this.left_text).clearValue();
    (await this.left_text).addValue(string);
  }
  /**
   * The function asynchronously clicks on the "changeLeft_button" element.
   */
  async clickOnchangeLeftButton() {
    (await this.changeLeft_button).click();
  }
  /**
   * The function validates if the text applied correctly matches the expected text.
   */
  async validateTheValueAppliedCorrectly() {
    await expect(await this.leftIsBest_text.getText()).toBe(
      testData.textToBeSent
    );
  }
  /**
   * The function performs a series of actions, including clicking on buttons, typing into a field, and
   * returning the result.
   * @returns The `performTyping()` function is returning the instance of the object it is called on
   * (`this`).
   */
  async performTyping() {
    await this.clickOnAppButton();
    await this.clickOnActivityButton();
    await this.clickOnCustomTitleButton();
    await this.typeIntoField(testData.textToBeSent);
    await this.clickOnchangeLeftButton();
    return this;
  }
}
