import React from 'react';
import { Star, Play, Quote, Sparkles } from 'lucide-react';

export const TestimonialsSection = () => {
    return (
        <section className="py-16 md:py-24 bg-zinc-50 border-t border-zinc-100">
            <div className="max-w-[1200px] mx-auto px-4 md:px-6">
                <div className="text-center mb-16 md:mb-24 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-blue-500/5 blur-[80px] -z-10"></div>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 text-blue-600 font-bold text-[10px] rounded-full uppercase tracking-[0.2em] mb-6">
                        <Sparkles className="w-3.5 h-3.5 fill-blue-600" /> Success Stories
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight leading-[1.1] mb-8">
                        Find out why marketers & founders <br className="hidden sm:block" />
                        love <span className="text-blue-600">QuantumPages</span>
                    </h2>
                    <div className="flex flex-col items-center gap-3">
                        <div className="flex items-center gap-1 text-amber-500">
                            {[1, 2, 3, 4, 5].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-amber-500" />
                            ))}
                        </div>
                        <p className="text-sm md:text-base text-zinc-500 font-bold tracking-tight uppercase tracking-[0.1em]">
                            Trusted by <span className="text-zinc-900">2,500+</span> companies worldwide
                        </p>
                    </div>
                </div>

                {/* Video Testimonials */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {[
                        {
                            name: "John Doe",
                            role: "CEO, Acme Corp",
                            bg: "from-blue-600 via-indigo-700 to-indigo-900",
                            quote: "The absolute best builder on the market"
                        },
                        {
                            name: "Sarah Smith",
                            role: "CMO, StartupX",
                            bg: "from-purple-600 via-fuchsia-700 to-pink-900",
                            quote: "Reduced our CPL by 40% in two weeks"
                        },
                        {
                            name: "Mike Johnson",
                            role: "Founder, GrowthGen",
                            bg: "from-emerald-500 via-teal-700 to-cyan-900",
                            quote: "Our conversion rate tripled overnight"
                        }
                    ].map((person, i) => (
                        <div key={i} className="aspect-[9/16] rounded-3xl md:rounded-[2.5rem] relative overflow-hidden group cursor-pointer border border-zinc-200 shadow-2xl transition-all duration-500 hover:-translate-y-2">
                            {/* Thumbnail background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${person.bg} transition-transform duration-1000 group-hover:scale-110`}></div>
                            <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px] group-hover:backdrop-blur-none transition-all duration-500"></div>

                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-white/30 blur-2xl rounded-full scale-150 animate-pulse"></div>
                                    <button className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-white/40 shadow-3xl transition-all duration-500 group-hover:scale-110 group-hover:bg-white/40 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent"></div>
                                        <Play className="w-8 h-8 ml-1 fill-white drop-shadow-lg relative z-10" />
                                    </button>
                                </div>
                            </div>

                            {/* Player UI Mockup */}
                            <div className="absolute top-8 left-8 right-8 flex justify-between items-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="px-3 py-1 bg-black/20 backdrop-blur-md rounded-full border border-white/20 text-[10px] font-extrabold text-white uppercase tracking-widest">
                                    01:24
                                </div>
                                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                                </div>
                            </div>

                            {/* Bottom Info */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
                            <div className="absolute bottom-10 left-10 right-10 z-20 space-y-4">
                                <Quote className="w-10 h-10 text-white/20 -mb-2" />
                                <p className="text-white font-extrabold text-2xl tracking-tight leading-none italic group-hover:text-amber-300 transition-colors">"{person.quote}"</p>
                                <div className="flex items-center gap-4 pt-2 border-t border-white/10">
                                    <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center overflow-hidden">
                                        <img src={`https://i.pravatar.cc/150?u=${person.name.toLowerCase().replace(' ', '')}`} alt={person.name} className="w-8 h-8 rounded-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="text-white font-extrabold text-sm tracking-tight">{person.name}</p>
                                        <p className="text-white/60 text-[10px] font-extrabold uppercase tracking-widest">{person.role}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Hover Progress Bar */}
                            <div className="absolute bottom-0 left-0 h-1.5 bg-blue-500/50 w-full z-30">
                                <div className="h-full bg-blue-500 w-[65%] group-hover:w-full transition-all duration-[3000ms] ease-linear"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Text Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { name: "Emily Chen", role: "Growth Lead", avatar: "emilychen" },
                        { name: "Marcus Reed", role: "VP of Marketing", avatar: "marcusreed" },
                        { name: "Sophia Patel", role: "Freelance Designer", avatar: "sophiapatel" },
                        { name: "David Kim", role: "Agency Owner", avatar: "davidkim" },
                        { name: "Jessica Taylor", role: "E-commerce Founder", avatar: "jessicataylor" },
                        { name: "Ryan Garcia", role: "Indie Hacker", avatar: "ryangarcia" }
                    ].map((reviewer, i) => (
                        <div key={i} className="p-10 bg-white rounded-[2rem] border border-zinc-100 hover:shadow-4xl transition-all duration-500 hover:-translate-y-1 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <div className="flex items-center gap-1 text-amber-500 mb-8">
                                {[1, 2, 3, 4, 5].map((_, starI) => (
                                    <Star key={starI} className="w-3.5 h-3.5 fill-amber-500" />
                                ))}
                            </div>
                            <p className="text-zinc-700 text-lg leading-relaxed font-semibold tracking-tight mb-10 relative z-10">
                                "QuantumPages is incredible. It literally takes 5 minutes to spin up a high-converting AMP page. Our CPL dropped by 30% almost instantly."
                            </p>
                            <div className="flex items-center gap-4 border-t border-zinc-50 pt-8 mt-auto">
                                <div className="w-14 h-14 bg-gradient-to-br from-zinc-100 to-zinc-200 rounded-2xl flex items-center justify-center border border-zinc-200 shadow-inner overflow-hidden">
                                    <img src={`https://i.pravatar.cc/150?u=${reviewer.avatar}`} alt={reviewer.name} className="w-12 h-12 rounded-xl object-cover" />
                                </div>
                                <div>
                                    <p className="text-base font-extrabold text-zinc-900 tracking-tight">{reviewer.name}</p>
                                    <p className="text-xs font-extrabold text-blue-600 uppercase tracking-widest mt-0.5">{reviewer.role}</p>
                                </div>
                                <div className="ml-auto opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Quote className="w-8 h-8 text-zinc-900" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <button className="px-10 py-5 bg-white text-zinc-900 border border-zinc-200 rounded-2xl text-lg font-bold hover:bg-zinc-50 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-zinc-900/5 inline-flex items-center gap-3">
                        Read All 2,500+ Reviews <Sparkles className="w-5 h-5 text-blue-600" />
                    </button>
                </div>
            </div>
        </section>
    );
};
