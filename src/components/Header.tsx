import React from 'react';

function Header(){
    return(
        <header id="header" className="alt ">
            <h1><a href="/"><span className="modas-title">Modas <span>Emilse</span></span></a></h1>
            <nav id="nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Store</a></li>
                    <li>
                        <a href="/"><i className="far fa-user-circle"></i> <span className="icon solid fa-angle-down"></span></a>
                        <ul>
                            <li><a href="/">Log In</a></li>
                            <li><a href="/">Register</a></li>
                            <li>
                                <a href="/">Administration</a>
                                <ul>
                                    <li><a href="/">My Account</a></li>
                                    <li><a href="/">Orders</a></li>
                                    <li><a href="/">Favourites</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="/"><i className="fas fa-shopping-cart"></i></a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;