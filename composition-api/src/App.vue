<template>
  <h1>{{name}}</h1>
  <button @click="placeOrder">Place Order</button>
  <button @click="removeWatcher">Hide cart alerts</button>
  <YummyMeal v-for="meal in meals"
    :name="meal.name" 
    :price="meal.price"
    @addToCart="addItemToCart"
  />
</template>

<script>
import YummyMeal from './components/YummyMeal.vue'
import { ref, reactive, watch } from 'vue';
export default {
  components: { YummyMeal },
  setup() {
    const name = ref("The Snazzy Burger");
    const cart = reactive([])
    const meal = reactive({ name: "Hamburger", price: 5})
    const meals = reactive([
      { name: "Hamburger", price: 5 },
      { name: "Cheeseburger", price: 6 },
      { name: "Impossible Burger", price: 7 },
      { name: "Fries", price: 2 }
    ])

    const placeOrder = () => alert("Your order has been placed!");
    const addItemToCart = (item) => cart.push(item);
    const removeWatcher = watch(
      () => [...cart], 
      (newValue, oldValue) => alert(newValue.join("\n"))
    );

    return { name, placeOrder, addItemToCart, meal, meals, removeWatcher }
  }
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
