import React from 'react'
import t1 from './assets/t1.jpg'
import t2 from './assets/t2.jpg'
import t3 from './assets/t3.jpg'
import './styles/Testimonials.css'

const Testimonials = () => {
  return (
    <section className='testi'>
        <h1>Testimoninals</h1>
    <div className="cart-container">
        <div className="cart">
        <img src={t1} alt="" />
        <h5>Aman</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolorum at deleniti.</p>
        </div>
        <div className="cart">
        <img src={t2} alt="" />
        <h5>Aman</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolorum at deleniti.</p>
        </div>
        <div className="cart">
        <img src={t3} alt="" />
        <h5>Aman3</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolorum at deleniti.</p>
        </div>
    </div>
    </section>
  )
}

export default Testimonials