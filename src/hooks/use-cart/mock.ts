import faker from 'faker'

import { ProductCartItem } from '.'
export const productsCartMock: ProductCartItem[] = [
  {
    id: faker.datatype.number().toString(),
    stock: faker.datatype.number(),
    name: faker.commerce.product(),
    imageUrl: faker.image.fashion(),
    price: 200,
    quantity: 1
  },

  {
    id: faker.datatype.number().toString(),
    stock: faker.datatype.number(),
    name: faker.commerce.product(),
    imageUrl: faker.image.fashion(),
    price: 200,
    quantity: 1
  },
  {
    id: faker.datatype.number().toString(),
    stock: faker.datatype.number(),
    name: faker.commerce.product(),
    imageUrl: faker.image.fashion(),
    price: 200,
    quantity: 1
  }

]
