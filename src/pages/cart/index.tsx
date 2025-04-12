import React, { useEffect, useState } from "react";
import { Product } from "../../data/Products";
import { getCartItems, removeFromCart, clearCart } from "../../utils/cartUtils";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: number) => {
    removeFromCart(id);
    setCartItems(getCartItems());
  };

  const handleClear = () => {
    clearCart();
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
          <div className="text-6xl mb-6">🛒</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Keranjang kamu kosong</h2>
          <p className="text-gray-600 mb-6">Temukan produk terbaik untuk ditambahkan ke keranjang</p>
          <button onClick={() => navigate("/products")} className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-colors focus:ring-4 focus:ring-indigo-300 focus:outline-none">
            Lihat Produk
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-6 border-b border-gray-200">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center mb-4 md:mb-0">
            <span className="mr-2">🛒</span> Keranjang Belanja
          </h1>

          <div className="flex flex-wrap gap-3">
            <button onClick={() => navigate("/products")} className="px-4 py-2 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors focus:ring-4 focus:ring-gray-300 focus:outline-none flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Kembali ke Produk
            </button>

            <button onClick={handleClear} className="px-4 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors focus:ring-4 focus:ring-red-300 focus:outline-none flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              Hapus Semua
            </button>
          </div>
        </div>

        <div className="md:flex md:space-x-6">
          <div className="md:w-2/3">
            {/* Cart Items */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
              <ul className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <li key={item.id} className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center hover:bg-gray-50 transition-colors">
                    <div className="bg-gray-100 rounded-lg p-1 sm:mr-6 mb-4 sm:mb-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover object-center rounded"
                        onError={(e) => {
                          e.currentTarget.src = "https://via.placeholder.com/100?text=Product";
                        }}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-medium text-gray-900 mb-1 truncate">{item.name}</h3>
                      <p className="text-gray-500 text-sm mb-2 line-clamp-2">{item.description}</p>
                      <p className="text-lg font-semibold text-indigo-600">Rp{item.price.toLocaleString()}</p>
                    </div>

                    <div className="mt-4 sm:mt-0 sm:ml-4">
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="group px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-red-50 hover:border-red-300 transition-colors focus:ring-2 focus:ring-red-200 focus:outline-none"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 group-hover:text-red-500 transition-colors" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:w-1/3">
            {/* Order Summary */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-6">
              <div className="p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Ringkasan Pesanan</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Jumlah Item</span>
                    <span>{cartItems.length} item</span>
                  </div>

                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>Rp{totalPrice.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between text-gray-600">
                    <span>Pengiriman</span>
                    <span>Gratis</span>
                  </div>

                  <div className="border-t border-gray-200 pt-3 mt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>Rp{totalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-colors focus:ring-4 focus:ring-indigo-300 focus:outline-none">Checkout</button>

                <div className="mt-4 text-center">
                  <button onClick={() => navigate("/products")} className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
                    Lanjutkan Belanja
                  </button>
                </div>
              </div>

              <div className="bg-gray-50 p-6 border-t border-gray-100">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Metode Pembayaran</h3>
                <div className="flex space-x-3">
                  <div className="bg-white p-2 rounded border border-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <div className="bg-white p-2 rounded border border-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div className="bg-white p-2 rounded border border-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
