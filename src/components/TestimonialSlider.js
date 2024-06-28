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
                        <img
                            src="assets/images/fancy-box/fancy-box1.jpg"
                            alt=""
                        />
                        
                </div>
                <div className="testimonial-item">
                        <img
                            src="assets/images/fancy-box/fancy-box2.jpg"
                            alt=""
                        />
                    
                </div>
                <div className="testimonial-item">
                        <img
                            src="assets/images/fancy-box/fancy-box3.jpg"
                            alt=" "
                        />
                </div>

                <div className="testimonial-item">

                </div>

                <div className="testimonial-item">

                </div>
            </Slider>

        </Fragment>
    );
};
export default TestimonialSlider;
