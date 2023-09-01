export default class GraphicsPage {
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
   * The function returns the element with the identifier "graphics_button".
   * @returns The code is returning the element with the identifier "~Graphics".
   */
  public get graphics_button() {
    return $("~Graphics");
  }
  /**
   * The function returns the element with the locator "~Vertices".
   * @returns The code is returning the element with the locator "~Vertices".
   */
  public get vertics_button() {
    return $("~Vertices");
  }
  /**
   * The function returns an element with the text "Graphics/Vertices" that is of type
   * android.widget.TextView.
   * @returns The method is returning an element with the XPath
   * "//android.widget.TextView[contains(@text,'Graphics/Vertices')]"
   */
  public get verticsAndGraphics() {
    return $("//android.widget.TextView[contains(@text,'Graphics/Vertices')]");
  }
  /**
   * The function asynchronously clicks on a graphics button and returns the object it belongs to.
   * @returns the instance of the object that the method is being called on.
   */
  async clickOnGraphicsButton() {
    (await this.graphics_button).click();
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
      '").className("android.widget.Button"))';
    await $(`android=${selector}`);
  }
  /**
   * The function asynchronously clicks on a button and returns the current object.
   * @returns the instance of the object on which the function is called.
   */
  async clickOnVerticsButton() {
    (await this.vertics_button).click();
    return this;
  }
  /**
   * The function `getVerticsPageTitle` asynchronously retrieves the text of the `verticsAndGraphics`
   * element.
   * @returns The page title of the Vertics page.
   */
  async getVerticsPageTitle() {
    return (await this.verticsAndGraphics).getText();
  }
  /**
   * The function validates that the page title is "Graphics/Vertices".
   */
  async validateVerticsPageTitle() {
    expect(await this.getVerticsPageTitle()).toBe("Graphics/Vertices");
  }
  /**
   * The swipeLeft function performs a swipe action on an Android view by calculating the start and end
   * coordinates and using touch actions.
   */
  async swipeLeft() {
    const element = await this.driver.$("//android.view.View");
    const location = await element.getLocation();
    const size = await element.getSize();

    // Calculate the start and end coordinates for the swipe
    const startX = location.x + size.width / 2;
    const startY = location.y + size.height / 2;
    const endX = startX;
    const endY = startY - 100; // Adjust the distance as needed

    // Perform the swipe action
    await driver.touchAction([
      { action: "press", x: startX, y: startY },
      { action: "wait", ms: 500 }, // Optional wait time
      { action: "moveTo", x: endX, y: endY },
      { action: "release" },
    ]);
  }
  /**
   * The `swipeRight` function performs a swipe action from a specified element's center to the right by
   * a given distance.
   */
  async swipeRight() {
    const element = await this.driver.$("//android.view.View");
    const location = await element.getLocation();
    const size = await element.getSize();

    // Calculate the start and end coordinates for the swipe
    const startX = location.x + size.width / 2;
    const startY = location.y + size.height / 2;
    const endX = startX + 100; // Adjust the distance as needed
    const endY = startY;

    // Perform the swipe action
    await driver.touchAction([
      { action: "press", x: startX, y: startY },
      { action: "wait", ms: 500 }, // Optional wait time
      { action: "moveTo", x: endX, y: endY },
      { action: "release" },
    ]);
  }
}
