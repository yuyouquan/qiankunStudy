<template>
  <div>
    Micro-app4 Dog
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class Dog extends Vue {
  msg!: string
}
</script>

<style scoped>

</style>
