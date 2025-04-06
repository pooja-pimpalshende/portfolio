import { useEffect, useState } from "react";
import styles from "./Aurora.module.css";

const AuroraBg = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={styles.aurorabg}
      style={{
        backgroundPosition: `${position.x}% ${position.y}%`,
      }}
    />
  );
};

export default AuroraBg;
