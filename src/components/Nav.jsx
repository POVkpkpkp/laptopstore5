import React, { useState } from 'react'
import { FaUser } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import CartSlide from './CartSlide';
import { Link } from 'react-router-dom';

export default function Nav() {
  const [menu, setmenu] = useState(true)
  const currentPath = window.location.pathname;
  return (
    <>
      {/* --------lg-screen----- */}
      <nav className="hidden w-full h-[70px] shadow-md lg:flex fixed top-0 left-0 z-50 bg-[#5e7b79]">
        <div className="w-[10%] h-full flex justify-center">
          <img src="/img/logo.png" alt="" className="w-[70%] h-full " />
        </div>
        <div className="w-[50%] h-full">
          <ul className="w-full h-full flex justify-evenly items-center font-bold">
            {/* <li className="hover:text-purple-500 "><a  href="/">HOME</a></li>
            <li className="hover:text-purple-500 "><a  href="/product">PRODUCT</a></li>
            <li className="hover:text-purple-500 "><a  href="/about">ABOUT</a></li>
            <li className="hover:text-purple-500 "><a  href="/contact">CONTACT</a></li> */}
            <li className={currentPath === "/" ? "underline text-purple-500" : "hover:text-purple-500"}>
              <a href="/">HOME</a>
            </li>
            <li className={currentPath === "/product" ? "underline text-purple-500" : "hover:text-purple-500"}>
              {/* <a href="/product">PRODUCT</a> */}
              <Link to={'/product'}>Product</Link>
            </li>
            <li className={currentPath === "/about" ? "underline text-purple-500" : "hover:text-purple-500"}>
              {/* <a href="/about">ABOUT</a> */}
              <Link to={'/about'}>ABOUT</Link>
            </li>
            <li className={currentPath === "/contact" ? "underline text-purple-500" : "hover:text-purple-500"}>
              {/* <a href="/contact">CONTACT</a> */}
              <Link to={'/contact'}>CONTACT</Link>
            </li>
          </ul>
        </div>
        <div className="w-[40%] h-full flex justify-center">
          <div className="w-[60%] h-full items-center flex ">
            <input type="text" placeholder="Search product...!                                      🔍"
              className="w-full h-[70%] flex-1 px-6 py-3 rounded-3xl border border-slate-400 hover:bg-[#415755] text-slate-700 bg-[#5e7b79]" />
          </div>
          <div className="w-[40%] h-full flex justify-evenly items-center p-2 px-3">
            <IoNotifications className="h-[50%] w-[50%]" />
            <Link to={'/login'}><FaUser size={40} className="h-[50%] w-[50%]" /></Link>
            {/* <a href="/login"></a> */}
            <CartSlide />
          </div>
        </div>
      </nav>

      {/* --------md & sm screen----- */}
      <div className="lg:hidden w-full h-[60px] flex fixed top-0 left-0 z-50  bg-[#5e7b79] shadow-md">
        <div className="w-[50%] h-full flex justify-start px-5">
          <img src="/img/logo.png" className="w-[40%] h-full" alt="" />
        </div>
        <div className="w-[40%] h-full flex justify-evenly items-center md:justify-end px-4">
          <IoNotifications className="h-[30%] w-[30%]" />
          {/* <FaUser className="h-[50%] w-[50%]" /> */}
          <a href="/login"><FaUser size={30} className="h-[50%] w-[50%]" /></a>
          <CartSlide />
        </div>
        <div className="w-[10%] h-full flex justify-end items-center px-5">
          <h1 className="text-3xl" onClick={() => setmenu(!menu)}>
            {menu ? <IoIosMenu /> : <IoCloseSharp />}
          </h1>
        </div>

        {/* ------ slide left --------- */}
        <div className={`w-[50%] h-[100vh] bg-white shadow-md fixed top-0 left-0 transition-all duration-200 z-50 ${menu ? '-translate-x-full' : 'translate-x-0'}`} >
          <ul className="w-full font-bold text-xl pl-4 pt-5 space-y-4">
            <li className={currentPath === "/" ? "underline text-purple-500" : "hover:text-purple-500"}>
              <a href="/">HOME</a>
            </li>
            <li className={currentPath === "/product" ? "underline text-purple-500" : "hover:text-purple-500"}>
              {/* <a href="/product">PRODUCT</a> */}
              <Link to={'/product'}>Product</Link>
            </li>
            <li className={currentPath === "/about" ? "underline text-purple-500" : "hover:text-purple-500"}>
              {/* <a href="/about">ABOUT</a> */}
              <Link to={'/about'}>ABOUT</Link>
            </li>
            <li className={currentPath === "/contact" ? "underline text-purple-500" : "hover:text-purple-500"}>
              {/* <a href="/contact">CONTACT</a> */}
              <Link to={'/contact'}>CONTACT</Link>
            </li>
          </ul>
        </div>

        {/* ------ slide right (overlay) --------- */}
        <div className={`w-[50%] h-[100vh]  fixed top-0 z-50 right-0 ${menu ? 'translate-x-full' : '-translate-x-0'}`} onClick={() => setmenu(!menu)}>

        </div>
      </div>
    </>
  )
}

