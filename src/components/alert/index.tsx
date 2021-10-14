import { useAlert } from 'hooks/use-alert'

import { getColors, getIcons } from './alert-helper'

export type AlertProps = {
  message: string
  is: 'danger' | 'warning' | 'success' | 'info' | '',
  percentVisible: number
}

export const Alert: React.FC<AlertProps> = ({
  is, message, percentVisible
}) => {
  const { close } = useAlert()
  return (
    <div data-testid="alertComponent" className="z-50 fixed top-28 right-0">
      <div className="shadow-lg flex gap-3 justify-between bg-white rounded overflow-hidden p-4 space-x-1">
        <div className="flex items-center">{getIcons(is)}</div>
        <div className="flex flex-grow items-center">
          <p className="max-w-md leading-tight text-gray-800 text-xl">
            {message}
          </p>
        </div>
        <div>
          <button
            onClick={() => close()}
            type="button"
            className="bg-indigo-300 bg-opacity-25 text-gray-700 rounded overflow-hidden p-1 lg:p-2 focus:outline-none"
          >
            <svg className="h-4 w-auto" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="flex w-full items-end justify-end">
        <div
          className={`transition-all ${getColors(is)} h-1 rounded-md`}
          style={{ width: `${percentVisible}%` }}
        ></div>
      </div>
    </div>
  )
}
