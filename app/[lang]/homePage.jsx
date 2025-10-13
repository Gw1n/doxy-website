"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';

import MySkills from './mypages/skills.jsx'
import AboutMe from './mypages/info.jsx';
import Etc from './mypages/etc.jsx';
import MySoft from './mypages/softskils.jsx'
import MyRobotics from './mypages/robotics.jsx'


import Avatar from "../assets/avatar.jpg"

function SvgWrapper({ children, size = 18, className = '' }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden
        >
            {children}
        </svg>
    );
}

function ChevronDownIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
    );
}

const Github = ({ size = 18 }) => (
    <SvgWrapper size={size}>
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.17-3.37-1.17-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.54 2.36 1.1 2.93.84.09-.65.35-1.1.64-1.36-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.115 2.51.337 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.39.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z" fill="currentColor" />
    </SvgWrapper>
);

const Linkedin = ({ size = 18 }) => (
    <SvgWrapper size={size}>
        <path d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-12h4v2a4 4 0 014-2zM2 9h4v12H2zM4 3a2 2 0 110 4 2 2 0 010-4z" fill="currentColor" />
    </SvgWrapper>
);

const Mail = ({ size = 18 }) => (
    <SvgWrapper size={size}>
        <path
            d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </SvgWrapper>
);

const Download = ({ size = 18 }) => (
    <SvgWrapper size={size}>
        <path d="M17 9.00195C19.175 9.01406 20.3529 9.11051 21.1213 9.8789C22 10.7576 22 12.1718 22 15.0002V16.0002C22 18.8286 22 20.2429 21.1213 21.1215C20.2426 22.0002 18.8284 22.0002 16 22.0002H8C5.17157 22.0002 3.75736 22.0002 2.87868 21.1215C2 20.2429 2 18.8286 2 16.0002L2 15.0002C2 12.1718 2 10.7576 2.87868 9.87889C3.64706 9.11051 4.82497 9.01406 7 9.00195" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 2L12 15M12 15L9 11.5M12 15L15 11.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SvgWrapper>
);

const MapPin = ({ size = 14 }) => (
    <SvgWrapper size={size}>
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" fill="currentColor" />
    </SvgWrapper>
);

const FileText = ({ size = 16 }) => (
    <SvgWrapper size={size}>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" fill="currentColor" />
        <path d="M14 2v6h6" fill="currentColor" opacity="0.9" />
    </SvgWrapper>
);


