const SignUp = () => {
  return (
    <div className="md:flex justify-between items-center my-10 md:my-16">
            <h2 className="text-5xl uppercase text-[#5C6874]">Sign up and get exclusive <br /> special deals</h2>
      <div className="join">
        <input
          type="text"
          className="input input-bordered join-item bg-white md:w-[348px]"
        />
        <button className="btn bg-[#1B88F4] join-item text-white">Sign Up</button>
      </div>
    </div>
  );
};

export default SignUp;
