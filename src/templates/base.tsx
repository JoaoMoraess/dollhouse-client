import { Menu } from 'components'

export const BaseTemplate: React.FC = ({ children }) => {
  return (
    <div>
      <Menu />
      <div className="pt-14">
        {children}
      </div>
    </div>
  )
}
