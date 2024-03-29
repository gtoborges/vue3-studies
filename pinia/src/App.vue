<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
import { ref, reactive } from "vue";
import { useProductStore } from "@/stores/ProductStore";
import { useCartStore } from "@/stores/CartStore";

const productStore = useProductStore()
productStore.fill()

const cartStore = useCartStore()

const history = reactive([])
const future = reactive([])
history.push(JSON.stringify(cartStore.$state))
const doingHistory = ref(false)

const undo = () => {
  if(history.length === 1) return

  doingHistory.value = true
  future.push(history.pop())
  cartStore.$state = JSON.parse(history.at(-1))
  doingHistory.value = false
}

const redo = () => {
  const latestState = future.pop()
  if(!latestState) return;
  doingHistory.value = true
  history.push(latestState)
  cartStore.$state = JSON.parse(latestState)
  doingHistory.value = false
}

cartStore.$subscribe((mutation, state) => {
  if(!doingHistory.value) {
    history.push(JSON.stringify(state))
    future.splice(0, future.length)
  }
})

cartStore.$onAction( ({name, store, args, after, onError }) => {
  if(name === 'addItems') {
    after( () => {
      console.log('count: ', args[0], 'item name: ', args[1].name)
    })
  }
})
</script>

<template>
  <div class="container">
    <TheHeader />
    <div class="mb-5 flex justify-end">
      <AppButton @click="undo">Undo</AppButton>
      <AppButton @click="redo">Redo</AppButton>
    </div>
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
        v-for="product in productStore.products"
        :key="product.name"
        :product="product"
        @addToCart="cartStore.addItems($event, product)"
      />
    </ul>
  </div>
</template>
