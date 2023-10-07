/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */


const CardDetail = ({CardDetail}) => {
    const {image,title,description} = CardDetail || {}
    return (
        <div className="mt-6 mb-4">
            <div className="relative w-full flex-row rounded-xl bg-white bg-clip-border text-gray-700 ">
  <div className="relative m-0 px-40 w-full mx-auto shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={image}
      alt="image"
      className="h-full w-full object-cover  "
    />
  </div>
  <div className="p-6">
    <h4 className="mb-4 mt-4 block text-center font-sans text-4xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     {title}
    </h4>
    <p className="mb-8 block font-sans text-lg text-justify font-normal leading-relaxed text-gray-700 antialiased">
      {description}
    </p>
    <a className="inline-block" href="#">
      <button
        className="flex text-center select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Add to Cart
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          className="h-4 w-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>
    </a>
  </div>
</div>
        </div>
    );
};

export default CardDetail;