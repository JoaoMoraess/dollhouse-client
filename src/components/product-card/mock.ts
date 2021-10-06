import faker from 'faker'

import { ProductCardProps } from '.'
export const mock: ProductCardProps = {
  name: faker.commerce.productName(),
  imageUrl: faker.image.fashion(),
  price: 200
}
