<template lang="pug">
h1 {{ title }}
</template>

<style lang="stylus" scoped>
h1
  flex()
  default(0.4, #000)
  margin 1vmax 0
  height 9vh
  border solid
  border-width 2px 0
  text-shadow -1px -1px 2.5px #fff, -1px 1px 2.5px #fff, 1px -1px 2.5px #fff, 1px 1px 2.5px #fff
  div
    animation 1s appear
    @keyframes appear
      0%
        opacity 0
</style>


<script>
export default {
  computed: {
    title() {
      let json = require("~/assets/nav_menu.json");
      return json.filter((list) => list.link == this.$route.path)[0].title;
    },
  },
};
</script>

