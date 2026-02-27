import { t } from "../lib/i18n";
import React from 'react';
import { Smartphone, Zap, Code2, Sparkles, Flag, LayoutTemplate, Store, PieChart, Activity } from 'lucide-react';
export const FeaturesSection = () => {
  return <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-4 md:px-6">

                {/* Top Feature highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-32 border-b border-zinc-100 pb-20">
                    {[{
          icon: Zap,
          color: 'orange',
          title: t("5cb56e468a9ac6e5fb156bc41c23131453b907bf0ccebf233616fd553dfb8a8a"),
          desc: t("242e06beb1eb6e5e6da73522d803c15917982226f5be058678948a196b49f85d")
        }, {
          icon: Smartphone,
          color: 'blue',
          title: t("4aa859b8790b01d5cb22f9ccc80c4d72d2fd14991ea6d73435421047187bee03"),
          desc: t("a702bc1efc429fbd500605f66a5df8a5e1577d3db4b3ab78344505a487312019")
        }, {
          icon: Code2,
          color: 'green',
          title: t("7e4b49fe81c41b170f50359c17708f016633e6f1e17c5cbf9383acae6730afa5"),
          desc: t("256045be6f1f67987d42b58b051d94d0527dbde5ff06a84e85cd35d523287cb7")
        }].map((item, i) => <div key={i} className="text-center px-4 group">
                            <div className={`w-16 h-16 bg-${item.color}-500/5 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-${item.color}-500/10 group-hover:scale-110 group-hover:bg-${item.color}-500/10 transition-all duration-300`}>
                                <item.icon className={`w-7 h-7 text-${item.color}-500`} />
                            </div>
                            <h3 className="font-bold text-lg text-zinc-900 mb-2">{item.title}</h3>
                            <p className={t("218b4030cc7d156a2d69abb9fb78e84de34def72b1ae5f4023ec7679438988ec")}>{item.desc}</p>
                        </div>)}
                </div>

                {/* Feature 1: AMP Pages (Left Text, Right Image) */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-20 md:mb-40">
                    <div className="flex-1 space-y-8 text-center lg:text-left">
                        <div className={t("6927272e251f838a432c8fb0d73c6cc4e7568ae313c21d9f9be07eb69eda61f7")}>
                            <Sparkles className={t("92298b6692a99c10e6f04cd5f69eeaeb595a2fbb302b80486239a4871c65d267")} />{t("b64a34b281ab42a99c3f42dd526dbec93c37fdfc47e153f3aa4e7330b48fee64")}</div>
                        <h2 className={t("cdf5e6202bcbfa7a4adbb83f3261dee87fe9a52728b49fd583c349b6e779ff0e")}>{t("1cd6dc1c9864babc4a4db12469fbe7c069a74fd620c16d400792f6ac24235622")}<br className="hidden sm:block" />{t("0695b563acde461fc2f8d9aebccf35c7596ac458b8d8e067c602fb7b4e5f1578")}<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 inline-flex items-center gap-2">QuantumPages <div className={t("db94dfea912593bc89781dab4a8012bc91cf019873b18dd8ed7b67a0f236ee7a")}><Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-white" /></div></span>
                        </h2>
                        <p className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">{t("3578cda969dce1478ba7f00fec5a3c0e47373422d3d40d4a7d55e805abc54d7d")}</p>
                        <div className="space-y-4 pt-4">
                            {[t("09056132862e66e90fb30b719c7e55c3071b079892c011156cf9496a2674b7bb"), t("6fc0a8a74c8ba8534dcda71159abb044fc7b7c7f388f10e2df6a6b13dbe8b4ed"), t("3c1493a15e6c5cc26e72991b8b1d5d3d3d8c3306638aa402fb7e3fc386a3eef4")].map((text, i) => <div key={i} className="flex items-center gap-3 text-zinc-600 font-semibold justify-center lg:justify-start">
                                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                                        <Zap className="w-3 h-3 text-green-600 fill-green-600" />
                                    </div>
                                    {text}
                                </div>)}
                        </div>
                    </div>
                    <div className="flex-1 relative w-full lg:pl-10 mt-10 lg:mt-0">
                        {/* Phone Mockup Placeholder */}
                        <div className={t("3feca0b5156832ddd87cb32b9417850e46c748a36acdbf94034d84650a56bbee")}>
                            {/* Layered Glow effects */}
                            <div className={t("582da302bc22484fd269fd8b7aee3f62bf2a3fb14c4285645f4b3772b3002fb5")}></div>
                            <div className={t("6f1e07fe34c261ef6753a4bd96300a186e1df329364649521eda939673ebf68e")}></div>

                            {/* Device Frame (iPhone 17 style slim bezels) */}
                            <div className={t("97864814e470b1a914833e47273109b6f091cc8a964502312a678de66f54d9d3")}>
                                {/* Dynamic Island */}
                                <div className={t("8754ce0cc7fad7358dd3a121d8803b2bdfd14604ea3df5289a2bfbaea3e2473f")}>
                                    <div className="w-10 h-1 bg-zinc-800 rounded-full mr-1 opacity-50"></div>
                                    <div className="w-2 h-2 bg-zinc-800 rounded-full"></div>
                                </div>

                                {/* Screen Content */}
                                <div className={t("bc82490c982759283e6715b1136d4d2470d116e05110440a237c3c78f9c7fc16")}>
                                    {/* Header */}
                                    <div className="h-20 bg-gradient-to-r from-blue-600 to-indigo-700 w-full pt-10 px-6 flex justify-between items-center relative z-20">
                                        <div className={t("eeeba923e9b0d749ef0f9798243ac58845bc18d5164f975ec5600b3d7daa5806")}></div>
                                        <div className={t("9d2df21e4430c1a6b2bc16ec79510920dafae029df138dbca480a85be0a0dcce")}></div>
                                    </div>

                                    {/* App UI Elements */}
                                    <div className="flex-1 overflow-hidden relative bg-zinc-50">
                                        <div className="p-6 space-y-6">
                                            <div className="space-y-2">
                                                <div className="w-24 h-4 bg-blue-100 rounded-lg"></div>
                                                <div className="w-full h-10 bg-zinc-900 rounded-2xl"></div>
                                                <div className={t("aa02b635f3d55b4694934966886bfeb830bd2bf1f587f562f19b9fa8c53ab8f3")}></div>
                                            </div>

                                            <div className="space-y-3">
                                                <div className="w-full h-3 bg-zinc-200 rounded-full"></div>
                                                <div className="w-full h-3 bg-zinc-200 rounded-full"></div>
                                                <div className={t("4479dc812f7c189cbb1fd60a0ad70134888ca955e79e78c5e11bec1790851215")}></div>
                                            </div>

                                            <div className={t("aea69201ead1ae40af7e97bbcb1812907c7c25e106a7613550f6bf75df3ffc0a")}>{t("e993dd9ac5bd3f05a6d138c59d6cc557b2bd8754554cca82a0ff472796608a59")}<div className={t("530daf5cb0f28b30d105797addc9d65135c5a789ed8ab6ae7495d68692acc2ee")}><Zap className="w-3.5 h-3.5 text-white fill-white" /></div>
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
                <div className={t("1c3194c4c88e14fc930cf17197d016caa4be2621c841412ec24bccfd88097041")}>
                    <div className={t("ddb3e0bffef30ea2b9788e60e726de36e469ca9cffaa554060f63b196c92291d")}></div>

                    <div className="flex-1 space-y-8 lg:pl-12 text-center lg:text-left relative z-10">
                        <div className={t("ec71ae5e327ea7f0cc9a492e858ccb608eaae2bd80511804db4e945ffb03c049")}>
                            <Sparkles className={t("cff7dd36d9a1911e80a9bd4adb89f0e4745c8fa5b4b16b2da823640d3b1f82f8")} />{t("df637044089d0f8da2700657006767040b68b5b29a005a479936d48a12d90f20")}</div>
                        <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">{t("9b9d29e53065273a242edaec9ac41daeb6027f683a411530619254f79489e18b")}<br className="hidden sm:block" />{t("d9374ef22fb2f7cbfa56177f174e2d04f5ab839fc826cb1c0f735cef1f3122c2")}</h2>
                        <p className={t("c827251894a9fb0c08e2284efc1721086e9aff012aa7a0d53e0234f2afba3554")}>{t("f5621d3c8f7ad2b7c1ee3f02957d33b24c41eecf9d3496866a5cc5da0cb4c7cc")}</p>
                        <ul className="space-y-4 mt-8 max-w-xs mx-auto lg:mx-0 text-left">
                            <li className={t("20b3fa953cd9b937c13b4d31e1ff03ea2cb9e8a531805ec28e900f8780fc98d8")}>
                                <div className={t("400c78fc312bf66104b32c2ad6e09590d50254e04ef1733592cf23d0e42d2c40")}>
                                    <Zap className="w-5 h-5 text-amber-400 fill-amber-400" />
                                </div>{t("c96b6dbca2e58b05355267c959ab50cff28a1c2b9a175e8f15e2ec77cbf9a097")}</li>
                            <li className={t("20b3fa953cd9b937c13b4d31e1ff03ea2cb9e8a531805ec28e900f8780fc98d8")}>
                                <div className={t("e83e27978d8a4fa02d5859807a2eb77061db50aefdf42e6afe9ea3a8739f0b67")}>
                                    <Smartphone className="w-5 h-5 text-blue-400 fill-blue-400" />
                                </div>{t("6b508628b62e4943b8fbaea280b3b4f1c6a50094427788887d1783fdae707d71")}</li>
                        </ul>
                        <button className={t("b9da62109178a766fe7b906bef1419f7d454452f7938517c7cd43d32b654de38")}>{t("5ddf955cca8d9320bf4179dec018c1f5e255f2ce8601ef5053766976fb212fa0")}</button>
                    </div>
                    <div className="flex-1 w-full mt-10 lg:mt-0 relative z-10">
                        {/* Builder UI Mockup */}
                        <div className={t("a86f5b102a79789310ae4c90c98a069619b77fc3f7828407d2893b1ee2a7139b")}>
                            {/* Builder Toolbar (Slimmer Height) */}
                            <div className={t("a3cd0ed8401056e364a98d7ffee07d6ace5dabf9c1bb424cd2aa74caeb1429cb")}>
                                <div className={t("1742000c086b26bde503f35bdb17e2115d7a670f26b3bde21433810cd8c96180")}>
                                    <div className={t("e38846022bcc37149ae7297b961be417951efc009085a057d1deef03ca2ba52a")}></div>
                                    <div className={t("3c824edf67ed08cb7ae984d7df0cd83ff6367cfea6461842be0618414581f991")}></div>
                                    <div className={t("3ab5f2ffd7a0643da1a89a3dd7a81f11f050b08ca98d9404996f6ba29fd44039")}></div>
                                </div>
                                <div className="flex-1 flex gap-2">
                                    {[1, 2, 3, 4].map(i => <div key={i} className={t("4a0766425d113317b451c900e3b7ceff92ae256db2e84f1bc0227ac48d28d6b6")}>
                                            <div className={t("81713d7a8131b59e199cac46f1baf5cfea80c02ebd538bfaa5aa9ca3772e8f19")}></div>
                                        </div>)}
                                </div>
                            </div>
                            {/* Builder Canvas */}
                            <div className={t("645f38367387429669d79a8ecf3e06337ddab64b61b411ac0d227036b04f8e47")}>
                                <div className={t("4d3e7ee9852e57d756fb41371d956aaa03653f0c2455a9f0507925eb0080e83a")}>
                                    {[1, 2, 3, 4, 5].map(i => <div key={i} className={`w-full h-8 bg-zinc-200/50 rounded-lg ${i === 1 ? 'animate-pulse bg-blue-100' : ''}`}></div>)}
                                </div>
                                <div className={t("c5cb29ae3ec7a4d378fd11dbf4379825df46a8d65d0923d01cb1c4f7a880eaa2")}>
                                    <div className={t("76796f3e7ba873fa5655105bf8e903621b14008b672a8960aa6ea59dd07792fe")} style={{
                  backgroundImage: 'radial-gradient(circle, #2563eb 1px, transparent 1px)',
                  backgroundSize: t("883562950cafc14457eb2639ee243917e43454729aac6a96feaa732097a5d412")
                }}></div>

                                    <div className={t("a90fd3cbf9271d9751c83e4cd4ea369e5871c5c328eb63e5debfc0e5457b766b")}>
                                        <Zap className="w-10 h-10 mb-3 opacity-40 animate-bounce" />{t("7294abd025e00344118a7aba8e123907807537d2e52884d1f46fe3918bce66e9")}</div>
                                </div>
                            </div>

                            {/* Floating elements simulating drag and drop interaction */}
                            <div className={t("4edc8f8822992356de5c5c8eade7c4eaa8c122d53c9a4bb1a71aaa9566f7ef88")}>
                                <div className="flex items-center gap-3 mb-3">
                                    <div className={t("7d271fb1771bb83cf85a71f0138f56693681dbf78623914f0cb2c271d3fb0eb6")}>
                                        <Zap className="w-4 h-4 text-white fill-white" />
                                    </div>
                                    <div className="h-4 w-20 bg-zinc-900 rounded-full"></div>
                                </div>
                                <div className="w-full h-20 bg-zinc-50 rounded-xl border border-zinc-100 flex items-center justify-center overflow-hidden">
                                    <div className={t("42b76d3d03bf4714e76c6038fb1c3637575e717b9846d409542b3f37e425a95d")}></div>
                                    <div className={t("d6da776f7880521144e4bf847df27413f80ebae40f45e035089c7d98f230a33e")}></div>
                                </div>
                                <div className={t("7d47c7ba799c5943ddd5d5029bf15dadeb3cc94946b0254113d4e9d10fb4f6e1")}></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature 3: Templates */}
                <div className="text-center mb-20 pt-16">
                    <div className={t("25b3fdd6d594f039a3b5a0a277733dfe52a9e0acf64b89c71270646b4fb2ac2a")}>{t("996f87b386e1a749cd732144efb70e9ab253be425bfe8c8b79acab98ee1ad5e7")}</div>
                    <h2 className={t("5ec6996188e985a2397e4886a1cc2801459175daf8bdf0b7cb1f63810d8016b8")}>{t("25055d820ec93ccad0a5dc24151b03437023e6e3c33133d73a3bee9df99d08e7")}<br className="hidden sm:block" /> landing pages
                    </h2>
                    <p className="text-lg text-zinc-500 max-w-2xl mx-auto mb-10 font-medium">{t("993a957d1977087b551cf2c978e9647dabe6f22e1d77fff61f138234f291099e")}</p>
                    <button className={t("1c893082e45c35379b08b8bc5cd29e57593da8ba77988c58fa40a5cd76988f29")}>{t("53322668363b451e50182ebc149ab16915a9bad8aa66e7ac5188df3222b30cc9")}</button>
                </div>

                {/* Templates Visual Mockup */}
                <div className={t("58568fc0f42128631f3cbd30dcfeef9b1e75812ed7be091fd18f04844dd2ec4e")}>
                    {/* Gradient fade layer */}
                    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>

                    <div className="max-w-6xl mx-auto px-6 md:px-12 h-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 h-full">
                            {/* Column 1 */}
                            <div className="space-y-8 translate-y-24 group-hover:translate-y-12 transition-transform duration-1000">
                                {/* Card 1: Faded Mint Wireframe */}
                                <div className={t("9116536ad614fdb695ed2f300ccc7457eef41b57893f7c4ed7a5c4cd2941c0b4")}>
                                    <div className={t("db65968ec5b2ea8680226a77e0a1f28b79bf0adef9d990023eed25a4ed01a387")}></div>
                                    <div className="flex-1 p-8 flex flex-col justify-end space-y-4 bg-white">
                                        <div className={t("f5cb397eafaac89942d5d70bec2c1a5b50bccacbb8cefb27b2480f8dddf43803")}></div>
                                        <div className={t("488e84f2ba5f86a98865ab5bc3c13fa86094d6e002843fbcae9f1e4b1c85e952")}></div>
                                        <div className="pt-4 flex gap-3">
                                            <div className={t("6efabb448797167121fd6a8a95131486e5c8b9ccbad6159abe691547b69c0044")}></div>
                                            <div className={t("56c32759173fd46ec48bb87421b88256da127f3100845a7e85211c4c6342c9de")}></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 2: Faded Rose Form */}
                                <div className={t("76537623f60130b236d864439038491b3d773006914595b17e2fd09fc962b21b")}>
                                    <div className={t("b268eb24df22c1464ffc0a54a2626ce0ba11d850baa0ff8a9500785d9a9e9a3c")}></div>
                                    <div className={t("3436780452e5edb5d58062faf49e02bdcb59f854917914119f590aec87ca26ac")}></div>

                                    <div className="space-y-4 flex-1">
                                        <div className={t("79a6dcb372efba8dbb646c7b9a034987e985d53874dc675889e1f7d2d101c6a6")}></div>
                                        <div className={t("79a6dcb372efba8dbb646c7b9a034987e985d53874dc675889e1f7d2d101c6a6")}></div>
                                        <div className={t("62888257603e7a5d6020b6618a31515eb653a3f27b012a54badd3ba365cab43b")}></div>
                                    </div>

                                    <div className="w-full h-11 bg-rose-400 rounded-xl mt-6"></div>
                                </div>
                            </div>

                            {/* Column 2 */}
                            <div className="space-y-8 translate-y-4 group-hover:-translate-y-8 transition-transform duration-1000">
                                {/* Card 3: Soft Blue Browser */}
                                <div className={t("1944085c1ac42e0c1ac1778ddf9918c2b43a62813435ddbbc0686cddd2dfb68f")}>
                                    <div className={t("c024f13eefa91aa35f2e4e608943dea242f5bca21759833bad0cfc46ea85531e")}>POPULAR</div>
                                    <div className={t("0981cbba002bf81958b90c2e54586f133f8d1008293704d5c2de90b33936a185")}>
                                        <div className={t("0c47942ca4b8ef46cf0346ccc55f69ed2fd990154718208771fc22177715c4bc")}></div>
                                        <div className={t("0c47942ca4b8ef46cf0346ccc55f69ed2fd990154718208771fc22177715c4bc")}></div>
                                        <div className={t("0c47942ca4b8ef46cf0346ccc55f69ed2fd990154718208771fc22177715c4bc")}></div>
                                    </div>
                                    <div className="flex-1 p-6 flex flex-col space-y-5">
                                        <div className={t("c711e8a0d13900ed2526d39d32a7cb2bd9258700a2cfad83e025449b5b30954b")}></div>
                                        <div className="space-y-3 flex-1">
                                            <div className={t("441cad1a325278ac542e95500f8fea6d09abce134f74fba564133119c30344a7")}></div>
                                            <div className={t("441cad1a325278ac542e95500f8fea6d09abce134f74fba564133119c30344a7")}></div>
                                            <div className={t("d434817e2c243651c86035c63ddd773ccfe24d71cdcab2bc24119def52c25001")}></div>
                                        </div>
                                        <div className="pt-2 flex gap-3">
                                            <div className="flex-1 h-9 bg-blue-400 rounded-lg"></div>
                                            <div className={t("6bdd345fac9d855ea68276bd6233924846469cccd8f320c2988c1f172900e9c1")}></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 4: Faded Amber Cards */}
                                <div className={t("8ce930c290beac3ffa3538cd6422277a74de856e57aade1b6478137ee3c211e5")}>
                                    <div className={t("f07e1f011cf1e508c1fa4c48477d367bf0ee9d247180d163c74273e21fc90eac")}>
                                        <div className={t("cef5a61ba56ec169531442e4ff2797a8fbe61da16fe8be515d7b4f3e0338fa61")}></div>
                                        <div className={t("cef5a61ba56ec169531442e4ff2797a8fbe61da16fe8be515d7b4f3e0338fa61")}></div>
                                        <div className={t("cef5a61ba56ec169531442e4ff2797a8fbe61da16fe8be515d7b4f3e0338fa61")}></div>
                                    </div>
                                    <div className="flex-1 p-6 flex flex-col">
                                        <div className={t("9346bbbb9ec5488ba8d44aaec3a42cf52e04436f9973ae931f339865745014f3")}></div>
                                        <div className="space-y-3 flex-1">
                                            <div className={t("0b2a8391fdaaa3d6e4300f0c3e9d9ae8a847c319c09033d126e84c39ccc30c1f")}></div>
                                            <div className={t("92c127fd17ec6c888a2fa2ba99f8d5ae18a4b62ed857ae6dd1819ec139d9672c")}></div>
                                        </div>
                                        <div className="flex gap-3">
                                            <div className={t("115e9dcb3c9de1a7740adba897181c82cc8ff9922bef121040fc702820c233d7")}></div>
                                            <div className={t("ec58ccdd130b47d88a253b164e520ddeb3f9c7f68de1d91c739418e0478c888d")}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Column 3 */}
                            <div className="space-y-8 translate-y-16 group-hover:translate-y-4 transition-transform duration-1000">
                                {/* Card 5: Soft Lilac Stats */}
                                <div className={t("2b4fa20956f6046504f75ce7dec90f275712f33b086bc3a90703d2f2dd0dc5a8")}>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                                            <div className="w-4 h-4 rounded-full bg-purple-300"></div>
                                        </div>
                                        <div className="space-y-2 flex-1">
                                            <div className={t("9dfb3d0dbee6bae3fc0f461dac5477935acbb7b6e2fd939b479a9634609a6cb0")}></div>
                                            <div className={t("18d3e913128d323dffedf82df4bde5a560a506c8251fda73736a92965d6acc21")}></div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3 mb-6">
                                        <div className="h-16 bg-purple-50 rounded-xl"></div>
                                        <div className="h-16 bg-purple-50 rounded-xl"></div>
                                    </div>
                                    <div className={t("4e2c953252d58a904bf2a0776503a7f671ff83c3af4f9bc3a3d1c3af4c7b0f41")}>
                                        <div className={t("25bbf981b5ad583edb0057a2071b9a253e8c14300d04a97b52fdfcf8c628d578")}></div>
                                        <div className={t("6d35a62c9f064cc0edfc059dde1b4e188b1722d54a7e1068365013fc9ac01c2f")}></div>
                                        <div className={t("fd1afb35dea64576d152d8e454eaef39797924d053c854f8dbede04b56f988a5")}></div>
                                        <div className={t("0a1a699005eebc197c51ae1db2cacc1b7335d0845c6a72e2632da8c47ed42218")}></div>
                                    </div>
                                    <div className="w-full h-10 bg-zinc-800 rounded-xl"></div>
                                </div>

                                {/* Card 6: Faded Slate List */}
                                <div className={t("2b2ddcba25907fd9898e8027d56bd13cad02976544987ae23dbad9a4883b020e")}>
                                    <div className={t("401f5054d76bcfaf8d5339f49fbc9cd97932c3cddadbce72a749a9488006b5b4")}>
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
                                            <div className={t("8ab6f37826ede0ed0b028722ddff3f09f67537d43c4769231e380cde74eed010")}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>;
};