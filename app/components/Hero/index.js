import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './Hero.module.scss';
import { animateTitle } from './animations';
import Nav from '../Nav/Nav';
import HeroContent from './heroContent';
import Footer from '../Footer/footer';
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
          <Nav />
          <section className={styles.hero} ref={heroRef}>
            <p className="text-4xl m-4 p-4 font-semibold z-10 drop-shadow-3xl text-white/70">
              Penochio Studios
            </p>
            <video
              src={'/videos/heroVideo.mp4'}
              type="video/mp4"
              className="absolute object-cover w-full h-full"
              autoPlay
              loop
              muted
            />
            <div className="text-white/70 flex flex-col justify-center items-center h-full drop-shadow-3xl">
              <h1 className={styles.hero__title}>
                We create{' '}
                <span className="bg-gradient-to-r from-purple-700 to-pink-500 bg-clip-text text-transparent">
                  videos
                </span>{' '}
                that you can monetize
              </h1>
              <div data-menu-item className="flex flex-col justify-center">
                <h2 className="text-8xl md:text-5xl text-center p-10 md:p-4">
                  We are your all in one video editing support, just press
                  record and leave the rest to us!
                </h2>
                <div className="flex items-center justify-center">
                  <Link href="/contact">
                    <button className={styles.heroButton}>
                      I am Interested
                    </button>
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
