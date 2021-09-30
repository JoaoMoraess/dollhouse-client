import { render, screen } from '@testing-library/react'

import Headding from '.'

describe('<Headding />', () => {
  it('should render the heading', () => {
    const { container } = render(<Headding />)

    expect(
      screen.getByRole('heading', { name: /Headding/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
