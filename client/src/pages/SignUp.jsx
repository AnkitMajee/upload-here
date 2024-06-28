import React from 'react'
import { Button, Label, TextInput } from 'flowbite-react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return <div className='min-h-screen mt-20'>
    <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:item-center'>
      {/* left */}
      <div className='flex-1'>
      <Link to='/' className='self-center whitespace-nowrap text-sm
        sm:text-xl font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500
            via-purple-500 to-green-500 rounded-lg text-white'>Upload</span>
            Here
        </Link>
        <p className='text-sm mt-5'>
          Upload your files here J Junos!
        </p>
      
    </div>
      {/* right */}
      <div className='flex-1'>
        <form className='flex flex-col gap-4'>
        <div>
          <Label value='Your username'/>
          <TextInput type='text' placeholder='Username'id='username'/>
        </div>
        <div>
          <Label value='Your email'/>
          <TextInput type='text' placeholder='email'id='email'/>
        </div>
        <div>
          <Label value='Your password'/>
          <TextInput type='text' placeholder='password'id='password'/>
        </div>
        <Button gradientDuoTone='purpleToBlue' type='submit'>
        Sign Up
        </Button>
        </form>
        <div className='flex gap-2 text-sm mt-5'>
          <span>Already have an account?</span>
          <Link to='/sign-in' className='text-blue-500'>
          Sign In
          </Link>
        </div>
      </div>
    </div>
  </div>
}
