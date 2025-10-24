import Link from "next/link";
import React from "react";

const CopyrightFooter = () => {
  return (
    <div className="copyright">
      <div className="container">
        <p className="wow fadeInUp" data-wow-delay="0.3s">
          @ 2025 MedDoctors. With Love by
          <Link href="https://themeforest.net/user/ar-coder/portfolio">
            AR-Coder
          </Link>
        </p>
        <ul className="wow fadeInUp" data-wow-delay="0.5s">
          <li>
            <Link href="#">Terms &amp; Conditions </Link>
          </li>
          <li>
            <Link href="#">Privacy Policy</Link>
          </li>
          <li>
            <Link href="#">Sitemap</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CopyrightFooter;
