import { render, screen } from '@testing-library/react'

import { Headding } from '.'

describe('<Headding />', () => {
  it('should render the heading', () => {
    render(<Headding />)
    expect(screen.getByTestId('heading')).toBeInTheDocument()
  })
})
