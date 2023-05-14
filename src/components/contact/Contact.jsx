import React, { useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';




export default function Contact(){
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_406t204', 'template_q7z3arq', form.current, 'JIoITWCRFErW3lGUM')
      .then((result) => {
          console.log(result.text);
        //   console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
    }
    return(
        <div>
    <section class="breadcrumb-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb-item">
                        <h2 class="title">Contact Us</h2>
                        {/* <nav aria-label="breadcrumb">   
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Contact</li>
                            </ol>
                        </nav> */}
                    </div>  
                </div>
            </div>
        </div>
    </section>

    <section class="infetech-contact-page-area pt-90 pb-120">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="section-title mb-35 mt-30">
                        <span>Contact With Us</span>
                        <h3 class="title">Feel Free to Get in Touch</h3>
                    </div>
                    <div class="conatct-info">
                        <div class="item">
                            <div class="icon">
                                <img src="assets/images/icon/phone-icon.png" alt="" />
                            </div>
                            <div class="content">
                                <span>Call Anytime</span>
                                
                                <h5 class="title"><a href="tel:+8898006802">+ 94 (77) 959 7006</a></h5>
                                <h5 class="title"><a href="tel:+8898006802">+ 94 (76) 867 9313</a></h5>
                                
                            </div>
                        </div>
                        <div class="item">
                            <div class="icon">
                                <img src="assets/images/icon/mail-icon.png" alt="" />
                            </div>
                            <div class="content">
                                <span>Send Email</span>
                                <h5 class="title"><a href="mailto:needhelp@company.com">rediantsparktechnology@gmail.com</a></h5>
                            </div>
                        </div>
                        <div class="item">
                            <div class="icon">
                                <img src="assets/images/icon/map-icon.png" alt="" />
                            </div>
                            <div class="content">
                                <span>Visit Now</span>
                                <h5 class="title">98/5 Artigala Mawatha, Piliyandala 10300</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="contact-form-page-box mt-30">
                        <form action="#" method="post" onSubmit={sendEmail} ref={form}>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="input-box">
                                        <input type="text" name='user_name' placeholder="Your Name" />
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="input-box">
                                        <input type="email" name='user_email' placeholder="Email Address" />
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="input-box">
                                        <input type="text" name='user_number' placeholder="Phone Number" />
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="input-box">
                                        <input type="text" name='from_name' placeholder="Subject" />
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="input-box">
                                        <textarea  id="#" cols="30" rows="10" name="message" placeholder="Write a Message"></textarea>
                                        <button type="submit" class="main-btn">Send a message</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="infetect-cta-area-home-2">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="cta-home-box">
                        <div class="content">
                            <span>Let’s get started</span>
                            <h3 class="title">World class IT solutions partner of choice</h3>
                        </div>
                        <div class="cta-btn">
                            <a class="main-btn" href="Contact">Contact Us</a>
                        </div>
                    </div>      
                </div>
            </div>
        </div>
    </div>

    <div class="infetech-map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15847.207316643586!2d79.9175183!3d6.7939509!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2e73724f9a5bafdd!2sRadiant%20Spark%20Technology!5e0!3m2!1sen!2slk!4v1669877216295!5m2!1sen!2slk" style={{border:0}} width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>


        </div>
    );

}