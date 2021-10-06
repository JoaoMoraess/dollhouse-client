/* eslint-disable react/display-name */
import { renderHook, RenderHookResult } from '@testing-library/react-hooks'

import 'jest-localstorage-mock'
import { setLocalStorageItem } from 'utils/adapters/local-storage'

import { CartContextData, CartProvider, Context, ProductCartItems, useCart } from '.'
import { productsCartMock } from './mock'

describe('useCart', () => {
  let axiosAdapter: jest.Mock
  let productsCart: ProductCartItems[]
  let wrapper: Context
  let Provider: Context
  let hook: RenderHookResult<any, CartContextData>

  beforeEach(() => {
    localStorage.clear()
    productsCart = productsCartMock
    axiosAdapter = jest.fn().mockResolvedValue({
      statusCode: 200,
      body: {
        products: productsCart,
        total: 600
      }
    })
    Provider = CartProvider(axiosAdapter)
    wrapper = ({ children }) => (
      <Provider>{children}</Provider>
    )
  })

  it('should return items and its info if there are any in the cart', async () => {
    setLocalStorageItem({
      key: 'cartItems',
      value: {
        any_id: 2,
        other_id: 1,
        other_other_id: 1
      }
    })
    hook = renderHook(() => useCart(), {
      wrapper
    })
    expect(hook.result.current.loading).toBe(true)

    await hook.waitForNextUpdate()
    expect(axiosAdapter).toHaveBeenCalledTimes(1)

    expect(hook.result.current.loading).toBe(false)
    expect(hook.result.current.isInCart('any_id')).toBeTruthy()
    expect(hook.result.current.isInCart('invalid_id')).toBeFalsy()
    expect(hook.result.current.cartInfo).toEqual({
      products: productsCart,
      total: 600
    })
    expect(hook.result.current.itemsCount).toBe(4)
  })
})
