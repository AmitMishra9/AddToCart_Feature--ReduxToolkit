import React, { useEffect, useState } from 'react';
import { add } from '../Redux/CartSlice';
import { useDispatch,useSelector} from 'react-redux';
import { STATUSE, fetchProducts } from '../Redux/ProductSlice';

function Home() {
  //const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  
  const {data:products,status}= useSelector((state)=>state.product)

  useEffect(() => {
    dispatch(fetchProducts());
}, []);


if(status===STATUSE.Loding){
    return <h1>Loading</h1>
}
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch('https://fakestoreapi.com/products');
  //     const data = await res.json();
  //     setProducts(data);
  //   };
  //   fetchData();
  // }, []);

  


  const ProductHandler = (product) => {
    dispatch(add(product));
  }

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-8">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h4 className="mt-2 font-semibold text-lg">{product.title}</h4>
            <h5 className="mt-1 text-gray-600">$ {product.price}</h5>
            <button onClick={() => ProductHandler(product)} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
