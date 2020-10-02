import React, { Component } from 'react';
import { Link } from "react-router-dom"
import "./about.css"
import "./home.css"
import Header from '../common/Header';
import HelpPhoto1 from "./images/Protsahan/protsahan15.jpg";
import HelpPhoto2 from "./images/Aayogya/aayogya_1.jpg";
import Footer from '../common/Footer';
import profile from "./images/profile.jpg";


class About extends Component {
    state = {}
    render() {
        return (
            <div>
                <Header />
                <div className="about-main-container">
                    <div className="above-blur">
                        <div className="rainbow rainbow_text_animated heading-1 ">WELCOME TO NANDI SEWA SANSTHAN</div>
                        <Link className="btn white-btn f-right" to="/volunteers">Become A Volunteer</Link>
                    </div>
                </div>
                <div className="bkw">
                    <div class="service-area section-padding30">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-xl-6 col-lg-7 col-md-10 col-sm-10">
                                    {/* <!-- Section Tittle --> */}
                                    <div class="section-tittle text-center mb-80">
                                        <span>What we are doing</span>
                                        <h2>We Are In A Mission To Help The Helpless</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-4 col-md-6 col-sm-6">
                                    <Link to="/nandisamarth">
                                        <div class="single-cat text-center mb-50">
                                            <div class="cat-icon">
                                                <span class="flaticon-null-1"></span>
                                            </div>
                                            <div class="cat-cap">
                                                <h5><Link >Nandi Samarth</Link></h5>
                                                <p>To Provide easy loans to poor vendors so as to start their livelihood and small business.</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6">
                                    <Link to="/protsahan">
                                        <div class="single-cat active text-center mb-50">
                                            <div class="cat-icon">
                                                <span class="flaticon-null-1"></span>
                                            </div>
                                            <div class="cat-cap">
                                                <h5><Link >Protsahan</Link></h5>
                                                <p>It is an initiative to encourage bright young minds and competitive students to set standards for others in the society.</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6">
                                    <Link to="/shagun">
                                        <div class="single-cat text-center mb-50">
                                            <div class="cat-icon">
                                                <span class="flaticon-null-1"></span>
                                            </div>
                                            <div class="cat-cap">
                                                <h5><Link >Shagun</Link></h5>
                                                <p>Support On the occasion of marriage.</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-4 col-md-6 col-sm-6">
                                    <Link to="/samarpan">
                                        <div class="single-cat text-center mb-50">
                                            <div class="cat-icon">
                                                <span class="flaticon-null-1"></span>
                                            </div>
                                            <div class="cat-cap">
                                                <h5><Link >Samarpan</Link></h5>
                                                <p>Anonymous donation during visit of shrine, temples or religious rituals.</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6">
                                    <Link to="/sanskritisahyog">
                                        <div class="single-cat text-center mb-50">
                                            <div class="cat-icon">
                                                <span class="flaticon-null-1"></span>
                                            </div>
                                            <div class="cat-cap">
                                                <h5><Link >SanskritiSahyog</Link></h5>
                                                <p>For a better indian society organize and take part in such organization of cultural promotion and tradition.</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6">
                                    <Link to="/aayogya">
                                        <div class="single-cat text-center mb-50">
                                            <div class="cat-icon">
                                                <span class="flaticon-null-1"></span>
                                            </div>
                                            <div class="cat-cap">
                                                <h5><Link>Aayogya</Link></h5>
                                                <p>Helping society for the healthy life and supporting them for medical treatment.</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section class="about-low-area section-padding2">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 col-md-10">
                                    <div class="about-caption mb-50">
                                        {/* <!-- Section Tittle --> */}
                                        <div className="section-tittle mb-35">
                                            {/* <span>About our foundetion</span> */}
                                            <h2>About Us</h2>
                                        </div>
                                        <p className=" parra">Founded in 2019 under the society registration act 21, 1860 ( Reg No. ALL/02344/2019-2020) with
                                        the initiative of Shri Nand Gopal Gupta Nandi and Smt.
                        Abhilasha Gupta Nandi in the city Prayagraj .</p>
                                        <p className=" parra">Both are active in social welfare and public philanthropy since last 15 years. Apart
                                        from their political portfolio and government duties
                             they have assumed social service and charity as routine life soon after marriage.</p>
                                        <p className=" parra">“Nandi”; a popular couple in the politics of Uttar Pradesh for their welfare activities and highly public engagements in daily life,
                        had decided to segregate welfare activities from politics and make it a complete vision for the rest part of the life. </p>
                                        <p className=" parra">Nandi Sewa Sansthan (NSS) is founded to fulfill that dream of Nandi family and empower the society for a healthy and happy life. </p>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    {/* <!-- about-img --> */}
                                    <div class="about-img ">
                                        <div class="about-font-img d-none d-lg-block help-photo-container">
                                            <img src={HelpPhoto1} alt="" className="help-photo-1" />
                                        </div>
                                        <div class="about-back-img help-photo-container">
                                            {/* <img src="assets/img/gallery/about1.png" alt="" /> */}
                                            <img src={HelpPhoto2} alt="" className="help-photo-1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="testimonial-area testimonial-padding">
                        <div className="container">
                            {/* <!-- Testimonial contents --> */}
                            <div className="row d-flex justify-content-center">
                                <div className="col-xl-8 col-lg-8 col-md-10">
                                    <div className="h1-testimonial-active dot-style">
                                        {/* <!-- Single Testimonial --> */}
                                        <div className="single-testimonial text-center">
                                            <div className="testimonial-caption ">
                                                {/* <!-- founder --> */}
                                                <div className="testimonial-founder">
                                                    <div className="founder-img mb-40">
                                                        <img className="President-img" src={profile} alt="" />
                                                        <span>ABHILASHA  NANDI</span>
                                                        <p>PRESIDENT</p>
                                                    </div>
                                                </div>
                                                <div className="testimonial-top-cap">
                                                    <p>“I am at an age where I just want to be fit and healthy our bodies are our responsibility! So start caring for your body and it will care for you. Eat clean it will care for you and workout hard.”</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default About;