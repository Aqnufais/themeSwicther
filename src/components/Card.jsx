import React from 'react'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg flex items-center" src="data:image/jpeg;base64,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" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}
