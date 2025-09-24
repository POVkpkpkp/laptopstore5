import React from 'react'
import { Link } from 'react-router-dom'
export default function New() {
  const laptopDatabase = [
    { id: 1, name: "ASUS ROG Zephyrus M16", img: "https://dlcdnwebimgs.asus.com/files/media/C29CCD6D-9F8B-403F-AFB6-AA0C8680F397/v1/images/carousel-audio-01.jpg", brand: "ASUS ROG", processor: "Intel i9-12900H", ram: "32GB", storage: "1TB SSD", screen: "16\"", price: 2800, rating: 4.8, category: "Gaming", weight: "2.0kg", battery: "7 hours", graphics: "RTX 3070", os: "Windows 11", warranty: "2 years", inStock: true },
    { id: 2, name: "ThinkPad X1 Carbon", brand: "Lenovo", processor: "Intel i7-1260P", ram: "16GB", storage: "1TB SSD", screen: "14\"", price: 1899, rating: 4.6, category: "Business", weight: "1.12kg", battery: "15 hours", graphics: "Intel Iris Xe", os: "Windows 11", warranty: "3 years", inStock: true, img: "https://sm.pcmag.com/pcmag_me/review/l/lenovo-thi/lenovo-thinkpad-x1-carbon-gen-12_zjhe.jpg" },
    { id: 3, name: "ASUS TUF Gaming A15", img: "https://www.pcvarge.com/wp-content/uploads/2024/07/Asus-TUF-Gaming-A15-FA506NC-ES51-Review.jpg", brand: "ASUS TUF Gaming", processor: "AMD Ryzen 7 6800H", ram: "16GB", storage: "512GB SSD", screen: "15.6\"", price: 1300, rating: 4.4, category: "Gaming", weight: "2.2kg", battery: "8 hours", graphics: "RTX 3050", os: "Windows 11", warranty: "2 years", inStock: true },
    { id: 4, name: "HP Spectre x360", brand: "HP", processor: "Intel i7-1255U", ram: "16GB", storage: "512GB SSD", screen: "13.5\"", price: 1599, rating: 4.4, category: "2-in-1", weight: "1.36kg", battery: "17 hours", graphics: "Intel Iris Xe", os: "Windows 11", warranty: "1 year", inStock: false, img: "https://img-cdn.tnwcdn.com/image?fit=1280%2C720&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2021%2F08%2FHP-Spectre-x360-14-1-of-7.jpg&signature=b273734ba382a58d403431a960fd1708" },
  ];
  return (
    <>
      <div className="w-full py-6 bg-[#a6f8f2]">
        <div class="flex justify-between items-center mb-12 mt-0">
          <h1 className="lg:text-3xl font-bold text-purple-500 lg:px-20 mb-6 md:px-10 sm:text-xl mt-3 px-9 ">
            Featured Product
          </h1>
          <Link to={'/product'}><button class="text-indigo-600 hover:text-indigo-800 font-medium lg:px-20 md:px-10 px-9">View All →</button></Link>

        </div>
        <div className="w-[90%] h-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
          {laptopDatabase.map(laptop => (
            <div
              className="bg-[#73e2dec9] hover:scale-105 transition-transform duration-300 border p-2 rounded-lg shadow relative"
              key={laptop.id}
            >
              <img src={laptop.img} alt={laptop.name} className="w-full h-[60%] object-cover rounded" />
              <h3 className="mt-2 font-semibold">{laptop.name}</h3>
              <p>Price: ${laptop.price}</p>
              <p>RAM: {laptop.ram}</p>
              <div className=' absolute bottom-2 right-1'>
                <Link
                  to={`/product/${laptop.id}`}
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600" >
                  View Details
                </Link>
              </div>
              <div className='mt-4'>
                <button

                  className="px-2 py-1  border-2 border-blue-500 rounded-3xl hover:bg-blue-600 hover:text-white absolute bottom-1"
                >
                  Add to Cart
                </button>
              </div>
              <div className='w-[100px] absolute top-[60%] right-0'><p className={laptop.inStock ? "text-blue-500" : "text-red-500"}>
                {laptop.inStock ? "(In Stock)" : "(Out of Stock)"}
              </p></div>
            </div>
          ))}
        </div>
      </div>


    </>
  )
}
