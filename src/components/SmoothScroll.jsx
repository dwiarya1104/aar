import React, { useRef, useState, useCallback, useLayoutEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";
import {
  useViewportScroll,
  useTransform,
  useSpring,
  motion,
} from "framer-motion";

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);
  const [pageHeight, setPageHeight] = useState(0);

  const resizePageHeight = useCallback((entries) => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) =>
      resizePageHeight(entries)
    );
    if (scrollRef.current) resizeObserver.observe(scrollRef.current);
    return () => resizeObserver.disconnect();
  }, [resizePageHeight]);

  const { scrollY } = useViewportScroll();
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const spring = useSpring(transform, physics);

  return (
    <>
      {/* Scrollable container with fixed position for smooth scrolling */}
      <motion.div
        ref={scrollRef}
        style={{
          y: spring,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          overflow: "hidden",
        }}
        className="scroll-container"
      >
        {children}
      </motion.div>
      <div style={{ height: `${pageHeight}px` }} />
    </>
  );
};

export default SmoothScroll;
