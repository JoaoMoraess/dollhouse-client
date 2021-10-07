import { useCart } from 'hooks/use-cart'

export const CartIcon: React.FC = () => {
  const { itemsCount } = useCart()

  return (
  <div data-testid="cartIcon" className="relative h-11 w-11">
    <div className="text-purple-900 absolute left-2/4 top-4 transform -translate-x-2/4">
      {(itemsCount > 9) ? '+9' : (itemsCount < 1) ? '' : itemsCount}
      </div>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-11 w-11 text-purple-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  </div>
  )
}
