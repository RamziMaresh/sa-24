"use client";
import { safraUtility } from "../utility";
import { Fragment, useEffect } from "react";
import niceSelect from "react-nice-select";
import Footer from "./Footer";
import Header from "./Header";
//
import "./i18next";
import '@emailjs/browser';

const SafraLayout = ({ children, header, footer, bodyClass, onePage }) => {
  useEffect(() => {
    safraUtility.animation();
    safraUtility.fixedHeader();
  });

  useEffect(() => {
    niceSelect();
    document.querySelector("body").classList = bodyClass;
  }, []);

  return (
    <Fragment>
      <div className="page-wrapper">

        <Header header={header} onePage={onePage} />
        {children}
        <Footer footer={footer} />
      </div>
    </Fragment>
  );
};


export default SafraLayout;
