import faker from 'faker'

import { CartListProps } from '.'
export const mock: CartListProps = {
  products: [
    {
      id: faker.datatype.number().toString(),
      imageUrl: faker.image.fashion(),
      name: faker.commerce.product(),
      price: Number(faker.commerce.price()),
      quantity: faker.datatype.number(60)
    },
    {
      id: faker.datatype.number().toString(),
      imageUrl: faker.image.fashion(),
      name: faker.commerce.product(),
      price: Number(faker.commerce.price()),
      quantity: faker.datatype.number(60)
    },
    {
      id: faker.datatype.number().toString(),
      imageUrl: faker.image.fashion(),
      name: faker.commerce.product(),
      price: Number(faker.commerce.price()),
      quantity: faker.datatype.number(60)
    },
    {
      id: faker.datatype.number().toString(),
      imageUrl: faker.image.fashion(),
      name: faker.commerce.product(),
      price: Number(faker.commerce.price()),
      quantity: faker.datatype.number(60)
    }
  ]
}
