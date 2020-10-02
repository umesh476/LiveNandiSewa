import React, { Component } from 'react';
import {Link} from "react-router-dom"
class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <footer>
          <div className="footer-wrapper section-bg2 footer-bg" data-background="assets/img/gallery/footer_bg.png">
            {/* <!-- Footer Top--> */}
            <div className="footer-area footer-padding">
              <div className="container">
                <div className="row d-flex justify-content-between">
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div className="single-footer-caption mb-50">
                      <div className="single-footer-caption mb-30">
                        <div className="footer-tittle">
                          {/* <div className="footer-logo mb-20">
                            <Link ><img src="assets/img/logo/logo2_footer.png" alt="" /></Link>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                    <div className="single-footer-caption mb-50">
                      <div className="footer-tittle">
                        <h4>Contact Info</h4>
                        <ul>
                          <li>
                            <p>Address :Your address goes here, your demo address.</p>
                          </li>
                          <li><Link>Phone : +8880 44338899</Link></li>
                          <li><Link>Email : info@colorlib.com</Link></li>
                        </ul>
                      </div>

                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                    <div className="single-footer-caption mb-50">
                      <div className="footer-tittle">
                        <h4>Important Link</h4>
                        <ul>
                          <li><Link> View Project</Link></li>
                          <li><Link>Contact Us</Link></li>
                          <li><Link>Testimonial</Link></li>
                          <li><Link>Proparties</Link></li>
                          <li><Link>Support</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                    <div className="single-footer-caption mb-50">
                      <div className="footer-tittle">
                        <h4>Newsletter</h4>
                        <div className="footer-pera footer-pera2">
                          <p>Heaven fruitful doesn't over lesser in days. Appear creeping.</p>
                        </div>
                        {/* <!-- Form --> */}
                        <div className="footer-form" >
                          <div id="mc_embed_signup">
                            <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                              method="get" className="subscribe_form relative mail_part">
                              <input type="email" name="email" id="newsletter-form-email" placeholder="Email Address"
                                className="placeholder hide-on-focus" onfocus="this.placeholder = ''"
                                onblur="this.placeholder = ' Email Address '" />
                              <div className="form-icon">
                                <button type="submit" name="submit" id="newsletter-submit"
                                  className="email_icon newsletter-submit button-contactForm"><img src="assets/img/gallery/form.png" alt="" /></button>
                              </div>
                              <div className="mt-10 info"></div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- footer-bottom --> */}
           
          </div>
        </footer>
         );
    }
}
 
export default Footer;