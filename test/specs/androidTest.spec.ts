import AccessibilityPage from "../../pages/accessibilityPage.ts";
import AppPage from "../../pages/appPage.ts";
import GraphicsPage from "../../pages/graphicsPage.ts";
import ViewsPage from "../../pages/viewsPage.ts";
describe("My Login application", () => {
  let accessibilityPage: AccessibilityPage;
  let appPage: AppPage;
  let graphicsPage: GraphicsPage;
  let viewsPage: ViewsPage;
  beforeEach(async () => {
    await driver.launchApp();
    accessibilityPage = new AccessibilityPage(driver);
    appPage = new AppPage(driver);
    graphicsPage = new GraphicsPage(driver);
    viewsPage = new ViewsPage(driver);
  });
  it("test#1 android app using POM design pattern #1 clicking on element", async () => {
    // await new AccessibilityPage(driver).clickOnAccessibilityButton();
    await accessibilityPage.clickOnAccessibilityButton();
    await expect(
      await accessibilityPage.getAccessibilityNodeProviderText()
    ).toBe("Accessibility Node Provider");
  });
  it("test#2 typing a text into a field an verify it", async () => {
    await appPage.performTyping();
    await driver.pause(3000);
    await appPage.validateTheValueAppliedCorrectly();
  });
  it("test#3 clicking on a checkbox and verify whether we click on it or not", async () => {
    await accessibilityPage.clickOnAccessibilityButton();
    await accessibilityPage.clickOnAccessibilityNodeQueringButton();
    await accessibilityPage.clickOnCheckbox();
    await driver.pause(3000);
    await accessibilityPage.validateCheckBoxIsChecked();
  });
  it("test#4 Scroll down to an element and validate the title", async () => {
    await graphicsPage.clickOnGraphicsButton();
    await graphicsPage.scrollDownToText("Vertices");
    await graphicsPage.clickOnVerticsButton();
    await graphicsPage.validateVerticsPageTitle();
  });
  it("test#5 Swipe left to an element and swipe right", async () => {
    await graphicsPage.clickOnGraphicsButton();
    await graphicsPage.scrollDownToText("Vertices");
    await graphicsPage.clickOnVerticsButton();
    await graphicsPage.swipeLeft();
    await graphicsPage.swipeRight();
  });
  it("test#6 test RadioButton functionalities and validate clicking on it", async () => {
    await viewsPage.clickOnViewsButton();
    await viewsPage.scrollDownToText("Radio Group");
    await viewsPage.clickOnRadioGroupButton();
    await viewsPage.clickOnBreakfastRadioButton();
    await driver.pause(2000);
    await viewsPage.validateRadioButtonIsChecked();
  });
  afterEach(async () => {
    await driver.closeApp();
  });
});
