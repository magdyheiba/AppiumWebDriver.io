import AccessibilityPage from "../../pages/accessibilityPage.ts";
import AppPage from "../../pages/appPage.ts";
import GraphicsPage from "../../pages/graphicsPage.ts";
import ViewsPage from "../../pages/viewsPage.ts";
import allureReporter from "@wdio/allure-reporter";

describe("My Login application", function () {
  allureReporter.addFeature("Testing App");
  this.retries(3);
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
    allureReporter.addStory("clicking");
    await accessibilityPage.clickOnAccessibilityButton();
    await accessibilityPage.validateAccessibilityNodeProviderText();
  });
  it("test#2 typing a text into a field an verify it", async () => {
    allureReporter.addStory("typing");
    await appPage.performTyping();
    await appPage.validateTheValueAppliedCorrectly();
  });
  it("test#3 clicking on a checkbox and verify whether we click on it or not", async () => {
    allureReporter.addStory("clicking on a checkbox");
    await accessibilityPage.clickOnAccessibilityButton();
    await accessibilityPage.clickOnAccessibilityNodeQueringButton();
    await accessibilityPage.clickOnCheckbox();
    await accessibilityPage.validateCheckBoxIsChecked();
  });
  it("test#4 Scroll down to an element and validate the title", async () => {
    allureReporter.addStory("perform a scrolling");
    await graphicsPage.clickOnGraphicsButton();
    await graphicsPage.scrollDownToText("Vertices");
    await graphicsPage.clickOnVerticsButton();
    await graphicsPage.validateVerticsPageTitle();
  });
  it("test#5 Swipe left to an element and swipe right", async () => {
    allureReporter.addStory("perform a swiping");
    await graphicsPage.clickOnGraphicsButton();
    await graphicsPage.scrollDownToText("Vertices");
    await graphicsPage.clickOnVerticsButton();
    await graphicsPage.swipeLeft();
    await graphicsPage.swipeRight();
  });
  it("test#6 test RadioButton functionalities and validate clicking on it", async () => {
    allureReporter.addStory("clicking on a radio button");
    await viewsPage.clickOnViewsButton();
    await viewsPage.scrollDownToText("Radio Group");
    await viewsPage.clickOnRadioGroupButton();
    await viewsPage.clickOnBreakfastRadioButton();
    await viewsPage.validateRadioButtonIsChecked();
  });
  afterEach(async () => {
    await driver.closeApp();
  });
});
