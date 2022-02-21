import { useState, useEffect } from 'react'

export type DropdownProps = {
  title: React.ReactNode
  children: React.ReactNode
}

export const Dropdown: React.FC<DropdownProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <div className='w-full relative'>
      <div className='cursor-pointer relative flex items-center pr-2 z-30' onClick={() => setIsOpen(!isOpen)}>{title}</div>

      <div className={`text-gray-800 right-0 z-30 ${isOpen ? 'flex  pointer-events-auto' : 'hidden pointer-events-none'}`} aria-hidden={!isOpen}>{children}</div>
      <div className={`${!isOpen ? 'hidden pointer-events-none' : 'fixed pointer-events-auto'} fixed right-0 top-0 left-0 bottom-0 z-30`} aria-hidden={!isOpen} onClick={() => setIsOpen(!isOpen)} />
    </div>
  )
}
