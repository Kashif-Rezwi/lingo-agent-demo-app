import { t } from "../lib/i18n";
import React from 'react';
import { Sparkles, Zap, ArrowRight } from 'lucide-react';
export const BottomCTA = () => {
  return <section className="relative py-24 md:py-32 overflow-hidden">
            {/* Complex Gradient Background */}
            <div className={t("967ba6ba53479aca0b1d492fc046a0caf6070b00cbd7b17ef204af78ae0cfcdc")}></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-violet-900 opacity-90"></div>

            {/* Animated Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className={t("2ed1b1d5678aa9e5c26692fda3f53ab3f960b73792895132472a341185b84974")}></div>
                <div className={t("1e2401ee4431ba2bae4b23011ef96701ca46abe3de67e410a79486ad96448d96")}></div>

                {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className={`absolute w-1 h-1 bg-white rounded-full opacity-20 animate-float`} style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${i * 0.5}s`,
        animationDuration: `${3 + Math.random() * 2}s`
      }}></div>)}
            </div>

            <div className={t("360885b24da8058059e5aae40feac3843b4f13ac3e13c1f8bfdbad6751caf615")}>
                <div className={t("6e74b66a06459394760c8360da2327487ba9a8d00adfbae6856adb69ef431911")}>
                    <Zap className={t("0155a4e96c826779806db1552a5bc35cda67ea9483010d3cfc1243a172a4b5d2")} />{t("be87b22a90d03b29b314c40cb3fe44fc2c5975b6b7f49d1e16e911eaa04c73be")}</div>

                <h2 className={t("bf6d037edb56df9db30863a790c7044dd3e4830a281f2c3d210c5bcf8e527eb7")}>{t("a08f41843fda6890e35d457059a18975355e16c4e56b4ac6df13cda1ed5fe7a6")}<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">{t("17ee712d9d43d13db1d0a79295cba8869b336e67e961fbe65c6c17a9c9b60ac7")}</span>
                </h2>

                <p className="text-blue-50 text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-medium leading-relaxed opacity-80">{t("a2cee9f79e432bab715c6176d16474a14ce1f481fc04f77712d98bd7ed91658e")}</p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button className={t("42b2f0e120a24d4fb166b7666823fb791cceb8f65ed5be507c2b8b244abaf111")}>{t("deff99f8b75b0758e09ca5fdfa8a76380bfbc76d949ce7537c27671551359b8b")}<ArrowRight className="w-6 h-6" />
                    </button>
                    <div className="text-left py-2">
                        <div className="flex items-center gap-1 text-amber-400 mb-1">
                            {[1, 2, 3, 4, 5].map((_, i) => <Sparkles key={i} className="w-4 h-4 fill-amber-400" />)}
                        </div>
                        <p className="text-white font-extrabold text-sm uppercase tracking-widest">{t("acf38acf4ee1deae27dffcfd499cdee4bc3d4f6886bcad057d659f3d8c379aa8")}</p>
                    </div>
                </div>

                <div className={t("da1b402bb6a50704cb039032701b2f63856dda5a7aa9b566b25e88c0a39a5172")}>
                    <div className="flex items-center gap-2">
                        <div className={t("e590c69a1802d9b55d882e3aafcdaab0734ea21d5832697e021865f56f3635c1")}></div>{t("1a01c448627819fe0524da443fd923e0c82f719e2f31c4a5790b783548ce0e7b")}</div>
                    <div className="flex items-center gap-2">
                        <div className={t("e590c69a1802d9b55d882e3aafcdaab0734ea21d5832697e021865f56f3635c1")}></div>{t("b3f0f6b87f1496301b2fc3986a175fc3a6e69da6bc6d6af5f6be1b6445bc6cea")}</div>
                    <div className="flex items-center gap-2">
                        <div className={t("e590c69a1802d9b55d882e3aafcdaab0734ea21d5832697e021865f56f3635c1")}></div>{t("0e043e9c9664bd8f2aee5f2bb40c6bf80d4c64dbdf04844f441bd4a00bd6cb5d")}</div>
                </div>
            </div>
        </section>;
};