import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Card() {
  return (
    <div className="mx-40 p-5 gap-3 flex">
      <div className="w-2/5 bg-zinc-700 p-5 rounded-lg">
        <div className="flex justify-between">
          <h3 className="text-sm">Up next: Culture</h3>
          <FaArrowRightLong />
        </div>
        <h2 className="pt-6 font- text-2xl">Who we are</h2>
      </div>
      <div className="w-3/5 bg-zinc-600 p-5 rounded-lg">
        <div className="flex justify-between">
          <h3 className="text-sm">Get in Touch</h3>
          <FaArrowRightLong />
        </div>
        <h2 className="pt-6 font- text-2xl">
          Let's get to it,
          <br /> together.
        </h2>
      </div>
    </div>
  );
}

export default Card;