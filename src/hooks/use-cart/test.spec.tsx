import { renderHook } from '@testing-library/react-hooks'

import 'jest-localstorage-mock'
import { setLocalStorageItem } from 'utils/local-storage'

import { CartProvider, Context, useCart } from '.'
describe('useCart', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('should return items and its info if there are any in the cart', async () => {
    const wrapper: Context = ({ children }) => (
      <CartProvider>{children}</CartProvider>
    )
    setLocalStorageItem({
      key: 'cartItems',
      value: {
        any_id: 2,
        other_id: 1
      }
    })

    const { result } = renderHook(() => useCart(), {
      wrapper
    })

    expect(result.current.isInCart('any_id')).toBeTruthy()
    expect(result.current.isInCart('invalid_id')).toBeFalsy()
  })
})
