import React from "react";
import LayoutContainer from "@/components/common/LayoutContainer";
import Breadcrumb from "@/components/common/Breadcrumb";
import PaginationArea from "@/components/common/PaginationArea";
import Widget from "@/components/widget/Widget";
import { blogData } from "@/data/blog";
import ItemBlog from "@/components/blog/ItemBlog";

const BlogPageThree = ({ searchParams }) => {
  const navbarStyle = 1;
  return (
    <LayoutContainer navbarStyle={navbarStyle}>
      <Breadcrumb
        style={1}
        title="Blog 3"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog 3" }]}
      />
      <section className="blog py-100-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                {Array(2)
                  .fill()
                  .flatMap((_, repeatIndex) =>
                    blogData.blogs.map((item, itemIndex) => (
                      <div
                        key={`${repeatIndex}-${item.title}-${itemIndex}`}
                        className="col-md-12"
                      >
                        <ItemBlog data={item} />
                      </div>
                    ))
                  )}
              </div>
              <div className="row">
                <div className="col">
                  <PaginationArea searchParams={searchParams} />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar-blog ml-20">
                <Widget style="search" />
                <Widget style="instagram" data={blogData.widgets} />
                <Widget style="categories" data={blogData.widgets} />
                <Widget style="follow" data={blogData.widgets} />
                <Widget style="blogs" data={blogData} />
                <Widget style="tags" data={blogData.widgets} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutContainer>
  );
};

export default BlogPageThree;
