import React from 'react'
import './styles/Section.css'
import man from './assets/man.png'

const Section = () => {
  return (
      <section className='main-section'>
          <div className="container">
              <div className="texts">
                  <h1>Hello , my name is</h1>
                  <h1 className='h1-big'>Shadman Ahmed</h1>
                  <p> Professional AbsoluteRetard </p>
                  <button className='text-button'>My Works</button>
              </div>
              <div className="image"> <img src={man} alt="" /></div>
          </div>
      </section>
  
  )
}

export default Section