import Link from "next/link";
import React from "react";
import { motion } from 'framer-motion';


export default function Skills ({ dict }) {
    const linkedinUrl = 'https://www.linkedin.com/in/mikhail-orekhov-0bbbba358/';
    const githubUrl = 'https://github.com/Gw1n';
    const resumeUrl = '/resume.pdf';
    const email = 'doxygwin@gmail.com';

    return (
        <div>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white/3 border border-white/6 backdrop-blur-sm">
                        <h3 className="font-semibold">{dict.devops.tools.title}</h3>
                        <ul className="mt-3 text-sm space-y-2 text-white/85">
                            <li>• {dict.devops.tools.skills[0]}</li>
                            <li>• {dict.devops.tools.skills[1]}</li>
                            <li>• {dict.devops.tools.skills[2]}</li>
                            <li>• {dict.devops.tools.skills[3]}</li>
                            <li>• {dict.devops.tools.skills[4]}</li>
                            <li>• {dict.devops.tools.skills[5]}</li>
                            <li>• {dict.devops.tools.skills[6]}</li>
                        </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-white/3 border border-white/6 backdrop-blur-sm">
                        <h3 className="font-semibold">{dict.devops.activities.title}</h3>
                        <ul className="mt-3 text-sm space-y-2 text-white/85">
                            <li>• {dict.devops.activities.tasks[0]}</li>
                            <li>• {dict.devops.activities.tasks[1]}</li>
                            <li>• {dict.devops.activities.tasks[2]}</li>
                            <li>• {dict.devops.activities.tasks[3]}</li>
                            <li>• {dict.devops.activities.tasks[4]}</li>
                        </ul>
                    </div>
                </div>

                <div className="rounded-xl p-4 bg-gradient-to-br from-white/4 to-transparent border border-white/6 backdrop-blur-sm mt-4">
                    <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{dict.devops.projects.title}</h3>
                        <Link href={githubUrl} target="_blank" className="text-sm text-white/80 hover:underline">
                            {dict.devops.projects.linkText}
                        </Link>
                    </div>

                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <article className="p-3 rounded-lg bg-white/10">
                            <h4 className="text-sm font-medium">{dict.devops.projects.items[0].title}</h4>
                            <p className="text-xs text-white/75 mt-1">{dict.devops.projects.items[0].description}</p>
                        </article>

                        <article className="p-3 rounded-lg bg-white/10">
                            <h4 className="text-sm font-medium">{dict.devops.projects.items[1].title}</h4>
                            <p className="text-xs text-white/75 mt-1">{dict.devops.projects.items[1].description}</p>
                        </article>
                    </div>
                </div>
            </motion.div>
        </div>

    )
}