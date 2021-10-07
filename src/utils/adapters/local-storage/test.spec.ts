import 'jest-localstorage-mock'
import { localStorageAdapter } from '.'

describe('LocalStorage', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    localStorage.clear()
  })
  it('should return the item from localStorage', () => {
    localStorage.setItem(
      'DOLLHOUSE_cartItems',
      JSON.stringify({ any_product_id: 2 })
    )
    expect(localStorageAdapter().get({ key: 'cartItems' })).toStrictEqual({
      any_product_id: 2
    })
  })

  it('should add the item to localStorage', () => {
    localStorageAdapter().set({
      key: 'cartItems',
      value: { any_product_id: 2, other_product_id: 1 }
    })

    expect(localStorage.getItem('DOLLHOUSE_cartItems')).toStrictEqual(
      JSON.stringify({ any_product_id: 2, other_product_id: 1 })
    )
  })
})
