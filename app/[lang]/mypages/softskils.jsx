import Link from "next/link";
import React from "react";
import { motion } from 'framer-motion';

export default function Softskils({ dict }) {
    return (
        <div>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
                <div className="p-4 rounded-xl bg-white/3 border border-white/6 backdrop-blur-sm">
                    <h3 className="font-semibold">{dict.softSkills.title}</h3>
                    <ul className="mt-3 text-sm space-y-2 text-white/85">
                        <li>• {dict.softSkills.skills[0]}</li>
                        <li>• {dict.softSkills.skills[1]}</li>
                        <li>• {dict.softSkills.skills[2]}</li>
                        <li>• {dict.softSkills.skills[3]}</li>
                        <li>• {dict.softSkills.skills[4]}</li>
                        <li>• {dict.softSkills.skills[5]}</li>
                        <li>• {dict.softSkills.skills[6]}</li>
                    </ul>
                </div>
            </motion.div>
        </div>
    )
}