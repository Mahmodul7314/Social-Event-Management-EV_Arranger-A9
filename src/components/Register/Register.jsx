/* eslint-disable no-unused-vars */
import { getAuth } from "firebase/auth";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from "sweetalert";



const Register = () => {


    const { createUser} = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState('');
    const navigate =useNavigate();

    const handleRegister =e=>{

        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

       setErrorMessage('');
       //conditional password setup
      if(password.length<6){
        setErrorMessage("password will be at least 6 character")
        return;
      }else if(!/[A-Z]/.test(password)){
        setErrorMessage('Password must be have one Capital Letter')
        return;
      }else if (!/[#_]/.test(password)){
        setErrorMessage('Password must be have #_')
        return;
      }
        //Create User
        createUser(email, password)
        .then(result =>{
          swal( "Register Successful!","Thank You");
          e.target.reset();
         navigate('/');
         
        })
        .catch(error =>{
            console.error(error)
        })
          
    
        }
        
    return (
        <div>
               <div className="hero min-h-screen bg-slate-50">
  <div className="hero-content flex-col w-2/5">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl mb-4 font-bold">Register now!</h1>
     
    </div>
    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image Url</span>
          </label>
          <input type="text" name="photo" placeholder="Your Image url" className="input input-bordered" required />
        </div>
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
          <button className="btn btn-primary">Register</button>
        </div>
        
      </form>
     {
      <p className="text-lg pb-3 text-center font-bold text-red-500">{errorMessage}</p>
     }
      <p className="px-4 pb-8 text-center">Have You Account ? Please <Link className="text-bold text-blue-600" to="/login">Login</Link></p>
    </div>
  </div>
           </div>
        </div>
    );
};

export default Register;