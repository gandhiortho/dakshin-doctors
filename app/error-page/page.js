import React from "react";
import LayoutContainer from "@/components/common/LayoutContainer";
import Breadcrumb from "@/components/common/Breadcrumb";
import Link from "next/link";

const ErrorPage = () => {
  const navbarStyle = 3;
  return (
    <LayoutContainer navbarStyle={navbarStyle}>
      <Breadcrumb
        style={3}
        title="404 Error"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "404 Error" }]}
      />
      <section className="page-404-area">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 text-center">
              <h2>404</h2>
              <p>
                MedDoctors Are A Medical And Health Department Provider
                Institutions. Suitable For Healthcare, Medical, Doctor, Dental,
                Dentist, Pharmacy, Health And Any Related Medical Care Field.
              </p>
              <Link href="/" className="btn-1">
                Go Back To Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </LayoutContainer>
  );
};

export default ErrorPage;
