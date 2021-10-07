import { render, screen } from '@testing-library/react'

import { ProductCard } from '.'
import { mock } from './mock'

describe('<ProductsGrid />', () => {
  it('should render the heading', () => {
    render(<ProductCard {...mock} />)
    expect(screen.getByTestId('productCard')).toBeInTheDocument()
  })
})
