<script setup lang="ts">
import { useShoppingCartStore } from '@/stores/shopping-cart.store'
import { ChevronRightIcon } from '@heroicons/vue/24/solid'
import { FaceSmileIcon } from '@heroicons/vue/24/outline'
import { notify } from '@kyvg/vue3-notification';

const shoppingCartStore = useShoppingCartStore()

function checkout() {
  notify('Proceeding to checkout');
}
</script>

<template>
  <div class="col-span-5 lg:col-span-2 h-fit px-12 py-12 bg-box-background">
    <h1 class="text-left text-3xl mb-2">Summary</h1>
    <div class="flex justify-between">
      <div class="mb-2">Subtotal</div>
      <div>{{ shoppingCartStore.summaryPrice.toFixed(2) }} €</div>
    </div>
    <div class="flex justify-between font-bold uppercase">
      <div>Total</div>
      <div>{{ shoppingCartStore.summaryPrice.toFixed(2) }} €</div>
    </div>
    <div class="flex justify-start text-sm mb-2">incl. VAT</div>
    <div class="flex">
      <button
        class="flex flex-auto justify-between px-3 py-2 mb-2 bg-primary-text text-box-background"
        @click="checkout()"
      >
        <span>Checkout</span>
        <ChevronRightIcon class="h-6 w-6 text-box-background" />
      </button>
    </div>
    <div class="flex justify-start text-xs mb-2">
      <div>
        Your order from the international s.Oliver online shop will be shipped by DHL Worldwide.
        Shipping costs are 4.95 €.
      </div>
    </div>
    <div class="flex justify-between text-red uppercase">
      <div class="flex items-center gap-x-1">
        <FaceSmileIcon class="h-8 w-8" /> You can save today
      </div>
      <div>{{ shoppingCartStore.savedToday.toFixed(2) }} €</div>
    </div>
  </div>
</template>
