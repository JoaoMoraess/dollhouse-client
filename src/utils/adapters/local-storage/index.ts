const APP_KEY = 'DOLLHOUSE'

type GetParams = { key: string }
type SetParams = { key: string, value: object }
type Set = ({ key, value }: SetParams) => void

type Get = <T = any>({ key }: GetParams) => T

export type LocalStorageAdapter = () => {set: Set, get: Get }

export const localStorageAdapter: LocalStorageAdapter = () => {
  const get: Get = ({ key }: GetParams) => {
    if (typeof window === 'undefined') return

    const data = window.localStorage.getItem(`${APP_KEY}_${key}`)
    return JSON.parse(data)
  }

  const set: Set = ({ key, value }) => {
    if (typeof window === 'undefined') return

    const data = JSON.stringify(value)
    return window.localStorage.setItem(`${APP_KEY}_${key}`, data)
  }

  return {
    get,
    set
  }
}
