<template>
  <div class="c-square" :class="color"></div>
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
    color() {
      switch (this.getSquareState(this.number)) {
        case 0:
          return 'is-white';
        case 1:
          return 'is-green';
        case -1:
          return 'is-blue';
        default:
          throw new Error('Invalid Square state');
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.c-square {
  height: 100px;
  width: 100px;
  border: solid 1px black;

  &.is-white {
    background-color: floralwhite;
  }

  &.is-green {
    background-color: #42b983;
  }

  &.is-blue {
    background-color: cornflowerblue;
  }
}
</style>
