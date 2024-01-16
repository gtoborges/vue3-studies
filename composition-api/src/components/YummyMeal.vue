<template>
<p>
  <strong>{{name}}</strong>&nbsp;{{priceFormat}}
  <button @click="addToCart">Add to Cart</button>
</p>
</template>

<script>
// import { computed } from 'vue'

export default {
  props: {
    name: String,
    price: Number,
  },
  setup(props, {emit}) {
    const addToCart = () => emit("addToCart", props.name);
    return { addToCart };
  },
  computed: {
    priceFormat() {
      return `$${this.price.toFixed(2)}`;
    }
  }
}
</script>
