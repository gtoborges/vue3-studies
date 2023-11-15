<template>
<p>
  <strong>{{name}}</strong>&nbsp;{{price}}
  <button @click="addToCart">Add to Cart</button>
</p>
</template>

<script>
export default {
  props: {
    name: String,
    price: Number,
  },
  setup(props, {emit}) {
    const addToCart = () => emit("addToCart", props.name)
    console.log(props.name, props.price)
    return { addToCart }
  }
}
</script>
