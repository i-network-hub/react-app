import React from 'react';
import ReadMoreButton from './ReadMoreButton';

class Why extends React.Component {
    render() {
        return (
            <div>
                <div className="common_style">

                    {/* <!-- why section --> */}
                    <section className="why_section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="why_img-container">
                                        <img src="images/why.png" alt=""/>
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


                        {/* <!-- end why section --> */}

                </div>


                    {/* <!-- info section --> */}
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
                                                    <input type="email" placeholder="Enter your email"/>
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
                                                <img src="images/fb.png" alt=""/>
                                            </a>
                                                <a href="">
                                                    <img src="images/twitter.png" alt=""/>
                                                </a>
                                                    <a href="">
                                                        <img src="images/linkedin.png" alt=""/>
                                                    </a>
                                                        <a href="">
                                                            <img src="images/instagram.png" alt=""/>
                                                        </a>
                                        </div>
                                    </div>
                                </div>
                            </section>
            </div>
        );
    }
}

export default Why;