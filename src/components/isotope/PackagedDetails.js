"use client";
import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
//
import Link from "next/link";


const PackagedDetails = () => {

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
    <section className="shopping-cart-area py-80 rpy-100 rel z-1">
      <div className="container">
        <div
          className="shoping-table mb-50"
          data-aos="fade-up"
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <h4>Chemplex Products</h4>
          <div className=" pb-40">
            <img src="assets/images/logos/BarBot.jpg" alt="safra-line" width={400} />
          </div>

          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div
                    className="project-item"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="image">
                      <img src="assets/images/projects/project-grid1.svg" alt="Product-1" width={300} />
                    </div>
                  </div>
                </td>
                <td>
                  <h6>
                    <div >Safra Pine</div>
                  </h6>

                  <ul className="icon-list-chemplex mt-20 mb-35">
                    <li>
                      <i className="fal fa-check" />  Minimizes health hazards caused by vapors with irritating smell.
                    </li>
                    <li>
                      <i className="fal fa-check" />  Improves paint properties not obtained with conventional thinners such as gloss,
                      flow, durability etc.
                    </li>
                    <li>
                      <i className="fal fa-check" />  Reduces ventilation requirements unlike when ordinary paint thinners are used.
                    </li>
                    <li>
                      <i className="fal fa-check" />   Completely lead free. Therefore, safe without danger of blood cancer, asthma &
                      chest disease.
                    </li>
                    <li>
                      <i className="fal fa-check" />  Aesthetically very much acceptable compared to other available products.
                    </li>
                  </ul>
                  <a>
                    <i className="fa fa-file-pdf pdf-icon"></i>
                    <span><Link href="/assets/images/pdfs/Spp/Specs/Safra Pine.pdf" target="_blank" > SPECS</Link> | <i className="fa fa-file-pdf pdf-icon"></i>
                      <Link href="/assets/images/pdfs/Spp/Msds/Safra Pine.pdf" target="_blank"> MSDS </Link></span> |
                    <Link href="contact"> <i className="fa fa-envelope pdf-icon"></i></Link>
                  </a>
                </td>

              </tr>

              <tr>
                <td>
                  <div
                    className="project-item"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="image">
                      <img src="assets/images/projects/project-grid2.svg" alt="Product-2" width={300} />
                    </div>
                  </div>
                </td>
                <td>
                  <h6>
                    <div>Safra Pure</div>
                  </h6>
                  <ul className="icon-list-chemplex mt-20 mb-35">
                    <li>
                      <i className="fal fa-check" />  Minimizes health hazards caused by vapors with irritating smell/odor.
                    </li>
                    <li>
                      <i className="fal fa-check" />   Improves paint properties not obtained with other thinners or Kerosene, such as
                      gloss, flow, durability etc.
                    </li>
                    <li>
                      <i className="fal fa-check" />  Reduces ventilation requirements to minimum unlike when ordinary paint thinners or
                      Kerosene are used.
                    </li>
                  </ul>
                  <a>
                    <i className="fa fa-file-pdf pdf-icon"></i>
                    <span><Link href="/assets/images/pdfs/Spp/Specs/Safra Pure.pdf" target="_blank" > SPECS</Link> | <i className="fa fa-file-pdf pdf-icon"></i>
                      <Link href="/assets/images/pdfs/Spp/Msds/Safra Pure.pdf" target="_blank"> MSDS </Link></span>
                    <Link href="contact"> | <i className="fa fa-envelope pdf-icon"></i></Link>
                  </a>
                </td>
              </tr>

              <tr>
                <td>
                  <div
                    className="project-item"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="image">
                      <img src="assets/images/projects/project-grid3.svg" alt="Product-3" width={300} />
                    </div>
                  </div>
                </td>
                <td>
                  <h6>
                    <div>Safra Cryl</div>
                  </h6>
                  <ul className="icon-list-chemplex mt-20 mb-35">
                    <li>
                      <i className="fal fa-check" /> Quickly reduces the consistency of the lacquers to the required degree.
                    </li>
                    <li>
                      <i className="fal fa-check" /> Improves film smoothness of the lacquers when applied either by spray or dipping.
                    </li>
                    <li>
                      <i className="fal fa-check" /> Film of lacquer dries without blushing, pin holing and other surface defects.
                    </li>
                    <li>
                      <i className="fal fa-check" />  Due to splitting capabilities effectively cleans all metallic surfaces by dissolving
                      adhered oil, grease, wax, etc.
                    </li>
                    <li>
                      <i className="fal fa-check" /> Helps drying lacquers quicker than when they are dissolved in conventional paint
                      thinner.
                    </li>
                  </ul>
                  <a>
                    <i className="fa fa-file-pdf pdf-icon"></i>
                    <span><Link href="/assets/images/pdfs/Spp/Specs/Safra Cryl.pdf" target="_blank" > SPECS</Link> | <i className="fa fa-file-pdf pdf-icon"></i>
                      <Link href="/assets/images/pdfs/Spp/Msds/Safra Cryl.pdf" target="_blank"> MSDS </Link></span>
                    <Link href="contact"> | <i className="fa fa-envelope pdf-icon"></i></Link>
                  </a>
                </td>
              </tr>

              <tr>
                <td>
                  <div
                    className="project-item"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="image">
                      <img src="assets/images/projects/project-grid4.svg" alt="Product-4" width={300} />
                    </div>
                  </div>
                </td>
                <td>
                  <h6>
                    <div>Safra Prime (Acrylic Thinner)</div>
                  </h6>
                  <ul className="icon-list-chemplex mt-20 mb-35">
                    <li>
                      <i className="fal fa-check" /> Quickly reduces the consistency of the lacquers to the required degree.
                    </li>
                    <li>
                      <i className="fal fa-check" />  Improves film smoothness of the automotive lacquers when applied either by spray
                      or dipping thus extending excellent finish.
                    </li>
                    <li>
                      <i className="fal fa-check" /> Film of automotive lacquer dries without blushing, resin blush, pin holing and other
                      surface defects.
                    </li>
                    <li>
                      <i className="fal fa-check" />  No "orange peel" is developed after the evaporation of Safra Prime™, and therefore
                      increases the tensile strength of the film along with i
                    </li>
                  </ul>
                  <a>
                    <i className="fa fa-file-pdf pdf-icon"></i>
                    <span><Link href="/assets/images/pdfs/Spp/Specs/Safra Prime.pdf" target="_blank" > SPECS</Link> | <i className="fa fa-file-pdf pdf-icon"></i>
                      <Link href="/assets/images/pdfs/Spp/Msds/Safra Prime.pdf" target="_blank"> MSDS </Link></span>
                    <Link href="contact"> | <i className="fa fa-envelope pdf-icon"></i></Link>
                  </a>
                </td>
              </tr>


              <tr>
                <td>
                  <div
                    className="project-item"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="image">
                      <img src="assets/images/projects/project-grid5.svg" alt="Product-5" width={300} />
                    </div>
                  </div>
                </td>
                <td>
                  <h6>
                    <div href="project-details">Safra Pro</div>
                  </h6>

                  <ul className="icon-list-chemplex mt-20 mb-35">
                    <li>
                      <i className="fal fa-check" />  Minimizes health hazards caused by vapors with irritating smell.
                    </li>
                    <li>
                      <i className="fal fa-check" />  Improves paint properties not obtained with conventional thinners such as gloss,
                      flow, durability etc.
                    </li>
                    <li>
                      <i className="fal fa-check" />  Reduces ventilation requirements unlike when ordinary paint thinners are used.
                    </li>
                    <li>
                      <i className="fal fa-check" />   No "orange peel" effect is developed after the evaporation of Safra Pro TM Thinner,
                      and therefore increases the tensile strength of the film alongwith its gloss.
                    </li>
                    <li>
                      <i className="fal fa-check" />  Additional quantity of retarder present in Safra Pro ™ results in very durable lacquer films.
                    </li>
                  </ul>
                  <a>
                    <i className="fa fa-file-pdf pdf-icon"></i>
                    <span><Link href="/assets/images/pdfs/Spp/Specs/Safra Pro.pdf" target="_blank" > SPECS</Link> | <i className="fa fa-file-pdf pdf-icon"></i>
                      <Link href="/assets/images/pdfs/Spp/Msds/Safra Pro.pdf" target="_blank"> MSDS </Link></span>
                    <Link href="contact"> | <i className="fa fa-envelope pdf-icon"></i></Link>
                  </a>
                </td>
              </tr>

              <tr>
                <td>
                  <div
                    className="project-item"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="image">
                      <img src="assets/images/projects/project-grid6.svg" alt="Product-6" width={300} />
                    </div>
                  </div>
                </td>
                <td>
                  <h6>
                    <div href="project-details">Safra Shine (Wood Varnish)</div>
                  </h6>

                  <ul className="icon-list-chemplex mt-20 mb-35">
                    <li>
                      <i className="fal fa-check" />   Transparent as well as available in different colors.
                    </li>
                    <li>
                      <i className="fal fa-check" />   Gives Surfaces distinguished shining look.
                    </li>
                    <li>
                      <i className="fal fa-check" />  Controls water vapor diffusion.
                    </li>
                    <li>
                      <i className="fal fa-check" />  Prevents mold growth.
                    </li>
                    <li>
                      <i className="fal fa-check" />  Weather resistant.
                    </li>
                    <li>
                      <i className="fal fa-check" />  Contains no lead in any form.
                    </li>
                  </ul>
                  <a>
                    <i className="fa fa-file-pdf pdf-icon"></i>
                    <span><Link href="/assets/images/pdfs/Spp/Specs/Safra Shine.pdf" target="_blank" > SPECS</Link> | <i className="fa fa-file-pdf pdf-icon"></i>
                      <Link href="/assets/images/pdfs/Spp/Msds/Safra Shine.pdf" target="_blank"> MSDS </Link></span>
                    <Link href="contact"> | <i className="fa fa-envelope pdf-icon"></i></Link>
                  </a>
                </td>
              </tr>

              <tr>
                <td>
                  <div
                    className="project-item"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="image">
                      <img src="assets/images/projects/project-grid7.svg" alt="Product-7" width={300} />
                    </div>
                  </div>
                </td>
                <td>
                  <h6>
                    <div>Safra Bond (CPVC Cement)</div>
                  </h6>

                  <ul className="icon-list-chemplex mt-20 mb-35">
                    <li>
                      <i className="fal fa-check" />  Emits less VOC'c than many conventional products.
                    </li>
                    <li>
                      <i className="fal fa-check" />  Fast evaporating than other products to dry faster.
                    </li>
                    <li>
                      <i className="fal fa-check" />  Work with both cold & hot water.
                    </li>
                    <li>
                      <i className="fal fa-check" />  Can be used for household & industry as well.
                    </li>
                    <li>
                      <i className="fal fa-check" />  Stable between 40°F & 110°F at storage.
                    </li>
                    <li>
                      <i className="fal fa-check" />  Provide shelf life of 3 years.
                    </li>
                  </ul>
                  <a>
                    <i className="fa fa-file-pdf pdf-icon"></i>
                    <span><Link href="/assets/images/pdfs/Spp/Specs/Safra Bond Cement.pdf" target="_blank" > SPECS</Link> | <i className="fa fa-file-pdf pdf-icon"></i>
                      <Link href="/assets/images/pdfs/Spp/Msds/Safra Bond Cement cpvc.pdf" target="_blank"> MSDS </Link></span>
                    <Link href="contact"> | <i className="fa fa-envelope pdf-icon"></i></Link>
                  </a>
                </td>
              </tr>

              <tr>
                <td>
                  <div
                    className="project-item"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="image">
                      <img src="assets/images/projects/project-grid8.svg" alt="Product-8" width={300} />
                    </div>
                  </div>
                </td>
                <td>
                  <h6>
                    <div >Safra Bond (PVC Cement)</div>
                  </h6>
                  <ul className="icon-list-chemplex mt-20 mb-35">
                    <li>
                      <i className="fal fa-check" />  Fast affective on plastic surfaces.
                    </li>
                    <li>
                      <i className="fal fa-check" />  Does not react with container surface.
                    </li>
                    <li>
                      <i className="fal fa-check" />  Evaporates fast without any blushing.
                    </li>
                    <li>
                      <i className="fal fa-check" />  Cleans the surface taking all extraneous material.
                    </li>
                    <li>
                      <i className="fal fa-check" />  Long shelf life storage up to 3 years if kept under shed.
                    </li>
                  </ul>
                  <a>
                    <i className="fa fa-file-pdf pdf-icon"></i>
                    <span><Link href="/assets/images/pdfs/Spp/Specs/Safra Bond Cement.pdf" target="_blank" > SPECS</Link> | <i className="fa fa-file-pdf pdf-icon"></i>
                      <Link href="/assets/images/pdfs/Spp/Msds/Safra Bond Cement pvc.pdf" target="_blank"> MSDS </Link></span>
                    <Link href="contact"> | <i className="fa fa-envelope pdf-icon"></i></Link>
                  </a>
                </td>
              </tr>

              <tr>
                <td>
                  <div
                    className="project-item"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="image">
                      <img src="assets/images/projects/project-grid9.svg" alt="Product-9" width={300} />
                    </div>
                  </div>
                </td>
                <td>
                  <h6>
                    <div>Safra AutoCryl</div>
                  </h6>
                  <a>
                    <i className="fa fa-file-pdf pdf-icon"></i>
                    <span><Link href="/assets/images/pdfs/Spp/Specs/Safra AutoCryl.pdf" target="_blank" > SPECS</Link> | <i className="fa fa-file-pdf pdf-icon"></i>
                      <Link href="/assets/images/pdfs/Spp/Msds/Safra AutoCryl.pdf" target="_blank"> MSDS </Link></span>
                    <Link href="contact"> \  <i className="fa fa-envelope pdf-icon"></i></Link>
                  </a>

                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>



  );
};
export default PackagedDetails;
