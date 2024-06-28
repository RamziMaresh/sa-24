"use client";
import { sliderProps } from ".././utility/sliderProps";
import { Fragment } from "react";
import Slider from "react-slick";
const TestimonialSlider = () => {
    return (
        <Fragment>
            <Slider
                {...sliderProps.marqueeSliderRight}
                className="marquee-slider-right testi-slider-right"
            >
                <div className="testimonial-item">
                    <div className="">
                        <img
                            src="assets/images/fancy-box/fancy-box1.jpg"
                            alt=""
                        />
                    </div>
                </div>
                <div className="testimonial-item">
                    <div className="">
                        <img
                            src="assets/images/fancy-box/fancy-box2.jpg"
                            alt=""
                        />
                    </div>
                    
                </div>
                <div className="testimonial-item">
                    <div className="">
                        <img
                            src="assets/images/fancy-box/fancy-box3.jpg"
                            alt=" "
                        />
                    </div>
                </div>
                <div className="testimonial-item">
                    <div className="">
                        <img
                            src="assets/images/fancy-box/fancy-box4.jpg"
                            alt=" "
                        />
                    </div>
                </div>
                <div className="testimonial-item">
                    <div className="">
                        <img
                            src="assets/images/fancy-box/fancy-box5.jpg"
                            alt=" "
                        />
                    </div>
                </div>
                <div className="testimonial-item">

                </div>
            </Slider>

        </Fragment>
    );
};
export default TestimonialSlider;
