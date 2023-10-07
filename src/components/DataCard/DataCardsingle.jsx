/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { BsCurrencyDollar } from "react-icons/bs";


const DataCardsingle = ({cardData}) => {
 const {image,title,description,price} = cardData || {}
    return (
        <div>
            <div className="mt-10 ">
            <div className=" mb-6 relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
    <img
      src={image}
      alt="img-blur-shadow"
      layout="fill"
    />
  </div>
  <div className="p-6">
    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     {title}
    </h5>

    <p className="block font-extrabold font-sans text-base font-light leading-relaxed text-inherit antialiased">
   {description.length>200? description.slice(0,160):{description}}

    
    </p>
    <p className="pt-8 pb-4 text-sm flex items-center"><BsCurrencyDollar></BsCurrencyDollar>Price: {price}</p>
  </div>
  <div className="p-6 pt-0">
    <button
      className="select-none rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
      View Details
    </button>
  </div>
</div>
</div>
        </div>
        
    );
};

export default DataCardsingle;