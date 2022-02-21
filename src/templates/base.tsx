import { Menu } from 'components'

export const BaseTemplate: React.FC = ({ children }) => {
  return (
    <div>
      <Menu />
      <div className="min-h-screen">
        {children}
      </div>
    </div>
  )
}
