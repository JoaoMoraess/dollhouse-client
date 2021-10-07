/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable react/display-name */
import { renderHook } from '@testing-library/react-hooks'
import { act } from 'react-dom/test-utils'

import { CartProvider, Context, ProductCartItems, useCart } from '.'
import { productsCartMock } from './mock'

describe('useCart', () => {
  let axiosAdapterMock: jest.Mock
  let productsCart: ProductCartItems[]
  let wrapper: Context
  let Provider: Context
  let set: jest.Mock
  let get: jest.Mock
  let localStorageAdapterSpy: jest.Mock

  beforeEach(() => {
    productsCart = productsCartMock
    axiosAdapterMock = jest.fn().mockResolvedValue({
      statusCode: 200,
      body: {
        products: productsCart,
        total: 600
      }
    })
    set = jest.fn().mockImplementation(() => null)
    get = jest.fn().mockImplementation(() => ({ any_id: 2, other_id: 2 }))
    localStorageAdapterSpy = jest.fn()
    localStorageAdapterSpy.mockImplementation(() => ({
      set, get
    }))
  })

  beforeEach(() => {
    Provider = CartProvider(axiosAdapterMock, localStorageAdapterSpy)

    wrapper = ({ children }) => (
      <Provider>{children}</Provider>
    )
  })

  it('should return items and its info if there are any in the cart', async () => {
    const hook = renderHook(() => useCart(), { wrapper })
    expect(hook.result.current.loading).toBe(true)

    await hook.waitForNextUpdate()
    expect(axiosAdapterMock).toHaveBeenCalledTimes(1)

    expect(hook.result.current.loading).toBe(false)
    expect(hook.result.current.isInCart('any_id')).toBeTruthy()
    expect(hook.result.current.cartInfo).toEqual({
      products: productsCart,
      total: 600
    })
    expect(hook.result.current.itemsCount).toBe(4)
  })

  it('should return true/false if the item is already in the cart', async () => {
    const hook = renderHook(() => useCart(), {
      wrapper
    })

    expect(hook.result.current.loading).toBeTruthy()
    expect(hook.result.current.isInCart('invalid_id')).toBeFalsy()
    expect(hook.result.current.isInCart('any_id')).toBeTruthy()
  })
  it('should add item in the cart', async () => {
    const hook = renderHook(() => useCart(), {
      wrapper
    })
    act(() => {
      hook.result.current.addToCart('other_other_id')
    })
    expect(hook.result.current.itemsCount).toBe(5)
  })
  it('should not add product if its already in the cart', async () => {
    const hook = renderHook(() => useCart(), {
      wrapper
    })
    act(() => {
      hook.result.current.addToCart('any_id')
    })
    expect(hook.result.current.itemsCount).toBe(4)
  })
  it('should remove item from cart', async () => {
    const hook = renderHook(() => useCart(), {
      wrapper
    })
    act(() => {
      hook.result.current.removeFromCart('any_id')
    })
    expect(hook.result.current.itemsCount).toBe(2)

    await hook.waitForNextUpdate()

    act(() => {
      hook.result.current.removeFromCart('other_id')
    })

    expect(hook.result.current.itemsCount).toBe(0)
  })
  it('should clear cart', async () => {
    const hook = renderHook(() => useCart(), {
      wrapper
    })
    act(() => {
      hook.result.current.clearCart()
    })
    expect(hook.result.current.itemsCount).toBe(0)
  })
})
