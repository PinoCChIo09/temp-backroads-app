import React from 'react'

const Tour = (props) => {
    const { id, tourDate, title, description, location, days, price, imageUrl } = props;
    return (
       <article className="tour-card">
          <div className="tour-img-container">
            <img src={imageUrl} className="tour-img" alt="" />
                <p className="tour-date">{ tourDate }</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
                    <h4>{title}</h4>
            </div>
                <p>
                    {description}
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> {location}
              </p>
                    <p>{days} {days ===1 ? 'day' : 'days'}</p>
                    <p>from ${price}</p>
            </div>
          </div>
        </article>
  )
}

export default Tour