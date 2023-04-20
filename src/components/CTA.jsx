import React from 'react'
import ctaImage from '../Images/001.png'

export default function () {
    return (
        <div className='cta-container'>
            <div className="container cta-main-content flex">
                <h1>Try ScamShield Chrome Website Plugin</h1>
                <p>This add-in can access and modify personal information in the active message, such as the body, subject, sender, recipients, and attachment information. It may send this data to a third-party service. Other items in your mailbox can’t be read or modified.</p>
                <img src={ctaImage} className='cta-image' alt="" />
                <button type="button" class="btn btn-primary">About Us</button>
            </div>
        </div>
    )
}
