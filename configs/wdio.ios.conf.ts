exports.config = {
  user: process.env.LT_USERNAME,
  key: process.env.LT_ACCESS_KEY,
  updateJob: false,
  specs: ["../test/specs/marketPlace.spec.ts"], //path of your test script
  exclude: [],
  capabilities: [
    {
      build: "NodeJS WebDriverIO iOS",
      name: "Sample Test - WebDriverIO",
      isRealMobile: true,
      deviceName: "iPhone 14",
      platformVersion: "16",
      platformName: "iOS",
      autoAcceptAlerts: true,
      app: "lt://APP10160601911694016052353276",
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
    timeout: 20000,
    retries: 3,
  },
};
