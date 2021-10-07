export const Headding: React.FC = ({ children }) => (
  <div data-testid="heading" className="text-center mt-3 mb-3">
    <h1 className="bg-purple-300 inline-block p-2 rounded-lg text-gray-800">
      {children}
    </h1>
  </div>
)
