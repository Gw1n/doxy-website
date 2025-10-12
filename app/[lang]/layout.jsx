import '../globals.css';

import TranslateButton from "@/app/translateButton";

export default function RootLayout({ children, params }) {
    return (
        <div className="bg-gradient-to-b from-purple-900 to-blue-800 min-h-screen">
            <div className="w-full flex flex-row items-start">
                <div className="flex-1"></div>
                <div className="flex-shrink-0">
                    {children}
                </div>
                <div className="flex-1 flex justify-end pt-6 pr-6">
                    <TranslateButton lang={params.lang} />
                </div>
            </div>
        </div>
    )
}