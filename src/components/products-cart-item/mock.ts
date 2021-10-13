import faker from 'faker'

import { ProductsCartItemProps } from '.'
export const mock: ProductsCartItemProps = {
  id: faker.datatype.number().toString(),
  imageUrl: faker.image.fashion(),
  name: faker.commerce.product(),
  price: Number(faker.commerce.price()),
  quantity: faker.datatype.number(60)
}
