<template>
  <span>{{priceFormat}}</span> 
</template>
<script setup>
import { computed, inject } from 'vue'; 

const props = defineProps({
  price: Number,
});

const currencySymbol = inject("currencySymbol")

const priceFormat = computed(
  () => `${currencySymbol.value}${props.price.toFixed(2)}`
)
</script>
