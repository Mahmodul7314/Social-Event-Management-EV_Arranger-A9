import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Navbar = () => {

  const {user,logOut} = useContext(AuthContext);

  const handleLogOut =()=>{
    logOut()
    .then(()=>console.log('LogOut Successfull'))
    .catch(error=>console.error(error))
  }



    return (
        <div className="border py-6 pl-6  bg-gray-200 flex items-center">

          <div className=" w-1/2 flex justify-between items-center">
          <h2 className="lg:text-4xl md:text-3xl text-xl  lg:font-extrabold font-bold "><span className="text-red-500">EV</span> Arranger</h2>
 
    
  <ul className="" >
   <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active text-red-500 font-bold px-4 py-4  " : "font-bold px-4 py-4 "
  }
>
 Home
</NavLink>
   <NavLink
  to="/about"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active text-red-500 font-bold px-4 py-4" : "font-bold px-4 py-4 "
  }
>
 About
</NavLink>
   <NavLink
  to="/contact"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active text-red-500 font-bold  px-4 py-4" : "font-bold px-4 py-4 "
  }
>
 Contact
</NavLink>

   <NavLink 
  to="/register"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active text-red-500 font-bold px-4 py-4" : "font-bold px-4 py-4 "
  }
>
 Register
</NavLink>

 </ul> 
 </div>
       <div className="w-1/2 flex justify-end pr-6 border-yellow-500" >
      {user? <> 
             <div className="flex items-center gap-2 pr-6">
             <p className="text-sm font-bold">Name: {user.displayName}<br /></p>
              <div ><img className="w-12 h-12 rounded-full" src={user.photoURL} alt="" /></div>
             </div>
             
           <button className="btn btn-error text-black font-extrabold hover:text-black hover:bg-red-500" onClick={handleLogOut} >
           <div
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active text-red-500 font-extrabold px-4 py-4" : " text-black font-extrabold"
           }
          >
           LogOut
           </div>
           </button>
      </>
      :
      <button className="btn btn-neutral">
      <NavLink
       to="/login"
       className={({ isActive, isPending }) =>
       isPending ? "pending" : isActive ? "active text-red-500 font-extrabold px-4 py-4 pr-6" : "font-extrabold"
      }
     >
      Login
      </NavLink>
      </button>
         
      }

         </div>
         </div>
    //  </div>
    );
};

export default Navbar;