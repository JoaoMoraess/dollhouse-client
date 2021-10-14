import { createContext, useContext, useState, useEffect } from 'react'

import { Alert as AlertComponent } from 'components/alert'

export type AlertContextData = {
  open: ({ is, message }: Alert) => void,
  close: () => void
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
  is: 'danger' | 'warning' | 'success' | 'info' | ''
}

const AlertProvider: Context = ({ children }) => {
  const [percentVisible, setPercentVisible] = useState(100)
  const [timerId, setTimerId] = useState(null)

  const [isVisible, setIsvisible] = useState<boolean>(false)
  const [alert, setAlert] = useState<Alert>({
    is: '',
    message: ''
  })

  let newPrecentVisible: number

  const timerPerform = (): void => {
    console.log(newPrecentVisible)
    newPrecentVisible--
    setPercentVisible(newPrecentVisible)
  }
  useEffect(() => {
    if (isVisible) {
      newPrecentVisible = percentVisible
      const timer = setInterval(timerPerform, 50)
      setTimerId(timer)
    }
  }, [isVisible])

  useEffect(() => {
    if (percentVisible <= 0) {
      close()
    }
  }, [percentVisible])

  const open = ({ is, message }: Alert): void => {
    setIsvisible(true)
    setAlert({ is, message })
  }

  const close = (): void => {
    clearTimeout(timerId)
    setPercentVisible(100)
    setAlert({ is: '', message: '' })
    setIsvisible(false)
    setTimerId(null)
  }

  return (
      <AlertContext.Provider
        value={{
          open,
          close
        }}>
        {isVisible && (
          <AlertComponent {...alert} percentVisible={percentVisible} />
        )}
        {children}
      </AlertContext.Provider>
  )
}

const useAlert = (): AlertContextData => useContext(AlertContext)

export { AlertProvider, useAlert }
