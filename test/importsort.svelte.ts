<script lang="ts">
import {a,d,c} from "y"
import foo from "foo"

import {dowork} from "prettier-plugin-organize-imports"
import {b} from "x"

export default {
  plugins: [dowork]
}

foo()
</script>