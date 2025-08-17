"use client";
import React from "react";
import Hero from './landing/Hero';
import TrustedPartners from './landing/TrustedPartners';
import Features from './landing/Features';
import Services from './landing/Services';
import Projects from './landing/Projects';
import Experts from './landing/Experts';
import Contact from './landing/Contact';

function FinancialEducationWebsite() {
  return (
    <>
      {/* Header is now correctly placed inside Hero component */}
      <div className="main-container">
        <Hero />
        <TrustedPartners />
        <div className="divider"></div>
        <Features />
        <Services />
        <Projects />
        <Experts />
        <div className="divider"></div>
        <Contact />
        </div>

      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        html {
          scroll-behavior: smooth;
        }
        /* body font-family is now in Layout.jsx */

        .main-container {
          width: 100%;
          background-color: #FFF;
          overflow-x: hidden;
        }

        .divider {
          width: 100%;
          height: 1px;
          background-color: #CFD2DB;
        }
      `}</style>
    </>
  );
}

export default FinancialEducationWebsite;
