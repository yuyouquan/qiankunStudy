<template>
  <div>
    Micro-app4 Cat
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class Cat extends Vue {
  msg!: string
}
</script>

<style scoped>

</style>
