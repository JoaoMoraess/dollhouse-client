import { Alert as AlertComponent } from 'components'
import { Alert } from 'hooks/use-alert'

type AlertListProps = {
  alerts: Alert[]
}

export const AlertList: React.FC<AlertListProps> = ({ alerts }) => (
  <div className='fixed right-0 top-0 bottom-0 w-64 flex flex-col pt-14 z-50 pointer-events-none'>
    {alerts.map(alert => (
      <AlertComponent key={alert.message} {...alert} />
    ))}
  </div>
)
