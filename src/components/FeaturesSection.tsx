import React from 'react';
import { Smartphone, Zap, Code2, Sparkles, Flag, LayoutTemplate, Store, PieChart, Activity } from 'lucide-react';

export const FeaturesSection = () => {
    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-4 md:px-6">

                {/* Top Feature highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-32 border-b border-zinc-100 pb-20">
                    {[
                        { icon: Zap, color: 'orange', title: 'Insanely fast loading', desc: 'Provide a frictionless experience.' },
                        { icon: Smartphone, color: 'blue', title: 'Mobile optimized AMP', desc: 'Convert more users on mobile.' },
                        { icon: Code2, color: 'green', title: 'Build without any code', desc: 'Drag and drop builder for everyone.' }
                    ].map((item, i) => (
                        <div key={i} className="text-center px-4 group">
                            <div className={`w-16 h-16 bg-${item.color}-500/5 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-${item.color}-500/10 group-hover:scale-110 group-hover:bg-${item.color}-500/10 transition-all duration-300`}>
                                <item.icon className={`w-7 h-7 text-${item.color}-500`} />
                            </div>
                            <h3 className="font-bold text-lg text-zinc-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-zinc-500 max-w-[200px] mx-auto">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Feature 1: AMP Pages (Left Text, Right Image) */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-20 md:mb-40">
                    <div className="flex-1 space-y-8 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100/50 text-blue-600 font-bold text-[10px] rounded-full uppercase tracking-[0.2em] shadow-sm">
                            <Sparkles className="w-3.5 h-3.5 fill-blue-600" /> Performance First
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight leading-[1.1]">
                            AMP pages powered <br className="hidden sm:block" />
                            with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 inline-flex items-center gap-2">QuantumPages <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 ml-1"><Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-white" /></div></span>
                        </h2>
                        <p className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                            AMP pages load instantly, giving your users a frictionless experience.
                            Reduce bounce rates and increase conversions by up to 20% compared to traditional landing pages.
                        </p>
                        <div className="space-y-4 pt-4">
                            {[
                                'Instant load times on all devices',
                                'SEO advantage with Google AMP',
                                'Unmatched conversion rates'
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-3 text-zinc-600 font-semibold justify-center lg:justify-start">
                                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                                        <Zap className="w-3 h-3 text-green-600 fill-green-600" />
                                    </div>
                                    {text}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 relative w-full lg:pl-10 mt-10 lg:mt-0">
                        {/* Phone Mockup Placeholder */}
                        <div className="relative w-[280px] h-[580px] sm:w-[320px] sm:h-[650px] mx-auto z-10 group perspective-1000">
                            {/* Layered Glow effects */}
                            <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full translate-y-20 group-hover:bg-blue-500/30 transition-all duration-700"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 rounded-[4rem] blur-2xl -z-10"></div>

                            {/* Device Frame (iPhone 17 style slim bezels) */}
                            <div className="relative w-full h-full bg-zinc-950 rounded-[3.5rem] p-1.5 shadow-3xl shadow-blue-900/40 border-[4px] sm:border-[6px] border-zinc-900 ring-1 ring-white/20 overflow-hidden flex items-center justify-center transform transition-all duration-700 group-hover:scale-[1.02] group-hover:-rotate-1">
                                {/* Dynamic Island */}
                                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-6 bg-zinc-950 rounded-full z-30 flex items-center justify-center transition-all duration-500 group-hover:w-32 group-hover:h-7">
                                    <div className="w-10 h-1 bg-zinc-800 rounded-full mr-1 opacity-50"></div>
                                    <div className="w-2 h-2 bg-zinc-800 rounded-full"></div>
                                </div>

                                {/* Screen Content */}
                                <div className="w-full h-full bg-white rounded-[3rem] overflow-hidden relative flex flex-col shadow-inner">
                                    {/* Header */}
                                    <div className="h-20 bg-gradient-to-r from-blue-600 to-indigo-700 w-full pt-10 px-6 flex justify-between items-center relative z-20">
                                        <div className="w-8 h-8 bg-white/20 rounded-xl backdrop-blur-sm"></div>
                                        <div className="w-16 h-4 bg-white/30 rounded-full"></div>
                                    </div>

                                    {/* App UI Elements */}
                                    <div className="flex-1 overflow-hidden relative bg-zinc-50">
                                        <div className="p-6 space-y-6">
                                            <div className="space-y-2">
                                                <div className="w-24 h-4 bg-blue-100 rounded-lg"></div>
                                                <div className="w-full h-10 bg-zinc-900 rounded-2xl"></div>
                                                <div className="w-2/3 h-10 bg-zinc-900 rounded-2xl"></div>
                                            </div>

                                            <div className="space-y-3">
                                                <div className="w-full h-3 bg-zinc-200 rounded-full"></div>
                                                <div className="w-full h-3 bg-zinc-200 rounded-full"></div>
                                                <div className="w-4/5 h-3 bg-zinc-200 rounded-full"></div>
                                            </div>

                                            <div className="w-full h-14 bg-blue-600 rounded-2xl shadow-lg shadow-blue-500/40 flex items-center justify-center text-white font-bold gap-2">
                                                Buy Now <div className="w-6 h-6 bg-white/20 rounded-md flex items-center justify-center"><Zap className="w-3.5 h-3.5 text-white fill-white" /></div>
                                            </div>

                                            <div className="pt-4 grid grid-cols-2 gap-4">
                                                <div className="aspect-square bg-white rounded-2xl border border-zinc-100 p-4 shadow-sm flex flex-col justify-between">
                                                    <div className="w-10 h-10 bg-pink-100 rounded-xl"></div>
                                                    <div className="w-full h-2 bg-zinc-100 rounded-full"></div>
                                                </div>
                                                <div className="aspect-square bg-white rounded-2xl border border-zinc-100 p-4 shadow-sm flex flex-col justify-between">
                                                    <div className="w-10 h-10 bg-green-100 rounded-xl"></div>
                                                    <div className="w-full h-2 bg-zinc-100 rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature 2: Builder (Left Image, Right Text) */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24 mb-32 md:mb-40 bg-[#0F0225] p-10 md:p-16 rounded-[3rem] md:rounded-[4rem] text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-indigo-500/10 blur-[120px] rounded-full"></div>

                    <div className="flex-1 space-y-8 lg:pl-12 text-center lg:text-left relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 text-amber-400 font-bold text-[10px] rounded-full uppercase tracking-[0.2em]">
                            <Sparkles className="w-3.5 h-3.5 fill-amber-400" /> Intuitive Design
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
                            Timeless Canvas to <br className="hidden sm:block" />
                            Conceptualize with UX
                        </h2>
                        <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Use our intuitive drag and drop builder to create stunning landing pages in minutes.
                            Build complex layouts with a simple, visual interface that handles all the technical heavy lifting.
                        </p>
                        <ul className="space-y-4 mt-8 max-w-xs mx-auto lg:mx-0 text-left">
                            <li className="flex items-center gap-4 text-white/80 font-semibold group/item">
                                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:bg-amber-500/20 group-hover/item:border-amber-500/30 transition-all">
                                    <Zap className="w-5 h-5 text-amber-400 fill-amber-400" />
                                </div>
                                40+ Premium Elements
                            </li>
                            <li className="flex items-center gap-4 text-white/80 font-semibold group/item">
                                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:bg-blue-500/20 group-hover/item:border-blue-500/30 transition-all">
                                    <Smartphone className="w-5 h-5 text-blue-400 fill-blue-400" />
                                </div>
                                Responsive Preview
                            </li>
                        </ul>
                        <button className="mt-10 px-10 py-5 bg-white text-indigo-950 rounded-2xl text-lg font-bold hover:bg-zinc-100 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto shadow-xl shadow-indigo-500/10">
                            Explore Builder
                        </button>
                    </div>
                    <div className="flex-1 w-full mt-10 lg:mt-0 relative z-10">
                        {/* Builder UI Mockup */}
                        <div className="bg-[#1A0636] rounded-[2.5rem] p-4 md:p-6 border border-white/10 shadow-3xl relative group overflow-hidden perspective-1000 transform transition-transform duration-700 group-hover:rotate-y-1 group-hover:-rotate-x-1">
                            {/* Builder Toolbar (Slimmer Height) */}
                            <div className="flex gap-3 mb-6 p-2 bg-white/5 rounded-xl border border-white/5 overflow-x-auto no-scrollbar items-center">
                                <div className="flex gap-1.5 mr-4 shrink-0">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                                </div>
                                <div className="flex-1 flex gap-2">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 border border-white/5">
                                            <div className="w-4 h-4 bg-white/20 rounded-sm"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Builder Canvas */}
                            <div className="aspect-[4/3] bg-white rounded-[1.5rem] flex relative overflow-hidden shadow-inner">
                                <div className="w-[20%] h-full bg-zinc-50 border-r border-zinc-100 p-4 space-y-4">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <div key={i} className={`w-full h-8 bg-zinc-200/50 rounded-lg ${i === 1 ? 'animate-pulse bg-blue-100' : ''}`}></div>
                                    ))}
                                </div>
                                <div className="flex-1 h-full bg-zinc-100/50 p-8 flex flex-col items-center justify-center relative">
                                    <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: 'radial-gradient(circle, #2563eb 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

                                    <div className="w-full h-full border-3 border-dashed border-blue-400/50 bg-blue-50/50 rounded-2xl flex flex-col items-center justify-center text-blue-600 font-bold relative overflow-hidden z-10 group-hover:border-blue-500 transition-colors">
                                        <Zap className="w-10 h-10 mb-3 opacity-40 animate-bounce" />
                                        Drop blocks here
                                    </div>
                                </div>
                            </div>

                            {/* Floating elements simulating drag and drop interaction */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 bg-white rounded-2xl shadow-4xl border border-blue-100 p-4 opacity-0 group-hover:opacity-100 transform translate-y-20 group-hover:-translate-y-10 group-hover:-rotate-3 transition-all duration-700 pointer-events-none z-20">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/30">
                                        <Zap className="w-4 h-4 text-white fill-white" />
                                    </div>
                                    <div className="h-4 w-20 bg-zinc-900 rounded-full"></div>
                                </div>
                                <div className="w-full h-20 bg-zinc-50 rounded-xl border border-zinc-100 flex items-center justify-center overflow-hidden">
                                    <div className="absolute inset-0 bg-blue-500/5"></div>
                                    <div className="w-2/3 h-5 bg-zinc-200 rounded-full relative z-10"></div>
                                </div>
                                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature 3: Templates */}
                <div className="text-center mb-20 pt-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-zinc-100 rounded-full text-zinc-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-6">
                        Ready to use
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight leading-[1.1] mb-8">
                        High converting form driven<br className="hidden sm:block" /> landing pages
                    </h2>
                    <p className="text-lg text-zinc-500 max-w-2xl mx-auto mb-10 font-medium">
                        Choose from over 40+ high converting landing page templates designed for various industries.
                        Launch your product in record time.
                    </p>
                    <button className="px-10 py-5 bg-zinc-900 text-white rounded-2xl text-lg font-bold hover:bg-black hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-zinc-900/10">
                        View Templates
                    </button>
                </div>

                {/* Templates Visual Mockup */}
                <div className="relative w-full overflow-hidden mb-24 h-[600px] md:h-[800px] group py-12 -mt-12">
                    {/* Gradient fade layer */}
                    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>

                    <div className="max-w-6xl mx-auto px-6 md:px-12 h-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 h-full">
                            {/* Column 1 */}
                            <div className="space-y-8 translate-y-24 group-hover:translate-y-12 transition-transform duration-1000">
                                {/* Card 1: Faded Mint Wireframe */}
                                <div className="aspect-[3/4] rounded-3xl bg-white shadow-xl hover:shadow-2xl border border-zinc-100 overflow-hidden relative group/card hover:-translate-y-1 transition-all duration-500 flex flex-col">
                                    <div className="w-full h-[45%] bg-emerald-100/80 relative overflow-hidden"></div>
                                    <div className="flex-1 p-8 flex flex-col justify-end space-y-4 bg-white">
                                        <div className="h-5 w-3/4 bg-zinc-800 rounded-full"></div>
                                        <div className="h-3 w-1/2 bg-zinc-100 rounded-full relative overflow-hidden"></div>
                                        <div className="pt-4 flex gap-3">
                                            <div className="w-1/2 h-10 bg-emerald-400 rounded-xl"></div>
                                            <div className="w-1/4 h-10 bg-zinc-50 rounded-xl border border-zinc-100"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 2: Faded Rose Form */}
                                <div className="aspect-[3/4] rounded-3xl bg-rose-50/40 shadow-xl hover:shadow-2xl border border-rose-100/50 overflow-hidden group/card hover:-translate-y-1 transition-all duration-500 flex flex-col p-8">
                                    <div className="w-12 h-12 bg-rose-200/50 rounded-2xl mb-6"></div>
                                    <div className="h-4 w-2/3 bg-zinc-800 rounded-full mb-8"></div>

                                    <div className="space-y-4 flex-1">
                                        <div className="h-10 w-full bg-white rounded-xl border border-rose-100/60 shadow-sm"></div>
                                        <div className="h-10 w-full bg-white rounded-xl border border-rose-100/60 shadow-sm"></div>
                                        <div className="h-16 w-full bg-white rounded-xl border border-rose-100/60 shadow-sm"></div>
                                    </div>

                                    <div className="w-full h-11 bg-rose-400 rounded-xl mt-6"></div>
                                </div>
                            </div>

                            {/* Column 2 */}
                            <div className="space-y-8 translate-y-4 group-hover:-translate-y-8 transition-transform duration-1000">
                                {/* Card 3: Soft Blue Browser */}
                                <div className="aspect-[3/4] rounded-3xl bg-slate-50 shadow-xl hover:shadow-2xl border border-slate-200/60 overflow-hidden group/card hover:-translate-y-1 transition-all duration-500 flex flex-col relative">
                                    <div className="absolute top-4 right-4 bg-blue-100 text-blue-600 text-[10px] font-extrabold px-3 py-1.5 rounded-full shadow-sm z-20 tracking-wider">POPULAR</div>
                                    <div className="h-12 bg-white/60 w-full flex items-center px-5 gap-1.5 border-b border-slate-200/60 backdrop-blur-md">
                                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                                    </div>
                                    <div className="flex-1 p-6 flex flex-col space-y-5">
                                        <div className="w-full h-24 bg-slate-200/50 rounded-2xl"></div>
                                        <div className="space-y-3 flex-1">
                                            <div className="h-2.5 w-full bg-slate-200/70 rounded-full"></div>
                                            <div className="h-2.5 w-full bg-slate-200/70 rounded-full"></div>
                                            <div className="h-2.5 w-2/3 bg-slate-200/70 rounded-full"></div>
                                        </div>
                                        <div className="pt-2 flex gap-3">
                                            <div className="flex-1 h-9 bg-blue-400 rounded-lg"></div>
                                            <div className="w-1/3 h-9 bg-slate-200/70 rounded-lg"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 4: Faded Amber Cards */}
                                <div className="aspect-[3/4] rounded-3xl bg-amber-50/50 shadow-xl hover:shadow-2xl border border-amber-100/60 overflow-hidden group/card hover:-translate-y-1 transition-all duration-500 flex flex-col">
                                    <div className="h-12 w-full flex items-center px-5 gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-amber-200"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-amber-200"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-amber-200"></div>
                                    </div>
                                    <div className="flex-1 p-6 flex flex-col">
                                        <div className="w-full h-32 bg-white rounded-2xl shadow-sm border border-amber-100/50 mb-6"></div>
                                        <div className="space-y-3 flex-1">
                                            <div className="h-2.5 w-5/6 bg-amber-200/60 rounded-full"></div>
                                            <div className="h-2.5 w-4/6 bg-amber-200/60 rounded-full"></div>
                                        </div>
                                        <div className="flex gap-3">
                                            <div className="w-2/3 h-10 bg-amber-400 rounded-xl"></div>
                                            <div className="w-1/3 h-10 bg-amber-200/80 rounded-xl"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Column 3 */}
                            <div className="space-y-8 translate-y-16 group-hover:translate-y-4 transition-transform duration-1000">
                                {/* Card 5: Soft Lilac Stats */}
                                <div className="aspect-[3/4] rounded-3xl bg-white shadow-xl hover:shadow-2xl border border-purple-50 overflow-hidden group/card hover:-translate-y-1 transition-all duration-500 flex flex-col p-6">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                                            <div className="w-4 h-4 rounded-full bg-purple-300"></div>
                                        </div>
                                        <div className="space-y-2 flex-1">
                                            <div className="h-2 w-1/2 bg-zinc-200 rounded-full"></div>
                                            <div className="h-2 w-1/4 bg-zinc-100 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3 mb-6">
                                        <div className="h-16 bg-purple-50 rounded-xl"></div>
                                        <div className="h-16 bg-purple-50 rounded-xl"></div>
                                    </div>
                                    <div className="flex-1 bg-purple-100/50 rounded-2xl mb-6 flex items-end p-4 gap-2">
                                        <div className="w-1/4 h-[40%] bg-purple-300 rounded-t-sm"></div>
                                        <div className="w-1/4 h-[70%] bg-purple-300 rounded-t-sm"></div>
                                        <div className="w-1/4 h-[50%] bg-purple-300 rounded-t-sm"></div>
                                        <div className="w-1/4 h-[90%] bg-purple-400 rounded-t-sm"></div>
                                    </div>
                                    <div className="w-full h-10 bg-zinc-800 rounded-xl"></div>
                                </div>

                                {/* Card 6: Faded Slate List */}
                                <div className="aspect-[3/4] rounded-3xl bg-zinc-50 shadow-xl hover:shadow-2xl border border-zinc-200/60 overflow-hidden group/card hover:-translate-y-1 transition-all duration-500 flex flex-col">
                                    <div className="h-12 bg-zinc-100/50 w-full flex items-center px-4 gap-1.5 border-b border-zinc-200/80">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                                    </div>
                                    <div className="flex-1 p-6 flex flex-col gap-4">
                                        <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-zinc-100 shadow-sm">
                                            <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
                                            <div className="flex-1 h-2 bg-zinc-200 rounded-full"></div>
                                        </div>
                                        <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-zinc-100 shadow-sm">
                                            <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
                                            <div className="flex-1 h-2 bg-zinc-200 rounded-full"></div>
                                        </div>
                                        <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-zinc-100 shadow-sm">
                                            <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
                                            <div className="flex-1 h-2 bg-zinc-200 rounded-full"></div>
                                        </div>
                                        <div className="mt-auto pt-4 border-t border-zinc-200">
                                            <div className="w-1/2 h-8 bg-zinc-300 rounded-lg ml-auto"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
