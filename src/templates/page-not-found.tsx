import { BaseTemplate } from './base'

export const PageNotFoundTemplate: React.FC = () => {
  return (
    <BaseTemplate>
      <div className="absolute -mt-20 flex items-center justify-center w-full h-full flex-col text-pink-600">
        <h1 className="text-6xl mb-4">
          404
        </h1>
        <h1 className="text-3xl mb-4">
          Page is not found
        </h1>
      </div>
    </BaseTemplate>
  )
}
