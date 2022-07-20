const path = require("path");

module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath:
    process.env.NODE_ENV === "development" ? "" : "/personal-intro/profile",
  outputDir: "./profile",
};
