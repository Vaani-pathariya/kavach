import React from 'react'
import "../CSS/cards.css"

export default function CardSection() {
    return (
        <div>
            <h2 className='card-header'>Explore Our Salient Features</h2>
            <div className='card-container'>
                <div className="first_card">
                    <div className="head_firstcard">
                        <i class="fa-light fa-camera-security"></i>
                        Security
                    </div>
                    <div className="content_firstcard">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, odit sequi recusandae vero eaque sapiente placeat facere doloribus perferendis deleniti!
                    </div>
                </div>

                <div className="first_card">
                    <div className="head_firstcard">
                        Security Services
                    </div>
                    <div className="content_firstcard">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, odit sequi recusandae vero eaque sapiente placeat facere doloribus perferendis deleniti!
                    </div>
                </div>

                <div className="first_card">
                    <div className="head_firstcard">
                        Industry Certified
                    </div>
                    <div className="content_firstcard">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, odit sequi recusandae vero eaque sapiente placeat facere doloribus perferendis deleniti!
                    </div>
                </div>
            </div>
        </div>
    )
}
