import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { animateTitle, animateImage, revealMenu } from './animations';
import styles from './Work.module.scss';
import Nav from '../Nav/Nav';
import WorkCard from './workCard';
import Footer from '../Footer/footer';
import MyBlob from '../Hero/blob';

const Work = () => {
  const timeline = useRef(gsap.timeline());
  const heroRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timeline.current;

      tl.add(animateTitle()).add(revealMenu(), 0).add(animateImage(), 0);
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <div>
      <MyBlob />
      <section className={styles.hero} ref={heroRef}>
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="mx-20 flex flex-col">
            <p className="text-9xl">
              <span className="bg-gradient-to-r from-purple-700 to-pink-500 bg-clip-text text-transparent">
                400+
              </span>{' '}
              Million Views Generated
            </p>
            <p className="text-5xl text-center mt-8">View some of our Work</p>
          </div>
        </div>
      </section>
      <div>
        <WorkCard />
      </div>
      <Nav />
      <Footer />
    </div>
  );
};

export default Work;
