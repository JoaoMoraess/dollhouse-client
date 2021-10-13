import { render, screen } from '@testing-library/react'

import { ProductsCartItem } from '.'

describe('<ProductsCartItem />', () => {
  it('should render the heading', () => {
    render(<ProductsCartItem />)
    expect(screen.getByTestId('productsCartItem')).toBeInTheDocument()
  })
})
