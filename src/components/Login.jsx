import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProbider';
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { auth } from '../faireBase';
const Login = () => {
      const navigate = useNavigate()
 const { signInUser}=useContext(AuthContext)

 const provider = new GoogleAuthProvider();
    const [sucsses,setSucsses]=useState()
    const [errorMesage,setErrorMesage]=useState()
const handleSubmit=(e)=>{
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password);

    signInUser(email,password)
    .then(result =>{
      console.log(result.user);
      e.target.reset()
      navigate('/')
    })
    .catch(error=>{
      console.log('Erroe',error)
    }
    )
}

const handleGoogleLogin=()=>{
  signInWithPopup(auth,provider)
  .then(result => {
    console.log(result)
    navigate('/')
  })
  .catch(error=>console.log(error))
}

    return (
        <div>
           <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit} className="card-body">
        <fieldset className="fieldset">
          <label className="fieldset-label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
      <p className=''>new to this website ? please <NavLink to='/signup'>Sign Up</NavLink> </p>
      <button onClick={handleGoogleLogin} className='btn'>Google</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;