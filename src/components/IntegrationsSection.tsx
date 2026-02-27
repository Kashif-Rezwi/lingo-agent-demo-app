import { t } from "../lib/i18n";
import React from 'react';
import { Sparkles, Plus, Link2, Zap } from 'lucide-react';
export const IntegrationsSection = () => {
  return <section className="py-20 bg-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Left Typography & CTAs */}
                    <div className="flex-1 text-center lg:text-left space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-50 border border-zinc-200 text-zinc-500 font-semibold text-xs rounded-full uppercase tracking-widest">
                            <Link2 className={t("49cac22e85f74ab6100c82b791d8a4ca3bc9ce4917429f6648118903620ac745")} />{t("3ca3f468857539ca1bb6cb1b83f30b80cc2ae7c8335e0872fdc47e6a7e3b066c")}</div>
                        <h2 className={t("7b53325e0c13da711fcc88f9c8b91e2c8b2b43da29f01d9ab8fecfc90f9dacf9")}>{t("778b9cf0e846b6535fd17e418a98ffc930f935d383bcbcf26cc5603e5a782d62")}<br className="hidden sm:block" />{t("4d040d3f6466018c568aadf69a666d4257e5bb350a8e06f7198aedb6b12386fe")}<span className="text-blue-600">{t("2b5cf8f2ea0498e6d8dd1144ec1f4de1c2430c7eae6eaa38e33b1d902552a6b0")}</span>
                        </h2>
                        <p className="text-lg text-zinc-500 leading-relaxed max-w-xl mx-auto lg:mx-0">{t("6719edcc5e91360101ddba40cccaab892fb165cbc97bc70d6f573a7b608413e0")}</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                            <button className={t("da67d01c2a153858614fe13ff6c5015fa386d4410095ac132765379d82a78b1c")}>{t("81171c27dc43d1572ad0a4ed7043cd700aa3c256fdcb804ebc7770b1e66cc1a4")}</button>
                            <button className={t("b0bfb70f9303561324c8a6de5bd7af223155e8258b0c8b18f45a11e76d6ee615")}>{t("c205924de0fe636ccdde4ed616fef66f75b78e98b03620637965c033fd161141")}</button>
                        </div>
                    </div>

                    {/* Right Integration Hub */}
                    <div className="flex-1 relative w-full lg:mt-0">
                        <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center p-8">
                            {/* Extremely subtle, modern background circle */}
                            <div className={t("7f81696528f264fc71b4f2699aeed875bb6d4f1236fe76dce5648f032758e474")}></div>

                            {/* Refined delicate SVG squiggles */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-60" viewBox="0 0 400 400">
                                {/* Squiggle top */}
                                <path d={t("19b59d0f29dde6b6befb6dc21c355fbf528c377f8a976cec28108978d6524dcc")} fill="none" stroke="#64748b" strokeWidth="1.2" strokeLinejoin="round" />
                                {/* Burst left */}
                                <path d={t("ca9bfe6fc75388a6be3856c554e6f725799fc24da0ac19f1290ccfa158a9ed50")} fill="none" stroke="#64748b" strokeWidth="1.2" strokeLinecap="round" />
                                {/* Burst right */}
                                <path d={t("c9adb1f3b5c584d8dadc9363af2e11fddce9eb97c879a561f4cca3ac4490fe8a")} fill="none" stroke="#64748b" strokeWidth="1.2" strokeLinecap="round" />
                                {/* Burst bottom */}
                                <path d={t("b2163abea772780a9cda191e6eb5c568fb8c80e3431eeaaf9843330ed5e3ca2b")} fill="none" stroke="#64748b" strokeWidth="1.2" strokeLinecap="round" />
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
                                <div className={t("e0f9f637cd916e7fbdaf0b2c7bbfbb9e08bb0cf287f98a5bf78e9c3bf15887db")}></div>
                            </div>

                            {/* Salesforce */}
                            <div className="absolute top-[44%] left-[2%] z-20 w-[72px] h-[72px] sm:w-[84px] sm:h-[84px] bg-white rounded-full shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer animate-float">
                                <span className={t("14add9f3d9a2b809285b3f7186d9cbffd11588a7cdd556425d387e26ebc23cdc")}>SALESFORCE</span>
                            </div>

                            {/* Microsoft */}
                            <div className="absolute top-[46%] right-[2%] z-20 w-[72px] h-[72px] sm:w-[84px] sm:h-[84px] bg-white rounded-full shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer animate-float-slow">
                                <div className={t("8c71abfd03dec3da74872c08b8974458ccfe56db876e7a66305ea0d363e93c91")}>
                                    <div className={t("c323360d292aea55974932ed5a6ad602c8abbf754a008e104429433e9e150a66")}></div>
                                    <div className={t("343557aa97160ef134285086344e6eea3d88a83943e4aaa6c63d1151c5550709")}></div>
                                    <div className={t("c74f7f04ba9ad9d5104eecfcd39288653a4145d2689c29b51a4dc0cc0ab55d04")}></div>
                                    <div className={t("ec68b2bd1fef3d4978597561466d2521b21dbfb4195ed279703c475b4d12d793")}></div>
                                </div>
                            </div>

                            {/* Chrome */}
                            <div className="absolute bottom-[6%] left-[50%] -translate-x-1/2 z-20 w-16 h-16 sm:w-[72px] sm:h-[72px] bg-white rounded-full shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer animate-float-delayed">
                                <div className={t("3b2daac313d2fffbfe65033b56dd0d436211220552290ed57b0fa7e5b2e92ffa")}>
                                    <div className={t("8a797bf9469acc07de5bb1e9bddc74c44e2dedd5913666823b852e8f120f71da")}></div>
                                </div>
                            </div>

                            {/* Generic Purple */}
                            <div className="absolute bottom-[16%] left-[16%] z-20 w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] bg-white rounded-full shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer animate-float">
                                <div className={t("58d2783ac1f13fe199a886a93f839edaca33c682027ee36502103c95f3638ed7")}></div>
                            </div>

                            {/* Generic Red */}
                            <div className="absolute bottom-[20%] right-[20%] z-20 w-12 h-12 sm:w-[52px] sm:h-[52px] bg-white rounded-full shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer animate-float-slow">
                                <div className={t("9c0513ff7e2408aa2f20ee45d6cf8f1f0919a159a0d1c414e25280b14b6b6d7d")}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>;
};