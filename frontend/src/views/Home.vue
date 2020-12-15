<template>
  <div class="text-center h-full w-full">Hello World {{ title }}</div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {
  title = "Hello World";
}
</script>
