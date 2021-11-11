import Link from 'next/link'

import { Headding } from 'components'

export type MenuSideProps = {
  items?: Array<{href: string, label: string}>
}

export const MenuSide: React.FC<MenuSideProps> = ({ items }) => (
  <div data-testid="menuSide" className="flex flex-col justify-between items-center fixed left-0 bottom-0 top-0 bg-purple-400">
    <Headding>DollHouse</Headding>
    <div className="h-full">
      {items?.map(item => (
        <div className="py-3 px-7 text-gray-800 border-b-2" key={`MenuSide-${item.label}`}>
          <Link href={item.href}>{item.label}</Link>
        </div>
      ))}
    </div>
    <span className="text-purple-800 p-2">
      <Link href="/">Voltar para loja</Link>
    </span>
  </div>
)
