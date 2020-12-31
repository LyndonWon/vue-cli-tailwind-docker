<template>
  <div class="text-center h-full w-full">Hello World {{ title }}
    {{ test }}
  </div>
  
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import { getUser } from '../services/api/index'

@Component({})
export default class Home extends Vue {
  title = "Hello World";

  test = null

  mounted() {
    getUser().then((result) => {
      this.test = result.data;
    })
  }
}
</script>
