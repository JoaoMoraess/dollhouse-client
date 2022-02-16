import { useState } from 'react'

import Link from 'next/link'

import { InputText } from 'components'
import { useAlert } from 'hooks/use-alert'
import { axiosAdapter } from 'utils/adapters/axios'
import { baseApiUrl } from 'utils/api'

import { BaseTemplate } from './base'

type Signup = {
  name: string,
  email: string,
  password: string,
  passwordConfirmation: string,
}

export const SignupTemplate: React.FC = () => {
  const { open } = useAlert()
  const [signupState, setSignupState] = useState<Signup>({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  })

  const submit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    const { body, statusCode } = await axiosAdapter({
      method: 'post',
      url: `${baseApiUrl}/signup`,
      body: signupState
    })

    if (statusCode === 200) open({ is: 'success', message: 'Signup successful' })
    if (statusCode !== 200) open({ is: 'warning', message: 'Signup failed' })
    console.log(body)
  }

  return (
    <BaseTemplate>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={submit}>
            <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm -space-y-px px-1">
                <div className='py-2'>
                  <InputText type='name' labelText='Name' required name='name' onInputChange={(v) => setSignupState({ ...signupState, name: v })} />
                </div>
                <div className='py-2'>
                  <InputText type='email' labelText='Email' required name='email' onInputChange={(v) => setSignupState({ ...signupState, email: v })} />
                </div>
                <div className='py-2'>
                  <InputText type='password' labelText='Password' required name='password' onInputChange={(v) => setSignupState({ ...signupState, password: v })} />
                </div>
                <div className='py-2'>
                  <InputText type='passwordConfirmation' labelText='passwordConfirmation' required name='passwordConfirmation' onInputChange={(v) => setSignupState({ ...signupState, passwordConfirmation: v })} />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900"> Remember me </label>
                </div>
                <div className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                <Link href="/login"> Fazer Login </Link>

                </div>
              </div>
              <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg className="h-5 w-5 text-white group-hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </BaseTemplate>
  )
}
