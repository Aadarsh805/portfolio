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
    console.log(mousePosition);

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 50,
      width: 50,
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      backgroundColor: "#fff",
      border: "0",
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
