import styles from './Hero.module.scss';
import Link from 'next/link';
import ScrollCarousel from 'scroll-carousel-react';

const images = [
  '/images/backwardPoint.jpg',
  '/images/chadVanags.jpg',
  '/images/fridayGolfGuys.jpg',
  '/images/humzaAmin.jpg',
  '/images/kaziAkber.jpg',
  '/images/teaquilaFarm.jpeg',
  '/images/unchartedSpirits.jpg',
];

const HeroTalent = () => {
  return (
    <div className="flex flex-col m-10 my-20">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center md:text-7xl text-[10rem]">
          Our Amazing Talent
        </h1>
        <Link href="/talent">
          <button className={styles.button}>View All</button>
        </Link>
      </div>
      <>
        <ScrollCarousel
          autoplay
          autoplaySpeed={6}
          speed={3}
          onReady={() => console.log('I am ready')}>
          {images.map((imageUrl, index) => (
            <div key={index} className="rounded h-auto w-96 object-cover">
              <img src={imageUrl} alt="carousel item" />
            </div>
          ))}
        </ScrollCarousel>
      </>
    </div>
  );
};

export default HeroTalent;
