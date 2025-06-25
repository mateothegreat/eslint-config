"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = exports.Plugins = void 0;
var Plugins;
(function (Plugins) {
    Plugins["svelte"] = "prettier-plugin-svelte";
    Plugins["tailwindcss"] = "prettier-plugin-tailwindcss";
    Plugins["sortjson"] = "prettier-plugin-sort-json";
})(Plugins || (exports.Plugins = Plugins = {}));
const getConfig = (options) => {
    const config = Object.assign({}, asdf);
    if (options) {
        if (options.plugins) {
            options.plugins.forEach((plugin) => {
                config.plugins.push(plugin);
            });
        }
        else {
            Object.values(Plugins).forEach((plugin) => {
                config.plugins.push(plugin);
            });
        }
        if (options.overrides) {
            config.overrides = options.overrides;
        }
    }
    else {
        config.plugins = Object.values(Plugins);
    }
    console.log("got config");
    console.log("got config");
    console.log("got config");
    console.log("got config");
    console.log("got config");
    console.log("got config");
    console.log("got config");
    console.log("got config");
    console.log("got config");
    console.log("got config");
    console.log("got config");
    console.log("got config");
    console.log("got config");
    return config;
};
exports.getConfig = getConfig;
const asdf = {
    semi: false,
    tabWidth: 2,
    useTabs: false,
    singleQuote: false,
    trailingComma: "none",
    printWidth: 80,
    endOfLine: "lf",
    plugins: [],
    jsonRecursiveSort: true,
    overrides: [
        {
            files: "*.svelte",
            options: {
                parser: "svelte",
                svelteIndentScriptAndStyle: true,
                svelteStrictMode: false,
                svelteSortOrder: "scripts-markup-styles-options",
                svelteBracketNewLine: false
            }
        },
        {
            files: "*.md",
            options: {
                tabWidth: 2,
                useTabs: false,
                printWidth: 79
            }
        },
        {
            files: "*.html",
            options: {
                parser: "html"
            }
        },
        {
            files: "*.ts",
            options: {
                parser: "typescript"
            }
        },
        {
            files: "*",
            options: {
                tabWidth: 2
            }
        },
        {
            files: "*.json",
            options: {
                singleAttributePerLine: true,
                jsonRecursiveSort: true,
                printWidth: 20
            }
        }
    ],
    bracketSameLine: true,
    singleAttributePerLine: true,
    htmlWhitespaceSensitivity: "ignore"
};
//# sourceMappingURL=.prettierrc.js.map