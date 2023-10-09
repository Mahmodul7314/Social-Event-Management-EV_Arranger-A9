import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
// import Login from './../../Pages/Login/Login';


const Navbar = () => {

  const {user,logOut} = useContext(AuthContext);

  const handleLogOut =()=>{
    logOut()
    .then(()=>console.log('LogOut Successfull'))
    .catch(error=>console.error(error))
  }




  const navLinks =<>
    <li><NavLink
      to="/"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active text-red-500 font-normal lg:font-bold lg:px-4 p-2 lg:py-4  " : "font-normal lg:font-bold lg:px-4 p-2 lg:py-4 "
      }
    >
     Home
    </NavLink></li>
    <li><NavLink
      to="/about"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active text-red-500 font-normal lg:font-bold lg:px-4 p-2 lg:py-4  " : "font-normal lg:font-bold lg:px-4 p-2 lg:py-4 "
      }
    >
     About
    </NavLink></li>
    <li><NavLink
      to="/contact"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active text-red-500 font-normal lg:font-bold lg:px-4 p-2 lg:py-4  " : "font-normal lg:font-bold lg:px-4 p-2 lg:py-4 "
      }
    >
     Contact
    </NavLink></li>
    <li><NavLink
      to="/register"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active text-red-500 font-normal lg:font-bold lg:px-4 p-2 lg:py-4  " : "font-normal lg:font-bold lg:px-4 p-2 lg:py-4 "
      }
    >
     Register
    </NavLink></li>
    

    </>

      

    return (
//         <div className="border py-6 pl-6  bg-gray-200 flex items-center">

//           <div className=" w-1/2 flex justify-between items-center">
//           <h2 className="lg:text-4xl md:text-3xl text-xl  lg:font-extrabold font-bold "><span className="text-red-500">EV</span> Arranger</h2>
 
    
//   <ul className=" " >
//    <NavLink
//   to="/"
//   className={({ isActive, isPending }) =>
//     isPending ? "pending" : isActive ? "active text-red-500 font-normal lg:font-bold lg:px-4 p-2 lg:py-4  " : "font-normal lg:font-bold lg:px-4 p-2 lg:py-4 "
//   }
// >
//  Home
// </NavLink>
//    <NavLink
//   to="/about"
//   className={({ isActive, isPending }) =>
//     isPending ? "pending" : isActive ? "active text-red-500 font-normal lg:font-bold px-4 py-4" : "font-normal lg:font-bold px-4 py-4 "
//   }
// >
//  About
// </NavLink>
//    <NavLink
//   to="/contact"
//   className={({ isActive, isPending }) =>
//     isPending ? "pending" : isActive ? "active text-red-500 font-normal lg:font-bold  px-4 py-4" : "font-normal lg:font-bold px-4 py-4 "
//   }
// >
//  Contact
// </NavLink>

//    <NavLink 
//   to="/register"
//   className={({ isActive, isPending }) =>
//     isPending ? "pending" : isActive ? "active text-red-500 font-normal lg:font-bold px-4 py-4" : "font-normal lg:font-bold px-4 py-4 "
//   }
// >
//  Register
// </NavLink>

//  </ul> 
//  </div>
//        <div className="w-1/2 lg:flex flex-col justify-end pr-6 border-yellow-500" >
//       {user? <> 
//              <div className="flex items-center gap-2 pr-6">
//              <p className="text-sm lg:font-bold font-normal">Name: {user.displayName}<br /></p>
//               <div ><img className="lg:w-12 w-6 h-6 lg:h-12 rounded-full" src={user.photoURL} alt="" /></div>
//              </div>
             
//            <button className="btn btn-error text-black lg:font-extrabold font-bold hover:text-black hover:bg-red-500" onClick={handleLogOut} >
//            <div
//             className={({ isActive, isPending }) =>
//             isPending ? "pending" : isActive ? "active text-red-500 font-extrabold px-4 py-4" : " text-black font-extrabold"
//            }
//           >
//            LogOut
//            </div>
//            </button>
//       </>
//       :
//       <button className="btn btn-neutral">
//       <NavLink
//        to="/login"
//        className={({ isActive, isPending }) =>
//        isPending ? "pending" : isActive ? "active text-red-500 font-extrabold px-4 py-4 pr-6" : "font-extrabold"
//       }
//      >
//       Login
//       </NavLink>
//       </button>
         
//       }

//          </div>
//          </div>


<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className=" lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {navLinks}
      </ul>
    </div>
    <a className=" normal-case text-xl"> <h2 className="lg:text-4xl md:text-3xl text-xl  lg:font-extrabold font-bold "><span className="text-red-500">EV</span> Arranger</h2></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
        { user? <> 
             <div className=" gap-2 lg:pr-6 pr-2 flex lg:flex lg:items-center">
             <p className="text-sm lg:font-bold font-normal"> {user.displayName}<br /></p>
              <div ><img className="lg:w-12 w-12 h-8 lg:h-12 rounded-full" src={user.photoURL} alt="" /></div>
              </div>
             
           <button className="btn btn-error w-16 h-4 text-black lg:font-extrabold font-normal hover:text-black hover:bg-red-500" onClick={handleLogOut} >
           <div
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active text-red-500 font-extrabold lg:px-4 px-2 lg:py-4 py-2" : " text-black font-extrabold"
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
      </button>}
         
  </div>
</div>
















    );
};

export default Navbar;