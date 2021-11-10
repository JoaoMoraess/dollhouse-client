export type ButtonProps = {
  children?: string
  type?: 'submit' | 'button'
  onClick?: () => void
  title?: string
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, title, type = 'button' }) => (
  <div data-testid="button">
    <button title={title} type={type} className="bg-pink-500 rounded-xl text-white px-4 py-3" onClick={onClick}>{children}</button>
  </div>
)
