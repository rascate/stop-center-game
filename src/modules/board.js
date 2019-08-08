export default {
  namespaced: true,
  state: {
    board: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ],
  },
  getter: {
    getSquareState: state => (num) => {
      const x = num % 5;
      const y = Math.floor(num / 5);
      return state.board[x][y];
    },
  },
  mutations: {},
  actions: {},
};
