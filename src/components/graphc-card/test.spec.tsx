import { render, screen } from '@testing-library/react'

import { GraphcCard } from '.'
import { mock } from './mock'

describe('<GraphcCard />', () => {
  it('should render the heading', () => {
    render(<GraphcCard {...mock} />)
    expect(screen.getByTestId('graphcCard')).toBeInTheDocument()
  })
})
