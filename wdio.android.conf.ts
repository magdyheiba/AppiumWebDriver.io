const RerunService = require("wdio-rerun-service");
exports.config = {
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      project: "./package.json",
      transpileOnly: true,
    },
  },
  user: process.env.LT_USERNAME || "magdyheiba14",
  key:
    process.env.LT_ACCESS_KEY ||
    "oYWMlmkM7au8Da8UA0OerpFxFW1bis9yooaLoHDVenMepB7APZ",

  updateJob: false,
  specs: ["./test/specs/androidTest.spec.ts"], //path of your test script
  exclude: [],

  capabilities: [
    {
      build: "NodeJS WebDriverIO iOS",
      name: "Sample Test - WebDriverIO",
      isRealMobile: true,
      deviceName: "Galaxy S23",
      platformVersion: "13",
      platformName: "android",
      app: "lt://APP1016038711693131588120310",
      idleTimeout: 120,
      queueTimeout: 500,
      noReset: false,
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
  },
  specFileRetries: 2,
};
