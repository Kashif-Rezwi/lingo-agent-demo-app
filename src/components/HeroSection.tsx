import { t } from "../lib/i18n";
import React from 'react';
import { Play, Sparkles } from 'lucide-react';
export const HeroSection = () => {
  return <section className="pt-24 md:pt-32 pb-20 md:pb-32 relative overflow-hidden bg-white">
            {/* Mesh Gradient Background */}
            <div className={t("64964eff08961bf4b51316cbbd3f879dc47b3659d830ff70c7f747f603c9fbb1")}>
                <div className={t("1d59bcbfd94bd594a9418798a5969b220f8ea7d971c44c8074898c849a9a0f3d")}></div>
                <div className={t("419d9f16f1303280131056299c4e8dc16c443b022d18d7c61b195bad4bf4b228")}></div>
                <div className={t("7e9ef04e755ca3d2169b7de032828ace572ebb6e56be231eda57d1631b0fda38")}></div>
            </div>

            <div className={t("5a3d979b3e5522b9c2f0f5d932b54a1025590382bf56d91f07776c05af6aff16")}>
                {/* Badge area */}
                <div className={t("e4acb176ad95fb461cc81faa1313f1e82a83f4b407350bbc746731c9703971cf")}>
                    <Sparkles className="w-3.5 h-3.5 fill-blue-600" />{t("c55fc1231930e485ad8cf8d9e9dbc599412e47ec47e45e548d40f39009193277")}</div>

                <h1 className={t("bddc6fbe1f9a26d5649fef3ec96992b70195e9b51b8a79f4fc384243f0f252a3")}>{t("816abdbc6bb1f675743b236c7f5be64748c207d0735bdb9b625b446618724c35")}<br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">landing pages</span> <br className="hidden md:block" />{t("9369c78d3eabf5d7944e8e52dd262e4dd74688bca961b1d9bd86667b9ea50237")}</h1>

                <p className={t("7938c5c7db004d85ef837ee97dc07853f07242f67c364c37c8c25522e7fb17f5")}>{t("374870e04d3a01d1c6a8ceb641725ea32333d816f6c08816adab7a5122e57d78")}</p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-10 mb-32 md:mb-48 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                    <button className={t("5cfa8beefe07b24c351c6c1b52fff526c43145b799f89cb4119aefd6ffb86b8d")}>{t("09d6c31d8dd154d33f43275c360cf882e05843a5f405bd80c06ba34b4244211c")}<span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-3">
                            {["https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces", "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces"].map((url, i) => <div key={i} className={t("722ccba77a7a0244400afb80455c9153ff0a7c01a44c48c36e0b1aeff3e3c622")}>
                                    <img src={url} alt={`User ${i + 1}`} className="w-full h-full object-cover" />
                                </div>)}
                        </div>
                        <div className="text-left">
                            <p className="text-sm font-black text-zinc-900 leading-none mb-1">{t("6f2bc0c3fba72632e0cfb1428d3406dd9f85e933f479b48036ca13b6a0d287c0")}</p>
                            <p className={t("3c195247124789573cf723a181b678480bb9fec2836dd5a38040ecb1cbfb969a")}>{t("8fdecf3bd747f49d5f20a7375cf9dcc48ce0dd3b625b4d0e4c04022b190e72e7")}</p>
                        </div>
                    </div>
                </div>

                {/* Video Player Mockup */}
                <div className={t("6c5ef0a9a1fc811328df245eb80984d386c1bfd425128845454d370d08521d19")}>
                    {/* Perspective glow */}
                    <div className={t("bf2e093c4afc1d1d20246a3636fc17737aff10156434e0aa0879f0b8c3a85c24")}></div>

                    <div className={t("728c445904706117d08b83b5dee12eb0fb3c544f90a403218b74cc13f0a1933a")}>
                        <div className={t("416e747f022aee7b4eaac2fc5cfaedbe2987ded98236c1aa710ae0165cb9ad7b")}>
                            {/* Browser Top Bar */}
                            <div className={t("a882c91ef685747e7eace45e0694fa919884d426f60cf81e3c5d722d25fb1ffb")}>
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                                    <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                                    <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                                </div>
                                <div className={t("69cb3dcd6abfae331e7b6b53ceb9c9d3a3c19e460f757d30ac573908d938b1fe")}></div>
                            </div>

                            {/* Canvas Background with Grid Pattern */}
                            <div className="flex-1 relative bg-zinc-950 p-6 md:p-12 overflow-hidden flex items-center justify-center">
                                <div className={t("681d970acc2ed1a0bffdc5060a1a274ae2b3dc471cf4d88798e145320ffdf1ba")} style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: t("dda67625f66b7cf3a08c34dc811b4d454406585b60bd6d061adcc8e7b380db6a")
              }}></div>

                                <div className="relative w-full max-w-md space-y-4 text-left">
                                    <div className={t("c0fe0a1c06aa99c9f568a134bdb2521b9c1b0bf5637bf488e2d03847432d9b23")}></div>
                                    <div className={t("675f0bf79f1d072f1bf83fc7d9df1d4fcc5a5d0b68b26af6b33c4267db675f23")}></div>
                                    <div className={t("3ebc07d7055cf74a7cf9e8f32361cf87e454a4012f45768de1020e838306ee88")}></div>
                                    <div className={t("e0ce8fe72ae6ba5f379f84fee866403eea168fcd6f101794690dd0ac0e564928")}></div>
                                </div>

                                {/* Floating UI cards inside player */}
                                <div className={t("1f971bff1c4703df73e2afdd1231861af07010c7be75c07613b38d444d5232e0")}>
                                    <div className={t("ad5240f57de5892a16bebf0e59d108fb76f9aa483eafa0164871b5f89d6599a1")}></div>
                                    <div className="space-y-2">
                                        <div className={t("57cd5384cb7f509306ae274401e105b8e0f5b39800179dc2372f1079ca5242d4")}></div>
                                        <div className={t("57cd5384cb7f509306ae274401e105b8e0f5b39800179dc2372f1079ca5242d4")}></div>
                                        <div className={t("37b23aa560ffec75458018e957403ecfd740c8d6e86d4d3006c69a06a8aa37ef")}></div>
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
        </section>;
};