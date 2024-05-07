import { ChangeEvent, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context'
import { Link } from '../../components'

type SignupFormType = Record<'email' | 'password' | 'confirmPassword', string>

const initialFormState = {
  email: '',
  password: '',
  confirmPassword: '',
}

const Signup = () => {
  const [{ email, password, confirmPassword }, setForm] =
    useState<SignupFormType>(initialFormState)

  const changed = useCallback(
    (key: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setForm((obj) => ({ ...obj, [key]: e.target.value }))
    },
    []
  )

  const navigate = useNavigate()
  const { signup } = useAuth()
  const createAccount = useCallback(() => {
    if (password === confirmPassword && password !== '') {
      signup(email, password, () => navigate('/'))
    } else {
      alert('password is not equal to confirm password')
    }
  }, [email, password, confirmPassword, navigate, signup])

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 border border-gray-300 shadow-xl rounded-xl">
      <div className="flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto">
        <div className="w-full px-6 py-8 text-black bg-white rounded shadow-md">
          <h1 className="mb-8 text-2xl font-bold text-center">Sign Up</h1>
          <input
            type="text"
            className="w-full p-3 mb-4 input input-primary"
            name="email"
            placeholder="Email"
            value={email}
            onChange={changed('email')}
          />
          <input
            type="password"
            className="w-full p-3 mb-4 input input-primary"
            name="password"
            placeholder="Password"
            value={password}
            onChange={changed('password')}
          />
          <input
            type="password"
            className="w-full p-3 mb-4 input input-primary"
            name="confirm_password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={changed('confirmPassword')}
          />
          <button
            type="submit"
            className="w-full btn btn-primary"
            onClick={createAccount}
          >
            CREATE ACCOUNT
          </button>
        </div>

        <div className="mt-6 text-gray-800">
          Already have an account?
          <Link className="btn btn-link btn-primary" to="/login">
            LOGIN
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Signup
