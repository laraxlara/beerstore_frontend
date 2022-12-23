import React,  { useState } from 'react'
import { onRegister } from '../../api/auth'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const {data} = await onRegister(values)
      
      setError()
      setSuccess(data.message)
      setValues({
        email: '',
        password: ''
      })
      navigate('/signin')
    } catch (error) {
      console.log(error.response.data.errors[0].msg)
      setError(error.response.data.errors[0].msg)
      setSuccess('')
    }
  }

  console.log(values)

  return (
    <div>
      <div className="bg-white h-screen py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">Sign Up</h2>
            <form onSubmit={(e) => onSubmit(e)} className="bg-white max-w-lg border rounded-lg mx-auto">
              <div className="flex flex-col gap-4 p-4 md:p-8">
              <div>
                <label htmlFor="email" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Email</label>
                <input onChange={(e) => onChange(e)} name="email" value={values.email} className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required />
              </div>
              <div>
                <label htmlFor="password" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Password</label>
                <input onChange={(e) => onChange(e)} name="password" value={values.password} className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required />
              </div>

              {error ? <div className='bg-white py-6 text-[red]'>
                {error}
              </div> : null}

              <button type='submit' className="block bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Sign Up</button>
            </div>
            <div className="flex justify-center items-center bg-gray-100 p-4">
              <p className="text-gray-500 text-sm text-center">Already have an account? <a href="/signin" className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 transition duration-100">Sign In</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
