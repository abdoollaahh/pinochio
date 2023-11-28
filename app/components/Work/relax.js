import { useState, useEffect } from "react";
import "./styles.css";

const Relax = () => {
  const combinations = [
    { configuration: 1, roundness: 1 },
    { configuration: 1, roundness: 2 },
    { configuration: 1, roundness: 3 },
    { configuration: 1, roundness: 4 },
    { configuration: 2, roundness: 2 },
    { configuration: 2, roundness: 3 },
  ];

  const [combination, setCombination] = useState(combinations[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * combinations.length);
      setCombination(combinations[randomIndex]);
    }, 5000);

    return () => clearInterval(interval); // Clean up on unmount
  }, [combinations]);
  return (
    <div
      id="wrapper"
      data-configuration={combination.configuration}
      data-roundness={combination.roundness}
    >
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
    </div>
  );
};

export default Relax;
