import React from 'react'
import "../CSS/Navbar.css"

export default function
    () {
    const handleNavClick = () => {
        const toggleButton = document.getElementById('menu-toggle-btn')
        const navLinks = document.getElementById('navbar-links')
        navLinks.classList.toggle('active')
    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class=" navbar-content container-fluid">
                    <a class="navbar-brand" href="/">ScamShield</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">About</a>
                            </li>
                            
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Services</a>
                            </li>
                            
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Articles</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
{/* 
            <nav>
                <div class="container main-nav flex">
                    <a href="" class="company-logo">
                        <img src="assets/asset 1.png" alt="company logo"/>
                    </a>
                    <div class="nav-links" id="navbar-links">
                        <ul class="flex">
                            <li><a href="" class="hover-links">Products</a></li>
                            <li><a href="" class="hover-links">Customers</a></li>
                            <li><a href="" class="hover-links">Pricing</a></li>
                            <li><a href="" class="hover-links">Resources</a></li>
                            <li><a href="" class="hover-links secondary-button">Signin</a></li>
                            <li><a href="" class="hover-links primary-button">Signup</a></li>
                        </ul>
                    </div>
                    <button href="" class="nav-toggle hover-links " id="menu-toggle-btn" onClick={handleNavClick}>Hamburger<i class="fa-solid fa-bars"></i></button>
                </div>
            </nav> */}
        </div>
    )
}
