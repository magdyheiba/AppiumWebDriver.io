import MarketPlace from "../../pages/marketplacePage.ts";
import allureReporter from "@wdio/allure-reporter";

describe("My Login application", function () {
  allureReporter.addFeature("First scenario in marketplace App");
  this.retries(3);
  let marketPlace: MarketPlace;
  beforeEach(async () => {
    await driver.launchApp();
    marketPlace = new MarketPlace(driver);
  });
  it("login with valid credentials POM design pattern ", async () => {
    allureReporter.addStory("onboarding");

    await marketPlace.clickOnSmashButton();
    await marketPlace.clickOnLoginHere();
    await marketPlace.validateLoginText();
  });
  afterEach(async () => {
    await driver.closeApp();
  });
});
