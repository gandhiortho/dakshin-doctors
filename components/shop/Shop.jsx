import React from "react";
import { shopData } from "@/data/shop";
import ItemShop from "./ItemShop";

const Shop = () => {
  return (
    <section className="shop-page py-100-70">
      <div className="container">
        <div className="row">
          {shopData.map((item, index) => (
            <div key={`shop-${index}`} className="col-md-6 col-lg-4">
              <ItemShop data={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
