import React from 'react';

function Footer() {
    return(
        <footer id="footer">
            <ul className="icons">
                <li><a href="/" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="/" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                <li><a href="/" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="/" className="icon brands fa-dribbble"><span className="label">Dribbble</span></a></li>
                <li><a href="/" className="icon solid fa-envelope"><span className="label">Envelope</span></a></li>
            </ul>
            <ul className="menu">
                <li><a href="/">FAQ</a></li>
                <li><a href="/">Terms of Use</a></li>
                <li><a href="/">Privacy</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
            <span className="copyright">
                &copy; 2021 Modas Emilse. All rights reserved.
            </span>
        </footer>
    )
}

export default Footer;