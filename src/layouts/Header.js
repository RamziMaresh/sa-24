"use client";
import useClickOutside from "../utility/useClickOutside";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Accordion } from "react-bootstrap";
//

import Locals from "../components/locales";
import { useTranslation } from 'react-i18next';

const Header = ({ header, onePage }) => {

  switch (header) {
    case 1:
      return <DefaultHeader onePage={onePage} />;

    case 10:
      return <HeaderNotFound />;

    default:
      return <DefaultHeader onePage={onePage} />;
  }
};
export default Header;

const DefaultHeader = ({ onePage }) => {
  const menus = [
    { id: 1, href: "home", title: "Home" },
    { id: 8, href: "about", title: "about" },
    { id: 3, href: "products", title: "products" },
    { id: 2, href: "contact", title: "contact" },
    { id: 5, href: "faqs", title: "faqs" },
    { id: 6, href: "products-details", title: "products-details" },
  ];
  return (
    <header className="main-header menu-absolute header-white no-border">
      {/*Header-Upper  container-1660 clearfix */}
      <div className="header-upper">
        <div className="container">
          <div className="header-inner py-5 rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <img
                    src="assets/images/logos/flogo.gif"
                    width={140}
                    alt="Safra Logo"
                    title="Logo"
                  />
                </Link>
              </div>
            </div>
            <div className="nav-outer ms-lg-auto clearfix">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-lg">
                <Nav
                  logo="assets/images/logos/flogo.gif"
                  menus={menus}
                  onePage={onePage}
                />
              </nav>
              {/* Main Menu End*/}
            </div>

            {/* Menu Button */}
            <div className="menu-btns ms-lg-auto d-none d-xl-flex">
              <Locals /> 
              
            </div>


          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};


const HeaderNotFound = ({ onePage }) => {
  return (
    <header className="main-header menu-absolute no-border">
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container container-1660 clearfix">
          <div className="header-inner py-15 rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <img
                    src="/assets/images/logos/flogo.gif"
                    width={140}
                    alt="Logo"
                    title="Logo"
                  />
                </Link>
              </div>
            </div>
            <div className="nav-outer ms-lg-auto clearfix">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-lg">
                <Nav onePage={onePage} logo="/assets/images/logos/flogo.gif" />
              </nav>
              {/* Main Menu End*/}
            </div>

            {/* Menu Button */}
            <div className="menu-btns ms-lg-auto d-none d-xl-flex">
              <Locals />
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};

const Nav = ({
  logo = "assets/images/logos/logo.png",
  dark,
  onePage,
  menus,
}) => {

  //
  const { t } = useTranslation();

  return (
    <Fragment>
      <div className="d-none d-lg-flex desktop-menu">
        <div className="navbar-header py-10">
          <div className="mobile-logo">
            <Link href="/">
              <img src={logo} alt="Logo" title="Logo" />
            </Link>
          </div>
          <Accordion.Toggle
            as={"button"}
            className="navbar-toggle"
            eventKey="navbar-collapse"
          >
            <span className={`icon-bar ${dark ? "bg-dark" : ""}`} />
            <span className={`icon-bar ${dark ? "bg-dark" : ""}`} />
            <span className={`icon-bar ${dark ? "bg-dark" : ""}`} />
          </Accordion.Toggle>
        </div>
        <div eventKey="navbar-collapse" className="navbar-collapse clearfix">
          {onePage ? (
            <ul className="navigation onepage clearfix">
              {menus.map((menu) => (
                <li key={menu.id}>
                  <a href={`#${menu.href}`}>{menu.title}</a>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="navigation clearfix">
              <li className="dropdown">
                <Link href="/">{t('Home')}</Link>
              </li>
              <li className="dropdown">
                <Link href="about">{t('About Us')}</Link>
              </li>
              <li className="dropdown">
                <Link href="products">{t('Products')}</Link>
                <ul>
                  <li>
                    <Link href="aliphatic-products">{t('Aliphatics')}</Link>
                  </li>
                  <li>
                    <Link href="aromatic-products">{t('Aromatics')}</Link>
                  </li>

                  <li>
                    <Link href="chemplex-products">{t('Chemplex')}</Link>
                  </li>
                  <li>
                    <Link href="trading-products">{t('Trading')}</Link>
                  </li>
                  <li>
                    <Link href="blended-products">{t('Blended')}</Link>
                  </li>
                </ul>
                <div className="dropdown-btn">
                  &nbsp;<span className="far fa-angle-down" />
                </div>
              </li>
              <li className="dropdown">
                <a>{t('Solutions')}</a>
                <ul>
                  <li>
                    <Link href="paint">{t('Paint')}</Link>
                  </li>
                  <li>
                    <Link href="adhesives">{t('Adhesives')}</Link>
                  </li>
                  <li>
                    <Link href="insecticides">{t('Insecticides and Pesticides')}</Link>
                  </li>
                  <li>
                    <Link href="ink">{t('Ink')}</Link>
                  </li>
                  <li>
                    <Link href="Water-Treatment">{t('Water Treatment')}</Link>
                  </li>
                  <li>
                    <Link href="tannery">{t('Tannery')}</Link>
                  </li>
                  <li>
                    <Link href="resins">{t('Resins')}</Link>
                  </li>
                  <li>
                    <Link href="Industrial-Cleaning">{t('Industrial Cleaning and Maintenance')}</Link>
                  </li>

                  <li>
                    <Link href="household-products">{t('Household Products')}</Link>
                  </li>
                  <li>
                    <Link href="fuel-additives">{t('Fuel Additives')}</Link>
                  </li>
                  <li>
                    <Link href="oil-fields">{t('Oil Fields Chemicals')}</Link>
                  </li>
                  <li>
                    <Link href="bitumen">{t('Bitumen Based Products')}</Link>
                  </li>
                </ul>
                <div className="dropdown-btn">
                  &nbsp;<span className="far fa-angle-down" />
                </div>
              </li>
              <li className="dropdown">
                <Link href="scm-marketing">{t('SCM & Marketing')}</Link>
              </li>
              <li className="dropdown">
                <Link href="careers">{t('Careers')}</Link>
              </li>
              <li className="dropdown">
                <Link href="contact">{t('Contact Us')}</Link>
              </li>

            </ul>
          )}
        </div>
      </div>
      <Accordion defaultActiveKey="0" className="d-block d-lg-none mobile-menu">
        <div className="navbar-header py-10">
          <div className="mobile-logo">
            <Link href="/">
              <img src={logo} alt="Logo" title="Logo"
                width={140}
              />
            </Link>
          </div>

          {/* Toggle Button */}
          <Accordion.Toggle
            as={"button"}
            className="navbar-toggle"
            eventKey="navbar-collapse"
          >
            <span className={`icon-bar ${dark ? "bg-dark" : ""}`} />
            <span className={`icon-bar ${dark ? "bg-dark" : ""}`} />
            <span className={`icon-bar ${dark ? "bg-dark" : ""}`} />
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          eventKey="navbar-collapse"
          className="navbar-collapse clearfix"
        >
          <MobileMenu onePage={onePage} menus={menus} />
        </Accordion.Collapse>
      </Accordion>
    </Fragment>
  );
};

const MobileMenu = ({ sidebar, onePage, menus }) => {
  //
  const { t } = useTranslation();
  //
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
    setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };

  return (
    <Fragment>
      {onePage ? (
        <ul
          className={`${sidebar ? "sidebar-menu" : "navigation"
            } onepage clearfix`}
        >
          {menus.map((menu) => (
            <li key={menu.id}>
              <a href={`#${menu.href}`}>{menu.title}</a>
            </li>
          ))}
        </ul>
      ) : (
        <ul className={`${sidebar ? "sidebar-menu" : "navigation"} clearfix`}>
          <li className="dropdown">
            <a href="/">{t('Home')}</a>
            <ul style={activeLi("home")}>
            </ul>
          </li>
          <li className="dropdown">
            <Link href="/about">{t('About Us')}</Link>
          </li>
          <li className="dropdown">
            <Link href="products">{t('Products')}</Link>
            <ul style={activeLi("Services")}>
              <li>
                <Link href="aliphatic-products">{t('- Aliphatics')}</Link>
              </li>
              <li>
                <Link href="aromatic-products">{t('- Aromatics')}</Link>
              </li>
              <li>
                <Link href="chemplex-products">{t('- Chemplex')}</Link>
              </li>
              <li>
                <Link href="trading-products">{t('- Trading')}</Link>
              </li>
              <li>
                <Link href="blended-products">{t('- Blended')}</Link>
              </li>
            </ul>
            <div
              className="dropdown-btn"
              onClick={() => activeMenuSet("Services")}
            >
              <span className="far fa-angle-down" />
            </div>
          </li>

          <li className="dropdown">
            <a>{t('Solutions')}</a>
            <ul style={activeLi("Solutions")}>
              <li>
                <Link href="paint">{t('Paints')}</Link>
              </li>
              <li>
                <Link href="adhesives">{t('Adhesives')}</Link>
              </li>
              <li>
                <Link href="insecticides">{t('Insecticides and Pesticides')}</Link>
              </li>
              <li>
                <Link href="ink">{t('Ink')}</Link>
              </li>
              <li>
                <Link href="Water-Treatment">{t('Water Treatment')}</Link>
              </li>
              <li>
                <Link href="tannery ">{t('Tannery')}</Link>
              </li>
              <li>
                <Link href="resins">{t('Resins')}</Link>
              </li>
              <li>
                <Link href="Industrial-Cleaning">{t('Industrial Cleaning & Maintenance')}</Link>
              </li>

              <li>
                <Link href="household-products">{t('Household Products')}</Link>
              </li>
              <li>
                <Link href="fuel-additives">{t('Fuel Additives')}</Link>
              </li>
              <li>
                <Link href="oil-fields">{t('Oil Field')}</Link>
              </li>
              <li>
                <Link href="bitumen">{t('Bitumen Based Products')}</Link>
              </li>
            </ul>
            <div className="dropdown-btn" onClick={() => activeMenuSet("Solutions")}>
              <span className="far fa-angle-down" />
            </div>
          </li>

          <li className="dropdown">
            <Link href="scm-marketing">{t('SCM & Marketing')}</Link>
          </li>
          <li className="dropdown">
            <Link href="careers">{t('Careers')}</Link>
          </li>
          <li className="dropdown">
            <Link href="contact">{t('Contact Us')}</Link>
          </li>

          <li className="dropdown">
            <div className="locales-mobile-btn">
              <i class="far fa fa-globe" ></i> AR
            </div>
          </li>
        </ul>
      )}
    </Fragment>

  );
};
