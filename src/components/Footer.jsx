import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-12 md:flex-row md:justify-between">
      <div className="font-Lato">
        <ul className="flex gap-6 text-gray-400">
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
        </ul>
      </div>
      <div className="flex gap-2">
        <img
          src="../hostinger-waitlist/public/Assets/Help Avatar.svg"
          alt="Help-Avatar"
        />
        <div>
          <p className="font-Playfair">Have any Questions?</p>
          <a href="#" className="font-Lato font-medium">
            Talk to a specialist
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
