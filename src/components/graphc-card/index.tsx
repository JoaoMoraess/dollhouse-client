import { formatPrice } from 'utils/format-price'

export type GraphcCardProps = {
  color?: 'pink' | 'purple' | 'blue',
  colorText?: string
  title: string,
  type?: 'money' | 'number' | 'date'
}

export const GraphcCard: React.FC<GraphcCardProps> = ({
  title,
  color,
  type = 'number',
  colorText = 'yellow',
  children
}) => {
  const formatValues = (value: any): string | number | Date => {
    if (type === 'money') {
      return formatPrice(value)
    } else if (type === 'date') {
      return value
    } else {
      return value
    }
  }
  return (

  <div className={`rounded-lg text-white flex flex-col p-5 bg-${color}-600 w-96`} data-testid="graphcCard">
    <h2 className="text-2xl">{title}</h2>
    <span className={`text-${colorText}-400 text-2xl font-bold`}>{formatValues(children)}</span>
  </div>
  )
}
