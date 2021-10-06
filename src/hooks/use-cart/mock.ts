import faker from 'faker'

import { ProductCartItems } from '.'
export const productsCartMock: ProductCartItems[] = [
  {
    id: faker.datatype.number().toString(),
    name: faker.commerce.product(),
    imageUrl: faker.image.fashion(),
    price: 200,
    quantity: 1
  },

  {
    id: faker.datatype.number().toString(),
    name: faker.commerce.product(),
    imageUrl: faker.image.fashion(),
    price: 200,
    quantity: 1
  },
  {
    id: faker.datatype.number().toString(),
    name: faker.commerce.product(),
    imageUrl: faker.image.fashion(),
    price: 200,
    quantity: 1
  }

]
