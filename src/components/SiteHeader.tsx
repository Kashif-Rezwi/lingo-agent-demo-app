"use client";

import React from 'react';
import { Zap, ChevronDown } from 'lucide-react';

export const SiteHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-zinc-200/50 h-[72px] flex items-center transition-all duration-300">
            <div className="max-w-[1200px] mx-auto px-6 w-full flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2 group cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
                    <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center transition-all">
                        <Zap className="w-5 h-5 text-white fill-white" />
                    </div>
                    <span className="text-xl font-extrabold tracking-tight text-zinc-900">QuantumPages</span>
                </div>

                {/* Main Nav (Desktop) */}
                <nav className="hidden lg:flex items-center gap-8">
                    {['Product', 'Solutions', 'Resources'].map((item) => (
                        <div key={item} className="group flex items-center gap-1 text-[15px] font-semibold text-zinc-600 hover:text-blue-600 transition-colors cursor-pointer relative py-2">
                            {item} <ChevronDown className="w-4 h-4 text-zinc-400 group-hover:text-blue-500 transition-colors" />
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                        </div>
                    ))}
                    <a href="#" className="group text-[15px] font-semibold text-zinc-600 hover:text-blue-600 transition-colors relative py-2">
                        Pricing
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </nav>

                {/* CTA & Mobile Toggle */}
                <div className="flex items-center gap-5">
                    <a href="#" className="hidden md:block text-[15px] font-semibold text-zinc-600 hover:text-zinc-900 transition-colors">Login</a>
                    <button className="hidden sm:block px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-[15px] font-bold hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
                        Get Started
                    </button>
                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-zinc-600 hover:bg-zinc-100 rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <div className="space-y-1.5 w-6">
                            <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="absolute top-[72px] left-0 w-full bg-white/95 backdrop-blur-2xl border-b border-zinc-200 shadow-2xl lg:hidden max-h-[calc(100vh-72px)] overflow-y-auto animate-in slide-in-from-top duration-300">
                    <nav className="flex flex-col p-8 gap-6">
                        {['Product', 'Solutions', 'Resources'].map((item) => (
                            <div key={item} className="flex justify-between items-center text-lg font-bold text-zinc-900 hover:text-blue-600 transition-colors border-b border-zinc-50 pb-2">
                                {item} <ChevronDown className="w-5 h-5 text-zinc-400" />
                            </div>
                        ))}
                        <a href="#" className="text-lg font-bold text-zinc-900 hover:text-blue-600 transition-colors border-b border-zinc-50 pb-2">Pricing</a>
                        <div className="flex flex-col gap-4 pt-4">
                            <a href="#" className="text-center py-4 text-lg font-bold text-zinc-900 border border-zinc-200 rounded-2xl hover:bg-zinc-50">Login</a>
                            <button className="w-full px-5 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl text-lg font-extrabold shadow-xl shadow-blue-500/20">
                                Get Started
                            </button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};
