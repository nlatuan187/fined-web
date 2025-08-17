"use client";
import React from "react";
import Hero from './landing/Hero';
import TrustedPartners from './landing/TrustedPartners';
import Features from './landing/Features';
import Services from './landing/Services';
import Projects from './landing/Projects';
import Experts from './landing/Experts';
import Contact from './landing/Contact';
import Footer from './landing/Footer';

function FinancialEducationWebsite() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
      />
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
        <Footer />
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
        body {
          font-family: 'Inter', sans-serif;
        }

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
