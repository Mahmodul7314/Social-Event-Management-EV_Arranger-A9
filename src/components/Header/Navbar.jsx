import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="border py-6 bg-gray-200 flex items-center">
           <h2 className="text-4xl font-extrabold px-6 pr-20"><span className="text-red-500">EV</span> Arranger</h2>
      <ul className="flex justify-center items-center gap-6">  
  
   <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active text-red-500 font-bold px-4 py-4  " : ""
  }
>
 Home
</NavLink>
   <NavLink
  to="/about"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active text-red-500 font-bold px-4 py-4" : ""
  }
>
 About
</NavLink>
   <NavLink
  to="/contact"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active text-red-500 font-bold px-4 py-4" : ""
  }
>
 Contact
</NavLink>


           </ul>     
        </div>
    );
};

export default Navbar;