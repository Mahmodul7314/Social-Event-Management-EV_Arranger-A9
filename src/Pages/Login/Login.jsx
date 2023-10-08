/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useContext, useRef, useState } from "react";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import swal from "sweetalert";

//toast


const Login = () => {

const {signIn,  signinwithGoogle}= useContext(AuthContext)
const navigate = useNavigate();
const [errorMessage, setErrorMessage] = useState('');


const handleLogin =e=>{
e.preventDefault();
const form = new FormData(e.currentTarget);
const email = form.get('email');
const password = form.get('password');

setErrorMessage('');

//Sign In
 signIn(email,password)
  .then(result=>{
    swal( "Login Successful!");
    e.target.reset();
    navigate('/')
   
  })
  .catch(error=>{
    console.error(error)
    setErrorMessage(error.message)
  })
  
}

const handleGoogleSignIn=()=>{
  signinwithGoogle()
  .then(result=>{
    console.log(result.user)
  })
  .catch(error=> console.error(error))
}
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col w-1/3">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl mb-4 font-bold">Login now!</h1>
     
    </div>
    <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        
      </form>
      {
             <p className="text-lg pb-3 text-center font-bold text-red-500">{errorMessage}</p>
      }
      <p className="px-4 pb-6 text-center">New Here ? Please <Link className="font-bold text-blue-600" to="/register">Register</Link></p>
      <p className="text-center pb-4"> Sign In With <button onClick={handleGoogleSignIn} className=" text-blue-500 font-bold">Google</button></p>
    </div>
  </div> 
           </div>
       
        </div>
    );
};

export default Login;