import React from "react";



export default function Footer(){
    return(
        <div>
     <footer class="infetech-footer-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="footer-about">
                        <a href="#"><img src="assets/images/logo-no-background.png" alt="" /></a>
                        <p>We work with a passion of taking challenges and creating new ones in advertising sector.</p>
                        <ul>
                            {/* <li><a href="#"><i class="fab fa-fiverr"></i></a></li> */}
                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6">
                    <div class="footer-nav">
                        <h4 class="title">Links</h4>
                        <ul>
                            <li><a href="About">About us</a></li>
                            {/* <li><a href="#">Meet our Team</a></li> */}
                            {/* <li><a href="Services">Services</a></li> */}
                            <li><a href="Projects">Our Projects</a></li>
                            <li><a href="Contact">Contacts</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="footer-newsletter">
                        <h4 class="title">Newsletter</h4>
                        <p>Signup for our latest news & articles. We won’t give you spam mails.</p>
                        <form action="#">
                            <div class="input-box">
                                <input type="text" placeholder="Email Address" />
                                <button><i class="far fa-paper-plane"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="footer-info">
                        <h4 class="title">Contact</h4>
                        <ul>
                            <li><i class="fas fa-phone"></i><span>+ 94 ( 77 ) 959 7006 / +94 ( 76 ) 867 9313</span></li>
                            <li><i class="fas fa-envelope"></i><span>rediantsparktechnology@gmail.com</span></li>
                            <li><i class="fas fa-map-marker"></i><span>98/5 Artigala Mawatha, Piliyandala 10300</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <div class="footer-copyright text-center">
        <p>© All Copyright 2022 by <a href="mailto:radiantsparktechnology@gmail.com">Radiant Spark Technology</a> </p>
    </div>
        </div>
    );

}