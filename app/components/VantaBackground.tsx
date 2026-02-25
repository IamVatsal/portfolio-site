'use client';
import { useEffect, useRef } from 'react';

export default function VantaBackground() {
    const vantaRef = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && vantaRef.current) {
            // Dynamically import THREE
            import('three').then((THREE) => {
                (window as any).THREE = THREE;

                // Import and initialize VANTA
                import('../Utils/vanta.net.min.js').then(() => {
                    if ((window as any).VANTA && (window as any).VANTA.NET) {
                        (window as any).VANTA.NET({
                            el: vantaRef.current,
                            mouseControls: true,
                            touchControls: true,
                            gyroControls: true,
                            minHeight: 200.0,
                            minWidth: 200.0,
                            scale: 1.0,
                            scaleMobile: 1.0,
                            color: 0x3ffffc,
                            backgroundColor: 0x0,
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
            style={{ pointerEvents: 'none' }}
        />
    );
}
