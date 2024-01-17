<template>
<p>
  <strong>{{name}}</strong>&nbsp;{{priceFormat}}
  <button @click="addToCart">Add to Cart</button>
</p>
</template>

<script>
import { computed } from 'vue'

export default {
  props: {
    name: String,
    price: Number,
  },
  setup(props, {emit}) {
    const addToCart = () => emit("addToCart", props.name);
    const priceFormat = computed( () => `$${props.price.toFixed(2)}`);
    return { addToCart, priceFormat };
  }
}
</script>
