import styles from "./Hero.module.scss";

const HeroWork = () => {
  return (
    <div style={{ height: "50vh" }} className="m-20 flex flex-row">
      <div className="flex w-screen flex-row">
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <div className="flex flex-col items-center justify-center">
              <h2>Trailers</h2>
              <button className={styles.button}>All Work</button>
            </div>
          </div>
        </div>
        <div className="mx-8 flex flex-row items-center justify-center text-center">
          <h2>Place holder Text about work</h2>
        </div>
      </div>
    </div>
  );
};

export default HeroWork;
