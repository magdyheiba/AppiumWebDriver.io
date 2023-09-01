export default class ViewsPage {
  driver: WebdriverIO.Browser;
  /**
   * The constructor function initializes a class instance with a driver object.
   * @param driver - The `driver` parameter is of type `WebdriverIO.Browser`. It represents the browser
   * instance that will be used for automation.
   */
  /**
   * The constructor function initializes a class instance with a driver object.
   * @param driver - The `driver` parameter is of type `WebdriverIO.Browser`. It represents the browser
   * instance that will be used for automation.
   */
  constructor(driver: WebdriverIO.Browser) {
    this.driver = driver;
  }

  /**
   * The function returns the element with the identifier "~Views".
   * @returns The code is returning the element with the locator "~Views".
   */
  public get views_button() {
    return $("~Views");
  }

  /**
   * The function returns the radio button element with the label "Vertices".
   * @returns The radioGroup_button element with the locator "~Vertices" is being returned.
   */
  public get radioGroup_button() {
    return $("~Radio Group");
  }

  /**
   * The function returns the breakfast checkbox element.
   * @returns The breakfast checkbox element is being returned.
   */
  public get breakfast_checkbox() {
    return $("~Breakfast");
  }

  /**
   * The function clicks on a "Views" button and returns the current object.
   * @returns The code is returning the instance of the object that the method is being called on.
   */
  async clickOnViewsButton() {
    (await this.views_button).click();
    return this;
  }
  /**
   * The function `scrollDownToText` scrolls down to find a specific text on an Android device.
   * @param {any} text - The `text` parameter is the text that you want to scroll down to. It is used to
   * locate the element with the specified text on the screen and scroll to it.
   */
  async scrollDownToText(text: any) {
    const selector =
      'new UiScrollable(new UiSelector().scrollable(true).instance(0)).scrollIntoView(new UiSelector().text("' +
      text +
      '").className("android.widget.TextView"))';
    await $(`android=${selector}`);
  }

  /**
   * The function clicks on a radio group button asynchronously.
   * @returns the instance of the object it is being called on (this).
   */
  async clickOnRadioGroupButton() {
    (await this.radioGroup_button).click();
    return this;
  }
  /**
   * The function clicks on a breakfast radio button asynchronously.
   * @returns The code is returning the current instance of the object.
   */
  async clickOnBreakfastRadioButton() {
    (await this.breakfast_checkbox).click();
    return this;
  }

  /**
   * The function `getRadioButtoneAttribute` returns the value of the "checked" attribute of a breakfast
   * checkbox.
   * @returns The code is returning the value of the "checked" attribute of the breakfast_checkbox
   * element.
   */
  async getRadioButtoneAttribute() {
    return (await this.breakfast_checkbox).getAttribute("checked");
  }

  /**
   * The function validates that a radio button is checked.
   */
  async validateRadioButtonIsChecked() {
    expect(await this.getRadioButtoneAttribute()).toBe("true");
  }
}
