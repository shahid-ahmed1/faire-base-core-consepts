
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
const SignUp = () => {
    const [sucsses,setSucsses]=useState()
    const [errorMesage,setErrorMesage]=useState()
    const handleSignUpSubmit=(e)=>{
       e.preventDefault()
       const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    console.log(email,password,name)
    }
    return (
        <div>
              <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-3xl font-bold">SignUp now!</h1>
   
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSignUpSubmit} className="card-body">
        <fieldset className="fieldset">
          <label className="fieldset-label">Name</label>
          <input name='name' type="text" className="input" placeholder="Name" />
          <label className="fieldset-label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
      <p className='p-3'>alredy an account ? please <NavLink to='/login'>Login</NavLink> </p>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;