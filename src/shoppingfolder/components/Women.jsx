import React from 'react'
import Header from './Header'
import Contact from './Contact'

const Women = () => {
  return (
    <>
    <Header />

    <div>
    <img src="Assets/Women-banner.gif" alt='women-fashion'/>
    </div>
    <div>
    <h1 className='summer-collection'>Best of Brands</h1>
        <img className="Collection-images" src="Assets/women1.avif" alt='women-pic1'/>
        <img className="Collection-images" src="Assets/women2.avif" alt='women-pic2'/>
        <img className="Collection-images" src="Assets/women3.avif" alt='women-pic3'/>
        <img className="Collection-images" src="Assets/women4.avif" alt='women-pic4'/>
        <img className="Collection-images" src="Assets/women5.avif" alt='women-pic5'/>
        <img className="Collection-images" src="Assets/women6.avif" alt='women-pic6'/>
    </div>

    <div>
    <img src="Assets/women-single.avif" alt='women-fashion'/>
    </div>

    <div>
    <h1 className='festive-collection'>Wide Variety of Festive Collections</h1>
        <img className="festive-collection-images" src="Assets/women-Ethnic1.avif" alt='women-pic1'/>
        <img className="festive-collection-images" src="Assets/women-Ethnic2.avif" alt='women-pic2'/>
        <img className="festive-collection-images" src="Assets/women-Ethnic3.avif" alt='women-pic3'/>
        <img className="festive-collection-images" src="Assets/women-Ethnic4.avif" alt='women-pic4'/>
    </div>
    <div>
    <img src="Assets/Women-double.avif" alt='women-fashion'/>
    </div>

    <Contact />
    </>
  )
}

export default Women