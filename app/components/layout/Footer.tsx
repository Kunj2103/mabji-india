"use client";

import { useState } from "react";
import Link from "next/link";
import CountrySelectorModal from "../ui/country-selector-modal";

export default function Footer() {
  const [showCountrySelector, setShowCountrySelector] = useState(false);

  const footerLinks = {
    help: [
      { label: "HELP", href: "#" },
      { label: "MY PURCHASES", href: "#" },
      { label: "RETURNS", href: "#" },
    ],
    company: [
      { label: "COMPANY", href: "#" },
      { label: "WORK FOR MANGO", href: "#" },
      { label: "PRESS", href: "#" },
    ],
    outlet: [
      { label: "MANGO OUTLET", href: "#" },
      { label: "SITE MAP", href: "#" },
    ],
    responsibility: [
      { label: "RESPONSIBILITY", href: "#" },
      { label: "STORES", href: "#" },
    ],
  };

  const socialLinks = [
    { label: "INSTAGRAM", href: "#" },
    { label: "FACEBOOK", href: "#" },
    { label: "YOUTUBE", href: "#" },
    { label: "TIKTOK", href: "#" },
    { label: "SPOTIFY", href: "#" },
    { label: "PINTEREST", href: "#" },
    { label: "X", href: "#" },
    { label: "LINKEDIN", href: "#" },
  ];

  const legalLinks = [
    { label: "PRIVACY POLICY AND COOKIES", href: "#" },
    { label: "TERMS AND CONDITIONS", href: "#" },
    { label: "ETHICS CHANNEL", href: "#" },
  ];

  return (
    <footer className="bg-white">
      {/* Main Footer Links */}
      <div className="py-12">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setShowCountrySelector(true)}
              className="text-sm hover:opacity-70 flex items-center gap-2"
            >
              INDIA
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              {footerLinks.help.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-sm mb-3 hover:opacity-70"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div>
              {footerLinks.company.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-sm mb-3 hover:opacity-70"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div>
              {footerLinks.outlet.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-sm mb-3 hover:opacity-70"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div>
              {footerLinks.responsibility.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-sm mb-3 hover:opacity-70"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="py-8">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm hover:opacity-70"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="py-6">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div className="flex gap-6">
                {legalLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm hover:opacity-70"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="text-sm text-gray-600">
              © {new Date().getFullYear()} MABJI INDIA All rights reserved
            </div>
          </div>
        </div>
      </div>

      {/* Country Selector Modal */}
      <CountrySelectorModal
        isOpen={showCountrySelector}
        onClose={() => setShowCountrySelector(false)}
      />
    </footer>
  );
}
