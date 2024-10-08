import React from "react";

function Marquee({ imageURL }) {
  return (
    <div className=" overflow-hidden flex gap-10 py-5">
      {imageURL.map((url) => (
        <img className="h-7 w-20" src={url} alt="" />
      ))}
    </div>
  );
}

export default Marquee;
