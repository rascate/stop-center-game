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
  getters: {
    getSquareState: state => (num) => {
      const x = num % 5;
      const y = Math.floor(num / 5);
      return state.board[x][y];
    },
  },
  mutations: {
    initialize: (state) => {
      state.board.map(row => row.map(() => 0));
    },
  },
  actions: {},
};
