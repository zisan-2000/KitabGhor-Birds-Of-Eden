// src/components/Footer.jsx
import React from "react";
import Features from "./Features";
import FooterContact from "./FooterContact";
import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";
import LowerFooter from "./LowerFooter";

const footerLinksData = [
  {
    title: "LINKS",
    links: [
      { name: "Book Category", path: "/book-category" },
      { name: "Writers", path: "/writers" },
      { name: "Publication List", path: "/publication-list" },
      { name: "Stationary Items", path: "/stationary-items" },
      { name: "Islamic Items", path: "/islamic-items" },
      { name: "Corporate Sale", path: "/corporate-sale" },
      { name: "Writer/Publisher", path: "/writer-publisher" },
      { name: "Pre Order", path: "/pre-order" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { name: "About Us", path: "/about-us" },
      { name: "Delivery", path: "/delivery" },
      {
        name: "Return, Refund & Cancellation",
        path: "/return-refund-cancellation",
      },
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms of Conditions", path: "/terms-conditions" },
    ],
  },
  {
    title: "MY ACCOUNT",
    links: [
      { name: "Sign In / Register", path: "/sign-in-register" },
      { name: "Order History", path: "/order-history" },
      { name: "My Favorite Lists", path: "/favorite-lists" },
      { name: "My Wishlist", path: "/wishlist" },
    ],
  },
  {
    title: "CUSTOMER SUPPORT",
    links: [
      { name: "Order Track", path: "/order-track" },
      { name: "Contact Us", path: "/contact-us" },
      { name: "How to Shop", path: "/how-to-shop" },
      { name: "FAQ", path: "/faq" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-pink-100 py-8">
      <Features />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-5">
        <FooterContact />
        {footerLinksData.map((section, index) => (
          <FooterLinks
            key={index}
            title={section.title}
            links={section.links}
          />
        ))}

        <FooterSocial />
      </div>
      <LowerFooter />
    </footer>
  );
};

export default Footer;
