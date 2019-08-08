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
    initialBoard: [
      [1, 0, 0, 0, -1],
      [1, 0, 0, 0, -1],
      [1, 0, 0, 0, -1],
      [1, 0, 0, 0, -1],
      [1, 0, 0, 0, -1],
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
      state.board = state.initialBoard.slice();
    },
  },
  actions: {
    initialize: ({ commit }) => {
      commit('initialize');
    },
  },
};
