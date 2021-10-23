import { render, screen } from '@testing-library/react'

import { CardInfoForm } from '.'
import { mock } from './mock'

describe('<CardInfoForm />', () => {
  it('should render the heading', () => {
    render(<CardInfoForm {...mock} />)
    expect(screen.getByTestId('cardInfoForm')).toBeInTheDocument()
  })
})
