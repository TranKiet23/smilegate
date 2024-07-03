<script>
import ImagesList from './components/ImagesList.vue'
export default {
  name: 'App',
  components: { ImagesList },
  setup() {
    return {
      loading: false,
    }
  },
}
</script>

<template>
  <div>
    <ImagesList></ImagesList>
  </div>
</template>

<style lang="scss"></style>
