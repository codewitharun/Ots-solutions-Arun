import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, removeAll } from "../redux/cart-reducer";
import { CheckIcon } from "@heroicons/react/20/solid";
const Cart = () => {
  const { cartItem } = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();
  return (
    <div className="bg-white">
      {cartItem.length > 0 ? (
        <div>
          <h2>Items in your Cart</h2>
          <button
            style={{ height: `39px` }}
            type="button"
            onClick={() => {
              dispatch(removeAll({}));
            }}
            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Remove all From Cart
          </button>
        </div>
      ) : (
        <h2>No Items in your Cart</h2>
      )}

      {cartItem.length > 0 ? (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {cartItem.map((product, index) => (
                <a key={product.id} href={product.href} className="group">
                  <h2 className="sr-only">Products</h2>
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
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
                    {" "}
                    items in cart
                    {product.qauntity}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(removeFromCart(index));
                    }}
                    className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <CheckIcon
                      className="-ml-1 mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    Remove From Cart
                  </button>
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="sr-only">No item in your Cart</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
