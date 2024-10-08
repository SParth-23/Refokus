import React from "react";

function Work() {
  const images = [
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "37%",
      left: "50%",
      isActive: true,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "43%",
      left: "44%",
      isActive: true,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "36%",
      left: "38%",
      isActive: true,
    },
    {
      url: "https://cdn.myfonts.net/cdn-cgi/image/width=417,height=208,fit=contain,format=auto/images/pim/10000/iL8FVREgHeskbsF2GinWsUFq_fd48f23546437c1af8175fe7c0c20bb7.png",
      top: "43%",
      left: "43%",
      isActive: true,
    },
    {
      url: "https://cdn.prod.website-files.com/64621c0e5c577ed6395fff5c/64672fc94fc50fa4ab5082d2_Refukos-Showcase-og.webp",
      top: "40%",
      left: "35%",
      isActive: true,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvwFLMmY12BzjkaXIq9waFGsABPSRY6E7aSQ&s",
      top: "45%",
      left: "40%",
      isActive: true,
    },
  ];
  return (
    <div className="w-full">
      <div className="relative text-center max-w-screen-xl mx-auto">
        <h1 className="text-[27vw] leading-none font-medium select-none tracking-tight">
          Work
        </h1>
      </div>
      <div className="top-0 w-full h-full absolute">
        {images.map((elem, i) => (elem.isActive && ( <img
              className="absolute -translate-x-1/2 -translate-y-1/2 w-52 h-52 object-cover rounded-lg"
              src={elem.url}
              style={{ top: elem.top, left: elem.left }}
              alt=""
            />) )
        )}
      </div>
    </div>
  );
}

export default Work;
