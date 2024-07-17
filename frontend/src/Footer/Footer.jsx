import React from 'react'
import './Footer.css'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id = "footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src = { assets.logo} alt = "" />
                <p> By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. From 2024 © Foodies Hub™ Ltd. All rights reserved.</p>
                <div className="footer-social-icons">
                    <img src = { assets.facebook_icon} alt = "" />
                    <img src = { assets.linkedin_icon} alt = "" />
                    <img src = { assets.twitter_icon} alt = "" />
                </div>

            </div>
            
            <div className="footer-content-center">
                <h2> COMPANY </h2>
                <ul>
                    <li> Home </li>
                    <li> About Us </li>
                    <li> Delivery </li>
                    <li> Privacy Policy </li>
                    <li> Terms & Conditions </li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2> GET IN TOUCH </h2>
                <ul>
                    <li> +91 9133313555 </li>
                    <li> contact@foodieshub.com </li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright"> 
            All copyrights are registered to Foodies Hub Company, the rightful owner of this website. 
            Any unauthorized use or reproduction of the content, images, or any other material from this site is strictly prohibited and will be subject to legal action. 
            Foodies Hub Company reserves all rights pertaining to the intellectual property and maintains stringent measures to protect its creative works and proprietary information.
        </p>
    </div>
  )
}

export default Footer
