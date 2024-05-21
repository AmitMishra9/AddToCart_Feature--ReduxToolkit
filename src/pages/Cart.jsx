import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../Redux/CartSlice';

function Cart() {
  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <div className="container mx-auto px-8 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cartData.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-8">
            <img
              src={item.image}
              alt="Product"
              className="w-38 h-48 object-cover rounded-lg mb-4"
            />
            <h1 className="text-lg font-semibold mb-2">{item.title}</h1>
            <h5 className="text-gray-600">${item.price}</h5>
            <button
              onClick={() => removeFromCart(item.id)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart
