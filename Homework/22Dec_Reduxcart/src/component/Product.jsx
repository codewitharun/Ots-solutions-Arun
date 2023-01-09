import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { products as pList } from "../product";
import { addCart } from "../redux/cart-reducer";
import { CheckIcon } from "@heroicons/react/20/solid";
const Product = () => {
  const [products, setProducts] = useState(pList);
  const dispatch = useDispatch();
  return (
    <div className="bg-white">
      {products.length > 0 && (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <a key={product.id} href={product.href} className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    {/* {console.log(product)} */}
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-lg text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    {product.price}
                  </p>
                  <p className="mt-1 text-sm font-medium text-gray-900">
                    {product.id}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(addCart(product));
                    }}
                    className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <CheckIcon
                      className="-ml-1 mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    Add to Cart
                  </button>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
