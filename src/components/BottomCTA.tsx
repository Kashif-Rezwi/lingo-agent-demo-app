import React from 'react';
import { Sparkles, Zap, ArrowRight } from 'lucide-react';

export const BottomCTA = () => {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            {/* Complex Gradient Background */}
            <div className="absolute inset-0 bg-[#0A0A0A]"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-violet-900 opacity-90"></div>

            {/* Animated Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 blur-[100px] rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 blur-[120px] rounded-full animate-pulse decoration-delay-1000"></div>

                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                        key={i}
                        className={`absolute w-1 h-1 bg-white rounded-full opacity-20 animate-float`}
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.5}s`,
                            animationDuration: `${3 + Math.random() * 2}s`
                        }}
                    ></div>
                ))}
            </div>

            <div className="max-w-[1000px] mx-auto px-4 md:px-6 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-extrabold text-[10px] rounded-full uppercase tracking-[0.2em] mb-8">
                    <Zap className="w-3.5 h-3.5 fill-white" /> Limited Time Offer
                </div>

                <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1] mb-8">
                    Ready to scale your <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">growth to the moon?</span>
                </h2>

                <p className="text-blue-50 text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-medium leading-relaxed opacity-80">
                    Join over 10,000+ businesses who rely on QuantumPages to scale their growth and
                    drive massive revenue. Start building today.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button className="px-12 py-6 bg-white text-zinc-900 rounded-[2rem] text-xl font-bold hover:bg-white/90 hover:-translate-y-1 transition-all duration-300 shadow-3xl shadow-white/10 flex items-center gap-3">
                        Create Your Free Account <ArrowRight className="w-6 h-6" />
                    </button>
                    <div className="text-left py-2">
                        <div className="flex items-center gap-1 text-amber-400 mb-1">
                            {[1, 2, 3, 4, 5].map((_, i) => (
                                <Sparkles key={i} className="w-4 h-4 fill-amber-400" />
                            ))}
                        </div>
                        <p className="text-white font-extrabold text-sm uppercase tracking-widest">Rated 4.9/5 by G2</p>
                    </div>
                </div>

                <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-blue-100/60 text-sm font-extrabold uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div> 14-day free trial
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div> No credit card
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div> Cancel anytime
                    </div>
                </div>
            </div>
        </section>
    );
};
