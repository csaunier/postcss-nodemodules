const postcssCustomMedia = require("postcss-custom-media")
const path = require("path");

const variablePath = path.resolve(
    __dirname,
    "src/components/App/"
)

module.exports = {
  ident: "postcss",
  plugins: [
    postcssCustomMedia({
      importFrom: path.resolve(variablePath, "style.css"),
    }),
  ],
}