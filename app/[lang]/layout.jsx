import TranslateButton from "../translateButton.jsx";
import React from "react";
import Particles from "@/components/ParticlesBackground";


export default function RootLayout({ children, params }) {
    return (
        <div className="min-h-screen relative overflow-x-hidden">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <Particles
                    particleColors={["4F39F6"]}
                    particleCount={400}
                    particleSpread={5}
                    speed={0.1}
                    particleBaseSize={80}
                    moveParticlesOnHover
                    alphaParticles={false}
                    disableRotation={false}
                    pixelRatio={1}
                    className="pointer-events-auto"
                />
            </div>

            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50">
                <TranslateButton lang={params.lang} />
            </div>

            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}