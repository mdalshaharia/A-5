import React from "react";
import logo from "../../assets/logo-text.png";

const productLinks = ["Home", "Technologies", "Projects"];
const companyLinks = ["About", "Contact", "Careers"];
const legalLinks = ["Privacy Policy", "Terms of Service"];

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="text-xs font-bold uppercase text-gray-900">
        {title}
      </h4>
      <ul className="mt-4 space-y-3">
        {links.map((link, idx) => (
          <li key={idx}>
            <a
              href="#"
              className="text-sm text-gray-500 transition-colors hover:text-gray-900"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

          <div>
             <img src={logo} className="h-8" />
            <p className="mt-4 max-w-xs text-sm text-gray-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-5 flex items-center gap-5">
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900" >Github  </a>
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900" >Twitter  </a>
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900" >LinkdIn </a>
            </div>
          </div>

          <FooterColumn title="Product" links={productLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Legal" links={legalLinks} />
        </div>

        <div className="mt-12 flex flex-row justify-between gap-4 border-t border-gray-100 pt-6">
          <p className="text-xs text-gray-400">
            © 2026 Dev Stack. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-xs text-gray-400">
              Privacy
            </a>
            <a href="#" className="text-xs text-gray-400">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}