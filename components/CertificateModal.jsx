"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText } from 'lucide-react';

export default function CertificateModal({ isOpen, onClose, certificate }) {
    if (!isOpen || !certificate) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
                            <h2 className="text-xl font-bold text-white">{certificate.title}</h2>
                            <div className="flex items-center gap-2">
                                {(certificate.downloadUrl || certificate.file) && (
                                    <a
                                        href={certificate.downloadUrl || certificate.file}
                                        download={certificate.filename || `${certificate.title}.pdf`}
                                        className="p-2 rounded-full bg-indigo-500/20 hover:bg-indigo-500/30 transition-colors text-indigo-300"
                                        title="Скачать сертификат"
                                    >
                                        <Download size={20} />
                                    </a>
                                )}
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors text-white"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)] flex items-center justify-center bg-slate-950">
                            {certificate.imageUrl ? (
                                <div className="relative w-full">
                                    <img
                                        src={certificate.imageUrl}
                                        alt={certificate.title}
                                        className="w-full h-auto rounded-lg"
                                    />
                                </div>
                            ) : certificate.file || certificate.downloadUrl ? (
                                <div className="w-full text-center py-12">
                                    <FileText size={64} className="mx-auto text-indigo-400 mb-4" />
                                    <h3 className="text-xl font-semibold text-white mb-2">{certificate.title}</h3>
                                    <p className="text-slate-400 mb-6">PDF документ</p>
                                    <a
                                        href={certificate.file || certificate.downloadUrl}
                                        download={certificate.filename || `${certificate.title}.pdf`}
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-all text-white font-medium"
                                    >
                                        <Download size={20} />
                                        <span>Скачать сертификат</span>
                                    </a>
                                </div>
                            ) : (
                                <div className="text-center text-slate-400 py-12">
                                    <p>Предварительный просмотр недоступен</p>
                                    <p className="text-sm mt-2">Используйте кнопку скачивания</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
