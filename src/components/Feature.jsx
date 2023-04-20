import React from 'react'
import gif from '../Images/002.gif'

export default function
    () {
    return (
        <div>
            <div className='feature-container'>
                <div className="container feature-main-content flex">
                    <h1>Deep learning powered, real-time phishing and fraudulent website detection.</h1>
                    <p>ScamShield uses deep learning, computer vision and NLP to mimic how a person would look at, understand, and draw a verdict on a suspicious website. Our engine learns from high quality, proprietary datasets containing millions of image and text samples for high accuracy detection.</p>
                    <img src={gif} className='feature-image' alt="" />
                </div>
            </div>
        </div>
    )
}
