"use client";
import Link from "next/link";
import PageBanner from "../../components/PageBanner";
import SafraLayout from "../../layouts/SafraLayout";

const page = () => {
  return (
    <SafraLayout>
      <PageBanner pageName={"Distribution"} />
      {/* News media section one start  */}
      <section className="services-two-area-l pt-100 rpt-100 pb-10 rpb-   rel z-2">
                <div className="container">


                    <div className="row justify-content-center pb-40">
                        <div className="col-xl-9 col-lg-11">
                            <h5 className="">Sales</h5>

<p>
Safra meets the requirements of wide spectrum of market segments by producing high quality solvents in the most modern and fully automated plant. 
It’s expertise in understanding the needs and dynamics of local and regional industrial markets further attributes to serve better than competitors.
<br />
Safra undertake deliveries anywhere in the world. The products are supplied in bulk/vessel, containers, 
ISO Tanks, road tankers, and road trailers in accordance with the requirements of our customers under International Shipping Code. 
Using various packing such as new and reconditioned drums while adhering to global safety standards.
</p>

<h5 className="pt-20">Marketing</h5>

<p>
Safra aims to further fulfill the needs of customers with higher levels of satisfaction by producing the best quality 
of solvents and its distribution in the local, regional and international markets.

</p>
<hr />

                        </div>
                    </div>

                </div>
            </section>


      {/* About Area Five Start */}
      <section className="about-area-five pb-40 pt-40 rpb-40 rel z-1"
      >
        <div className="container">
          <div className="row gap-40 align-items-center">
            <div className="col-lg-6">
              <div
                className="about-images-five rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/about/about-five1.png" alt="Customer-Service-1" />
                <img src="assets/images/about/about-five2.png" alt="Customer-Service-2" />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about-content-five mt-40 rmt-15"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-20">
                  <h4>Customer Service</h4>

                </div>
                <p>
                  There are different ways of moving the materials; we move them via road tankers or trailers (Drums) to our local customer in the Kingdom or around GCC.
                  We also ship container shipments (Drums) or Iso-Tanks internationally.
                </p>
                <p>
                  <b>
                  Safra offers a full package of support to their Customers including the following:
                  </b>
                </p>
                <ul className="icon-list style-two mt-40 mb-40">
                  <li>
                    <i className="fal fa-check" />  Advisory Support for Product Selection.
                  </li>
                  <li>
                    <i className="fal fa-check" />  Product-data Sheets.
                  </li>
                  <li>
                    <i className="fal fa-check" />  Safety-data Sheets.
                  </li>
                  <li>
                    <i className="fal fa-check" />   Application Support.
                  </li>
                  <li>
                    <i className="fal fa-check" />  Producing Innovative Products To Cater Specific Needs Of Customers.
                  </li>
                </ul>

              </div>
            </div>
          </div>

        </div>
      </section>
      {/* About Area End 


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
