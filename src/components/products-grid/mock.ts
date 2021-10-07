import faker from 'faker'

import { ProductsGridProps } from '.'
export const mock: ProductsGridProps = {
  products: [{
    id: faker.datatype.number().toString(),
    name: faker.commerce.productName(),
    imageUrl: faker.image.fashion(),
    price: 200
  },
  {
    id: faker.datatype.number().toString(),
    name: faker.commerce.productName(),
    imageUrl: faker.image.fashion(),
    price: 200
  },
  {
    id: faker.datatype.number().toString(),
    name: faker.commerce.productName(),
    imageUrl: faker.image.fashion(),
    price: 200
  },
  {
    id: faker.datatype.number().toString(),
    name: faker.commerce.productName(),
    imageUrl: faker.image.fashion(),
    price: 200
  },
  {
    id: faker.datatype.number().toString(),
    name: faker.commerce.productName(),
    imageUrl: faker.image.fashion(),
    price: 200
  },
  {
    id: faker.datatype.number().toString(),
    name: faker.commerce.productName(),
    imageUrl: faker.image.fashion(),
    price: 200
  },
  {
    id: faker.datatype.number().toString(),
    name: faker.commerce.productName(),
    imageUrl: faker.image.fashion(),
    price: 200
  },
  {
    id: faker.datatype.number().toString(),
    name: faker.commerce.productName(),
    imageUrl: faker.image.fashion(),
    price: 200
  }]
}
