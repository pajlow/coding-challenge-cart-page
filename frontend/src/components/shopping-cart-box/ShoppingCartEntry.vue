<script setup lang="ts">
import type { ShoppingCartItem } from '@/models/shopping-cart-item.model'
import { useShoppingCartStore } from '@/stores/shopping-cart.store'
import { TrashIcon, HeartIcon, MinusIcon, PlusIcon } from '@heroicons/vue/24/outline'
import { notify } from "@kyvg/vue3-notification";

const props = defineProps<{
  item: ShoppingCartItem
}>()

const shoppingCartStore = useShoppingCartStore()

function incrementAmount() { 
  const updatedAmount = props.item.amount + 1
  shoppingCartStore.changeShoppingCardItemAmount(props.item.id, updatedAmount)
}

function decrementAmount() {
  const updatedAmount = props.item.amount - 1
  shoppingCartStore.changeShoppingCardItemAmount(props.item.id, updatedAmount)
}

function addToWishlist() {
  notify(`Added ${props.item.name} to wish list`);
}
</script>

<template>
  <div
    class="grid grid-cols-5 gap-x-4 py-4 last-of-type:border-b-0 border-b border-site-background"
  >
    <div class="col-span-1">
      <img
        class="w-full h-auto 2xl:h-full object-cover"
        v-lazy="`src/assets/${item.image}.webp`"
        :alt="item.name"
      />
    </div>
    <div class="col-span-4 flex flex-col">
      <div class="flex uppercase font-semibold tracking-tighter text-sm gap-1 mb-4">
        <div class="bg-site-background px-2 py-0.5" v-if="item.isNewArrival">New</div>
        <div class="bg-red text-box-background px-2 py-0.5" v-if="item.percentReduced > 0">
          {{ `-${item.percentReduced}%` }}
        </div>
        <div class="bg-green text-box-background px-2 py-0.5" v-if="item.isSustainable">
          Sustainable
        </div>
      </div>
      <div class="text-secondary-text mb-2">{{ item.brandName }}</div>
      <div class="mb-2">{{ item.name }}</div>
      <div class="text-xs mb-4">{{ item.color }} | {{ item.size }}</div>
      <div class="text-xs mb-2">Quantity</div>
      <div class="flex mb-4 justify-start">
        <div class="flex border border-site-background">
          <button class="flex px-4 py-2" @click="decrementAmount()" :disabled="item.amount === 1"><MinusIcon class="h-6 w-6" :class="{'text-site-background': item.amount === 1}" /></button>
          <div class="px-6 py-2 border-x border-site-background">{{ item.amount }}</div>
          <button class="flex px-4 py-2" @click="incrementAmount()"><PlusIcon class="h-6 w-6" /></button>
        </div>
      </div>
      <div class="flex gap-x-4 justify-between flex-wrap">
        <div class="flex gap-x-8 flex-wrap">
          <button class="flex gap-x-1 min-w-fit" @click="shoppingCartStore.removeShoppingCardItem(item.id)">
            <TrashIcon class="h-6 w-6" />Remove item
          </button>
          <button class="flex gap-x-1 min-w-fit" @click="addToWishlist()">
            <HeartIcon class="h-6 w-6" />Add to wish list
          </button>
        </div>
        <div class="flex gap-x-2">
          <div class="min-w-fit" :class="{ 'line-through': item.percentReduced > 0 }">{{ item.price * item.amount }} €</div>
          <div class="text-red min-w-fit" v-if="item.percentReduced > 0">
            {{
              shoppingCartStore.calculateReducedPrice(item.price, item.percentReduced, item.amount).toFixed(2)
            }}
            €
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
