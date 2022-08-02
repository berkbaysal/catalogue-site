import React from "react"
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons/faSquareFacebook"
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons/faSquareTwitter"
import { faSquareYoutube } from "@fortawesome/free-brands-svg-icons/faSquareYoutube"
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons/faSquareInstagram"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/img/logo.svg"

function Footer() {
    return (
        <footer className="ableton-style-footer">
            <div className="footer-cell footer-company-name">Ableton</div>
            <div className="footer-cell social-media">
                <ul className="social-media-list">
                    <li className="social-media-items"><a href="" className="social-media-link --arrow-link">Register Live of Push</a></li>
                    <li className="social-media-items"><a href="" className="social-media-link --arrow-link">About Ableton</a></li>
                    <li className="social-media-items"><a href="" className="social-media-link --arrow-link">Jobs</a></li>
                    <li className="social-media-icons">
                        <div className="social-media-icon-container">
                            <FontAwesomeIcon icon={faSquareFacebook} className="social-media-icon"/>
                            <FontAwesomeIcon icon={faSquareTwitter} className="social-media-icon"/>
                            <FontAwesomeIcon icon={faSquareYoutube} className="social-media-icon"/>
                            <FontAwesomeIcon icon={faSquareInstagram} className="social-media-icon"/>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="footer-cell education">
                <div className="footer-title">Education</div>
                <ul className="education-list">
                    <li className="education-items"><a href="#" className=" --arrow-link">Offers for students and teachers</a></li>
                    <li className="education-items"><a href="#" className=" --arrow-link">Ableton for the Classroom</a></li>
                    <li className="education-items"><a href="#" className=" --arrow-link">Ableton for Colleges and Universities</a></li>
                </ul>
            </div>
            <div className="footer-cell newsletter">
                <div className="footer-title">Sign up to our newsletter</div>
                <p className="footer-info">Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</p>
                <input className="newsletter-input" placeholder="Email Address" type="email"></input>
                <button className="newsletter-submit">Sign up</button>
            </div>
            <div className="footer-cell community">
                <div className="footer-title">Community</div>
                <ul className="education-list">
                    <li className="education-items"><a href="#" className=" --arrow-link">Find Ableton User Groups</a></li>
                    <li className="education-items"><a href="#" className=" --arrow-link">Find Certified Training</a></li>
                    <li className="education-items"><a href="#" className=" --arrow-link">Become a Certified Trainer</a></li>
                </ul>
            </div>
            <div className="footer-cell distributers">
                <div className="footer-title">Distributors</div>
                <ul className="education-list">
                    <li className="education-items"><a href="#" className=" --arrow-link">Find Distributors</a></li>
                    <li className="education-items"><a href="#" className=" --arrow-link">Try Push in-store</a></li>
                </ul>
            </div>
            <div className="footer-cell language-location">
                <div className="footer-title">Language and Location</div>
                <select className="language-select">
                    <option>English</option>
                    <option>German</option>
                </select>
                <select className="location-select">
                    <option>United Kingdom</option>
                    <option>Germany</option>
                    <option>France</option>
                    <option>Other</option>
                </select>
            </div>
            <div className="footer-cell footer-links">
                <ul className="footer-links-menu">
                    <li className="footer-links-item"><a href="">Contact Us</a></li>
                    <li className="footer-links-item"><a href="">Press Resources</a></li>
                    <li className="footer-links-item"><a href="">Legal Info</a></li>
                    <li className="footer-links-item"><a href="">Privacy Policy</a></li>
                    <li className="footer-links-item"><a href="">Cookie Settings</a></li>
                    <li className="footer-links-item"><a href="">Imprint</a></li>
                </ul>
            </div>
            <div className="footer-cell footer-slogan-logo">
                <div className="slogan-container">Made in Berlin</div>
                <Logo className="footer-logo"/>
            </div>
        </footer>
    );
}

export default Footer;