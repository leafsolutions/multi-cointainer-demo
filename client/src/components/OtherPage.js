import React from 'react';
import { Link } from 'react-router-dom';

const OtherPage = () => {
  return (
    <div>
      I'm some other page.
      <Link to='/'>Go back to home page!</Link>
    </div>
  );
};

export default OtherPage;
