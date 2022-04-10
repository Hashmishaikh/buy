import React from "react";
import ItemCard from "./ItemCard";
import data from "./data";

const Home = () => {
  console.log("datass", data.productData);
  return (
    <>
      <h1 className="text-center mt-3">All Items</h1>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {data.productData.map((item, index) => {
            return (
              <ItemCard
                title={item.title}
                desc={item.decs}
                img={item.img}
                price={item.price}
                key={index}
                item={item}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
