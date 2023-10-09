

const Contact = () => {
    return (
        <div className="">
          
            <div className="hero py-8 min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card w-full lg:w-full shadow-2xl bg-base-100">
      <form className="card-body lg:w-full ">
        <div className=" lg:flex justify-end gap-2">
        <div className="form-control lg:w-full ">
          <label className="label">
            <span className=" tex-lg font-medium">First Name</span>
          </label>
          <input type="text" placeholder="" className="input input-bordered rounded-none w-64 md:w-full lg:w-80 " required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="tex-lg font-medium">Last Name</span>
          </label>
          <input type="text" placeholder="" className="input input-bordered rounded-none w-64 md:w-full lg:w-80 " required />
        </div>
        </div>

        
        <div className="form-control">
          <label className="label">
            <span className="tex-lg font-medium">Email</span>
          </label>
          <input type="email" placeholder="" className="input input-bordered rounded-none w-64 md:w-full lg:w-fll" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="tex-lg font-medium">Password</span>
          </label>
          <input type="password" placeholder="" className="input input-bordered rounded-none w-64 md:w-full lg:w-full" required />
        </div>
      

        <div className="form-control">
                 <label className="label-text py-4">Date of Interest</label>
                 <input className="input input-bordered rounded-none w-64 md:w-full lg:w-full" type="date" id="birthday" name="birthday"></input>
         </div>
         <div className="form-control w-full">
          <label className="label">
            <span className="tex-lg font-medium">Event Type</span>
          </label>
          <input type="text" placeholder="" className="input input-bordered rounded-none w-64 md:w-full lg:w-full" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="tex-lg font-medium">Guest Count</span>
          </label>
          <input type="text" placeholder="" className="input input-bordered rounded-none w-64 md:w-full lg:w-full" required />
        </div>
         <div>
         <label className="label">
            <span className="tex-lg font-medium">Event Details (Event Hours, type of entertainment etc.)</span>
          </label>
            <textarea className="border md:w-full" name="" id="" cols="30" rows="10"></textarea>
         </div>
        <div className="form-control mt-6 w-1/2 lg:w-full mx-auto text-center lg:px-52">
          <button className="btn btn-secondary w-full md:w-full lg:w-80">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Contact;