if ((typeof(syntax_objects$0RegVar$1$3)) == "undefined") {syntax_objects$0RegVar$1$3 = {};
};
(function(){syntax_objects$0RegVar$1$3.eq_bal$1605 = function(v$1607,v$1608){switch (v$1607) { case 0: {switch (v$1608) { case 0: {return true;
 break; }default: {return false;
} };
 break; }case 1: {switch (v$1608) { case 1: {return true;
 break; }default: {return false;
} };
 break; }case 2: {switch (v$1608) { case 2: {return true;
 break; }default: {return false;
} };
 break; } };
};
var fix$2290 = {};
fix$2290.$eq_tree = function(v$1613,v$1614,v$1610){lab$eq_tree: while (true) {var v$1611 = v$1610[0];
var v$1612 = v$1610[1];
if (v$1611 == null) {return (v$1612 == null)?true:false;
} else {if (v$1612 == null) {return false;
} else {var v$1615 = v$1611;
var v$1616 = v$1612;
if (v$1613([v$1615[0],v$1616[0]])) {if (v$1614([v$1615[1],v$1616[1]])) {if (fix$2290.$eq_tree(v$1613,v$1614,[v$1615[2],v$1616[2]])) {var t$2291 = v$1613;
var t$2292 = v$1614;
var t$2293 = [v$1615[3],v$1616[3]];
var v$1613 = t$2291;
var v$1614 = t$2292;
var v$1610 = t$2293;
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
syntax_objects$0RegVar$1$3.eq_tree$1609 = fix$2290.$eq_tree;
syntax_objects$0RegVar$1$3.die$336 = function(s$339){return tools$0Crash$1.impossible$59("OrderFinMap." + s$339);
};
syntax_objects$0RegVar$1$3.s$j$340 = function(v$2277,v$2278){return v$2277[1] < v$2278[1];
};
syntax_objects$0RegVar$1$3.lt$347 = function(v$2279,v$2280){return v$2279[1] < v$2280[1];
};
syntax_objects$0RegVar$1$3.eq$348 = function(v$357,v$358){return ((v$357[1] < v$358[1])?true:(v$358[1] < v$357[1]))?false:true;
};
syntax_objects$0RegVar$1$3.empty$364 = function(v$2289){return null;
};
syntax_objects$0RegVar$1$3.singleton$365 = function(v$2281,v$2282){return [v$2281,v$2282,null,null,2];
};
syntax_objects$0RegVar$1$3.isEmpty$372 = function(v$375){return (v$375 == null)?true:false;
};
syntax_objects$0RegVar$1$3.lookup$380 = function(t$383,key$386){var fix$2294 = {};
fix$2294.$search = function(v$390){lab$search: while (true) {if (v$390 == null) {return [1];
} else {var v$407 = v$390;
var v$408 = v$407[0];
var v$409 = v$407[1];
var v$410 = v$407[2];
var v$411 = v$407[3];
if (key$386[1] < v$408[1]) {var t$2295 = v$410;
var v$390 = t$2295;
continue lab$search;
} else {if (v$408[1] < key$386[1]) {var t$2296 = v$411;
var v$390 = t$2296;
continue lab$search;
} else {return [0,v$409];
};
};
};
};
};
var search$387 = fix$2294.$search;
return search$387(t$383);
};
syntax_objects$0RegVar$1$3.en$Impossible$412 = new String("Impossible");
syntax_objects$0RegVar$1$3.impossible$413 = function(s$416){throw [syntax_objects$0RegVar$1$3.en$Impossible$412,"OrderFinMap" + s$416];
};
var en$ALREADYTHERE$417 = new String("ALREADYTHERE");
var exn$ALREADYTHERE$417 = [en$ALREADYTHERE$417];
syntax_objects$0RegVar$1$3.add$640 = function(v$649,v$650,v$651){try {var fix$2298 = {};
fix$2298.$ins = function(v$1726){if (v$1726 == null) {return [true,[v$649,v$650,null,null,2]];
} else {var v$1727 = v$1726;
var v$1728 = v$1727[0];
var v$1729 = v$1727[1];
var v$1730 = v$1727[2];
var v$1731 = v$1727[3];
var v$1732 = v$1727[4];
if (v$649[1] < v$1728[1]) {var v$1734 = fix$2298.$ins(v$1730);
var v$1735 = v$1734[0];
var v$1736 = v$1734[1];
switch (v$1732) { case 2: {return v$1735?[true,[v$1728,v$1729,v$1736,v$1731,1]]:[false,[v$1728,v$1729,v$1736,v$1731,2]];
 break; }case 0: {return v$1735?[false,[v$1728,v$1729,v$1736,v$1731,2]]:[false,[v$1728,v$1729,v$1736,v$1731,0]];
 break; }default: {if (v$1735) {var v$1738;
if (v$1736 == null) {throw [syntax_objects$0RegVar$1$3.en$Impossible$412,"OrderFinMapAVLfinmap 1"];
} else {v$1738 = v$1736;
};
var v$1741 = v$1738[0];
var v$1742 = v$1738[1];
var v$1743 = v$1738[2];
var v$1744 = v$1738[3];
var v$1745 = v$1738[4];
var t$2299;
var v$2096 = 1;
switch (v$1745) { case 0: {switch (v$2096) { case 0: {t$2299 = true;
 break; }default: {t$2299 = false;
} };
 break; }case 1: {switch (v$2096) { case 1: {t$2299 = true;
 break; }default: {t$2299 = false;
} };
 break; }case 2: {switch (v$2096) { case 2: {t$2299 = true;
 break; }default: {t$2299 = false;
} };
 break; } };
if (t$2299) {return [false,[v$1741,v$1742,v$1743,[v$1728,v$1729,v$1744,v$1731,2],2]];
} else {var v$1753;
if (v$1744 == null) {throw [syntax_objects$0RegVar$1$3.en$Impossible$412,"OrderFinMapAVLfinmap 2"];
} else {v$1753 = v$1744;
};
var v$1756 = v$1753[0];
var v$1757 = v$1753[1];
var v$1758 = v$1753[2];
var v$1759 = v$1753[3];
var v$1760 = v$1753[4];
var t$2320 = false;
var t$2319;
var t$2318;
var t$2317 = v$1756;
var t$2316 = v$1757;
var t$2315;
var t$2314;
var t$2313 = v$1741;
var t$2312 = v$1742;
var t$2311 = v$1743;
var t$2310 = v$1758;
var t$2309;
var t$2308;
var v$2102 = 0;
switch (v$1760) { case 0: {switch (v$2102) { case 0: {t$2308 = true;
 break; }default: {t$2308 = false;
} };
 break; }case 1: {switch (v$2102) { case 1: {t$2308 = true;
 break; }default: {t$2308 = false;
} };
 break; }case 2: {switch (v$2102) { case 2: {t$2308 = true;
 break; }default: {t$2308 = false;
} };
 break; } };
t$2309 = (t$2308?1:2);
t$2314 = [t$2313,t$2312,t$2311,t$2310,t$2309];
t$2315 = t$2314;
var t$2307;
var t$2306;
var t$2305 = v$1728;
var t$2304 = v$1729;
var t$2303 = v$1759;
var t$2302 = v$1731;
var t$2301;
var t$2300;
var v$2106 = 1;
switch (v$1760) { case 0: {switch (v$2106) { case 0: {t$2300 = true;
 break; }default: {t$2300 = false;
} };
 break; }case 1: {switch (v$2106) { case 1: {t$2300 = true;
 break; }default: {t$2300 = false;
} };
 break; }case 2: {switch (v$2106) { case 2: {t$2300 = true;
 break; }default: {t$2300 = false;
} };
 break; } };
t$2301 = (t$2300?0:2);
t$2306 = [t$2305,t$2304,t$2303,t$2302,t$2301];
t$2307 = t$2306;
t$2318 = [t$2317,t$2316,t$2315,t$2307,2];
t$2319 = t$2318;
return [t$2320,t$2319];
};
} else {return [false,[v$1728,v$1729,v$1736,v$1731,1]];
};
} };
} else {if (v$1728[1] < v$649[1]) {var v$1776 = fix$2298.$ins(v$1731);
var v$1777 = v$1776[0];
var v$1778 = v$1776[1];
switch (v$1732) { case 2: {return v$1777?[true,[v$1728,v$1729,v$1730,v$1778,0]]:[false,[v$1728,v$1729,v$1730,v$1778,2]];
 break; }case 1: {return v$1777?[false,[v$1728,v$1729,v$1730,v$1778,2]]:[false,[v$1728,v$1729,v$1730,v$1778,1]];
 break; }default: {if (v$1777) {var v$1780;
if (v$1778 == null) {throw [syntax_objects$0RegVar$1$3.en$Impossible$412,"OrderFinMapAVLfinmap 3"];
} else {v$1780 = v$1778;
};
var v$1783 = v$1780[0];
var v$1784 = v$1780[1];
var v$1785 = v$1780[2];
var v$1786 = v$1780[3];
var v$1787 = v$1780[4];
var t$2321;
var v$2116 = 0;
switch (v$1787) { case 0: {switch (v$2116) { case 0: {t$2321 = true;
 break; }default: {t$2321 = false;
} };
 break; }case 1: {switch (v$2116) { case 1: {t$2321 = true;
 break; }default: {t$2321 = false;
} };
 break; }case 2: {switch (v$2116) { case 2: {t$2321 = true;
 break; }default: {t$2321 = false;
} };
 break; } };
if (t$2321) {return [false,[v$1783,v$1784,[v$1728,v$1729,v$1730,v$1785,2],v$1786,2]];
} else {var v$1795;
if (v$1785 == null) {throw [syntax_objects$0RegVar$1$3.en$Impossible$412,"OrderFinMapAVLfinmap 4"];
} else {v$1795 = v$1785;
};
var v$1798 = v$1795[0];
var v$1799 = v$1795[1];
var v$1800 = v$1795[2];
var v$1801 = v$1795[3];
var v$1802 = v$1795[4];
var t$2342 = false;
var t$2341;
var t$2340;
var t$2339 = v$1798;
var t$2338 = v$1799;
var t$2337;
var t$2336;
var t$2335 = v$1728;
var t$2334 = v$1729;
var t$2333 = v$1730;
var t$2332 = v$1800;
var t$2331;
var t$2330;
var v$2122 = 0;
switch (v$1802) { case 0: {switch (v$2122) { case 0: {t$2330 = true;
 break; }default: {t$2330 = false;
} };
 break; }case 1: {switch (v$2122) { case 1: {t$2330 = true;
 break; }default: {t$2330 = false;
} };
 break; }case 2: {switch (v$2122) { case 2: {t$2330 = true;
 break; }default: {t$2330 = false;
} };
 break; } };
t$2331 = (t$2330?1:2);
t$2336 = [t$2335,t$2334,t$2333,t$2332,t$2331];
t$2337 = t$2336;
var t$2329;
var t$2328;
var t$2327 = v$1783;
var t$2326 = v$1784;
var t$2325 = v$1801;
var t$2324 = v$1786;
var t$2323;
var t$2322;
var v$2126 = 1;
switch (v$1802) { case 0: {switch (v$2126) { case 0: {t$2322 = true;
 break; }default: {t$2322 = false;
} };
 break; }case 1: {switch (v$2126) { case 1: {t$2322 = true;
 break; }default: {t$2322 = false;
} };
 break; }case 2: {switch (v$2126) { case 2: {t$2322 = true;
 break; }default: {t$2322 = false;
} };
 break; } };
t$2323 = (t$2322?0:2);
t$2328 = [t$2327,t$2326,t$2325,t$2324,t$2323];
t$2329 = t$2328;
t$2340 = [t$2339,t$2338,t$2337,t$2329,2];
t$2341 = t$2340;
return [t$2342,t$2341];
};
} else {return [false,[v$1728,v$1729,v$1730,v$1778,0]];
};
} };
} else {throw exn$ALREADYTHERE$417;
};
};
};
};
var ins$1725 = fix$2298.$ins;
return (ins$1725(v$651))[1];
} catch(v$2297) {return (function(ALREADYTHERE$648){var t$2343 = ALREADYTHERE$648;
if (t$2343[0] == en$ALREADYTHERE$417) {var fix$2344 = {};
fix$2344.$repl = function(v$1841){if (v$1841 == null) {throw [syntax_objects$0RegVar$1$3.en$Impossible$412,"OrderFinMapAVLupdate.repl"];
} else {var v$1844 = v$1841;
var v$1845 = v$1844[0];
var v$1846 = v$1844[1];
var v$1847 = v$1844[2];
var v$1848 = v$1844[3];
var v$1849 = v$1844[4];
return (v$649[1] < v$1845[1])?[v$1845,v$1846,fix$2344.$repl(v$1847),v$1848,v$1849]:((v$1845[1] < v$649[1])?[v$1845,v$1846,v$1847,fix$2344.$repl(v$1848),v$1849]:[v$1845,v$650,v$1847,v$1848,v$1849]);
};
};
var repl$1840 = fix$2344.$repl;
return repl$1840(v$651);
} else {throw ALREADYTHERE$648;
};
})(v$2297);
};
};
var fix$2345 = {};
fix$2345.$plus = function(v$670,v$671){lab$plus: while (true) {if (v$671 == null) {return v$670;
} else {var v$665 = v$671;
var v$666 = v$665[0];
var v$667 = v$665[1];
var v$668 = v$665[2];
var v$669 = v$665[3];
var t$2346 = fix$2345.$plus(syntax_objects$0RegVar$1$3.add$640(v$666,v$667,v$670),v$668);
var t$2347 = v$669;
var v$670 = t$2346;
var v$671 = t$2347;
continue lab$plus;
};
};
};
syntax_objects$0RegVar$1$3.plus$652 = fix$2345.$plus;
var en$NOTFOUND$672 = new String("NOTFOUND");
var exn$NOTFOUND$672 = [en$NOTFOUND$672];
var delete$673 = function(v$958,v$959){var balance1$678 = function(v$681){if (v$681 == null) {throw [syntax_objects$0RegVar$1$3.en$Impossible$412,"OrderFinMap(balance1 on an empty map)"];
} else {var v$751 = v$681;
var v$752 = v$751[0];
var v$753 = v$751[1];
var v$754 = v$751[2];
var v$755 = v$751[3];
switch (v$751[4]) { case 1: {return [[v$752,v$753,v$754,v$755,2],true];
 break; }case 2: {return [[v$752,v$753,v$754,v$755,0],false];
 break; }default: {var v$738;
if (v$755 == null) {throw [syntax_objects$0RegVar$1$3.en$Impossible$412,"OrderFinMapAVLfinmap 5"];
} else {v$738 = v$755;
};
var v$739 = v$738[0];
var v$740 = v$738[1];
var v$741 = v$738[2];
var v$742 = v$738[3];
switch (v$738[4]) { case 1: {var v$725;
if (v$741 == null) {throw [syntax_objects$0RegVar$1$3.en$Impossible$412,"OrderFinMapAVLfinmap 6"];
} else {v$725 = v$741;
};
var v$726 = v$725[0];
var v$727 = v$725[1];
var v$728 = v$725[2];
var v$729 = v$725[3];
var v$730 = v$725[4];
var t$2367;
var t$2366;
var t$2365 = v$726;
var t$2364 = v$727;
var t$2363;
var t$2362;
var t$2361 = v$752;
var t$2360 = v$753;
var t$2359 = v$754;
var t$2358 = v$728;
var t$2357;
var t$2356;
var v$2144 = 0;
switch (v$730) { case 0: {switch (v$2144) { case 0: {t$2356 = true;
 break; }default: {t$2356 = false;
} };
 break; }case 1: {switch (v$2144) { case 1: {t$2356 = true;
 break; }default: {t$2356 = false;
} };
 break; }case 2: {switch (v$2144) { case 2: {t$2356 = true;
 break; }default: {t$2356 = false;
} };
 break; } };
t$2357 = (t$2356?1:2);
t$2362 = [t$2361,t$2360,t$2359,t$2358,t$2357];
t$2363 = t$2362;
var t$2355;
var t$2354;
var t$2353 = v$739;
var t$2352 = v$740;
var t$2351 = v$729;
var t$2350 = v$742;
var t$2349;
var t$2348;
var v$2146 = 1;
switch (v$730) { case 0: {switch (v$2146) { case 0: {t$2348 = true;
 break; }default: {t$2348 = false;
} };
 break; }case 1: {switch (v$2146) { case 1: {t$2348 = true;
 break; }default: {t$2348 = false;
} };
 break; }case 2: {switch (v$2146) { case 2: {t$2348 = true;
 break; }default: {t$2348 = false;
} };
 break; } };
t$2349 = (t$2348?0:2);
t$2354 = [t$2353,t$2352,t$2351,t$2350,t$2349];
t$2355 = t$2354;
t$2366 = [t$2365,t$2364,t$2363,t$2355,2];
t$2367 = t$2366;
return [t$2367,true];
 break; }case 2: {return [[v$739,v$740,[v$752,v$753,v$754,v$741,0],v$742,1],false];
 break; }default: {return [[v$739,v$740,[v$752,v$753,v$754,v$741,2],v$742,2],true];
} };
} };
};
};
var balance2$757 = function(v$760){if (v$760 == null) {throw [syntax_objects$0RegVar$1$3.en$Impossible$412,"OrderFinMap(balance2 on an empty map)"];
} else {var v$830 = v$760;
var v$831 = v$830[0];
var v$832 = v$830[1];
var v$833 = v$830[2];
var v$834 = v$830[3];
switch (v$830[4]) { case 0: {return [[v$831,v$832,v$833,v$834,2],true];
 break; }case 2: {return [[v$831,v$832,v$833,v$834,1],false];
 break; }default: {var v$817;
if (v$833 == null) {throw [syntax_objects$0RegVar$1$3.en$Impossible$412,"OrderFinMapAVLfinmap 7"];
} else {v$817 = v$833;
};
var v$818 = v$817[0];
var v$819 = v$817[1];
var v$820 = v$817[2];
var v$821 = v$817[3];
switch (v$817[4]) { case 0: {var v$804;
if (v$821 == null) {throw [syntax_objects$0RegVar$1$3.en$Impossible$412,"OrderFinMapAVLfinmap 8"];
} else {v$804 = v$821;
};
var v$805 = v$804[0];
var v$806 = v$804[1];
var v$807 = v$804[2];
var v$808 = v$804[3];
var v$809 = v$804[4];
var t$2387;
var t$2386;
var t$2385 = v$805;
var t$2384 = v$806;
var t$2383;
var t$2382;
var t$2381 = v$818;
var t$2380 = v$819;
var t$2379 = v$820;
var t$2378 = v$807;
var t$2377;
var t$2376;
var v$2156 = 0;
switch (v$809) { case 0: {switch (v$2156) { case 0: {t$2376 = true;
 break; }default: {t$2376 = false;
} };
 break; }case 1: {switch (v$2156) { case 1: {t$2376 = true;
 break; }default: {t$2376 = false;
} };
 break; }case 2: {switch (v$2156) { case 2: {t$2376 = true;
 break; }default: {t$2376 = false;
} };
 break; } };
t$2377 = (t$2376?1:2);
t$2382 = [t$2381,t$2380,t$2379,t$2378,t$2377];
t$2383 = t$2382;
var t$2375;
var t$2374;
var t$2373 = v$831;
var t$2372 = v$832;
var t$2371 = v$808;
var t$2370 = v$834;
var t$2369;
var t$2368;
var v$2154 = 1;
switch (v$809) { case 0: {switch (v$2154) { case 0: {t$2368 = true;
 break; }default: {t$2368 = false;
} };
 break; }case 1: {switch (v$2154) { case 1: {t$2368 = true;
 break; }default: {t$2368 = false;
} };
 break; }case 2: {switch (v$2154) { case 2: {t$2368 = true;
 break; }default: {t$2368 = false;
} };
 break; } };
t$2369 = (t$2368?0:2);
t$2374 = [t$2373,t$2372,t$2371,t$2370,t$2369];
t$2375 = t$2374;
t$2386 = [t$2385,t$2384,t$2383,t$2375,2];
t$2387 = t$2386;
return [t$2387,true];
 break; }case 2: {return [[v$818,v$819,v$820,[v$831,v$832,v$821,v$834,1],0],false];
 break; }default: {return [[v$818,v$819,v$820,[v$831,v$832,v$821,v$834,2],2],true];
} };
} };
};
};
var fix$2388 = {};
fix$2388.$remove_rightmost = function(v$839){if (v$839 == null) {throw [syntax_objects$0RegVar$1$3.en$Impossible$412,"OrderFinMap(remove_rightmost on empty map)"];
} else {var v$855 = v$839;
var v$856 = v$855[3];
if (v$856 == null) {return [v$855[2],v$855[0],v$855[1],true];
} else {var v$881 = v$855[0];
var v$882 = v$855[1];
var v$883 = v$855[2];
var v$884 = v$855[4];
var v$876 = fix$2388.$remove_rightmost(v$856);
var v$877 = v$876[0];
var v$878 = v$876[1];
var v$879 = v$876[2];
if (v$876[3]) {var v$873 = balance2$757([v$881,v$882,v$883,v$877,v$884]);
return [v$873[0],v$878,v$879,v$873[1]];
} else {return [[v$881,v$882,v$883,v$877,v$884],v$878,v$879,false];
};
};
};
};
var remove_rightmost$836 = fix$2388.$remove_rightmost;
var fix$2389 = {};
fix$2389.$del = function(v$888){if (v$888 == null) {throw exn$NOTFOUND$672;
} else {var v$948 = v$888;
var v$949 = v$948[0];
var v$950 = v$948[1];
var v$951 = v$948[2];
var v$952 = v$948[3];
var v$953 = v$948[4];
if (v$958[1] < v$949[1]) {var v$909 = fix$2389.$del(v$951);
var v$910 = v$909[0];
if (v$909[1]) {return balance1$678([v$949,v$950,v$910,v$952,v$953]);
} else {return [[v$949,v$950,v$910,v$952,v$953],false];
};
} else {if (v$949[1] < v$958[1]) {var v$923 = fix$2389.$del(v$952);
var v$924 = v$923[0];
if (v$923[1]) {return balance2$757([v$949,v$950,v$951,v$924,v$953]);
} else {return [[v$949,v$950,v$951,v$924,v$953],false];
};
} else {if (v$952 == null) {return [v$951,true];
} else {if (v$951 == null) {return [v$952,true];
} else {var v$943 = remove_rightmost$836(v$951);
var v$944 = v$943[0];
var v$945 = v$943[1];
var v$946 = v$943[2];
if (v$943[3]) {return balance1$678([v$945,v$946,v$944,v$952,v$953]);
} else {return [[v$945,v$946,v$944,v$952,v$953],false];
};
};
};
};
};
};
};
var del$885 = fix$2389.$del;
return (del$885(v$959))[0];
};
syntax_objects$0RegVar$1$3.remove$960 = function(v$968,v$969){try {return [0,delete$673(v$968,v$969)];
} catch(v$2390) {return (function(NOTFOUND$967){var t$2391 = NOTFOUND$967;
if (t$2391[0] == en$NOTFOUND$672) {return [1];
} else {throw NOTFOUND$967;
};
})(v$2390);
};
};
syntax_objects$0RegVar$1$3.delete$970 = function(v$978,v$979){try {return delete$673(v$978,v$979);
} catch(v$2392) {return (function(NOTFOUND$977){var t$2393 = NOTFOUND$977;
if (t$2393[0] == en$NOTFOUND$672) {return v$979;
} else {throw NOTFOUND$977;
};
})(v$2392);
};
};
syntax_objects$0RegVar$1$3.dom$980 = function(m$983){var fix$2394 = {};
fix$2394.$dom$ = function(v$987,v$990){lab$dom$: while (true) {if (v$987 == null) {return v$990;
} else {var v$1002 = v$987;
var v$1003 = v$1002[0];
var v$1004 = v$1002[2];
var v$1005 = v$1002[3];
var t$2395 = v$1004;
var t$2396 = [v$1003,fix$2394.$dom$(v$1005,v$990)];
var v$987 = t$2395;
var v$990 = t$2396;
continue lab$dom$;
};
};
};
var dom$$984 = fix$2394.$dom$;
return dom$$984(m$983,null);
};
syntax_objects$0RegVar$1$3.range$1007 = function(m$1010){var fix$2397 = {};
fix$2397.$ran = function(v$1014,v$1017){lab$ran: while (true) {if (v$1014 == null) {return v$1017;
} else {var v$1029 = v$1014;
var v$1030 = v$1029[1];
var v$1031 = v$1029[2];
var v$1032 = v$1029[3];
var t$2398 = v$1031;
var t$2399 = [v$1030,fix$2397.$ran(v$1032,v$1017)];
var v$1014 = t$2398;
var v$1017 = t$2399;
continue lab$ran;
};
};
};
var ran$1011 = fix$2397.$ran;
return ran$1011(m$1010,null);
};
syntax_objects$0RegVar$1$3.list$1034 = function(m$1037){var fix$2400 = {};
fix$2400.$li = function(v$1041,v$1044){lab$li: while (true) {if (v$1041 == null) {return v$1044;
} else {var v$1057 = v$1041;
var v$1058 = v$1057[0];
var v$1059 = v$1057[1];
var v$1060 = v$1057[2];
var v$1061 = v$1057[3];
var t$2401 = v$1060;
var t$2402 = [[v$1058,v$1059],fix$2400.$li(v$1061,v$1044)];
var v$1041 = t$2401;
var v$1044 = t$2402;
continue lab$li;
};
};
};
var li$1038 = fix$2400.$li;
return li$1038(m$1037,null);
};
var fix$2403 = {};
fix$2403.$composemap = function(f$1066,t$1069){if (t$1069 == null) {return null;
} else {var v$1080 = t$1069;
var v$1081 = v$1080[0];
var v$1082 = v$1080[1];
var v$1083 = v$1080[2];
var v$1084 = v$1080[3];
var v$1085 = v$1080[4];
var l$$1079 = fix$2403.$composemap(f$1066,v$1083);
return [v$1081,f$1066(v$1082),l$$1079,fix$2403.$composemap(f$1066,v$1084),v$1085];
};
};
syntax_objects$0RegVar$1$3.composemap$1063 = fix$2403.$composemap;
var fix$2404 = {};
fix$2404.$ComposeMap = function(f$1089,t$1092){if (t$1092 == null) {return null;
} else {var v$1103 = t$1092;
var v$1104 = v$1103[0];
var v$1105 = v$1103[1];
var v$1106 = v$1103[2];
var v$1107 = v$1103[3];
var v$1108 = v$1103[4];
var l$$1102 = fix$2404.$ComposeMap(f$1089,v$1106);
return [v$1104,f$1089([v$1104,v$1105]),l$$1102,fix$2404.$ComposeMap(f$1089,v$1107),v$1108];
};
};
syntax_objects$0RegVar$1$3.ComposeMap$1086 = fix$2404.$ComposeMap;
syntax_objects$0RegVar$1$3.fold$1109 = function(f$1112,e$1115,t$1118){var fix$2405 = {};
fix$2405.$fold$ = function(v$1122,v$1125){lab$fold$: while (true) {if (v$1122 == null) {return v$1125;
} else {var v$1137 = v$1122;
var v$1138 = v$1137[1];
var v$1139 = v$1137[2];
var v$1140 = v$1137[3];
var t$2406 = v$1140;
var t$2407 = f$1112([v$1138,fix$2405.$fold$(v$1139,v$1125)]);
var v$1122 = t$2406;
var v$1125 = t$2407;
continue lab$fold$;
};
};
};
var fold$$1119 = fix$2405.$fold$;
return fold$$1119(t$1118,e$1115);
};
syntax_objects$0RegVar$1$3.Fold$1142 = function(f$1145,e$1148,t$1151){var fix$2408 = {};
fix$2408.$fold$ = function(v$1155,v$1158){lab$fold$: while (true) {if (v$1155 == null) {return v$1158;
} else {var v$1171 = v$1155;
var v$1172 = v$1171[0];
var v$1173 = v$1171[1];
var v$1174 = v$1171[2];
var v$1175 = v$1171[3];
var t$2409 = v$1175;
var t$2410 = f$1145([[v$1172,v$1173],fix$2408.$fold$(v$1174,v$1158)]);
var v$1155 = t$2409;
var v$1158 = t$2410;
continue lab$fold$;
};
};
};
var fold$$1152 = fix$2408.$fold$;
return fold$$1152(t$1151,e$1148);
};
syntax_objects$0RegVar$1$3.filter$1177 = function(f$1180,t$1183){var fix$2411 = {};
fix$2411.$fold$ = function(v$1908,v$1909){lab$fold$: while (true) {if (v$1908 == null) {return v$1909;
} else {var v$1912 = v$1908;
var v$1913 = v$1912[0];
var v$1914 = v$1912[1];
var v$1915 = v$1912[2];
var v$1916 = v$1912[3];
var t$2413 = v$1916;
var t$2412;
var v$2268 = fix$2411.$fold$(v$1915,v$1909);
t$2412 = ((f$1180([v$1913,v$1914]))?(syntax_objects$0RegVar$1$3.add$640(v$1913,v$1914,v$2268)):v$2268);
var t$2414 = t$2413;
var t$2415 = t$2412;
var v$1908 = t$2414;
var v$1909 = t$2415;
continue lab$fold$;
};
};
};
var fold$$1907 = fix$2411.$fold$;
return fold$$1907(t$1183,syntax_objects$0RegVar$1$3.empty$364(0));
};
var fix$2416 = {};
fix$2416.$addList = function(v$1200,v$1203){lab$addList: while (true) {if (v$1200 == null) {return v$1203;
} else {var v$1215 = v$1200;
var v$1216 = v$1215[0];
var v$1217 = v$1216[0];
var v$1218 = v$1216[1];
var v$1219 = v$1215[1];
var t$2417 = v$1219;
var t$2418 = syntax_objects$0RegVar$1$3.add$640(v$1217,v$1218,v$1203);
var v$1200 = t$2417;
var v$1203 = t$2418;
continue lab$addList;
};
};
};
syntax_objects$0RegVar$1$3.addList$1197 = fix$2416.$addList;
syntax_objects$0RegVar$1$3.fromList$1221 = function(l$1224){return syntax_objects$0RegVar$1$3.addList$1197(l$1224,syntax_objects$0RegVar$1$3.empty$364(0));
};
syntax_objects$0RegVar$1$3.fromSortedList$1225 = function(l$1228){var fix$2419 = {};
fix$2419.$build = function(v$1257,v$2283){switch (v$1257) { case 0: {return [v$2283,null];
 break; }default: {var n$$1259 = SmlPrims.div_i32(v$1257,2,CompilerInitial.exn$Div$47);
var v$1290 = fix$2419.$build(n$$1259,v$2283);
var v$1291 = v$1290[0];
var v$1292 = v$1290[1];
var v$1273;
if (v$1291 == null) {throw [syntax_objects$0RegVar$1$3.en$Impossible$412,"OrderFinMapbuild"];
} else {var v$1285 = v$1291;
var v$1286 = v$1285[0];
v$1273 = [v$1286[0],v$1286[1],v$1285[1]];
};
var v$1274 = v$1273[0];
var v$1275 = v$1273[1];
var v$1276 = v$1273[2];
var v$1270 = fix$2419.$build(SmlPrims.chk_ovf_i32((SmlPrims.chk_ovf_i32(v$1257 - n$$1259)) - 1),v$1276);
return [v$1270[0],[v$1274,v$1275,v$1292,v$1270[1]]];
} };
};
var build$1246 = fix$2419.$build;
var fix$2420 = {};
fix$2420.$mk_avl = function(v$1308){if (v$1308 == null) {return [null,0];
} else {var v$1337 = v$1308;
var v$1338 = v$1337[0];
var v$1339 = v$1337[1];
var v$1340 = v$1337[2];
var v$1341 = v$1337[3];
var v$1334 = fix$2420.$mk_avl(v$1340);
var v$1335 = v$1334[0];
var v$1336 = v$1334[1];
var v$1331 = fix$2420.$mk_avl(v$1341);
var v$1332 = v$1331[0];
var v$1333 = v$1331[1];
return [[v$1338,v$1339,v$1335,v$1332,(v$1336 == v$1333)?2:((v$1336 > v$1333)?1:0)],SmlPrims.chk_ovf_i32(1 + ((v$1336 > v$1333)?v$1336:v$1333))];
};
};
var mk_avl$1305 = fix$2420.$mk_avl;
var t$2429;
var t$2428 = mk_avl$1305;
var t$2427;
var t$2426;
var t$2425 = build$1246;
var t$2424;
var fix$2421 = {};
fix$2421.$acc = function(v$1925,v$1926){lab$acc: while (true) {if (v$1925 == null) {return v$1926;
} else {var v$1927 = v$1925;
var v$1928 = v$1927[1];
var t$2422 = v$1928;
var t$2423 = SmlPrims.chk_ovf_i32(v$1926 + 1);
var v$1925 = t$2422;
var v$1926 = t$2423;
continue lab$acc;
};
};
};
var acc$1924 = fix$2421.$acc;
t$2424 = (acc$1924(l$1228,0));
t$2426 = (t$2425(t$2424,l$1228));
t$2427 = t$2426[1];
t$2429 = (t$2428(t$2427));
return t$2429[0];
};
syntax_objects$0RegVar$1$3.mergeMap$1350 = function(f$1353,t1$1356,t2$1359){var fix$2430 = {};
fix$2430.$merge = function(v$1380,v$2284){if (v$1380 == null) {return v$2284;
} else {if (v$2284 == null) {return v$1380;
} else {var v$1391 = v$1380;
var v$1392 = v$1391[0];
var v$1393 = v$1392[0];
var v$1394 = v$1392[1];
var v$1395 = v$1391[1];
var v$1396 = v$2284;
var v$1397 = v$1396[0];
var v$1398 = v$1397[0];
var v$1399 = v$1397[1];
var v$1400 = v$1396[1];
return (v$1393[1] < v$1398[1])?[[v$1393,v$1394],fix$2430.$merge(v$1395,v$2284)]:((v$1398[1] < v$1393[1])?[[v$1398,v$1399],fix$2430.$merge(v$1380,v$1400)]:[[v$1393,f$1353([v$1394,v$1399])],fix$2430.$merge(v$1395,v$1400)]);
};
};
};
var merge$1360 = fix$2430.$merge;
var t$2441 = syntax_objects$0RegVar$1$3.fromSortedList$1225;
var t$2440;
var t$2439 = merge$1360;
var t$2438;
var fix$2435 = {};
fix$2435.$li = function(v$1933,v$1934){lab$li: while (true) {if (v$1933 == null) {return v$1934;
} else {var v$1937 = v$1933;
var v$1938 = v$1937[0];
var v$1939 = v$1937[1];
var v$1940 = v$1937[2];
var v$1941 = v$1937[3];
var t$2436 = v$1940;
var t$2437 = [[v$1938,v$1939],fix$2435.$li(v$1941,v$1934)];
var v$1933 = t$2436;
var v$1934 = t$2437;
continue lab$li;
};
};
};
var li$1932 = fix$2435.$li;
t$2438 = (li$1932(t1$1356,null));
var t$2434;
var fix$2431 = {};
fix$2431.$li = function(v$1945,v$1946){lab$li: while (true) {if (v$1945 == null) {return v$1946;
} else {var v$1949 = v$1945;
var v$1950 = v$1949[0];
var v$1951 = v$1949[1];
var v$1952 = v$1949[2];
var v$1953 = v$1949[3];
var t$2432 = v$1952;
var t$2433 = [[v$1950,v$1951],fix$2431.$li(v$1953,v$1946)];
var v$1945 = t$2432;
var v$1946 = t$2433;
continue lab$li;
};
};
};
var li$1944 = fix$2431.$li;
t$2434 = (li$1944(t2$1359,null));
t$2440 = (t$2439(t$2438,t$2434));
return t$2441(t$2440);
};
var fix$2442 = {};
fix$2442.$oneForWhich = function(f$1404,t$1407){lab$oneForWhich: while (true) {if (t$1407 == null) {return [1];
} else {var v$1427 = t$1407;
var v$1428 = v$1427[0];
var v$1429 = v$1427[1];
var v$1430 = v$1427[2];
var v$1431 = v$1427[3];
if (f$1404([v$1428,v$1429])) {return [0,[v$1428,v$1429]];
} else {var v$1424 = fix$2442.$oneForWhich(f$1404,v$1430);
switch (v$1424[0]) { case 0: {var v$1426 = v$1424[1];
return [0,v$1426];
 break; }default: {var t$2443 = f$1404;
var t$2444 = v$1431;
var f$1404 = t$2443;
var t$1407 = t$2444;
continue lab$oneForWhich;
} };
};
};
};
};
syntax_objects$0RegVar$1$3.oneForWhich$1401 = fix$2442.$oneForWhich;
syntax_objects$0RegVar$1$3.en$Restrict$1432 = new String("Restrict");
syntax_objects$0RegVar$1$3.restrict$1433 = function(v$1452,v$1453,v$1454){var fix$2445 = {};
fix$2445.$foldl = function(v$1959,v$1960){lab$foldl: while (true) {if (v$1960 == null) {return v$1959;
} else {var v$1961 = v$1960;
var v$1962 = v$1961[0];
var v$1963 = v$1961[1];
var t$2449;
var v$2233;
var fix$2446 = {};
fix$2446.$search = function(v$2235){lab$search: while (true) {if (v$2235 == null) {return [1];
} else {var v$2236 = v$2235;
var v$2237 = v$2236[0];
var v$2238 = v$2236[1];
var v$2239 = v$2236[2];
var v$2240 = v$2236[3];
if (v$1962[1] < v$2237[1]) {var t$2447 = v$2239;
var v$2235 = t$2447;
continue lab$search;
} else {if (v$2237[1] < v$1962[1]) {var t$2448 = v$2240;
var v$2235 = t$2448;
continue lab$search;
} else {return [0,v$2238];
};
};
};
};
};
var search$2234 = fix$2446.$search;
v$2233 = (search$2234(v$1453));
switch (v$2233[0]) { case 0: {var v$2241 = v$2233[1];
t$2449 = (syntax_objects$0RegVar$1$3.add$640(v$1962,v$2241,v$1959));
 break; }default: {throw [syntax_objects$0RegVar$1$3.en$Restrict$1432,v$1452(v$1962)];
} };
var t$2450 = t$2449;
var t$2451 = v$1963;
var v$1959 = t$2450;
var v$1960 = t$2451;
continue lab$foldl;
};
};
};
var foldl$1958 = fix$2445.$foldl;
return foldl$1958(syntax_objects$0RegVar$1$3.empty$364(0),v$1454);
};
syntax_objects$0RegVar$1$3.enrich$1455 = function(en$1458,v$1462){var v$1483 = v$1462[0];
var v$1484 = v$1462[1];
var fix$2452 = {};
fix$2452.$fold$ = function(v$1979,v$1980){lab$fold$: while (true) {if (v$1979 == null) {return v$1980;
} else {var v$1983 = v$1979;
var v$1984 = v$1983[0];
var v$1985 = v$1983[1];
var v$1986 = v$1983[2];
var v$1987 = v$1983[3];
var t$2457 = v$1987;
var t$2456;
if (fix$2452.$fold$(v$1986,v$1980)) {var v$2246;
var fix$2453 = {};
fix$2453.$search = function(v$2248){lab$search: while (true) {if (v$2248 == null) {return [1];
} else {var v$2249 = v$2248;
var v$2250 = v$2249[0];
var v$2251 = v$2249[1];
var v$2252 = v$2249[2];
var v$2253 = v$2249[3];
if (v$1984[1] < v$2250[1]) {var t$2454 = v$2252;
var v$2248 = t$2454;
continue lab$search;
} else {if (v$2250[1] < v$1984[1]) {var t$2455 = v$2253;
var v$2248 = t$2455;
continue lab$search;
} else {return [0,v$2251];
};
};
};
};
};
var search$2247 = fix$2453.$search;
v$2246 = (search$2247(v$1483));
switch (v$2246[0]) { case 0: {var v$2254 = v$2246[1];
t$2456 = (en$1458([v$2254,v$1985]));
 break; }default: {t$2456 = false;
} };
} else {t$2456 = false;
};
var t$2458 = t$2457;
var t$2459 = t$2456;
var v$1979 = t$2458;
var v$1980 = t$2459;
continue lab$fold$;
};
};
};
var fold$$1978 = fix$2452.$fold$;
return fold$$1978(v$1484,true);
};
syntax_objects$0RegVar$1$3.layoutMap$1485 = function(v$1518,v$1520,v$1519,v$1517){return function(layoutDom$1494){return function(layoutRan$1497){return function(m$1500){var t$2467;
var t$2466;
var t$2465 = basis$0List$1.map$697;
var t$2464 = function(v$1504){var v$1510 = v$1504[0];
var v$1511 = v$1504[1];
return [0,[[layoutDom$1494(v$1510),[layoutRan$1497(v$1511),null]],[0,v$1518],"",3,""]];
};
var t$2463;
var fix$2460 = {};
fix$2460.$li = function(v$2002,v$2003){lab$li: while (true) {if (v$2002 == null) {return v$2003;
} else {var v$2006 = v$2002;
var v$2007 = v$2006[0];
var v$2008 = v$2006[1];
var v$2009 = v$2006[2];
var v$2010 = v$2006[3];
var t$2461 = v$2009;
var t$2462 = [[v$2007,v$2008],fix$2460.$li(v$2010,v$2003)];
var v$2002 = t$2461;
var v$2003 = t$2462;
continue lab$li;
};
};
};
var li$2001 = fix$2460.$li;
t$2463 = (li$2001(m$1500,null));
t$2466 = (t$2465(t$2464,t$2463));
t$2467 = [t$2466,[0,v$1519],v$1520,3,v$1517];
return [0,t$2467];
};
};
};
};
syntax_objects$0RegVar$1$3.reportMap$1521 = function(f$1524,t$1527){var t$2475 = tools$0Report$1.flatten$87;
var t$2474;
var t$2473 = basis$0List$1.map$697;
var t$2472 = f$1524;
var t$2471;
var fix$2468 = {};
fix$2468.$li = function(v$2014,v$2015){lab$li: while (true) {if (v$2014 == null) {return v$2015;
} else {var v$2018 = v$2014;
var v$2019 = v$2018[0];
var v$2020 = v$2018[1];
var v$2021 = v$2018[2];
var v$2022 = v$2018[3];
var t$2469 = v$2021;
var t$2470 = [[v$2019,v$2020],fix$2468.$li(v$2022,v$2015)];
var v$2014 = t$2469;
var v$2015 = t$2470;
continue lab$li;
};
};
};
var li$2013 = fix$2468.$li;
t$2471 = (li$2013(t$1527,null));
t$2474 = (t$2473(t$2472,t$2471));
return t$2475(t$2474);
};
syntax_objects$0RegVar$1$3.reportMapSORTED$1528 = function(f$2024,t$2025){var t$2483 = tools$0Report$1.flatten$87;
var t$2482;
var t$2481 = basis$0List$1.map$697;
var t$2480 = f$2024;
var t$2479;
var fix$2476 = {};
fix$2476.$li = function(v$2028,v$2029){lab$li: while (true) {if (v$2028 == null) {return v$2029;
} else {var v$2032 = v$2028;
var v$2033 = v$2032[0];
var v$2034 = v$2032[1];
var v$2035 = v$2032[2];
var v$2036 = v$2032[3];
var t$2477 = v$2035;
var t$2478 = [[v$2033,v$2034],fix$2476.$li(v$2036,v$2029)];
var v$2028 = t$2477;
var v$2029 = t$2478;
continue lab$li;
};
};
};
var li$2027 = fix$2476.$li;
t$2479 = (li$2027(t$2025,null));
t$2482 = (t$2481(t$2480,t$2479));
return t$2483(t$2482);
};
syntax_objects$0RegVar$1$3.pu_bal$1529 = pickle$0pickle$1.enumGen$2158(function(v$2038){var v$2039 = v$2038[0];
var v$2040 = v$2038[1];
switch (v$2039) { case 0: {switch (v$2040) { case 0: {return true;
 break; }default: {return false;
} };
 break; }case 1: {switch (v$2040) { case 1: {return true;
 break; }default: {return false;
} };
 break; }case 2: {switch (v$2040) { case 2: {return true;
 break; }default: {return false;
} };
 break; } };
},["OrderFinMap.bal",[1,[2,[0,null]]]]);
syntax_objects$0RegVar$1$3.pu$1530 = function(pu_dom$1533,pu_r$1536){var fun_E$1545;
var v$2287 = null;
fun_E$1545 = (function(v$2288){return pickle$0pickle$1.con0$1988(v$2287,v$2288);
});
return pickle$0pickle$1.dataGen$1488(["OrderFinMap.map",function(v$2054){return (v$2054 == null)?0:1;
},[fun_E$1545,[function(pu$2055){return pickle$0pickle$1.con1$2014(function(v$2056){var v$2057 = v$2056[0];
return [v$2057[0],v$2057[1],v$2057[2],v$2057[3],v$2056[1]];
},function(v$2058){if (v$2058 == null) {return tools$0Crash$1.impossible$59("OrderFinMap.pu.fun_N");
} else {var v$2059 = v$2058;
return [[v$2059[0],v$2059[1],v$2059[2],v$2059[3]],v$2059[4]];
};
},pickle$0pickle$1.pairGen0$983((pickle$0pickle$1.convert0$2299(function(v$2067){var v$2068 = v$2067[0];
var v$2069 = v$2068[0];
var v$2070 = v$2068[1];
var v$2071 = v$2067[1];
return [v$2069,v$2070,v$2071[0],v$2071[1]];
},function(v$2072){return [[v$2072[0],v$2072[1]],[v$2072[2],v$2072[3]]];
}))(pickle$0pickle$1.pairGen0$983(pickle$0pickle$1.pairGen0$983(pu_dom$1533,pu_r$1536),pickle$0pickle$1.pairGen0$983(pu$2055,pu$2055))),syntax_objects$0RegVar$1$3.pu_bal$1529));
},null]]]);
};
return 0;
})();
