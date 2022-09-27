import {defineStore} from 'pinia';

export const userStore = defineStore('user', {
  state: () => {
    return {
      count: 1,
      arr: [],
    };
  },
  getters: {
    myCount(state){
      return state.count + 1;
    },
  },
  actions: {
    changeState(num: number) { // 不能用箭头函数
      this.count += num;
    },
  },

});
