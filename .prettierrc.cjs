const { getConfig, plugins } = require("./dist/index.js")
// module.exports = getConfig({
//   plugins: [plugins.svelte, plugins.sortjson, plugins.organizeattributes, plugins.tailwindcss, plugins.gotemplate, plugins.classnames]
// })
module.exports = getConfig()
