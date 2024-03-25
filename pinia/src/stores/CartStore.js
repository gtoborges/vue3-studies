import { groupBy, parseInt } from "lodash";
import { defineStore } from "pinia";

export const useCartStore = defineStore("CartStore", {
  state: () => {
    return {
      items: [],
    }
  },
  getters: {
    count: (state) => state.items.length,
    isEmpty: (state) => state.count === 0,
    grouped: (state) => groupBy(state.items, item => item.name),
    groupCount: (state) => {
      return (name) => state.grouped[name].length
    },
    total: (state) => state.items.reduce((acc, item) => acc + item.price, 0)
  },
  actions: {
    addItems(count, item) {
      count = parseInt(count);
      for(let index = 0; index < count; index++) {
        this.items.push({ ...item })
      }
    },
    removeItems(name) {
      this.items = this.items.filter(item => item.name !== name)
    }
  }
})
