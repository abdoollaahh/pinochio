import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { animateTitle, animateImage, revealMenu } from './animation';
import styles from './Talent.module.scss';
import Nav from '../Nav/Nav';
import ItemTalentCard from './talent';
import data from './talentDb';
import Footer from '../Footer/footer';

const Talent = () => {
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
    <div
      ref={heroRef}
      className="bg-[url('/images/talentBG.png')] bg-auto bg-no-repeat">
      <div className={styles.content}>
        <div>
          <div className={styles.hero}>
            <div style={{ position: 'relative' }}>
              <h1 className={styles.hero__title}>
                <span data-title-first>
                  The{' '}
                  <span className="bg-gradient-to-r from-purple-800 via-violet-700 to-pink-500 bg-clip-text text-transparent">
                    {' '}
                    Penochio
                  </span>{' '}
                  Talent
                </span>
              </h1>
              <p className="text-center md:text-5xl">
                Here are some of the creators we have worked with
              </p>
              <img
                data-title-first
                src="/images/undraw_heart.svg"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 1400,
                  width: '50px',
                  height: '50px',
                }}
                alt="Description of Image"
              />
            </div>
          </div>
        </div>
        <div className="z-10">
          <Nav />
        </div>
      </div>
      <div>
        <div
          data-title-last
          className=" flex flex-row flex-wrap justify-center p-20">
          {data.map((item, index) => (
            <ItemTalentCard
              key={index}
              title={item.title}
              image={item.image}
              description={item.description}
              url={item.url}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Talent;
