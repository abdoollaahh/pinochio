import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './Hero.module.scss';
import { animateTitle } from './animations';
import Nav from '../Nav/Nav';
import HeroContent from './heroContent';
import Footer from '../Footer/footer';
import MyBlob from './blob';
import HeroTestimonials from './heroTestimonials';
import Link from 'next/link';
import HeroTalent from './heroTalent';

const Hero = () => {
  const timeline = useRef(gsap.timeline());
  const heroRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timeline.current;

      tl.add(animateTitle());
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <div>
      <div>
        <div>
          <MyBlob />
          <Nav />
          <section className={styles.hero} ref={heroRef}>
            <p className="text-4xl m-4 p-4 font-semibold">Penochio Studios</p>
            <div className="flex flex-col justify-center items-center h-full">
              <h1 className={styles.hero__title}>
                We create{' '}
                <span className="bg-gradient-to-r from-purple-800 via-violet-700 to-pink-500 bg-clip-text font-medium text-transparent">
                  videos{' '}
                </span>
                {'  '}
                that you can monetize{' '}
              </h1>
              <div data-menu-item className="flex flex-col justify-center">
                <h2 className={styles.hero__title__content}>
                  We are your all in one video editing support, just press
                  record and leave the rest to us!
                </h2>
                <div className="flex items-center justify-center">
                  <Link href="/contact">
                    <button className={styles.button}>I am Interested</button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
        <HeroContent />
        <HeroTalent />
        <HeroTestimonials />
      </div>
      <Footer />
    </div>
  );
};

export default Hero;
