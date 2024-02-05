import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class ShoppingCartItem {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  brandName: string

  @Column()
  color: string

  @Column()
  size: string

  @Column()
  isSustainable: boolean

  @Column('float')
  price: number

  @Column()
  percentReduced: number

  @Column()
  isNewArrival: boolean

  @Column()
  amount: number

  @Column()
  image: string
}
