import { Module } from '@nestjs/common'
import { ShoppingCartController } from './shopping-cart.controller'
import { ShoppingCartService } from './shopping-cart.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ShoppingCartItem } from 'src/models/shopping-cart-item.model'

@Module({
  imports: [TypeOrmModule.forFeature([ShoppingCartItem])],
  controllers: [ShoppingCartController],
  providers: [ShoppingCartService]
})
export class ShoppingCartModule {}
