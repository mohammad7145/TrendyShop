import React from 'react'
import Collections from './components/Collections'
// import Banner from './components/Banner'
import Clothes from './components/Clothes'
import Offers from './components/Offers'
import Contact from './components/Contact'
import Header from './components/Header'
import Trending from './components/Trending' 
import Carousels from './components/Carousels'
import Faq from './components/Faq'



const MainPage = () => {
  return (
    <>
    <div>
        <Header />
        {/* <Banner /> */}
        <Carousels />
        <Collections />
        <Clothes />
        <Offers />
        <Faq />
        <Trending />
        <Contact />  
    </div>
    
    </>

  )
}

export default MainPage