import 'jest-localstorage-mock'
import { getLocalStorageItem, setLocalStorageItem } from '.'

describe('LocalStorage', () => {
  describe('getLocalStorageItem', () => {
    beforeEach(() => {
      jest.clearAllMocks()
      localStorage.clear()
    })
    it('should return the item from localStorage', () => {
      localStorage.setItem(
        'DOLLHOUSE_cartItems',
        JSON.stringify({ any_product_id: 2 })
      )
      expect(getLocalStorageItem({ key: 'cartItems' })).toStrictEqual({
        any_product_id: 2
      })
    })
  })
  describe('setLocalStorageItem', () => {
    beforeEach(() => {
      jest.clearAllMocks()
      localStorage.clear()
    })

    it('should add the item to localStorage', () => {
      setLocalStorageItem({
        key: 'cartItems',
        value: { any_product_id: 2, other_product_id: 1 }
      })

      expect(localStorage.getItem('DOLLHOUSE_cartItems')).toStrictEqual(
        JSON.stringify({ any_product_id: 2, other_product_id: 1 })
      )
    })
  })
})
