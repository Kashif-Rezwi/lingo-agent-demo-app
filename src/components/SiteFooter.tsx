import { t } from "../lib/i18n";
import React from 'react';
import { Zap, Twitter, Github, Linkedin, Globe, ShieldCheck } from 'lucide-react';
export const SiteFooter = () => {
  return <footer className="bg-white border-t border-zinc-100 pt-24 pb-12">
            <div className="max-w-[1200px] mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
                    <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-8 flex flex-col items-center text-center md:items-start md:text-left">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center group cursor-pointer transition-transform hover:-rotate-12">
                                <Zap className="w-5 h-5 text-white fill-white" />
                            </div>
                            <span className="text-2xl font-extrabold tracking-tight text-zinc-900">QuantumPages</span>
                        </div>
                        <p className="text-lg text-zinc-500 leading-relaxed max-w-sm font-medium">{t("64e9c5f7dd0f01ec7124d0a06222388a5227f79a4fb6d0268342780d292ff346")}</p>
                        <div className="flex gap-4">
                            {[Twitter, Github, Linkedin].map((Icon, i) => <button key={i} className="w-12 h-12 bg-white border border-zinc-100 rounded-2xl flex items-center justify-center text-zinc-400 hover:text-blue-600 hover:border-blue-100 hover:shadow-xl transition-all duration-300">
                                    <Icon className="w-5 h-5" />
                                </button>)}
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h4 className={t("8069ebc4f46eb429cc5c257d0bf5dfbc144fed3eae3fcc9b1c74e919163951fb")}>{t("fb9ef894175c327470f768d95ca7bee65e19853a0eaace3805f8a7b8a12270da")}</h4>
                        <ul className="space-y-4 text-base font-bold text-zinc-900 flex flex-col items-center md:items-start">
                            {['Features', 'Templates', 'Integrations', 'Pricing', 'Showcase'].map(item => <li key={item}>
                                    <a href="#" className="hover:text-blue-600 transition-colors flex items-center gap-2 group">
                                        {item}
                                        <div className="w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"></div>
                                    </a>
                                </li>)}
                        </ul>
                    </div>

                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h4 className={t("8069ebc4f46eb429cc5c257d0bf5dfbc144fed3eae3fcc9b1c74e919163951fb")}>{t("de4743c879734dc38cb3e270ecefcae077c3c2e626f9298115d5a03c8613f89b")}</h4>
                        <ul className="space-y-4 text-base font-bold text-zinc-900 flex flex-col items-center md:items-start">
                            {[t("5d8c71abc527284cd463aa58f3f48098af5ab2f4225a744aa930a4b0e27d7395"), 'Careers', 'Blog', t("f8d47b82e285ba9584ad79631b61d57c5887b2fc1ddcc29093ee7f88c4b2042d"), 'Privacy'].map(item => <li key={item}>
                                    <a href="#" className="hover:text-blue-600 transition-colors flex items-center gap-2 group">
                                        {item}
                                        <div className="w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"></div>
                                    </a>
                                </li>)}
                        </ul>
                    </div>

                    <div>
                        <div className="p-6 bg-zinc-50 rounded-3xl border border-zinc-100 space-y-4">
                            <div className="flex items-center gap-2 text-blue-600">
                                <ShieldCheck className={t("348dbf07e24cb386e8bc4b305468d762779317de9dc087716a12b52b8bf62ab2")} />
                                <span className="text-xs font-extrabold uppercase tracking-widest">{t("5a4f7141612cec02f76c1eb57b329853d1d9fe0f9a60ee042a03bb02eafb174b")}</span>
                            </div>
                            <p className="text-sm text-zinc-500 font-medium leading-relaxed">{t("8921d1b6c572f5022f6c7a893db12c85527ae36e92e7b62b93f40963524a207d")}</p>
                            <button className="w-full py-3 bg-white border border-zinc-200 rounded-xl text-zinc-900 text-xs font-bold uppercase tracking-widest hover:bg-zinc-100 transition-colors">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-zinc-400 font-extrabold uppercase tracking-widest leading-none">
                        <p>{t("9a5ee8f51806a44e27577be77dde606be7accd0331c83053334391a6cf9aae42")}</p>
                        <div className="hidden md:block w-px h-4 bg-zinc-100"></div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                            <span>{t("39bd8d494d8df83b6174fa6354756817cf893b9ad31ad8f1c0c6d6fa6dce6f56")}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-zinc-400 hover:text-zinc-900 cursor-pointer transition-colors text-xs font-extrabold uppercase tracking-widest">
                            <Globe className="w-4 h-4" />{t("965ca42ceebd6151b7603088550b5e8e78d60cf3f7683bea75c7f72bc91fe710")}</div>
                    </div>
                </div>
            </div>
        </footer>;
};