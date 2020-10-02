import React, { Component } from 'react';
import { Link } from "react-router-dom"
import Header from '../common/Header';
import "./home.css";
import HelpPhoto1 from "./images/Protsahan/protsahan15.jpg";
import HelpPhoto2 from "./images/Aayogya/aayogya_1.jpg";
import HelpPhoto3 from "./images/Aayogya/aayogya_2.jpg";
import HelpPhoto4 from "./images/Aayogya/aayogya_3.jpg";
import DonationPhoto2 from "./images/Protsahan/protsahan16.jpg";
import DonationPhoto3 from "./images/Protsahan/protsahan17.jpg";
import DonationPhoto4 from "./images/Protsahan/protsahan18.jpg";
import profile from "./images/profile.jpg";
import Footer from '../common/Footer';

class Home extends Component {
  state = {}
  render() {
    return (
      <div>
        <Header />
        <main>
          <div className="slider-area">
            <div className="slider-active blur_content">
              <div className="single-slider slider-height d-flex align-items-center">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10">
                      <div className="hero__caption">
                        <h1 className="home_Vision" data-animation="fadeInUp" data-delay=".6s">Vision and Mission of NSS</h1>
                        <p className="home_Para" data-animation="fadeInUp" data-delay=".8s" >
                          To empower the economically challenged and underprivileged workforce through employment, business and livelihood.
                        </p>
                        <p className="home_Para" data-animation="fadeInUp" data-delay=".8s" >
                          Other charity and social work to bring parity and happiness in the society and community regardless of their caste and religion.
                        </p>
                        <p className="home_Para" data-animation="fadeInUp" data-delay=".8s" >
                          Identify, nurture and promote scholars and bright student of the society. Help them to achieve their academic excellence through best education and institution.
                        </p>
                        <div className="hero__btn">
                          <Link className="btn hero-btn mb-10" data-animation="fadeInLeft" data-delay=".8s">Donate</Link>
                          <Link className="cal-btn ml-15" data-animation="fadeInRight" data-delay="1.0s">
                            <i className="flaticon-null"></i>
                            <p className="text_color_white">+91 1234567890</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--? Services Area Start --> */}
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
          {/* <!-- Services Area End --> */}
          {/* <!--? About Law Start--> */}
          <section class="about-low-area section-padding2">
            <div class="container">
              <div class="row">
                <div class="col-lg-6 col-md-10">
                  <div class="about-caption mb-50">
                    {/* <!-- Section Tittle --> */}
                    <div className="section-tittle mb-35">
                      <span>About our foundetion</span>
                      <h2>We Are In A Mission To  Help Helpless</h2>
                    </div>
                    <p className=" parra">Lorem ipsum dolor sit amet, consectetur adipisicing elit,mod tempor incididunt ut labore et dolore magna aliqua. Utnixm, quis nostrud exercitation ullamc.</p>
                    <p className=" parra">Lorem ipvsum dolor sit amext, consectetur adipisicing elit, smod tempor incididunt ut labore et dolore.</p>
                  </div>
                  <Link to="/about" className="btn">About US</Link>
                </div>
                <div class="col-lg-6 col-md-12">
                  {/* <!-- about-img --> */}
                  <div class="about-img ">
                    {/* <div class="about-font-img d-none d-lg-block help-photo-container">
                      <img src={HelpPhoto1} alt="" className="help-photo-1"/>
                    </div> */}
                    <div class="about-back-img help-photo-container">
                      {/* <img src="assets/img/gallery/about1.png" alt="" /> */}
                      <img src={HelpPhoto1} alt="" className="help-photo-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- About Law End--> */}
          {/* <!-- Our Cases Start --> */}
          <div class="our-cases-area section-padding30">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-xl-6 col-lg-7 col-md-10 col-sm-10">
                  {/* <!-- Section Tittle --> */}
                  <div class="section-tittle text-center mb-80">
                    <span>Our Cases you can see</span>
                    <h2>We are helping people... </h2>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="single-cases mb-40">
                    <div class="cases-img">
                      <img src={HelpPhoto2} alt="" />
                    </div>
                    <div class="cases-caption">
                      <h3><Link>It is an initiative to encourage bright young minds and competitive students to set standards for others in the society.</Link></h3>
                      {/* <!-- Progress Bar --> */}
                      <div class="single-skill mb-15">
                        <div class="bar-progress">
                          <div id="bar1" class="barfiller">
                            <div class="tipWrap">
                              <span class="tip"></span>
                            </div>
                            <span class="fill" data-percentage="70"></span>
                          </div>
                        </div>
                      </div>
                      {/* <!-- / progress --> */}
                      {/* <div class="prices d-flex justify-content-between">
                        <p>Raised:<span> $20,000</span></p>
                        <p>Goal:<span> $35,000</span></p>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="single-cases mb-40">
                    <div class="cases-img">
                      <img src={HelpPhoto3} alt="" />
                    </div>
                    <div class="cases-caption">
                      <h3><Link>It is an initiative to encourage bright young minds and competitive students to set standards for others in the society.</Link></h3>
                      {/* <!-- Progress Bar --> */}
                      <div class="single-skill mb-15">
                        <div class="bar-progress">
                          <div id="bar2" class="barfiller">
                            <div class="tipWrap">
                              <span class="tip"></span>
                            </div>
                            <span class="fill" data-percentage="25"></span>
                          </div>
                        </div>
                      </div>
                      {/* <!-- / progress --> */}
                      {/* <div class="prices d-flex justify-content-between">
                        <p>Raised:<span> $20,000</span></p>
                        <p>Goal:<span> $35,000</span></p>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="single-cases mb-40">
                    <div class="cases-img">
                      <img src={HelpPhoto4} alt="" />
                    </div>
                    <div class="cases-caption">
                      <h3><Link>It is an initiative to encourage bright young minds and competitive students to set standards for others in the society.</Link></h3>
                      {/* <!-- Progress Bar --> */}
                      <div class="single-skill mb-15">
                        <div class="bar-progress">
                          <div id="bar3" class="barfiller">
                            <div class="tipWrap">
                              <span class="tip"></span>
                            </div>
                            <span class="fill" data-percentage="50"></span>
                          </div>
                        </div>
                      </div>
                      {/* <!-- / progress --> */}
                      {/* <div class="prices d-flex justify-content-between">
                        <p>Raised:<span> $20,000</span></p>
                        <p>Goal:<span> $35,000</span></p>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Our Cases End -->
    <!-- Featured_job_start --> */}
          <section class="featured-job-area section-padding30 section-bg2" data-background="assets/img/gallery/section_bg03.png">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-xl-7 col-lg-9 col-md-10 col-sm-12">
                  {/* <!-- Section Tittle --> */}
                  <div class="section-tittle text-center mb-80">
                    <span>What we are doing</span>
                    <h2>We arrange many social events for charity donations</h2>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-9 col-md-12">
                  {/* <!-- single-job-content --> */}
                  <div className="single-job-items mb-30">
                    <div className="job-items">
                      <div className="company-img">
                        <Link><img className="donation-img" src={DonationPhoto2} alt="" /></Link>
                      </div>
                      <div className="job-tittle">
                        <Link><h4>Donation is hope</h4></Link>
                        <ul>
                          <li><i className="far fa-clock"></i>8:30 - 9:30am</li>
                          <li><i className="fas fa-sort-amount-down"></i>18.01.2021</li>
                          <li><i className="fas fa-map-marker-alt"></i>Delhi, India</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9 col-md-12">
                  {/* <!-- single-job-content --> */}
                  <div className="single-job-items mb-30">
                    <div className="job-items">
                      <div className="company-img">
                        <Link><img className="donation-img" src={DonationPhoto3} alt="" /></Link>
                      </div>
                      <div className="job-tittle">
                        <Link><h4>A hand for poor people</h4></Link>
                        <ul>
                          <li><i className="far fa-clock"></i>8:30 - 9:30am</li>
                          <li><i className="fas fa-sort-amount-down"></i>18.01.2021</li>
                          <li><i className="fas fa-map-marker-alt"></i>Panjab, India</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9 col-md-12">
                  {/* <!-- single-job-content --> */}
                  <div className="single-job-items mb-30">
                    <div className="job-items">
                      <div className="company-img">
                        <Link><img className="donation-img" src={DonationPhoto4} alt="" /></Link>
                      </div>
                      <div className="job-tittle">
                        <Link><h4>Help for former</h4></Link>
                        <ul>
                          <li><i className="far fa-clock"></i>8:30 - 9:30am</li>
                          <li><i className="fas fa-sort-amount-down"></i>18.01.2021</li>
                          <li><i className="fas fa-map-marker-alt"></i>Bihar, india</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Featured_job_end -->
    <!--? Team Ara Start --> */}
          <div className="team-area pt-160 pb-160">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-7 col-md-10 col-sm-10">
                  {/* <!-- Section Tittle --> */}
                  <div className="section-tittle section-tittle2 text-center mb-70">
                    <span>What we are doing</span>
                    <h2>Our team alwyes ready for help</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="single-team mb-30">
                    <div className="team-img">
                      <img src={profile} alt="" />
                      {/* <!-- Blog Social --> */}
                      <ul className="team-social">
                        <li><Link><i className="fab fa-facebook-f"></i></Link></li>
                        <li><Link><i className="fab fa-twitter"></i></Link></li>
                        <li><Link><i className="fas fa-globe"></i></Link></li>
                      </ul>
                    </div>
                    <div className="team-caption">
                      <h3><Link>ABHILASHA  NANDI</Link></h3>
                      <p>PRESIDENT</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="single-team mb-30">
                    <div className="team-img">
                      <img src={profile} alt="" />
                      {/* <!-- Blog Social --> */}
                      <ul className="team-social">
                        <li><Link><i className="fab fa-facebook-f"></i></Link></li>
                        <li><Link><i className="fab fa-twitter"></i></Link></li>
                        <li><Link><i className="fas fa-globe"></i></Link></li>
                      </ul>
                    </div>
                    <div className="team-caption">
                      <h3><Link>SUBHASH BAJPAYEE</Link></h3>
                      <p>PRESIDENT</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="single-team mb-30">
                    <div className="team-img">
                      <img src={profile} alt="" />
                      {/* <!-- Blog Social --> */}
                      <ul className="team-social">
                        <li><Link><i className="fab fa-facebook-f"></i></Link></li>
                        <li><Link><i className="fab fa-twitter"></i></Link></li>
                        <li><Link><i className="fas fa-globe"></i></Link></li>
                      </ul>
                    </div>
                    <div className="team-caption">
                      <h3><Link>ABHISHEK GUPTA</Link></h3>
                      <p>SECRETARY</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="single-team mb-30">
                    <div className="team-img">
                      <img src={profile} alt="" />
                      {/* <!-- Blog Social --> */}
                      <ul className="team-social">
                        <li><Link><i className="fab fa-facebook-f"></i></Link></li>
                        <li><Link><i className="fab fa-twitter"></i></Link></li>
                        <li><Link><i className="fas fa-globe"></i></Link></li>
                      </ul>
                    </div>
                    <div className="team-caption">
                      <h3><Link>RAVIKANT GUPTA</Link></h3>
                      <p>TREASURER</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Team Ara End -->
    <!-- Want To work --> */}
          <section className="wantToWork-area ">
            <div className="container">
              <div className="wants-wrapper w-padding2 become-volunteer-bg  section-bg" data-background="assets/img/gallery/section_bg01.png">
                <div className="row align-items-center justify-content-between">
                  <div className="col-xl-5 col-lg-9 col-md-8">
                    <div className="wantToWork-caption wantToWork-caption2">
                      <h2>Lets Chenge The World With Humanity</h2>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4">
                    <Link to="/volunteers" className="btn white-btn f-right sm-left">Become A Volunteer</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Want To work End --> */}
          {/* <!--? Testimonial Start --> */}
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
          {/* <!-- Testimonial End --> */}
          {/* <!--? Blog Area Start --> */}
          {/* <section className="home-blog-area section-padding30">
            <div className="container">
              
              <div className="row justify-content-center">
                <div className="col-xl-5 col-lg-6 col-md-9 col-sm-10">
                  <div className="section-tittle text-center mb-90">
                    <span>Our recent blog</span>
                    <h2>Latest News from our recent blog</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="home-blog-single mb-30">
                    <div className="blog-img-cap">
                      <div className="blog-img">
                        <img src="assets/img/gallery/home-blog1.png" alt="" />
                       
                        <div className="blog-date text-center">
                          <span>24</span>
                          <p>Now</p>
                        </div>
                      </div>
                      <div className="blog-cap">
                        <p>Creative derector</p>
                        <h3><Link >Footprints in Time is perfect House in Kurashiki</Link></h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="home-blog-single mb-30">
                    <div className="blog-img-cap">
                      <div className="blog-img">
                        <img src="assets/img/gallery/home-blog2.png" alt="" />
                        
                        <div className="blog-date text-center">
                          <span>24</span>
                          <p>Now</p>
                        </div>
                      </div>
                      <div className="blog-cap">
                        <p>Creative derector</p>
                        <h3><Link >Footprints in Time is perfect House in Kurashiki</Link></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/* <!-- Blog Area End --> */}
          {/* <!--? Count Down Start --> */}
          {/* <div className="count-down-area pt-25 section-bg" data-background="assets/img/gallery/section_bg02.png">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-md-12">
                  <div className="count-down-wrapper" >
                    <div className="row justify-content-between">
                      <div className="col-lg-3 col-md-6 col-sm-6">
                        
                        <div className="single-counter text-center">
                          <span className="counter color-green">6,200</span>
                          <span className="plus">+</span>
                          <p className="color-green">Donation</p>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-6">
                        
                        <div className="single-counter text-center">
                          <span className="counter color-green">80</span>
                          <span className="plus">+</span>
                          <p className="color-green">Fund Raised</p>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-6">
                        
                        <div className="single-counter text-center">
                          <span className="counter color-green">256</span>
                          <span className="plus">+</span>
                          <p className="color-green">Donation</p>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-6">
                        
                        <div className="single-counter text-center">
                          <span className="counter color-green">256</span>
                          <span className="plus">+</span>
                          <p className="color-green">Donation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <!-- Count Down End --> */}
        </main>
        <Footer />

        {/* <!-- Scroll Up --> */}
        <div id="back-top" >
          <Link title="Go to Top"> <i className="fas fa-level-up-alt"></i></Link>
        </div>
      </div>
    );
  }
}

export default Home;