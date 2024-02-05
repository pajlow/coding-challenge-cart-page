import { Injectable } from '@nestjs/common'
import { ShopItemNames, availableShopItems } from './availableShopItems'
import { ShoppingCartItem } from 'src/models/shopping-cart-item.model'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { randomUUID } from 'crypto'

@Injectable()
export class ShoppingCartService {
  constructor(
    @InjectRepository(ShoppingCartItem)
    private shoppingCartItemRepository: Repository<ShoppingCartItem>
  ) {}

  public async getShoppingCartItems(): Promise<ShoppingCartItem[]> {
    return this.shoppingCartItemRepository.find()
  }

  public async changeShoppingCartItemAmount(id: string, amount: number): Promise<void> {
    await this.shoppingCartItemRepository.update(id, { amount })
  }

  public async deleteShoppingCartItem(id: string): Promise<void> {
    await this.shoppingCartItemRepository.delete(id)
  }

  public async createShoppingCartItem(name: ShopItemNames): Promise<void> {
    await this.shoppingCartItemRepository.insert({
      ...availableShopItems[name],
      amount: 1,
      id: randomUUID()
    })
  }
}
