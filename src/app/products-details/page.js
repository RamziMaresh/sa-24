"use client";

import PageBanner from "../../components/PageBanner";
import SafraLayout from "../../layouts/SafraLayout";
import Link from "next/link";

import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const page = () => {
  return (
    <SafraLayout>
      <PageBanner pageName={"SPECS & MSDS"} />

      {/* Services Two Area Start */}
      <section className="services-two-area pt-100 rpt-60 pb-100 rpb- rel z-2">
        <div className="container">

          <div className="row pb-20">
            <div className="col-lg-8">
              <div className="blog-details-content ">
                <h5>Material Safety Data Sheet (MSDS) & Specifications Sheet (SPECS)</h5>
              </div>
            </div>
            <div className="pb-20">
              <img src="assets/images/logos/BarBot.jpg" alt="safra-line" width={300} />
            </div>
          </div>


          {/**One Start*/}
          <div
            className="pt-40"
            data-aos="fade-right"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="section-title">
              <h5>Packaged Products</h5>
            </div>
            <MDBTable align='middle'>
              <MDBTableHead>
                <tr>
                  <th scope='col'>Product Name</th>
                  <th scope='col'>SPECS</th>
                  <th scope='col'>MSDS</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='/assets/images/pdfs/specs.png'
                        alt=''
                        style={{ width: '45px', height: '45px' }}
                        className='rounded-circle'
                      />
                      <div className='ms-3'>
                        <p className='fw-bold mb-1'>Safra Pine</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <MDBBadge color='success' pill>
                      <Link href="" className="text-white">
                        <i class="fa fa-download"></i>
                      </Link>
                    </MDBBadge>                </td>
                  <td>
                    <MDBBadge color='success' pill>
                      <Link href="" className="text-white">
                        <i class="fa fa-download"></i>
                      </Link>
                    </MDBBadge>
                  </td>

                </tr>
                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='/assets/images/pdfs/specs.png'
                        alt=''
                        style={{ width: '45px', height: '45px' }}
                        className='rounded-circle'
                      />
                      <div className='ms-3'>
                        <p className='fw-bold mb-1'>Safra Pure</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <MDBBadge color='success' pill>
                      <Link href="" className="text-white">
                        <i class="fa fa-download"></i>
                      </Link>
                    </MDBBadge>
                  </td>
                  <td>
                    <MDBBadge color='success' pill>
                      <Link href="" className="text-white">
                        <i class="fa fa-download"></i>
                      </Link>
                    </MDBBadge>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='/assets/images/pdfs/specs.png'
                        alt=''
                        style={{ width: '45px', height: '45px' }}
                        className='rounded-circle'
                      />
                      <div className='ms-3'>
                        <p className='fw-bold mb-1'>Safra Cryl</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <MDBBadge color='success' pill>
                      <Link href="" className="text-white">
                        <i class="fa fa-download"></i>
                      </Link>
                    </MDBBadge>
                  </td>
                  <td>
                    <MDBBadge color='success' pill>
                      <Link href="" className="text-white">
                        <i class="fa fa-download"></i>
                      </Link>
                    </MDBBadge>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='/assets/images/pdfs/specs.png'
                        alt=''
                        style={{ width: '45px', height: '45px' }}
                        className='rounded-circle'
                      />
                      <div className='ms-3'>
                        <p className='fw-bold mb-1'>Safra Prime</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <MDBBadge color='success' pill>
                      <Link href="" className="text-white">
                        <i class="fa fa-download"></i>
                      </Link>
                    </MDBBadge>
                  </td>
                  <td>
                    <MDBBadge color='success' pill>
                      <Link href="" className="text-white">
                        <i class="fa fa-download"></i>
                      </Link>
                    </MDBBadge>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='/assets/images/pdfs/specs.png'
                        alt=''
                        style={{ width: '45px', height: '45px' }}
                        className='rounded-circle'
                      />
                      <div className='ms-3'>
                        <p className='fw-bold mb-1'>Safra Pro</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <MDBBadge color='success' pill>
                      <Link href="" className="text-white">
                        <i class="fa fa-download"></i>
                      </Link>
                    </MDBBadge>
                  </td>
                  <td>
                    <MDBBadge color='success' pill>
                      <Link href="" className="text-white">
                        <i class="fa fa-download"></i>
                      </Link>
                    </MDBBadge>
                  </td>

                </tr>

                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='/assets/images/pdfs/specs.png'
                        alt=''
                        style={{ width: '45px', height: '45px' }}
                        className='rounded-circle'
                      />
                      <div className='ms-3'>
                        <p className='fw-bold mb-1'>Safra Shine</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <MDBBadge color='success' pill>
                      <Link href="" className="text-white">
                        <i class="fa fa-download"></i>
                      </Link>
                    </MDBBadge>
                  </td>
                  <td>
                    <MDBBadge color='success' pill>
                      <Link href="" className="text-white">
                        <i class="fa fa-download"></i>
                      </Link>
                    </MDBBadge>
                  </td>

                </tr>

                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='/assets/images/pdfs/specs.png'
                        alt=''
                        style={{ width: '45px', height: '45px' }}
                        className='rounded-circle'
                      />
                      <div className='ms-3'>
                        <p className='fw-bold mb-1'>Safra Bond Cement</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <MDBBadge color='success' pill>
                      <Link href="" className="text-white">
                        <i class="fa fa-download"></i>
                      </Link>
                    </MDBBadge>
                  </td>
                  <td>
                    <MDBBadge color='success' pill>
                      <Link href="" className="text-white">
                        <i class="fa fa-download"></i>
                      </Link>
                    </MDBBadge>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='/assets/images/pdfs/specs.png'
                        alt=''
                        style={{ width: '45px', height: '45px' }}
                        className='rounded-circle'
                      />
                      <div className='ms-3'>
                        <p className='fw-bold mb-1'>Safra Bond Cleaner</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <MDBBadge color='success' pill>
                      <Link href="" className="text-white">
                        <i class="fa fa-download"></i>
                      </Link>
                    </MDBBadge>
                  </td>
                  <td>
                    <MDBBadge color='success' pill>
                      <Link href="" className="text-white">
                        <i class="fa fa-download"></i>
                      </Link>
                    </MDBBadge>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='/assets/images/pdfs/specs.png'
                        alt=''
                        style={{ width: '45px', height: '45px' }}
                        className='rounded-circle'
                      />
                      <div className='ms-3'>
                        <p className='fw-bold mb-1'>Safra AutoCryl</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <MDBBadge color='success' pill>
                      <Link href="" className="text-white">
                        <i class="fa fa-download"></i>
                      </Link>
                    </MDBBadge>
                  </td>
                  <td>
                    <MDBBadge color='success' pill>
                      <Link href="" className="text-white">
                        <i class="fa fa-download"></i>
                      </Link>
                    </MDBBadge>
                  </td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </div>
          {/**End One */}


          {/**Two Start */}
          <div
            className=" pt-80"
            data-aos="fade-right"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="section-title">
              <h5>Aliphatic Solvents</h5>
            </div>

            <MDBTable align='middle'>
              <MDBTableHead>
                <tr>
                  <th scope='col'>Product Name</th>
                  <th scope='col'>SPECS</th>
                  <th scope='col'>MSDS</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='/assets/images/pdfs/specs.png'
                        alt=''
                        style={{ width: '45px', height: '45px' }}
                        className='rounded-circle'
                      />
                      <div className='ms-3'>
                        <p className='fw-bold mb-1'>Safranorm</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <MDBBadge color='success' pill>
                      <Link href="" className="text-white">
                        <i class="fa fa-download"></i>
                      </Link>
                    </MDBBadge>                </td>
                  <td>
                    <MDBBadge color='success' pill>
                      <Link href="" className="text-white">
                        <i class="fa fa-download"></i>
                      </Link>
                    </MDBBadge>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='/assets/images/pdfs/specs.png'
                        alt=''
                        style={{ width: '45px', height: '45px' }}
                        className='rounded-circle'
                      />
                      <div className='ms-3'>
                        <p className='fw-bold mb-1'>Safrasol D40</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <MDBBadge color='success' pill>
                      <Link href="" className="text-white">
                        <i class="fa fa-download"></i>
                      </Link>
                    </MDBBadge>
                  </td>
                  <td>
                    <MDBBadge color='success' pill>
                      <Link href="" className="text-white">
                        <i class="fa fa-download"></i>
                      </Link>
                    </MDBBadge>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='/assets/images/pdfs/specs.png'
                        alt=''
                        style={{ width: '45px', height: '45px' }}
                        className='rounded-circle'
                      />
                      <div className='ms-3'>
                        <p className='fw-bold mb-1'>Safrasol D80</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <MDBBadge color='success' pill>
                      <Link href="" className="text-white">
                        <i class="fa fa-download"></i>
                      </Link>
                    </MDBBadge>
                  </td>
                  <td>
                    <MDBBadge color='success' pill>
                      <Link href="" className="text-white">
                        <i class="fa fa-download"></i>
                      </Link>
                    </MDBBadge>
                  </td>
                </tr>

              </MDBTableBody>
            </MDBTable>
          </div>
          {/**End Two */}


          {/**Three */}
          <div
            className=" pt-80"
            data-aos="fade-right"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="section-title">
              <h5>Aromatic Solvents</h5>
            </div>
            <MDBTable align='middle'>
              <MDBTableHead>
                <tr>
                  <th scope='col'>Product Name</th>
                  <th scope='col'>SPECS</th>
                  <th scope='col'>MSDS</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='/assets/images/pdfs/specs.png'
                        alt=''
                        style={{ width: '45px', height: '45px' }}
                        className='rounded-circle'
                      />
                      <div className='ms-3'>
                        <p className='fw-bold mb-1'>Safraxyl</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <MDBBadge color='success' pill>
                      <Link href="" className="text-white">
                        <i class="fa fa-download"></i>
                      </Link>
                    </MDBBadge>
                  </td>
                  <td>
                    <MDBBadge color='success' pill>
                      <Link href="" className="text-white">
                        <i class="fa fa-download"></i>
                      </Link>
                    </MDBBadge>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='/assets/images/pdfs/specs.png'
                        alt=''
                        style={{ width: '45px', height: '45px' }}
                        className='rounded-circle'
                      />
                      <div className='ms-3'>
                        <p className='fw-bold mb-1'>Safratol</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <MDBBadge color='success' pill>
                      <Link href="" className="text-white">
                        <i class="fa fa-download"></i>
                      </Link>
                    </MDBBadge>
                  </td>
                  <td>
                    <MDBBadge color='success' pill>
                      <Link href="" className="text-white">
                        <i class="fa fa-download"></i>
                      </Link>
                    </MDBBadge>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='/assets/images/pdfs/specs.png'
                        alt=''
                        style={{ width: '45px', height: '45px' }}
                        className='rounded-circle'
                      />
                      <div className='ms-3'>
                        <p className='fw-bold mb-1'>Safranine</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <MDBBadge color='success' pill>
                      <Link href="" className="text-white">
                        <i class="fa fa-download"></i>
                      </Link>
                    </MDBBadge>
                  </td>
                  <td>
                    <MDBBadge color='success' pill>
                      <Link href="" className="text-white">
                        <i class="fa fa-download"></i>
                      </Link>
                    </MDBBadge>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='/assets/images/pdfs/specs.png'
                        alt=''
                        style={{ width: '45px', height: '45px' }}
                        className='rounded-circle'
                      />
                      <div className='ms-3'>
                        <p className='fw-bold mb-1'>Safraplus</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <MDBBadge color='success' pill>
                      <Link href="" className="text-white">
                        <i class="fa fa-download"></i>
                      </Link>
                    </MDBBadge>
                  </td>
                  <td>
                    <MDBBadge color='success' pill>
                      <Link href="" className="text-white">
                        <i class="fa fa-download"></i>
                      </Link>
                    </MDBBadge>
                  </td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </div>

        </div>
      </section>

    </SafraLayout >
  );
};
export default page;
