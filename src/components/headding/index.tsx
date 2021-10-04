export const Headding: React.FC = ({ children }) => (
  <div data-testid="heading">
    <h1 className="bg-pink-300 inline-block p-2 rounded-lg text-gray-800">
      {children}
    </h1>
  </div>
)
