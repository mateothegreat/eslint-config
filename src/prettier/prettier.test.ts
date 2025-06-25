import { describe, expect, test } from "vitest"

import { getConfig, Plugins } from "./prettier"

describe("prettier", () => {
  test("default", () => {
    const config = getConfig()

    expect(config.plugins).toEqual(Object.values(Plugins))
  })

  test("override: plugins: 1", () => {
    const config = getConfig({
      plugins: [Plugins.svelte]
    })

    expect(config).toHaveProperty("plugins", [Plugins.svelte])

    // console.log(util.inspect(config, { depth: null, colors: true }));
  })
})
