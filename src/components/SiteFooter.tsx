import React from 'react';
import { Zap, Twitter, Github, Linkedin, Globe, ShieldCheck } from 'lucide-react';

export const SiteFooter = () => {
    return (
        <footer className="bg-white border-t border-zinc-100 pt-24 pb-12">
            <div className="max-w-[1200px] mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
                    <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-8 flex flex-col items-center text-center md:items-start md:text-left">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center group cursor-pointer transition-transform hover:-rotate-12">
                                <Zap className="w-5 h-5 text-white fill-white" />
                            </div>
                            <span className="text-2xl font-extrabold tracking-tight text-zinc-900">QuantumPages</span>
                        </div>
                        <p className="text-lg text-zinc-500 leading-relaxed max-w-sm font-medium">
                            The fastest way to build, host and test ultra high-converting landing pages without writing a single line of code.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Github, Linkedin].map((Icon, i) => (
                                <button key={i} className="w-12 h-12 bg-white border border-zinc-100 rounded-2xl flex items-center justify-center text-zinc-400 hover:text-blue-600 hover:border-blue-100 hover:shadow-xl transition-all duration-300">
                                    <Icon className="w-5 h-5" />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h4 className="text-[10px] font-extrabold text-zinc-400 uppercase tracking-[0.2em] mb-8">Product</h4>
                        <ul className="space-y-4 text-base font-bold text-zinc-900 flex flex-col items-center md:items-start">
                            {['Features', 'Templates', 'Integrations', 'Pricing', 'Showcase'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-blue-600 transition-colors flex items-center gap-2 group">
                                        {item}
                                        <div className="w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"></div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h4 className="text-[10px] font-extrabold text-zinc-400 uppercase tracking-[0.2em] mb-8">Company</h4>
                        <ul className="space-y-4 text-base font-bold text-zinc-900 flex flex-col items-center md:items-start">
                            {['About Us', 'Careers', 'Blog', 'Contact Support', 'Privacy'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-blue-600 transition-colors flex items-center gap-2 group">
                                        {item}
                                        <div className="w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"></div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <div className="p-6 bg-zinc-50 rounded-3xl border border-zinc-100 space-y-4">
                            <div className="flex items-center gap-2 text-blue-600">
                                <ShieldCheck className="w-5 h-5 fill-blue-600/10" />
                                <span className="text-xs font-extrabold uppercase tracking-widest">Enterprise Ready</span>
                            </div>
                            <p className="text-sm text-zinc-500 font-medium leading-relaxed">
                                Experience bank-grade security and 99.9% uptime SLA.
                            </p>
                            <button className="w-full py-3 bg-white border border-zinc-200 rounded-xl text-zinc-900 text-xs font-bold uppercase tracking-widest hover:bg-zinc-100 transition-colors">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-zinc-400 font-extrabold uppercase tracking-widest leading-none">
                        <p>© 2026 QuantumPages Inc.</p>
                        <div className="hidden md:block w-px h-4 bg-zinc-100"></div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                            <span>All systems operational</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-zinc-400 hover:text-zinc-900 cursor-pointer transition-colors text-xs font-extrabold uppercase tracking-widest">
                            <Globe className="w-4 h-4" /> EN-US
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
