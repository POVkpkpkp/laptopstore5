import React from 'react'

export default function Login() {
  return (
    // <form action="" method='post' className='w-[400px] h-[500px] shadow-xl px-5 bg-slate-600'>
    //   {/* <div className='w-full mt-6'> */}
    //     <div> <h1 className=' text-center text-x'>LOGIN</h1></div>
    //     <label className="block font-medium text-gray-700 mb-1 mt-4">Uername</label>
    //     <input type="text" name="name" placeholder='Username' required className="w-[70%] border rounded-xl px-3 py-2 focus:outline-none focus:ring focus:border-blue-400" />
    //     <label className="block font-medium text-gray-700 mb-1 mt-4">Email</label>
    //     <input type="text" name="email" placeholder='email' required className="w-[70%] border rounded-xl px-3 py-2 focus:outline-none focus:ring focus:border-blue-400" />
    //     <label className="block font-medium text-gray-700 mb-1 mt-4">Password</label>
    //     <input type="text" name="password" placeholder='password' required className="w-[70%] border rounded-xl px-3 py-2 focus:outline-none focus:ring focus:border-blue-400" />
    //   {/* </div> */}

    // </form>
    <form
  action=""
  method="post"
  className="w-[400px] h-auto shadow-2xl rounded-2xl p-8 bg-[#6b9ca3] text-white mx-auto mt-[70px] "
>
  {/* Title */}
  <h1 className="text-2xl font-bold text-center mb-6 text-[#7b0448]">Login</h1>

  {/* Username */}
  <div className="mb-4">
    <label className="block font-medium text-gray-300 mb-1">Username</label>
    <input
      type="text"
      name="username"
      placeholder="Enter username"
      required
      className="w-full border border-gray-500 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#ece3ec7c] placeholder-gray-400"
    />
  </div>

  {/* Email */}
  <div className="mb-4">
    <label className="block font-medium text-gray-300 mb-1">Email</label>
    <input
      type="email"
      name="email"
      placeholder="Enter email"
      required
      className="w-full border border-gray-500 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#ddd5d995] placeholder-gray-400"
    />
  </div>

  {/* Password */}
  <div className="mb-6">
    <label className="block font-medium text-gray-300 mb-1">Password</label>
    <input
      type="password"
      name="password"
      placeholder="Enter password"
      required
      className="w-full border border-gray-500 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#efe3f06b] placeholder-gray-400"
    />
  </div>

  {/* Button */}
  <div className='m-auto justify-center flex'>
     <button
    type="submit"
    className="w-[100px] bg-blue-500 hover:bg-blue-600 transition-colors py-2 rounded-xl font-semibold shadow-md">
    Login
     </button>
  </div>
  {/* Extra link */}
  <p className="text-sm text-gray-600 text-center mt-4">
    Don’t have an account?{" "}
    <a href="/register" className="text-blue-400 hover:underline">
      Sign up
    </a>
  </p>
</form>

  )
}
