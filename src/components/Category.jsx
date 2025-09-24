import React from 'react'

export default function Category() {
  return (
    <>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[80px] bg-[#a6f8f2]">
  <h3 class="text-3xl font-bold mb-12 text-purple-700 mt-6">Store by Category</h3>
  
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
    
    {/* <!-- Gaming Laptop --> */}
    <div class="bg-white rounded-xl shadow-md card-hover cursor-pointer overflow-hidden">
      <div class="bg-gradient-to-br flex items-center justify-center h-60">
        <img src="https://assets-prd.ignimgs.com/2021/02/03/dsc-0659-1612341486786.jpeg" 
             alt="Gaming Laptop" class="w-full h-full object-cover" />
      </div>
      <div class="p-6">
        <h4 class="text-xl font-semibold mb-2">Laptop For Gaming</h4>
        <p class="text-gray-600">Smooth and High Performance</p>
      </div>
    </div>
    
    {/* <!-- Student Laptop --> */}
    <div class="bg-white rounded-xl shadow-md card-hover cursor-pointer overflow-hidden">
      <div class="bg-gradient-to-br from-blue-400 to-indigo-400 flex items-center justify-center h-60">
        <img src="https://i.pcmag.com/imagery/reviews/03EtGf8P13WvTbB4pBDzeHu-2.fit_lim.size_1200x630.v1670284438.jpg" 
             alt="Student Laptop" class="w-full h-full object-cover"/>
      </div>
      <div class="p-6">
        <h4 class="text-xl font-semibold mb-2">Laptop for Student (IT)</h4>
        <p class="text-gray-600">Most Recommended for Programmers</p>
      </div>
    </div>
    
    {/* <!-- Office Laptop --> */}
    <div class="bg-white rounded-xl shadow-md card-hover cursor-pointer overflow-hidden">
      <div class="bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center h-60">
        <img src="https://root-nation.com/wp-content/uploads/2023/08/6efd6ab0-e5d1-11ec-be6c-b2fe04160b9a.cf_.jpg" 
             alt="Office Laptop" class="w-full h-full object-cover"/>
      </div>
      <div class="p-6">
        <h4 class="text-xl font-semibold mb-2">Laptop For Office</h4>
        <p class="text-gray-600">Good Price and Quality</p>
      </div>
    </div>

  </div>
</div>

    </>
  )
}
