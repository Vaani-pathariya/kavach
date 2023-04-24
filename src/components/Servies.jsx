import React from 'react'
import "../CSS/Services.css"
export default function Servies() {
  return (
    <div className='services'>
        <div className="head_services">
            Services we provide
        </div>
        <div className="name_services">
            <div className="service">
                Website
                <p className='content-service'>Stay safe online with our phishing detection solution! Our website provides comprehensive protection against phishing attacks</p>
            </div>

            <div className="service">
                Mobile App
                <p className='content-service'>"Protect your digital identity with our mobile app! Stay safe from phishing attacks and keep your personal information secure</p>
            </div>

            <div className="service">
                Web Extension
                <p className='content-service'>"Secure your website and protect your customers from phishing attacks. Try our phishing detection solution today</p>
            </div>
        </div>
    </div>
  )
}
