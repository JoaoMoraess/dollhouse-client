import faker from 'faker'

import { CartListProps } from '.'
export const mock: CartListProps = {
  subTotal: faker.datatype.float(),
  products: [
    {
      id: faker.datatype.number().toString(),
      imageUrl: faker.image.fashion(),
      stock: faker.datatype.number(),
      name: faker.commerce.product(),
      price: Number(faker.commerce.price()),
      quantity: faker.datatype.number(60)
    },
    {
      id: faker.datatype.number().toString(),
      imageUrl: faker.image.fashion(),
      stock: faker.datatype.number(),
      name: faker.commerce.product(),
      price: Number(faker.commerce.price()),
      quantity: faker.datatype.number(60)
    },
    {
      id: faker.datatype.number().toString(),
      imageUrl: faker.image.fashion(),
      stock: faker.datatype.number(),
      name: faker.commerce.product(),
      price: Number(faker.commerce.price()),
      quantity: faker.datatype.number(60)
    },
    {
      id: faker.datatype.number().toString(),
      imageUrl: faker.image.fashion(),
      stock: faker.datatype.number(),
      name: faker.commerce.product(),
      price: Number(faker.commerce.price()),
      quantity: faker.datatype.number(60)
    }
  ]
}
