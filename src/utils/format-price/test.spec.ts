
import { formatPrice } from '.'

describe('FormatPrice', () => {
  it('should format correctly price', () => {
    const priceFormated = formatPrice(134.89)
    expect(priceFormated.substr(0, 2)).toBe('R$')
  })
})