export default function HomePage({ dict, lang }) {

    const PersonalInfo = () => (
        <AboutMe dict={dict}/>
    )

    const Skills = () => (
        <MySkills dict={dict}/>
    )

    const EtcSkills = () => (
        <Etc dict={dict}/>
    )

    const SoftSkills = () => (
        <MySoft dict={dict}/>
    )

    const Robotics = () => (
        <MyRobotics dict={dict}/>
    )

    const linkedinUrl = 'https://www.linkedin.com/in/mikhail-orekhov-doxy';
    const githubUrl = 'https://github.com/Gw1n';
    const resumeUrl = lang === 'ru'
        ? 'ru/resume/cv_russian_mikhail.pdf'
        : 'en/resume/cv_english_mikhail.pdf';
    const downloadFilename = lang === 'ru'
        ? 'Резюме_Михаил_Орехов.pdf'
        : 'CV_Mikhail_Orekhov.pdf';
    const email = 'm.v.orekhov@gmail.com';

    const [activeTab, setActiveTab] = React.useState('devops');
    const buttonText = dict.mainContent.tabs.dropdownOptions[activeTab] || dict.mainContent.tabs.defaultButtonText;


    const getButtonClass = (tabName) => {
        return `${
            activeTab === tabName
                ? 'border-2 border-purple-500 rounded-md bg-white/20 px-3 py-1 text-md cursor-pointer'
                : 'border-2 border-purple-700 rounded-md bg-white/10 px-3 py-1 text-md cursor-pointer'
        }`;
    };

    return (
        <main className="min-h-screen flex items-center justify-center text-white p-4 sm:p-6 relative overflow-hidden">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="snow-layer opacity-60" />
            </div>

            <div className="max-w-4xl w-full bg-gradient-to-br from-white/5 via-white/3 to-white/2 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="w-36 h-36 rounded-full bg-gradient-to-br from-pink-400 via-violet-500 to-purple-700 p-1 shadow-xl">
                            <div className="relative w-full h-full rounded-full overflow-hidden">
                                <Image src={Avatar} alt={dict.profile.imageAlt} fill className="object-cover" />
                            </div>
                        </div>

                        <motion.h1 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                            <div className="mt-6 text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight"><span className="text-pink-300">{dict.profile.title}</span></div>


                            <p className="mt-3 text-sm text-white/85 max-w-xs">
                                {dict.profile.description}
                            </p>
                        </motion.h1>

                        <div className="mt-6 flex gap-3">
                            <Link href={linkedinUrl} target="_blank" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/6 hover:bg-white/10 transition" aria-label="LinkedIn">
                                <Linkedin size={18} /> <span>{dict.profile.buttons.linkedin}</span>
                            </Link>

                            <Link href={githubUrl} target="_blank" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/6 hover:bg-white/10 transition" aria-label="GitHub">
                                <Github size={18} /> <span>{dict.profile.buttons.github}</span>
                            </Link>
                        </div>

                        <div className="mt-6 flex flex-col gap-2 text-sm items-center lg:items-start">
                            <a href={`mailto:${email}`} className="inline-flex items-center gap-2 text-white/90 hover:text-white"><Mail size={16} /> {email}</a>
                            <a href={resumeUrl} download={downloadFilename} className="inline-flex items-center gap-2 text-white/90 hover:text-white"><FileText size={16} /> {dict.profile.contacts.resume}</a>
                        </div>

                        <div className="mt-6 w-full lg:pt-35">
                            <div className="text-xs text-white/70 mb-2">{dict.profile.location.label}</div>
                            <div className="inline-flex items-center gap-2 text-sm bg-white/5 rounded-md px-3 py-2">
                                <MapPin size={14} /> <span>{dict.profile.location.value}</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 lg:col-span-2">
                        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="flex flex-col gap-6 h-full">

                            <div className="flex flex-wrap gap-3">
                                <span className="px-3 py-1 text-sm rounded-full bg-white/20">{dict.mainContent.pills[0]}</span>
                                <span className="px-3 py-1 text-sm rounded-full bg-white/20">{dict.mainContent.pills[1]}</span>
                                <span className="px-3 py-1 text-sm rounded-full bg-white/20">{dict.mainContent.pills[2]}</span>
                                <span className="px-3 py-1 text-sm rounded-full bg-white/20">{dict.mainContent.pills[3]}</span>
                                <span className="px-3 py-1 text-sm rounded-full bg-white/20">{dict.mainContent.pills[4]}</span>
                                <span className="px-3 py-1 text-sm rounded-full bg-white/20">{dict.mainContent.pills[5]}</span>
                                <span className="px-3 py-1 text-sm rounded-full bg-white/20">{dict.mainContent.pills[6]}</span>
                                <span className="px-3 py-1 text-sm rounded-full bg-white/20">{dict.mainContent.pills[7]}</span>
                                <span className="px-3 py-1 text-sm rounded-full bg-white/20">{dict.mainContent.pills[8]}</span>
                                <span className="px-3 py-1 text-sm rounded-full bg-white/20">{dict.mainContent.pills[9]}</span>
                                <span className="px-3 py-1 text-sm rounded-full bg-white/20">{dict.mainContent.pills[10]}</span>
                                <span className="px-3 py-1 text-sm rounded-full bg-white/20">{dict.mainContent.pills[11]}</span>
                                <span className="px-3 py-1 text-sm rounded-full bg-white/20">{dict.mainContent.pills[12]}</span>
                            </div>

                            <div className="flex flex-wrap gap-4 border-t-2 pt-4 rounded-none">
                                <Menu>
                                    <MenuButton suppressHydrationWarning={true} className="border-2 border-purple-700 rounded-md bg-white/10 px-3 py-1 text-md cursor-pointer flex gap-2 data-focus:outline-none focus:not-data-focus:outline-none">
                                        {({ open }) => (
                                            <>
                                                <a className="text-center">{buttonText}</a>
                                                <ChevronDownIcon className={`h-6 w-6 transition-transform duration-500 ease-in-out ml-auto ${open ? 'rotate-180' : ''}`} />
                                            </>
                                        )}
                                    </MenuButton>

                                    <Transition
                                        enter="transition duration-150 ease-out"
                                        enterFrom="transform scale-95 opacity-0"
                                        enterTo="transform scale-100 opacity-100"
                                        leave="transition duration-200 ease-in"
                                        leaveFrom="transform scale-100 opacity-100"
                                        leaveTo="transform scale-95 opacity-0"
                                    >
                                        <MenuItems as="div" transition anchor="bottom start" className="text-sm text-white origin-top-left p-2 rounded-xl
                                        bg-purple-950/20 backdrop-blur-md data-focus:outline-none focus:not-data-focus:outline-none
                                         flex flex-col gap-y-2 z-60 w-41.5 -ml-0.5 mt-1">
                                            <MenuItem>
                                                <button className={getButtonClass('devops')} onClick={() => setActiveTab('devops')}>
                                                    {dict.mainContent.tabs.dropdownOptions.devops}
                                                </button>
                                            </MenuItem>
                                            <MenuItem>
                                                <button className={getButtonClass('robotics')} onClick={() => setActiveTab('robotics')}>
                                                    {dict.mainContent.tabs.dropdownOptions.robotics}
                                                </button>
                                            </MenuItem>
                                            <MenuItem>
                                                <button className={getButtonClass('etc')} onClick={() => setActiveTab('etc')}>
                                                    {dict.mainContent.tabs.dropdownOptions.etc}
                                                </button>
                                            </MenuItem>
                                            <MenuItem>
                                                <button className={getButtonClass('soft')} onClick={() => setActiveTab('soft')}>
                                                    {dict.mainContent.tabs.dropdownOptions.soft}
                                                </button>
                                            </MenuItem>
                                        </MenuItems>
                                    </Transition>
                                </Menu>

                                <button className={getButtonClass('info')} onClick={() => setActiveTab('info')}>{dict.mainContent.tabs.aboutButton}</button>
                            </div>

                            <div>
                                {activeTab === 'devops' && <Skills />}
                                {activeTab === 'robotics' && <Robotics />}
                                {activeTab === 'etc' && <EtcSkills />}
                                {activeTab === 'soft' && <SoftSkills />}
                                {activeTab === 'info' && <PersonalInfo />}
                            </div>



                            <div className="flex flex-col sm:flex-row gap-3 items-center justify-between mt-auto text-center sm:text-left">
                                <div className="text-sm text-white/85">
                                    {dict.mainContent.contactCta.text}
                                </div>

                                <div className="flex gap-3">
                                    <a href={`mailto:${email}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-pink-400/20 hover:bg-pink-400/30 transition">
                                        <Mail size={16} /> <span>{dict.mainContent.contactCta.emailButton}</span>
                                    </a>

                                    <a href={resumeUrl} download={downloadFilename} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/6 hover:bg-white/10 transition">
                                        <Download size={16} /> <span>{dict.mainContent.contactCta.resumeButton}</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <footer className="mt-8 border-t border-white/6 pt-6 text-xs text-white/70 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
                    <div>© {new Date().getFullYear()} {dict.footer.copyright}</div>
                    <div className="flex items-center gap-4">
                        <Link href={linkedinUrl} target="_blank" className="hover:underline">{dict.footer.links.linkedin}</Link>
                        <Link href={githubUrl} target="_blank" className="hover:underline">{dict.footer.links.github}</Link>
                        <a href={resumeUrl} download={downloadFilename} className="hover:underline">{dict.footer.links.resume}</a>
                    </div>
                </footer>
            </div>
        </main>
    );
}