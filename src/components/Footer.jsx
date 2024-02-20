import React from 'react'
import { PageLinks } from '../data/PageLinks'
const Footer = () => {
    return (
       <footer className="section footer">
        <ul className="footer-links">
           {PageLinks.map(link => {
              return (
                <li key={link.id}><a href={link.href} className="footer-link">{link.label}</a></li>
              )
            })}
      </ul>
      <ul className="footer-icons">
        <li>
          <a href="https://www.twitter.com" target="_blank" className="footer-icon"
            ><i className="fab fa-facebook"></i
          ></a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank" className="footer-icon"
            ><i className="fab fa-twitter"></i
          ></a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank" className="footer-icon"
            ><i className="fab fa-squarespace"></i
          ></a>
        </li>
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer