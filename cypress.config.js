const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://stage.d4sign.com.br",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
