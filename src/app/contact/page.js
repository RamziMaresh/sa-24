"use client";
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Select from "react-select";

import PageBanner from "../../components/PageBanner";
import SafraLayout from "../../layouts/SafraLayout";
import Link from "next/link";
//



const CountrySelect = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        setSelectedCountry(data.userSelectValue);
      });
  }, []);
  return (
    <Select
      options={countries}
      value={selectedCountry}
      onChange={(selectedOption) => setSelectedCountry(selectedOption)}
    />
  );
};



const page = () => {
  const [status, setStatus] = useState('');

  const form = useRef(null);

  const sendEmail = (e) => {
    event.preventDefault();
    if (
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID &&
      form.current
    ) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then(
          (result) => {

            setStatus('SUCCESS')
            console.log(result.text)
          },
          (error) => {
            setStatus('FAILED... ', error.text)
            console.log(error.text)

          },
        );
      e.target.reset()
    }

  };

  return (
    <SafraLayout>
      <PageBanner pageName={"Contact Us"} />

      <section className="contact-page py-60 rpy-10 pt-60 rpt-60">
        <div className="container">

          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-11">
              <div className="tag-share pt-0 pb-5">
                <h5>Feel Free to Contact Us, Get InTouch!</h5>
              </div>
              <div className=" pb-5">
                <img src="assets/images/logos/BarBot.jpg" alt="safra-line" width={400} />
              </div>

              <div
                className="contact-form  rmt-20"
                name="contact-form"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >


                {status && renderAlert()}
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="contact-form"
                  name="contactForm"
                >


                  <div className="row mt-30 ">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          type="text"
                          autoComplete='off'
                          id="user_name"
                          name="user_name"
                          className="form-control"
                          placeholder="Name"
                          required
                          data-error="Please enter your Name"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="email"
                          autoComplete='off'
                          id="user_email"
                          name="user_email"
                          className="form-control"
                          placeholder="Your Email"
                          required
                          data-error="Please enter your Email"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Subject</label>
                        <input
                          type="text"
                          id="user_subject"
                          name="user_subject"
                          autoComplete='off'
                          className="form-control"
                          placeholder="I like to discussed"
                          required
                          data-error="Please enter your Subject"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Contact Number</label>
                        <input
                          autoComplete='off'
                          type="text"
                          id="user_phone"
                          name="user_phone"
                          className="form-control"
                          placeholder="+000 000 000 "
                          required
                          data-error="Please enter your Email"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                      <label>Select Your Country</label>
                      <CountrySelect 
                                             autoComplete='off'
                                             type="text"
                                             id="user_country"
                                             name="user_country"
                                             className="form-control"
                                             placeholder="Ex: Saudi Arabia"
                                             required
                                             data-error="Please enter your Name"
                      />
                        <div className="help-block with-errors" />
                      </div>
                    </div>


                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Message</label>
                        <textarea
                          type="text"
                          name="user_message"
                          id="user_message"
                          className="form-control"
                          rows={4}
                          placeholder="Write Message"
                          data-error="Please enter your Message"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="form-group pt-10">
                      <button type="submit" value="Send" className="form-contact-btn">
                        Send <i className="far fa-arrow-right" />
                      </button>
                      <div id="msgSubmit" className="hidden" />
                    </div>
                  </div>
                </form>
              </div>

              <section className="hero-area-six pt-40 rpt-20 pb-40 rel z-1">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-xl-9 col-lg-11">
                      <hr />
                    </div>
                  </div>
                </div>
              </section>

              <div className="">
                <div className="contact-info-part">


                  <div
                    className=""
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="iconic-box-contact style-four">

                      <div className="content">
                        <h6>
                          Head Office
                        </h6>
                        <p><i className="fal fa-location" /> P.O. Box 2824, Jeddah 21461, Saudi Arabia.<br />
                          <i className="fal fa-phone" /> Tel. +966-2-644-4090  / Tel: +966-1-243-4110<br />
                          <i className="fal fa-map" /> <Link className="text-white" href="https://maps.app.goo.gl/hKE1Q9tsyVhtVzRU7" target="_blank">Google Map </Link></p>
                      </div>
                    </div>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay={100}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="iconic-box-contact style-four">
                      <div className="content">
                        <h6>
                          Yanbu AI Sanaia
                        </h6>
                        <p>
                          <i className="fal fa-location" /> P.O. Box 30063 Yanbu Al Sanaia Saudi Arabia.<br />
                          <i className="fal fa-phone" />  Tel. +966-4-396-8022<br />
                          <i className="fal fa-map" /> <Link className="text-white" href="https://maps.app.goo.gl/qj7aLDFNoGDZGhC86" target="_blank">Google Map </Link></p>

                      </div>
                    </div>
                  </div>
                  <div
                    className=""
                    data-aos="fade-up"
                    data-aos-delay={150}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="iconic-box-contact style-four">
                      <div className="content">
                        <h6>
                          Chemplex Jeddah
                        </h6>
                        <p><i className="fal fa-location" /> P.O. Box 2824 Jeddah 21461 Saudi Arabia.<br />
                          <i className="fal fa-phone" /> Tel: +966-2-236-2365 / Tel: +966-2-637-0361<br />
                          <i className="fal fa-map" /> <Link className="text-white" href="https://maps.app.goo.gl/c6VoWViNkxLnfHKe7" target='_blank'> Google Map </Link></p>
                      </div>
                    </div>
                  </div>
                  <div
                    className=""
                    data-aos="fade-up"
                    data-aos-delay={150}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="iconic-box-contact style-four">
                      <div className="content">
                        <h6>Chemplex Riyadh</h6>
                        <p><i className="fal fa-location" /> P.O. Box 23051 Riyadh 11426 Saudi Arabia.<br />
                          <i className="fal fa-phone" /> Tel: +966-1-243-4110<br />
                          <i className="fal fa-map" /> <Link className="text-white" href="https://maps.app.goo.gl/NQ9qL9E4m9Nke8G86?g_st=iw" target='_blank'>Google Map </Link></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* Contact Page End */}

    </SafraLayout >
  );
};

const renderAlert = () => (
  <div
    className='alert-contact-form'
  >
    <p className='p-10 '>Your Message Sent Successfully, You got an alert in your email.</p>
  </div>
)

export default page;
