import React, { useState, useEffect } from "react";
import '../componentes/TypingEffect.css'

const TypingEffect = ({ text = "", speed = 100, className = "", tag = "p" }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!text) {
      setDisplayedText("");
      return;
    }

    let index = 0;

    const type = () => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index < text.length) {
        setTimeout(type, speed);
      }
    };

    setDisplayedText("");
    type();
  }, [text, speed]);

  const Tag = tag; // guardamos el tag dinámico

  return <Tag className={className}>{displayedText}</Tag>;
};

export default TypingEffect;





