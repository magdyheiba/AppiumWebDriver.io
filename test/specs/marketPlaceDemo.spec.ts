import MarketPlace from "../pages/marketplacePage.ts";

describe("My Login application", () => {
  it("test android app using POM design pattern", async () => {
    await driver.pause(5000);
    await new MarketPlace(driver).clickOnLoginHere();
  });
});
