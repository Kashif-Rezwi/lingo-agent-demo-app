import React from 'react';
import { Sparkles, Zap, BarChart3, Users2, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const EcommerceSection = () => {
    return (
        <section className="py-16 md:py-24 bg-[#111111] text-white overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 bg-gradient-to-br from-zinc-900 to-black rounded-[3rem] md:rounded-[4rem] p-10 md:p-20 border border-white/10 relative overflow-hidden group shadow-3xl">
                    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500/10 blur-[120px] rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-indigo-500/10 blur-[120px] rounded-full"></div>

                    <div className="flex-1 space-y-8 text-center lg:text-left relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 text-blue-400 font-bold text-[10px] rounded-full uppercase tracking-[0.2em]">
                            <ShieldCheck className="w-3.5 h-3.5 fill-blue-400" /> Secure Payments
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
                            Sell your Digital Products <br className="hidden sm:block" />
                            securely via <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Stripe & PayPal</span>.
                        </h2>
                        <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                            Process payments directly on your landing pages securely using Stripe or PayPal with 1-click checkout flows.
                            Fully PCI compliant and optimized for high conversion.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/5 text-sm font-semibold text-white/80">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Subscription billing
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/5 text-sm font-semibold text-white/80">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 1-Click Upsells
                            </div>
                        </div>
                        <button className="mt-4 px-10 py-5 bg-blue-600 text-white rounded-2xl text-lg font-bold hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto shadow-2xl shadow-blue-500/20">
                            Explore E-commerce
                        </button>
                    </div>
                    <div className="flex-1 w-full relative mt-12 lg:mt-0">
                        {/* Payment Mockup */}
                        <div className="flex items-center justify-center h-[350px] sm:h-[450px] relative">
                            {/* Realistic Stripe Card */}
                            <div className="w-full max-w-[280px] sm:max-w-[320px] bg-white rounded-3xl p-6 sm:p-8 shadow-4xl relative z-10 transform -rotate-1 group-hover:rotate-0 transition-transform duration-700 overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl -z-10"></div>

                                <div className="flex items-center justify-between mb-8">
                                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/30">
                                        <div className="w-6 h-4 bg-white/30 rounded-sm"></div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[10px] font-black text-zinc-400 uppercase tracking-widest leading-none">QuantumPages</div>
                                        <div className="text-zinc-900 font-bold text-lg mt-1">$99.00</div>
                                    </div>
                                </div>

                                <div className="space-y-5">
                                    <div className="space-y-2">
                                        <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Card Details</div>
                                        <div className="h-12 w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 flex items-center justify-between">
                                            <div className="text-zinc-900 font-medium">•••• •••• •••• 4242</div>
                                            <div className="w-8 h-5 bg-blue-100 rounded-sm"></div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <div className="h-12 w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 flex items-center">
                                                <div className="text-zinc-400 text-sm">MM/YY</div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="h-12 w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 flex items-center">
                                                <div className="text-zinc-400 text-sm">CVC</div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="w-full h-14 bg-zinc-900 hover:bg-black text-white rounded-2xl font-black text-sm transition-all duration-300 shadow-xl shadow-zinc-900/20 group/btn overflow-hidden relative">
                                        <div className="flex items-center justify-center gap-2 relative z-10 group-hover/btn:-translate-y-10 transition-transform duration-300">
                                            Pay Now <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center"><Zap className="w-3.5 h-3.5 text-white fill-white" /></div>
                                        </div>
                                        <div className="absolute inset-0 flex items-center justify-center gap-2 bg-blue-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300">
                                            Processing...
                                        </div>
                                    </button>
                                </div>
                            </div>

                            {/* Floating PayPal Card */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 translate-y-12 w-56 sm:w-64 bg-[#003087] rounded-3xl p-6 shadow-4xl transform rotate-6 scale-90 opacity-40 group-hover:rotate-0 group-hover:scale-95 group-hover:opacity-100 transition-all duration-700 blur-[1px] group-hover:blur-0">
                                <div className="w-24 h-6 bg-white/20 rounded mb-6"></div>
                                <div className="space-y-4 mb-6">
                                    <div className="h-4 w-full bg-white/10 rounded-full"></div>
                                    <div className="h-4 w-2/3 bg-white/10 rounded-full"></div>
                                </div>
                                <div className="w-full h-12 bg-[#FFC439] rounded-2xl flex items-center justify-center font-black text-black text-sm">
                                    PayPal Checkout
                                </div>
                            </div>

                            {/* Decorative background glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 rounded-full blur-[100px] -z-10 group-hover:scale-110 transition-transform duration-1000"></div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-16">
                    {/* A/B Testing Block */}
                    <div className="bg-[#E6F3FF] p-10 md:p-14 rounded-[3rem] flex flex-col items-start gap-12 border border-blue-100/50 text-zinc-900 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/5 blur-[80px] rounded-full"></div>

                        <div className="z-10 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600 text-white font-bold text-[10px] rounded-full uppercase tracking-widest shadow-lg shadow-blue-500/30">
                                <Sparkles className="w-3 h-3 fill-white" /> Advanced Labs
                            </div>
                            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-none mb-4">
                                A/B Testing <br />
                                for Maximum <br />
                                <span className="text-blue-600">ROI Potential</span>
                            </h3>
                            <button className="px-8 py-4 bg-zinc-900 text-white rounded-2xl text-base font-bold hover:bg-black hover:-translate-y-1 transition-all duration-300">
                                Learn More
                            </button>
                        </div>

                        {/* A/B Test UI Visual */}
                        <div className="w-full bg-white rounded-3xl shadow-4xl border border-blue-50 p-8 relative overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-700 z-10 mt-auto">
                            <div className="flex justify-between items-center mb-8">
                                <div className="flex gap-2 bg-zinc-50 p-1.5 rounded-xl border border-zinc-100">
                                    <div className="px-5 py-2 bg-white rounded-lg shadow-md text-[10px] font-black text-blue-600 uppercase tracking-widest">Variant A</div>
                                    <div className="px-5 py-2 text-[10px] font-black text-zinc-400 uppercase tracking-widest">Variant B</div>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center gap-1.5 justify-end text-emerald-500 font-black text-xl leading-none">
                                        <Zap className="w-5 h-5 fill-emerald-500" /> +24.8%
                                    </div>
                                    <div className="text-zinc-400 text-[9px] font-black uppercase tracking-[0.2em] mt-1">Conversions</div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                                        <span>Conversion Rate</span>
                                        <span className="text-zinc-900">8.4%</span>
                                    </div>
                                    <div className="w-full h-4 bg-zinc-50 rounded-full border border-zinc-100 overflow-hidden p-1">
                                        <div className="h-full bg-blue-600 rounded-full w-[84%] transition-all duration-1000 group-hover:w-[84%]"></div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                                        <span>Average Order Value</span>
                                        <span className="text-zinc-900">$124</span>
                                    </div>
                                    <div className="w-full h-4 bg-zinc-50 rounded-full border border-zinc-100 overflow-hidden p-1">
                                        <div className="h-full bg-zinc-200 rounded-full w-[52%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CRM Dashboard Block */}
                    <div className="bg-[#1A1A1A] p-10 md:p-14 rounded-[3rem] flex flex-col gap-8 border border-white/5 relative overflow-hidden group">
                        <div className="absolute -top-32 -left-32 w-64 h-64 bg-zinc-800/20 blur-[100px] rounded-full pointer-events-none"></div>

                        <div className="z-10 space-y-6">
                            <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-none">
                                Built-in Lead Capture <br className="hidden md:block" />
                                & Management
                            </h3>
                            <p className="text-lg text-white/50 max-w-[280px] font-medium leading-relaxed">
                                Keep track of your leads with our native CRM dashboard and automation.
                            </p>
                            <div className="flex items-center gap-4 pt-4">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-zinc-900 bg-zinc-800 flex items-center justify-center overflow-hidden">
                                            <Users2 className="w-5 h-5 text-zinc-500" />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-zinc-400 text-sm font-semibold tracking-tight">
                                    <span className="text-white">+520</span> leads today
                                </div>
                            </div>
                        </div>

                        {/* CRM Stats UI Visual */}
                        <div className="relative mt-8 group">
                            <div className="absolute inset-0 bg-blue-600/20 blur-[80px] translate-y-20 rounded-full group-hover:bg-blue-600/30 transition-all"></div>
                            <div className="w-full bg-[#222] border border-white/10 rounded-3xl p-8 flex flex-col shadow-4xl relative z-10 transform group-hover:-translate-y-2 transition-all duration-700">
                                <div className="flex justify-between items-end mb-10 border-b border-white/5 pb-6">
                                    <div>
                                        <div className="text-white/40 text-[10px] font-black mb-1 uppercase tracking-[0.2em]">Live Lead Status</div>
                                        <div className="text-white text-5xl font-extrabold tracking-tight">
                                            2,845
                                        </div>
                                    </div>
                                    <div className="bg-emerald-500 text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg shadow-emerald-500/20 flex items-center gap-1">
                                        <Zap className="w-3 h-3 fill-white" /> INCREASE 12%
                                    </div>
                                </div>

                                <div className="flex items-end gap-3 h-32 mt-auto">
                                    {[30, 45, 25, 60, 40, 75, 55, 65, 50, 85].map((height, i) => (
                                        <div key={i} className="flex-1 group/bar relative">
                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-white text-zinc-900 text-[8px] font-black rounded opacity-0 group-hover/bar:opacity-100 transition-opacity">
                                                {height}%
                                            </div>
                                            <div className="w-full bg-blue-600/20 rounded-t-lg h-full absolute inset-0"></div>
                                            <div
                                                className="w-full bg-gradient-to-t from-blue-600 to-indigo-500 rounded-t-lg hover:from-blue-400 hover:to-indigo-300 transition-all duration-700 relative z-10"
                                                style={{ height: `${height}%` }}
                                            ></div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-between mt-4">
                                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                                        <div key={i} className="text-[9px] font-black text-white/20">{day}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
