"use client";
import PageBanner from "../../components/PageBanner";
import SafraLayout from "../../layouts/SafraLayout";
import { Nav, Tab } from "react-bootstrap";
import dynamic from "next/dynamic";
//

const TestimonialSlider = dynamic(
  () => import("../../components/TestimonialSlider"),
  {
    ssr: false,
  }
);

const page = () => {
  return (
    <SafraLayout>
      <PageBanner pageName={"About Us"} />

      {/* About Area Start */}
      <section className="artificial-intelligence-area rel pt-60 rpt-60 pb-40 rpb-10 z-2">
        <div className="container">

          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 col-md-11">
              <div
                className="section-title text-center mb-40"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h3>At a Glance</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container container-1070">
          <div className="row pb-10 rpb-20 gap-100 align-items-center">

            <div className="ceo-text">
              <div
                className="ai-content mb-40 rmb-0"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <p>
                  SAFRA is a manufacturer and distributor of hydrocarbon solvents having a fully automated refinery located at
                  Yanbu Industrial City on the west coast of Saudi Arabia, and corporate office at Jeddah.
                  The company serves industries of paints,adhesives, insecticides & pesticides, thinner, alkyd resins,
                  industrial cleaning, maintenance solvents, dry cleaning, spot removing, wood protection, varnishes, construction chemicals,
                  oil field chemicals, and Bitumen based products.
                </p>
                <p>
                  The production capacity of SAFRA refinery is continuously expanding to meet
                  increasing demand for products while keeping pace with the latest technological
                  developments and simultaneously meeting stringent International standards for
                  manufacturing solvents.<br />
                  The plant is equipped with necessary technological flexibility and pool of technical
                  experts to produce innovative tailor made products conforming to the customer
                  specifications. It is very well equipped with high capacity solvent filling facility in drums
                  and tankers for road deliveries. It also has a pipeline linked to the sea-terminal
                  facilitating excellent freight economics to our esteemed customers owing to the efficient
                  port facilities for shipment of products in large vessels, ISO tanks and containers.
                  Our environmental friendly solvents comply with international quality and safety
                  standards. Our fully integrated production, sales & distribution processes ensures on time deliveries to the regional and international industrial partners
                  for further down- streaming quality products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Area End */}


      {/* Testimonials Area Start */}
      <section className="testimonials-area pt-10 rpt-40 rpb-0 pb-10 rpb-0">
        <TestimonialSlider />
      </section>



      {/* Solutions Area End 
      <section className="solutions-area pb-40 rpb-70">
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
                    src="assets/images/fancy-box/fancy-box1.jpg"
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
                    src="assets/images/fancy-box/fancy-box2.jpg"
                    alt="Fancy Box"
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
                    src="assets/images/fancy-box/fancy-box3.jpg"
                    alt="Fancy Box"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-10">
              <div
                className="fancy-box"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/fancy-box/fancy-box4.jpg"
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
                    src="assets/images/fancy-box/fancy-box5.jpg"
                    alt="Fancy Box"
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
                    src="assets/images/fancy-box/fancy-box6.jpg"
                    alt="Fancy Box"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}
      {/* Solutions Area End */}

      {/* Tab Area Start */}
      <section className="tab-area-two pt-100 rpt-105"
        style={{ backgroundImage: "url(assets/images/backgrounds/tolltip.svg)" }}

      >
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xl-7 col-lg-9 col-md-11"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title text-center mb-35">

                <h4>
                  Add More Quality Into Your Life
                </h4>
              </div>
            </div>
          </div>
          <Tab.Container defaultActiveKey={"tabTwo1"}>
            <div
              className="row justify-content-center"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="col-lg-10">
                <Nav
                  as={"ul"}
                  className="nav advanced-tab style-two mb-55"
                  role="tablist"
                >
                  <Nav.Item as={"li"}>
                    <Nav.Link as={"button"} eventKey="tabTwo1">
                      Mission
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as={"li"}>
                    <Nav.Link as={"button"} eventKey="tabTwo2">
                      Vision
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as={"li"}>
                    <Nav.Link as={"button"} eventKey="tabTwo3">
                      Quality
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>
            <Tab.Content className="tab-content">

              <Tab.Pane className="tab-pane fade" eventKey="tabTwo1">
                <div className="row align-items-center justify-content-center">

                  <div className="col-xl-9 col-lg-9">
                    <div className="content rmt-55 ">

                      <p>
                        SAFRA is devoted to diversify its value-added hydrocarbon quality products to
                        its customers worldwide, capitalizing on its R&D and transnational culture.
                      </p>
                      <p>
                        SAFRA is to be recognized as a world-class producer of hydrocarbon products and
                        services supplied worldwide. Its purpose is achieved through an organization and
                        working environment able to meet and exceed its international B2B & B2C customers’ needs. The company provides its stakeholders with long-term growth and profitability
                        by establishing and maintaining leadership position in the market.
                      </p>


                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="tabTwo2">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-9 col-lg-9">
                    <div
                      className="content rmb-55"
                      data-aos="fade-left"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <p>
                        We are stepping up our execution to deliver improved performance.
                        To be a world class hydrocarbon key player, maximizing stakeholders’ benefits, cultivating sustainability, creating value and nurturing localization.
                      </p>
                      <ul className="icon-list style-two my-35">
                        <li>
                          <i className="fal fa-check" /> Being a World Class Hydrocarbon Key Player.
                        </li>
                        <p>
                          SAFRA will set a clear future state where all employees are engaged in a shared goal, having defined continuous improvement framework and exceptional process
                          standards. The company will work collaboratively both within its sector and its supply chain. It will benchmark itself against other world leaders.
                        </p>
                        <li>
                          <i className="fal fa-check" /> Maximizing Stakeholders Benefits.
                        </li>
                        <p>
                          These will be achieved by exceeding their minimum expectations, both internal
                          stakeholders (employees, business owners & investors) and external stakeholders
                          (customers & suppliers). This incredible challenge will be accomplished by beating cost
                          of capital and growing the business.
                        </p>
                        <li>
                          <i className="fal fa-check" /> Cultivating Sustainability, Creating Value, and Nurturing Localization.
                        </li>
                        <p>
                          Employees and other stakeholders will have huge opportunity to be part of a successful
                          enterprise. Moreover, SAFRA will emphasize on the importance of how its employees
                          work with each other and how they behave. Employees empowerment will increasingly
                          be emphasized for exceptional performance that will make the employees perform the
                          best of their capabilities and in turn help SAFRA Vision turns into reality.
                          Entrepreneurial drives, teamwork orientation, outstanding ethical behaviors, learning
                          organization, and practical creativity are crucial to SAFRA success. Focus on
                          customers is also essential so that the company constantly keep them at the center of
                          its attention. The company will competitively anticipate and meet customers changing
                          needs, aspirations and expectations from hydrocarbon products. It will serve its
                          customers through its wealth of knowledge and operational experience and respond
                          competitively to their needs through its diversified portfolio. quality hydrocarbon and
                          petrochemical products.
                        </p>
                      </ul>

                    </div>
                  </div>

                </div>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="tabTwo3">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-9 col-lg-9">
                    <div className="content rmb-55 justify-content-center">

                      <p>
                        Quality consistency is vital for us as we know there are no shortcuts when it comes to
                        providing customers with consistent and reliable, quality products.
                      </p>

                    </div>
                  </div>

                </div>
              </Tab.Pane>

            </Tab.Content>
          </Tab.Container>
        </div>
      </section>
      {/* Tab Area End */}


      {/* President Start
                      data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}

                                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
       */}
      <section className="artificial-intelligence-area rel pt-60 rpt-80 pb-60 rpb-10 z-2"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="section-title text-center mb-20"

            >
              <h3>CEO Message</h3>
            </div>
          </div>
        </div>

        <div className="container container-1070">
          <div className="row pb-0 rpb-65 gap-100 align-items-center">

            <div className="ceo-text">
              <div
                className="ai-content mb-40 rmb-0"

              >
                <p>
                  People and culture are the biggest assets in Safra, which we continuously cherish and
                  develop to accomplish our objective of highest levels of customer satisfaction. Through
                  the history of times, we have experienced that the success of us and that of you as
                  our partner, lies in the applied transparency, continuous product development and
                  efficient process implementation, on which our business approach rests. We are
                  committed to meet variety of customer requirements in the area of industrial chemicals
                  & solvents, consumer products and related services.
                </p>
                <p>
                  Also, to meet the growing needs of industrial & decorative paints, home care products, agricultural pesticides and other end-user products, we are dedicated to expand our
                  production capabilities, which will further support these industrial sectors with
                  continuous and reliable supply of their raw material requirements. Without any compromise on the environmental health, we apply highest care to the
                  quality of products that we produce, together with meeting our business commitments
                  with accuracy and on-time. We take pride in acknowledging our contribution to the Saudi economy and society by
                  producing & supplying industrial raw material for growth of local industry and by training
                  and developing Saudi youth in various fields of business & management, respectively.
                  We at Safra, believe in empowering and rewarding our intellectual capital and providing
                  a motivating work environment within the guidelines of Islamic ethics and culture.
                </p>
              </div>
              <hr />
            </div>
          </div>

        </div>
      </section>
      {/* President End */}

      {/* Services Two Area Start */}
      <section className="services-two-area pt-20 rpt-40 pb-90 rpb-70 rel z-2">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div
              className="col-xl-8"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div
                className="section-title text-center mb-20"

              >
                <h3>Safra History</h3>
              </div>

            </div>
          </div>
          <div className="row pt-45">
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-four">

                <div className="content">
                  <h6>
                    1987 <i class="fa fa-angle-right"></i>
                  </h6>
                  <p>SAFRA Company Ltd. was established.</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-four">
                <div className="content">
                  <h6>
                    1990 <i class="fa fa-angle-right"></i>
                  </h6>
                  <p>Commercial production started and export activities began.</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-four">
                <div className="content">
                  <h6>
                    1992 <i class="fa fa-angle-right"></i>
                  </h6>
                  <p>
                    SAFRA’s packaged products (SPP) launched.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-four">
                <div className="content">
                  <h6>
                    1994 <i class="fa fa-angle-right"></i>
                  </h6>
                  <p>SPP production went into full speed operation.</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-four">
                <div className="content">
                  <h6>
                    1996 <i class="fa fa-angle-right"></i>
                  </h6>
                  <p>SAFRA obtained ISO 9002 certificate. </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-four ">
                <div className="content">
                  <h6>
                    1997 <i class="fa fa-angle-right"></i>
                  </h6>
                  <p> SAFRA received the King Fahd Award for “Best Industry”.</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-four ">
                <div className="content">
                  <h6>
                    1999 <i class="fa fa-angle-right"></i>
                  </h6>
                  <p>SAFRA implemented SAP solution.</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-four ">
                <div className="content">
                  <h6>
                    2023 <i class="fa fa-angle-right"></i>
                  </h6>
                  <p>Started the revamp of its refinery, renovated & upgraded its equipment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Two Area End */}


      {/* Values Area Start */}
      <section className="feature-box-area pt-20 rpt-10 pb-60 rpb-40 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 col-md-11">
              <div
                className="section-title text-center mb-55"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h3
                  data-aos="fade-up"
                  data-aos-delay={50}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                  className="mb-60"
                >
                  Corporate <span>Values</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-seven">
                <div className="content">
                  <h5>Compliance to Business Principles</h5>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-seven">
                <div className="content">
                  <h5>Customers Orientation</h5>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-seven">
                <div className="content">
                  <h5>Transparency</h5>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-seven">
                <div className="content">
                  <h5>Personal Integrity & Hones</h5>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-seven">
                <div className="content">
                  <h5>Corporate Social Responsibility </h5>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-seven">
                <div className="content">
                  <h5>Business Integrity & Hones</h5>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* Values Area End */}

      {/* Business Philosophy Start */}
      <section className="data-analytics-area pt-40 rpt-10 pb-20 rpb-60">
        <div className="container">
          <div className="row gap-110 align-items-center">
            <div className="col-lg-6">
              <div
                className="data-analytics-content mt-40 rmb-20"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h3>Business Philosophy</h3>
                  <div className="">
                    <img src="assets/images/logos/BarBot.jpg" alt="safra-line" width={250} />
                  </div>
                </div>


                <ul className="icon-list style-two">
                  <li>
                    <i className="fal fa-check" />
                    Proactively deal with all our partners with confidence
                    and pride in a spirit of mutual respect, trust and openness maintaining highest standards of integrity.
                  </li>
                  <li>
                    <i className="fal fa-check" />
                    Think of safety and act safely at all the times in all our endeavors.
                  </li>
                  <li>
                    <i className="fal fa-check" />
                    Improve customer focus through better understanding and anticipating of the priorities of existing and emerging customers.
                  </li>
                  <li>
                    <i className="fal fa-check" />
                    Serve our customers with accuracy, speed, flexibility, efficiency and effectiveness-based on agreed priorities.
                  </li>
                  <li>
                    <i className="fal fa-check" />
                    Introduce innovative quality products and services at competitive cost leading to added economic benefits to all the stakeholders.
                  </li>
                  <li>
                    <i className="fal fa-check" />
                    Be responsible and active corporate player respecting communities and environments in which we operate.
                  </li>
                </ul>
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
                  src="assets/images/about/management-four.svg"
                  alt="Management"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Business Philosophy End */}

      <section className="hero-area-six pt-40 rpt-20 pb-0 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-11">
              <hr />
            </div>
          </div>
        </div>
      </section>

      {/* HeaderStart pt-120*/}
      <section
        className="tooltip-area rel pt-40 rpt-10"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xl-9 col-lg-11 mb-135 rmb-80 text-center"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title pt-10 pb-10">
                <h4 className="pb-20">
                  Our products are meeting customers’ needs from industrial chemicals to consumers products and services
                </h4>
                <p className="about-products-desc">
                  We currently manufacture two product groups, Aliphatics and Aromatics of superior quality to best fill the needs of all customers.
                  We also undertake the blending of various products to meet specific customers chemical and
                  solvents requirements serving industries such as Paints, Adhesives, Insecticides & Pesticides, Thinner, Ink, printing, Tannery,
                  Resins, Industrial Cleaning and Maintenance, Dry Cleaning, Spot Removing, Wood Protection and varnishes, Construction Chemicals,
                  Oil Fields Chemicals, Bitumen Based Products, etc. We have privilege of producing odorless (aromatic free) solvents for various
                  applications especially oil-drilling, aerosol insecticide, agricultural pesticide, industrial cleaning and maintenance.
                  We aim to enhance market leadership via our products/services, establish new manufacturing facilities and trading division.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* Header Area End */}
    </SafraLayout>
  );
};
export default page;
