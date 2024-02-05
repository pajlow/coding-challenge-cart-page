import { Controller, Delete, Get, Param, Put } from '@nestjs/common'
import { ShoppingCartService } from './shopping-cart.service'
import { ShoppingCartItem } from 'src/models/shopping-cart-item.model'
import { ShopItemNames, availableShopItems } from './availableShopItems'

@Controller('shopping-cart/')
export class ShoppingCartController {
  constructor(private readonly shoppingCartService: ShoppingCartService) {}

  @Get()
  public async getItems(): Promise<ShoppingCartItem[]> {
    const items = await this.shoppingCartService.getShoppingCartItems()
    return items
  }

  @Put(':itemId/amount/:amount')
  public changeItemAmount(
    @Param('itemId') itemId: string,
    @Param('amount') amount: number
  ): Promise<void> {
    return this.shoppingCartService.changeShoppingCartItemAmount(itemId, amount)
  }

  @Put()
  public async createItem(): Promise<void> {
    const itemsInDb = await this.shoppingCartService.getShoppingCartItems()
    const itemNamesInDb = itemsInDb.map((item) => item.name)

    let availableItemName: ShopItemNames

    for (const [key, value] of Object.entries(availableShopItems)) {
      if (!itemNamesInDb.includes(value.name)) {
        availableItemName = key as ShopItemNames
        break
      }
    }
    return this.shoppingCartService.createShoppingCartItem(availableItemName)
  }

  @Delete(':itemId')
  public deleteItem(@Param('itemId') itemId: string): Promise<void> {
    return this.shoppingCartService.deleteShoppingCartItem(itemId)
  }
}
