"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Mail, MapPin, Image as ImageIcon, ExternalLink, Info, FileText, Download } from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import ImageGalleryModal from '@/components/ImageGalleryModal';
import ArchitectureModal from '@/components/ArchitectureModal';
import CertificateModal from '@/components/CertificateModal';
import Avatar from "../assets/avatar.jpg";
import ReactMarkdown from 'react-markdown'

export default function HomePage({ dict, lang }) {
    const [galleryOpen, setGalleryOpen] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);
    const [archModalOpen, setArchModalOpen] = useState(false);
    const [selectedArch, setSelectedArch] = useState({ title: '', content: '' });
    const [certModalOpen, setCertModalOpen] = useState(false);
    const [selectedCert, setSelectedCert] = useState(null);

    const linkedinUrl = 'https://www.linkedin.com/in/mikhail-orekhov-doxy';
    const githubUrl = 'https://github.com/Gw1n';
    const email = 'm.v.orekhov@gmail.com';

    const projects = dict.portfolio.items;
    const industrialProjects = dict.industrialAutomation.items;
    const certificates = dict.certificates.items;

    const openGallery = (images) => {
        setSelectedImages(images);
        setGalleryOpen(true);
    };

    const openArchModal = (title, content) => {
        setSelectedArch({ title, content });
        setArchModalOpen(true);
    };

    const openCertModal = (cert) => {
        setSelectedCert(cert);
        setCertModalOpen(true);
    };

    const renderProjectCard = (project, index) => (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="relative rounded-2xl border border-slate-700/50 p-1">
                <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={80}
                    inactiveZone={0.01}
                    borderWidth={2}
                />
                <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 space-y-4">
                            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                            <div className="text-slate-300 leading-relaxed whitespace-pre-line"><ReactMarkdown>{project.description}</ReactMarkdown></div>

                            <div className="flex flex-wrap gap-2">
                                {project.technologies && project.technologies.map((tech, techIndex) => (
                                    <span 
                                        key={techIndex}
                                        className="px-3 py-1 text-xs rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-3 pt-2">
                                {project.liveUrl && (
                                    <a 
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-500/35 transition-all text-white font-medium shadow-md shadow-indigo-500/20"
                                    >
                                        <ExternalLink size={18} />
                                        <span>{dict.portfolio.viewLiveButton}</span>
                                    </a>
                                )}
                                {project.githubUrl && (
                                    <a 
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-600 transition-all text-white font-medium"
                                    >
                                        <Github size={18} />
                                        <span>{dict.portfolio.viewCodeButton}</span>
                                    </a>
                                )}
                                {project.architecture && (
                                    <button 
                                        onClick={() => openArchModal(project.title, project.architecture)}
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-600 transition-all text-white font-medium"
                                    >
                                        <Info size={18} />
                                        <span>{dict.portfolio.architectureButton}</span>
                                    </button>
                                )}
                            </div>
                        </div>

                        {project.images && project.images.length > 0 && (
                            <div className="flex items-center justify-center">
                                <button
                                    onClick={() => openGallery(project.images)}
                                    className="relative group w-full aspect-video md:aspect-square rounded-xl overflow-hidden border-2 border-slate-700 hover:border-indigo-500 transition-all shadow-xl"
                                >
                                    <img
                                        src={project.images[0].url}
                                        alt={project.title}
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                        <div className="bg-slate-900/90 px-4 py-2 rounded-lg flex items-center gap-2">
                                            <ImageIcon size={20} className="text-white" />
                                            <span className="text-white font-medium">
                                                {project.images.length} {dict.portfolio.imagesLabel}
                                            </span>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );

    return (
        <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-500/50 shadow-2xl shadow-indigo-500/20">
                            <Image src={Avatar} alt={dict.profile.imageAlt} fill className="object-cover" />
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-4xl lg:text-5xl font-bold text-white bg-clip-text">
                                {dict.profile.title}
                            </h1>
                            <p className="text-lg text-slate-300 mb-4 bg-transparent mt-4 whitespace-pre-line max-w-2xl">
                                {dict.profile.description}
                            </p>
                            <div className="flex items-center justify-center md:justify-start gap-2 text-slate-400 mb-4">
                                <MapPin size={16} />
                                <span className="text-sm">{dict.profile.location.value}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                        {dict.mainContent.pills.map((pill, index) => (
                            <span key={index} className="px-3 py-1 text-xs rounded-full bg-slate-800/50 text-slate-300 border border-slate-700">
                                {pill}
                            </span>
                        ))}
                    </div>

                    {certificates && certificates.length > 0 && (
                        <div className="mb-6">
                            <h3 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wide">
                                {dict.certificates.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {certificates.map((cert, index) => (
                                    <button
                                        key={index}
                                        onClick={() => openCertModal(cert)}
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/60 hover:bg-slate-700/60 border border-slate-600/50 transition-all text-white text-sm group"
                                    >
                                        <FileText size={16} className="text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                                        <span>{cert.title}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <Link 
                            href={linkedinUrl} 
                            target="_blank" 
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 transition-all text-white"
                        >
                            <Linkedin size={18} />
                            <span>LinkedIn</span>
                        </Link>
                        <Link 
                            href={githubUrl} 
                            target="_blank" 
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/30 transition-all text-white"
                        >
                            <Github size={18} />
                            <span>GitHub</span>
                        </Link>
                        <a 
                            href={`mailto:${email}`} 
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 transition-all text-white"
                        >
                            <Mail size={18} />
                            <span>{email}</span>
                        </a>
                        <a
                            href={lang === 'ru' ? '/ru/resume/cv_russian_mikhail.pdf' : '/en/resume/cv_english_mikhail.pdf'}
                            download={lang === 'ru' ? 'cv_russian_mikhail.pdf' : 'cv_english_mikhail.pdf'}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30 transition-all text-white"
                        >
                            <Download size={18} />
                            <span>{dict.profile.contacts.resume}</span>
                        </a>
                    </div>
                </motion.div>

                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 pl-9 text-center md:text-left text-white">
                        {dict.portfolio.title}
                    </h2>

                    <div className="space-y-8">
                        {projects.map((project, index) => renderProjectCard(project, index))}
                    </div>
                </div>

                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 pl-9 text-center md:text-left text-white">
                        {dict.industrialAutomation.title}
                    </h2>

                    <div className="space-y-8">
                        {industrialProjects.map((project, index) => renderProjectCard(project, index))}
                    </div>
                </div>

                <footer className="mt-16 pt-8 border-t border-slate-800 text-center text-slate-400 text-sm">
                    <p>© {new Date().getFullYear()} {dict.footer.copyright}</p>
                </footer>
            </div>

            <ImageGalleryModal
                images={selectedImages}
                isOpen={galleryOpen}
                onClose={() => setGalleryOpen(false)}
            />

            <ArchitectureModal
                isOpen={archModalOpen}
                onClose={() => setArchModalOpen(false)}
                title={selectedArch.title}
                content={selectedArch.content}
            />

            <CertificateModal
                isOpen={certModalOpen}
                onClose={() => setCertModalOpen(false)}
                certificate={selectedCert}
            />
        </main>
    );
}