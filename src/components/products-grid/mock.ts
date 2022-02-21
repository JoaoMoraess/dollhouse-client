import faker from 'faker'

import { ProductsGridProps } from '.'
export const mock: ProductsGridProps = {
  products: [{
    id: faker.datatype.number().toString(),
    name: faker.commerce.productName(),
    imageUrl: faker.image.fashion(),
    price: 200,
    stock: 4
  },
  {
    id: faker.datatype.number().toString(),
    name: faker.commerce.productName(),
    imageUrl: faker.image.fashion(),
    price: 200,
    stock: 0
  },
  {
    id: faker.datatype.number().toString(),
    name: faker.commerce.productName(),
    imageUrl: faker.image.fashion(),
    price: 200,
    stock: 1
  },
  {
    id: faker.datatype.number().toString(),
    name: faker.commerce.productName(),
    imageUrl: faker.image.fashion(),
    price: 200,
    stock: 300
  },
  {
    id: faker.datatype.number().toString(),
    name: faker.commerce.productName(),
    imageUrl: faker.image.fashion(),
    price: 200,
    stock: 23
  },
  {
    id: faker.datatype.number().toString(),
    name: faker.commerce.productName(),
    imageUrl: faker.image.fashion(),
    price: 200,
    stock: 0
  },
  {
    id: faker.datatype.number().toString(),
    name: faker.commerce.productName(),
    imageUrl: faker.image.fashion(),
    price: 200,
    stock: 90
  },
  {
    id: faker.datatype.number().toString(),
    name: faker.commerce.productName(),
    imageUrl: faker.image.fashion(),
    price: 200,
    stock: 1
  }]
}
