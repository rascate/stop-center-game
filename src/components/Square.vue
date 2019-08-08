<template>
  <div class="c-square">
    {{ number }}
  </div>
</template>

<script>
export default {
  name: 'Square',
  props: {
    number: () => 0,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.c-square {
  height: 100px;
  width: 100px;
  border: solid 1px black;
}
</style>
