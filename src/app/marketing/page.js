"use client";
import PageBanner from "../../components/PageBanner";
import SafraLayout from "../../layouts/SafraLayout";
//

import { sliderProps } from "../../utility/sliderProps";
import Slider from "react-slick";

const page = () => {
  return (
    <SafraLayout>
      <PageBanner pageName={"Media"} />
      {/* News media section one start  */}
      <section className="blog-details-area py-0 rpy-100">
        <div className="container">
          <div className="row">

            <div className="blog-details-content pt-40  pb-40">
              <div className="blog-details-content ">
                <h4 className="pt-20 ">Awards And Certifications</h4>
                <div className="pb-20">
                  <img src="assets/images/logos/BarBot.jpg" alt="safra-line" width={300} />
                </div>
                <p>
                  Safra maintains a Customer Satisfaction Index to have a formal report of customer’s
                  perceptions about our performance and know more about the concerns and
                  expectations of our esteemed customers.
                  Safra “CSI” gives our customers an opportunity to evaluate our performance and make
                  suggestions. The feedback helps us to respond effectively in the direction of improving
                  customer services and ensuring higher satisfaction.
                </p>



              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Testimonials Area Start */}
      <section className="testimonials-area bgc-primary py-50 rpy-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 col-md-11">
              <div
                className="section-title text-white text-center mb-1"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h3>Safra Awards </h3>
              </div>
            </div>
          </div>
          <Slider
            {...sliderProps.testiSliderSix}
            className="testi-slider-six text-white"
            data-aos="fade-up"
            data-aos-delay={50}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div>
              <div className="image">
                <img
                  src="assets/images/about/about-seven-two1.png"
                  alt="Safra-Best-Industry"
                />
              </div>
              <h5 className="text-center">Best Industry In the Chemical Industries 1414/1993</h5>
            </div>
            <div>
              <div className="image">
                <img
                  src="assets/images/about/about-seven-two1.png"
                  alt="Safra-Obtained-ISO"
                />
              </div>
              <h5 className="text-center">Safra Obtained ISO 9200 Certification</h5>
            </div>
          </Slider>
        </div>
        <div className="testimonials-eight-shapes">
          <div className="shape one">
            <img
              src="assets/images/shapes/testimonial-eight1.png"
              alt="Shape"
            />
          </div>
          <div className="shape two">
            <img
              src="assets/images/shapes/testimonial-eight2.png"
              alt="Shape"
            />
          </div>
        </div>
      </section>
      {/* Testimonials Area End 


      <section className="hero-area-six pt-40 rpt-20 pb-0 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-11">
              <hr />
            </div>
          </div>
        </div>
      </section>
*/}
    </SafraLayout>
  );
};
export default page;
