import { render, screen } from '@testing-library/react'

import { DeliveryLocationForm } from '.'

describe('<DeliveryLocationForm />', () => {
  it('should render the heading', () => {
    render(<DeliveryLocationForm />)
    expect(screen.getByTestId('deliveryLocationForm')).toBeInTheDocument()
  })
})
