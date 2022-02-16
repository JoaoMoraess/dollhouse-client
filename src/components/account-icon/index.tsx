import Link from 'next/link'

import { Button } from 'components'
import { Dropdown } from 'components/dropdown'
import { useAccount } from 'hooks/use-account'

export const AccountIcon: React.FC = () => {
  const { account, logout } = useAccount()
  return (
    <div>
      {account !== null
        ? (
          <Dropdown title={
            <div className='flex'>
              <span className='text-lg text-gray-800'>{account.name}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="relative top-1.5 h-5 w-5 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          }>
            <div className='right-0 w-32 bg-gray-200 border-b-2 border-pink-500 absolute p-2 mt-2.5 z-50 flex rounded-md justify-center items-center'>
              <Button onClick={logout}>Logout</Button>
            </div>
          </Dropdown>
          )
        : (
          <div className='text-gray-800 flex items-center justify-center'>
            <Link href="/login" passHref >
              <Button>
                Fazer login
              </Button>
            </Link>
          </div>
          )}
    </div>
  )
}
