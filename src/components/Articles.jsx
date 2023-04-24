import React from 'react'
import "../CSS/articles.css"
// import {article01} from "../Images/Russian_hacker.webp"
import { article02 } from "../Images/001.png"

function Articles() {
    return (
        <div>
            <div className="main-articles-container">
                <h3>Latest Articles</h3>
                <div className="article-cont flex">
                    <div className="article flex">
                        <img src="" alt="" />
                        <h5>Cloud Security</h5>
                        <h2>Google: Ukraine targeted by 60% of Russian phishing attacks in 2023</h2>
                        <p>Google’s Threat Analysis Group (TAG) has been monitoring and disrupting Russian state-backed cyberattacks targeting Ukraine’s critical infrastructure in 2023.
                        </p>
                        <a href="https://www.bleepingcomputer.com/news/security/google-ukraine-targeted-by-60-percent-of-russian-phishing-attacks-in-2023/?&web_view=true" target='_blank'>Read More</a>
                    </div>
                    <div className="article flex">
                        <img src="" alt="" />
                        <h5>Cloud Security</h5>
                        <h2>Google: Ukraine targeted by 60% of Russian phishing attacks in 2023</h2>
                        <p>Google’s Threat Analysis Group (TAG) has been monitoring and disrupting Russian state-backed cyberattacks targeting Ukraine’s critical infrastructure in 2023.
                            Google reports that from January to March 2023, Ukraine received roughly 60% of the phishing attacks originating from Russia, making it the most prominent target.</p>
                        <a href="">Read More</a>
                    </div>
                    <div className="article flex">
                        <img src="" alt="" />
                        <h5>Cloud Security</h5>
                        <h2>Google: Ukraine targeted by 60% of Russian phishing attacks in 2023</h2>
                        <p>Google’s Threat Analysis Group (TAG) has been monitoring and disrupting Russian state-backed cyberattacks targeting Ukraine’s critical infrastructure in 2023.
                            Google reports that from January to March 2023, Ukraine received roughly 60% of the phishing attacks originating from Russia, making it the most prominent target.</p>
                        <a href="">Read More</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Articles