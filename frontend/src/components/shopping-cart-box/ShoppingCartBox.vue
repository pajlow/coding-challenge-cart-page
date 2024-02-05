<script setup lang="ts">
import { useShoppingCartStore } from '@/stores/shopping-cart.store'
import ShoppingCartEntry from './ShoppingCartEntry.vue'

const shoppingCartStore = useShoppingCartStore()

shoppingCartStore.getShoppingCartItems()
</script>

<template>
  <div class="col-span-5 lg:col-span-3 h-auto px-12 py-12 bg-box-background">
    <h1 class="text-left text-3xl mb-8">Cart ({{ shoppingCartStore.shoppingCartItemsAmount }})</h1>
    <div class="flex flex-col gap-y-4">
      <ShoppingCartEntry
        v-for="item in shoppingCartStore.shoppingCartItems"
        :key="item.id"
        v-bind:item="item"
      ></ShoppingCartEntry>
    </div>
    <button
      class="flex gap-x-1 p-1 text-primary-text border border-site-background rounded"
      @click="shoppingCartStore.addRandomShoppingCardItem()"
      v-if="shoppingCartStore.shoppingCartItems.length < 3"
    >
      Add random item to cart
    </button>
  </div>
</template>
