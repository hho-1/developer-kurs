const { defineConfig } = require("cypress");

module.exports = defineConfig({
<<<<<<< HEAD
  watchForFileChanges: false,
  defaultCommandTimeout: 10000,
=======
>>>>>>> 7f4ccdd (cypress used for login and register testing)
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
