import LoginPage from "../../pages/loginPage.ts";

describe("My Login application", () => {
  let loginPage: LoginPage;
  beforeEach(async () => {
    await driver.launchApp();
    loginPage = new LoginPage(driver);
  });
  it("login with valid credentials POM design pattern ", async () => {
    await loginPage.login("standard_user", "secret_sauce");
  });
  afterEach(async () => {
    await driver.closeApp();
  });
});
