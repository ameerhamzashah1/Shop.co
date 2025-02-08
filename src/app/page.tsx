



import Hero from '@/components/Hero'
import Fonts from '@/components/fonts'
import React from 'react'
import Products from './Product/page'
import TOP_SELL from './Product/sell'
import Dress from '@/components/dress'
import CustomerCarousel from '@/components/Carousel'




export default function Home() {
  return (
    <div>

     
      <Hero />
      <Fonts />
      <Products/>
      <TOP_SELL />
      <Dress />
      <CustomerCarousel />
      


    
    </div>
  )
}
