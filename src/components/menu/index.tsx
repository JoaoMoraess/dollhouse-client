export const Menu: React.FC = () => (
  <header className="bg-skulls-pattern z-30 fixed right-0 left-0 top-0 p-2" data-testid="menu">
    <div className="max-w-5xl flex justify-between items-center">
      <nav>
        <ul>
          <li className="inline-block pr-2 pl-2">Inicio</li>
          <li className="inline-block pr-2 pl-2">Produtos</li>
          <li className="inline-block pr-2 pl-2">Sobre</li>
        </ul>
      </nav>

      <h1 className="absolute left-2/4 transform -translate-x-2/4">Logo</h1>
    </div>
  </header>
)
