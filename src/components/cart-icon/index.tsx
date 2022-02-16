import Link from 'next/link'

import { useCart } from 'hooks/use-cart'
export const CartIcon: React.FC = () => {
  const { itemsCount } = useCart()

  return (
    <Link href="/cart" passHref={true}>
      <div data-testid="cartIcon" className="cursor-pointer relative h-8 w-8">
        <div className="text-sm text-purple-900 absolute left-2/4 top-1/2 transform -translate-y-1/3 -translate-x-2/4">
          {(itemsCount > 9) ? '9+' : (itemsCount < 1) ? '' : itemsCount}
          </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      </div>
    </Link>
  )
}
