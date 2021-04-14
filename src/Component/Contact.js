import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <div>
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
                                                <input type="text" placeholder="Name"/>
            </div>
                                                <div>
                                                    <input type="email" placeholder="Email"/>
            </div>
                                                    <div>
                                                        <input type="text" placeholder="Phone Number"/>
            </div>
                                                        <div className="mt-5">
                                                            <input type="text" placeholder="Message"/>
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
                                                    <img src="images/students.jpg" alt=""/>
      </div>
                                                </div>
                                            </div>
                                        </div>
</section>
                                    {/* <!-- end contact section --> */}
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

export default Contact;