import React from "react";
import Product from "./product";

function Products() {
  var prod = [
    {
      title: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: false,
    },
    {
      title: "BCG Platinion",
      description:
        "We redesigned BCG Platinion's website to be sophisticated and technology-driven, incorporating powerful animations and interactions while maintaining the core elements of its brand.",
      live: true,
      case: false,
    },
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel's approach and show how migration data translates into real estate",
      live: true,
      case: false,
    },
  ];

  return (
    <div>
      {prod.map((val, i) => {
        return <Product key={i} val={val} />;
      })}
    </div>
  );
}

export default Products;
