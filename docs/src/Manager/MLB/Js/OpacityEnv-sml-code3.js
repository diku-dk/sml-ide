if ((typeof(basics$0OpacityEnv$1$3)) == "undefined") {basics$0OpacityEnv$1$3 = {};
};
(function(){basics$0OpacityEnv$1$3.eq_bal$1407 = function(v$1409,v$1410){switch (v$1409) { case 0: {switch (v$1410) { case 0: {return true;
 break; }default: {return false;
} };
 break; }case 1: {switch (v$1410) { case 1: {return true;
 break; }default: {return false;
} };
 break; }case 2: {switch (v$1410) { case 2: {return true;
 break; }default: {return false;
} };
 break; } };
};
var fix$2058 = {};
fix$2058.$eq_tree = function(v$1415,v$1416,v$1412){lab$eq_tree: while (true) {var v$1413 = v$1412[0];
var v$1414 = v$1412[1];
if (v$1413 == null) {return (v$1414 == null)?true:false;
} else {if (v$1414 == null) {return false;
} else {var v$1417 = v$1413;
var v$1418 = v$1414;
if (v$1415([v$1417[0],v$1418[0]])) {if (v$1416([v$1417[1],v$1418[1]])) {if (fix$2058.$eq_tree(v$1415,v$1416,[v$1417[2],v$1418[2]])) {var t$2059 = v$1415;
var t$2060 = v$1416;
var t$2061 = [v$1417[3],v$1418[3]];
var v$1415 = t$2059;
var v$1416 = t$2060;
var v$1412 = t$2061;
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
basics$0OpacityEnv$1$3.eq_tree$1411 = fix$2058.$eq_tree;
basics$0OpacityEnv$1$3.die$138 = function(s$141){return tools$0Crash$1.impossible$59("OrderFinMap." + s$141);
};
basics$0OpacityEnv$1$3.s$j$142 = function(v$147,v$148){return basics$0OpacityEnv$1$2.lt$96(v$147,v$148);
};
basics$0OpacityEnv$1$3.lt$149 = function(v$1422,v$1423){return basics$0OpacityEnv$1$2.lt$96(v$1422,v$1423);
};
basics$0OpacityEnv$1$3.eq$150 = function(v$159,v$160){return ((basics$0OpacityEnv$1$2.lt$96(v$159,v$160))?true:(basics$0OpacityEnv$1$2.lt$96(v$160,v$159)))?false:true;
};
basics$0OpacityEnv$1$3.empty$166 = function(v$2057){return null;
};
basics$0OpacityEnv$1$3.singleton$167 = function(v$2049,v$2050){return [v$2049,v$2050,null,null,2];
};
basics$0OpacityEnv$1$3.isEmpty$174 = function(v$177){return (v$177 == null)?true:false;
};
basics$0OpacityEnv$1$3.lookup$182 = function(t$185,key$188){var fix$2062 = {};
fix$2062.$search = function(v$192){lab$search: while (true) {if (v$192 == null) {return [1];
} else {var v$209 = v$192;
var v$210 = v$209[0];
var v$211 = v$209[1];
var v$212 = v$209[2];
var v$213 = v$209[3];
if (basics$0OpacityEnv$1$2.lt$96(key$188,v$210)) {var t$2063 = v$212;
var v$192 = t$2063;
continue lab$search;
} else {if (basics$0OpacityEnv$1$2.lt$96(v$210,key$188)) {var t$2064 = v$213;
var v$192 = t$2064;
continue lab$search;
} else {return [0,v$211];
};
};
};
};
};
var search$189 = fix$2062.$search;
return search$189(t$185);
};
basics$0OpacityEnv$1$3.en$Impossible$214 = new String("Impossible");
basics$0OpacityEnv$1$3.impossible$215 = function(s$218){throw [basics$0OpacityEnv$1$3.en$Impossible$214,"OrderFinMap" + s$218];
};
var en$ALREADYTHERE$219 = new String("ALREADYTHERE");
var exn$ALREADYTHERE$219 = [en$ALREADYTHERE$219];
basics$0OpacityEnv$1$3.add$442 = function(v$451,v$452,v$453){try {var fix$2066 = {};
fix$2066.$ins = function(v$1508){if (v$1508 == null) {return [true,[v$451,v$452,null,null,2]];
} else {var v$1509 = v$1508;
var v$1510 = v$1509[0];
var v$1511 = v$1509[1];
var v$1512 = v$1509[2];
var v$1513 = v$1509[3];
var v$1514 = v$1509[4];
if (basics$0OpacityEnv$1$2.lt$96(v$451,v$1510)) {var v$1518 = fix$2066.$ins(v$1512);
var v$1519 = v$1518[0];
var v$1520 = v$1518[1];
switch (v$1514) { case 2: {return v$1519?[true,[v$1510,v$1511,v$1520,v$1513,1]]:[false,[v$1510,v$1511,v$1520,v$1513,2]];
 break; }case 0: {return v$1519?[false,[v$1510,v$1511,v$1520,v$1513,2]]:[false,[v$1510,v$1511,v$1520,v$1513,0]];
 break; }default: {if (v$1519) {var v$1522;
if (v$1520 == null) {throw [basics$0OpacityEnv$1$3.en$Impossible$214,"OrderFinMapAVLfinmap 1"];
} else {v$1522 = v$1520;
};
var v$1525 = v$1522[0];
var v$1526 = v$1522[1];
var v$1527 = v$1522[2];
var v$1528 = v$1522[3];
var v$1529 = v$1522[4];
var t$2067;
var v$1872 = 1;
switch (v$1529) { case 0: {switch (v$1872) { case 0: {t$2067 = true;
 break; }default: {t$2067 = false;
} };
 break; }case 1: {switch (v$1872) { case 1: {t$2067 = true;
 break; }default: {t$2067 = false;
} };
 break; }case 2: {switch (v$1872) { case 2: {t$2067 = true;
 break; }default: {t$2067 = false;
} };
 break; } };
if (t$2067) {return [false,[v$1525,v$1526,v$1527,[v$1510,v$1511,v$1528,v$1513,2],2]];
} else {var v$1537;
if (v$1528 == null) {throw [basics$0OpacityEnv$1$3.en$Impossible$214,"OrderFinMapAVLfinmap 2"];
} else {v$1537 = v$1528;
};
var v$1540 = v$1537[0];
var v$1541 = v$1537[1];
var v$1542 = v$1537[2];
var v$1543 = v$1537[3];
var v$1544 = v$1537[4];
var t$2088 = false;
var t$2087;
var t$2086;
var t$2085 = v$1540;
var t$2084 = v$1541;
var t$2083;
var t$2082;
var t$2081 = v$1525;
var t$2080 = v$1526;
var t$2079 = v$1527;
var t$2078 = v$1542;
var t$2077;
var t$2076;
var v$1878 = 0;
switch (v$1544) { case 0: {switch (v$1878) { case 0: {t$2076 = true;
 break; }default: {t$2076 = false;
} };
 break; }case 1: {switch (v$1878) { case 1: {t$2076 = true;
 break; }default: {t$2076 = false;
} };
 break; }case 2: {switch (v$1878) { case 2: {t$2076 = true;
 break; }default: {t$2076 = false;
} };
 break; } };
t$2077 = (t$2076?1:2);
t$2082 = [t$2081,t$2080,t$2079,t$2078,t$2077];
t$2083 = t$2082;
var t$2075;
var t$2074;
var t$2073 = v$1510;
var t$2072 = v$1511;
var t$2071 = v$1543;
var t$2070 = v$1513;
var t$2069;
var t$2068;
var v$1882 = 1;
switch (v$1544) { case 0: {switch (v$1882) { case 0: {t$2068 = true;
 break; }default: {t$2068 = false;
} };
 break; }case 1: {switch (v$1882) { case 1: {t$2068 = true;
 break; }default: {t$2068 = false;
} };
 break; }case 2: {switch (v$1882) { case 2: {t$2068 = true;
 break; }default: {t$2068 = false;
} };
 break; } };
t$2069 = (t$2068?0:2);
t$2074 = [t$2073,t$2072,t$2071,t$2070,t$2069];
t$2075 = t$2074;
t$2086 = [t$2085,t$2084,t$2083,t$2075,2];
t$2087 = t$2086;
return [t$2088,t$2087];
};
} else {return [false,[v$1510,v$1511,v$1520,v$1513,1]];
};
} };
} else {if (basics$0OpacityEnv$1$2.lt$96(v$1510,v$451)) {var v$1562 = fix$2066.$ins(v$1513);
var v$1563 = v$1562[0];
var v$1564 = v$1562[1];
switch (v$1514) { case 2: {return v$1563?[true,[v$1510,v$1511,v$1512,v$1564,0]]:[false,[v$1510,v$1511,v$1512,v$1564,2]];
 break; }case 1: {return v$1563?[false,[v$1510,v$1511,v$1512,v$1564,2]]:[false,[v$1510,v$1511,v$1512,v$1564,1]];
 break; }default: {if (v$1563) {var v$1566;
if (v$1564 == null) {throw [basics$0OpacityEnv$1$3.en$Impossible$214,"OrderFinMapAVLfinmap 3"];
} else {v$1566 = v$1564;
};
var v$1569 = v$1566[0];
var v$1570 = v$1566[1];
var v$1571 = v$1566[2];
var v$1572 = v$1566[3];
var v$1573 = v$1566[4];
var t$2089;
var v$1892 = 0;
switch (v$1573) { case 0: {switch (v$1892) { case 0: {t$2089 = true;
 break; }default: {t$2089 = false;
} };
 break; }case 1: {switch (v$1892) { case 1: {t$2089 = true;
 break; }default: {t$2089 = false;
} };
 break; }case 2: {switch (v$1892) { case 2: {t$2089 = true;
 break; }default: {t$2089 = false;
} };
 break; } };
if (t$2089) {return [false,[v$1569,v$1570,[v$1510,v$1511,v$1512,v$1571,2],v$1572,2]];
} else {var v$1581;
if (v$1571 == null) {throw [basics$0OpacityEnv$1$3.en$Impossible$214,"OrderFinMapAVLfinmap 4"];
} else {v$1581 = v$1571;
};
var v$1584 = v$1581[0];
var v$1585 = v$1581[1];
var v$1586 = v$1581[2];
var v$1587 = v$1581[3];
var v$1588 = v$1581[4];
var t$2110 = false;
var t$2109;
var t$2108;
var t$2107 = v$1584;
var t$2106 = v$1585;
var t$2105;
var t$2104;
var t$2103 = v$1510;
var t$2102 = v$1511;
var t$2101 = v$1512;
var t$2100 = v$1586;
var t$2099;
var t$2098;
var v$1898 = 0;
switch (v$1588) { case 0: {switch (v$1898) { case 0: {t$2098 = true;
 break; }default: {t$2098 = false;
} };
 break; }case 1: {switch (v$1898) { case 1: {t$2098 = true;
 break; }default: {t$2098 = false;
} };
 break; }case 2: {switch (v$1898) { case 2: {t$2098 = true;
 break; }default: {t$2098 = false;
} };
 break; } };
t$2099 = (t$2098?1:2);
t$2104 = [t$2103,t$2102,t$2101,t$2100,t$2099];
t$2105 = t$2104;
var t$2097;
var t$2096;
var t$2095 = v$1569;
var t$2094 = v$1570;
var t$2093 = v$1587;
var t$2092 = v$1572;
var t$2091;
var t$2090;
var v$1902 = 1;
switch (v$1588) { case 0: {switch (v$1902) { case 0: {t$2090 = true;
 break; }default: {t$2090 = false;
} };
 break; }case 1: {switch (v$1902) { case 1: {t$2090 = true;
 break; }default: {t$2090 = false;
} };
 break; }case 2: {switch (v$1902) { case 2: {t$2090 = true;
 break; }default: {t$2090 = false;
} };
 break; } };
t$2091 = (t$2090?0:2);
t$2096 = [t$2095,t$2094,t$2093,t$2092,t$2091];
t$2097 = t$2096;
t$2108 = [t$2107,t$2106,t$2105,t$2097,2];
t$2109 = t$2108;
return [t$2110,t$2109];
};
} else {return [false,[v$1510,v$1511,v$1512,v$1564,0]];
};
} };
} else {throw exn$ALREADYTHERE$219;
};
};
};
};
var ins$1507 = fix$2066.$ins;
return (ins$1507(v$453))[1];
} catch(v$2065) {return (function(ALREADYTHERE$450){var t$2111 = ALREADYTHERE$450;
if (t$2111[0] == en$ALREADYTHERE$219) {var fix$2112 = {};
fix$2112.$repl = function(v$1627){if (v$1627 == null) {throw [basics$0OpacityEnv$1$3.en$Impossible$214,"OrderFinMapAVLupdate.repl"];
} else {var v$1630 = v$1627;
var v$1631 = v$1630[0];
var v$1632 = v$1630[1];
var v$1633 = v$1630[2];
var v$1634 = v$1630[3];
var v$1635 = v$1630[4];
return (basics$0OpacityEnv$1$2.lt$96(v$451,v$1631))?[v$1631,v$1632,fix$2112.$repl(v$1633),v$1634,v$1635]:((basics$0OpacityEnv$1$2.lt$96(v$1631,v$451))?[v$1631,v$1632,v$1633,fix$2112.$repl(v$1634),v$1635]:[v$1631,v$452,v$1633,v$1634,v$1635]);
};
};
var repl$1626 = fix$2112.$repl;
return repl$1626(v$453);
} else {throw ALREADYTHERE$450;
};
})(v$2065);
};
};
var fix$2113 = {};
fix$2113.$plus = function(v$472,v$473){lab$plus: while (true) {if (v$473 == null) {return v$472;
} else {var v$467 = v$473;
var v$468 = v$467[0];
var v$469 = v$467[1];
var v$470 = v$467[2];
var v$471 = v$467[3];
var t$2114 = fix$2113.$plus(basics$0OpacityEnv$1$3.add$442(v$468,v$469,v$472),v$470);
var t$2115 = v$471;
var v$472 = t$2114;
var v$473 = t$2115;
continue lab$plus;
};
};
};
basics$0OpacityEnv$1$3.plus$454 = fix$2113.$plus;
var en$NOTFOUND$474 = new String("NOTFOUND");
var exn$NOTFOUND$474 = [en$NOTFOUND$474];
var delete$475 = function(v$760,v$761){var balance1$480 = function(v$483){if (v$483 == null) {throw [basics$0OpacityEnv$1$3.en$Impossible$214,"OrderFinMap(balance1 on an empty map)"];
} else {var v$553 = v$483;
var v$554 = v$553[0];
var v$555 = v$553[1];
var v$556 = v$553[2];
var v$557 = v$553[3];
switch (v$553[4]) { case 1: {return [[v$554,v$555,v$556,v$557,2],true];
 break; }case 2: {return [[v$554,v$555,v$556,v$557,0],false];
 break; }default: {var v$540;
if (v$557 == null) {throw [basics$0OpacityEnv$1$3.en$Impossible$214,"OrderFinMapAVLfinmap 5"];
} else {v$540 = v$557;
};
var v$541 = v$540[0];
var v$542 = v$540[1];
var v$543 = v$540[2];
var v$544 = v$540[3];
switch (v$540[4]) { case 1: {var v$527;
if (v$543 == null) {throw [basics$0OpacityEnv$1$3.en$Impossible$214,"OrderFinMapAVLfinmap 6"];
} else {v$527 = v$543;
};
var v$528 = v$527[0];
var v$529 = v$527[1];
var v$530 = v$527[2];
var v$531 = v$527[3];
var v$532 = v$527[4];
var t$2135;
var t$2134;
var t$2133 = v$528;
var t$2132 = v$529;
var t$2131;
var t$2130;
var t$2129 = v$554;
var t$2128 = v$555;
var t$2127 = v$556;
var t$2126 = v$530;
var t$2125;
var t$2124;
var v$1920 = 0;
switch (v$532) { case 0: {switch (v$1920) { case 0: {t$2124 = true;
 break; }default: {t$2124 = false;
} };
 break; }case 1: {switch (v$1920) { case 1: {t$2124 = true;
 break; }default: {t$2124 = false;
} };
 break; }case 2: {switch (v$1920) { case 2: {t$2124 = true;
 break; }default: {t$2124 = false;
} };
 break; } };
t$2125 = (t$2124?1:2);
t$2130 = [t$2129,t$2128,t$2127,t$2126,t$2125];
t$2131 = t$2130;
var t$2123;
var t$2122;
var t$2121 = v$541;
var t$2120 = v$542;
var t$2119 = v$531;
var t$2118 = v$544;
var t$2117;
var t$2116;
var v$1922 = 1;
switch (v$532) { case 0: {switch (v$1922) { case 0: {t$2116 = true;
 break; }default: {t$2116 = false;
} };
 break; }case 1: {switch (v$1922) { case 1: {t$2116 = true;
 break; }default: {t$2116 = false;
} };
 break; }case 2: {switch (v$1922) { case 2: {t$2116 = true;
 break; }default: {t$2116 = false;
} };
 break; } };
t$2117 = (t$2116?0:2);
t$2122 = [t$2121,t$2120,t$2119,t$2118,t$2117];
t$2123 = t$2122;
t$2134 = [t$2133,t$2132,t$2131,t$2123,2];
t$2135 = t$2134;
return [t$2135,true];
 break; }case 2: {return [[v$541,v$542,[v$554,v$555,v$556,v$543,0],v$544,1],false];
 break; }default: {return [[v$541,v$542,[v$554,v$555,v$556,v$543,2],v$544,2],true];
} };
} };
};
};
var balance2$559 = function(v$562){if (v$562 == null) {throw [basics$0OpacityEnv$1$3.en$Impossible$214,"OrderFinMap(balance2 on an empty map)"];
} else {var v$632 = v$562;
var v$633 = v$632[0];
var v$634 = v$632[1];
var v$635 = v$632[2];
var v$636 = v$632[3];
switch (v$632[4]) { case 0: {return [[v$633,v$634,v$635,v$636,2],true];
 break; }case 2: {return [[v$633,v$634,v$635,v$636,1],false];
 break; }default: {var v$619;
if (v$635 == null) {throw [basics$0OpacityEnv$1$3.en$Impossible$214,"OrderFinMapAVLfinmap 7"];
} else {v$619 = v$635;
};
var v$620 = v$619[0];
var v$621 = v$619[1];
var v$622 = v$619[2];
var v$623 = v$619[3];
switch (v$619[4]) { case 0: {var v$606;
if (v$623 == null) {throw [basics$0OpacityEnv$1$3.en$Impossible$214,"OrderFinMapAVLfinmap 8"];
} else {v$606 = v$623;
};
var v$607 = v$606[0];
var v$608 = v$606[1];
var v$609 = v$606[2];
var v$610 = v$606[3];
var v$611 = v$606[4];
var t$2155;
var t$2154;
var t$2153 = v$607;
var t$2152 = v$608;
var t$2151;
var t$2150;
var t$2149 = v$620;
var t$2148 = v$621;
var t$2147 = v$622;
var t$2146 = v$609;
var t$2145;
var t$2144;
var v$1932 = 0;
switch (v$611) { case 0: {switch (v$1932) { case 0: {t$2144 = true;
 break; }default: {t$2144 = false;
} };
 break; }case 1: {switch (v$1932) { case 1: {t$2144 = true;
 break; }default: {t$2144 = false;
} };
 break; }case 2: {switch (v$1932) { case 2: {t$2144 = true;
 break; }default: {t$2144 = false;
} };
 break; } };
t$2145 = (t$2144?1:2);
t$2150 = [t$2149,t$2148,t$2147,t$2146,t$2145];
t$2151 = t$2150;
var t$2143;
var t$2142;
var t$2141 = v$633;
var t$2140 = v$634;
var t$2139 = v$610;
var t$2138 = v$636;
var t$2137;
var t$2136;
var v$1930 = 1;
switch (v$611) { case 0: {switch (v$1930) { case 0: {t$2136 = true;
 break; }default: {t$2136 = false;
} };
 break; }case 1: {switch (v$1930) { case 1: {t$2136 = true;
 break; }default: {t$2136 = false;
} };
 break; }case 2: {switch (v$1930) { case 2: {t$2136 = true;
 break; }default: {t$2136 = false;
} };
 break; } };
t$2137 = (t$2136?0:2);
t$2142 = [t$2141,t$2140,t$2139,t$2138,t$2137];
t$2143 = t$2142;
t$2154 = [t$2153,t$2152,t$2151,t$2143,2];
t$2155 = t$2154;
return [t$2155,true];
 break; }case 2: {return [[v$620,v$621,v$622,[v$633,v$634,v$623,v$636,1],0],false];
 break; }default: {return [[v$620,v$621,v$622,[v$633,v$634,v$623,v$636,2],2],true];
} };
} };
};
};
var fix$2156 = {};
fix$2156.$remove_rightmost = function(v$641){if (v$641 == null) {throw [basics$0OpacityEnv$1$3.en$Impossible$214,"OrderFinMap(remove_rightmost on empty map)"];
} else {var v$657 = v$641;
var v$658 = v$657[3];
if (v$658 == null) {return [v$657[2],v$657[0],v$657[1],true];
} else {var v$683 = v$657[0];
var v$684 = v$657[1];
var v$685 = v$657[2];
var v$686 = v$657[4];
var v$678 = fix$2156.$remove_rightmost(v$658);
var v$679 = v$678[0];
var v$680 = v$678[1];
var v$681 = v$678[2];
if (v$678[3]) {var v$675 = balance2$559([v$683,v$684,v$685,v$679,v$686]);
return [v$675[0],v$680,v$681,v$675[1]];
} else {return [[v$683,v$684,v$685,v$679,v$686],v$680,v$681,false];
};
};
};
};
var remove_rightmost$638 = fix$2156.$remove_rightmost;
var fix$2157 = {};
fix$2157.$del = function(v$690){if (v$690 == null) {throw exn$NOTFOUND$474;
} else {var v$750 = v$690;
var v$751 = v$750[0];
var v$752 = v$750[1];
var v$753 = v$750[2];
var v$754 = v$750[3];
var v$755 = v$750[4];
if (basics$0OpacityEnv$1$2.lt$96(v$760,v$751)) {var v$711 = fix$2157.$del(v$753);
var v$712 = v$711[0];
if (v$711[1]) {return balance1$480([v$751,v$752,v$712,v$754,v$755]);
} else {return [[v$751,v$752,v$712,v$754,v$755],false];
};
} else {if (basics$0OpacityEnv$1$2.lt$96(v$751,v$760)) {var v$725 = fix$2157.$del(v$754);
var v$726 = v$725[0];
if (v$725[1]) {return balance2$559([v$751,v$752,v$753,v$726,v$755]);
} else {return [[v$751,v$752,v$753,v$726,v$755],false];
};
} else {if (v$754 == null) {return [v$753,true];
} else {if (v$753 == null) {return [v$754,true];
} else {var v$745 = remove_rightmost$638(v$753);
var v$746 = v$745[0];
var v$747 = v$745[1];
var v$748 = v$745[2];
if (v$745[3]) {return balance1$480([v$747,v$748,v$746,v$754,v$755]);
} else {return [[v$747,v$748,v$746,v$754,v$755],false];
};
};
};
};
};
};
};
var del$687 = fix$2157.$del;
return (del$687(v$761))[0];
};
basics$0OpacityEnv$1$3.remove$762 = function(v$770,v$771){try {return [0,delete$475(v$770,v$771)];
} catch(v$2158) {return (function(NOTFOUND$769){var t$2159 = NOTFOUND$769;
if (t$2159[0] == en$NOTFOUND$474) {return [1];
} else {throw NOTFOUND$769;
};
})(v$2158);
};
};
basics$0OpacityEnv$1$3.delete$772 = function(v$780,v$781){try {return delete$475(v$780,v$781);
} catch(v$2160) {return (function(NOTFOUND$779){var t$2161 = NOTFOUND$779;
if (t$2161[0] == en$NOTFOUND$474) {return v$781;
} else {throw NOTFOUND$779;
};
})(v$2160);
};
};
basics$0OpacityEnv$1$3.dom$782 = function(m$785){var fix$2162 = {};
fix$2162.$dom$ = function(v$789,v$792){lab$dom$: while (true) {if (v$789 == null) {return v$792;
} else {var v$804 = v$789;
var v$805 = v$804[0];
var v$806 = v$804[2];
var v$807 = v$804[3];
var t$2163 = v$806;
var t$2164 = [v$805,fix$2162.$dom$(v$807,v$792)];
var v$789 = t$2163;
var v$792 = t$2164;
continue lab$dom$;
};
};
};
var dom$$786 = fix$2162.$dom$;
return dom$$786(m$785,null);
};
basics$0OpacityEnv$1$3.range$809 = function(m$812){var fix$2165 = {};
fix$2165.$ran = function(v$816,v$819){lab$ran: while (true) {if (v$816 == null) {return v$819;
} else {var v$831 = v$816;
var v$832 = v$831[1];
var v$833 = v$831[2];
var v$834 = v$831[3];
var t$2166 = v$833;
var t$2167 = [v$832,fix$2165.$ran(v$834,v$819)];
var v$816 = t$2166;
var v$819 = t$2167;
continue lab$ran;
};
};
};
var ran$813 = fix$2165.$ran;
return ran$813(m$812,null);
};
basics$0OpacityEnv$1$3.list$836 = function(m$839){var fix$2168 = {};
fix$2168.$li = function(v$843,v$846){lab$li: while (true) {if (v$843 == null) {return v$846;
} else {var v$859 = v$843;
var v$860 = v$859[0];
var v$861 = v$859[1];
var v$862 = v$859[2];
var v$863 = v$859[3];
var t$2169 = v$862;
var t$2170 = [[v$860,v$861],fix$2168.$li(v$863,v$846)];
var v$843 = t$2169;
var v$846 = t$2170;
continue lab$li;
};
};
};
var li$840 = fix$2168.$li;
return li$840(m$839,null);
};
var fix$2171 = {};
fix$2171.$composemap = function(f$868,t$871){if (t$871 == null) {return null;
} else {var v$882 = t$871;
var v$883 = v$882[0];
var v$884 = v$882[1];
var v$885 = v$882[2];
var v$886 = v$882[3];
var v$887 = v$882[4];
var l$$881 = fix$2171.$composemap(f$868,v$885);
return [v$883,f$868(v$884),l$$881,fix$2171.$composemap(f$868,v$886),v$887];
};
};
basics$0OpacityEnv$1$3.composemap$865 = fix$2171.$composemap;
var fix$2172 = {};
fix$2172.$ComposeMap = function(f$891,t$894){if (t$894 == null) {return null;
} else {var v$905 = t$894;
var v$906 = v$905[0];
var v$907 = v$905[1];
var v$908 = v$905[2];
var v$909 = v$905[3];
var v$910 = v$905[4];
var l$$904 = fix$2172.$ComposeMap(f$891,v$908);
return [v$906,f$891([v$906,v$907]),l$$904,fix$2172.$ComposeMap(f$891,v$909),v$910];
};
};
basics$0OpacityEnv$1$3.ComposeMap$888 = fix$2172.$ComposeMap;
basics$0OpacityEnv$1$3.fold$911 = function(f$914,e$917,t$920){var fix$2173 = {};
fix$2173.$fold$ = function(v$924,v$927){lab$fold$: while (true) {if (v$924 == null) {return v$927;
} else {var v$939 = v$924;
var v$940 = v$939[1];
var v$941 = v$939[2];
var v$942 = v$939[3];
var t$2174 = v$942;
var t$2175 = f$914([v$940,fix$2173.$fold$(v$941,v$927)]);
var v$924 = t$2174;
var v$927 = t$2175;
continue lab$fold$;
};
};
};
var fold$$921 = fix$2173.$fold$;
return fold$$921(t$920,e$917);
};
basics$0OpacityEnv$1$3.Fold$944 = function(f$947,e$950,t$953){var fix$2176 = {};
fix$2176.$fold$ = function(v$957,v$960){lab$fold$: while (true) {if (v$957 == null) {return v$960;
} else {var v$973 = v$957;
var v$974 = v$973[0];
var v$975 = v$973[1];
var v$976 = v$973[2];
var v$977 = v$973[3];
var t$2177 = v$977;
var t$2178 = f$947([[v$974,v$975],fix$2176.$fold$(v$976,v$960)]);
var v$957 = t$2177;
var v$960 = t$2178;
continue lab$fold$;
};
};
};
var fold$$954 = fix$2176.$fold$;
return fold$$954(t$953,e$950);
};
basics$0OpacityEnv$1$3.filter$979 = function(f$982,t$985){var fix$2179 = {};
fix$2179.$fold$ = function(v$1694,v$1695){lab$fold$: while (true) {if (v$1694 == null) {return v$1695;
} else {var v$1698 = v$1694;
var v$1699 = v$1698[0];
var v$1700 = v$1698[1];
var v$1701 = v$1698[2];
var v$1702 = v$1698[3];
var t$2181 = v$1702;
var t$2180;
var v$2040 = fix$2179.$fold$(v$1701,v$1695);
t$2180 = ((f$982([v$1699,v$1700]))?(basics$0OpacityEnv$1$3.add$442(v$1699,v$1700,v$2040)):v$2040);
var t$2182 = t$2181;
var t$2183 = t$2180;
var v$1694 = t$2182;
var v$1695 = t$2183;
continue lab$fold$;
};
};
};
var fold$$1693 = fix$2179.$fold$;
return fold$$1693(t$985,basics$0OpacityEnv$1$3.empty$166(0));
};
var fix$2184 = {};
fix$2184.$addList = function(v$1002,v$1005){lab$addList: while (true) {if (v$1002 == null) {return v$1005;
} else {var v$1017 = v$1002;
var v$1018 = v$1017[0];
var v$1019 = v$1018[0];
var v$1020 = v$1018[1];
var v$1021 = v$1017[1];
var t$2185 = v$1021;
var t$2186 = basics$0OpacityEnv$1$3.add$442(v$1019,v$1020,v$1005);
var v$1002 = t$2185;
var v$1005 = t$2186;
continue lab$addList;
};
};
};
basics$0OpacityEnv$1$3.addList$999 = fix$2184.$addList;
basics$0OpacityEnv$1$3.fromList$1023 = function(l$1026){return basics$0OpacityEnv$1$3.addList$999(l$1026,basics$0OpacityEnv$1$3.empty$166(0));
};
basics$0OpacityEnv$1$3.fromSortedList$1027 = function(l$1030){var fix$2187 = {};
fix$2187.$build = function(v$1059,v$2051){switch (v$1059) { case 0: {return [v$2051,null];
 break; }default: {var n$$1061 = SmlPrims.div_i32(v$1059,2,CompilerInitial.exn$Div$47);
var v$1092 = fix$2187.$build(n$$1061,v$2051);
var v$1093 = v$1092[0];
var v$1094 = v$1092[1];
var v$1075;
if (v$1093 == null) {throw [basics$0OpacityEnv$1$3.en$Impossible$214,"OrderFinMapbuild"];
} else {var v$1087 = v$1093;
var v$1088 = v$1087[0];
v$1075 = [v$1088[0],v$1088[1],v$1087[1]];
};
var v$1076 = v$1075[0];
var v$1077 = v$1075[1];
var v$1078 = v$1075[2];
var v$1072 = fix$2187.$build(SmlPrims.chk_ovf_i32((SmlPrims.chk_ovf_i32(v$1059 - n$$1061)) - 1),v$1078);
return [v$1072[0],[v$1076,v$1077,v$1094,v$1072[1]]];
} };
};
var build$1048 = fix$2187.$build;
var fix$2188 = {};
fix$2188.$mk_avl = function(v$1110){if (v$1110 == null) {return [null,0];
} else {var v$1139 = v$1110;
var v$1140 = v$1139[0];
var v$1141 = v$1139[1];
var v$1142 = v$1139[2];
var v$1143 = v$1139[3];
var v$1136 = fix$2188.$mk_avl(v$1142);
var v$1137 = v$1136[0];
var v$1138 = v$1136[1];
var v$1133 = fix$2188.$mk_avl(v$1143);
var v$1134 = v$1133[0];
var v$1135 = v$1133[1];
return [[v$1140,v$1141,v$1137,v$1134,(v$1138 == v$1135)?2:((v$1138 > v$1135)?1:0)],SmlPrims.chk_ovf_i32(1 + ((v$1138 > v$1135)?v$1138:v$1135))];
};
};
var mk_avl$1107 = fix$2188.$mk_avl;
var t$2197;
var t$2196 = mk_avl$1107;
var t$2195;
var t$2194;
var t$2193 = build$1048;
var t$2192;
var fix$2189 = {};
fix$2189.$acc = function(v$1711,v$1712){lab$acc: while (true) {if (v$1711 == null) {return v$1712;
} else {var v$1713 = v$1711;
var v$1714 = v$1713[1];
var t$2190 = v$1714;
var t$2191 = SmlPrims.chk_ovf_i32(v$1712 + 1);
var v$1711 = t$2190;
var v$1712 = t$2191;
continue lab$acc;
};
};
};
var acc$1710 = fix$2189.$acc;
t$2192 = (acc$1710(l$1030,0));
t$2194 = (t$2193(t$2192,l$1030));
t$2195 = t$2194[1];
t$2197 = (t$2196(t$2195));
return t$2197[0];
};
basics$0OpacityEnv$1$3.mergeMap$1152 = function(f$1155,t1$1158,t2$1161){var fix$2198 = {};
fix$2198.$merge = function(v$1182,v$2052){if (v$1182 == null) {return v$2052;
} else {if (v$2052 == null) {return v$1182;
} else {var v$1193 = v$1182;
var v$1194 = v$1193[0];
var v$1195 = v$1194[0];
var v$1196 = v$1194[1];
var v$1197 = v$1193[1];
var v$1198 = v$2052;
var v$1199 = v$1198[0];
var v$1200 = v$1199[0];
var v$1201 = v$1199[1];
var v$1202 = v$1198[1];
return (basics$0OpacityEnv$1$2.lt$96(v$1195,v$1200))?[[v$1195,v$1196],fix$2198.$merge(v$1197,v$2052)]:((basics$0OpacityEnv$1$2.lt$96(v$1200,v$1195))?[[v$1200,v$1201],fix$2198.$merge(v$1182,v$1202)]:[[v$1195,f$1155([v$1196,v$1201])],fix$2198.$merge(v$1197,v$1202)]);
};
};
};
var merge$1162 = fix$2198.$merge;
var t$2209 = basics$0OpacityEnv$1$3.fromSortedList$1027;
var t$2208;
var t$2207 = merge$1162;
var t$2206;
var fix$2203 = {};
fix$2203.$li = function(v$1723,v$1724){lab$li: while (true) {if (v$1723 == null) {return v$1724;
} else {var v$1727 = v$1723;
var v$1728 = v$1727[0];
var v$1729 = v$1727[1];
var v$1730 = v$1727[2];
var v$1731 = v$1727[3];
var t$2204 = v$1730;
var t$2205 = [[v$1728,v$1729],fix$2203.$li(v$1731,v$1724)];
var v$1723 = t$2204;
var v$1724 = t$2205;
continue lab$li;
};
};
};
var li$1722 = fix$2203.$li;
t$2206 = (li$1722(t1$1158,null));
var t$2202;
var fix$2199 = {};
fix$2199.$li = function(v$1735,v$1736){lab$li: while (true) {if (v$1735 == null) {return v$1736;
} else {var v$1739 = v$1735;
var v$1740 = v$1739[0];
var v$1741 = v$1739[1];
var v$1742 = v$1739[2];
var v$1743 = v$1739[3];
var t$2200 = v$1742;
var t$2201 = [[v$1740,v$1741],fix$2199.$li(v$1743,v$1736)];
var v$1735 = t$2200;
var v$1736 = t$2201;
continue lab$li;
};
};
};
var li$1734 = fix$2199.$li;
t$2202 = (li$1734(t2$1161,null));
t$2208 = (t$2207(t$2206,t$2202));
return t$2209(t$2208);
};
var fix$2210 = {};
fix$2210.$oneForWhich = function(f$1206,t$1209){lab$oneForWhich: while (true) {if (t$1209 == null) {return [1];
} else {var v$1229 = t$1209;
var v$1230 = v$1229[0];
var v$1231 = v$1229[1];
var v$1232 = v$1229[2];
var v$1233 = v$1229[3];
if (f$1206([v$1230,v$1231])) {return [0,[v$1230,v$1231]];
} else {var v$1226 = fix$2210.$oneForWhich(f$1206,v$1232);
switch (v$1226[0]) { case 0: {var v$1228 = v$1226[1];
return [0,v$1228];
 break; }default: {var t$2211 = f$1206;
var t$2212 = v$1233;
var f$1206 = t$2211;
var t$1209 = t$2212;
continue lab$oneForWhich;
} };
};
};
};
};
basics$0OpacityEnv$1$3.oneForWhich$1203 = fix$2210.$oneForWhich;
basics$0OpacityEnv$1$3.en$Restrict$1234 = new String("Restrict");
basics$0OpacityEnv$1$3.restrict$1235 = function(v$1254,v$1255,v$1256){var fix$2213 = {};
fix$2213.$foldl = function(v$1749,v$1750){lab$foldl: while (true) {if (v$1750 == null) {return v$1749;
} else {var v$1751 = v$1750;
var v$1752 = v$1751[0];
var v$1753 = v$1751[1];
var t$2217;
var v$2005;
var fix$2214 = {};
fix$2214.$search = function(v$2007){lab$search: while (true) {if (v$2007 == null) {return [1];
} else {var v$2008 = v$2007;
var v$2009 = v$2008[0];
var v$2010 = v$2008[1];
var v$2011 = v$2008[2];
var v$2012 = v$2008[3];
if (basics$0OpacityEnv$1$2.lt$96(v$1752,v$2009)) {var t$2215 = v$2011;
var v$2007 = t$2215;
continue lab$search;
} else {if (basics$0OpacityEnv$1$2.lt$96(v$2009,v$1752)) {var t$2216 = v$2012;
var v$2007 = t$2216;
continue lab$search;
} else {return [0,v$2010];
};
};
};
};
};
var search$2006 = fix$2214.$search;
v$2005 = (search$2006(v$1255));
switch (v$2005[0]) { case 0: {var v$2013 = v$2005[1];
t$2217 = (basics$0OpacityEnv$1$3.add$442(v$1752,v$2013,v$1749));
 break; }default: {throw [basics$0OpacityEnv$1$3.en$Restrict$1234,v$1254(v$1752)];
} };
var t$2218 = t$2217;
var t$2219 = v$1753;
var v$1749 = t$2218;
var v$1750 = t$2219;
continue lab$foldl;
};
};
};
var foldl$1748 = fix$2213.$foldl;
return foldl$1748(basics$0OpacityEnv$1$3.empty$166(0),v$1256);
};
basics$0OpacityEnv$1$3.enrich$1257 = function(en$1260,v$1264){var v$1285 = v$1264[0];
var v$1286 = v$1264[1];
var fix$2220 = {};
fix$2220.$fold$ = function(v$1773,v$1774){lab$fold$: while (true) {if (v$1773 == null) {return v$1774;
} else {var v$1777 = v$1773;
var v$1778 = v$1777[0];
var v$1779 = v$1777[1];
var v$1780 = v$1777[2];
var v$1781 = v$1777[3];
var t$2225 = v$1781;
var t$2224;
if (fix$2220.$fold$(v$1780,v$1774)) {var v$2018;
var fix$2221 = {};
fix$2221.$search = function(v$2020){lab$search: while (true) {if (v$2020 == null) {return [1];
} else {var v$2021 = v$2020;
var v$2022 = v$2021[0];
var v$2023 = v$2021[1];
var v$2024 = v$2021[2];
var v$2025 = v$2021[3];
if (basics$0OpacityEnv$1$2.lt$96(v$1778,v$2022)) {var t$2222 = v$2024;
var v$2020 = t$2222;
continue lab$search;
} else {if (basics$0OpacityEnv$1$2.lt$96(v$2022,v$1778)) {var t$2223 = v$2025;
var v$2020 = t$2223;
continue lab$search;
} else {return [0,v$2023];
};
};
};
};
};
var search$2019 = fix$2221.$search;
v$2018 = (search$2019(v$1285));
switch (v$2018[0]) { case 0: {var v$2026 = v$2018[1];
t$2224 = (en$1260([v$2026,v$1779]));
 break; }default: {t$2224 = false;
} };
} else {t$2224 = false;
};
var t$2226 = t$2225;
var t$2227 = t$2224;
var v$1773 = t$2226;
var v$1774 = t$2227;
continue lab$fold$;
};
};
};
var fold$$1772 = fix$2220.$fold$;
return fold$$1772(v$1286,true);
};
basics$0OpacityEnv$1$3.layoutMap$1287 = function(v$1320,v$1322,v$1321,v$1319){return function(layoutDom$1296){return function(layoutRan$1299){return function(m$1302){var t$2235;
var t$2234;
var t$2233 = basis$0List$1.map$697;
var t$2232 = function(v$1306){var v$1312 = v$1306[0];
var v$1313 = v$1306[1];
return [0,[[layoutDom$1296(v$1312),[layoutRan$1299(v$1313),null]],[0,v$1320],"",3,""]];
};
var t$2231;
var fix$2228 = {};
fix$2228.$li = function(v$1800,v$1801){lab$li: while (true) {if (v$1800 == null) {return v$1801;
} else {var v$1804 = v$1800;
var v$1805 = v$1804[0];
var v$1806 = v$1804[1];
var v$1807 = v$1804[2];
var v$1808 = v$1804[3];
var t$2229 = v$1807;
var t$2230 = [[v$1805,v$1806],fix$2228.$li(v$1808,v$1801)];
var v$1800 = t$2229;
var v$1801 = t$2230;
continue lab$li;
};
};
};
var li$1799 = fix$2228.$li;
t$2231 = (li$1799(m$1302,null));
t$2234 = (t$2233(t$2232,t$2231));
t$2235 = [t$2234,[0,v$1321],v$1322,3,v$1319];
return [0,t$2235];
};
};
};
};
basics$0OpacityEnv$1$3.reportMap$1323 = function(f$1326,t$1329){var t$2243 = tools$0Report$1.flatten$87;
var t$2242;
var t$2241 = basis$0List$1.map$697;
var t$2240 = f$1326;
var t$2239;
var fix$2236 = {};
fix$2236.$li = function(v$1812,v$1813){lab$li: while (true) {if (v$1812 == null) {return v$1813;
} else {var v$1816 = v$1812;
var v$1817 = v$1816[0];
var v$1818 = v$1816[1];
var v$1819 = v$1816[2];
var v$1820 = v$1816[3];
var t$2237 = v$1819;
var t$2238 = [[v$1817,v$1818],fix$2236.$li(v$1820,v$1813)];
var v$1812 = t$2237;
var v$1813 = t$2238;
continue lab$li;
};
};
};
var li$1811 = fix$2236.$li;
t$2239 = (li$1811(t$1329,null));
t$2242 = (t$2241(t$2240,t$2239));
return t$2243(t$2242);
};
basics$0OpacityEnv$1$3.reportMapSORTED$1330 = function(f$1822,t$1823){var t$2251 = tools$0Report$1.flatten$87;
var t$2250;
var t$2249 = basis$0List$1.map$697;
var t$2248 = f$1822;
var t$2247;
var fix$2244 = {};
fix$2244.$li = function(v$1826,v$1827){lab$li: while (true) {if (v$1826 == null) {return v$1827;
} else {var v$1830 = v$1826;
var v$1831 = v$1830[0];
var v$1832 = v$1830[1];
var v$1833 = v$1830[2];
var v$1834 = v$1830[3];
var t$2245 = v$1833;
var t$2246 = [[v$1831,v$1832],fix$2244.$li(v$1834,v$1827)];
var v$1826 = t$2245;
var v$1827 = t$2246;
continue lab$li;
};
};
};
var li$1825 = fix$2244.$li;
t$2247 = (li$1825(t$1823,null));
t$2250 = (t$2249(t$2248,t$2247));
return t$2251(t$2250);
};
basics$0OpacityEnv$1$3.pu_bal$1331 = pickle$0pickle$1.enumGen$2158(function(v$1836){var v$1837 = v$1836[0];
var v$1838 = v$1836[1];
switch (v$1837) { case 0: {switch (v$1838) { case 0: {return true;
 break; }default: {return false;
} };
 break; }case 1: {switch (v$1838) { case 1: {return true;
 break; }default: {return false;
} };
 break; }case 2: {switch (v$1838) { case 2: {return true;
 break; }default: {return false;
} };
 break; } };
},["OrderFinMap.bal",[1,[2,[0,null]]]]);
basics$0OpacityEnv$1$3.pu$1332 = function(pu_dom$1335,pu_r$1338){var fun_E$1347;
var v$2055 = null;
fun_E$1347 = (function(v$2056){return pickle$0pickle$1.con0$1988(v$2055,v$2056);
});
return pickle$0pickle$1.dataGen$1488(["OrderFinMap.map",function(v$1841){return (v$1841 == null)?0:1;
},[fun_E$1347,[function(pu$1842){return pickle$0pickle$1.con1$2014(function(v$1843){var v$1844 = v$1843[0];
return [v$1844[0],v$1844[1],v$1844[2],v$1844[3],v$1843[1]];
},function(v$1845){if (v$1845 == null) {return tools$0Crash$1.impossible$59("OrderFinMap.pu.fun_N");
} else {var v$1846 = v$1845;
return [[v$1846[0],v$1846[1],v$1846[2],v$1846[3]],v$1846[4]];
};
},pickle$0pickle$1.pairGen0$983(pickle$0pickle$1.tup4Gen0$2377(pu_dom$1335,pu_r$1338,pu$1842,pu$1842),basics$0OpacityEnv$1$3.pu_bal$1331));
},null]]]);
};
return 0;
})();
