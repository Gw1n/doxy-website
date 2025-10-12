import Link from "next/link";
import React from "react";
import { motion } from 'framer-motion';

export default function Info ({ dict }) {
    return (
        <div>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
                <p className="mt-3 text-xl text-white/85">
                    {dict.aboutMe.description}
                </p>
            </motion.div>
        </div>
    )
}