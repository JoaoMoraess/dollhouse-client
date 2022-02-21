import { SVGProps } from 'react'

export type ButtonProps = {
  children?: string
  type?: 'submit' | 'button'
  onClick?: () => void
  title?: string
  icon?: SVGProps<SVGSVGElement>
  variant?: 'primary' | 'secondary' | 'tertiary'
  border?: boolean
}

export const Button: React.FC<ButtonProps> = ({ border = true, variant = 'primary', children, onClick, title, icon, type = 'button' }) => (
  <button onClick={onClick} title={title} type={type} className={`
    ${variant === 'primary' && 'border-pink-600 text-white bg-pink-600'}
    ${variant === 'secondary' && 'border-pink-600 text-pink-600'}
    ${variant === 'tertiary' && 'border-gray-700 text-gray-800'}
    ${border && 'border-2'}
    p-2 rounded-md flex gap-2
  `}>
    {children}
    {icon && <div className="flex items-center">{icon}</div>}
  </button>
)
