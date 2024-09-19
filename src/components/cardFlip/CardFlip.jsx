import { useState } from "react";
import { motion } from "framer-motion";
import "./index.css"; // Archivo de estilos

const CardFlip = ({ title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card-container" onClick={handleClick}>
      <motion.div
        className={`card ${isFlipped ? "flipped" : ""}`}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="card-face card-front">
          <h2>{title}</h2>
        </div>
        <div className="card-face card-back">
          <p>{description}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default CardFlip;
