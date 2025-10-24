import React from "react";
import { shopDetailsData } from "@/data/shop";
import Widget from "../widget/Widget";
import UpdateItemShop from "./UpdateItemShop";
import TabShop from "./TabShop";

const ShopDetails = () => {
  return (
    <section className="products-details py-100-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="sidebar-blog mr-20">
              <Widget style="search" />
              <Widget style="instagram" data={shopDetailsData.widgets} />
              <Widget style="categories" data={shopDetailsData.widgets} />
              <Widget style="follow" data={shopDetailsData.widgets} />
              <Widget style="tags" data={shopDetailsData.widgets} />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="products-details-content">
              <div className="row">
                <div className="col-md-6">
                  <div
                    className="img-box"
                    style={{
                      backgroundImage: `url(${shopDetailsData.image})`,
                    }}
                  ></div>
                </div>
                <div className="col-md-6">
                  <div className="text-box">
                    <h3 className="title-product">{shopDetailsData.name}</h3>
                    <div className="item-price">${shopDetailsData.price}</div>
                    <p className="item-explain">
                      {shopDetailsData.description}
                    </p>
                    <UpdateItemShop />
                    <ul className="list-details">
                      {shopDetailsData.details.sku && (
                        <li>
                          SKU : <span>{shopDetailsData.details.sku}</span>
                        </li>
                      )}
                      {shopDetailsData.details.category && (
                        <li>
                          Category :
                          <span>{shopDetailsData.details.category}</span>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
              <TabShop />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopDetails;
