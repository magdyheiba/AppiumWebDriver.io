export default class AccessibilityPage {
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
   * The function returns the element with the accessibility button identifier.
   * @returns The code is returning the element with the locator "~Access'ibility".
   */
  public get AccessibilityButton() {
    return $("~Access'ibility");
  }
  /**
   * The function returns a button element with the accessibility label "Accessibility Node Provider".
   * @returns The method is returning an object of type AccessibilityNodeProviderButton.
   */
  public get AccessibilityNodeProviderButton() {
    return $("~Accessibility Node Provider");
  }
  /**
   * The function returns an element with the identifier "Accessibility Node Querying".
   * @returns The method is returning an object of type AccessibilityNodeQueringButton.
   */
  public get AccessibilityNodeQueringButton() {
    return $("~Accessibility Node Querying");
  }
  /**
   * The function returns the checkbox button element for the "Task Conquer World" task.
   * @returns The code is returning a checkbox button element.
   */
  public get checkBoxButton() {
    return $(
      '//android.widget.TextView[@content-desc="Task Conquer World"]//parent::android.widget.LinearLayout/android.widget.CheckBox'
    );
  }
  /**
   * The function clickOnAccessibilityButton() clicks on the AccessibilityButton element.
   */
  async clickOnAccessibilityButton() {
    this.AccessibilityButton.waitForDisplayed({ timeout: 3000 });
    this.AccessibilityButton.click();
    return this;
  }
  /**
   * The function clicks on the AccessibilityNodeQueringButton.
   */
  async clickOnAccessibilityNodeQueringButton() {
    this.AccessibilityNodeQueringButton.waitForDisplayed({ timeout: 3000 });
    this.AccessibilityNodeQueringButton.click();
  }
  /**
   * The function asynchronously clicks on a checkbox button.
   */
  async clickOnCheckbox() {
    (await this.checkBoxButton).waitForDisplayed();
    (await this.checkBoxButton).click();
  }
  /**
   * The function returns the text of the AccessibilityNodeProviderButton.
   * @returns The text of the AccessibilityNodeProviderButton.
   */
  async getAccessibilityNodeProviderText() {
    (await this.AccessibilityNodeProviderButton).waitForDisplayed();
    return await this.AccessibilityNodeProviderButton.getText();
  }
  /**
   * The function validates that a checkbox button is checked.
   */
  async validateCheckBoxIsChecked() {
    await (await this.checkBoxButton).waitForDisplayed();
    expect(await this.checkBoxButton.getAttribute("checked")).toBe("true");
  }
  /**
   * The function validates that the text returned by the accessibility node provider is "Accessibility
   * Node Provider".
   */
  async validateAccessibilityNodeProviderText() {
    await expect(await this.getAccessibilityNodeProviderText()).toBe(
      "Accessibility Node Provider"
    );
  }
}
