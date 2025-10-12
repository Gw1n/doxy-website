import React from "react";
import { motion } from 'framer-motion';
import Link from "next/link";

export default function Etc({ dict }) {
    const githubUrl = 'https://github.com/Gw1n';

    return (
        <div>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white/3 border border-white/6 backdrop-blur-sm">
                        <h3 className="font-semibold">{dict.etc.tools.title}</h3>
                        <ul className="mt-3 text-sm space-y-2 text-white/85">
                            <li>• {dict.etc.tools.skills[0]}</li>
                            <li>• {dict.etc.tools.skills[1]}</li>
                            <li>• {dict.etc.tools.skills[2]}</li>
                            <li>• {dict.etc.tools.skills[3]}</li>
                            <li>• {dict.etc.tools.skills[4]}</li>
                        </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-white/3 border border-white/6 backdrop-blur-sm">
                        <h3 className="font-semibold">{dict.etc.activities.title}</h3>
                        <ul className="mt-3 text-sm space-y-2 text-white/85">
                            <li>• {dict.etc.activities.tasks[0]}</li>
                            <li>• {dict.etc.activities.tasks[1]}</li>
                            <li>• {dict.etc.activities.tasks[2]}</li>
                            <li>• {dict.etc.activities.tasks[3]}</li>
                            <li>• {dict.etc.activities.tasks[4]}</li>
                        </ul>
                    </div>
                </div>

            </motion.div>
        </div>
    )
}