type GetParams = { key: string }

type Set = ({ key, value }: { key: string; value: object }) => void
const APP_KEY = 'DOLLHOUSE'

export const getLocalStorageItem = <T>({ key }: GetParams): T => {
  if (typeof window === 'undefined') return

  const data = window.localStorage.getItem(`${APP_KEY}_${key}`)
  return JSON.parse(data)
}

export const setLocalStorageItem: Set = ({ key, value }) => {
  if (typeof window === 'undefined') return

  const data = JSON.stringify(value)
  return window.localStorage.setItem(`${APP_KEY}_${key}`, data)
}
