import React from 'react'
import Category from '../components/Category'
import New from '../components/New'
import SliderBar from '../components/SliderBar'

export default function Home() {
  return (
    <div className='bg-[#a6f8f2]'>
      <SliderBar/>
      <Category/>
      <New/>
    </div>
  )
}
