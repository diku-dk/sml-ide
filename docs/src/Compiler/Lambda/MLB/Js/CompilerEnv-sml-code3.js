if ((typeof(compiler_objects$0CompilerEnv$1$3)) == "undefined") {compiler_objects$0CompilerEnv$1$3 = {};
};
(function(){compiler_objects$0CompilerEnv$1$3.eq_bal$1561 = function(v$1563,v$1564){switch (v$1563) { case 0: {switch (v$1564) { case 0: {return true;
 break; }default: {return false;
} };
 break; }case 1: {switch (v$1564) { case 1: {return true;
 break; }default: {return false;
} };
 break; }case 2: {switch (v$1564) { case 2: {return true;
 break; }default: {return false;
} };
 break; } };
};
var fix$2212 = {};
fix$2212.$eq_tree = function(v$1569,v$1570,v$1566){lab$eq_tree: while (true) {var v$1567 = v$1566[0];
var v$1568 = v$1566[1];
if (v$1567 == null) {return (v$1568 == null)?true:false;
} else {if (v$1568 == null) {return false;
} else {var v$1571 = v$1567;
var v$1572 = v$1568;
if (v$1569([v$1571[0],v$1572[0]])) {if (v$1570([v$1571[1],v$1572[1]])) {if (fix$2212.$eq_tree(v$1569,v$1570,[v$1571[2],v$1572[2]])) {var t$2213 = v$1569;
var t$2214 = v$1570;
var t$2215 = [v$1571[3],v$1572[3]];
var v$1569 = t$2213;
var v$1570 = t$2214;
var v$1566 = t$2215;
continue lab$eq_tree;
} else {return false;
};
} else {return false;
};
} else {return false;
};
};
};
};
};
compiler_objects$0CompilerEnv$1$3.eq_tree$1565 = fix$2212.$eq_tree;
compiler_objects$0CompilerEnv$1$3.die$292 = function(s$295){return tools$0Crash$1.impossible$59("OrderFinMap." + s$295);
};
compiler_objects$0CompilerEnv$1$3.s$j$296 = function(v$301,v$302){return compiler_objects$0CompilerEnv$1$2.lt$250(v$301,v$302);
};
compiler_objects$0CompilerEnv$1$3.lt$303 = function(v$1576,v$1577){return compiler_objects$0CompilerEnv$1$2.lt$250(v$1576,v$1577);
};
compiler_objects$0CompilerEnv$1$3.eq$304 = function(v$313,v$314){return ((compiler_objects$0CompilerEnv$1$2.lt$250(v$313,v$314))?true:(compiler_objects$0CompilerEnv$1$2.lt$250(v$314,v$313)))?false:true;
};
compiler_objects$0CompilerEnv$1$3.empty$320 = function(v$2211){return null;
};
compiler_objects$0CompilerEnv$1$3.singleton$321 = function(v$2203,v$2204){return [v$2203,v$2204,null,null,2];
};
compiler_objects$0CompilerEnv$1$3.isEmpty$328 = function(v$331){return (v$331 == null)?true:false;
};
compiler_objects$0CompilerEnv$1$3.lookup$336 = function(t$339,key$342){var fix$2216 = {};
fix$2216.$search = function(v$346){lab$search: while (true) {if (v$346 == null) {return [1];
} else {var v$363 = v$346;
var v$364 = v$363[0];
var v$365 = v$363[1];
var v$366 = v$363[2];
var v$367 = v$363[3];
if (compiler_objects$0CompilerEnv$1$2.lt$250(key$342,v$364)) {var t$2217 = v$366;
var v$346 = t$2217;
continue lab$search;
} else {if (compiler_objects$0CompilerEnv$1$2.lt$250(v$364,key$342)) {var t$2218 = v$367;
var v$346 = t$2218;
continue lab$search;
} else {return [0,v$365];
};
};
};
};
};
var search$343 = fix$2216.$search;
return search$343(t$339);
};
compiler_objects$0CompilerEnv$1$3.en$Impossible$368 = new String("Impossible");
compiler_objects$0CompilerEnv$1$3.impossible$369 = function(s$372){throw [compiler_objects$0CompilerEnv$1$3.en$Impossible$368,"OrderFinMap" + s$372];
};
var en$ALREADYTHERE$373 = new String("ALREADYTHERE");
var exn$ALREADYTHERE$373 = [en$ALREADYTHERE$373];
compiler_objects$0CompilerEnv$1$3.add$596 = function(v$605,v$606,v$607){try {var fix$2220 = {};
fix$2220.$ins = function(v$1662){if (v$1662 == null) {return [true,[v$605,v$606,null,null,2]];
} else {var v$1663 = v$1662;
var v$1664 = v$1663[0];
var v$1665 = v$1663[1];
var v$1666 = v$1663[2];
var v$1667 = v$1663[3];
var v$1668 = v$1663[4];
if (compiler_objects$0CompilerEnv$1$2.lt$250(v$605,v$1664)) {var v$1672 = fix$2220.$ins(v$1666);
var v$1673 = v$1672[0];
var v$1674 = v$1672[1];
switch (v$1668) { case 2: {return v$1673?[true,[v$1664,v$1665,v$1674,v$1667,1]]:[false,[v$1664,v$1665,v$1674,v$1667,2]];
 break; }case 0: {return v$1673?[false,[v$1664,v$1665,v$1674,v$1667,2]]:[false,[v$1664,v$1665,v$1674,v$1667,0]];
 break; }default: {if (v$1673) {var v$1676;
if (v$1674 == null) {throw [compiler_objects$0CompilerEnv$1$3.en$Impossible$368,"OrderFinMapAVLfinmap 1"];
} else {v$1676 = v$1674;
};
var v$1679 = v$1676[0];
var v$1680 = v$1676[1];
var v$1681 = v$1676[2];
var v$1682 = v$1676[3];
var v$1683 = v$1676[4];
var t$2221;
var v$2026 = 1;
switch (v$1683) { case 0: {switch (v$2026) { case 0: {t$2221 = true;
 break; }default: {t$2221 = false;
} };
 break; }case 1: {switch (v$2026) { case 1: {t$2221 = true;
 break; }default: {t$2221 = false;
} };
 break; }case 2: {switch (v$2026) { case 2: {t$2221 = true;
 break; }default: {t$2221 = false;
} };
 break; } };
if (t$2221) {return [false,[v$1679,v$1680,v$1681,[v$1664,v$1665,v$1682,v$1667,2],2]];
} else {var v$1691;
if (v$1682 == null) {throw [compiler_objects$0CompilerEnv$1$3.en$Impossible$368,"OrderFinMapAVLfinmap 2"];
} else {v$1691 = v$1682;
};
var v$1694 = v$1691[0];
var v$1695 = v$1691[1];
var v$1696 = v$1691[2];
var v$1697 = v$1691[3];
var v$1698 = v$1691[4];
var t$2242 = false;
var t$2241;
var t$2240;
var t$2239 = v$1694;
var t$2238 = v$1695;
var t$2237;
var t$2236;
var t$2235 = v$1679;
var t$2234 = v$1680;
var t$2233 = v$1681;
var t$2232 = v$1696;
var t$2231;
var t$2230;
var v$2032 = 0;
switch (v$1698) { case 0: {switch (v$2032) { case 0: {t$2230 = true;
 break; }default: {t$2230 = false;
} };
 break; }case 1: {switch (v$2032) { case 1: {t$2230 = true;
 break; }default: {t$2230 = false;
} };
 break; }case 2: {switch (v$2032) { case 2: {t$2230 = true;
 break; }default: {t$2230 = false;
} };
 break; } };
t$2231 = (t$2230?1:2);
t$2236 = [t$2235,t$2234,t$2233,t$2232,t$2231];
t$2237 = t$2236;
var t$2229;
var t$2228;
var t$2227 = v$1664;
var t$2226 = v$1665;
var t$2225 = v$1697;
var t$2224 = v$1667;
var t$2223;
var t$2222;
var v$2036 = 1;
switch (v$1698) { case 0: {switch (v$2036) { case 0: {t$2222 = true;
 break; }default: {t$2222 = false;
} };
 break; }case 1: {switch (v$2036) { case 1: {t$2222 = true;
 break; }default: {t$2222 = false;
} };
 break; }case 2: {switch (v$2036) { case 2: {t$2222 = true;
 break; }default: {t$2222 = false;
} };
 break; } };
t$2223 = (t$2222?0:2);
t$2228 = [t$2227,t$2226,t$2225,t$2224,t$2223];
t$2229 = t$2228;
t$2240 = [t$2239,t$2238,t$2237,t$2229,2];
t$2241 = t$2240;
return [t$2242,t$2241];
};
} else {return [false,[v$1664,v$1665,v$1674,v$1667,1]];
};
} };
} else {if (compiler_objects$0CompilerEnv$1$2.lt$250(v$1664,v$605)) {var v$1716 = fix$2220.$ins(v$1667);
var v$1717 = v$1716[0];
var v$1718 = v$1716[1];
switch (v$1668) { case 2: {return v$1717?[true,[v$1664,v$1665,v$1666,v$1718,0]]:[false,[v$1664,v$1665,v$1666,v$1718,2]];
 break; }case 1: {return v$1717?[false,[v$1664,v$1665,v$1666,v$1718,2]]:[false,[v$1664,v$1665,v$1666,v$1718,1]];
 break; }default: {if (v$1717) {var v$1720;
if (v$1718 == null) {throw [compiler_objects$0CompilerEnv$1$3.en$Impossible$368,"OrderFinMapAVLfinmap 3"];
} else {v$1720 = v$1718;
};
var v$1723 = v$1720[0];
var v$1724 = v$1720[1];
var v$1725 = v$1720[2];
var v$1726 = v$1720[3];
var v$1727 = v$1720[4];
var t$2243;
var v$2046 = 0;
switch (v$1727) { case 0: {switch (v$2046) { case 0: {t$2243 = true;
 break; }default: {t$2243 = false;
} };
 break; }case 1: {switch (v$2046) { case 1: {t$2243 = true;
 break; }default: {t$2243 = false;
} };
 break; }case 2: {switch (v$2046) { case 2: {t$2243 = true;
 break; }default: {t$2243 = false;
} };
 break; } };
if (t$2243) {return [false,[v$1723,v$1724,[v$1664,v$1665,v$1666,v$1725,2],v$1726,2]];
} else {var v$1735;
if (v$1725 == null) {throw [compiler_objects$0CompilerEnv$1$3.en$Impossible$368,"OrderFinMapAVLfinmap 4"];
} else {v$1735 = v$1725;
};
var v$1738 = v$1735[0];
var v$1739 = v$1735[1];
var v$1740 = v$1735[2];
var v$1741 = v$1735[3];
var v$1742 = v$1735[4];
var t$2264 = false;
var t$2263;
var t$2262;
var t$2261 = v$1738;
var t$2260 = v$1739;
var t$2259;
var t$2258;
var t$2257 = v$1664;
var t$2256 = v$1665;
var t$2255 = v$1666;
var t$2254 = v$1740;
var t$2253;
var t$2252;
var v$2052 = 0;
switch (v$1742) { case 0: {switch (v$2052) { case 0: {t$2252 = true;
 break; }default: {t$2252 = false;
} };
 break; }case 1: {switch (v$2052) { case 1: {t$2252 = true;
 break; }default: {t$2252 = false;
} };
 break; }case 2: {switch (v$2052) { case 2: {t$2252 = true;
 break; }default: {t$2252 = false;
} };
 break; } };
t$2253 = (t$2252?1:2);
t$2258 = [t$2257,t$2256,t$2255,t$2254,t$2253];
t$2259 = t$2258;
var t$2251;
var t$2250;
var t$2249 = v$1723;
var t$2248 = v$1724;
var t$2247 = v$1741;
var t$2246 = v$1726;
var t$2245;
var t$2244;
var v$2056 = 1;
switch (v$1742) { case 0: {switch (v$2056) { case 0: {t$2244 = true;
 break; }default: {t$2244 = false;
} };
 break; }case 1: {switch (v$2056) { case 1: {t$2244 = true;
 break; }default: {t$2244 = false;
} };
 break; }case 2: {switch (v$2056) { case 2: {t$2244 = true;
 break; }default: {t$2244 = false;
} };
 break; } };
t$2245 = (t$2244?0:2);
t$2250 = [t$2249,t$2248,t$2247,t$2246,t$2245];
t$2251 = t$2250;
t$2262 = [t$2261,t$2260,t$2259,t$2251,2];
t$2263 = t$2262;
return [t$2264,t$2263];
};
} else {return [false,[v$1664,v$1665,v$1666,v$1718,0]];
};
} };
} else {throw exn$ALREADYTHERE$373;
};
};
};
};
var ins$1661 = fix$2220.$ins;
return (ins$1661(v$607))[1];
} catch(v$2219) {return (function(ALREADYTHERE$604){var t$2265 = ALREADYTHERE$604;
if (t$2265[0] == en$ALREADYTHERE$373) {var fix$2266 = {};
fix$2266.$repl = function(v$1781){if (v$1781 == null) {throw [compiler_objects$0CompilerEnv$1$3.en$Impossible$368,"OrderFinMapAVLupdate.repl"];
} else {var v$1784 = v$1781;
var v$1785 = v$1784[0];
var v$1786 = v$1784[1];
var v$1787 = v$1784[2];
var v$1788 = v$1784[3];
var v$1789 = v$1784[4];
return (compiler_objects$0CompilerEnv$1$2.lt$250(v$605,v$1785))?[v$1785,v$1786,fix$2266.$repl(v$1787),v$1788,v$1789]:((compiler_objects$0CompilerEnv$1$2.lt$250(v$1785,v$605))?[v$1785,v$1786,v$1787,fix$2266.$repl(v$1788),v$1789]:[v$1785,v$606,v$1787,v$1788,v$1789]);
};
};
var repl$1780 = fix$2266.$repl;
return repl$1780(v$607);
} else {throw ALREADYTHERE$604;
};
})(v$2219);
};
};
var fix$2267 = {};
fix$2267.$plus = function(v$626,v$627){lab$plus: while (true) {if (v$627 == null) {return v$626;
} else {var v$621 = v$627;
var v$622 = v$621[0];
var v$623 = v$621[1];
var v$624 = v$621[2];
var v$625 = v$621[3];
var t$2268 = fix$2267.$plus(compiler_objects$0CompilerEnv$1$3.add$596(v$622,v$623,v$626),v$624);
var t$2269 = v$625;
var v$626 = t$2268;
var v$627 = t$2269;
continue lab$plus;
};
};
};
compiler_objects$0CompilerEnv$1$3.plus$608 = fix$2267.$plus;
var en$NOTFOUND$628 = new String("NOTFOUND");
var exn$NOTFOUND$628 = [en$NOTFOUND$628];
var delete$629 = function(v$914,v$915){var balance1$634 = function(v$637){if (v$637 == null) {throw [compiler_objects$0CompilerEnv$1$3.en$Impossible$368,"OrderFinMap(balance1 on an empty map)"];
} else {var v$707 = v$637;
var v$708 = v$707[0];
var v$709 = v$707[1];
var v$710 = v$707[2];
var v$711 = v$707[3];
switch (v$707[4]) { case 1: {return [[v$708,v$709,v$710,v$711,2],true];
 break; }case 2: {return [[v$708,v$709,v$710,v$711,0],false];
 break; }default: {var v$694;
if (v$711 == null) {throw [compiler_objects$0CompilerEnv$1$3.en$Impossible$368,"OrderFinMapAVLfinmap 5"];
} else {v$694 = v$711;
};
var v$695 = v$694[0];
var v$696 = v$694[1];
var v$697 = v$694[2];
var v$698 = v$694[3];
switch (v$694[4]) { case 1: {var v$681;
if (v$697 == null) {throw [compiler_objects$0CompilerEnv$1$3.en$Impossible$368,"OrderFinMapAVLfinmap 6"];
} else {v$681 = v$697;
};
var v$682 = v$681[0];
var v$683 = v$681[1];
var v$684 = v$681[2];
var v$685 = v$681[3];
var v$686 = v$681[4];
var t$2289;
var t$2288;
var t$2287 = v$682;
var t$2286 = v$683;
var t$2285;
var t$2284;
var t$2283 = v$708;
var t$2282 = v$709;
var t$2281 = v$710;
var t$2280 = v$684;
var t$2279;
var t$2278;
var v$2074 = 0;
switch (v$686) { case 0: {switch (v$2074) { case 0: {t$2278 = true;
 break; }default: {t$2278 = false;
} };
 break; }case 1: {switch (v$2074) { case 1: {t$2278 = true;
 break; }default: {t$2278 = false;
} };
 break; }case 2: {switch (v$2074) { case 2: {t$2278 = true;
 break; }default: {t$2278 = false;
} };
 break; } };
t$2279 = (t$2278?1:2);
t$2284 = [t$2283,t$2282,t$2281,t$2280,t$2279];
t$2285 = t$2284;
var t$2277;
var t$2276;
var t$2275 = v$695;
var t$2274 = v$696;
var t$2273 = v$685;
var t$2272 = v$698;
var t$2271;
var t$2270;
var v$2076 = 1;
switch (v$686) { case 0: {switch (v$2076) { case 0: {t$2270 = true;
 break; }default: {t$2270 = false;
} };
 break; }case 1: {switch (v$2076) { case 1: {t$2270 = true;
 break; }default: {t$2270 = false;
} };
 break; }case 2: {switch (v$2076) { case 2: {t$2270 = true;
 break; }default: {t$2270 = false;
} };
 break; } };
t$2271 = (t$2270?0:2);
t$2276 = [t$2275,t$2274,t$2273,t$2272,t$2271];
t$2277 = t$2276;
t$2288 = [t$2287,t$2286,t$2285,t$2277,2];
t$2289 = t$2288;
return [t$2289,true];
 break; }case 2: {return [[v$695,v$696,[v$708,v$709,v$710,v$697,0],v$698,1],false];
 break; }default: {return [[v$695,v$696,[v$708,v$709,v$710,v$697,2],v$698,2],true];
} };
} };
};
};
var balance2$713 = function(v$716){if (v$716 == null) {throw [compiler_objects$0CompilerEnv$1$3.en$Impossible$368,"OrderFinMap(balance2 on an empty map)"];
} else {var v$786 = v$716;
var v$787 = v$786[0];
var v$788 = v$786[1];
var v$789 = v$786[2];
var v$790 = v$786[3];
switch (v$786[4]) { case 0: {return [[v$787,v$788,v$789,v$790,2],true];
 break; }case 2: {return [[v$787,v$788,v$789,v$790,1],false];
 break; }default: {var v$773;
if (v$789 == null) {throw [compiler_objects$0CompilerEnv$1$3.en$Impossible$368,"OrderFinMapAVLfinmap 7"];
} else {v$773 = v$789;
};
var v$774 = v$773[0];
var v$775 = v$773[1];
var v$776 = v$773[2];
var v$777 = v$773[3];
switch (v$773[4]) { case 0: {var v$760;
if (v$777 == null) {throw [compiler_objects$0CompilerEnv$1$3.en$Impossible$368,"OrderFinMapAVLfinmap 8"];
} else {v$760 = v$777;
};
var v$761 = v$760[0];
var v$762 = v$760[1];
var v$763 = v$760[2];
var v$764 = v$760[3];
var v$765 = v$760[4];
var t$2309;
var t$2308;
var t$2307 = v$761;
var t$2306 = v$762;
var t$2305;
var t$2304;
var t$2303 = v$774;
var t$2302 = v$775;
var t$2301 = v$776;
var t$2300 = v$763;
var t$2299;
var t$2298;
var v$2086 = 0;
switch (v$765) { case 0: {switch (v$2086) { case 0: {t$2298 = true;
 break; }default: {t$2298 = false;
} };
 break; }case 1: {switch (v$2086) { case 1: {t$2298 = true;
 break; }default: {t$2298 = false;
} };
 break; }case 2: {switch (v$2086) { case 2: {t$2298 = true;
 break; }default: {t$2298 = false;
} };
 break; } };
t$2299 = (t$2298?1:2);
t$2304 = [t$2303,t$2302,t$2301,t$2300,t$2299];
t$2305 = t$2304;
var t$2297;
var t$2296;
var t$2295 = v$787;
var t$2294 = v$788;
var t$2293 = v$764;
var t$2292 = v$790;
var t$2291;
var t$2290;
var v$2084 = 1;
switch (v$765) { case 0: {switch (v$2084) { case 0: {t$2290 = true;
 break; }default: {t$2290 = false;
} };
 break; }case 1: {switch (v$2084) { case 1: {t$2290 = true;
 break; }default: {t$2290 = false;
} };
 break; }case 2: {switch (v$2084) { case 2: {t$2290 = true;
 break; }default: {t$2290 = false;
} };
 break; } };
t$2291 = (t$2290?0:2);
t$2296 = [t$2295,t$2294,t$2293,t$2292,t$2291];
t$2297 = t$2296;
t$2308 = [t$2307,t$2306,t$2305,t$2297,2];
t$2309 = t$2308;
return [t$2309,true];
 break; }case 2: {return [[v$774,v$775,v$776,[v$787,v$788,v$777,v$790,1],0],false];
 break; }default: {return [[v$774,v$775,v$776,[v$787,v$788,v$777,v$790,2],2],true];
} };
} };
};
};
var fix$2310 = {};
fix$2310.$remove_rightmost = function(v$795){if (v$795 == null) {throw [compiler_objects$0CompilerEnv$1$3.en$Impossible$368,"OrderFinMap(remove_rightmost on empty map)"];
} else {var v$811 = v$795;
var v$812 = v$811[3];
if (v$812 == null) {return [v$811[2],v$811[0],v$811[1],true];
} else {var v$837 = v$811[0];
var v$838 = v$811[1];
var v$839 = v$811[2];
var v$840 = v$811[4];
var v$832 = fix$2310.$remove_rightmost(v$812);
var v$833 = v$832[0];
var v$834 = v$832[1];
var v$835 = v$832[2];
if (v$832[3]) {var v$829 = balance2$713([v$837,v$838,v$839,v$833,v$840]);
return [v$829[0],v$834,v$835,v$829[1]];
} else {return [[v$837,v$838,v$839,v$833,v$840],v$834,v$835,false];
};
};
};
};
var remove_rightmost$792 = fix$2310.$remove_rightmost;
var fix$2311 = {};
fix$2311.$del = function(v$844){if (v$844 == null) {throw exn$NOTFOUND$628;
} else {var v$904 = v$844;
var v$905 = v$904[0];
var v$906 = v$904[1];
var v$907 = v$904[2];
var v$908 = v$904[3];
var v$909 = v$904[4];
if (compiler_objects$0CompilerEnv$1$2.lt$250(v$914,v$905)) {var v$865 = fix$2311.$del(v$907);
var v$866 = v$865[0];
if (v$865[1]) {return balance1$634([v$905,v$906,v$866,v$908,v$909]);
} else {return [[v$905,v$906,v$866,v$908,v$909],false];
};
} else {if (compiler_objects$0CompilerEnv$1$2.lt$250(v$905,v$914)) {var v$879 = fix$2311.$del(v$908);
var v$880 = v$879[0];
if (v$879[1]) {return balance2$713([v$905,v$906,v$907,v$880,v$909]);
} else {return [[v$905,v$906,v$907,v$880,v$909],false];
};
} else {if (v$908 == null) {return [v$907,true];
} else {if (v$907 == null) {return [v$908,true];
} else {var v$899 = remove_rightmost$792(v$907);
var v$900 = v$899[0];
var v$901 = v$899[1];
var v$902 = v$899[2];
if (v$899[3]) {return balance1$634([v$901,v$902,v$900,v$908,v$909]);
} else {return [[v$901,v$902,v$900,v$908,v$909],false];
};
};
};
};
};
};
};
var del$841 = fix$2311.$del;
return (del$841(v$915))[0];
};
compiler_objects$0CompilerEnv$1$3.remove$916 = function(v$924,v$925){try {return [0,delete$629(v$924,v$925)];
} catch(v$2312) {return (function(NOTFOUND$923){var t$2313 = NOTFOUND$923;
if (t$2313[0] == en$NOTFOUND$628) {return [1];
} else {throw NOTFOUND$923;
};
})(v$2312);
};
};
compiler_objects$0CompilerEnv$1$3.delete$926 = function(v$934,v$935){try {return delete$629(v$934,v$935);
} catch(v$2314) {return (function(NOTFOUND$933){var t$2315 = NOTFOUND$933;
if (t$2315[0] == en$NOTFOUND$628) {return v$935;
} else {throw NOTFOUND$933;
};
})(v$2314);
};
};
compiler_objects$0CompilerEnv$1$3.dom$936 = function(m$939){var fix$2316 = {};
fix$2316.$dom$ = function(v$943,v$946){lab$dom$: while (true) {if (v$943 == null) {return v$946;
} else {var v$958 = v$943;
var v$959 = v$958[0];
var v$960 = v$958[2];
var v$961 = v$958[3];
var t$2317 = v$960;
var t$2318 = [v$959,fix$2316.$dom$(v$961,v$946)];
var v$943 = t$2317;
var v$946 = t$2318;
continue lab$dom$;
};
};
};
var dom$$940 = fix$2316.$dom$;
return dom$$940(m$939,null);
};
compiler_objects$0CompilerEnv$1$3.range$963 = function(m$966){var fix$2319 = {};
fix$2319.$ran = function(v$970,v$973){lab$ran: while (true) {if (v$970 == null) {return v$973;
} else {var v$985 = v$970;
var v$986 = v$985[1];
var v$987 = v$985[2];
var v$988 = v$985[3];
var t$2320 = v$987;
var t$2321 = [v$986,fix$2319.$ran(v$988,v$973)];
var v$970 = t$2320;
var v$973 = t$2321;
continue lab$ran;
};
};
};
var ran$967 = fix$2319.$ran;
return ran$967(m$966,null);
};
compiler_objects$0CompilerEnv$1$3.list$990 = function(m$993){var fix$2322 = {};
fix$2322.$li = function(v$997,v$1000){lab$li: while (true) {if (v$997 == null) {return v$1000;
} else {var v$1013 = v$997;
var v$1014 = v$1013[0];
var v$1015 = v$1013[1];
var v$1016 = v$1013[2];
var v$1017 = v$1013[3];
var t$2323 = v$1016;
var t$2324 = [[v$1014,v$1015],fix$2322.$li(v$1017,v$1000)];
var v$997 = t$2323;
var v$1000 = t$2324;
continue lab$li;
};
};
};
var li$994 = fix$2322.$li;
return li$994(m$993,null);
};
var fix$2325 = {};
fix$2325.$composemap = function(f$1022,t$1025){if (t$1025 == null) {return null;
} else {var v$1036 = t$1025;
var v$1037 = v$1036[0];
var v$1038 = v$1036[1];
var v$1039 = v$1036[2];
var v$1040 = v$1036[3];
var v$1041 = v$1036[4];
var l$$1035 = fix$2325.$composemap(f$1022,v$1039);
return [v$1037,f$1022(v$1038),l$$1035,fix$2325.$composemap(f$1022,v$1040),v$1041];
};
};
compiler_objects$0CompilerEnv$1$3.composemap$1019 = fix$2325.$composemap;
var fix$2326 = {};
fix$2326.$ComposeMap = function(f$1045,t$1048){if (t$1048 == null) {return null;
} else {var v$1059 = t$1048;
var v$1060 = v$1059[0];
var v$1061 = v$1059[1];
var v$1062 = v$1059[2];
var v$1063 = v$1059[3];
var v$1064 = v$1059[4];
var l$$1058 = fix$2326.$ComposeMap(f$1045,v$1062);
return [v$1060,f$1045([v$1060,v$1061]),l$$1058,fix$2326.$ComposeMap(f$1045,v$1063),v$1064];
};
};
compiler_objects$0CompilerEnv$1$3.ComposeMap$1042 = fix$2326.$ComposeMap;
compiler_objects$0CompilerEnv$1$3.fold$1065 = function(f$1068,e$1071,t$1074){var fix$2327 = {};
fix$2327.$fold$ = function(v$1078,v$1081){lab$fold$: while (true) {if (v$1078 == null) {return v$1081;
} else {var v$1093 = v$1078;
var v$1094 = v$1093[1];
var v$1095 = v$1093[2];
var v$1096 = v$1093[3];
var t$2328 = v$1096;
var t$2329 = f$1068([v$1094,fix$2327.$fold$(v$1095,v$1081)]);
var v$1078 = t$2328;
var v$1081 = t$2329;
continue lab$fold$;
};
};
};
var fold$$1075 = fix$2327.$fold$;
return fold$$1075(t$1074,e$1071);
};
compiler_objects$0CompilerEnv$1$3.Fold$1098 = function(f$1101,e$1104,t$1107){var fix$2330 = {};
fix$2330.$fold$ = function(v$1111,v$1114){lab$fold$: while (true) {if (v$1111 == null) {return v$1114;
} else {var v$1127 = v$1111;
var v$1128 = v$1127[0];
var v$1129 = v$1127[1];
var v$1130 = v$1127[2];
var v$1131 = v$1127[3];
var t$2331 = v$1131;
var t$2332 = f$1101([[v$1128,v$1129],fix$2330.$fold$(v$1130,v$1114)]);
var v$1111 = t$2331;
var v$1114 = t$2332;
continue lab$fold$;
};
};
};
var fold$$1108 = fix$2330.$fold$;
return fold$$1108(t$1107,e$1104);
};
compiler_objects$0CompilerEnv$1$3.filter$1133 = function(f$1136,t$1139){var fix$2333 = {};
fix$2333.$fold$ = function(v$1848,v$1849){lab$fold$: while (true) {if (v$1848 == null) {return v$1849;
} else {var v$1852 = v$1848;
var v$1853 = v$1852[0];
var v$1854 = v$1852[1];
var v$1855 = v$1852[2];
var v$1856 = v$1852[3];
var t$2335 = v$1856;
var t$2334;
var v$2194 = fix$2333.$fold$(v$1855,v$1849);
t$2334 = ((f$1136([v$1853,v$1854]))?(compiler_objects$0CompilerEnv$1$3.add$596(v$1853,v$1854,v$2194)):v$2194);
var t$2336 = t$2335;
var t$2337 = t$2334;
var v$1848 = t$2336;
var v$1849 = t$2337;
continue lab$fold$;
};
};
};
var fold$$1847 = fix$2333.$fold$;
return fold$$1847(t$1139,compiler_objects$0CompilerEnv$1$3.empty$320(0));
};
var fix$2338 = {};
fix$2338.$addList = function(v$1156,v$1159){lab$addList: while (true) {if (v$1156 == null) {return v$1159;
} else {var v$1171 = v$1156;
var v$1172 = v$1171[0];
var v$1173 = v$1172[0];
var v$1174 = v$1172[1];
var v$1175 = v$1171[1];
var t$2339 = v$1175;
var t$2340 = compiler_objects$0CompilerEnv$1$3.add$596(v$1173,v$1174,v$1159);
var v$1156 = t$2339;
var v$1159 = t$2340;
continue lab$addList;
};
};
};
compiler_objects$0CompilerEnv$1$3.addList$1153 = fix$2338.$addList;
compiler_objects$0CompilerEnv$1$3.fromList$1177 = function(l$1180){return compiler_objects$0CompilerEnv$1$3.addList$1153(l$1180,compiler_objects$0CompilerEnv$1$3.empty$320(0));
};
compiler_objects$0CompilerEnv$1$3.fromSortedList$1181 = function(l$1184){var fix$2341 = {};
fix$2341.$build = function(v$1213,v$2205){switch (v$1213) { case 0: {return [v$2205,null];
 break; }default: {var n$$1215 = SmlPrims.div_i32(v$1213,2,CompilerInitial.exn$Div$47);
var v$1246 = fix$2341.$build(n$$1215,v$2205);
var v$1247 = v$1246[0];
var v$1248 = v$1246[1];
var v$1229;
if (v$1247 == null) {throw [compiler_objects$0CompilerEnv$1$3.en$Impossible$368,"OrderFinMapbuild"];
} else {var v$1241 = v$1247;
var v$1242 = v$1241[0];
v$1229 = [v$1242[0],v$1242[1],v$1241[1]];
};
var v$1230 = v$1229[0];
var v$1231 = v$1229[1];
var v$1232 = v$1229[2];
var v$1226 = fix$2341.$build(SmlPrims.chk_ovf_i32((SmlPrims.chk_ovf_i32(v$1213 - n$$1215)) - 1),v$1232);
return [v$1226[0],[v$1230,v$1231,v$1248,v$1226[1]]];
} };
};
var build$1202 = fix$2341.$build;
var fix$2342 = {};
fix$2342.$mk_avl = function(v$1264){if (v$1264 == null) {return [null,0];
} else {var v$1293 = v$1264;
var v$1294 = v$1293[0];
var v$1295 = v$1293[1];
var v$1296 = v$1293[2];
var v$1297 = v$1293[3];
var v$1290 = fix$2342.$mk_avl(v$1296);
var v$1291 = v$1290[0];
var v$1292 = v$1290[1];
var v$1287 = fix$2342.$mk_avl(v$1297);
var v$1288 = v$1287[0];
var v$1289 = v$1287[1];
return [[v$1294,v$1295,v$1291,v$1288,(v$1292 == v$1289)?2:((v$1292 > v$1289)?1:0)],SmlPrims.chk_ovf_i32(1 + ((v$1292 > v$1289)?v$1292:v$1289))];
};
};
var mk_avl$1261 = fix$2342.$mk_avl;
var t$2351;
var t$2350 = mk_avl$1261;
var t$2349;
var t$2348;
var t$2347 = build$1202;
var t$2346;
var fix$2343 = {};
fix$2343.$acc = function(v$1865,v$1866){lab$acc: while (true) {if (v$1865 == null) {return v$1866;
} else {var v$1867 = v$1865;
var v$1868 = v$1867[1];
var t$2344 = v$1868;
var t$2345 = SmlPrims.chk_ovf_i32(v$1866 + 1);
var v$1865 = t$2344;
var v$1866 = t$2345;
continue lab$acc;
};
};
};
var acc$1864 = fix$2343.$acc;
t$2346 = (acc$1864(l$1184,0));
t$2348 = (t$2347(t$2346,l$1184));
t$2349 = t$2348[1];
t$2351 = (t$2350(t$2349));
return t$2351[0];
};
compiler_objects$0CompilerEnv$1$3.mergeMap$1306 = function(f$1309,t1$1312,t2$1315){var fix$2352 = {};
fix$2352.$merge = function(v$1336,v$2206){if (v$1336 == null) {return v$2206;
} else {if (v$2206 == null) {return v$1336;
} else {var v$1347 = v$1336;
var v$1348 = v$1347[0];
var v$1349 = v$1348[0];
var v$1350 = v$1348[1];
var v$1351 = v$1347[1];
var v$1352 = v$2206;
var v$1353 = v$1352[0];
var v$1354 = v$1353[0];
var v$1355 = v$1353[1];
var v$1356 = v$1352[1];
return (compiler_objects$0CompilerEnv$1$2.lt$250(v$1349,v$1354))?[[v$1349,v$1350],fix$2352.$merge(v$1351,v$2206)]:((compiler_objects$0CompilerEnv$1$2.lt$250(v$1354,v$1349))?[[v$1354,v$1355],fix$2352.$merge(v$1336,v$1356)]:[[v$1349,f$1309([v$1350,v$1355])],fix$2352.$merge(v$1351,v$1356)]);
};
};
};
var merge$1316 = fix$2352.$merge;
var t$2363 = compiler_objects$0CompilerEnv$1$3.fromSortedList$1181;
var t$2362;
var t$2361 = merge$1316;
var t$2360;
var fix$2357 = {};
fix$2357.$li = function(v$1877,v$1878){lab$li: while (true) {if (v$1877 == null) {return v$1878;
} else {var v$1881 = v$1877;
var v$1882 = v$1881[0];
var v$1883 = v$1881[1];
var v$1884 = v$1881[2];
var v$1885 = v$1881[3];
var t$2358 = v$1884;
var t$2359 = [[v$1882,v$1883],fix$2357.$li(v$1885,v$1878)];
var v$1877 = t$2358;
var v$1878 = t$2359;
continue lab$li;
};
};
};
var li$1876 = fix$2357.$li;
t$2360 = (li$1876(t1$1312,null));
var t$2356;
var fix$2353 = {};
fix$2353.$li = function(v$1889,v$1890){lab$li: while (true) {if (v$1889 == null) {return v$1890;
} else {var v$1893 = v$1889;
var v$1894 = v$1893[0];
var v$1895 = v$1893[1];
var v$1896 = v$1893[2];
var v$1897 = v$1893[3];
var t$2354 = v$1896;
var t$2355 = [[v$1894,v$1895],fix$2353.$li(v$1897,v$1890)];
var v$1889 = t$2354;
var v$1890 = t$2355;
continue lab$li;
};
};
};
var li$1888 = fix$2353.$li;
t$2356 = (li$1888(t2$1315,null));
t$2362 = (t$2361(t$2360,t$2356));
return t$2363(t$2362);
};
var fix$2364 = {};
fix$2364.$oneForWhich = function(f$1360,t$1363){lab$oneForWhich: while (true) {if (t$1363 == null) {return [1];
} else {var v$1383 = t$1363;
var v$1384 = v$1383[0];
var v$1385 = v$1383[1];
var v$1386 = v$1383[2];
var v$1387 = v$1383[3];
if (f$1360([v$1384,v$1385])) {return [0,[v$1384,v$1385]];
} else {var v$1380 = fix$2364.$oneForWhich(f$1360,v$1386);
switch (v$1380[0]) { case 0: {var v$1382 = v$1380[1];
return [0,v$1382];
 break; }default: {var t$2365 = f$1360;
var t$2366 = v$1387;
var f$1360 = t$2365;
var t$1363 = t$2366;
continue lab$oneForWhich;
} };
};
};
};
};
compiler_objects$0CompilerEnv$1$3.oneForWhich$1357 = fix$2364.$oneForWhich;
compiler_objects$0CompilerEnv$1$3.en$Restrict$1388 = new String("Restrict");
compiler_objects$0CompilerEnv$1$3.restrict$1389 = function(v$1408,v$1409,v$1410){var fix$2367 = {};
fix$2367.$foldl = function(v$1903,v$1904){lab$foldl: while (true) {if (v$1904 == null) {return v$1903;
} else {var v$1905 = v$1904;
var v$1906 = v$1905[0];
var v$1907 = v$1905[1];
var t$2371;
var v$2159;
var fix$2368 = {};
fix$2368.$search = function(v$2161){lab$search: while (true) {if (v$2161 == null) {return [1];
} else {var v$2162 = v$2161;
var v$2163 = v$2162[0];
var v$2164 = v$2162[1];
var v$2165 = v$2162[2];
var v$2166 = v$2162[3];
if (compiler_objects$0CompilerEnv$1$2.lt$250(v$1906,v$2163)) {var t$2369 = v$2165;
var v$2161 = t$2369;
continue lab$search;
} else {if (compiler_objects$0CompilerEnv$1$2.lt$250(v$2163,v$1906)) {var t$2370 = v$2166;
var v$2161 = t$2370;
continue lab$search;
} else {return [0,v$2164];
};
};
};
};
};
var search$2160 = fix$2368.$search;
v$2159 = (search$2160(v$1409));
switch (v$2159[0]) { case 0: {var v$2167 = v$2159[1];
t$2371 = (compiler_objects$0CompilerEnv$1$3.add$596(v$1906,v$2167,v$1903));
 break; }default: {throw [compiler_objects$0CompilerEnv$1$3.en$Restrict$1388,v$1408(v$1906)];
} };
var t$2372 = t$2371;
var t$2373 = v$1907;
var v$1903 = t$2372;
var v$1904 = t$2373;
continue lab$foldl;
};
};
};
var foldl$1902 = fix$2367.$foldl;
return foldl$1902(compiler_objects$0CompilerEnv$1$3.empty$320(0),v$1410);
};
compiler_objects$0CompilerEnv$1$3.enrich$1411 = function(en$1414,v$1418){var v$1439 = v$1418[0];
var v$1440 = v$1418[1];
var fix$2374 = {};
fix$2374.$fold$ = function(v$1927,v$1928){lab$fold$: while (true) {if (v$1927 == null) {return v$1928;
} else {var v$1931 = v$1927;
var v$1932 = v$1931[0];
var v$1933 = v$1931[1];
var v$1934 = v$1931[2];
var v$1935 = v$1931[3];
var t$2379 = v$1935;
var t$2378;
if (fix$2374.$fold$(v$1934,v$1928)) {var v$2172;
var fix$2375 = {};
fix$2375.$search = function(v$2174){lab$search: while (true) {if (v$2174 == null) {return [1];
} else {var v$2175 = v$2174;
var v$2176 = v$2175[0];
var v$2177 = v$2175[1];
var v$2178 = v$2175[2];
var v$2179 = v$2175[3];
if (compiler_objects$0CompilerEnv$1$2.lt$250(v$1932,v$2176)) {var t$2376 = v$2178;
var v$2174 = t$2376;
continue lab$search;
} else {if (compiler_objects$0CompilerEnv$1$2.lt$250(v$2176,v$1932)) {var t$2377 = v$2179;
var v$2174 = t$2377;
continue lab$search;
} else {return [0,v$2177];
};
};
};
};
};
var search$2173 = fix$2375.$search;
v$2172 = (search$2173(v$1439));
switch (v$2172[0]) { case 0: {var v$2180 = v$2172[1];
t$2378 = (en$1414([v$2180,v$1933]));
 break; }default: {t$2378 = false;
} };
} else {t$2378 = false;
};
var t$2380 = t$2379;
var t$2381 = t$2378;
var v$1927 = t$2380;
var v$1928 = t$2381;
continue lab$fold$;
};
};
};
var fold$$1926 = fix$2374.$fold$;
return fold$$1926(v$1440,true);
};
compiler_objects$0CompilerEnv$1$3.layoutMap$1441 = function(v$1474,v$1476,v$1475,v$1473){return function(layoutDom$1450){return function(layoutRan$1453){return function(m$1456){var t$2389;
var t$2388;
var t$2387 = basis$0List$1.map$697;
var t$2386 = function(v$1460){var v$1466 = v$1460[0];
var v$1467 = v$1460[1];
return [0,[[layoutDom$1450(v$1466),[layoutRan$1453(v$1467),null]],[0,v$1474],"",3,""]];
};
var t$2385;
var fix$2382 = {};
fix$2382.$li = function(v$1954,v$1955){lab$li: while (true) {if (v$1954 == null) {return v$1955;
} else {var v$1958 = v$1954;
var v$1959 = v$1958[0];
var v$1960 = v$1958[1];
var v$1961 = v$1958[2];
var v$1962 = v$1958[3];
var t$2383 = v$1961;
var t$2384 = [[v$1959,v$1960],fix$2382.$li(v$1962,v$1955)];
var v$1954 = t$2383;
var v$1955 = t$2384;
continue lab$li;
};
};
};
var li$1953 = fix$2382.$li;
t$2385 = (li$1953(m$1456,null));
t$2388 = (t$2387(t$2386,t$2385));
t$2389 = [t$2388,[0,v$1475],v$1476,3,v$1473];
return [0,t$2389];
};
};
};
};
compiler_objects$0CompilerEnv$1$3.reportMap$1477 = function(f$1480,t$1483){var t$2397 = tools$0Report$1.flatten$87;
var t$2396;
var t$2395 = basis$0List$1.map$697;
var t$2394 = f$1480;
var t$2393;
var fix$2390 = {};
fix$2390.$li = function(v$1966,v$1967){lab$li: while (true) {if (v$1966 == null) {return v$1967;
} else {var v$1970 = v$1966;
var v$1971 = v$1970[0];
var v$1972 = v$1970[1];
var v$1973 = v$1970[2];
var v$1974 = v$1970[3];
var t$2391 = v$1973;
var t$2392 = [[v$1971,v$1972],fix$2390.$li(v$1974,v$1967)];
var v$1966 = t$2391;
var v$1967 = t$2392;
continue lab$li;
};
};
};
var li$1965 = fix$2390.$li;
t$2393 = (li$1965(t$1483,null));
t$2396 = (t$2395(t$2394,t$2393));
return t$2397(t$2396);
};
compiler_objects$0CompilerEnv$1$3.reportMapSORTED$1484 = function(f$1976,t$1977){var t$2405 = tools$0Report$1.flatten$87;
var t$2404;
var t$2403 = basis$0List$1.map$697;
var t$2402 = f$1976;
var t$2401;
var fix$2398 = {};
fix$2398.$li = function(v$1980,v$1981){lab$li: while (true) {if (v$1980 == null) {return v$1981;
} else {var v$1984 = v$1980;
var v$1985 = v$1984[0];
var v$1986 = v$1984[1];
var v$1987 = v$1984[2];
var v$1988 = v$1984[3];
var t$2399 = v$1987;
var t$2400 = [[v$1985,v$1986],fix$2398.$li(v$1988,v$1981)];
var v$1980 = t$2399;
var v$1981 = t$2400;
continue lab$li;
};
};
};
var li$1979 = fix$2398.$li;
t$2401 = (li$1979(t$1977,null));
t$2404 = (t$2403(t$2402,t$2401));
return t$2405(t$2404);
};
compiler_objects$0CompilerEnv$1$3.pu_bal$1485 = pickle$0pickle$1.enumGen$2158(function(v$1990){var v$1991 = v$1990[0];
var v$1992 = v$1990[1];
switch (v$1991) { case 0: {switch (v$1992) { case 0: {return true;
 break; }default: {return false;
} };
 break; }case 1: {switch (v$1992) { case 1: {return true;
 break; }default: {return false;
} };
 break; }case 2: {switch (v$1992) { case 2: {return true;
 break; }default: {return false;
} };
 break; } };
},["OrderFinMap.bal",[1,[2,[0,null]]]]);
compiler_objects$0CompilerEnv$1$3.pu$1486 = function(pu_dom$1489,pu_r$1492){var fun_E$1501;
var v$2209 = null;
fun_E$1501 = (function(v$2210){return pickle$0pickle$1.con0$1988(v$2209,v$2210);
});
return pickle$0pickle$1.dataGen$1488(["OrderFinMap.map",function(v$1995){return (v$1995 == null)?0:1;
},[fun_E$1501,[function(pu$1996){return pickle$0pickle$1.con1$2014(function(v$1997){var v$1998 = v$1997[0];
return [v$1998[0],v$1998[1],v$1998[2],v$1998[3],v$1997[1]];
},function(v$1999){if (v$1999 == null) {return tools$0Crash$1.impossible$59("OrderFinMap.pu.fun_N");
} else {var v$2000 = v$1999;
return [[v$2000[0],v$2000[1],v$2000[2],v$2000[3]],v$2000[4]];
};
},pickle$0pickle$1.pairGen0$983(pickle$0pickle$1.tup4Gen0$2377(pu_dom$1489,pu_r$1492,pu$1996,pu$1996),compiler_objects$0CompilerEnv$1$3.pu_bal$1485));
},null]]]);
};
return 0;
})();
