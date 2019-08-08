<template>
  <div class="c-square">
    {{ getSquareState(number) }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Square',
  props: {
    number: Number,
  },
  computed: {
    ...mapGetters('board', ['getSquareState']),
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
