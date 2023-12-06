import { useEffect, useRef } from 'react';
import './herotalent.css';
import styles from './Hero.module.scss';
import Link from 'next/link';

const HeroTalent = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;

    const handleOnDown = (e) => (track.dataset.mouseDownAt = e.clientX);
    const handleOnUp = () => {
      track.dataset.mouseDownAt = '0';
      track.dataset.prevPercentage = track.dataset.percentage;
    };
    const handleOnMove = (e) => {
      if (track.dataset.mouseDownAt === '0') return;

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
        { duration: 1200, fill: 'forwards' }
      );

      for (const image of track.getElementsByClassName('image')) {
        image.animate(
          {
            objectPosition: `${100 + nextPercentage}% center`,
          },
          { duration: 1200, fill: 'forwards' }
        );
      }
    };

    window.addEventListener('mousedown', handleOnDown);
    window.addEventListener('touchstart', (e) => handleOnDown(e.touches[0]));
    window.addEventListener('mouseup', handleOnUp);
    window.addEventListener('touchend', (e) => handleOnUp(e.touches[0]));
    window.addEventListener('mousemove', handleOnMove);
    window.addEventListener('touchmove', (e) => handleOnMove(e.touches[0]));

    return () => {
      // Cleanup event listeners on component unmount
      window.removeEventListener('mousedown', handleOnDown);
      window.removeEventListener('touchstart', (e) =>
        handleOnDown(e.touches[0])
      );
      window.removeEventListener('mouseup', handleOnUp);
      window.removeEventListener('touchend', (e) => handleOnUp(e.touches[0]));
      window.removeEventListener('mousemove', handleOnMove);
      window.removeEventListener('touchmove', (e) =>
        handleOnMove(e.touches[0])
      );
    };
  }, []); // Run the effect only once after mounting

  return (
    <div className="img flex flex-row">
      <div className="flex flex-col m-24 justify-center items-center">
        <h1 className="basis-1/3 text-center text-7xl">Our Amazing Talent</h1>
        <Link href="/talent">
          <button className={styles.button}>View All</button>
        </Link>
      </div>
      <div
        className="basis-2/3 bg-white"
        id="image-track"
        ref={trackRef}
        data-mouse-down-at="0"
        data-prev-percentage="0">
        <img className="image" src="./images/wide5.jpg" draggable="false" />
        <img className="image" src="./images/wide4.jpg" draggable="false" />
        <img className="image" src="./images/wide2.jpg" draggable="false" />
        <img className="image" src="./images/wide1.jpg" draggable="false" />
        <img className="image" src="./images/wide3.jpg" draggable="false" />
        <img className="image" src="./images/wide5.jpg" draggable="false" />
      </div>
    </div>
  );
};

export default HeroTalent;
