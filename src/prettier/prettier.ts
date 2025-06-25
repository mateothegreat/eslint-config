import type { Options as PrettierOptions } from "prettier"
type PluginOptions = {
  parser?: string
  [key: string]: any
}

export type Options = Omit<PrettierOptions, "plugins"> & {
  plugins?: (string | Plugin)[]
}

export type Plugin = {
  name?: string
  files?: string[] | string
  options?: PluginOptions
}

export const plugins: Record<string, Plugin> = {
  svelte: {
    name: "prettier-plugin-svelte",
    files: ["*.svelte", "*.svelte.ts"],
    options: {
      parser: "svelte",
      svelteIndentScriptAndStyle: true,
      svelteStrictMode: false,
      svelteSortOrder: "scripts-markup-styles-options",
      svelteBracketNewLine: false
    }
  },
  sortjson: {
    name: "prettier-plugin-sort-json",
    files: "*.json",
    options: {
      singleAttributePerLine: true,
      jsonRecursiveSort: true,
      printWidth: 20
    }
  },
  organizeattributes: {
    name: "prettier-plugin-organize-attributes",
    files: "*.html",
    options: {
      attributeGroups: ["^(id|name)$", "^class$", "$DEFAULT", "^aria-"],
      attributeSort: "ASC"
    }
  },
  tailwindcss: {
    name: "prettier-plugin-tailwindcss",
    files: ["*.html", "*.svelte", "*.svelte.ts"]
    // options: {
    //   tailwindConfig: "./tailwind.config.js"
    // }
  },
  tailwindcssanywhere: {
    name: "@ttskch/prettier-plugin-tailwindcss-anywhere",
    files: ["*.html", "*.svelte", "*.svelte.ts"],
    options: {
        "parser": "anywhere",
    }
  },
  gotemplate: {
    name: "prettier-plugin-go-template",
    files: "*.gotmpl",
    options: {
      parser: "go-template",
      printWidth: 10
    }
  },
  classnames: {
    name: "prettier-plugin-classnames",
    files: "*.html",
    options: {
      parser: "html",
      printWidth: 0,
      customFunctions: ["twMerge", "clsx"],
      endingPosition: "absolute-with-indent"
    }
  },
  markdown: {
    name: null,
    files: "*.md",
    options: {
      tabWidth: 3,
      useTabs: false,
      printWidth: 80,
      proseWrap: "always"
    }
  },
  bracestyle: {
    name: "prettier-plugin-brace-style",
    options: {
      braceStyle: "1tbs"
    }
  },
  multilinearrays: {
    name: "prettier-plugin-multiline-arrays",
    files: ["*.ts", "*.js"],
    options: {
      multilineArraysWrapThreshold: 2
    }
  },
  jsdoc: {
    name: "prettier-plugin-jsdoc",
    files: ["*.js", "*.ts"],
    options: {
      jsdocSpaces: 4,
      jsdocDescriptionTag: true,
      jsdocVerticalAlignment: true,
      jsdocSeparateReturnsFromParam: true,
      jsdocSeparateTagGroups: true,
      jsdocPrintWidth: 80,
      jsdocKeepUnParseAbleExampleIndent: true
    }
  },
  organizeimports: {
    name: "prettier-plugin-organize-imports",
    files: ["*.ts", "*.js"],
    options: {
      organizeImportsSkipDestructiveCodeActions: false
    }
  },
  importsort: {
    name: "prettier-plugin-import-sort",
    options: {
      style: "module"
    }
  },
  merge: {
    name: "prettier-plugin-merge"
  }
}
export const getConfig = (options?: Options): Options => {
  const config: Options = {
    ...defaults,
    plugins: []
  }

  config.plugins = Object.values(plugins)
    .filter((plugin) => plugin.name)
    .map((plugin) => plugin.name)

  config.overrides = Object.values(plugins)
    .filter((plugin) => plugin.files)
    .map((plugin) => ({
      files: plugin.files,
      options: plugin.options
    }))

  // console.log(util.inspect(config, { depth: null, colors: true }))

  return config
}

/**
 * @type {import("prettier").Config}
 */
const defaults: Options = {
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
        tabWidth: 3,
        useTabs: false,
        printWidth: 80,
        proseWrap: "always"
      }
    },
    {
      files: "*.html",
      options: {
        parser: "html",
        attributeGroups: ["^(id|name)$", "^class$", "$DEFAULT", "^aria-"],
        attributeSort: "ASC"
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
    },
    {
      files: "*.gotmpl",
      options: {
        parser: "go-template",
        printWidth: 10
      }
    }
  ],
  bracketSameLine: true,
  singleAttributePerLine: true,
  htmlWhitespaceSensitivity: "ignore"
}
