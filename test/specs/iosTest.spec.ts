// import loginPage from "../../pageobjects/login.page";
import LoginPage from "../../pages/loginPage.ts";
import loginPage from "../../pages/loginPage.ts";

describe("My Login application", () => {
  // it("should login with valid credentials flat design", async () => {
  //   await (await $("~test-Username")).setValue("standard_user");
  //   await (await $("~test-Password")).setValue("secret_sauce");
  //   await (await $("~test-LOGIN")).click();
  //   await driver.pause(2000);
  // });
  it("login with valid credentials POM design pattern ", async () => {
    await new LoginPage(driver).login("standard_user", "secret_sauce");
  });
});
