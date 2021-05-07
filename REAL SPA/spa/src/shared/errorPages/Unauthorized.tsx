import React from 'react';

const Unauthorized = () => {
  return (
    <>
      <div className="text-centered">
        <h1>UNAUTHORIZED</h1>
        <p>
          Seem's that you're trying to access a restricted area. Click <a href="/">here</a> to go to the home page
        </p>
      </div>
    </>
  );
};

export { Unauthorized };
