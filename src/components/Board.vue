<template>
  <div class="c-board">
    <Square v-for="(_, i) in 25" :number="i" v-bind:key="i"/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Square from './Square.vue';

export default {
  name: 'Board',
  components: { Square },
  comments: {
    Square,
  },
  computed: {
    ...mapState('board', ['board']),
  },
  methods: {
    ...mapActions('board', ['initialize']),
  },
  mounted() {
    this.initialize();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.c-board {
  display: grid;
  grid-template-columns: repeat(5, 100px);
  grid-template-rows: repeat(5, 100px);
}
</style>
