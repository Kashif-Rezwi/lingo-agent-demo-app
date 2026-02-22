import React from 'react';

export const BrandLogos = () => {
    const logos = [
        { name: 'acme&co', style: 'font-bold tracking-tighter' },
        { name: 'GlobalTek', style: 'font-black tracking-tight italic' },
        { name: 'NEXUS', style: 'font-black tracking-widest' },
        { name: 'OASIS', style: 'font-extrabold tracking-tight' },
        { name: 'vertex', style: 'font-bold lowercase' },
        { name: 'PULSE', style: 'font-extrabold tracking-widest' },
        { name: 'QUANTA', style: 'font-black tracking-tighter' },
    ];

    return (
        <section className="py-16 border-y border-zinc-100 bg-white overflow-hidden relative">
            <div className="max-w-[1200px] mx-auto px-6">
                <p className="text-center text-[10px] md:text-[12px] font-bold text-zinc-400 uppercase tracking-[0.4em] mb-12">
                    Trusted by over 10,000+ businesses globally
                </p>

                <div className="relative">
                    {/* Fades */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                    <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] gap-20 md:gap-32">
                        {[...logos, ...logos, ...logos].map((logo, i) => (
                            <div
                                key={i}
                                className={`text-lg sm:text-xl md:text-3xl ${logo.style} text-zinc-300 hover:text-zinc-600 transition-all duration-300 cursor-pointer flex-shrink-0 select-none pb-1`}
                            >
                                {logo.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes marquee {
                    from { transform: translateX(0); }
                    to { transform: translateX(-33.33%); }
                }
                .animate-marquee {
                    animation: marquee 50s linear infinite;
                }
            `}} />
        </section>
    );
};
