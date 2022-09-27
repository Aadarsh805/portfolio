import { useState, useEffect } from "react";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX + window.pageXOffset,
        y: e.clientY + window.pageYOffset,
      });
    };

    window.addEventListener("mousemove", mouseMove);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 15,
      y: mousePosition.y - 5,
    },
    text: {
      height: 60,
      width: 60,
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />

      <Component
        {...pageProps}
        setCursorVariant={setCursorVariant}
        textEnter={textEnter}
        textLeave={textLeave}
      />
    </>
  );
}

export default MyApp;
