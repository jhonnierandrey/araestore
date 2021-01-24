import React from 'react';

function Banner() {
    return(
        <section id="banner">
            <div className="inner">
                <h2 className="live-color-promo">LIVE<span>COLOR</span></h2>
                <p>COLLECTION</p>
                {/* <img src="logo512.png" width="150" alt="Modas Emilse - Logo"/> */}
                <ul className="actions special">
                    <li><a href="#one" className="button large scrolly">Learn More</a></li>
                </ul>
            </div>
        </section>
    )
}

export default Banner