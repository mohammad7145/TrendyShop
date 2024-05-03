import React from 'react'

const Contact = () => {
  return (
    <footer class="footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-section about">
            <img src='Assets/TrendyShoplogo-white.png' className='footer-logo' alt='logo'/>
                <p className='footer-para'>Spread the joy of giving with our delightful selection of gifts. 
                From thoughtful stocking stuffers to luxurious indulgences, we have something for everyone on your list.</p>
                {/* <div class="contact">
                    <span><i class="fas fa-phone"></i> 123-456-789</span>
                    <span><i class="fas fa-envelope"></i> info@example.com</span>
                </div> */}
            </div>
            <div class="footer-section links">
                <h2>Category</h2>
                <ul>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>Beauty</li>
                </ul>
            </div>
            <div class="footer-section links">
                <h2>Quick Links</h2>
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div class="footer-section social">
                <h2>Follow Us</h2>
                <div class="social-links">
                    <i> <img src="Assets/facebook.png" className='fb' alt='fb-img'/></i>
                    <i> <img src="Assets/instagram.png" className='instagram' alt='instagram-img'/></i>
                    <i> <img src="Assets/twitter.png" className='x' alt='twitter-img'/></i> 
                </div>
            </div>
        </div>
    </div>
</footer>

  )
}

export default Contact