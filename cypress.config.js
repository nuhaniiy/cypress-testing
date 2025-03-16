const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 120000, // Tambah timeout jadi 120 detik (2 menit)
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
