import React from 'react';
import { Sparkles, Plus, Link2, Zap } from 'lucide-react';

export const IntegrationsSection = () => {
    return (
        <section className="py-20 bg-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Left Typography & CTAs */}
                    <div className="flex-1 text-center lg:text-left space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-50 border border-zinc-200 text-zinc-500 font-semibold text-xs rounded-full uppercase tracking-widest">
                            <Link2 className="w-3.5 h-3.5" /> Native Connectivity
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight leading-[1.15]">
                            Pass incoming data to <br className="hidden sm:block" />your <span className="text-blue-600">CRM & marketing tools</span>
                        </h2>
                        <p className="text-lg text-zinc-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Connect QuantumPages with your favorite marketing tools in seconds.
                            Automate your entire workflow and keep your data synced perfectly across all platforms.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                            <button className="px-7 py-3.5 bg-zinc-900 text-white rounded-xl text-sm font-bold hover:bg-zinc-800 transition-colors shadow-sm flex items-center justify-center">
                                View All 100+ Integrations
                            </button>
                            <button className="px-7 py-3.5 bg-white text-zinc-900 border border-zinc-200 rounded-xl text-sm font-bold hover:bg-zinc-50 transition-colors flex items-center justify-center">
                                Documentation
                            </button>
                        </div>
                    </div>

                    {/* Right Integration Hub */}
                    <div className="flex-1 relative w-full lg:mt-0">
                        <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center p-8">
                            {/* Extremely subtle, modern background circle */}
                            <div className="absolute inset-4 bg-slate-50/80 rounded-full"></div>

                            {/* Refined delicate SVG squiggles */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-60" viewBox="0 0 400 400">
                                {/* Squiggle top */}
                                <path d="M 165,120 L 170,105 L 180,120 L 190,100 L 200,120 L 210,105 L 215,120" fill="none" stroke="#64748b" strokeWidth="1.2" strokeLinejoin="round" />
                                {/* Burst left */}
                                <path d="M 50,150 Q 40,140 35,145 M 55,165 Q 45,160 40,170 M 65,175 Q 55,175 52,185" fill="none" stroke="#64748b" strokeWidth="1.2" strokeLinecap="round" />
                                {/* Burst right */}
                                <path d="M 340,170 Q 355,165 360,170 M 350,180 Q 365,180 365,190" fill="none" stroke="#64748b" strokeWidth="1.2" strokeLinecap="round" />
                                {/* Burst bottom */}
                                <path d="M 130,320 Q 120,330 115,340 M 140,335 Q 135,345 140,355 M 150,335 Q 145,345 155,355" fill="none" stroke="#64748b" strokeWidth="1.2" strokeLinecap="round" />
                            </svg>

                            {/* Minimal Central Hub Node */}
                            <div className="relative z-20 w-32 h-32 sm:w-36 sm:h-36 bg-white rounded-full shadow-[0_12px_40px_-12px_rgba(0,0,0,0.1)] flex items-center justify-center group/hub cursor-default hover:scale-105 transition-transform duration-500">
                                <div className="flex items-center">
                                    <span className="text-zinc-900 font-extrabold text-2xl tracking-tight">QP</span>
                                    <span className="text-blue-600 font-extrabold text-2xl tracking-tight">HUB</span>
                                </div>
                            </div>

                            {/* Minimal Orbiting Nodes */}
                            {/* Zapier */}
                            <div className="absolute top-[8%] left-[20%] z-20 w-16 h-16 sm:w-[72px] sm:h-[72px] bg-white rounded-full shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer animate-float-slow">
                                <Zap className="w-7 h-7 text-orange-500 fill-orange-500" />
                            </div>

                            {/* Stripe (Dash) */}
                            <div className="absolute top-[14%] right-[18%] z-20 w-14 h-14 sm:w-[60px] sm:h-[60px] bg-white rounded-full shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer animate-float-delayed">
                                <div className="w-5 h-2.5 bg-indigo-600 rounded-sm"></div>
                            </div>

                            {/* Salesforce */}
                            <div className="absolute top-[44%] left-[2%] z-20 w-[72px] h-[72px] sm:w-[84px] sm:h-[84px] bg-white rounded-full shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer animate-float">
                                <span className="text-[#00a1e0] font-bold text-[9px] sm:text-[10px] tracking-widest">SALESFORCE</span>
                            </div>

                            {/* Microsoft */}
                            <div className="absolute top-[46%] right-[2%] z-20 w-[72px] h-[72px] sm:w-[84px] sm:h-[84px] bg-white rounded-full shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer animate-float-slow">
                                <div className="grid grid-cols-2 gap-[2px] w-7 h-7">
                                    <div className="bg-[#f25022] rounded-[1px]"></div>
                                    <div className="bg-[#7fba00] rounded-[1px]"></div>
                                    <div className="bg-[#00a4ef] rounded-[1px]"></div>
                                    <div className="bg-[#ffb900] rounded-[1px]"></div>
                                </div>
                            </div>

                            {/* Chrome */}
                            <div className="absolute bottom-[6%] left-[50%] -translate-x-1/2 z-20 w-16 h-16 sm:w-[72px] sm:h-[72px] bg-white rounded-full shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer animate-float-delayed">
                                <div className="w-[26px] h-[26px] rounded-full border-[3px] border-emerald-500 border-t-red-500 border-r-amber-500 flex items-center justify-center">
                                    <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
                                </div>
                            </div>

                            {/* Generic Purple */}
                            <div className="absolute bottom-[16%] left-[16%] z-20 w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] bg-white rounded-full shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer animate-float">
                                <div className="w-[22px] h-[22px] rounded-full border-4 border-indigo-600 border-b-transparent"></div>
                            </div>

                            {/* Generic Red */}
                            <div className="absolute bottom-[20%] right-[20%] z-20 w-12 h-12 sm:w-[52px] sm:h-[52px] bg-white rounded-full shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer animate-float-slow">
                                <div className="w-3.5 h-3.5 bg-rose-500 rounded-sm"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
