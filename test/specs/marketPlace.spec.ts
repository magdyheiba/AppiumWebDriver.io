import Common from "../../pages/common.ts";
import MarketPlace from "../../pages/marketplacePage.ts";
import allureReporter from "@wdio/allure-reporter";

describe("My Login application", function () {
  allureReporter.addFeature("First scenario in marketplace App");
  this.retries(3);
  let marketPlace: MarketPlace;
  let common: Common;
  beforeEach(async () => {
    await driver.executeScript("mobile: launchApp", [
      { bundleId: "com.beyondmenu.beyondmenu" },
    ]);
    marketPlace = new MarketPlace(driver);
    common = new Common();
  });
  it("login with valid credentials POM design pattern ", async () => {
    allureReporter.addStory("onboarding");
    await common.delay(5000);
    await marketPlace.clickOnSmashButton();
    await marketPlace.clickOnLoginHere();
    await marketPlace.validateLoginText();
  });
  it("login #2", async () => {
    allureReporter.addStory("onboarding2");

    await marketPlace.clickOnSmashButton();
    await marketPlace.clickOnLoginHere();
    await marketPlace.validateLoginText();
  });
  afterEach(async () => {
    await driver.executeScript("mobile: terminateApp", [
      { bundleId: "com.beyondmenu.beyondmenu" },
    ]);
  });
});
