import { DataSource } from 'typeorm'
import { ShoppingCartItem } from './models/shopping-cart-item.model'
import { InitialSeed1706777475889 } from './migrations/1706777475889-InitialSeed'

const dataSource = new DataSource({
  type: 'sqlite',
  database: 'database-dev.sqlite',
  entities: [ShoppingCartItem],
  migrations: [InitialSeed1706777475889],
  synchronize: false
})

export default dataSource
