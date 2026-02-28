import { t } from "../lib/i18n";
import React from 'react';
export const BrandLogos = () => {
  const logos = [{
    name: 'acme&co',
    style: 'font-bold tracking-tighter'
  }, {
    name: 'GlobalTek',
    style: 'font-black tracking-tight italic'
  }, {
    name: 'NEXUS',
    style: 'font-black tracking-widest'
  }, {
    name: 'OASIS',
    style: 'font-extrabold tracking-tight'
  }, {
    name: 'vertex',
    style: 'font-bold lowercase'
  }, {
    name: 'PULSE',
    style: 'font-extrabold tracking-widest'
  }, {
    name: 'QUANTA',
    style: 'font-black tracking-tighter'
  }];
  return <section className="py-16 border-y border-zinc-100 bg-white overflow-hidden relative">
            <div className={t("d6c998893725f4da18019b052443a8ac3bf78125604245865ce7b0db7af6c091")}>
                <p className={t("31b8fbf46a055cbdd0d8bb61b1e80bc84dac76e2a0a9b26e22491c392ddda7a2")}>{t("25fb6ae466dad150f6f5631135b0052176af380dc8578788f8c7efc472ff4e04")}</p>

                <div className="relative">
                    {/* Fades */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                    <div className={t("6b6702f7cdce4edd8e2b7d4fa3dcebb6bc70d72bb30d5607b2c63e7bc2129619")}>
                        {[...logos, ...logos, ...logos].map((logo, i) => <div key={i} className={`text-lg sm:text-xl md:text-3xl ${logo.style} text-zinc-300 hover:text-zinc-600 transition-all duration-300 cursor-pointer flex-shrink-0 select-none pb-1`}>
                                {logo.name}
                            </div>)}
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
            `
    }} />
        </section>;
};