import React, { useEffect, useRef } from "react";

const MyBlob = () => {
  const blobRef = useRef();

  useEffect(() => {
    document.body.onpointermove = (event) => {
      const { clientX, clientY } = event;
      if (blobRef.current) {
        blobRef.current.animate(
          { left: `${clientX}px`, top: `${clientY}px` },
          { duration: 3000, fill: "forwards" }
        );
      }
    };
  });
  return (
    <div>
      <div id="blob" ref={blobRef}></div>
    </div>
  );
};

export default MyBlob;
