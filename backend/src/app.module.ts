import { Module } from '@nestjs/common'
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ShoppingCartItem } from './models/shopping-cart-item.model'
import { InitialSeed1706777475889 } from './migrations/1706777475889-InitialSeed'

@Module({
  imports: [
    ShoppingCartModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database-dev.sqlite',
      entities: [ShoppingCartItem],
      synchronize: false
      // migrations: [InitialSeed1706777475889]
    })
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
