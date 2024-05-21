import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const Items  = useSelector((state) => state.cart);

  return (
    <div className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={"/"} className="text-white">Home</Link>
        <div className="flex items-center">
          <Link to={"/cart"} className="text-white mr-4">Cart</Link>
          <span className="text-white">🛍️{Items.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
