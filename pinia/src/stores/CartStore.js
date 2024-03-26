import { groupBy, parseInt } from "lodash";
import { defineStore } from "pinia";
import { useAuthUserStore } from "./AuthUserStore"

export const useCartStore = defineStore("CartStore", {
  state: () => {
    return {
      items: [],
    }
  },
  getters: {
    count: (state) => state.items.length,
    isEmpty: (state) => state.count === 0,
    grouped: (state) => {
      const grouped = groupBy(state.items, item => item.name)
      const sorted = Object.keys(grouped).sort()
      let inOrder = {}
      sorted.forEach(key => inOrder[key] = grouped[key])
      return inOrder
    },
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
    },
    setItemCount(item, count) {
      this.removeItems(item.name)
      this.addItems(count, item)
    },
    checkout() {
      const authUserStore = useAuthUserStore()
      alert(`${authUserStore.username} just bought ${this.count} items at a total of $${this.total}`)
    }
  }
})
