"use client";
import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
//
import Collapsible from 'react-collapsible';
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
                            <h4>TRADING PRODUCTS</h4>

                            <div
                                className="item"
                                data-aos="fade-left"
                                data-aos-duration={1500}
                                data-aos-offset={50}
                            >
                                <div className="tag-coulds">
                                    <Link href="/">Home Page <i class="fa fa-angle-right"></i> </Link>
                                </div>
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
                            Safra trade in quality solvents which are not produced by us but purchased
                            from different parts of the world to facilitate our customers needs and wants.
                        </p>
                        <h6 className="">Safra Trading Products Are:</h6>

                        <ul className="icon-list mt-20 mb-35">
                            <li>
                                <i className="fal fa-check" />  MEK (Methyl Ethyl Ketone)
                            </li>
                            <li>
                                <i className="fal fa-check" />  Mibk (Methyl Isobutyl Ketone)
                            </li>
                            <li>
                                <i className="fal fa-check" />  ISO-Propylon Alcohol
                            </li>
                            <li>
                                <i className="fal fa-check" />  Ethyl Acetate
                            </li>
                            <li>
                                <i className="fal fa-check" />  Butyl Acetate
                            </li>
                            <li>
                                <i className="fal fa-check" />  Butyl Glycol
                            </li>
                            <li>
                                <i className="fal fa-check" />  Linseed Oil
                            </li>
                            <li>
                                <i className="fal fa-check" />  Methanol
                            </li>
                            <li>
                                <i className="fal fa-check" />  Acetone & Ethanol
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </section >
    );
};
export default TradingDetails;
