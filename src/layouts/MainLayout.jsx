import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import AppRouter from '../routes/AppRouter'

export default function MainLayout() {
  return (
    <>
    <div className='bg-[#a6f8f2]'>
    <Nav/>
    <AppRouter/>
    <Footer/>
    </div>
    </>
  )
}
