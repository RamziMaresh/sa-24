"use client";
import * as React from "react";
import SafraLayout from "../layouts/SafraLayout";
import Link from "next/link";
//
import Banner from "../components/banner/Banner";

const Index = () => {

  return (
    <SafraLayout>
      {/* Hero area start */}
      <section
        className="hero-area bgs-cover rpy-200 overlay"
      >
        <Banner />
      </section>
      {/* Hero area End */}

      {/* HeaderStart pt-120*/}
      <section
        className="tooltip-area bgs-cover rel pt-20 rpt-40"

      >
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xl-9 col-lg-11 mb-40 pt-40 rmb-80 text-center"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title pb-40">
                <h5 className="pb-20">
                  Safra, A world Class Hydrocarbon Producer
                </h5>
                <p>

                Since 1990 SAFRA is a manufacturer of hydrocarbon solvents having a fully automated refinery located at
                  Yanbu Industrial City on the west coast of Saudi Arabia, and corporate office at Jeddah.
                  The company serves industries of paints,adhesives, insecticides & pesticides, thinner, alkyd resins,
                  industrial cleaning, maintenance solvents, spot removing, wood protection, varnishes, construction chemicals,
                  oil field chemicals, oil drilling fluid and Bitumen based products.
                </p>
              </div>

              <Link href="about" className="theme-btn">
                Read More <i className="far fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Header Area End */}


      
      {/* Banner Area 02 start 
      <section className="solutions-area pb-20 rpb-20 pt-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6 col-sm-10">
              <div
                className="fancy-box"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/fancy-box/fancy-box7.jpg"
                    alt="Fancy Box"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-10">
              <div
                className="fancy-box"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/fancy-box/fancy-box9.jpg
                    "
                    alt="Safra-images."
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-10">
              <div
                className="fancy-box"
                data-aos="fade-up"
                data-aos-delay={400}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/fancy-box/fancy-box8.jpg"
                    alt="Fancy Box"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>*/}
      {/* Banner Area 02 End */}


      {/*Business Philosophy Area Start
      <section className="services-box-area pb-100 pt-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-10">
              <div
                className="section-title text-center mb-55"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h4>Safra Business Philosophy</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div
                className="iconic-box style-eight"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <i className="flaticon-goal" />
                </div>
                <hr />
                <div className="content">
                  <p>
                    Proactively deal with all our partners with confidence and pride in a spirit of mutual respect,
                    trust and openness maintaining highest standards of integrity.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="iconic-box style-eight"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <i className="flaticon-idea" />
                </div>
                <hr />
                <div className="content">
                  Introduce innovative quality products and services at competitive cost leading to added economic benefits to all the stakeholders.
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="iconic-box style-eight"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <i className="flaticon-technology-1" />
                </div>
                <hr />
                <div className="content">
                  <p>
                    Improve customer focus through better understanding and anticipating of the priorities
                    of existing and emerging customers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="iconic-box style-eight"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <i className="flaticon-efficiency" />
                </div>
                <hr />
                <div className="content">
                  <p>
                    Serve our customers with accuracy, speed, flexibility, efficiency and effectiveness-based on agreed priorities.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="iconic-box style-eight"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <i className="flaticon-security" />
                </div>
                <hr />
                <div className="content">
                  <p>Think of safety and act safely at all the times in all our endeavors.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="iconic-box style-eight"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <i className="flaticon-data" />
                </div>
                <hr />
                <div className="content">
                  <p>
                    Be responsible and active corporate player respecting communities and environments in which we operate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
       */}
      {/* Business Philosophy Area End */}
      

      {/* 

      <section className="data-analytics-area pt-10 rpt-20 pb-10 rpb-20">
        <div className="container">
          <div className="row gap-110 align-items-center">
            <div className="col-lg-6">
              <div
                className="about-content mt-40 rmb-20"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title-sus mb-30">
                  <h3>CEO Message</h3>
                <p>
                People and culture are the biggest assets in Safra, which we continuously cherish and develop to accomplish 
                our objective of highest levels of customer satisfaction. Through the history of times, we have experienced that 
                the success of us and that of you as our partner, lies in the applied transparency, continuous product development 
                and efficient process implementation, on which our business approach rests. We are committed to 
                meet variety of customer requirements in the area of industrial chemicals & solvents, consumer products and related services.

                <br />
                Also, to meet the growing needs of industrial & decorative paints, home care products, 
                agricultural pesticides and other end-user products, we are dedicated to expand our production capabilities, 
                which will further support these industrial sectors with continuous and reliable supply of their raw material requirements. 
                <br />
                Without any compromise on the environmental health, we apply highest care to the quality of products that we produce, 
                together with meeting our business commitments with accuracy and on-time. We take pride in acknowledging our
                 contribution to the Saudi economy and society by producing & supplying industrial raw material for growth of 
                 local industry and by training and developing Saudi youth in various fields of business & management, respectively. 
                 We at Safra, believe in empowering and rewarding our intellectual capital and providing a motivating work environment 
                 within the guidelines of Islamic ethics and culture.
                </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="management-images float-lg-end "
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  className="rounded-0"
                  src="assets/images/about/sustainability-1.svg"
                  alt="sustainability-1"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      */}
      {/* SustainabilityArea End */}


      {/* Contact Area Start */}
      <section
        className="cta-area bgs-cover py-130 rpy-100"
        style={{ backgroundImage: "url(assets/images/backgrounds/cta.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-6 col-lg-8">
              <div
                className="cta-content text-white rmb-35"
                data-aos="fade-left"
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="section-title mb-40">
                  <span className="subtitle d-block mb-10">
                    Safra Team
                  </span>
                  <h3>We Are Ready To Serve You <br />And Answer Your Inquiries !</h3>
                </div>
                <Link legacyBehavior href="/contact">
                  <a className="theme-btn">
                    Contact Us <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="cta-btn text-lg-center text-start ps-lg-0 ps-2"
                data-aos="zoom-in-right"
                data-aos-duration={1000}
              >
                <a
                  href="mailto:info@safraco.com"
                  className="mfp-iframe video-play"
                >
                  <i className="fas fa-envelope" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact Area End */}



      {/* Products Area Start */}
      <section
        className="tooltip-area-two bgs-cover rel pt-100 rpt-100"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xl-9 col-lg-11 rmb-80 text-center"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title">
                <h4 className="pb-40">
                  Our Products Are Meeting Customers Needs From Industrial Chemicals To
                  Consumers Products And Services
                </h4>
              </div>
              <Link href="products" className="theme-btn">
                Read More <i className="far fa-arrow-right" />
              </Link>
            </div>
            <img src="/assets/images/backgrounds/packaged.svg" alt="chemplex-Safra" />

          </div>
        </div>
      </section>
      {/* Products Area End */}


    </SafraLayout>
  );
};


export default Index;
