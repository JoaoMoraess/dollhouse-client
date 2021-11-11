import { render, screen } from '@testing-library/react'

import { MenuSide } from '.'

describe('<MenuSide />', () => {
  it('should render the heading', () => {
    render(<MenuSide />)
    expect(screen.getByTestId('menuSide')).toBeInTheDocument()
  })
})
