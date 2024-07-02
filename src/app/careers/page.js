import PageBanner from "../../components/PageBanner";
import SafraLayout from "../../layouts/SafraLayout";
import Link from "next/link";

const page = () => {
    return (
        <SafraLayout>
            <PageBanner pageName={"Careers"} />
            <section className="services-two-area pt-60 rpt-60 pb-0 rpb-   rel z-2">
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-xl-9 col-lg-11">
                            <div className="tag-share pt-0 pb-10">
                                <h5>Eager to join us!</h5>
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
                            <p className="">
                                We Give Our People The Opportunity And Support To Achieve More Than They Ever Thought Possible.<br />
                                <b>UPLOAD YOUR CV</b>
                            </p>
                            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 pt-10">
                                <div className="sign-in-up-wrapper">
                                    <form action="#">
                                        <div className="form-group">
                                            <label htmlFor="Your Name">
                                                <i className="far fa-user" />
                                            </label>
                                            <input id="username" type="text" placeholder="Name" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">
                                                <i className="far fa-envelope" />
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                placeholder="Email Address"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="Subject">
                                                <i className="far fa-lock" />
                                            </label>
                                            <input
                                                id="subject"
                                                type="text"
                                                placeholder="Subject"
                                                required

                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="confirm-password">
                                                <i className="far fa-file" />
                                            </label>
                                            <input
                                                id="Select File"
                                                type="file"
                                                placeholder="Upload Your CV                                                "
                                                required

                                            />
                                        </div>
                                        <div className="form-group">
                                            <button className="theme-btn-careers w-100" type="submit">
                                                Send
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            <section className="hero-area-six rel z-1">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-9 col-lg-11">
                            <hr />
                        </div>
                    </div>
                </div>
            </section>

            {/* News media section one start  */}
            <section className="blog-details-area py-0 rpy-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-9 col-lg-11">

                            <div className="blog-details-content pt-10  pb-40">
                                <div className="blog-details-content ">
                                    <h5 className="pt-20 ">A Quick Image Bite Of Who And What We Are</h5>
                                    <p>
                                        The center of marketing gravity for innovation can be anywhere, and what matters is that our
                                        company SAFRA Ltd. is having the ability to bring central focus to bear when it is needed to
                                        drive economies of scale, efficiencies, and experience.
                                    </p>
                                    <h5 className="pt-20">Knowledge Dissemination</h5>
                                    <p>
                                        Capturing, retaining and disseminating knowledge is crucial. A strategic dimension for us is to
                                        make it our priority at corporate level to define and rationalize our portfolio and then invest in
                                        what we determine to be our “core competencies”; our key areas of competitive advantage.
                                        And once we do it, we put all our muscles behind them. Then we think big.< br />
                                        But, not surprisingly, each aspiring company does it in its own individual way. Some have
                                        simply taken their products, their practices and their people and imposed them on the rest of
                                        the world with the minimum of adaptation. Some others moved very fast into newly opened
                                        countries like China, Central and Eastern Europe and investing in high growth economies.
                                        A team and a team spirit with the right strategic direction will enable us to do this quickly and
                                        well.
                                    </p>

                                    <h5 className="pt-20 ">SAFRA’s Managers</h5>
                                    <p>
                                        We now have a cadre of some good managers. Every one of the team expects to work in
                                        teams where you can enter a new market with all possible speed.
                                    </p>

                                    <h5 className="pt-20 ">How SAFRA To Compete</h5>
                                    <p>
                                        Once we get into a new market, we shall compete with our existing products and maintain a
                                        steady stream of new, state off the art products. Innovation will be at the top of everyone’s
                                        priority list. Business excellence shall be reflected in all what we do. To succeed, some
                                        percentage of our turnover will be required to be spent on R&D. The technology will be clearly
                                        focused, and never for its own sake to show how clever we are.
                                    </p>

                                    <h5 className="pt-20">Anyone Can Innovate</h5>
                                    <p>
                                        Any one of these new product ideas can start anywhere in the company, and they frequently
                                        do. We are ready and able to see the glimpse of a possibility – and then act on it. Fine polish
                                        it, and then launch it.
                                    </p>


                                    <h5 className="pt-20">Project Initiation</h5>
                                    <ul className="icon-list mt-20 mb-35">
                                        <li>
                                            <i className="fal fa-check" /> Audit to find where we truly are. If we do not, life is full of surprises!.
                                        </li>
                                        <li>
                                            <i className="fal fa-check" /> Set targets, measure and benchmark performance.
                                        </li>
                                        <li>
                                            <i className="fal fa-check" />Excel rather than control.
                                        </li>
                                        <li>
                                            <i className="fal fa-check" /> Attack costs – and then attack them again. Lowest imaginable cost is vital.
                                        </li>
                                        <li>
                                            <i className="fal fa-check" />Innovate, innovate and then innovate! Getting in front is tough enough.
                                        </li>
                                        <li>
                                            <i className="fal fa-check" />Think big and be broad minded.
                                        </li>
                                        <li>
                                            <i className="fal fa-check" />Never and never take your eye off the Customer. The customer has the last word.
                                        </li>
                                    </ul>

                                    <h6>
                                        And last – though it is not on the list….. ENJOY and Continue to ENJOY Working for
                                        SAFRA!
                                    </h6>


                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </SafraLayout>
    );
};
export default page;
