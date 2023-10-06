import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const mainStore = new Vuex.Store({
  state: {
    list: [],
  },
  getters: {
    isDoneNum(state) {
      return state.list.filter((item) => item.isDone === true).length;
    },
    isDoneAll(state) {
      return state.list.every((item) => item.isDone === true);
    },
  },
  mutations: {
    addList(state, item) {
      state.list.push(item);
    },
    delItem(state, id) {
      const index = state.list.findIndex((item) => item.id === id);
      state.list.splice(index, 1);
    },
    toggleIsDone(state, id) {
      const item = state.list.find((item) => item.id === id);
      item.isDone = !item.isDone;
    },
    clearDone(state) {
      state.list = state.list.filter((item) => item.isDone === false);
    },
    clearAll(state) {
      state.list = [];
    },
    toggleAll(state, e) {
      state.list.forEach((item) => {
        item.isDone = e.target.checked;
      });
    },
    toggleIsEdited(state, id) {
      const item = state.list.find((item) => item.id === id);
      item.isEdited = !item.isEdited;
    },
    toggleValue(state, payload) {
      state.list.forEach((item) => {
        if (item.id === payload.id) {
          item.value = payload.e.target.value;
        }
      });
    },
  },
});

export default mainStore;
