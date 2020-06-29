import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mousePosition: {
      x: 0,
      y: 0,
    },
  },
  mutations: {
    setMousePosition(state, position) {
      state.mousePosition = position;
    },
  },
  actions: {
    setMousePosition(context, event) {
      const position = {
        x: event.clientX,
        y: event.clientY,
      };

      context.commit('setMousePosition', position);
    },
  },
});
