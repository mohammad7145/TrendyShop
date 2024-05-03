import React from 'react'
import Accordion from 'react-bootstrap/Accordion';


function Faq() {
  return (
    <>
    
    <div>
    <h1 className='faq'>
    FAQ
    </h1>
    <Accordion defaultActiveKey="0" className='Accordion'>
    <Accordion.Item eventKey="0">
      <Accordion.Header className='Accordion-header'>What is TrendyShop?</Accordion.Header>
      <Accordion.Body className='Accordion-body'>
      TrendyShop is your ultimate destination for the latest trends 
      in fashion and lifestyle products. We offer a curated selection
       of clothing, accessories, home decor, and more to keep you on-trend and stylish.
      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="1">
      <Accordion.Header className='Accordion-header'>What makes TrendyShop unique?</Accordion.Header>
      <Accordion.Body className='Accordion-body'>
      At TrendyShop, we pride ourselves on offering a diverse range of trendy
       products at affordable prices. Our team is dedicated to scouring the market 
       for the hottest trends, ensuring that you can always find something fresh and 
       exciting on our shelves.
      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="2">
      <Accordion.Header className='Accordion-header'>Is TrendyShop a trusted retailer?</Accordion.Header>
      <Accordion.Body className='Accordion-body'>
      Yes, TrendyShop is a trusted online retailer with a commitment to customer 
      satisfaction. We prioritize quality, authenticity, and excellent customer service in everything we do.
      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="3">
      <Accordion.Header className='Accordion-header'>How do I place an order on TrendyShop?</Accordion.Header>
      <Accordion.Body className='Accordion-body'>
      Placing an order on TrendyShop is easy! Simply browse our website, add your 
      favorite items to your cart, and proceed to checkout. Follow the prompts to enter 
      your shipping and payment information, and you're all set.
      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="4">
      <Accordion.Header className='Accordion-header'>What is TrendyShop's return policy?</Accordion.Header>
      <Accordion.Body className='Accordion-body'>
      We want you to be completely satisfied with your purchase from TrendyShop. 
      If you're not happy with your order for any reason, you can return it within 30 days 
      for a full refund or exchange. Please visit our Returns & Exchanges page for more information.
      </Accordion.Body>
    </Accordion.Item>

  </Accordion>
  </div>
  </>

  


  )
}

export default Faq