"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageGalleryModal({ images, isOpen, onClose, initialIndex = 0 }) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    useEffect(() => {
        setCurrentIndex(initialIndex);
    }, [initialIndex]);

    useEffect(() => {
        if (!isOpen) {
            setCurrentIndex(0);
        }
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isOpen) return;
            
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') handlePrevious();
            if (e.key === 'ArrowRight') handleNext();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const safeIndex = Math.min(currentIndex, images.length - 1);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 z-10 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 transition-colors text-white"
                    >
                        <X size={24} />
                    </button>

                    {images.length > 1 && (
                        <>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handlePrevious();
                                }}
                                className="absolute left-6 z-10 p-3 rounded-full bg-slate-800/80 hover:bg-slate-700 transition-colors text-white"
                            >
                                <ChevronLeft size={28} />
                            </button>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleNext();
                                }}
                                className="absolute right-6 z-10 p-3 rounded-full bg-slate-800/80 hover:bg-slate-700 transition-colors text-white"
                            >
                                <ChevronRight size={28} />
                            </button>
                        </>
                    )}

                    <motion.div
                        key={safeIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="relative max-w-6xl max-h-[80vh] w-full mx-8"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full h-[80vh] flex items-center justify-center">
                            <img
                                src={images[safeIndex].url}
                                alt={images[safeIndex].alt || `Image ${safeIndex + 1}`}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    </motion.div>

                    {images.length > 1 && (
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setCurrentIndex(index);
                                    }}
                                    className={`w-2 h-2 rounded-full transition-all ${
                                        index === currentIndex
                                            ? 'bg-white w-8'
                                            : 'bg-white/50 hover:bg-white/75'
                                    }`}
                                />
                            ))}
                        </div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
