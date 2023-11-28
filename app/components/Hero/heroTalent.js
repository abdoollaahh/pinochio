import { useEffect, useRef } from "react";
import "./herotalent.css";

const HeroTalent = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;

    const handleOnDown = (e) => (track.dataset.mouseDownAt = e.clientX);
    const handleOnUp = () => {
      track.dataset.mouseDownAt = "0";
      track.dataset.prevPercentage = track.dataset.percentage;
    };
    const handleOnMove = (e) => {
      if (track.dataset.mouseDownAt === "0") return;

      const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

      const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained =
          parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(
          Math.min(nextPercentageUnconstrained, 0),
          -100
        );

      track.dataset.percentage = nextPercentage;

      track.animate(
        {
          transform: `translate(${nextPercentage}%, 0%)`,
        },
        { duration: 1200, fill: "forwards" }
      );

      for (const image of track.getElementsByClassName("image")) {
        image.animate(
          {
            objectPosition: `${100 + nextPercentage}% center`,
          },
          { duration: 1200, fill: "forwards" }
        );
      }
    };

    window.addEventListener("mousedown", handleOnDown);
    window.addEventListener("touchstart", (e) => handleOnDown(e.touches[0]));
    window.addEventListener("mouseup", handleOnUp);
    window.addEventListener("touchend", (e) => handleOnUp(e.touches[0]));
    window.addEventListener("mousemove", handleOnMove);
    window.addEventListener("touchmove", (e) => handleOnMove(e.touches[0]));

    return () => {
      // Cleanup event listeners on component unmount
      window.removeEventListener("mousedown", handleOnDown);
      window.removeEventListener("touchstart", (e) =>
        handleOnDown(e.touches[0])
      );
      window.removeEventListener("mouseup", handleOnUp);
      window.removeEventListener("touchend", (e) => handleOnUp(e.touches[0]));
      window.removeEventListener("mousemove", handleOnMove);
      window.removeEventListener("touchmove", (e) =>
        handleOnMove(e.touches[0])
      );
    };
  }, []); // Run the effect only once after mounting

  return (
    <div className="img flex flex-row">
      <h1 className="basis-1/3 text-center text-7xl">Our Amazing Talent</h1>
      <div
        className="basis-2/3 bg-white"
        id="image-track"
        ref={trackRef}
        data-mouse-down-at="0"
        data-prev-percentage="0"
      >
        <img
          className="image"
          src="./images/videoEditing.jpeg"
          draggable="false"
        />
        <img
          className="image"
          src="https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          draggable="false"
        />
        <img
          className="image"
          src="https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          draggable="false"
        />
        <img
          className="image"
          src="https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          draggable="false"
        />
        <img
          className="image"
          src="https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80"
          draggable="false"
        />
        <img
          className="image"
          src="https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80"
          draggable="false"
        />
        <img
          className="image"
          src="https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          draggable="false"
        />
      </div>
    </div>
  );
};

export default HeroTalent;
