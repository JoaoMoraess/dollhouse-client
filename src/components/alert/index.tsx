import { useEffect } from 'react'

import { useAlert } from 'hooks/use-alert'

import { getColors, getIcons } from './alert-helper'

export type AlertProps = {
  message: string
  is: 'danger' | 'warning' | 'success' | 'info' | '',
  timeVisibleInSeconds?: number
}

export const Alert: React.FC<AlertProps> = ({
  is, message, timeVisibleInSeconds = 3
}) => {
  const { close } = useAlert()

  useEffect(() => {
    setTimeout(() => close({ message }), timeVisibleInSeconds * 1000)
  }, [])

  return (
    <div data-testid="alertComponent" className='w-full pointer-events-auto+'>
      <div className="shadow-lg flex gap-3 justify-between bg-white rounded overflow-hidden p-4 space-x-1">
        <div className="flex items-center">{getIcons(is)}</div>
        <div className="flex flex-grow items-center">
          <p className="max-w-md leading-tight font-light text-gray-800 text-sm">
            {message}
          </p>
        </div>
        <div>
          <button
            onClick={() => close({ message })}
            type="button"
            className="bg-indigo-300 bg-opacity-25 text-gray-700 rounded overflow-hidden p-1 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex w-full items-end justify-end">
        <div
          className={`w-full ${getColors(is)} border-b-2 rounded-md`}
          style={{
            animationName: 'decrase-width',
            animationDuration: `${timeVisibleInSeconds}s`,
            animationFillMode: 'forwards',
            animationTimingFunction: 'linear'
          }}
        ></div>
      </div>
    </div>
  )
}
