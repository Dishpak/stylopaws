import React from 'react';

const SubscribeSection = () => {
  return (
    <div className='row bg-primary py-5 m-0 justify-content-center'>
      <div className="col-1 w-50">
        <h2>Stay in fascion loop!</h2>
        <p>Sign up for our newsletter to receive exclusive promotions, style updates, and early access to new arrivals.
          Join now and stay ahead in the world of fashion!</p>
        <div className="input-group w-50 mx-auto">
          <input type="text" className="form-control rounded-start-5" placeholder="enter your email"/>
          <button className="btn btn-danger rounded-end-5">subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
