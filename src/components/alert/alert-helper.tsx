export const getIcons = (
  is: 'success' | 'warning' | 'info' | 'danger' | ''
): JSX.Element => {
  switch (is) {
    case 'success':
      return <SuccessIcon />
    case 'warning':
      return <WarningIcon />
    case 'info':
      return <InfoIcon />
    case 'danger':
      return <DangerIcon />
    case '':
      return <DangerIcon />
    default:
      return <DangerIcon />
  }
}
export const getColors = (
  is: 'success' | 'warning' | 'info' | 'danger' | ''
): string => {
  switch (is) {
    case 'success':
      return 'border-green-600'
    case 'warning':
      return 'border-yellow-600'
    case 'info':
      return 'border-blue-600'
    case 'danger':
      return 'border-red-600'
    case '':
      return 'border-red-600'
    default:
      return 'border-red-600'
  }
}

export const WarningIcon: React.FC = () => (
  <span className="bg-yellow-300 bg-opacity-50 rounded-full p-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 text-yellow-600 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
  </span>
)

export const DangerIcon: React.FC = () => (
  <span className="bg-red-300 bg-opacity-50 rounded-full p-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 text-red-600 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
      />
    </svg>
  </span>
)

export const InfoIcon: React.FC = () => (
  <span className="bg-blue-300 bg-opacity-50 rounded-full p-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 text-blue-600 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  </span>
)

export const SuccessIcon: React.FC = () => (
  <span className="bg-green-300 bg-opacity-50 rounded-full p-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 text-green-600 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  </span>
)
