import Link from 'next/link'

import { AccountIcon } from 'components'
import { CartIcon } from 'components/cart-icon'

export const Menu: React.FC = () => {
  return (
  <header className="bg-purple-400 z-30 fixed right-0 left-0 top-0 p-2" data-testid="menu">
    <div className="mx-auto max-w-6xl flex justify-between items-center">
      <nav>
        <ul>
          <li className="text-purple-900 inline-block pr-2 pl-2">
            <Link href="/">
              Inicio
            </Link>
            </li>
          <li className="text-purple-900 inline-block pr-2 pl-2">Produtos</li>
          <li className="text-purple-900 inline-block pr-2 pl-2">Sobre</li>
        </ul>
      </nav>
      <h1 className="text-white absolute left-2/4 transform -translate-x-2/4">Logo</h1>
      <div className='flex gap-4 justify-center items-center'>
        <CartIcon />
        <AccountIcon />
      </div>
    </div>
  </header>
  )
}
