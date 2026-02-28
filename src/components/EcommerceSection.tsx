import { t } from "../lib/i18n";
import React from 'react';
import { Sparkles, Zap, BarChart3, Users2, ShieldCheck, CheckCircle2 } from 'lucide-react';
export const EcommerceSection = () => {
  return <section className={t("fc42964bb5500d628cda6635a03dfd2ef082197afd138743931d0c445b938117")}>
            <div className={t("eafc9c3b1100915093b816647f51c593cbfedee2b50c449fcb4afa8b79fe9249")}>
                <div className={t("0f10cd8c91416e5d563402938feab0291b780861f3f1ae016216162b2b16bfe8")}>
                    <div className={t("074f31ab2045a33aec7c7b43d02c39e5635ef4588d3e6a2079f673599ff7799b")}></div>
                    <div className={t("da5769a4b6fb431a32074cad87017792e27ac75e1e05f429f4416547b35ade34")}></div>

                    <div className="flex-1 space-y-8 text-center lg:text-left relative z-10">
                        <div className={t("9af148cc50af79be6e82f0a4444f82adc3b77e45fc4b6b5f08441d1db9c601f0")}>
                            <ShieldCheck className={t("4d71aafa5e914d775a59d1135156f91e6a7f02fd5b2e9db23335d1472355fc45")} />{t("cf849dedaf2970fd0ebb90cd5e684679f0c5871aaa494d62277ccf24368ccaf5")}</div>
                        <h2 className={t("a4221ce1554ad097bc13ddd45455a472edfae4e9b01003e3f627f1d99cc8ef24")}>{t("d5315f85024c45749b675f435dcb50b2f9992d2689945f085a8d6caf8a47bfb5")}<br className="hidden sm:block" />
                            securely via <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">{t("1b3bb966e2fce167d4b0e18078d24831db393c264fb82fda5484aff95feed4c2")}</span>.
                        </h2>
                        <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">{t("ee13a84d440c6e233500537a300ca6f3ee39967c05bd21cd7b2ce26c779934ce")}</p>
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <div className={t("6f56132efeb80e6194afbe826562410db12aab493a15e4199025a43e76ba4464")}>
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />{t("c361fbfa475c497f23ed062dc4086164cf0ba903c9a76a26402d0514a161f50f")}</div>
                            <div className={t("6f56132efeb80e6194afbe826562410db12aab493a15e4199025a43e76ba4464")}>
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />{t("20c472575b5f1d88dec60048fd5c19388d8c7a648e36af4ff9aa5da1929ff1d3")}</div>
                        </div>
                        <button className={t("db9c336f5c4008d3e26ad9077445654f26057443769dc23531fe0bc5fb472a0b")}>{t("da2348f32bb628c7fe54760b6cac4382b31ada4b9b5ed2e82af04af6cbd36186")}</button>
                    </div>
                    <div className="flex-1 w-full relative mt-12 lg:mt-0">
                        {/* Payment Mockup */}
                        <div className={t("98854598533e29d7b9bd36abadba45411c7f5d3e6da1ef0faffc483c65af28c6")}>
                            {/* Realistic Stripe Card */}
                            <div className={t("cd0ac905748935ecc21b8980b3446544982b0ae950c7a4afabdf26cf31c509d7")}>
                                <div className={t("86369162c289c4e933599142733bf4fd5d60d558ca44f3d61d7f2e4771b4cbf9")}></div>

                                <div className="flex items-center justify-between mb-8">
                                    <div className={t("559cbff48562ace9f96000d3eced9d250a09afe844f6e0d0824a0e8eb1037ae4")}>
                                        <div className={t("12e0203cdb9e0859d19fcedbe556b72d474fa7ba62bcc7a66296d73d8231dc4f")}></div>
                                    </div>
                                    <div className="text-right">
                                        <div className={t("93ddd14f07cdadcb8d761f4389be6937e438873e2b84a5d2ee8716f15480beef")}>{t("839721eed9885e69f992a47d97d061d0bdc05bae5eae4dc28296ae170f7dd731")}</div>
                                        <div className="text-zinc-900 font-bold text-lg mt-1">$99.00</div>
                                    </div>
                                </div>

                                <div className="space-y-5">
                                    <div className="space-y-2">
                                        <div className={t("59aecf77cfe3533ed41741c4b947ccda6a7583797131e4c16c1aa81d14a3031e")}>{t("e846f49c1022b4ebd9c13ffda732cce928c69e64bc734adb17f05ed1a893a7dd")}</div>
                                        <div className="h-12 w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 flex items-center justify-between">
                                            <div className="text-zinc-900 font-medium">•••• •••• •••• 4242</div>
                                            <div className="w-8 h-5 bg-blue-100 rounded-sm"></div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <div className="h-12 w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 flex items-center">
                                                <div className="text-zinc-400 text-sm">{t("1b5f68f875b92599b84c5245d0375b2a17a0f182b3ed9da0a7a1b7fff5f8786e")}</div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="h-12 w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 flex items-center">
                                                <div className="text-zinc-400 text-sm">CVC</div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className={t("d3b418531b81fef8c3580ae923b133c3f4e33b075be24274ff9988e53117a95e")}>
                                        <div className={t("dc7bb792462d206fdbd74f4463bd5294c2d9c5606139d32c1908e9f945e087ec")}>{t("42a327fadf7f52c292b55477b93fbe48b6f54d5eba6d6e12cb954587db19bfda")}<div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center"><Zap className={t("8538c79915735a5f90a137c121ed8b24f1c9f12ed99446aee8c34a5fbb506eef")} /></div>
                                        </div>
                                        <div className={t("9b3dfc5dc6f818c5bef2a4c355abbcc7025e063c27ef63b83d09862045b6c7f5")}>{t("f40a853e58a18759e1f7321d266d63494e320e9651af27d9373ec16380e414b6")}</div>
                                    </button>
                                </div>
                            </div>

                            {/* Floating PayPal Card */}
                            <div className={t("5ec3cd7904531c8e4dbccd29503f6020e1148a5b5f5c17083cc76a2984656ca2")}>
                                <div className={t("ec9f5b86d7a0ad13f1f38eb6f8ca5b2921b52cc6bd0180f0c7bd0b25c9232eeb")}></div>
                                <div className="space-y-4 mb-6">
                                    <div className={t("fbddf9395273ab127a052325024f942da5ef3a25e5197d0eeaccc87c9e1394a2")}></div>
                                    <div className={t("ba158530523875313debc2ea4e98687c8163d5792ead3617c6867fa9208620ae")}></div>
                                </div>
                                <div className={t("76bd2c6abd0655c2832ad17d8cd3c189aac6264fd46e8c93fcf70f3c0c8c2596")}>{t("2f18e6aa69c1e07a93a519c7fe5037a364ba9715600ba841f3d5103e708873ad")}</div>
                            </div>

                            {/* Decorative background glow */}
                            <div className={t("94f2e951bc7fea19d7c835f4eccc8b64db6c17d02793359acb1e8761ea176786")}></div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-16">
                    {/* A/B Testing Block */}
                    <div className={t("ce7d1782dec701bc9222c1ca2393be3cf41b29592b657a5385d023afbb633464")}>
                        <div className={t("1108fb23a5d549bd7c7218c174aa730cd9537d88abb15090d1b9f5533006b44e")}></div>

                        <div className="z-10 space-y-6">
                            <div className={t("45824ae82fb6653bce7a4a5883bdec32b9921e4c87c2d9d8bf9b9f7c5b75274d")}>
                                <Sparkles className="w-3 h-3 fill-white" />{t("7963e5ee80035402d1d182324cbe7e86b81dbedab45a306108beb90333ebdbad")}</div>
                            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-none mb-4">{t("b22c223a4a94ffe2e4a03d173efaffe8b931f715bf65b2b144dd14fcc3c3a8ec")}<br />{t("bf15af04c66b9bfe7247738f62dcd7f52abb609de04109737104d4a8f804e49d")}<br />
                                <span className="text-blue-600">{t("eb906d3001cc62ea15fb91102fabbd94fa44455fcb367ad89a241d236e75b853")}</span>
                            </h3>
                            <button className="px-8 py-4 bg-zinc-900 text-white rounded-2xl text-base font-bold hover:bg-black hover:-translate-y-1 transition-all duration-300">{t("8d8cd546b58d91c300d3149ef40b8d98d3061dc38f15ea937d2ed785a3f25771")}</button>
                        </div>

                        {/* A/B Test UI Visual */}
                        <div className="w-full bg-white rounded-3xl shadow-4xl border border-blue-50 p-8 relative overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-700 z-10 mt-auto">
                            <div className="flex justify-between items-center mb-8">
                                <div className={t("3b71f7cca936a79b9d5dd5780181ea0d786c695c33fae75b60fbf51d9eb7f8d8")}>
                                    <div className={t("15d4f6218e1416851fe4f6f48a2cd5b19b341fad0309e0ee0487665755a41653")}>{t("b82e4b769c6b89c8b90765133fd9402944ed7f19b674947aedf0776cedc4c9e3")}</div>
                                    <div className={t("a7df75a1b933a043053fdb45f530033fd993405d784bbd6ae204c0e8c034b3a6")}>{t("82738b2336e60d6581b2ff7e37ecc839b2837518149f8c51bad84f265efd1f1b")}</div>
                                </div>
                                <div className="text-right">
                                    <div className={t("769fef7999864eec253e2572732a551ebeeb265e12b2996bf8f11a5b9950c853")}>
                                        <Zap className="w-5 h-5 fill-emerald-500" /> +24.8%
                                    </div>
                                    <div className={t("c98993a60e07339159c6f09793c4215afddcb44faf17dcb3f32528c7e0445116")}>{t("236c2620e434fe3130618e575b10a44cc0068c32662e175af002b2469013ec86")}</div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <div className={t("6142c89a1a557d7dbae61c0bd58750c46d24ff55e541e4a577594b8f585b671b")}>
                                        <span>{t("a0a424cc709b401514523294ed5846d7526e34adcddb502faf9b56bc1a65585d")}</span>
                                        <span className="text-zinc-900">8.4%</span>
                                    </div>
                                    <div className="w-full h-4 bg-zinc-50 rounded-full border border-zinc-100 overflow-hidden p-1">
                                        <div className={t("2b20b84eb6e63c24bfeb448c320eaf205b81ca35912c6a1a588e200ac477c8b0")}></div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className={t("6142c89a1a557d7dbae61c0bd58750c46d24ff55e541e4a577594b8f585b671b")}>
                                        <span>{t("eaf1c4c09aa9e24209e5546b4a5f3fb050f3348987a976978dc28d3fae61d18e")}</span>
                                        <span className="text-zinc-900">$124</span>
                                    </div>
                                    <div className="w-full h-4 bg-zinc-50 rounded-full border border-zinc-100 overflow-hidden p-1">
                                        <div className={t("42bdbc69847db82552928d215953d63db49ab4925b9e9cc6b78fab0f72d614e7")}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CRM Dashboard Block */}
                    <div className={t("22302a67a7026ba38f724bc49cd25c2416567c424255f7730ac4429a44988719")}>
                        <div className={t("e41abfb06a0bec5e2a0e9d79fdcf643f873d599967ba50fb8df10f2e04a93526")}></div>

                        <div className="z-10 space-y-6">
                            <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-none">{t("7ce236a877622d1e53a9fec834a1b036fd6fcd7f30673b7b2608805eda77c427")}<br className="hidden md:block" />{t("d2e82d7cbb42c800e66fae13465ff12dfdf68fd8847ceb2425fb1cd9d96ad3ac")}</h3>
                            <p className={t("54369591498d8f6ff788c52bc87b127257187e94e32af347b8e12aacea46fe5e")}>{t("6c803734437137828a976582987a60e84f7f4038744a288df7827e799f87a6f3")}</p>
                            <div className="flex items-center gap-4 pt-4">
                                <div className={t("d9da3e5df3cac33ce3e3023af64e374450244fe9bc35e54296f7aab506480893")}>
                                    {[1, 2, 3, 4].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-zinc-900 bg-zinc-800 flex items-center justify-center overflow-hidden">
                                            <Users2 className="w-5 h-5 text-zinc-500" />
                                        </div>)}
                                </div>
                                <div className="text-zinc-400 text-sm font-semibold tracking-tight">
                                    <span className="text-white">+520</span> leads today
                                </div>
                            </div>
                        </div>

                        {/* CRM Stats UI Visual */}
                        <div className="relative mt-8 group">
                            <div className={t("1f026070d0400383f0bcd0f0f9ddb480a2ed753578e61e4a23638a6a90e6a4a6")}></div>
                            <div className={t("13fbd43caf756096d99301c125f90e3571d6b38eea16898ba95a345a73c54314")}>
                                <div className={t("1dc4b5747d0d2ebe121e0508c2503f0ad178c4113c647fa2bc926b65b7fb27fd")}>
                                    <div>
                                        <div className={t("f2b33f1eecd24690fac78185b997dde9875e8a2ae53eef90ad845fa192bbe1c0")}>{t("cbe208efd16c45f3b951b4b0fbab5e13e08135a9b0cb269234ed82c195f65fc7")}</div>
                                        <div className="text-white text-5xl font-extrabold tracking-tight">
                                            2,845
                                        </div>
                                    </div>
                                    <div className={t("1015569818d3551fae7485cbe5c0951f920d6c51182e8e0fdbc7b3185df56f59")}>
                                        <Zap className="w-3 h-3 fill-white" />{t("117353cae01085efb95852fd6dc63159c5e76f2c4e2fe8489fdf1e2e0ef571e1")}</div>
                                </div>

                                <div className="flex items-end gap-3 h-32 mt-auto">
                                    {[30, 45, 25, 60, 40, 75, 55, 65, 50, 85].map((height, i) => <div key={i} className={t("726fc08dc6e9afd6933850a79f015d3c7236f451321bac2379a176ac11b24a94")}>
                                            <div className={t("bb22fc3815f7814b321cd1b0fe4187413f24358767d927f83b74bbee0b57edc4")}>
                                                {height}%
                                            </div>
                                            <div className={t("d4ee9ef72f77aa42cc9368584d3dd263cbb4c322635f0f60dee7ae33f23ec10f")}></div>
                                            <div className="w-full bg-gradient-to-t from-blue-600 to-indigo-500 rounded-t-lg hover:from-blue-400 hover:to-indigo-300 transition-all duration-700 relative z-10" style={{
                    height: `${height}%`
                  }}></div>
                                        </div>)}
                                </div>

                                <div className="flex justify-between mt-4">
                                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => <div key={i} className={t("13f1e5b678cc7755b7d1c42ceb32471d2f9e51465a72f7e403c90e5f865efa22")}>{day}</div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>;
};