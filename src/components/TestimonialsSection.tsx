import { t } from "../lib/i18n";
import React from 'react';
import { Star, Play, Quote, Sparkles } from 'lucide-react';
export const TestimonialsSection = () => {
  return <section className="py-16 md:py-24 bg-zinc-50 border-t border-zinc-100">
            <div className="max-w-[1200px] mx-auto px-4 md:px-6">
                <div className="text-center mb-16 md:mb-24 relative">
                    <div className={t("8c63b8d81e67347599c34389cbc7ad2e6d55b9a59834171abb62e171eaf3daa9")}></div>
                    <div className={t("a387089f421b9f881a9107d111780ad0f141dfb895ab4564be4e3b2f41c057c9")}>
                        <Sparkles className="w-3.5 h-3.5 fill-blue-600" />{t("3c9bcaeff941445312350d62b7db20e4a4e4ebf9a1a1dcac64809e30378195ff")}</div>
                    <h2 className={t("0dea26b5e3684ed30acc8e0c7aed2f6e1f7ad4634ff2d7573897e7f534eee685")}>{t("586e408892a135b20f7949846363a84b7faf622ceaa385da36747b7fddd56c3c")}<br className="hidden sm:block" />{t("686f746a95b6f836d7d70567c302c3f9ebb5ee0def3d1220ee9d4e9f34f5e131")}<span className="text-blue-600">QuantumPages</span>
                    </h2>
                    <div className="flex flex-col items-center gap-3">
                        <div className="flex items-center gap-1 text-amber-500">
                            {[1, 2, 3, 4, 5].map((_, i) => <Star key={i} className="w-5 h-5 fill-amber-500" />)}
                        </div>
                        <p className={t("4f64c46afe7008ff9555237152ba65b111c8f952c656c4bcaf8d404e5617b1a9")}>{t("ec6863ac89fbc8ef2ed11a55e6811c2943ee33de19db08cc98fe3b4dc0489aa1")}<span className="text-zinc-900">2,500+</span> companies worldwide
                        </p>
                    </div>
                </div>

                {/* Video Testimonials */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {[{
          name: t("6cea57c2fb6cbc2a40411135005760f241fffc3e5e67ab99882726431037f908"),
          role: t("148b4ab5a166c641b43eb5d9fa1192cfea8240e3c2e024aec96e2cfe9c423b10"),
          bg: "from-blue-600 via-indigo-700 to-indigo-900",
          quote: t("5768e48675400b6de05d691f7420100235d05ab3fd55bbef500ee64bea9ce08f")
        }, {
          name: t("dd50edfe4360049a05a251e21c2932c58f64c00176ed45dc7daef29eceec865e"),
          role: t("56fce09510db23bf32905ddefb0fd452f7e5592a170f6bba11e061449bb2d3dd"),
          bg: "from-purple-600 via-fuchsia-700 to-pink-900",
          quote: t("ce761da5426c17c986f4b9a38e2c1f7cf1f27d0d5e17f3db29d81b932571190c")
        }, {
          name: t("0625565e1ca7bd0fb6f363bd279bb67764dd23d75d2c8d0d36df1148f0f240ca"),
          role: t("6e8a964b008b1f12173500c11175243c6f848678f54464b4cb2dcd43b582b56b"),
          bg: "from-emerald-500 via-teal-700 to-cyan-900",
          quote: t("bfb27d575e13c9a244892b811cf5ebf412af5de1c9ca2e0a7b1b715ea727d53e")
        }].map((person, i) => <div key={i} className={t("a6c102a53b4f970e50e604ef314a5000f49bcf569bb00cefba38f9013074360e")}>
                            {/* Thumbnail background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${person.bg} transition-transform duration-1000 group-hover:scale-110`}></div>
                            <div className={t("fa411fff4fb1935711419597ef3ba63249af2bbb1e69ff24ddec4bfdb4838066")}></div>

                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <div className="relative">
                                    <div className={t("96aa2293e5c027c5e80115d29977beb2b98a335d33f280b6dc0eb62b3d967a4f")}></div>
                                    <button className={t("6c531061b03893cef38966a8b908ab6d6542cb33311590eb1cbbcba873765063")}>
                                        <div className={t("450bed09f4f62e701c734324718654901e99e14133aceb36d2ec43006671301d")}></div>
                                        <Play className="w-8 h-8 ml-1 fill-white drop-shadow-lg relative z-10" />
                                    </button>
                                </div>
                            </div>

                            {/* Player UI Mockup */}
                            <div className="absolute top-8 left-8 right-8 flex justify-between items-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className={t("3d53f69ef9e43ab7234b6f3ad9bd8d7d396912eef0937a37bcc697ee52d9985e")}>
                                    01:24
                                </div>
                                <div className={t("2f0c18b36b65b4205cc7d4cdea5a054bfa61b6f44226a28d62556c15240b8b30")}>
                                    <div className={t("448e7a34161d66ffe47c1e967eafc1aa4493494b7a924381313bf52d66f5d1b5")}></div>
                                </div>
                            </div>

                            {/* Bottom Info */}
                            <div className={t("e99fd665f7a9f447ccbe3c268790b4ad02a949c32d2bdefbbd2137a94a971ae3")}></div>
                            <div className="absolute bottom-10 left-10 right-10 z-20 space-y-4">
                                <Quote className={t("329ae738560057134634addd7bc1444dccd4918597b0c8148598eb70c92e8573")} />
                                <p className="text-white font-extrabold text-2xl tracking-tight leading-none italic group-hover:text-amber-300 transition-colors">"{person.quote}"</p>
                                <div className={t("482a6f5918c79fd4941f1065e13cddb9a1364419b356c2b58ef2abcc48c7c4ea")}>
                                    <div className={t("331529240ff198acd4f4ad4c1adfc5a7a63bdaec86dca5cee749fd19c7aa2465")}>
                                        <img src={`https://i.pravatar.cc/150?u=${person.name.toLowerCase().replace(' ', '')}`} alt={person.name} className="w-8 h-8 rounded-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="text-white font-extrabold text-sm tracking-tight">{person.name}</p>
                                        <p className={t("44ccd04202cc69bcfd51549de829d6af723871a9fd527373ba299cbee8f88a36")}>{person.role}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Hover Progress Bar */}
                            <div className={t("0debef4224c3285e827768388565ded14b32ec5637a3c0237b89b9d52ade4533")}>
                                <div className={t("d39b42a2b2056f75c333cff7e28d5414533da882bfb108ee913a384d64fa0f84")}></div>
                            </div>
                        </div>)}
                </div>

                {/* Text Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[{
          name: t("0aced2fdbeaf5023a5102461853ca68502116c463908e188e43be2d009b48223"),
          role: t("b9df1d995c3e1130cc698f3f7cd07f98a7f9c46cfbccac71cbc89a5010e5442d"),
          avatar: "emilychen"
        }, {
          name: t("3aac7185508bb22f9367e9c54058093d728bd3e4cb639d87cd99baf4c068df26"),
          role: t("26f254711b071a701a6b67d7da2765cdaaf069a797f5d531f7e08a5b60177cfa"),
          avatar: "marcusreed"
        }, {
          name: t("2ab56adb83979d456441b3fed392cfe4e4be57f75f441add2029ba9c0465575f"),
          role: t("e099052c370b386bd6c451d2b132c1f7a044bde09f8a418e015766187323831b"),
          avatar: "sophiapatel"
        }, {
          name: t("e15637d6521204f0da66422c9d64307ed55965bceae61e90512e50a43a896fd1"),
          role: t("080e2a3f069bbe8d312d9e503d65ecb05aa94c3412dad9a3ab88de55f8222f88"),
          avatar: "davidkim"
        }, {
          name: t("8d60cbe5b036153d9aaebdd6c3f5190446b750e1734cb05a3c7a5889fa44c85b"),
          role: t("07e9b85c1c690eea3619b10db5571ed285a978607b9e4bf95d98984b39c01c4e"),
          avatar: "jessicataylor"
        }, {
          name: t("dbc3120bf6b0544f8ac1814f26da3d99a3c55584da56de365733f64ef88c4303"),
          role: t("2f918a80f82cf4dd530e055ed8efb6ee85b067afe37f46ea06799c97f88a81b2"),
          avatar: "ryangarcia"
        }].map((reviewer, i) => <div key={i} className={t("682633baf3d731132fc17ac7254b6cf41e16d3a84172f93e36f4cadf8e0cc37d")}>
                            <div className={t("e137292c8c0ed1effd9e7cac09cf797df83b6cf27161c47cb5f79e6fda3eede0")}></div>

                            <div className="flex items-center gap-1 text-amber-500 mb-8">
                                {[1, 2, 3, 4, 5].map((_, starI) => <Star key={starI} className={t("0b49ca0d8901bf199004fc9a8a0aac0680bc61f7c301a667cb1779b188b04763")} />)}
                            </div>
                            <p className="text-zinc-700 text-lg leading-relaxed font-semibold tracking-tight mb-10 relative z-10">{t("efbca64a64e0c2edcd36f1463a8f6b8ca79372e92f1912368c331622a7e59c14")}</p>
                            <div className="flex items-center gap-4 border-t border-zinc-50 pt-8 mt-auto">
                                <div className="w-14 h-14 bg-gradient-to-br from-zinc-100 to-zinc-200 rounded-2xl flex items-center justify-center border border-zinc-200 shadow-inner overflow-hidden">
                                    <img src={`https://i.pravatar.cc/150?u=${reviewer.avatar}`} alt={reviewer.name} className="w-12 h-12 rounded-xl object-cover" />
                                </div>
                                <div>
                                    <p className="text-base font-extrabold text-zinc-900 tracking-tight">{reviewer.name}</p>
                                    <p className={t("80950b4362b129e5d01633186d6a2c91a428af8d635e541a79fe338484dc8377")}>{reviewer.role}</p>
                                </div>
                                <div className="ml-auto opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Quote className="w-8 h-8 text-zinc-900" />
                                </div>
                            </div>
                        </div>)}
                </div>

                <div className="text-center mt-16">
                    <button className={t("1b7486f72766e83384da675838c881adff642825e9fb15244292e14dda5b592c")}>{t("f13fe5b9199ee80ec420ed0dbe16d67d10c1073e5287b98f394489e69e3e2a2b")}<Sparkles className="w-5 h-5 text-blue-600" />
                    </button>
                </div>
            </div>
        </section>;
};