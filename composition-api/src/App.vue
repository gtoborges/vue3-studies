<template>
  <h1>{{name}}</h1>
  <button @click="placeOrder">Place Order</button>
  <button @click="removeWatcher">Hide cart alerts</button>
  <br><br>
  <label></label>
  <select v-model="currencySymbol">
    <option value="$">Dollars ($)</option>
    <option value="R$">Real (R$)</option>
    <option value="£">Pounds (£)</option>
  </select>
  <YummyMeal v-for="meal in meals"
    :name="meal.name" 
    :price="meal.price"
    @addToCart="addItemToCart"
  />
</template>

<script setup>
import YummyMeal from './components/YummyMeal.vue'
import { ref, reactive, watch, watchEffect, provide } from 'vue';

const currencySymbol = ref('R$')
provide("currencySymbol", currencySymbol);
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

// works like watch with immediate flag, with no new or old value
watchEffect(() => console.log(JSON.parse(JSON.stringify(cart)))) 
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
