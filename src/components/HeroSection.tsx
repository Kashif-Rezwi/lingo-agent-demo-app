import React from 'react';
import { Play, Sparkles } from 'lucide-react';

export const HeroSection = () => {
    return (
        <section className="pt-24 md:pt-32 pb-20 md:pb-32 relative overflow-hidden bg-white">
            {/* Mesh Gradient Background */}
            <div className="absolute top-0 inset-x-0 h-full -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute top-[20%] right-[-5%] w-[30%] h-[50%] bg-indigo-400/20 rounded-full blur-[120px] animate-pulse delay-700"></div>
                <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[30%] bg-sky-200/30 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-[1200px] mx-auto px-4 md:px-6 text-center relative z-10">
                {/* Badge area */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100/50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <Sparkles className="w-3.5 h-3.5 fill-blue-600" /> Powered by Quantum AI
                </div>

                <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-zinc-900 tracking-tight leading-[0.95] mb-5 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                    Build high converting <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">landing pages</span> <br className="hidden md:block" />
                    in minutes with AI
                </h1>

                <p className="text-lg md:text-xl text-zinc-500 mb-8 md:mb-10 max-w-2xl mx-auto leading-[1.6] px-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                    Create insanely fast, mobile optimized AMP landing pages without any code.
                    Capture more leads and drive more sales with QuantumPages.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-10 mb-32 md:mb-48 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                    <button className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl text-lg font-black hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300 active:scale-95 group">
                        Start your free trial
                        <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-3">
                            {[
                                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces",
                                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces",
                                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces"
                            ].map((url, i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-lg shadow-zinc-900/10">
                                    <img src={url} alt={`User ${i + 1}`} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <div className="text-left">
                            <p className="text-sm font-black text-zinc-900 leading-none mb-1">10,000+ users</p>
                            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest leading-none">Already joined</p>
                        </div>
                    </div>
                </div>

                {/* Video Player Mockup */}
                <div className="relative max-w-[900px] mx-auto group animate-in fade-in zoom-in-95 duration-1000 delay-500">
                    {/* Perspective glow */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-[2.5rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>

                    <div className="relative bg-zinc-900 rounded-[2rem] p-2 md:p-3 border border-white/10 shadow-3xl shadow-blue-900/20 overflow-hidden transform transition-transform duration-700">
                        <div className="relative aspect-video bg-zinc-950 rounded-[1.5rem] overflow-hidden border border-white/5 flex flex-col">
                            {/* Browser Top Bar */}
                            <div className="h-10 md:h-12 bg-white/5 backdrop-blur-md border-b border-white/5 flex items-center px-5 gap-3">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                                    <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                                    <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                                </div>
                                <div className="flex-1 max-w-sm h-6 bg-white/5 rounded-full mx-auto border border-white/5"></div>
                            </div>

                            {/* Canvas Background with Grid Pattern */}
                            <div className="flex-1 relative bg-zinc-950 p-6 md:p-12 overflow-hidden flex items-center justify-center">
                                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                                <div className="relative w-full max-w-md space-y-4 text-left">
                                    <div className="w-2/3 h-10 bg-white/10 rounded-xl"></div>
                                    <div className="w-full h-4 bg-white/5 rounded-full"></div>
                                    <div className="w-5/6 h-4 bg-white/5 rounded-full"></div>
                                    <div className="w-32 h-12 bg-blue-600/20 border border-blue-500/30 rounded-xl mt-8"></div>
                                </div>

                                {/* Floating UI cards inside player */}
                                <div className="absolute top-10 right-10 w-32 h-40 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-4 hidden md:block">
                                    <div className="w-full h-2 bg-blue-500/50 rounded-full mb-3"></div>
                                    <div className="space-y-2">
                                        <div className="w-full h-1 bg-white/10 rounded-full"></div>
                                        <div className="w-full h-1 bg-white/10 rounded-full"></div>
                                        <div className="w-2/3 h-1 bg-white/10 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Play Button Overlay */}
                                <button className="absolute inset-0 m-auto w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-[0_0_50px_rgba(37,99,235,0.6)] hover:scale-110 transition-all duration-500 group/play z-20">
                                    <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-20"></div>
                                    <Play className="w-10 h-10 ml-2 fill-white group-hover:scale-110 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
