import React from "react";
import ItemGallery from "./ItemGallery";
import { galleryData } from "@/data/gallery";
import SecTitle from "../common/SecTitle";

const Gallery = () => {
  return (
    <div className="gallery py-100-70">
      <div className="container">
        <SecTitle
          title={galleryData.title}
          subTitle={galleryData.subtitle}
          description={galleryData.description}
          button={galleryData.button}
        />
        <div className="row">
          {galleryData.gallery_items.map((item, index) => (
            <div key={item.title} className="col-md-6 col-lg-4">
              <ItemGallery data={item} delay={`${0.3 + index * 0.1}s`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
