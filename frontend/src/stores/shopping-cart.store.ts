import { computed, ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { ShoppingCartItem } from '@/models/shopping-cart-item.model'
import axios from '@/axios'
import { notify } from '@kyvg/vue3-notification'

export const useShoppingCartStore = defineStore('shopping-cart', () => {
  const shoppingCartItems: Ref<ShoppingCartItem[]> = ref([])

  const shoppingCartItemsAmount = computed(() => {
    return shoppingCartItems.value.reduce(
      (accumulator, currentValue) => accumulator + currentValue.amount,
      0
    )
  })

  const getShoppingCartItems = async () => {
    try {
      const result = await axios.get(`shopping-cart`)
      shoppingCartItems.value = result.data
    } catch (error) {
      console.log(error)
      notify('An error occured');
    }
  }

  const changeShoppingCardItemAmount = async (itemId: string, amount: number) => {
    try {
      await axios.put(`shopping-cart/${itemId}/amount/${amount}`)
      getShoppingCartItems()
    } catch (error) {
      console.log(error)
      notify('An error occured');
    }
  }

  const removeShoppingCardItem = async (itemId: string) => {
    try {
      await axios.delete(`shopping-cart/${itemId}`)
      getShoppingCartItems()
    } catch (error) {
      console.log(error)
      notify('An error occured');
    }
  }

  const addRandomShoppingCardItem = async () => {
    try {
      await axios.put(`shopping-cart`)
      getShoppingCartItems()
    } catch (error) {
      console.log(error)
      notify('An error occured');
    }
  }

  const calculateReducedPrice = (price: number, percentageReduced: number, amount: number) => {
    return (price - Math.round(price * (percentageReduced / 100))) * amount
  }

  const summaryPrice = computed(() => {
    return shoppingCartItems.value.reduce(
      (accumulator, currentValue) =>
        accumulator + calculateReducedPrice(currentValue.price, currentValue.percentReduced, currentValue.amount),
      0
    )
  })

  const savedToday = computed(() => {
    return shoppingCartItems.value.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.price * (currentValue.percentReduced / 100) * currentValue.amount,
      0
    )
  })

  return {
    shoppingCartItems,
    shoppingCartItemsAmount,
    getShoppingCartItems,
    changeShoppingCardItemAmount,
    removeShoppingCardItem,
    addRandomShoppingCardItem,
    calculateReducedPrice,
    summaryPrice,
    savedToday
  }
})
