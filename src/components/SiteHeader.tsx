"use client";

import { t } from "../lib/i18n";
import React from 'react';
import { Zap, ChevronDown } from 'lucide-react';
export const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return <header className={t("86497f2222c42171c6707b21279ce9c28239d890408d42a3bf81ec806b6a3289")}>
            <div className={t("2868a15fd9a049360ae6ddf6aefd3e53962a09a3a26668bef90a89e46cce9417")}>
                {/* Logo */}
                <div className={t("427450e43f7d1021fce51e6dbbbae25c71a01cad144179b7cd312924f23fac40")}>
                    <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center transition-all">
                        <Zap className="w-5 h-5 text-white fill-white" />
                    </div>
                    <span className="text-xl font-extrabold tracking-tight text-zinc-900">QuantumPages</span>
                </div>

                {/* Main Nav (Desktop) */}
                <nav className="hidden lg:flex items-center gap-8">
                    {['Product', 'Solutions', 'Resources'].map(item => <div key={item} className={t("7b2c9a8c29594b3639eeeeaf01e914079653ef3974e2ab6d639c18782f6ab274")}>
                            {item} <ChevronDown className="w-4 h-4 text-zinc-400 group-hover:text-blue-500 transition-colors" />
                            <span className={t("b324d88d3e584a429d51ce274e4f842d8c4e38048ceb5fe9b977271544031e73")}></span>
                        </div>)}
                    <a href="#" className={t("514cfbc9e5d79d2314f6156bfabbce5db8be5fbaced23a6ee871e3ccb3fe08b5")}>{t("dfe95783edfef7918760312f94edd764f4ce3ffd38b90c2c955a0cc3b250f040")}<span className={t("b324d88d3e584a429d51ce274e4f842d8c4e38048ceb5fe9b977271544031e73")}></span>
                    </a>
                </nav>

                {/* CTA & Mobile Toggle */}
                <div className="flex items-center gap-5">
                    <a href="#" className={t("8b554610a8d8df9b4992d4d384b22b1b313b4dd8ae04fece707186fce2326599")}>{t("9d6322c1f4d9d3f38aed8bfbe0b2bcadf66ad82c008476fa62541fa069138e94")}</a>
                    <button className={t("f2012d3988a258c5afee50db85e2d18b6304aa02aeeb4aef9376e9bd9439988a")}>{t("983f311018642b0ae60c71253b5735579906d43d260ea926ebe5e815b1c97abb")}</button>
                    {/* Mobile Menu Button */}
                    <button className="lg:hidden p-2 text-zinc-600 hover:bg-zinc-100 rounded-lg transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <div className={t("2653ec00c138e67f8b6dde547fd31e26407263036011f28884615255af2a18d0")}>
                            <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && <div className="absolute top-[72px] left-0 w-full bg-white/95 backdrop-blur-2xl border-b border-zinc-200 shadow-2xl lg:hidden max-h-[calc(100vh-72px)] overflow-y-auto animate-in slide-in-from-top duration-300">
                    <nav className="flex flex-col p-8 gap-6">
                        {['Product', 'Solutions', 'Resources'].map(item => <div key={item} className="flex justify-between items-center text-lg font-bold text-zinc-900 hover:text-blue-600 transition-colors border-b border-zinc-50 pb-2">
                                {item} <ChevronDown className="w-5 h-5 text-zinc-400" />
                            </div>)}
                        <a href="#" className="text-lg font-bold text-zinc-900 hover:text-blue-600 transition-colors border-b border-zinc-50 pb-2">{t("dfe95783edfef7918760312f94edd764f4ce3ffd38b90c2c955a0cc3b250f040")}</a>
                        <div className="flex flex-col gap-4 pt-4">
                            <a href="#" className="text-center py-4 text-lg font-bold text-zinc-900 border border-zinc-200 rounded-2xl hover:bg-zinc-50">{t("9d6322c1f4d9d3f38aed8bfbe0b2bcadf66ad82c008476fa62541fa069138e94")}</a>
                            <button className={t("f9f72fc8d6574e5fb07a91f8fb177115421a2b8d14b9824afdab188c79795cab")}>{t("983f311018642b0ae60c71253b5735579906d43d260ea926ebe5e815b1c97abb")}</button>
                        </div>
                    </nav>
                </div>}
        </header>;
};