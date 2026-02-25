"use client";
import { useEffect, useRef } from "react";

export default function VantaBackground() {
  const vantaRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && vantaRef.current) {
      // Dynamically import THREE
      import("three").then((THREE) => {
        window.THREE = THREE;
        
        // Import and initialize VANTA
        import("../Utils/vanta.net.min.js").then(() => {
          if (window.VANTA && window.VANTA.NET) {
            window.VANTA.NET({
              el: vantaRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: true,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              color: 0x3ffffc,
              backgroundColor: 0x0
            });
          }
        });
      });
    }
  }, []);

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 z-0 opacity-5"
      style={{ pointerEvents: "none" }}
    />
  );
}