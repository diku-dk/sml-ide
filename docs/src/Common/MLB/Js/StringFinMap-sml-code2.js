if ((typeof(tools$0StringFinMap$1$2)) == "undefined") {tools$0StringFinMap$1$2 = {};
};
(function(){tools$0StringFinMap$1$2.eq_bal$1366 = function(v$1368,v$1369){switch (v$1368) { case 0: {switch (v$1369) { case 0: {return true;
 break; }default: {return false;
} };
 break; }case 1: {switch (v$1369) { case 1: {return true;
 break; }default: {return false;
} };
 break; }case 2: {switch (v$1369) { case 2: {return true;
 break; }default: {return false;
} };
 break; } };
};
var fix$2051 = {};
fix$2051.$eq_tree = function(v$1374,v$1375,v$1371){lab$eq_tree: while (true) {var v$1372 = v$1371[0];
var v$1373 = v$1371[1];
if (v$1372 == null) {return (v$1373 == null)?true:false;
} else {if (v$1373 == null) {return false;
} else {var v$1376 = v$1372;
var v$1377 = v$1373;
if (v$1374([v$1376[0],v$1377[0]])) {if (v$1375([v$1376[1],v$1377[1]])) {if (fix$2051.$eq_tree(v$1374,v$1375,[v$1376[2],v$1377[2]])) {var t$2052 = v$1374;
var t$2053 = v$1375;
var t$2054 = [v$1376[3],v$1377[3]];
var v$1374 = t$2052;
var v$1375 = t$2053;
var v$1371 = t$2054;
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
tools$0StringFinMap$1$2.eq_tree$1370 = fix$2051.$eq_tree;
tools$0StringFinMap$1$2.die$97 = function(s$100){return tools$0Crash$1.impossible$59("OrderFinMap." + s$100);
};
tools$0StringFinMap$1$2.s$j$101 = function(v$2038,v$2039){return v$2038 < v$2039;
};
tools$0StringFinMap$1$2.lt$108 = function(v$2040,v$2041){return v$2040 < v$2041;
};
tools$0StringFinMap$1$2.eq$109 = function(v$118,v$119){return ((v$118 < v$119)?true:(v$119 < v$118))?false:true;
};
tools$0StringFinMap$1$2.empty$125 = function(v$2050){return null;
};
tools$0StringFinMap$1$2.singleton$126 = function(v$2042,v$2043){return [v$2042,v$2043,null,null,2];
};
tools$0StringFinMap$1$2.isEmpty$133 = function(v$136){return (v$136 == null)?true:false;
};
tools$0StringFinMap$1$2.lookup$141 = function(t$144,key$147){var fix$2055 = {};
fix$2055.$search = function(v$151){lab$search: while (true) {if (v$151 == null) {return [1];
} else {var v$168 = v$151;
var v$169 = v$168[0];
var v$170 = v$168[1];
var v$171 = v$168[2];
var v$172 = v$168[3];
if (key$147 < v$169) {var t$2056 = v$171;
var v$151 = t$2056;
continue lab$search;
} else {if (v$169 < key$147) {var t$2057 = v$172;
var v$151 = t$2057;
continue lab$search;
} else {return [0,v$170];
};
};
};
};
};
var search$148 = fix$2055.$search;
return search$148(t$144);
};
tools$0StringFinMap$1$2.en$Impossible$173 = new String("Impossible");
tools$0StringFinMap$1$2.impossible$174 = function(s$177){throw [tools$0StringFinMap$1$2.en$Impossible$173,"OrderFinMap" + s$177];
};
var en$ALREADYTHERE$178 = new String("ALREADYTHERE");
var exn$ALREADYTHERE$178 = [en$ALREADYTHERE$178];
tools$0StringFinMap$1$2.add$401 = function(v$410,v$411,v$412){try {var fix$2059 = {};
fix$2059.$ins = function(v$1487){if (v$1487 == null) {return [true,[v$410,v$411,null,null,2]];
} else {var v$1488 = v$1487;
var v$1489 = v$1488[0];
var v$1490 = v$1488[1];
var v$1491 = v$1488[2];
var v$1492 = v$1488[3];
var v$1493 = v$1488[4];
if (v$410 < v$1489) {var v$1495 = fix$2059.$ins(v$1491);
var v$1496 = v$1495[0];
var v$1497 = v$1495[1];
switch (v$1493) { case 2: {return v$1496?[true,[v$1489,v$1490,v$1497,v$1492,1]]:[false,[v$1489,v$1490,v$1497,v$1492,2]];
 break; }case 0: {return v$1496?[false,[v$1489,v$1490,v$1497,v$1492,2]]:[false,[v$1489,v$1490,v$1497,v$1492,0]];
 break; }default: {if (v$1496) {var v$1499;
if (v$1497 == null) {throw [tools$0StringFinMap$1$2.en$Impossible$173,"OrderFinMapAVLfinmap 1"];
} else {v$1499 = v$1497;
};
var v$1502 = v$1499[0];
var v$1503 = v$1499[1];
var v$1504 = v$1499[2];
var v$1505 = v$1499[3];
var v$1506 = v$1499[4];
var t$2060;
var v$1857 = 1;
switch (v$1506) { case 0: {switch (v$1857) { case 0: {t$2060 = true;
 break; }default: {t$2060 = false;
} };
 break; }case 1: {switch (v$1857) { case 1: {t$2060 = true;
 break; }default: {t$2060 = false;
} };
 break; }case 2: {switch (v$1857) { case 2: {t$2060 = true;
 break; }default: {t$2060 = false;
} };
 break; } };
if (t$2060) {return [false,[v$1502,v$1503,v$1504,[v$1489,v$1490,v$1505,v$1492,2],2]];
} else {var v$1514;
if (v$1505 == null) {throw [tools$0StringFinMap$1$2.en$Impossible$173,"OrderFinMapAVLfinmap 2"];
} else {v$1514 = v$1505;
};
var v$1517 = v$1514[0];
var v$1518 = v$1514[1];
var v$1519 = v$1514[2];
var v$1520 = v$1514[3];
var v$1521 = v$1514[4];
var t$2081 = false;
var t$2080;
var t$2079;
var t$2078 = v$1517;
var t$2077 = v$1518;
var t$2076;
var t$2075;
var t$2074 = v$1502;
var t$2073 = v$1503;
var t$2072 = v$1504;
var t$2071 = v$1519;
var t$2070;
var t$2069;
var v$1863 = 0;
switch (v$1521) { case 0: {switch (v$1863) { case 0: {t$2069 = true;
 break; }default: {t$2069 = false;
} };
 break; }case 1: {switch (v$1863) { case 1: {t$2069 = true;
 break; }default: {t$2069 = false;
} };
 break; }case 2: {switch (v$1863) { case 2: {t$2069 = true;
 break; }default: {t$2069 = false;
} };
 break; } };
t$2070 = (t$2069?1:2);
t$2075 = [t$2074,t$2073,t$2072,t$2071,t$2070];
t$2076 = t$2075;
var t$2068;
var t$2067;
var t$2066 = v$1489;
var t$2065 = v$1490;
var t$2064 = v$1520;
var t$2063 = v$1492;
var t$2062;
var t$2061;
var v$1867 = 1;
switch (v$1521) { case 0: {switch (v$1867) { case 0: {t$2061 = true;
 break; }default: {t$2061 = false;
} };
 break; }case 1: {switch (v$1867) { case 1: {t$2061 = true;
 break; }default: {t$2061 = false;
} };
 break; }case 2: {switch (v$1867) { case 2: {t$2061 = true;
 break; }default: {t$2061 = false;
} };
 break; } };
t$2062 = (t$2061?0:2);
t$2067 = [t$2066,t$2065,t$2064,t$2063,t$2062];
t$2068 = t$2067;
t$2079 = [t$2078,t$2077,t$2076,t$2068,2];
t$2080 = t$2079;
return [t$2081,t$2080];
};
} else {return [false,[v$1489,v$1490,v$1497,v$1492,1]];
};
} };
} else {if (v$1489 < v$410) {var v$1537 = fix$2059.$ins(v$1492);
var v$1538 = v$1537[0];
var v$1539 = v$1537[1];
switch (v$1493) { case 2: {return v$1538?[true,[v$1489,v$1490,v$1491,v$1539,0]]:[false,[v$1489,v$1490,v$1491,v$1539,2]];
 break; }case 1: {return v$1538?[false,[v$1489,v$1490,v$1491,v$1539,2]]:[false,[v$1489,v$1490,v$1491,v$1539,1]];
 break; }default: {if (v$1538) {var v$1541;
if (v$1539 == null) {throw [tools$0StringFinMap$1$2.en$Impossible$173,"OrderFinMapAVLfinmap 3"];
} else {v$1541 = v$1539;
};
var v$1544 = v$1541[0];
var v$1545 = v$1541[1];
var v$1546 = v$1541[2];
var v$1547 = v$1541[3];
var v$1548 = v$1541[4];
var t$2082;
var v$1877 = 0;
switch (v$1548) { case 0: {switch (v$1877) { case 0: {t$2082 = true;
 break; }default: {t$2082 = false;
} };
 break; }case 1: {switch (v$1877) { case 1: {t$2082 = true;
 break; }default: {t$2082 = false;
} };
 break; }case 2: {switch (v$1877) { case 2: {t$2082 = true;
 break; }default: {t$2082 = false;
} };
 break; } };
if (t$2082) {return [false,[v$1544,v$1545,[v$1489,v$1490,v$1491,v$1546,2],v$1547,2]];
} else {var v$1556;
if (v$1546 == null) {throw [tools$0StringFinMap$1$2.en$Impossible$173,"OrderFinMapAVLfinmap 4"];
} else {v$1556 = v$1546;
};
var v$1559 = v$1556[0];
var v$1560 = v$1556[1];
var v$1561 = v$1556[2];
var v$1562 = v$1556[3];
var v$1563 = v$1556[4];
var t$2103 = false;
var t$2102;
var t$2101;
var t$2100 = v$1559;
var t$2099 = v$1560;
var t$2098;
var t$2097;
var t$2096 = v$1489;
var t$2095 = v$1490;
var t$2094 = v$1491;
var t$2093 = v$1561;
var t$2092;
var t$2091;
var v$1883 = 0;
switch (v$1563) { case 0: {switch (v$1883) { case 0: {t$2091 = true;
 break; }default: {t$2091 = false;
} };
 break; }case 1: {switch (v$1883) { case 1: {t$2091 = true;
 break; }default: {t$2091 = false;
} };
 break; }case 2: {switch (v$1883) { case 2: {t$2091 = true;
 break; }default: {t$2091 = false;
} };
 break; } };
t$2092 = (t$2091?1:2);
t$2097 = [t$2096,t$2095,t$2094,t$2093,t$2092];
t$2098 = t$2097;
var t$2090;
var t$2089;
var t$2088 = v$1544;
var t$2087 = v$1545;
var t$2086 = v$1562;
var t$2085 = v$1547;
var t$2084;
var t$2083;
var v$1887 = 1;
switch (v$1563) { case 0: {switch (v$1887) { case 0: {t$2083 = true;
 break; }default: {t$2083 = false;
} };
 break; }case 1: {switch (v$1887) { case 1: {t$2083 = true;
 break; }default: {t$2083 = false;
} };
 break; }case 2: {switch (v$1887) { case 2: {t$2083 = true;
 break; }default: {t$2083 = false;
} };
 break; } };
t$2084 = (t$2083?0:2);
t$2089 = [t$2088,t$2087,t$2086,t$2085,t$2084];
t$2090 = t$2089;
t$2101 = [t$2100,t$2099,t$2098,t$2090,2];
t$2102 = t$2101;
return [t$2103,t$2102];
};
} else {return [false,[v$1489,v$1490,v$1491,v$1539,0]];
};
} };
} else {throw exn$ALREADYTHERE$178;
};
};
};
};
var ins$1486 = fix$2059.$ins;
return (ins$1486(v$412))[1];
} catch(v$2058) {return (function(ALREADYTHERE$409){var t$2104 = ALREADYTHERE$409;
if (t$2104[0] == en$ALREADYTHERE$178) {var fix$2105 = {};
fix$2105.$repl = function(v$1602){if (v$1602 == null) {throw [tools$0StringFinMap$1$2.en$Impossible$173,"OrderFinMapAVLupdate.repl"];
} else {var v$1605 = v$1602;
var v$1606 = v$1605[0];
var v$1607 = v$1605[1];
var v$1608 = v$1605[2];
var v$1609 = v$1605[3];
var v$1610 = v$1605[4];
return (v$410 < v$1606)?[v$1606,v$1607,fix$2105.$repl(v$1608),v$1609,v$1610]:((v$1606 < v$410)?[v$1606,v$1607,v$1608,fix$2105.$repl(v$1609),v$1610]:[v$1606,v$411,v$1608,v$1609,v$1610]);
};
};
var repl$1601 = fix$2105.$repl;
return repl$1601(v$412);
} else {throw ALREADYTHERE$409;
};
})(v$2058);
};
};
var fix$2106 = {};
fix$2106.$plus = function(v$431,v$432){lab$plus: while (true) {if (v$432 == null) {return v$431;
} else {var v$426 = v$432;
var v$427 = v$426[0];
var v$428 = v$426[1];
var v$429 = v$426[2];
var v$430 = v$426[3];
var t$2107 = fix$2106.$plus(tools$0StringFinMap$1$2.add$401(v$427,v$428,v$431),v$429);
var t$2108 = v$430;
var v$431 = t$2107;
var v$432 = t$2108;
continue lab$plus;
};
};
};
tools$0StringFinMap$1$2.plus$413 = fix$2106.$plus;
var en$NOTFOUND$433 = new String("NOTFOUND");
var exn$NOTFOUND$433 = [en$NOTFOUND$433];
var delete$434 = function(v$719,v$720){var balance1$439 = function(v$442){if (v$442 == null) {throw [tools$0StringFinMap$1$2.en$Impossible$173,"OrderFinMap(balance1 on an empty map)"];
} else {var v$512 = v$442;
var v$513 = v$512[0];
var v$514 = v$512[1];
var v$515 = v$512[2];
var v$516 = v$512[3];
switch (v$512[4]) { case 1: {return [[v$513,v$514,v$515,v$516,2],true];
 break; }case 2: {return [[v$513,v$514,v$515,v$516,0],false];
 break; }default: {var v$499;
if (v$516 == null) {throw [tools$0StringFinMap$1$2.en$Impossible$173,"OrderFinMapAVLfinmap 5"];
} else {v$499 = v$516;
};
var v$500 = v$499[0];
var v$501 = v$499[1];
var v$502 = v$499[2];
var v$503 = v$499[3];
switch (v$499[4]) { case 1: {var v$486;
if (v$502 == null) {throw [tools$0StringFinMap$1$2.en$Impossible$173,"OrderFinMapAVLfinmap 6"];
} else {v$486 = v$502;
};
var v$487 = v$486[0];
var v$488 = v$486[1];
var v$489 = v$486[2];
var v$490 = v$486[3];
var v$491 = v$486[4];
var t$2128;
var t$2127;
var t$2126 = v$487;
var t$2125 = v$488;
var t$2124;
var t$2123;
var t$2122 = v$513;
var t$2121 = v$514;
var t$2120 = v$515;
var t$2119 = v$489;
var t$2118;
var t$2117;
var v$1905 = 0;
switch (v$491) { case 0: {switch (v$1905) { case 0: {t$2117 = true;
 break; }default: {t$2117 = false;
} };
 break; }case 1: {switch (v$1905) { case 1: {t$2117 = true;
 break; }default: {t$2117 = false;
} };
 break; }case 2: {switch (v$1905) { case 2: {t$2117 = true;
 break; }default: {t$2117 = false;
} };
 break; } };
t$2118 = (t$2117?1:2);
t$2123 = [t$2122,t$2121,t$2120,t$2119,t$2118];
t$2124 = t$2123;
var t$2116;
var t$2115;
var t$2114 = v$500;
var t$2113 = v$501;
var t$2112 = v$490;
var t$2111 = v$503;
var t$2110;
var t$2109;
var v$1907 = 1;
switch (v$491) { case 0: {switch (v$1907) { case 0: {t$2109 = true;
 break; }default: {t$2109 = false;
} };
 break; }case 1: {switch (v$1907) { case 1: {t$2109 = true;
 break; }default: {t$2109 = false;
} };
 break; }case 2: {switch (v$1907) { case 2: {t$2109 = true;
 break; }default: {t$2109 = false;
} };
 break; } };
t$2110 = (t$2109?0:2);
t$2115 = [t$2114,t$2113,t$2112,t$2111,t$2110];
t$2116 = t$2115;
t$2127 = [t$2126,t$2125,t$2124,t$2116,2];
t$2128 = t$2127;
return [t$2128,true];
 break; }case 2: {return [[v$500,v$501,[v$513,v$514,v$515,v$502,0],v$503,1],false];
 break; }default: {return [[v$500,v$501,[v$513,v$514,v$515,v$502,2],v$503,2],true];
} };
} };
};
};
var balance2$518 = function(v$521){if (v$521 == null) {throw [tools$0StringFinMap$1$2.en$Impossible$173,"OrderFinMap(balance2 on an empty map)"];
} else {var v$591 = v$521;
var v$592 = v$591[0];
var v$593 = v$591[1];
var v$594 = v$591[2];
var v$595 = v$591[3];
switch (v$591[4]) { case 0: {return [[v$592,v$593,v$594,v$595,2],true];
 break; }case 2: {return [[v$592,v$593,v$594,v$595,1],false];
 break; }default: {var v$578;
if (v$594 == null) {throw [tools$0StringFinMap$1$2.en$Impossible$173,"OrderFinMapAVLfinmap 7"];
} else {v$578 = v$594;
};
var v$579 = v$578[0];
var v$580 = v$578[1];
var v$581 = v$578[2];
var v$582 = v$578[3];
switch (v$578[4]) { case 0: {var v$565;
if (v$582 == null) {throw [tools$0StringFinMap$1$2.en$Impossible$173,"OrderFinMapAVLfinmap 8"];
} else {v$565 = v$582;
};
var v$566 = v$565[0];
var v$567 = v$565[1];
var v$568 = v$565[2];
var v$569 = v$565[3];
var v$570 = v$565[4];
var t$2148;
var t$2147;
var t$2146 = v$566;
var t$2145 = v$567;
var t$2144;
var t$2143;
var t$2142 = v$579;
var t$2141 = v$580;
var t$2140 = v$581;
var t$2139 = v$568;
var t$2138;
var t$2137;
var v$1917 = 0;
switch (v$570) { case 0: {switch (v$1917) { case 0: {t$2137 = true;
 break; }default: {t$2137 = false;
} };
 break; }case 1: {switch (v$1917) { case 1: {t$2137 = true;
 break; }default: {t$2137 = false;
} };
 break; }case 2: {switch (v$1917) { case 2: {t$2137 = true;
 break; }default: {t$2137 = false;
} };
 break; } };
t$2138 = (t$2137?1:2);
t$2143 = [t$2142,t$2141,t$2140,t$2139,t$2138];
t$2144 = t$2143;
var t$2136;
var t$2135;
var t$2134 = v$592;
var t$2133 = v$593;
var t$2132 = v$569;
var t$2131 = v$595;
var t$2130;
var t$2129;
var v$1915 = 1;
switch (v$570) { case 0: {switch (v$1915) { case 0: {t$2129 = true;
 break; }default: {t$2129 = false;
} };
 break; }case 1: {switch (v$1915) { case 1: {t$2129 = true;
 break; }default: {t$2129 = false;
} };
 break; }case 2: {switch (v$1915) { case 2: {t$2129 = true;
 break; }default: {t$2129 = false;
} };
 break; } };
t$2130 = (t$2129?0:2);
t$2135 = [t$2134,t$2133,t$2132,t$2131,t$2130];
t$2136 = t$2135;
t$2147 = [t$2146,t$2145,t$2144,t$2136,2];
t$2148 = t$2147;
return [t$2148,true];
 break; }case 2: {return [[v$579,v$580,v$581,[v$592,v$593,v$582,v$595,1],0],false];
 break; }default: {return [[v$579,v$580,v$581,[v$592,v$593,v$582,v$595,2],2],true];
} };
} };
};
};
var fix$2149 = {};
fix$2149.$remove_rightmost = function(v$600){if (v$600 == null) {throw [tools$0StringFinMap$1$2.en$Impossible$173,"OrderFinMap(remove_rightmost on empty map)"];
} else {var v$616 = v$600;
var v$617 = v$616[3];
if (v$617 == null) {return [v$616[2],v$616[0],v$616[1],true];
} else {var v$642 = v$616[0];
var v$643 = v$616[1];
var v$644 = v$616[2];
var v$645 = v$616[4];
var v$637 = fix$2149.$remove_rightmost(v$617);
var v$638 = v$637[0];
var v$639 = v$637[1];
var v$640 = v$637[2];
if (v$637[3]) {var v$634 = balance2$518([v$642,v$643,v$644,v$638,v$645]);
return [v$634[0],v$639,v$640,v$634[1]];
} else {return [[v$642,v$643,v$644,v$638,v$645],v$639,v$640,false];
};
};
};
};
var remove_rightmost$597 = fix$2149.$remove_rightmost;
var fix$2150 = {};
fix$2150.$del = function(v$649){if (v$649 == null) {throw exn$NOTFOUND$433;
} else {var v$709 = v$649;
var v$710 = v$709[0];
var v$711 = v$709[1];
var v$712 = v$709[2];
var v$713 = v$709[3];
var v$714 = v$709[4];
if (v$719 < v$710) {var v$670 = fix$2150.$del(v$712);
var v$671 = v$670[0];
if (v$670[1]) {return balance1$439([v$710,v$711,v$671,v$713,v$714]);
} else {return [[v$710,v$711,v$671,v$713,v$714],false];
};
} else {if (v$710 < v$719) {var v$684 = fix$2150.$del(v$713);
var v$685 = v$684[0];
if (v$684[1]) {return balance2$518([v$710,v$711,v$712,v$685,v$714]);
} else {return [[v$710,v$711,v$712,v$685,v$714],false];
};
} else {if (v$713 == null) {return [v$712,true];
} else {if (v$712 == null) {return [v$713,true];
} else {var v$704 = remove_rightmost$597(v$712);
var v$705 = v$704[0];
var v$706 = v$704[1];
var v$707 = v$704[2];
if (v$704[3]) {return balance1$439([v$706,v$707,v$705,v$713,v$714]);
} else {return [[v$706,v$707,v$705,v$713,v$714],false];
};
};
};
};
};
};
};
var del$646 = fix$2150.$del;
return (del$646(v$720))[0];
};
tools$0StringFinMap$1$2.remove$721 = function(v$729,v$730){try {return [0,delete$434(v$729,v$730)];
} catch(v$2151) {return (function(NOTFOUND$728){var t$2152 = NOTFOUND$728;
if (t$2152[0] == en$NOTFOUND$433) {return [1];
} else {throw NOTFOUND$728;
};
})(v$2151);
};
};
tools$0StringFinMap$1$2.delete$731 = function(v$739,v$740){try {return delete$434(v$739,v$740);
} catch(v$2153) {return (function(NOTFOUND$738){var t$2154 = NOTFOUND$738;
if (t$2154[0] == en$NOTFOUND$433) {return v$740;
} else {throw NOTFOUND$738;
};
})(v$2153);
};
};
tools$0StringFinMap$1$2.dom$741 = function(m$744){var fix$2155 = {};
fix$2155.$dom$ = function(v$748,v$751){lab$dom$: while (true) {if (v$748 == null) {return v$751;
} else {var v$763 = v$748;
var v$764 = v$763[0];
var v$765 = v$763[2];
var v$766 = v$763[3];
var t$2156 = v$765;
var t$2157 = [v$764,fix$2155.$dom$(v$766,v$751)];
var v$748 = t$2156;
var v$751 = t$2157;
continue lab$dom$;
};
};
};
var dom$$745 = fix$2155.$dom$;
return dom$$745(m$744,null);
};
tools$0StringFinMap$1$2.range$768 = function(m$771){var fix$2158 = {};
fix$2158.$ran = function(v$775,v$778){lab$ran: while (true) {if (v$775 == null) {return v$778;
} else {var v$790 = v$775;
var v$791 = v$790[1];
var v$792 = v$790[2];
var v$793 = v$790[3];
var t$2159 = v$792;
var t$2160 = [v$791,fix$2158.$ran(v$793,v$778)];
var v$775 = t$2159;
var v$778 = t$2160;
continue lab$ran;
};
};
};
var ran$772 = fix$2158.$ran;
return ran$772(m$771,null);
};
tools$0StringFinMap$1$2.list$795 = function(m$798){var fix$2161 = {};
fix$2161.$li = function(v$802,v$805){lab$li: while (true) {if (v$802 == null) {return v$805;
} else {var v$818 = v$802;
var v$819 = v$818[0];
var v$820 = v$818[1];
var v$821 = v$818[2];
var v$822 = v$818[3];
var t$2162 = v$821;
var t$2163 = [[v$819,v$820],fix$2161.$li(v$822,v$805)];
var v$802 = t$2162;
var v$805 = t$2163;
continue lab$li;
};
};
};
var li$799 = fix$2161.$li;
return li$799(m$798,null);
};
var fix$2164 = {};
fix$2164.$composemap = function(f$827,t$830){if (t$830 == null) {return null;
} else {var v$841 = t$830;
var v$842 = v$841[0];
var v$843 = v$841[1];
var v$844 = v$841[2];
var v$845 = v$841[3];
var v$846 = v$841[4];
var l$$840 = fix$2164.$composemap(f$827,v$844);
return [v$842,f$827(v$843),l$$840,fix$2164.$composemap(f$827,v$845),v$846];
};
};
tools$0StringFinMap$1$2.composemap$824 = fix$2164.$composemap;
var fix$2165 = {};
fix$2165.$ComposeMap = function(f$850,t$853){if (t$853 == null) {return null;
} else {var v$864 = t$853;
var v$865 = v$864[0];
var v$866 = v$864[1];
var v$867 = v$864[2];
var v$868 = v$864[3];
var v$869 = v$864[4];
var l$$863 = fix$2165.$ComposeMap(f$850,v$867);
return [v$865,f$850([v$865,v$866]),l$$863,fix$2165.$ComposeMap(f$850,v$868),v$869];
};
};
tools$0StringFinMap$1$2.ComposeMap$847 = fix$2165.$ComposeMap;
tools$0StringFinMap$1$2.fold$870 = function(f$873,e$876,t$879){var fix$2166 = {};
fix$2166.$fold$ = function(v$883,v$886){lab$fold$: while (true) {if (v$883 == null) {return v$886;
} else {var v$898 = v$883;
var v$899 = v$898[1];
var v$900 = v$898[2];
var v$901 = v$898[3];
var t$2167 = v$901;
var t$2168 = f$873([v$899,fix$2166.$fold$(v$900,v$886)]);
var v$883 = t$2167;
var v$886 = t$2168;
continue lab$fold$;
};
};
};
var fold$$880 = fix$2166.$fold$;
return fold$$880(t$879,e$876);
};
tools$0StringFinMap$1$2.Fold$903 = function(f$906,e$909,t$912){var fix$2169 = {};
fix$2169.$fold$ = function(v$916,v$919){lab$fold$: while (true) {if (v$916 == null) {return v$919;
} else {var v$932 = v$916;
var v$933 = v$932[0];
var v$934 = v$932[1];
var v$935 = v$932[2];
var v$936 = v$932[3];
var t$2170 = v$936;
var t$2171 = f$906([[v$933,v$934],fix$2169.$fold$(v$935,v$919)]);
var v$916 = t$2170;
var v$919 = t$2171;
continue lab$fold$;
};
};
};
var fold$$913 = fix$2169.$fold$;
return fold$$913(t$912,e$909);
};
tools$0StringFinMap$1$2.filter$938 = function(f$941,t$944){var fix$2172 = {};
fix$2172.$fold$ = function(v$1669,v$1670){lab$fold$: while (true) {if (v$1669 == null) {return v$1670;
} else {var v$1673 = v$1669;
var v$1674 = v$1673[0];
var v$1675 = v$1673[1];
var v$1676 = v$1673[2];
var v$1677 = v$1673[3];
var t$2174 = v$1677;
var t$2173;
var v$2029 = fix$2172.$fold$(v$1676,v$1670);
t$2173 = ((f$941([v$1674,v$1675]))?(tools$0StringFinMap$1$2.add$401(v$1674,v$1675,v$2029)):v$2029);
var t$2175 = t$2174;
var t$2176 = t$2173;
var v$1669 = t$2175;
var v$1670 = t$2176;
continue lab$fold$;
};
};
};
var fold$$1668 = fix$2172.$fold$;
return fold$$1668(t$944,tools$0StringFinMap$1$2.empty$125(0));
};
var fix$2177 = {};
fix$2177.$addList = function(v$961,v$964){lab$addList: while (true) {if (v$961 == null) {return v$964;
} else {var v$976 = v$961;
var v$977 = v$976[0];
var v$978 = v$977[0];
var v$979 = v$977[1];
var v$980 = v$976[1];
var t$2178 = v$980;
var t$2179 = tools$0StringFinMap$1$2.add$401(v$978,v$979,v$964);
var v$961 = t$2178;
var v$964 = t$2179;
continue lab$addList;
};
};
};
tools$0StringFinMap$1$2.addList$958 = fix$2177.$addList;
tools$0StringFinMap$1$2.fromList$982 = function(l$985){return tools$0StringFinMap$1$2.addList$958(l$985,tools$0StringFinMap$1$2.empty$125(0));
};
tools$0StringFinMap$1$2.fromSortedList$986 = function(l$989){var fix$2180 = {};
fix$2180.$build = function(v$1018,v$2044){switch (v$1018) { case 0: {return [v$2044,null];
 break; }default: {var n$$1020 = SmlPrims.div_i32(v$1018,2,CompilerInitial.exn$Div$47);
var v$1051 = fix$2180.$build(n$$1020,v$2044);
var v$1052 = v$1051[0];
var v$1053 = v$1051[1];
var v$1034;
if (v$1052 == null) {throw [tools$0StringFinMap$1$2.en$Impossible$173,"OrderFinMapbuild"];
} else {var v$1046 = v$1052;
var v$1047 = v$1046[0];
v$1034 = [v$1047[0],v$1047[1],v$1046[1]];
};
var v$1035 = v$1034[0];
var v$1036 = v$1034[1];
var v$1037 = v$1034[2];
var v$1031 = fix$2180.$build(SmlPrims.chk_ovf_i32((SmlPrims.chk_ovf_i32(v$1018 - n$$1020)) - 1),v$1037);
return [v$1031[0],[v$1035,v$1036,v$1053,v$1031[1]]];
} };
};
var build$1007 = fix$2180.$build;
var fix$2181 = {};
fix$2181.$mk_avl = function(v$1069){if (v$1069 == null) {return [null,0];
} else {var v$1098 = v$1069;
var v$1099 = v$1098[0];
var v$1100 = v$1098[1];
var v$1101 = v$1098[2];
var v$1102 = v$1098[3];
var v$1095 = fix$2181.$mk_avl(v$1101);
var v$1096 = v$1095[0];
var v$1097 = v$1095[1];
var v$1092 = fix$2181.$mk_avl(v$1102);
var v$1093 = v$1092[0];
var v$1094 = v$1092[1];
return [[v$1099,v$1100,v$1096,v$1093,(v$1097 == v$1094)?2:((v$1097 > v$1094)?1:0)],SmlPrims.chk_ovf_i32(1 + ((v$1097 > v$1094)?v$1097:v$1094))];
};
};
var mk_avl$1066 = fix$2181.$mk_avl;
var t$2190;
var t$2189 = mk_avl$1066;
var t$2188;
var t$2187;
var t$2186 = build$1007;
var t$2185;
var fix$2182 = {};
fix$2182.$acc = function(v$1686,v$1687){lab$acc: while (true) {if (v$1686 == null) {return v$1687;
} else {var v$1688 = v$1686;
var v$1689 = v$1688[1];
var t$2183 = v$1689;
var t$2184 = SmlPrims.chk_ovf_i32(v$1687 + 1);
var v$1686 = t$2183;
var v$1687 = t$2184;
continue lab$acc;
};
};
};
var acc$1685 = fix$2182.$acc;
t$2185 = (acc$1685(l$989,0));
t$2187 = (t$2186(t$2185,l$989));
t$2188 = t$2187[1];
t$2190 = (t$2189(t$2188));
return t$2190[0];
};
tools$0StringFinMap$1$2.mergeMap$1111 = function(f$1114,t1$1117,t2$1120){var fix$2191 = {};
fix$2191.$merge = function(v$1141,v$2045){if (v$1141 == null) {return v$2045;
} else {if (v$2045 == null) {return v$1141;
} else {var v$1152 = v$1141;
var v$1153 = v$1152[0];
var v$1154 = v$1153[0];
var v$1155 = v$1153[1];
var v$1156 = v$1152[1];
var v$1157 = v$2045;
var v$1158 = v$1157[0];
var v$1159 = v$1158[0];
var v$1160 = v$1158[1];
var v$1161 = v$1157[1];
return (v$1154 < v$1159)?[[v$1154,v$1155],fix$2191.$merge(v$1156,v$2045)]:((v$1159 < v$1154)?[[v$1159,v$1160],fix$2191.$merge(v$1141,v$1161)]:[[v$1154,f$1114([v$1155,v$1160])],fix$2191.$merge(v$1156,v$1161)]);
};
};
};
var merge$1121 = fix$2191.$merge;
var t$2202 = tools$0StringFinMap$1$2.fromSortedList$986;
var t$2201;
var t$2200 = merge$1121;
var t$2199;
var fix$2196 = {};
fix$2196.$li = function(v$1694,v$1695){lab$li: while (true) {if (v$1694 == null) {return v$1695;
} else {var v$1698 = v$1694;
var v$1699 = v$1698[0];
var v$1700 = v$1698[1];
var v$1701 = v$1698[2];
var v$1702 = v$1698[3];
var t$2197 = v$1701;
var t$2198 = [[v$1699,v$1700],fix$2196.$li(v$1702,v$1695)];
var v$1694 = t$2197;
var v$1695 = t$2198;
continue lab$li;
};
};
};
var li$1693 = fix$2196.$li;
t$2199 = (li$1693(t1$1117,null));
var t$2195;
var fix$2192 = {};
fix$2192.$li = function(v$1706,v$1707){lab$li: while (true) {if (v$1706 == null) {return v$1707;
} else {var v$1710 = v$1706;
var v$1711 = v$1710[0];
var v$1712 = v$1710[1];
var v$1713 = v$1710[2];
var v$1714 = v$1710[3];
var t$2193 = v$1713;
var t$2194 = [[v$1711,v$1712],fix$2192.$li(v$1714,v$1707)];
var v$1706 = t$2193;
var v$1707 = t$2194;
continue lab$li;
};
};
};
var li$1705 = fix$2192.$li;
t$2195 = (li$1705(t2$1120,null));
t$2201 = (t$2200(t$2199,t$2195));
return t$2202(t$2201);
};
var fix$2203 = {};
fix$2203.$oneForWhich = function(f$1165,t$1168){lab$oneForWhich: while (true) {if (t$1168 == null) {return [1];
} else {var v$1188 = t$1168;
var v$1189 = v$1188[0];
var v$1190 = v$1188[1];
var v$1191 = v$1188[2];
var v$1192 = v$1188[3];
if (f$1165([v$1189,v$1190])) {return [0,[v$1189,v$1190]];
} else {var v$1185 = fix$2203.$oneForWhich(f$1165,v$1191);
switch (v$1185[0]) { case 0: {var v$1187 = v$1185[1];
return [0,v$1187];
 break; }default: {var t$2204 = f$1165;
var t$2205 = v$1192;
var f$1165 = t$2204;
var t$1168 = t$2205;
continue lab$oneForWhich;
} };
};
};
};
};
tools$0StringFinMap$1$2.oneForWhich$1162 = fix$2203.$oneForWhich;
tools$0StringFinMap$1$2.en$Restrict$1193 = new String("Restrict");
tools$0StringFinMap$1$2.restrict$1194 = function(v$1213,v$1214,v$1215){var fix$2206 = {};
fix$2206.$foldl = function(v$1720,v$1721){lab$foldl: while (true) {if (v$1721 == null) {return v$1720;
} else {var v$1722 = v$1721;
var v$1723 = v$1722[0];
var v$1724 = v$1722[1];
var t$2210;
var v$1994;
var fix$2207 = {};
fix$2207.$search = function(v$1996){lab$search: while (true) {if (v$1996 == null) {return [1];
} else {var v$1997 = v$1996;
var v$1998 = v$1997[0];
var v$1999 = v$1997[1];
var v$2000 = v$1997[2];
var v$2001 = v$1997[3];
if (v$1723 < v$1998) {var t$2208 = v$2000;
var v$1996 = t$2208;
continue lab$search;
} else {if (v$1998 < v$1723) {var t$2209 = v$2001;
var v$1996 = t$2209;
continue lab$search;
} else {return [0,v$1999];
};
};
};
};
};
var search$1995 = fix$2207.$search;
v$1994 = (search$1995(v$1214));
switch (v$1994[0]) { case 0: {var v$2002 = v$1994[1];
t$2210 = (tools$0StringFinMap$1$2.add$401(v$1723,v$2002,v$1720));
 break; }default: {throw [tools$0StringFinMap$1$2.en$Restrict$1193,v$1213(v$1723)];
} };
var t$2211 = t$2210;
var t$2212 = v$1724;
var v$1720 = t$2211;
var v$1721 = t$2212;
continue lab$foldl;
};
};
};
var foldl$1719 = fix$2206.$foldl;
return foldl$1719(tools$0StringFinMap$1$2.empty$125(0),v$1215);
};
tools$0StringFinMap$1$2.enrich$1216 = function(en$1219,v$1223){var v$1244 = v$1223[0];
var v$1245 = v$1223[1];
var fix$2213 = {};
fix$2213.$fold$ = function(v$1740,v$1741){lab$fold$: while (true) {if (v$1740 == null) {return v$1741;
} else {var v$1744 = v$1740;
var v$1745 = v$1744[0];
var v$1746 = v$1744[1];
var v$1747 = v$1744[2];
var v$1748 = v$1744[3];
var t$2218 = v$1748;
var t$2217;
if (fix$2213.$fold$(v$1747,v$1741)) {var v$2007;
var fix$2214 = {};
fix$2214.$search = function(v$2009){lab$search: while (true) {if (v$2009 == null) {return [1];
} else {var v$2010 = v$2009;
var v$2011 = v$2010[0];
var v$2012 = v$2010[1];
var v$2013 = v$2010[2];
var v$2014 = v$2010[3];
if (v$1745 < v$2011) {var t$2215 = v$2013;
var v$2009 = t$2215;
continue lab$search;
} else {if (v$2011 < v$1745) {var t$2216 = v$2014;
var v$2009 = t$2216;
continue lab$search;
} else {return [0,v$2012];
};
};
};
};
};
var search$2008 = fix$2214.$search;
v$2007 = (search$2008(v$1244));
switch (v$2007[0]) { case 0: {var v$2015 = v$2007[1];
t$2217 = (en$1219([v$2015,v$1746]));
 break; }default: {t$2217 = false;
} };
} else {t$2217 = false;
};
var t$2219 = t$2218;
var t$2220 = t$2217;
var v$1740 = t$2219;
var v$1741 = t$2220;
continue lab$fold$;
};
};
};
var fold$$1739 = fix$2213.$fold$;
return fold$$1739(v$1245,true);
};
tools$0StringFinMap$1$2.layoutMap$1246 = function(v$1279,v$1281,v$1280,v$1278){return function(layoutDom$1255){return function(layoutRan$1258){return function(m$1261){var t$2228;
var t$2227;
var t$2226 = basis$0List$1.map$697;
var t$2225 = function(v$1265){var v$1271 = v$1265[0];
var v$1272 = v$1265[1];
return [0,[[layoutDom$1255(v$1271),[layoutRan$1258(v$1272),null]],[0,v$1279],"",3,""]];
};
var t$2224;
var fix$2221 = {};
fix$2221.$li = function(v$1763,v$1764){lab$li: while (true) {if (v$1763 == null) {return v$1764;
} else {var v$1767 = v$1763;
var v$1768 = v$1767[0];
var v$1769 = v$1767[1];
var v$1770 = v$1767[2];
var v$1771 = v$1767[3];
var t$2222 = v$1770;
var t$2223 = [[v$1768,v$1769],fix$2221.$li(v$1771,v$1764)];
var v$1763 = t$2222;
var v$1764 = t$2223;
continue lab$li;
};
};
};
var li$1762 = fix$2221.$li;
t$2224 = (li$1762(m$1261,null));
t$2227 = (t$2226(t$2225,t$2224));
t$2228 = [t$2227,[0,v$1280],v$1281,3,v$1278];
return [0,t$2228];
};
};
};
};
tools$0StringFinMap$1$2.reportMap$1282 = function(f$1285,t$1288){var t$2236 = tools$0Report$1.flatten$87;
var t$2235;
var t$2234 = basis$0List$1.map$697;
var t$2233 = f$1285;
var t$2232;
var fix$2229 = {};
fix$2229.$li = function(v$1775,v$1776){lab$li: while (true) {if (v$1775 == null) {return v$1776;
} else {var v$1779 = v$1775;
var v$1780 = v$1779[0];
var v$1781 = v$1779[1];
var v$1782 = v$1779[2];
var v$1783 = v$1779[3];
var t$2230 = v$1782;
var t$2231 = [[v$1780,v$1781],fix$2229.$li(v$1783,v$1776)];
var v$1775 = t$2230;
var v$1776 = t$2231;
continue lab$li;
};
};
};
var li$1774 = fix$2229.$li;
t$2232 = (li$1774(t$1288,null));
t$2235 = (t$2234(t$2233,t$2232));
return t$2236(t$2235);
};
tools$0StringFinMap$1$2.reportMapSORTED$1289 = function(f$1785,t$1786){var t$2244 = tools$0Report$1.flatten$87;
var t$2243;
var t$2242 = basis$0List$1.map$697;
var t$2241 = f$1785;
var t$2240;
var fix$2237 = {};
fix$2237.$li = function(v$1789,v$1790){lab$li: while (true) {if (v$1789 == null) {return v$1790;
} else {var v$1793 = v$1789;
var v$1794 = v$1793[0];
var v$1795 = v$1793[1];
var v$1796 = v$1793[2];
var v$1797 = v$1793[3];
var t$2238 = v$1796;
var t$2239 = [[v$1794,v$1795],fix$2237.$li(v$1797,v$1790)];
var v$1789 = t$2238;
var v$1790 = t$2239;
continue lab$li;
};
};
};
var li$1788 = fix$2237.$li;
t$2240 = (li$1788(t$1786,null));
t$2243 = (t$2242(t$2241,t$2240));
return t$2244(t$2243);
};
tools$0StringFinMap$1$2.pu_bal$1290 = pickle$0pickle$1.enumGen$2158(function(v$1799){var v$1800 = v$1799[0];
var v$1801 = v$1799[1];
switch (v$1800) { case 0: {switch (v$1801) { case 0: {return true;
 break; }default: {return false;
} };
 break; }case 1: {switch (v$1801) { case 1: {return true;
 break; }default: {return false;
} };
 break; }case 2: {switch (v$1801) { case 2: {return true;
 break; }default: {return false;
} };
 break; } };
},["OrderFinMap.bal",[1,[2,[0,null]]]]);
tools$0StringFinMap$1$2.pu$1291 = function(pu_dom$1294,pu_r$1297){var fun_E$1306;
var v$2048 = null;
fun_E$1306 = (function(v$2049){return pickle$0pickle$1.con0$1988(v$2048,v$2049);
});
return pickle$0pickle$1.dataGen$1488(["OrderFinMap.map",function(v$1815){return (v$1815 == null)?0:1;
},[fun_E$1306,[function(pu$1816){return pickle$0pickle$1.con1$2014(function(v$1817){var v$1818 = v$1817[0];
return [v$1818[0],v$1818[1],v$1818[2],v$1818[3],v$1817[1]];
},function(v$1819){if (v$1819 == null) {return tools$0Crash$1.impossible$59("OrderFinMap.pu.fun_N");
} else {var v$1820 = v$1819;
return [[v$1820[0],v$1820[1],v$1820[2],v$1820[3]],v$1820[4]];
};
},pickle$0pickle$1.pairGen0$983((pickle$0pickle$1.convert0$2299(function(v$1828){var v$1829 = v$1828[0];
var v$1830 = v$1829[0];
var v$1831 = v$1829[1];
var v$1832 = v$1828[1];
return [v$1830,v$1831,v$1832[0],v$1832[1]];
},function(v$1833){return [[v$1833[0],v$1833[1]],[v$1833[2],v$1833[3]]];
}))(pickle$0pickle$1.pairGen0$983(pickle$0pickle$1.pairGen0$983(pu_dom$1294,pu_r$1297),pickle$0pickle$1.pairGen0$983(pu$1816,pu$1816))),tools$0StringFinMap$1$2.pu_bal$1290));
},null]]]);
};
return 0;
})();
