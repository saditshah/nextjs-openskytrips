import footercss from './footer.module.scss'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Footer() {
    useEffect(() => {
        Aos.init({
            duration: 1500
        });
    })
    return (
        <>
            <div className={footercss.footer}>
                <div className={footercss.footerinfo}>
                    <span data-aos="fade-up">Open Sky Trips</span>
                    <div data-aos="fade-up" className={footercss.socialicons}>
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="fab fa-facebook fa-1x" title="facebook"></a>
                        <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="fab fa-twitter fa-1x" title="twitter"></a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="fab fa-instagram fa-1x" title="instagram"></a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="fab fa-youtube fa-1x" title="youtube"></a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="fab fa-linkedin fa-1x" title="linkedin"></a>
                    </div>
                </div>

                <div className={footercss.rowfooter}>
                    <div data-aos="fade-up" className={footercss.footercols4}>
                        <h3>Our Tours</h3>
                        <div className={footercss.menutourscontainer}>
                            <ul id="menu-tours" className={footercss.footmenu}>
                                <li id="menu-item-972"
                                    className="menu-item menu-item-type-post_type menu-item-object-skt_tours menu-item-972">
                                    <a href="https://sktperfectdemo.com/demos/adventure/tour/mountain-climbing-tour/">Mountain Climbing
                                        Tour</a>
                                </li>
                                <li id="menu-item-970"
                                    className="menu-item menu-item-type-post_type menu-item-object-skt_tours menu-item-970">
                                    <a href="https://sktperfectdemo.com/demos/adventure/tour/mountain-biking-trip/">Mountain Biking Trip</a>
                                </li>
                                <li id="menu-item-974"
                                    className="menu-item menu-item-type-post_type menu-item-object-skt_tours menu-item-974">
                                    <a href="https://sktperfectdemo.com/demos/adventure/tour/mountain-hiking-tour/">Mountain Hiking Tour</a>
                                </li>
                                <li id="menu-item-973"
                                    className="menu-item menu-item-type-post_type menu-item-object-skt_tours menu-item-973">
                                    <a href="https://sktperfectdemo.com/demos/adventure/tour/wildlife-adventure/">Wildlife Adventure</a>
                                </li>
                                <li id="menu-item-971"
                                    className="menu-item menu-item-type-post_type menu-item-object-skt_tours menu-item-971">
                                    <a href="https://sktperfectdemo.com/demos/adventure/tour/polar-tour/">Polar Tour</a>
                                </li>
                                <li id="menu-item-975"
                                    className="menu-item menu-item-type-post_type menu-item-object-skt_tours menu-item-975">
                                    <a href="https://sktperfectdemo.com/demos/adventure/tour/yatch-sailing-tour/">Yatch Sailing Tour</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div data-aos="fade-up" className={footercss.footercols4}>
                        <h3>Quick Links</h3>
                        <div className={footercss.menufootercontainer}>
                            <ul id="menu-footer" className={footercss.footmenu}>
                                <li id="menu-item-51"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-10 current_page_item menu-item-51">
                                    <a href="https://sktperfectdemo.com/demos/adventure/" aria-current="page">Home</a>
                                </li>
                                <li id="menu-item-52" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-52"><a
                                    href="https://sktperfectdemo.com/demos/adventure/about/">About</a></li>
                                <li id="menu-item-62" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-62"><a
                                    href="https://sktperfectdemo.com/demos/adventure/tours/">Tours</a></li>
                                <li id="menu-item-60" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-60"><a
                                    href="https://sktperfectdemo.com/demos/adventure/destination/">Destination</a></li>
                                <li id="menu-item-56" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56"><a
                                    href="https://sktperfectdemo.com/demos/adventure/blog-right-sidebar/">News</a></li>
                                <li id="menu-item-58" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-58"><a
                                    href="https://sktperfectdemo.com/demos/adventure/contact-layout-1/">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div data-aos="fade-up" className={footercss.footercols4}>
                        <h3>Contact Info</h3>
                        <p >Ellahibagh <br />Hazratbal road, Buchpora <br />Srinagar-190020 </p>
                        <div className={footercss.spacecode} id="" style={{ height: "10px" }}></div>
                        <p style={{ marginBottom: "10px" }}>
                            <span style={{ marginRight: "20px" }}>Phone:</span> +91-9599961054</p>
                        <p style={{ marginBottom: "10px" }}>
                            <span style={{ marginRight: "21px" }}>E-mail:</span>Openskytrips@gmail.com</p>
                        <p style={{ marginBottom: "21px" }}>
                            <span style={{ marginRight: "11px" }}>Website:</span>https://openskytrips.com</p>
                    </div>
                </div>

                <div className={footercss.copyright}>
                    <span>© Copyright 2023 Openskytrips. All Rights Reserved</span>
                    <span>Design by MS Software Solutions</span>
                </div>

            </div>
        </>
    )
}