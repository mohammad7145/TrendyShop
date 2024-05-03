import React from 'react'
import Header from './Header';
import Contact from './Contact';

const Men = () => {
  return (
    <>
    <Header />
      <div>
    <img src="Assets/Men-banner.gif" alt='Men-fashion'/>
    </div>
    <div>
    <h1 className='summer-collection'>Best of Brands</h1>
        <img className="Collection-images" src="Assets/Men1.avif" alt='Men-pic1'/>
        <img className="Collection-images" src="Assets/Men2.avif" alt='Men-pic2'/>
        <img className="Collection-images" src="Assets/Men3.avif" alt='Men-pic3'/>
        <img className="Collection-images" src="Assets/Men4.jpg" alt='Men-pic4'/>
        <img className="Collection-images" src="Assets/Men5.avif" alt='Men-pic5'/>
        <img className="Collection-images" src="Assets/Men6.jpg" alt='Men-pic6'/>
    </div>

    <div>
    <img src="Assets/Men-single.avif" alt='Men-fashion'/>
    </div>

    <div>
    <h1 className='festive-collection'>Wide Variety of Festive Collections</h1>
        <img className="festive-collection-images" src="Assets/Ethnic1.avif" alt='Men-pic1'/>
        <img className="festive-collection-images" src="Assets/Ethnic2.avif" alt='Men-pic2'/>
        <img className="festive-collection-images" src="Assets/Ethnic3.avif" alt='Men-pic3'/>
        <img className="festive-collection-images" src="Assets/Ethnic4.avif" alt='Men-pic4'/>
    </div>
    <div>
    <img src="Assets/Men-double.avif" alt='Men-fashion'/>
    </div>
    
    
  

    <Contact />
    </>


    
  )
}

export default Men