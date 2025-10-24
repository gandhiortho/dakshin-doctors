import About from "@/components/about/About";
import Blog from "@/components/blog/Blog";
import Breadcrumb from "@/components/common/Breadcrumb";
import LayoutContainer from "@/components/common/LayoutContainer";
import Features from "@/components/features/Features";
import Provide from "@/components/provide/Provide";
import Statistic from "@/components/statistic/Statistic";
import React from "react";

const AppointmentPage = () => {
  const navbarStyle = 1;
  return (
    <LayoutContainer navbarStyle={navbarStyle}>
      <Breadcrumb
        style={1}
        title="Appointment 1"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Appointment 1" }]}
      />
      <Features />
      <About />
      <Provide />
      <Statistic />
      <Blog />
    </LayoutContainer>
  );
};

export default AppointmentPage;
