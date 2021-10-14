import { render, screen } from '@testing-library/react'

import { ProductsCartItem } from '.'
import { mock } from './mock'

describe('<ProductsCartItem />', () => {
  it('should render the heading', () => {
    render(<ProductsCartItem {...mock} />)
    expect(screen.getByTestId('productsCartItem')).toBeInTheDocument()
  })
})
