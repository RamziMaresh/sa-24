"use client";
import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
//
import Link from "next/link";


const TradingDetails = () => {
    const isotope = useRef();
    const [filterKey, setFilterKey] = useState("*");
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".project-active", {
                itemSelector: ".item",
                percentPosition: true,
                masonry: {
                    columnWidth: ".item",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            });
        }, 500);
    }, []);
    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` });
        }
    }, [filterKey]);

    return (
        <section className="project-grid-area pt-100 rpt-100 pb-85 rpb-55">
            <div className="container">

                <div className="row justify-content-center">
                    <div className="col-xl-9 col-lg-11">
                        <div className="tag-share pt-0 pb-10">
                            <h4>Blended Products</h4>

                            <div
                                className="item"
                                data-aos="fade-left"
                                data-aos-duration={1500}
                                data-aos-offset={50}
                            >
                            </div>
                        </div>
                        <div className="pb-40">
                            <img src="assets/images/logos/BarBot.jpg" alt="safra-line" width={400} />
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-xl-9 col-lg-11">
                        <p>
                            <b>Blended Products that are customized to meet the diversified customers’ requirements.</b> Safra aims to further expand its manufacturing capacities and diversify its
                            mainstream product portfolio and other packaged SKUs to meet other various
                            applications and specifications.
                        </p>
                    </div>
                </div>


            </div>
        </section >
    );
};
export default TradingDetails;
