import { render, screen } from '@testing-library/react'

import { CartList } from '.'
import { mock } from './mock'

describe('<CartList />', () => {
  it('should render the heading', () => {
    render(<CartList {...mock} />)
    expect(screen.getByTestId('cartList')).toBeInTheDocument()
  })
})
