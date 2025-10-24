import Breadcrumb from "@/components/common/Breadcrumb";
import LayoutContainer from "@/components/common/LayoutContainer";
import PaginationArea from "@/components/common/PaginationArea";
import SecTitle from "@/components/common/SecTitle";
import React from "react";
import { blogData } from "@/data/blog";
import ItemBlog from "@/components/blog/ItemBlog";

const BlogPage = ({ searchParams }) => {
  const navbarStyle = 2;
  return (
    <LayoutContainer navbarStyle={navbarStyle}>
      <Breadcrumb
        style={2}
        title="Blog 1"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog 1" }]}
      />
      <section className="blog py-100-70">
        <div className="container">
          <SecTitle
            title="Read All News"
            subTitle="Recent News"
            description="MedDoctors Are A Medical And Health Department Provider Institutions. Suitable For Healthcare, Medical, Doctor, Dental, Dentist, Pharmacy, Health And Any Related Medical Care Field."
          />
          {blogData.blogs && (
            <>
              <div className="row">
                {Array(3).fill().flatMap((_, repeatIndex) =>
                  blogData.blogs.map((item, itemIndex) => (
                    <div
                      key={`${repeatIndex}-${item.title}-${itemIndex}`}
                      className="col-md-6 col-lg-4"
                    >
                      <ItemBlog data={item} />
                    </div>
                  ))
                )}
              </div>
            </>
          )}
          <div className="row">
            <div className="col">
              <PaginationArea searchParams={searchParams} />
            </div>
          </div>
        </div>
      </section>
    </LayoutContainer>
  );
};

export default BlogPage;
