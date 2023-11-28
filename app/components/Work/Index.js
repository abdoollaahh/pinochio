import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { animateTitle, animateImage, revealMenu } from "./animations";
import styles from "./Work.module.scss";
import Nav from "../Nav/Nav";
import WorkCard from "./workCard";
import Footer from "../Footer/footer";
import Relax from "./relax";

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
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="mx-20 flex flex-col">
            <h1>Our Work</h1>
            <p className="text-center text-6xl">Over 400 Million Views</p>
          </div>
          <Relax />
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
