import React from 'react'
import Title from './Title'
import Tour from './Tour'
import { TourData } from '../data/TourData'

const Tours = () => {
    return (
      <section className="section" id="tours">
        <Title title='Featured' subTitle='Tours' />
        <div className="section-center featured-center">
          {TourData.map(tour => {
            return (
               <Tour {...tour} key={tour.id} />
            )
          })}
          
      </div>
    </section>
  )
}

export default Tours