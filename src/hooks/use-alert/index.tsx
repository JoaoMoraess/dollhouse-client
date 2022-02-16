import { createContext, useContext, useState } from 'react'

import { AlertList } from 'components'

export type AlertContextData = {
  open: ({ is, message, timeVisibleInSeconds }: Alert) => void,
  close: ({ message }: {message: string}) => void
}

export const AlertContextDefaultValues = {
  open: () => null,
  close: () => null
}
export const AlertContext = createContext<AlertContextData>(
  AlertContextDefaultValues
)

export type Context = (input: { children: React.ReactNode }) => JSX.Element

export type Alert = {
  message: string
  is: 'danger' | 'warning' | 'success' | 'info' | '',
  timeVisibleInSeconds?: number
}

const AlertProvider: Context = ({ children }) => {
  const [alerts, setAlerts] = useState<Alert[]>([])

  const open = ({ is, message, timeVisibleInSeconds }: Alert): void => {
    const duplicatedAlerts = alerts.find((alert) => alert.message === message)
    if (duplicatedAlerts) return
    setAlerts((old) => [...old, { is, message, timeVisibleInSeconds }])
  }

  const close = ({ message }: {message: string}): void => {
    setAlerts((old) => old.filter((alert) => alert.message !== message))
  }

  return (
      <AlertContext.Provider
        value={{
          open,
          close
        }}>
        <AlertList alerts={alerts} />
        {children}
      </AlertContext.Provider>
  )
}

const useAlert = (): AlertContextData => useContext(AlertContext)

export { AlertProvider, useAlert }
