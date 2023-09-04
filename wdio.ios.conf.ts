import { join } from "path";
exports.config = {
  user: process.env.LT_USERNAME || "magdyheiba14",
  key:
    process.env.LT_ACCESS_KEY ||
    "oYWMlmkM7au8Da8UA0OerpFxFW1bis9yooaLoHDVenMepB7APZ",

  updateJob: false,
  specs: ["../test/specs/iosTest.spec.ts"], //path of your test script
  exclude: [],

  capabilities: [
    {
      build: "NodeJS WebDriverIO iOS",
      name: "Sample Test - WebDriverIO",
      isRealMobile: true,
      deviceName: "iPhone 14",
      platformVersion: "16",
      platformName: "iOS",
      app: {
        app_name: "Demo App", //provide your desired app name
        app_path: join(process.cwd(), "/apps/ApiDemos-debug.apk"), //provide the local app location
        // or
        // app_url: "https://example.test_android.apk", //provide the url where your app is horsted or stored
        custom_id: "12345", //provide your desired custom id
        enableCapability: true,
      },
    },
  ],

  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "",
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  path: "/wd/hub",
  hostname: "mobile-hub.lambdatest.com",
  port: 80,

  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 20000,
  },
};
