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
        style={{
          backgroundImage: "url(assets/images/backgrounds/hero-bg-sit.svg)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xl-9 col-lg-11 mb-135 rmb-80 text-center"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title pt-40 pb-40">
                <h4 className="pb-20">
                  We Are A world Class Hydrocarbon Player With Viable Framework And Competitive Edge
                </h4>

                <p>
                  SAFRA Co. Ltd. is committed to Saudi Vision 2030 with ambitious drive and aspiration to contribute for building a broad-based economy
                  for a sustainable future.
                  SAFRA is a manufacturer and distributor of hydrocarbon solvents having a fully
                  automated refinery located at Yanbu Industrial City on the west coast of Saudi Arabia, and corporate office at Jeddah.
                  The company serves industries of paints,adhesives,
                  insecticides & pesticides, thinner, alkyd resins, industrial cleaning, maintenance
                  solvents, dry cleaning ...

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


      {/* Sustainability Area Start */}
      <section className="data-analytics-area pt-60 rpt-30 pb-90 rpb-60">
        <div className="container">
          <div className="row gap-110 align-items-center">
            <div className="col-lg-6">
              <div
                className="about-content mt-40 rmb-20"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h3>Safra Sustainability</h3>
                </div>
                <p>
                  Sustainability for SAFRA goes far beyond just climate protection as this objective will
                  responsibly be achieved by pursuing three dimensional levels; environmental, economic and social.
                  SAFRA sustainable growth will provide the basis for more
                  investments and value creation for stakeholders in both short and long term. The
                  company will totally be committed to achieve sustainable growth via its nurtured
                  localized employees who will achieve exceptional standards of performance, responsible behavior, continuous learning and innovation.
                </p>

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
                    Safta Team
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
        className="tooltip-area bgs-cover rel pt-100 rpt-100"
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
              <Link href="products-details" className="theme-btn">
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
