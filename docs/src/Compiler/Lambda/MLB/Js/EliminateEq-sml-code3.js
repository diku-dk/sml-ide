if ((typeof(compiler0$0EliminateEq$1$3)) == "undefined") {compiler0$0EliminateEq$1$3 = {};
};
(function(){compiler0$0EliminateEq$1$3.eq_bal$1402 = function(v$1404,v$1405){switch (v$1404) { case 0: {switch (v$1405) { case 0: {return true;
 break; }default: {return false;
} };
 break; }case 1: {switch (v$1405) { case 1: {return true;
 break; }default: {return false;
} };
 break; }case 2: {switch (v$1405) { case 2: {return true;
 break; }default: {return false;
} };
 break; } };
};
var fix$2061 = {};
fix$2061.$eq_tree = function(v$1410,v$1411,v$1407){lab$eq_tree: while (true) {var v$1408 = v$1407[0];
var v$1409 = v$1407[1];
if (v$1408 == null) {return (v$1409 == null)?true:false;
} else {if (v$1409 == null) {return false;
} else {var v$1412 = v$1408;
var v$1413 = v$1409;
if (v$1410([v$1412[0],v$1413[0]])) {if (v$1411([v$1412[1],v$1413[1]])) {if (fix$2061.$eq_tree(v$1410,v$1411,[v$1412[2],v$1413[2]])) {var t$2062 = v$1410;
var t$2063 = v$1411;
var t$2064 = [v$1412[3],v$1413[3]];
var v$1410 = t$2062;
var v$1411 = t$2063;
var v$1407 = t$2064;
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
compiler0$0EliminateEq$1$3.eq_tree$1406 = fix$2061.$eq_tree;
compiler0$0EliminateEq$1$3.die$133 = function(s$136){return tools$0Crash$1.impossible$59("OrderFinMap." + s$136);
};
compiler0$0EliminateEq$1$3.s$j$137 = function(v$2048,v$2049){return v$2048 < v$2049;
};
compiler0$0EliminateEq$1$3.lt$144 = function(v$2050,v$2051){return v$2050 < v$2051;
};
compiler0$0EliminateEq$1$3.eq$145 = function(v$154,v$155){return ((v$154 < v$155)?true:(v$155 < v$154))?false:true;
};
compiler0$0EliminateEq$1$3.empty$161 = function(v$2060){return null;
};
compiler0$0EliminateEq$1$3.singleton$162 = function(v$2052,v$2053){return [v$2052,v$2053,null,null,2];
};
compiler0$0EliminateEq$1$3.isEmpty$169 = function(v$172){return (v$172 == null)?true:false;
};
compiler0$0EliminateEq$1$3.lookup$177 = function(t$180,key$183){var fix$2065 = {};
fix$2065.$search = function(v$187){lab$search: while (true) {if (v$187 == null) {return [1];
} else {var v$204 = v$187;
var v$205 = v$204[0];
var v$206 = v$204[1];
var v$207 = v$204[2];
var v$208 = v$204[3];
if (key$183 < v$205) {var t$2066 = v$207;
var v$187 = t$2066;
continue lab$search;
} else {if (v$205 < key$183) {var t$2067 = v$208;
var v$187 = t$2067;
continue lab$search;
} else {return [0,v$206];
};
};
};
};
};
var search$184 = fix$2065.$search;
return search$184(t$180);
};
compiler0$0EliminateEq$1$3.en$Impossible$209 = new String("Impossible");
compiler0$0EliminateEq$1$3.impossible$210 = function(s$213){throw [compiler0$0EliminateEq$1$3.en$Impossible$209,"OrderFinMap" + s$213];
};
var en$ALREADYTHERE$214 = new String("ALREADYTHERE");
var exn$ALREADYTHERE$214 = [en$ALREADYTHERE$214];
compiler0$0EliminateEq$1$3.add$437 = function(v$446,v$447,v$448){try {var fix$2069 = {};
fix$2069.$ins = function(v$1523){if (v$1523 == null) {return [true,[v$446,v$447,null,null,2]];
} else {var v$1524 = v$1523;
var v$1525 = v$1524[0];
var v$1526 = v$1524[1];
var v$1527 = v$1524[2];
var v$1528 = v$1524[3];
var v$1529 = v$1524[4];
if (v$446 < v$1525) {var v$1531 = fix$2069.$ins(v$1527);
var v$1532 = v$1531[0];
var v$1533 = v$1531[1];
switch (v$1529) { case 2: {return v$1532?[true,[v$1525,v$1526,v$1533,v$1528,1]]:[false,[v$1525,v$1526,v$1533,v$1528,2]];
 break; }case 0: {return v$1532?[false,[v$1525,v$1526,v$1533,v$1528,2]]:[false,[v$1525,v$1526,v$1533,v$1528,0]];
 break; }default: {if (v$1532) {var v$1535;
if (v$1533 == null) {throw [compiler0$0EliminateEq$1$3.en$Impossible$209,"OrderFinMapAVLfinmap 1"];
} else {v$1535 = v$1533;
};
var v$1538 = v$1535[0];
var v$1539 = v$1535[1];
var v$1540 = v$1535[2];
var v$1541 = v$1535[3];
var v$1542 = v$1535[4];
var t$2070;
var v$1871 = 1;
switch (v$1542) { case 0: {switch (v$1871) { case 0: {t$2070 = true;
 break; }default: {t$2070 = false;
} };
 break; }case 1: {switch (v$1871) { case 1: {t$2070 = true;
 break; }default: {t$2070 = false;
} };
 break; }case 2: {switch (v$1871) { case 2: {t$2070 = true;
 break; }default: {t$2070 = false;
} };
 break; } };
if (t$2070) {return [false,[v$1538,v$1539,v$1540,[v$1525,v$1526,v$1541,v$1528,2],2]];
} else {var v$1550;
if (v$1541 == null) {throw [compiler0$0EliminateEq$1$3.en$Impossible$209,"OrderFinMapAVLfinmap 2"];
} else {v$1550 = v$1541;
};
var v$1553 = v$1550[0];
var v$1554 = v$1550[1];
var v$1555 = v$1550[2];
var v$1556 = v$1550[3];
var v$1557 = v$1550[4];
var t$2091 = false;
var t$2090;
var t$2089;
var t$2088 = v$1553;
var t$2087 = v$1554;
var t$2086;
var t$2085;
var t$2084 = v$1538;
var t$2083 = v$1539;
var t$2082 = v$1540;
var t$2081 = v$1555;
var t$2080;
var t$2079;
var v$1877 = 0;
switch (v$1557) { case 0: {switch (v$1877) { case 0: {t$2079 = true;
 break; }default: {t$2079 = false;
} };
 break; }case 1: {switch (v$1877) { case 1: {t$2079 = true;
 break; }default: {t$2079 = false;
} };
 break; }case 2: {switch (v$1877) { case 2: {t$2079 = true;
 break; }default: {t$2079 = false;
} };
 break; } };
t$2080 = (t$2079?1:2);
t$2085 = [t$2084,t$2083,t$2082,t$2081,t$2080];
t$2086 = t$2085;
var t$2078;
var t$2077;
var t$2076 = v$1525;
var t$2075 = v$1526;
var t$2074 = v$1556;
var t$2073 = v$1528;
var t$2072;
var t$2071;
var v$1881 = 1;
switch (v$1557) { case 0: {switch (v$1881) { case 0: {t$2071 = true;
 break; }default: {t$2071 = false;
} };
 break; }case 1: {switch (v$1881) { case 1: {t$2071 = true;
 break; }default: {t$2071 = false;
} };
 break; }case 2: {switch (v$1881) { case 2: {t$2071 = true;
 break; }default: {t$2071 = false;
} };
 break; } };
t$2072 = (t$2071?0:2);
t$2077 = [t$2076,t$2075,t$2074,t$2073,t$2072];
t$2078 = t$2077;
t$2089 = [t$2088,t$2087,t$2086,t$2078,2];
t$2090 = t$2089;
return [t$2091,t$2090];
};
} else {return [false,[v$1525,v$1526,v$1533,v$1528,1]];
};
} };
} else {if (v$1525 < v$446) {var v$1573 = fix$2069.$ins(v$1528);
var v$1574 = v$1573[0];
var v$1575 = v$1573[1];
switch (v$1529) { case 2: {return v$1574?[true,[v$1525,v$1526,v$1527,v$1575,0]]:[false,[v$1525,v$1526,v$1527,v$1575,2]];
 break; }case 1: {return v$1574?[false,[v$1525,v$1526,v$1527,v$1575,2]]:[false,[v$1525,v$1526,v$1527,v$1575,1]];
 break; }default: {if (v$1574) {var v$1577;
if (v$1575 == null) {throw [compiler0$0EliminateEq$1$3.en$Impossible$209,"OrderFinMapAVLfinmap 3"];
} else {v$1577 = v$1575;
};
var v$1580 = v$1577[0];
var v$1581 = v$1577[1];
var v$1582 = v$1577[2];
var v$1583 = v$1577[3];
var v$1584 = v$1577[4];
var t$2092;
var v$1891 = 0;
switch (v$1584) { case 0: {switch (v$1891) { case 0: {t$2092 = true;
 break; }default: {t$2092 = false;
} };
 break; }case 1: {switch (v$1891) { case 1: {t$2092 = true;
 break; }default: {t$2092 = false;
} };
 break; }case 2: {switch (v$1891) { case 2: {t$2092 = true;
 break; }default: {t$2092 = false;
} };
 break; } };
if (t$2092) {return [false,[v$1580,v$1581,[v$1525,v$1526,v$1527,v$1582,2],v$1583,2]];
} else {var v$1592;
if (v$1582 == null) {throw [compiler0$0EliminateEq$1$3.en$Impossible$209,"OrderFinMapAVLfinmap 4"];
} else {v$1592 = v$1582;
};
var v$1595 = v$1592[0];
var v$1596 = v$1592[1];
var v$1597 = v$1592[2];
var v$1598 = v$1592[3];
var v$1599 = v$1592[4];
var t$2113 = false;
var t$2112;
var t$2111;
var t$2110 = v$1595;
var t$2109 = v$1596;
var t$2108;
var t$2107;
var t$2106 = v$1525;
var t$2105 = v$1526;
var t$2104 = v$1527;
var t$2103 = v$1597;
var t$2102;
var t$2101;
var v$1897 = 0;
switch (v$1599) { case 0: {switch (v$1897) { case 0: {t$2101 = true;
 break; }default: {t$2101 = false;
} };
 break; }case 1: {switch (v$1897) { case 1: {t$2101 = true;
 break; }default: {t$2101 = false;
} };
 break; }case 2: {switch (v$1897) { case 2: {t$2101 = true;
 break; }default: {t$2101 = false;
} };
 break; } };
t$2102 = (t$2101?1:2);
t$2107 = [t$2106,t$2105,t$2104,t$2103,t$2102];
t$2108 = t$2107;
var t$2100;
var t$2099;
var t$2098 = v$1580;
var t$2097 = v$1581;
var t$2096 = v$1598;
var t$2095 = v$1583;
var t$2094;
var t$2093;
var v$1901 = 1;
switch (v$1599) { case 0: {switch (v$1901) { case 0: {t$2093 = true;
 break; }default: {t$2093 = false;
} };
 break; }case 1: {switch (v$1901) { case 1: {t$2093 = true;
 break; }default: {t$2093 = false;
} };
 break; }case 2: {switch (v$1901) { case 2: {t$2093 = true;
 break; }default: {t$2093 = false;
} };
 break; } };
t$2094 = (t$2093?0:2);
t$2099 = [t$2098,t$2097,t$2096,t$2095,t$2094];
t$2100 = t$2099;
t$2111 = [t$2110,t$2109,t$2108,t$2100,2];
t$2112 = t$2111;
return [t$2113,t$2112];
};
} else {return [false,[v$1525,v$1526,v$1527,v$1575,0]];
};
} };
} else {throw exn$ALREADYTHERE$214;
};
};
};
};
var ins$1522 = fix$2069.$ins;
return (ins$1522(v$448))[1];
} catch(v$2068) {return (function(ALREADYTHERE$445){var t$2114 = ALREADYTHERE$445;
if (t$2114[0] == en$ALREADYTHERE$214) {var fix$2115 = {};
fix$2115.$repl = function(v$1638){if (v$1638 == null) {throw [compiler0$0EliminateEq$1$3.en$Impossible$209,"OrderFinMapAVLupdate.repl"];
} else {var v$1641 = v$1638;
var v$1642 = v$1641[0];
var v$1643 = v$1641[1];
var v$1644 = v$1641[2];
var v$1645 = v$1641[3];
var v$1646 = v$1641[4];
return (v$446 < v$1642)?[v$1642,v$1643,fix$2115.$repl(v$1644),v$1645,v$1646]:((v$1642 < v$446)?[v$1642,v$1643,v$1644,fix$2115.$repl(v$1645),v$1646]:[v$1642,v$447,v$1644,v$1645,v$1646]);
};
};
var repl$1637 = fix$2115.$repl;
return repl$1637(v$448);
} else {throw ALREADYTHERE$445;
};
})(v$2068);
};
};
var fix$2116 = {};
fix$2116.$plus = function(v$467,v$468){lab$plus: while (true) {if (v$468 == null) {return v$467;
} else {var v$462 = v$468;
var v$463 = v$462[0];
var v$464 = v$462[1];
var v$465 = v$462[2];
var v$466 = v$462[3];
var t$2117 = fix$2116.$plus(compiler0$0EliminateEq$1$3.add$437(v$463,v$464,v$467),v$465);
var t$2118 = v$466;
var v$467 = t$2117;
var v$468 = t$2118;
continue lab$plus;
};
};
};
compiler0$0EliminateEq$1$3.plus$449 = fix$2116.$plus;
var en$NOTFOUND$469 = new String("NOTFOUND");
var exn$NOTFOUND$469 = [en$NOTFOUND$469];
var delete$470 = function(v$755,v$756){var balance1$475 = function(v$478){if (v$478 == null) {throw [compiler0$0EliminateEq$1$3.en$Impossible$209,"OrderFinMap(balance1 on an empty map)"];
} else {var v$548 = v$478;
var v$549 = v$548[0];
var v$550 = v$548[1];
var v$551 = v$548[2];
var v$552 = v$548[3];
switch (v$548[4]) { case 1: {return [[v$549,v$550,v$551,v$552,2],true];
 break; }case 2: {return [[v$549,v$550,v$551,v$552,0],false];
 break; }default: {var v$535;
if (v$552 == null) {throw [compiler0$0EliminateEq$1$3.en$Impossible$209,"OrderFinMapAVLfinmap 5"];
} else {v$535 = v$552;
};
var v$536 = v$535[0];
var v$537 = v$535[1];
var v$538 = v$535[2];
var v$539 = v$535[3];
switch (v$535[4]) { case 1: {var v$522;
if (v$538 == null) {throw [compiler0$0EliminateEq$1$3.en$Impossible$209,"OrderFinMapAVLfinmap 6"];
} else {v$522 = v$538;
};
var v$523 = v$522[0];
var v$524 = v$522[1];
var v$525 = v$522[2];
var v$526 = v$522[3];
var v$527 = v$522[4];
var t$2138;
var t$2137;
var t$2136 = v$523;
var t$2135 = v$524;
var t$2134;
var t$2133;
var t$2132 = v$549;
var t$2131 = v$550;
var t$2130 = v$551;
var t$2129 = v$525;
var t$2128;
var t$2127;
var v$1919 = 0;
switch (v$527) { case 0: {switch (v$1919) { case 0: {t$2127 = true;
 break; }default: {t$2127 = false;
} };
 break; }case 1: {switch (v$1919) { case 1: {t$2127 = true;
 break; }default: {t$2127 = false;
} };
 break; }case 2: {switch (v$1919) { case 2: {t$2127 = true;
 break; }default: {t$2127 = false;
} };
 break; } };
t$2128 = (t$2127?1:2);
t$2133 = [t$2132,t$2131,t$2130,t$2129,t$2128];
t$2134 = t$2133;
var t$2126;
var t$2125;
var t$2124 = v$536;
var t$2123 = v$537;
var t$2122 = v$526;
var t$2121 = v$539;
var t$2120;
var t$2119;
var v$1921 = 1;
switch (v$527) { case 0: {switch (v$1921) { case 0: {t$2119 = true;
 break; }default: {t$2119 = false;
} };
 break; }case 1: {switch (v$1921) { case 1: {t$2119 = true;
 break; }default: {t$2119 = false;
} };
 break; }case 2: {switch (v$1921) { case 2: {t$2119 = true;
 break; }default: {t$2119 = false;
} };
 break; } };
t$2120 = (t$2119?0:2);
t$2125 = [t$2124,t$2123,t$2122,t$2121,t$2120];
t$2126 = t$2125;
t$2137 = [t$2136,t$2135,t$2134,t$2126,2];
t$2138 = t$2137;
return [t$2138,true];
 break; }case 2: {return [[v$536,v$537,[v$549,v$550,v$551,v$538,0],v$539,1],false];
 break; }default: {return [[v$536,v$537,[v$549,v$550,v$551,v$538,2],v$539,2],true];
} };
} };
};
};
var balance2$554 = function(v$557){if (v$557 == null) {throw [compiler0$0EliminateEq$1$3.en$Impossible$209,"OrderFinMap(balance2 on an empty map)"];
} else {var v$627 = v$557;
var v$628 = v$627[0];
var v$629 = v$627[1];
var v$630 = v$627[2];
var v$631 = v$627[3];
switch (v$627[4]) { case 0: {return [[v$628,v$629,v$630,v$631,2],true];
 break; }case 2: {return [[v$628,v$629,v$630,v$631,1],false];
 break; }default: {var v$614;
if (v$630 == null) {throw [compiler0$0EliminateEq$1$3.en$Impossible$209,"OrderFinMapAVLfinmap 7"];
} else {v$614 = v$630;
};
var v$615 = v$614[0];
var v$616 = v$614[1];
var v$617 = v$614[2];
var v$618 = v$614[3];
switch (v$614[4]) { case 0: {var v$601;
if (v$618 == null) {throw [compiler0$0EliminateEq$1$3.en$Impossible$209,"OrderFinMapAVLfinmap 8"];
} else {v$601 = v$618;
};
var v$602 = v$601[0];
var v$603 = v$601[1];
var v$604 = v$601[2];
var v$605 = v$601[3];
var v$606 = v$601[4];
var t$2158;
var t$2157;
var t$2156 = v$602;
var t$2155 = v$603;
var t$2154;
var t$2153;
var t$2152 = v$615;
var t$2151 = v$616;
var t$2150 = v$617;
var t$2149 = v$604;
var t$2148;
var t$2147;
var v$1931 = 0;
switch (v$606) { case 0: {switch (v$1931) { case 0: {t$2147 = true;
 break; }default: {t$2147 = false;
} };
 break; }case 1: {switch (v$1931) { case 1: {t$2147 = true;
 break; }default: {t$2147 = false;
} };
 break; }case 2: {switch (v$1931) { case 2: {t$2147 = true;
 break; }default: {t$2147 = false;
} };
 break; } };
t$2148 = (t$2147?1:2);
t$2153 = [t$2152,t$2151,t$2150,t$2149,t$2148];
t$2154 = t$2153;
var t$2146;
var t$2145;
var t$2144 = v$628;
var t$2143 = v$629;
var t$2142 = v$605;
var t$2141 = v$631;
var t$2140;
var t$2139;
var v$1929 = 1;
switch (v$606) { case 0: {switch (v$1929) { case 0: {t$2139 = true;
 break; }default: {t$2139 = false;
} };
 break; }case 1: {switch (v$1929) { case 1: {t$2139 = true;
 break; }default: {t$2139 = false;
} };
 break; }case 2: {switch (v$1929) { case 2: {t$2139 = true;
 break; }default: {t$2139 = false;
} };
 break; } };
t$2140 = (t$2139?0:2);
t$2145 = [t$2144,t$2143,t$2142,t$2141,t$2140];
t$2146 = t$2145;
t$2157 = [t$2156,t$2155,t$2154,t$2146,2];
t$2158 = t$2157;
return [t$2158,true];
 break; }case 2: {return [[v$615,v$616,v$617,[v$628,v$629,v$618,v$631,1],0],false];
 break; }default: {return [[v$615,v$616,v$617,[v$628,v$629,v$618,v$631,2],2],true];
} };
} };
};
};
var fix$2159 = {};
fix$2159.$remove_rightmost = function(v$636){if (v$636 == null) {throw [compiler0$0EliminateEq$1$3.en$Impossible$209,"OrderFinMap(remove_rightmost on empty map)"];
} else {var v$652 = v$636;
var v$653 = v$652[3];
if (v$653 == null) {return [v$652[2],v$652[0],v$652[1],true];
} else {var v$678 = v$652[0];
var v$679 = v$652[1];
var v$680 = v$652[2];
var v$681 = v$652[4];
var v$673 = fix$2159.$remove_rightmost(v$653);
var v$674 = v$673[0];
var v$675 = v$673[1];
var v$676 = v$673[2];
if (v$673[3]) {var v$670 = balance2$554([v$678,v$679,v$680,v$674,v$681]);
return [v$670[0],v$675,v$676,v$670[1]];
} else {return [[v$678,v$679,v$680,v$674,v$681],v$675,v$676,false];
};
};
};
};
var remove_rightmost$633 = fix$2159.$remove_rightmost;
var fix$2160 = {};
fix$2160.$del = function(v$685){if (v$685 == null) {throw exn$NOTFOUND$469;
} else {var v$745 = v$685;
var v$746 = v$745[0];
var v$747 = v$745[1];
var v$748 = v$745[2];
var v$749 = v$745[3];
var v$750 = v$745[4];
if (v$755 < v$746) {var v$706 = fix$2160.$del(v$748);
var v$707 = v$706[0];
if (v$706[1]) {return balance1$475([v$746,v$747,v$707,v$749,v$750]);
} else {return [[v$746,v$747,v$707,v$749,v$750],false];
};
} else {if (v$746 < v$755) {var v$720 = fix$2160.$del(v$749);
var v$721 = v$720[0];
if (v$720[1]) {return balance2$554([v$746,v$747,v$748,v$721,v$750]);
} else {return [[v$746,v$747,v$748,v$721,v$750],false];
};
} else {if (v$749 == null) {return [v$748,true];
} else {if (v$748 == null) {return [v$749,true];
} else {var v$740 = remove_rightmost$633(v$748);
var v$741 = v$740[0];
var v$742 = v$740[1];
var v$743 = v$740[2];
if (v$740[3]) {return balance1$475([v$742,v$743,v$741,v$749,v$750]);
} else {return [[v$742,v$743,v$741,v$749,v$750],false];
};
};
};
};
};
};
};
var del$682 = fix$2160.$del;
return (del$682(v$756))[0];
};
compiler0$0EliminateEq$1$3.remove$757 = function(v$765,v$766){try {return [0,delete$470(v$765,v$766)];
} catch(v$2161) {return (function(NOTFOUND$764){var t$2162 = NOTFOUND$764;
if (t$2162[0] == en$NOTFOUND$469) {return [1];
} else {throw NOTFOUND$764;
};
})(v$2161);
};
};
compiler0$0EliminateEq$1$3.delete$767 = function(v$775,v$776){try {return delete$470(v$775,v$776);
} catch(v$2163) {return (function(NOTFOUND$774){var t$2164 = NOTFOUND$774;
if (t$2164[0] == en$NOTFOUND$469) {return v$776;
} else {throw NOTFOUND$774;
};
})(v$2163);
};
};
compiler0$0EliminateEq$1$3.dom$777 = function(m$780){var fix$2165 = {};
fix$2165.$dom$ = function(v$784,v$787){lab$dom$: while (true) {if (v$784 == null) {return v$787;
} else {var v$799 = v$784;
var v$800 = v$799[0];
var v$801 = v$799[2];
var v$802 = v$799[3];
var t$2166 = v$801;
var t$2167 = [v$800,fix$2165.$dom$(v$802,v$787)];
var v$784 = t$2166;
var v$787 = t$2167;
continue lab$dom$;
};
};
};
var dom$$781 = fix$2165.$dom$;
return dom$$781(m$780,null);
};
compiler0$0EliminateEq$1$3.range$804 = function(m$807){var fix$2168 = {};
fix$2168.$ran = function(v$811,v$814){lab$ran: while (true) {if (v$811 == null) {return v$814;
} else {var v$826 = v$811;
var v$827 = v$826[1];
var v$828 = v$826[2];
var v$829 = v$826[3];
var t$2169 = v$828;
var t$2170 = [v$827,fix$2168.$ran(v$829,v$814)];
var v$811 = t$2169;
var v$814 = t$2170;
continue lab$ran;
};
};
};
var ran$808 = fix$2168.$ran;
return ran$808(m$807,null);
};
compiler0$0EliminateEq$1$3.list$831 = function(m$834){var fix$2171 = {};
fix$2171.$li = function(v$838,v$841){lab$li: while (true) {if (v$838 == null) {return v$841;
} else {var v$854 = v$838;
var v$855 = v$854[0];
var v$856 = v$854[1];
var v$857 = v$854[2];
var v$858 = v$854[3];
var t$2172 = v$857;
var t$2173 = [[v$855,v$856],fix$2171.$li(v$858,v$841)];
var v$838 = t$2172;
var v$841 = t$2173;
continue lab$li;
};
};
};
var li$835 = fix$2171.$li;
return li$835(m$834,null);
};
var fix$2174 = {};
fix$2174.$composemap = function(f$863,t$866){if (t$866 == null) {return null;
} else {var v$877 = t$866;
var v$878 = v$877[0];
var v$879 = v$877[1];
var v$880 = v$877[2];
var v$881 = v$877[3];
var v$882 = v$877[4];
var l$$876 = fix$2174.$composemap(f$863,v$880);
return [v$878,f$863(v$879),l$$876,fix$2174.$composemap(f$863,v$881),v$882];
};
};
compiler0$0EliminateEq$1$3.composemap$860 = fix$2174.$composemap;
var fix$2175 = {};
fix$2175.$ComposeMap = function(f$886,t$889){if (t$889 == null) {return null;
} else {var v$900 = t$889;
var v$901 = v$900[0];
var v$902 = v$900[1];
var v$903 = v$900[2];
var v$904 = v$900[3];
var v$905 = v$900[4];
var l$$899 = fix$2175.$ComposeMap(f$886,v$903);
return [v$901,f$886([v$901,v$902]),l$$899,fix$2175.$ComposeMap(f$886,v$904),v$905];
};
};
compiler0$0EliminateEq$1$3.ComposeMap$883 = fix$2175.$ComposeMap;
compiler0$0EliminateEq$1$3.fold$906 = function(f$909,e$912,t$915){var fix$2176 = {};
fix$2176.$fold$ = function(v$919,v$922){lab$fold$: while (true) {if (v$919 == null) {return v$922;
} else {var v$934 = v$919;
var v$935 = v$934[1];
var v$936 = v$934[2];
var v$937 = v$934[3];
var t$2177 = v$937;
var t$2178 = f$909([v$935,fix$2176.$fold$(v$936,v$922)]);
var v$919 = t$2177;
var v$922 = t$2178;
continue lab$fold$;
};
};
};
var fold$$916 = fix$2176.$fold$;
return fold$$916(t$915,e$912);
};
compiler0$0EliminateEq$1$3.Fold$939 = function(f$942,e$945,t$948){var fix$2179 = {};
fix$2179.$fold$ = function(v$952,v$955){lab$fold$: while (true) {if (v$952 == null) {return v$955;
} else {var v$968 = v$952;
var v$969 = v$968[0];
var v$970 = v$968[1];
var v$971 = v$968[2];
var v$972 = v$968[3];
var t$2180 = v$972;
var t$2181 = f$942([[v$969,v$970],fix$2179.$fold$(v$971,v$955)]);
var v$952 = t$2180;
var v$955 = t$2181;
continue lab$fold$;
};
};
};
var fold$$949 = fix$2179.$fold$;
return fold$$949(t$948,e$945);
};
compiler0$0EliminateEq$1$3.filter$974 = function(f$977,t$980){var fix$2182 = {};
fix$2182.$fold$ = function(v$1705,v$1706){lab$fold$: while (true) {if (v$1705 == null) {return v$1706;
} else {var v$1709 = v$1705;
var v$1710 = v$1709[0];
var v$1711 = v$1709[1];
var v$1712 = v$1709[2];
var v$1713 = v$1709[3];
var t$2184 = v$1713;
var t$2183;
var v$2039 = fix$2182.$fold$(v$1712,v$1706);
t$2183 = ((f$977([v$1710,v$1711]))?(compiler0$0EliminateEq$1$3.add$437(v$1710,v$1711,v$2039)):v$2039);
var t$2185 = t$2184;
var t$2186 = t$2183;
var v$1705 = t$2185;
var v$1706 = t$2186;
continue lab$fold$;
};
};
};
var fold$$1704 = fix$2182.$fold$;
return fold$$1704(t$980,compiler0$0EliminateEq$1$3.empty$161(0));
};
var fix$2187 = {};
fix$2187.$addList = function(v$997,v$1000){lab$addList: while (true) {if (v$997 == null) {return v$1000;
} else {var v$1012 = v$997;
var v$1013 = v$1012[0];
var v$1014 = v$1013[0];
var v$1015 = v$1013[1];
var v$1016 = v$1012[1];
var t$2188 = v$1016;
var t$2189 = compiler0$0EliminateEq$1$3.add$437(v$1014,v$1015,v$1000);
var v$997 = t$2188;
var v$1000 = t$2189;
continue lab$addList;
};
};
};
compiler0$0EliminateEq$1$3.addList$994 = fix$2187.$addList;
compiler0$0EliminateEq$1$3.fromList$1018 = function(l$1021){return compiler0$0EliminateEq$1$3.addList$994(l$1021,compiler0$0EliminateEq$1$3.empty$161(0));
};
compiler0$0EliminateEq$1$3.fromSortedList$1022 = function(l$1025){var fix$2190 = {};
fix$2190.$build = function(v$1054,v$2054){switch (v$1054) { case 0: {return [v$2054,null];
 break; }default: {var n$$1056 = SmlPrims.div_i32(v$1054,2,CompilerInitial.exn$Div$47);
var v$1087 = fix$2190.$build(n$$1056,v$2054);
var v$1088 = v$1087[0];
var v$1089 = v$1087[1];
var v$1070;
if (v$1088 == null) {throw [compiler0$0EliminateEq$1$3.en$Impossible$209,"OrderFinMapbuild"];
} else {var v$1082 = v$1088;
var v$1083 = v$1082[0];
v$1070 = [v$1083[0],v$1083[1],v$1082[1]];
};
var v$1071 = v$1070[0];
var v$1072 = v$1070[1];
var v$1073 = v$1070[2];
var v$1067 = fix$2190.$build(SmlPrims.chk_ovf_i32((SmlPrims.chk_ovf_i32(v$1054 - n$$1056)) - 1),v$1073);
return [v$1067[0],[v$1071,v$1072,v$1089,v$1067[1]]];
} };
};
var build$1043 = fix$2190.$build;
var fix$2191 = {};
fix$2191.$mk_avl = function(v$1105){if (v$1105 == null) {return [null,0];
} else {var v$1134 = v$1105;
var v$1135 = v$1134[0];
var v$1136 = v$1134[1];
var v$1137 = v$1134[2];
var v$1138 = v$1134[3];
var v$1131 = fix$2191.$mk_avl(v$1137);
var v$1132 = v$1131[0];
var v$1133 = v$1131[1];
var v$1128 = fix$2191.$mk_avl(v$1138);
var v$1129 = v$1128[0];
var v$1130 = v$1128[1];
return [[v$1135,v$1136,v$1132,v$1129,(v$1133 == v$1130)?2:((v$1133 > v$1130)?1:0)],SmlPrims.chk_ovf_i32(1 + ((v$1133 > v$1130)?v$1133:v$1130))];
};
};
var mk_avl$1102 = fix$2191.$mk_avl;
var t$2200;
var t$2199 = mk_avl$1102;
var t$2198;
var t$2197;
var t$2196 = build$1043;
var t$2195;
var fix$2192 = {};
fix$2192.$acc = function(v$1722,v$1723){lab$acc: while (true) {if (v$1722 == null) {return v$1723;
} else {var v$1724 = v$1722;
var v$1725 = v$1724[1];
var t$2193 = v$1725;
var t$2194 = SmlPrims.chk_ovf_i32(v$1723 + 1);
var v$1722 = t$2193;
var v$1723 = t$2194;
continue lab$acc;
};
};
};
var acc$1721 = fix$2192.$acc;
t$2195 = (acc$1721(l$1025,0));
t$2197 = (t$2196(t$2195,l$1025));
t$2198 = t$2197[1];
t$2200 = (t$2199(t$2198));
return t$2200[0];
};
compiler0$0EliminateEq$1$3.mergeMap$1147 = function(f$1150,t1$1153,t2$1156){var fix$2201 = {};
fix$2201.$merge = function(v$1177,v$2055){if (v$1177 == null) {return v$2055;
} else {if (v$2055 == null) {return v$1177;
} else {var v$1188 = v$1177;
var v$1189 = v$1188[0];
var v$1190 = v$1189[0];
var v$1191 = v$1189[1];
var v$1192 = v$1188[1];
var v$1193 = v$2055;
var v$1194 = v$1193[0];
var v$1195 = v$1194[0];
var v$1196 = v$1194[1];
var v$1197 = v$1193[1];
return (v$1190 < v$1195)?[[v$1190,v$1191],fix$2201.$merge(v$1192,v$2055)]:((v$1195 < v$1190)?[[v$1195,v$1196],fix$2201.$merge(v$1177,v$1197)]:[[v$1190,f$1150([v$1191,v$1196])],fix$2201.$merge(v$1192,v$1197)]);
};
};
};
var merge$1157 = fix$2201.$merge;
var t$2212 = compiler0$0EliminateEq$1$3.fromSortedList$1022;
var t$2211;
var t$2210 = merge$1157;
var t$2209;
var fix$2206 = {};
fix$2206.$li = function(v$1730,v$1731){lab$li: while (true) {if (v$1730 == null) {return v$1731;
} else {var v$1734 = v$1730;
var v$1735 = v$1734[0];
var v$1736 = v$1734[1];
var v$1737 = v$1734[2];
var v$1738 = v$1734[3];
var t$2207 = v$1737;
var t$2208 = [[v$1735,v$1736],fix$2206.$li(v$1738,v$1731)];
var v$1730 = t$2207;
var v$1731 = t$2208;
continue lab$li;
};
};
};
var li$1729 = fix$2206.$li;
t$2209 = (li$1729(t1$1153,null));
var t$2205;
var fix$2202 = {};
fix$2202.$li = function(v$1742,v$1743){lab$li: while (true) {if (v$1742 == null) {return v$1743;
} else {var v$1746 = v$1742;
var v$1747 = v$1746[0];
var v$1748 = v$1746[1];
var v$1749 = v$1746[2];
var v$1750 = v$1746[3];
var t$2203 = v$1749;
var t$2204 = [[v$1747,v$1748],fix$2202.$li(v$1750,v$1743)];
var v$1742 = t$2203;
var v$1743 = t$2204;
continue lab$li;
};
};
};
var li$1741 = fix$2202.$li;
t$2205 = (li$1741(t2$1156,null));
t$2211 = (t$2210(t$2209,t$2205));
return t$2212(t$2211);
};
var fix$2213 = {};
fix$2213.$oneForWhich = function(f$1201,t$1204){lab$oneForWhich: while (true) {if (t$1204 == null) {return [1];
} else {var v$1224 = t$1204;
var v$1225 = v$1224[0];
var v$1226 = v$1224[1];
var v$1227 = v$1224[2];
var v$1228 = v$1224[3];
if (f$1201([v$1225,v$1226])) {return [0,[v$1225,v$1226]];
} else {var v$1221 = fix$2213.$oneForWhich(f$1201,v$1227);
switch (v$1221[0]) { case 0: {var v$1223 = v$1221[1];
return [0,v$1223];
 break; }default: {var t$2214 = f$1201;
var t$2215 = v$1228;
var f$1201 = t$2214;
var t$1204 = t$2215;
continue lab$oneForWhich;
} };
};
};
};
};
compiler0$0EliminateEq$1$3.oneForWhich$1198 = fix$2213.$oneForWhich;
compiler0$0EliminateEq$1$3.en$Restrict$1229 = new String("Restrict");
compiler0$0EliminateEq$1$3.restrict$1230 = function(v$1249,v$1250,v$1251){var fix$2216 = {};
fix$2216.$foldl = function(v$1756,v$1757){lab$foldl: while (true) {if (v$1757 == null) {return v$1756;
} else {var v$1758 = v$1757;
var v$1759 = v$1758[0];
var v$1760 = v$1758[1];
var t$2220;
var v$2004;
var fix$2217 = {};
fix$2217.$search = function(v$2006){lab$search: while (true) {if (v$2006 == null) {return [1];
} else {var v$2007 = v$2006;
var v$2008 = v$2007[0];
var v$2009 = v$2007[1];
var v$2010 = v$2007[2];
var v$2011 = v$2007[3];
if (v$1759 < v$2008) {var t$2218 = v$2010;
var v$2006 = t$2218;
continue lab$search;
} else {if (v$2008 < v$1759) {var t$2219 = v$2011;
var v$2006 = t$2219;
continue lab$search;
} else {return [0,v$2009];
};
};
};
};
};
var search$2005 = fix$2217.$search;
v$2004 = (search$2005(v$1250));
switch (v$2004[0]) { case 0: {var v$2012 = v$2004[1];
t$2220 = (compiler0$0EliminateEq$1$3.add$437(v$1759,v$2012,v$1756));
 break; }default: {throw [compiler0$0EliminateEq$1$3.en$Restrict$1229,v$1249(v$1759)];
} };
var t$2221 = t$2220;
var t$2222 = v$1760;
var v$1756 = t$2221;
var v$1757 = t$2222;
continue lab$foldl;
};
};
};
var foldl$1755 = fix$2216.$foldl;
return foldl$1755(compiler0$0EliminateEq$1$3.empty$161(0),v$1251);
};
compiler0$0EliminateEq$1$3.enrich$1252 = function(en$1255,v$1259){var v$1280 = v$1259[0];
var v$1281 = v$1259[1];
var fix$2223 = {};
fix$2223.$fold$ = function(v$1776,v$1777){lab$fold$: while (true) {if (v$1776 == null) {return v$1777;
} else {var v$1780 = v$1776;
var v$1781 = v$1780[0];
var v$1782 = v$1780[1];
var v$1783 = v$1780[2];
var v$1784 = v$1780[3];
var t$2228 = v$1784;
var t$2227;
if (fix$2223.$fold$(v$1783,v$1777)) {var v$2017;
var fix$2224 = {};
fix$2224.$search = function(v$2019){lab$search: while (true) {if (v$2019 == null) {return [1];
} else {var v$2020 = v$2019;
var v$2021 = v$2020[0];
var v$2022 = v$2020[1];
var v$2023 = v$2020[2];
var v$2024 = v$2020[3];
if (v$1781 < v$2021) {var t$2225 = v$2023;
var v$2019 = t$2225;
continue lab$search;
} else {if (v$2021 < v$1781) {var t$2226 = v$2024;
var v$2019 = t$2226;
continue lab$search;
} else {return [0,v$2022];
};
};
};
};
};
var search$2018 = fix$2224.$search;
v$2017 = (search$2018(v$1280));
switch (v$2017[0]) { case 0: {var v$2025 = v$2017[1];
t$2227 = (en$1255([v$2025,v$1782]));
 break; }default: {t$2227 = false;
} };
} else {t$2227 = false;
};
var t$2229 = t$2228;
var t$2230 = t$2227;
var v$1776 = t$2229;
var v$1777 = t$2230;
continue lab$fold$;
};
};
};
var fold$$1775 = fix$2223.$fold$;
return fold$$1775(v$1281,true);
};
compiler0$0EliminateEq$1$3.layoutMap$1282 = function(v$1315,v$1317,v$1316,v$1314){return function(layoutDom$1291){return function(layoutRan$1294){return function(m$1297){var t$2238;
var t$2237;
var t$2236 = basis$0List$1.map$697;
var t$2235 = function(v$1301){var v$1307 = v$1301[0];
var v$1308 = v$1301[1];
return [0,[[layoutDom$1291(v$1307),[layoutRan$1294(v$1308),null]],[0,v$1315],"",3,""]];
};
var t$2234;
var fix$2231 = {};
fix$2231.$li = function(v$1799,v$1800){lab$li: while (true) {if (v$1799 == null) {return v$1800;
} else {var v$1803 = v$1799;
var v$1804 = v$1803[0];
var v$1805 = v$1803[1];
var v$1806 = v$1803[2];
var v$1807 = v$1803[3];
var t$2232 = v$1806;
var t$2233 = [[v$1804,v$1805],fix$2231.$li(v$1807,v$1800)];
var v$1799 = t$2232;
var v$1800 = t$2233;
continue lab$li;
};
};
};
var li$1798 = fix$2231.$li;
t$2234 = (li$1798(m$1297,null));
t$2237 = (t$2236(t$2235,t$2234));
t$2238 = [t$2237,[0,v$1316],v$1317,3,v$1314];
return [0,t$2238];
};
};
};
};
compiler0$0EliminateEq$1$3.reportMap$1318 = function(f$1321,t$1324){var t$2246 = tools$0Report$1.flatten$87;
var t$2245;
var t$2244 = basis$0List$1.map$697;
var t$2243 = f$1321;
var t$2242;
var fix$2239 = {};
fix$2239.$li = function(v$1811,v$1812){lab$li: while (true) {if (v$1811 == null) {return v$1812;
} else {var v$1815 = v$1811;
var v$1816 = v$1815[0];
var v$1817 = v$1815[1];
var v$1818 = v$1815[2];
var v$1819 = v$1815[3];
var t$2240 = v$1818;
var t$2241 = [[v$1816,v$1817],fix$2239.$li(v$1819,v$1812)];
var v$1811 = t$2240;
var v$1812 = t$2241;
continue lab$li;
};
};
};
var li$1810 = fix$2239.$li;
t$2242 = (li$1810(t$1324,null));
t$2245 = (t$2244(t$2243,t$2242));
return t$2246(t$2245);
};
compiler0$0EliminateEq$1$3.reportMapSORTED$1325 = function(f$1821,t$1822){var t$2254 = tools$0Report$1.flatten$87;
var t$2253;
var t$2252 = basis$0List$1.map$697;
var t$2251 = f$1821;
var t$2250;
var fix$2247 = {};
fix$2247.$li = function(v$1825,v$1826){lab$li: while (true) {if (v$1825 == null) {return v$1826;
} else {var v$1829 = v$1825;
var v$1830 = v$1829[0];
var v$1831 = v$1829[1];
var v$1832 = v$1829[2];
var v$1833 = v$1829[3];
var t$2248 = v$1832;
var t$2249 = [[v$1830,v$1831],fix$2247.$li(v$1833,v$1826)];
var v$1825 = t$2248;
var v$1826 = t$2249;
continue lab$li;
};
};
};
var li$1824 = fix$2247.$li;
t$2250 = (li$1824(t$1822,null));
t$2253 = (t$2252(t$2251,t$2250));
return t$2254(t$2253);
};
compiler0$0EliminateEq$1$3.pu_bal$1326 = pickle$0pickle$1.enumGen$2158(function(v$1835){var v$1836 = v$1835[0];
var v$1837 = v$1835[1];
switch (v$1836) { case 0: {switch (v$1837) { case 0: {return true;
 break; }default: {return false;
} };
 break; }case 1: {switch (v$1837) { case 1: {return true;
 break; }default: {return false;
} };
 break; }case 2: {switch (v$1837) { case 2: {return true;
 break; }default: {return false;
} };
 break; } };
},["OrderFinMap.bal",[1,[2,[0,null]]]]);
compiler0$0EliminateEq$1$3.pu$1327 = function(pu_dom$1330,pu_r$1333){var fun_E$1342;
var v$2058 = null;
fun_E$1342 = (function(v$2059){return pickle$0pickle$1.con0$1988(v$2058,v$2059);
});
return pickle$0pickle$1.dataGen$1488(["OrderFinMap.map",function(v$1840){return (v$1840 == null)?0:1;
},[fun_E$1342,[function(pu$1841){return pickle$0pickle$1.con1$2014(function(v$1842){var v$1843 = v$1842[0];
return [v$1843[0],v$1843[1],v$1843[2],v$1843[3],v$1842[1]];
},function(v$1844){if (v$1844 == null) {return tools$0Crash$1.impossible$59("OrderFinMap.pu.fun_N");
} else {var v$1845 = v$1844;
return [[v$1845[0],v$1845[1],v$1845[2],v$1845[3]],v$1845[4]];
};
},pickle$0pickle$1.pairGen0$983(pickle$0pickle$1.tup4Gen0$2377(pu_dom$1330,pu_r$1333,pu$1841,pu$1841),compiler0$0EliminateEq$1$3.pu_bal$1326));
},null]]]);
};
return 0;
})();