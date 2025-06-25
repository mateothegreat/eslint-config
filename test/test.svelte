<script lang="ts">
  import { a, d, c } from "y"
  import foo from "foo"

  import { dowork } from "prettier-plugin-organize-imports"
  import { b } from "x"

  export default {
    plugins: [dowork]
  }

  foo()
</script>

<div
  className="bg-gray-100/50 border
        border-zinc-400/30 dark:bg-neutral-900/50    dark:border-neutral-500/30 px-4 py-4
        rounded-xl">
  aaa
</div>
<div
  className="

      bg-gray-100/50 border
        {twMerge('border-zinc-400/30', 'font-bold')} w-full

        bg-blue-500
        ) dark:bg-neutral-900/50    dark:border-neutral-500/30 px-4 py-4
        rounded-xl"
  )}>
  bbb
</div>
