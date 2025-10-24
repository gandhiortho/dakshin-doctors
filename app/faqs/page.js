import Breadcrumb from "@/components/common/Breadcrumb";
import FAQs from "@/components/common/FAQs";
import LayoutContainer from "@/components/common/LayoutContainer";
import React from "react";
import { faqsData, faqsDataTwo } from "@/data/faqs";

const AboutPageTwo = () => {
  const navbarStyle = 2;
  return (
    <LayoutContainer navbarStyle={navbarStyle}>
      <Breadcrumb
        style={2}
        title="FAQs"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQs" }]}
      />
      <section className="faqs-page py-100-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <FAQs data={faqsData} />
            </div>
            <div className="col-lg-6">
              <FAQs data={faqsDataTwo} />
            </div>
          </div>
        </div>
      </section>
    </LayoutContainer>
  );
};

export default AboutPageTwo;
