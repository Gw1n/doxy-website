import TranslateButton from "../translateButton.jsx";
import React from "react";


export default function RootLayout({ children, params }) {
    return (
        <div className="bg-bg-main min-h-screen relative overflow-x-hidden">

            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50">
                <TranslateButton lang={params.lang} />
            </div>

            {children}
        </div>
    );
}