import { render, screen } from '@testing-library/react'

import { ProductsGrid } from '.'
import { mock } from './mock'

describe('<ProductsGrid />', () => {
  it('should render the heading', () => {
    render(<ProductsGrid {...mock} />)
    expect(screen.getByTestId('productsGrid')).toBeInTheDocument()
  })
})
