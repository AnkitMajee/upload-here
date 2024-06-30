import  { useState } from 'react'
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignIn() {
  const [formData, setFormData]= useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();  //after signup user redirected to sign-in page


  const handleChange =(e) =>{
    setFormData({...formData, [e.target.id]: e.target.value.trim()});
  };
  const handleSubmit = async (e) =>{ 
    e.preventDefault();
    if( !formData.email || !formData.password){
      return setErrorMessage('Please fill in all fields');
    }
    try{
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success === false){
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok){        //after signup user redirected to sign-in page
        navigate('/');
      }
    }catch(error){
      setErrorMessage(error.message);
      setLoading(false);
    }
  };
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
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <div>
          <Label value='Your email'/>
          <TextInput type='email' placeholder='email' id='email' onChange={handleChange}/>
        </div>
        <div>
          <Label value='Your password'/>
          <TextInput type='password' placeholder='password' id='password' onChange={handleChange}/>
        </div>
        <Button gradientDuoTone='purpleToBlue' type='submit' disabled={loading}>
        { 
          loading ? (
            <>
            <Spinner size='sm'/>
            <span className='pl-3'>Loading...</span>
            </>
          ):(
            'Sign In'
          )}

        </Button>
        </form>
        <div className='flex gap-2 text-sm mt-5'>
          <span>Don't have an account?</span>
          <Link to='/sign-up' className='text-blue-500'>
          Sign Up
          </Link>
        </div>
        {errorMessage && (
          <Alert className='mt-5' color='failure'>
            {errorMessage}
          </Alert>
        )}
      </div>
    </div>
  </div>
}
