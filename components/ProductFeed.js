import React from "react";
import { Product } from "./Product";

export const ProductFeed = ({ products }) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-60  ">
      {products.slice(0, 4).map(({ id, title, price, category, description, image }) => {
        return (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            category={category}
            description={description}
            image={image}
          />
        );
      })}
      <img className="md:col-span-full" src="https://links.papareact.com/dyz" alt="" />
      <div className="md:col-span-2">
        {products.slice(4, 5).map(({ id, title, price, category, description, image }) => {
          return (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              category={category}
              description={description}
              image={image}
            />
          );
        })}
      </div>
      {products.slice(5).map(({ id, title, price, category, description, image }) => {
        return (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            category={category}
            description={description}
            image={image}
          />
        );
      })}
    </div>
  );
};
