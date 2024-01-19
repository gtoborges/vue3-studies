<template>
<p>
  <strong>{{name}}</strong>&nbsp;
  <YummyMealPrice :price="price"/>
  <button @click="addToCart">Add to Cart</button>
</p>
</template>

<script setup>
import YummyMealPrice from './YummyMealPrice.vue';

const props = defineProps({
  name: String,
  price: Number,
});

const emit = defineEmits(["addToCart"])

const addToCart = () => emit("addToCart", props.name);
</script>
