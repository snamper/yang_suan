function  loadxing(s){
var xingShi=new Array();
xingShi["w"]="王|吴|魏|汪|万|武|韦|温|文|伍|翁|邬|卫|巫|闻|尉|危|未|无|乌|位|宛|隗|蔚|毋|五|沃|琬|慰|胃|惟|腕|雯|误|帷|哇|恶|违|畏|网|瘟|忘|钨|瓮|尾|兀|巍|威|旺|务|汶|维|伟|瓦|物|委|午|晚|悟|微|弯|味|梧|仼|亡|隈|我|窝|峗|稳|湾|忤|倭|呉|玮|炜|衞|娃|舞|任|母|冒|惌|完|问|鬼|傀|媿|郁|烓|薳|蒍|为|戊|吾|枉|往|衽|外|仵|望|五王|伍王|威王|王周|王孙|王叔|王史|王人|王官|王父|王子|完颜|微生|巫马|闻人|母将|毋将|母邱|母丘|毋邱|毋丘|乌米|乌弥";
xingShi["z"]="张|周|赵|朱|郑|曾|钟|邹|章|庄|翟|詹|左|祝|宗|卓|臧|锺|仲|甄|查|占|诸|祖|支|战|竺|湛|展|招|智|种|昝|訾|藏|植|职|仉|兆|鄫|终|宰|诌|樟|庒|纂|瞻|祗|偡|溱|贞|桢|吱|辗|蜡|责|漳|株|锥|纸|炤|挚|篆|赀|丈|脂|州|札|则|浊|做|足|砖|栈|眨|哳|牐|扎|皱|紫|荘|专|志|钊|政|泽|再|枣|只|术|直|踪|忠|甑|正|珠|哲|装|乍|旃|阵|曽|彰|闸|柘|制|颛|枕|住|绽|找|着|涨|沼|照|鈡|糟|芝|昭|梓|族|寨|斩|知|仄|孜|倬|珍|芷|止|赞|综|助|值|奏|猪|渚|陟|注|站|桎|醉|致|舟|窄|振|枝|指|冢|账|至|针|坠|诏|槠|抓|宅|早|帚|诛|瞩|在|徎|咨|填|矤|郮|昃|晨|缴|徼|祭|禚|崇|赤|呈|治|缯|朝|邾|资|迮|笮|爪|折|鸷|转|驺|俎|长|重|肁|鐏|栽|载|箴|葳|增|罾|组|阻|作|柞|祚|胙|子|主|郅|竹|纵|最|总|字|肇|衷|佐|自|镇|中|壮|征|者|掌|真|诸葛|长孙|左丘|颛孙|钟离|宗正|宗伯|钟吾|中英|中央|中野|长兴|宰父|子车|仲孙|宗政|主父|祝融|左人|铖尹|铖巫|取虑|中行|仲长|周生|周阳|朱阳";
xingShi["l"]="李|刘|林|梁|罗|吕|卢|陆|廖|赖|雷|黎|龙|鲁|柳|楼|骆|凌|路|兰|蓝|连|娄|栾|冷|厉|郎|芦|乐|劳|来|栗|蔺|鹿|廉|练|逯|郦|隆|利|伦|雒|励|粱|历|旅|络|洛|陇|留|畱|伶|泠|彾|吝|恡|悋|列|烈|良|联|力|狼|朗|脼|朖|郲|逨|拉|剌|禄|飂|淩|峦|泸|两|鹭|嵺|逻|铝|醴|略|累|淋|蜡|藜|烂|竜|粮|浏|憀|頼|漻|狸|琅|鲤|履|渌|篱|沦|另|丽|礼|稂|侣|立|落|荔|莱|郞|腊|玲|绿|露|吏|琳|莲|疗|蕾|蒌|流|莉|铃|耒|孪|搂|赁|邻|亮|梨|棱|漓|料|龄|浪|谅|麟|沥|粒|馏|岺|珑|璐|燎|炼|枥|垄|例|离|缭|牢|潞|澜|垒|岭|镏|躏|篓|临|鸾|岚|郘|驴|谬|嘐|律|论|溜|令|了|尞|寮|眘|喇|酒|酉|降|零|六|瘳|更|刕|疁|莨|辽|聊|寥|灵|庐|炉|甪|闾|孋|陵|篮|芰|笠|僚|理|老|类|漏|里|勒|录|刘文|闾丘|甪里|甪裏|梁丘|梁垣|梁由|卢妃|卢蒲|陆费|刘傅|伶舟|伶州|令狐|谷蠡|陵尹|刘王";
xingShi["c"]="陈|蔡|曹|程|崔|常|成|柴|褚|车|池|岑|迟|丛|储|楚|初|谌|晁|巢|种|昌|操|才|慈|从|潮|超|敞|畅|茶|荼|苦|荈|蔎|茗|彩|采|菜|村|传|茌|郴|钞|苌|漕|淳|闯|揣|出|处|城|承|曾|鄫|充|郢|郕|塍|掣|蹴|摧|脆|炒|层|灿|琮|彻|残|词|嵯|匆|臣|虿|雏|埕|厝|戳|愁|错|撑|魑|嫦|锄|茬|唱|催|测|匙|尘|沉|炊|财|翠|欉|材|冲|存|禅|草|叱|抄|纯|措|串|诚|辞|缠|醋|窜|敕|澄|蚩|嘬|衬|沧|猜|川|喘|创|策|裳|耻|姹|促|持|兹|刺|丞|驰|徎|朿|钗|宸|昃|晨|厂|察|次|钏|瘳|丑|虫|崇|赤|呈|称|衰|趣|啜|宠|治|冶|缯|潜|灊|寸|朝|镡|爨|枞|苍|仓|束|郗|禇|舡|昶|长|晟|重|氶|乘|撤|楮|春|产|叱干|成王|陈没|常涛|曹牟|蔡斯|成阳|叱吕|叱利|叱李|叱黎|单于|淳于|啜喇";
xingShi["y"]="杨|叶|于|袁|姚|余|尹|俞|严|闫|颜|殷|易|岳|游|应|尤|虞|喻|阳|阎|郁|晏|乐|燕|伊|苑|原|鄢|禹|於|印|羊|云|尉|雍|由|衣|元|阴|扬|英|银|玉|言|恽|延|蔚|鱼|庾|一|乙|皋|抑|懿|源|益|养|饶|越|鬰|仰|羿|玗|医|枼|宧|芽|沅|硬|泄|佣|猷|鸭|萸|砚|彝|贇|昱|焱|曳|冤|纡|湡|寅|佚|涌|议|鬻|又|译|蕴|聿|雁|颙|枟|瘐|曰|莹|钰|沿|烑|俨|样|吁|迂|攸|移|剡|犹|宴|央|矣|雅|语|韵|悦|鸦|崖|羽|尢|允|雨|盈|音|訚|烟|幼|兑|毓|愈|翼|洋|夭|怡|扆|渊|腰|押|夜|跃|艳|荫|炎|毅|轶|裕|拥|浴|耶|嬴|演|与|亿|淤|兖|约|庸|隐|意|预|邀|引|亦|娅|芋|赢|郓|馀|禺|艺|曜|育|茵|右|杳|说|爰|咏|缘|已|垣|咬|忆|媵|邑|豫|嫣|璎|渝|迎|逸|愿|耀|盐|妖|诱|鹰|妟|弈|珧|友|欲|瑜|佑|遥|缨|幽|筠|鸳|哀|幻|眩|宛|惌|喇|考|拷|酉|壹|冶|贠|员|貟|有|宥|容|壅|雝|尧|洂|釴|轧|要|邺|瀛|妘|郧|欎|么|吾|誾|挧|楀|失|盂|也|弋|铫|闰|颖|颍|园|圆|摇|瑶|徭|谣|辕|宇|优|焉|仪|岩|运|裔|宜|奕|幺|远|油|依|亚|药|以|勇|遇|义|影|月|营|牙|蚁|野|永|誉|鄞|秧|夷|业|院|彦|尹文|尉迟|耶律|羊舌|延陵|游水|乐王|於陵|谷利|穀利|乐正|宇文|吾丘|食其|谷浑|铅陵|余丘|于学";
xingShi["h"]="黄|胡|何|韩|洪|侯|郝|贺|华|霍|候|惠|和|花|杭|合|海|扈|赫|衡|哈|呼|黑|淮|话|咶|譮|化|辉|货|火|活|魂|回|囘|浑|皇|奂|环|蜎|狐|壶|嘑|斛|厚|觜|河|荷|鹤|蒿|桓|红|弘|宦|怀|郇|滑|鄗|换|绘|晗|诙|焕|葫|卉|阖|邗|壑|航|荒|菡|唿|贿|猾|宏|恒|慧|禾|翚|欢|佫|核|矦|罕|汗|烘|豁|湖|瑚|豪|恢|藿|函|含|吼|晃|雇|鸿|翰|桦|镐|蝴|伙|簧|汇|护|旱|纥|盍|邯|患|孩|猴|虹|曷|哄|炜|珲|幻|昃|晨|还|蠉|轘|槐|画|澅|荤|婚|阍|厂|厰|厈|庵|完|堕|隓|隳|很|缗|愍|忽|浩|灏|皓|昊|暤|憨|撖|寒|呙|侴|轩|虎|郈|后|崋|顸|閈|号|诃|闳|郃|轷|洹|肓|蠖|毫|户|汉|浣|皇甫|斛斯|斛律|纥奚|邯郸|呼延|嘑延|胡非|胡母|胡毋|黑齿|贺若|贺岳|贺楼|贺娄|贺兰|贺赖|赫连|会稽";
xingShi["x"]="徐|许|谢|肖|夏|薛|熊|向|邢|项|辛|萧|解|席|奚|宣|胥|冼|相|姓|修|信|忻|郗|习|荀|小|幸|鲜|学|刑|续|玄|咸|寻|西|祆|须|郤|郄|郇|穴|盱|邜|觧|巷|虾|晰|伩|朽|稀|箱|逍|僖|响|阋|埙|墟|新|偰|息|仙|俆|顼|欣|羡|雄|希|霰|铉|旭|葸|乡|序|闲|偕|下|县|心|祥|郉|厦|溪|霄|蓄|潇|显|契|陷|霞|昔|宵|鑫|莦|效|匈|象|宪|襄|休|缐|献|侠|伭|苋|锨|杏|翔|需|牺|猩|虚|熙|想|旬|禧|笑|叙|薪|佡|腺|消|啸|选|泻|写|婿|彐|瑄|湘|絮|现|衔|戏|狭|莘|幻|眩|还|蠉|轘|生|见|寰|除|鉏|轩|题|镡|禤|宿|洗|玹|隰|舄|筱|燮|颉|兴|渫|行|歆|省|夐|血|葭|巂|旋|厘|荥|析|戌|膝|箫|形|先|校|袭|香|贤|锡|雪|线|绪|孝|晓|性|星|秀|系|喜|小王|西王|西门|夏侯|信平|新垣|信都|息夫|徐吾|鲜于|轩辕|相里";
xingShi["s"]="孙|宋|沈|苏|石|邵|施|史|盛|单|申|尚|舒|时|司|隋|商|沙|桑|佘|师|帅|寿|索|粟|斯|宿|束|释|水|山|生|侍|上|少|锁|鏁|速|赛|赏|殳|慎|双|韶|松|愫|晒|倏|甩|使|罳|伺|姗|摄|扫|酥|嵊|颂|蛇|尸|霜|哨|勺|舜|善|绍|仕|森|术|僧|塞|顺|叔|实|洒|散|守|岁|书|胜|素|劭|色|深|硕|示|鄯|珊|社|嵩|送|暑|禅|诗|蜀|审|笙|甚|飒|曙|淑|受|耜|姝|肃|视|似|赦|瘦|什|扇|穗|粆|笋|丝|琐|崧|遂|杓|射|私|涉|缩|市|算|栅|声|苫|伸|麝|莘|眭|睦|撒|攃|十|拾|四|肆|三|叁|崇|畲|支|蒒|玊|省|折|莎|杉|召|舍|贳|奭|耍|率|闩|谁|佀|参|厍|卲|姺|潚|食|汜|祀|失|矢|士|设|俟|戍|姒|税|随|数|手|神|绳|睢|萨|是|圣|思|闪|树|疏|陕|首|所|伞|世|申屠|上官|司徒|司马|司空|司寇|侍其|叶阳|石作|司鸿|尚方|司士|士孙|叔孙|商瞿|沙吒|乘丘|乘马|单父|孙阳";
xingShi["g"]="郭|高|顾|龚|葛|耿|关|甘|管|谷|宫|巩|古|桂|盖|苟|官|国|公|郜|干|戈|辜|过|贡|弓|勾|冮|贵|鼓|鼖|鼛|苦|虢|果|妫|诡|光|冠|功|工|共|冈|皋|皐|刚|尕|缑|归|郤|穀|髙|鄗|敢|菇|糕|够|囯|钢|港|杠|卦|槻|珪|珙|灌|姑|乖|鬲|拱|恭|嘎|岗|滚|革|构|囗|刮|故|瓜|锅|垢|篙|梗|挂|藁|固|辊|斡|雊|根|衮|各|刽|埂|个|噶|茒|卝|丱|毌|芶|句|笱|芥|祸|旤|祻|会|寒|呙|昋|炔|傀|丨|怪|虫|炅|郐|淦|凎|赣|改|广|江|鐀|罡|杲|艮|供|邽|槩|观|钩|阁|塥|庚|赓|蛊|格|贯|公祖|诡诸|毌丘|瓜田|公皙|公孟|庚桑|高堂|谷梁|穀粱|公良|公西|公孙|公冶|公羊|公玉|归海|高阳|古龙|关龙|高辛|公乘|宫孙|毌将|毌邱|郭罗|郭珲|哥舒|赣娄|穀梁|谷粱|公输|亢桑|亢仓";
xingShi["m"]="马|孟|毛|莫|梅|苗|缪|麦|牟|穆|闵|米|蒙|麻|明|茅|满|门|慕|母|无|冒|茆|宓|木|旻|庙|密|猫|莽|邙|缦|买|墨|牧|糜|麋|摹|茉|秒|蔓|凹|茫|棉|皃|漠|萌|溤|冥|娩|梦|曼|敏|名|迈|妙|勉|闽|貊|忙|民|貌|枚|祃|漫|摩|嘪|悯|沫|目|蔄|吗|眉|玫|缈|贸|盟|寞|锰|面|靡|芒|牡|昴|茂|穈|淼|咪|迷|睦|谬|嘐|芈|哶|卯|缗|愍|零|虎|秘|半|佴|泌|矛|弭|弥|祢|丏|沔|模|没|縻|麇|蜜|摸|谟|幕|募|墓|暮|默|美|沐|某|磨|玛|慕容|万俟|抹捻|万俊";
xingShi["f"]="冯|方|范|付|傅|樊|符|房|费|封|丰|富|伏|凡|法|风|苻|涪|飞|阀|奉|浮|复|芳|鲂|福|扶|酆|防|坟|副|伐|沣|赙|凫|孚|奋|府|甫|放|佛|非|服|枋|菲|纺|芙|负|蜂|梵|阜|焚|帆|赴|发|芬|锋|吩|藩|肪|否|凤|讽|奜|斐|废|洑|俸|宓|贲|昐|虙|澓|邡|分|偾|鄜|父|不|蕡|弗|汜|逢|附|辅|范姜|浮丘|方雷|傅余|富察|包丘";
xingShi["t"]="唐|田|谭|陶|汤|童|覃|涂|滕|谈|佟|屠|仝|邰|腾|檀|退|庹|铁|銕|荼|通|蓟|钭|塍|途|筒|统|墰|挑|苔|坛|头|团|潼|讬|听|蹋|侻|凸|绦|贪|洮|体|他|托|妥|徒|特|庭|添|桃|淘|囤|彤|昙|堂|涛|贴|郯|沓|榻|屯|縢|槖|婷|廷|甜|塘|糖|袒|倘|推|艇|亭|条|钿|抬|填|秃|恬|韬|桐|遆|题|提|镡|淡|禢|澹|土|帖|佗|陀|坨|驼|潭|同|台|塔|凃|太|拓|藤|脱|天|泰|图|吐|太阳|秃发|拓跋|太叔|澹台|陶丘|唐山|堂溪|涂钦|佟佳|大叔|太史";
xingShi["p"]="潘|彭|庞|裴|蒲|平|朴|皮|浦|普|逄|泮|濮|盘|仆|偏|鹏|盼|莆|暜|漰|蕃|被|琶|璞|瓢|捧|攀|徘|盆|澎|排|片|品|胖|颇|扁|厐|娉|牌|飘|萍|裒|派|锫|膨|霈|培|番|鄱|朋|宠|沛|洑|暴|蓬|夆|萠|韸|邳|骈|繁|溥|便|扑|配|帕|濮阳|辟闾|逢门|逢孙|疋娄|彭祖";
xingShi["d"]="董|丁|邓|杜|戴|段|翟|代|窦|党|刁|狄|都|邸|豆|但|东|达|刀|敦|憞|对|朵|地|墬|埅|埊|坔|迪|底|店|多|顿|端|冻|啖|植|躲|定|氐|丹|第|登|德|岛|稻|道|荡|答|督|堵|钭|单|带|陡|胆|笛|谛|貂|担|倒|到|牒|等|黛|呆|叮|犊|雕|独|佃|度|懂|兑|岱|逮|典|奠|帝|短|弟|荻|锻|栋|殿|棣|耽|挡|渡|妒|朶|迭|仃|恴|洞|读|涤|打|低|苳|苖|抖|叠|断|钿|动|堕|隓|隳|遆|题|提|豊|斗|鬦|鬬|歹|调|淡|大|笪|菪|耵|笃|当|电|待|冬|旦|东方|第五|当涂|独孤|豆卢|东野|大狐|大季|东郭|端木|东乡|达步|东丹|东南|达力|东阳|东门|段干|第二|东阁|达奚";
xingShi["j"]="金|蒋|姜|贾|江|齐|季|纪|焦|靳|简|吉|景|荆|姬|鞠|计|冀|井|居|嵇|晋|敬|矫|揭|经|靖|巨|琚|籍|蹇|奇|丌|峻|菌|局|京|静|竟|禁|近|竭|截|擮|介|接|翣|擑|节|郊|教|胶|蟜|绛|纁|将|寋|謇|剑|劒|剣|剱|劎|劔|釰|釼|鐱|翦|菅|建|鉴|鍳|剪|架|榢|枷|杙|佳|加|讥|几|际|及|嘉|褰|搴|甲|郏|蓟|汲|家|曁|铰|僵|赍|缙|谨|橘|踞|屐|婧|棘|鞫|据|桔|结|劲|浆|精|嵆|紧|娟|绞|楫|叚|阶|涓|迦|窖|韭|击|匠|镜|蕺|硷|拒|捷|雎|脚|杰|决|渐|菊|军|积|俊|净|寄|荐|莒|坚|锦|夹|进|急|监|晶|久|健|戒|今|检|皎|假|界|圈|矍|厥|颊|叫|交|继|绢|寂|就|间|径|憬|沮|讦|箭|郡|僬|剂|桨|娇|借|津|驾|轿|举|菁|洁|贱|旧|靓|讲|饯|瑾|臼|聚|斤|筠|篯|君|隽|剧|钜|具|俱|酒|纠|紏|记|缴|徼|角|捔|觼|降|察|九|玖|更|暨|强|褧|姞|戢|藉|济|葭|敫|皦|孑|咎|遽|觉|苘|减|缄|疆|茄|稽|竞|触|校|基|机|荚|集|九百|九佰|京城|九方|璟瓯|郊尹|即墨|吉胡|沮渠|夹谷|季连|晋楚|季孙|车成|车门";
xingShi["r"]="任|阮|饶|冉|荣|芮|茹|戎|容|人|熔|茸|叡|韧|日|瑞|褥|让|润|女|若|染|壬|如|肉|穰|蓉|柔|荏|娆|然|睿|绒|绕|刃|认|朊|蕊|汝|融|鄀|荛|肜|闰|衽|热|仁|壤驷";
xingShi["q"]="邱|钱|秦|齐|乔|覃|曲|戚|祁|屈|瞿|仇|裘|全|丘|强|权|亓|阙|漆|卿|綦|渠|祈|骞|岐|期|奇|杞|岂|丌|柒|谯|琴|钦|璩|郤|郄|秋|器|颀|氍|去|祺|怯|溱|觑|羗|斳|峭|钳|麒|遣|请|妾|邛|寝|轻|墙|琼|清|勤|启|泉|伽|缺|琪|雀|群|茜|前|阕|桥|确|契|穷|谦|錡|晴|倾|巧|且|扦|朐|钤|麹|戕|銎|切|栖|琦|瞧|趋|欠|虔|艽|侨|蕉|俏|窍|牵|企|锜|铨|篯|乞|琚|蘧|巨|钜|千|仟|七|次|潜|灊|疌|懃|娸|麴|蕲|綮|卡|乾|硚|樵|芩|诎|铖|取|铅|苘|沁|疆|茄|青|庆|求|羌|起|其|却|綦毋|乞颜|漆雕|丌官|亓官|笄官|青阳|綦母|丘丽|祁连|屈同|屈突|綦连|仇由|乞伏";
xingShi["b"]="白|包|毕|鲍|卜|卞|边|柏|薄|巴|班|宾|步|贝|保|别|贲|北|拜|丙|邴|邲|部|布|表|标|比|闭|本|邶|摆|霸|伯|郥|必|玻|笔|葆|变|愎|勃|漰|被|帛|坌|播|报|彬|博|备|冰|波|佛|邦|兵|彪|簿|扁|板|拔|蚌|秉|伴|胞|斌|芭|碧|炳|辩|饱|坝|汴|辨|病|帮|豹|抱|番|鄱|朋|废|补|百|佰|八|捌|叭|仈|秘|茀|沛|半|泊|卑|般|暴|费|堡|奔|苾|泌|辟|弁|邠|孛|亳|斑|苞|拨|薜|宝|办|把|版|巴林|北唐|北宫|百里|白马|巴邻|巴音|巴拉|伯力|把利";
xingShi["k"]="孔|康|柯|邝|寇|匡|阚|况|亢|旷|隗|蒯|魁|奎|克|开|苦|伉|空|夔|杭|叩|宼|宽|夸|轲|刊|跨|堪|喀|逵|枯|蒉|科|阔|款|葵|蔻|口|坎|昆|鲲|坤|勘|坑|苛|扣|肯|閜|快|看|揆|矿|渴|楷|茒|卝|丱|混|倱|绲|崑|可|考|拷|靠|凯|恺|抗|会|憨|撖|鬼|傀|媿|郐|库|适|愧|课|客|可汗|鲑阳";
xingShi["n"]="倪|牛|聂|宁|南|农|年|那|钮|念|纳|乜|能|甯|郳|你|氖|妞|寗|喏|摄|霓|嶭|颞|黏|拟|侬|乃|男|诺|女|妮|辇|曩|弄|臬|娘|讷|囡|闹|廿|柰|奶|奴|赧|捏|难|丑|侴|佴|廼|奈|铙|纽|粘|尼|娜|泥|努|南野|南乡|南丘|南荣|南遮|南史|南伯|南公|南郭|南虢|南廓|纳喇|那拉|女娲|女旤|南宫|南门|南里|纳兰";
xingShi["a"]="安|艾|敖|阿|奥|昂|卬|姎|爱|凹|胺|按|霭|瑷|埃|熬|枊|澳|鳌|矮|蔼|啊|傲|慠|遨|哀|厂|厰|厈|庵|奥鲁|奥里|安国|安陵|安平|安阳|奥敦|奥屯";
xingShi["o"]="欧|区|鸥|藕|殴|瓯|偶|欧阳|欧侯";
xingShi["e"]="阿|鄂|俄|鹅|蒽|駬|恶|尔|额|耳|厄|迩|二|贰|恩|额尔|尔朱";
xingShi["0"]="李|王|张|刘|陈|杨|黄|赵|吴|周|徐|孙|马|朱|胡|郭|何|高|林|罗|郑|梁|谢|宋|唐|许|韩|冯|邓|曹|彭|曾|萧|田|董|袁|潘|于|蒋|蔡|余|杜|叶|程|苏|魏|吕|丁|任|沈|姚|卢|姜|崔|钟|谭|陆|汪|范|金|石|廖|贾|夏|韦|傅|方|白|邹|孟|熊|秦|邱|江|尹|薛|阎|段|雷|侯";

if(s=='常用')s='0';
    var x=xingShi[s];
        x=x.split('|');
    var xing=[];
    for(var i=0;i<x.length;i++){
        xing.push('<a>'+x[i]+'</a>');
    }
    $('#bjx').html(xing.join(''));

}

$(function(){
    loadxing('0');
    $('#abc a').click(function(e){
        e.preventDefault();
        loadxing($(this).text().toLocaleLowerCase());
    })
    for(var i=0;i<24;i++){
        if((new Date()).getHours()==i){
            $('#time').append('<option selected value="'+i+'">'+i+'</option>');
        }else{
            $('#time').append('<option value="'+i+'">'+i+'</option>');
        }

    }
    $("#month").val((new Date()).getMonth()+1);
})
