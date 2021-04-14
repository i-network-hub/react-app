import React from 'react';
import ReadMoreButton from './ReadMoreButton';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Router>
            <div className="top_container">
                <section className="hero_section ">
                    <div className="hero-container container">
                        <div className="hero_detail-box">
                            <h1>
                                Best way
                                to fund
                                your study
                                abroad
                            </h1>
                            <p>
                                ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua. Ut enim ad minim veniam
                            </p>
                            <div className="hero_btn-continer">
                                <a href="" className="call_to-btn btn_white-border">
                                    Read More
                                </a>
                            </div>
                        </div>
                        <div className="hero_img-container">
                            <div>
                                <img src="images/hero.png" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        <div className="common_style">


            <section className="about_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about_img-container">
                                <img src="images/about.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about_detail-box">
                                <h3>
                                    About our School
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                </p>
                                
                                    <ReadMoreButton></ReadMoreButton>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <!-- end about section -->

    <!-- admission section --> */}
            <section className="admission_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="admission_detail-box">
                                <h3>
                                    Admission open
              </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              </p>
                                <ReadMoreButton></ReadMoreButton>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="admission_img-container">
                                <img src="images/admission.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* <!-- end admission section -->

    <!-- why section --> */}
            <section className="why_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="why_img-container">
                                <img src="images/why.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="why_detail-box">
                                <h3>
                                    Why learn on INH School
              </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              </p>
                                <ReadMoreButton></ReadMoreButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <!-- end why section -->

    <!-- determine section --> */}
            <section className="determine_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="determine_detail-box">
                                <h3>
                                    Datermine the right for you
              </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              </p>
                                <ReadMoreButton></ReadMoreButton>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="determine_img-container">
                                <img src="images/determine.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <!-- end determine section --> */}

        </div>


        {/* <!-- client section --> */ }
        <section className="client_section layout_padding">
            <h2 className="">
                Testimonial
    </h2>
            <div className="container">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="client_img-box">
                                        <img src="images/client.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="client_detail-box">
                                        <h5>
                                            Sauhard Mishra
                          </h5>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                          </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="client_img-box">
                                        <img src="images/client.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="client_detail-box">
                                        <h5>
                                            Sauhard Mishra
                          </h5>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                          </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="client_img-box">
                                        <img src="images/client.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="client_detail-box">
                                        <h5>
                                            Sauhard Mishra
                          </h5>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                          </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>


        {/* <!-- end client section -->


    <!-- contact section --> */}

        <section className="contact_section ">

            <div className="container">

                <div className="row">
                    <div className="col-md-6">
                        <div className="d-flex justify-content-center d-md-block">
                            <h2>
                                Contact Us
                </h2>
                        </div>
                        <form action="">
                            <div className="contact_form-container">
                                <div>
                                    <div>
                                        <input type="text" placeholder="Name" />
                                    </div>
                                    <div>
                                        <input type="email" placeholder="Email" />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Phone Number" />
                                    </div>
                                    <div className="mt-5">
                                        <input type="text" placeholder="Message" />
                                    </div>
                                    <div className="mt-5">
                                        <button type="submit">
                                            send
                      </button>
                                    </div>
                                </div>

                            </div>

                        </form>
                    </div>
                    <div className="col-md-6">
                        <div className="contact_img-box">
                            <img src="images/students.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- end contact section --> */ }
        <section className="info_section layout_padding-top">
            <div className="info_logo-box">
                <h2>
                    INH School
          </h2>
            </div>
            <div className="container layout_padding2">
                <div className="row">
                    <div className="col-md-3">
                        <h5>
                            About Us
                </h5>
                        <p>
                            INetwork Hub created this website as a portfolio for now.
               </p>
                    </div>
                    <div className="col-md-3">
                        <h5>
                            Extra co-curricular
                </h5>
                        <ul>
                            <li>
                                <a href="">
                                    Physical Games
                    </a>
                            </li>
                            <li>
                                <a href="">
                                    Smart Class
                   </a>
                            </li>
                            <li>
                                <a href="">
                                    Singing and Dancing
                    </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>
                            Contact Us
                </h5>
                        <p>
                            87/181, Raja S.C Mullick Road , Kolkata - 700047
                </p>
                    </div>
                    <div className="col-md-3">

                        <div className="subscribe_container">
                            <h5>
                                Newsletter
                  </h5>
                            <div className="form_container">
                                <form action="">
                                    <input type="email" placeholder="Enter your email" />
                                    <button type="submit">
                                        Subscribe
                      </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container">
                <div className="social_container">

                    <div className="social-box">
                        <a href="">
                            <img src="images/fb.png" alt="" />
                        </a>

                        <a href="">
                            <img src="images/twitter.png" alt="" />
                        </a>
                        <a href="">
                            <img src="images/linkedin.png" alt="" />
                        </a>
                        <a href="">
                            <img src="images/instagram.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
        </Router>
    </div >
    
        );
    }
}

export default Home;