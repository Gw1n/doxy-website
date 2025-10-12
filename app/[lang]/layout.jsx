import '../globals.css';

import TranslateButton from "@/app/translateButton";

export default function RootLayout({ children, params }) {
    return (
        <div className="bg-gradient-to-b from-purple-900 to-blue-800 min-h-screen relative overflow-x-hidden">

            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50">
                <TranslateButton lang={params.lang} />
            </div>

            <main className="min-h-screen w-full flex items-center justify-center">
                {children}
            </main>

        </div>
    )
}