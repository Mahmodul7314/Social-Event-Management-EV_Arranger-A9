/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";



const Login = () => {

const {signIn}= useContext(AuthContext)
const handleLogin =e=>{
e.preventDefault();
const form = new FormData(e.currentTarget);
const email = form.get('email');
const password = form.get('password');

//Sign In
 signIn(email,password)
  .then(result=>{
    console.log(result.user)
  })
  .catch(error=>{
    console.error(error)
  })
  
}
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
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
      <p className="px-4 pb-8 text-center">New Here ? Please <Link className="text-bold text-blue-600" to="/register">Register</Link></p>
    </div>
  </div>
           </div>
            
        </div>
    );
};

export default Login;