import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { animateTitle, animateImage, revealMenu } from "./animations";
import styles from "./Work.module.scss";
import Nav from "../Nav/Nav";

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
      <section className={styles.hero} ref={heroRef}>
        <h1 className={styles.hero__title}>
          <span data-hidden data-title-first>
            Our Work
          </span>
        </h1>
      </section>
      <Nav />
    </div>
  );
};

export default Work;
