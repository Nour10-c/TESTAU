const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://nynecorp.org",

    pageLoadTimeout: 120000, // 2 minutes
    defaultCommandTimeout: 10000,

    setupNodeEvents(on, config) {}
  }
});
