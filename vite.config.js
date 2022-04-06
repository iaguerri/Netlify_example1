const path = require("path");
const mode = process.env.NODE_ENV === "production" ? "production" : "development";
// Quitar desde mode, si no netlify no funciona
// const base = mode === "production" ? "/" + path.basename(process.cwd()) + "/" : "/";
const base = "/";

module.exports = {
  root: "src",
  base,
  mode,
  publicDir: "../public",
  build: {
    outDir: "../dist",
    assetsDir: "./"
  }
};
