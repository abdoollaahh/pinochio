import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Hero.module.scss";
import { animateTitle } from "./animations";
import Nav from "../Nav/Nav";
import HeroContent from "./heroContent";
import Footer from "../Footer/footer";
import MyBlob from "./blob";
import HeroTestimonials from "./heroTestimonials";
import Link from "next/link";
import HeroTalent from "./heroTalent";

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
            <h1 className={styles.hero__title}>
              <span data-title-first>Penochio </span>
              <span data-title-first>Studios</span>
            </h1>
            <div data-menu-item className="flex flex-col justify-center">
              <h2 className={styles.hero__title__content}>
                we help you build{" "}
                <span className="bg-gradient-to-r from-purple-800 via-violet-700 to-pink-500 bg-clip-text font-medium text-transparent">
                  monetizable
                </span>
                {"  "}
                audience on Social Media
              </h2>
              <div className="flex items-center justify-center">
                <Link href="/contact">
                  <button className={styles.button}>I am Interested</button>
                </Link>
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
