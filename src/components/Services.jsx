import React from 'react'
import Title from './Title'
import Service from './Service'
import { ServiceData } from '../data/ServiceData'

const Services = () => {
    return (
       <section className="section services" id="services">
          <Title title='Our' subTitle='Services' />
        <div className="section-center services-center">
          {ServiceData.map(service => {
            return (
              <Service {...service} key={service.id} />
            )
          })}
      </div>
    </section>
  )
}

export default Services