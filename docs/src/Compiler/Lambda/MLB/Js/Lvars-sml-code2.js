if ((typeof(compiler_objects$0Lvars$1$2)) == "undefined") {compiler_objects$0Lvars$1$2 = {};
};
(function(){compiler_objects$0Lvars$1$2.die$486 = function(s$489){return tools$0Crash$1.impossible$59("QuasiMap2." + s$489);
};
compiler_objects$0Lvars$1$2.key$490 = function(v$1856,v$1857,v$1858,v$1859,v$1860,v$1861){return v$1858[0][1];
};
compiler_objects$0Lvars$1$2.rigid$494 = function(v$1862,v$1863,v$1864,v$1865,v$1866,v$1867){return v$1864[0][2];
};
compiler_objects$0Lvars$1$2.empty$502 = function(v$1890){return null;
};
compiler_objects$0Lvars$1$2.singleton$503 = function(v$514,v$515){var nd$508 = v$514[2];
var k$509 = nd$508[0][1];
return nd$508[0][2]?[[0,tools$0IntStringFinMap$1.singleton$118(k$509,[v$514,v$515])]]:[[1,[tools$0IntStringFinMap$1.singleton$118(k$509,[v$514,v$515]),special_objects$0Name$1.current_matchcount$69(0)]]];
};
compiler_objects$0Lvars$1$2.isEmpty$516 = function(v$519){return (v$519 == null)?true:false;
};
compiler_objects$0Lvars$1$2.imap$524 = function(v$527){if (v$527 == null) {return [1];
} else {var v$536 = v$527;
switch (v$536[0][0]) { case 0: {var v$538 = v$536[0][1];
return [0,v$538];
 break; }default: {var v$539 = v$536[0][1];
var v$540 = v$539[0];
return [0,v$540];
} };
};
};
compiler_objects$0Lvars$1$2.imap$$541 = function(v$544){if (v$544 == null) {return tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible");
} else {var v$554 = v$544;
switch (v$554[0][0]) { case 0: {return v$554[0][1];
 break; }default: {return v$554[0][1][0];
} };
};
};
compiler_objects$0Lvars$1$2.ensure_consistent_imap$559 = function(imap$562){var v$582 = tools$0IntStringFinMap$1.Fold$78(function(v$590){var v$599 = v$590[0];
var v$600 = v$599[0];
var v$601 = v$599[1];
var v$602 = v$601[0];
var v$603 = v$590[1];
var v$604 = v$603[0];
var v$605 = v$603[1];
var t$1891;
if (v$604) {var v$1545 = v$602[2][0][1];
t$1891 = ((v$1545[0] == v$600[0])?(v$1545[1] == v$600[1]):false);
} else {t$1891 = false;
};
return [t$1891,v$605?v$602[2][0][2]:false];
},[true,true],imap$562);
var v$583 = v$582[0];
var v$584 = v$582[1];
return [v$583?imap$562:(tools$0IntStringFinMap$1.fold$62(function(v$575){var v$576 = v$575[0];
var v$577 = v$576[0];
var v$578 = v$576[1];
var v$579 = v$575[1];
return tools$0IntStringFinMap$1.add$237(v$577[2][0][1],[v$577,v$578],v$579);
},tools$0IntStringFinMap$1.empty$117(0),imap$562)),v$584];
};
compiler_objects$0Lvars$1$2.ensure_consistent$606 = function(v$609){if (v$609 == null) {return v$609;
} else {var v$622 = v$609;
switch (v$622[0][0]) { case 0: {return v$609;
 break; }default: {var v$642 = v$622[0][1];
var v$643 = v$642[0];
var v$644 = v$642[1];
if (v$644 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$639 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$559(v$643);
var v$640 = v$639[1];
var v$641 = v$639[0];
if (v$640) {(v$622[0] = [0,v$641],0);
return v$609;
} else {(v$622[0] = [1,[v$641,special_objects$0Name$1.current_matchcount$69(0)]],0);
return v$609;
};
} else {return v$609;
};
} };
};
};
compiler_objects$0Lvars$1$2.mk_flex$645 = function(imap$648){return [[1,[imap$648,special_objects$0Name$1.current_matchcount$69(0)]]];
};
compiler_objects$0Lvars$1$2.mk_rigid$649 = function(imap$652){return [[0,imap$652]];
};
compiler_objects$0Lvars$1$2.lookup$653 = function(m$656,d$659){var v$664;
if (m$656 == null) {m$656;
} else {var v$1624 = m$656;
switch (v$1624[0][0]) { case 0: {m$656;
 break; }default: {var v$1625 = v$1624[0][1];
var v$1626 = v$1625[0];
var v$1627 = v$1625[1];
if (v$1627 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$1628 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$559(v$1626);
var v$1629 = v$1628[1];
var v$1630 = v$1628[0];
if (v$1629) {(v$1624[0] = [0,v$1630],0);
m$656;
} else {(v$1624[0] = [1,[v$1630,special_objects$0Name$1.current_matchcount$69(0)]],0);
m$656;
};
} else {m$656;
};
} };
};
if (m$656 == null) {v$664 = [1];
} else {var v$1325 = m$656;
switch (v$1325[0][0]) { case 0: {var v$1326 = v$1325[0][1];
v$664 = [0,v$1326];
 break; }default: {var v$1327 = v$1325[0][1];
var v$1328 = v$1327[0];
v$664 = [0,v$1328];
} };
};
switch (v$664[0]) { case 0: {var v$674 = v$664[1];
var v$670 = tools$0IntStringFinMap$1.lookup$129(v$674,d$659[2][0][1]);
switch (v$670[0]) { case 0: {var v$672 = v$670[1];
var v$673 = v$672[1];
return [0,v$673];
 break; }default: {return [1];
} };
 break; }default: {return [1];
} };
};
compiler_objects$0Lvars$1$2.add$675 = function(v$700,v$701,v$702){if (v$702 == null) {v$702;
} else {var v$1632 = v$702;
switch (v$1632[0][0]) { case 0: {v$702;
 break; }default: {var v$1633 = v$1632[0][1];
var v$1634 = v$1633[0];
var v$1635 = v$1633[1];
if (v$1635 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$1636 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$559(v$1634);
var v$1637 = v$1636[1];
var v$1638 = v$1636[0];
if (v$1637) {(v$1632[0] = [0,v$1638],0);
v$702;
} else {(v$1632[0] = [1,[v$1638,special_objects$0Name$1.current_matchcount$69(0)]],0);
v$702;
};
} else {v$702;
};
} };
};
if (v$702 == null) {var nd$1333 = v$700[2];
var k$1334 = nd$1333[0][1];
return nd$1333[0][2]?[[0,tools$0IntStringFinMap$1.singleton$118(k$1334,[v$700,v$701])]]:[[1,[tools$0IntStringFinMap$1.singleton$118(k$1334,[v$700,v$701]),special_objects$0Name$1.current_matchcount$69(0)]]];
} else {var v$689 = v$702;
switch (v$689[0][0]) { case 0: {var v$697 = v$689[0][1];
var nd$691 = v$700[2];
var i$692 = nd$691[0][1];
return nd$691[0][2]?[[0,tools$0IntStringFinMap$1.add$237(i$692,[v$700,v$701],v$697)]]:[[1,[tools$0IntStringFinMap$1.add$237(i$692,[v$700,v$701],v$697),special_objects$0Name$1.current_matchcount$69(0)]]];
 break; }default: {var v$698 = v$689[0][1];
var v$699 = v$698[0];
return [[1,[tools$0IntStringFinMap$1.add$237(v$700[2][0][1],[v$700,v$701],v$699),special_objects$0Name$1.current_matchcount$69(0)]]];
} };
};
};
compiler_objects$0Lvars$1$2.plus$703 = function(v$737,v$738){if (v$737 == null) {v$737;
} else {var v$1640 = v$737;
switch (v$1640[0][0]) { case 0: {v$737;
 break; }default: {var v$1641 = v$1640[0][1];
var v$1642 = v$1641[0];
var v$1643 = v$1641[1];
if (v$1643 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$1644 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$559(v$1642);
var v$1645 = v$1644[1];
var v$1646 = v$1644[0];
if (v$1645) {(v$1640[0] = [0,v$1646],0);
v$737;
} else {(v$1640[0] = [1,[v$1646,special_objects$0Name$1.current_matchcount$69(0)]],0);
v$737;
};
} else {v$737;
};
} };
};
if (v$738 == null) {v$738;
} else {var v$1648 = v$738;
switch (v$1648[0][0]) { case 0: {v$738;
 break; }default: {var v$1649 = v$1648[0][1];
var v$1650 = v$1649[0];
var v$1651 = v$1649[1];
if (v$1651 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$1652 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$559(v$1650);
var v$1653 = v$1652[1];
var v$1654 = v$1652[0];
if (v$1653) {(v$1648[0] = [0,v$1654],0);
v$738;
} else {(v$1648[0] = [1,[v$1654,special_objects$0Name$1.current_matchcount$69(0)]],0);
v$738;
};
} else {v$738;
};
} };
};
if (v$737 == null) {return v$738;
} else {if (v$738 == null) {return v$737;
} else {var v$728 = v$737;
switch (v$728[0][0]) { case 0: {var v$730 = v$738;
switch (v$730[0][0]) { case 0: {var v$732 = v$728[0][1];
var v$733 = v$730[0][1];
return [[0,tools$0IntStringFinMap$1.plus$255(v$732,v$733)]];
 break; }default: {var t$1898;
var t$1897;
var t$1896;
var t$1895;
var t$1894 = tools$0IntStringFinMap$1.plus$255;
var t$1893;
if (v$737 == null) {t$1893 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$1656 = v$737;
switch (v$1656[0][0]) { case 0: {t$1893 = v$1656[0][1];
 break; }default: {t$1893 = v$1656[0][1][0];
} };
};
var t$1892;
if (v$738 == null) {t$1892 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$1657 = v$738;
switch (v$1657[0][0]) { case 0: {t$1892 = v$1657[0][1];
 break; }default: {t$1892 = v$1657[0][1][0];
} };
};
t$1895 = (t$1894(t$1893,t$1892));
t$1896 = [t$1895,special_objects$0Name$1.current_matchcount$69(0)];
t$1897 = [1,t$1896];
t$1898 = [t$1897];
return t$1898;
} };
 break; }default: {var t$1905;
var t$1904;
var t$1903;
var t$1902;
var t$1901 = tools$0IntStringFinMap$1.plus$255;
var t$1900;
if (v$737 == null) {t$1900 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$1659 = v$737;
switch (v$1659[0][0]) { case 0: {t$1900 = v$1659[0][1];
 break; }default: {t$1900 = v$1659[0][1][0];
} };
};
var t$1899;
if (v$738 == null) {t$1899 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$1660 = v$738;
switch (v$1660[0][0]) { case 0: {t$1899 = v$1660[0][1];
 break; }default: {t$1899 = v$1660[0][1][0];
} };
};
t$1902 = (t$1901(t$1900,t$1899));
t$1903 = [t$1902,special_objects$0Name$1.current_matchcount$69(0)];
t$1904 = [1,t$1903];
t$1905 = [t$1904];
return t$1905;
} };
};
};
};
compiler_objects$0Lvars$1$2.remove$739 = function(v$780,v$781){if (v$781 == null) {v$781;
} else {var v$1662 = v$781;
switch (v$1662[0][0]) { case 0: {v$781;
 break; }default: {var v$1663 = v$1662[0][1];
var v$1664 = v$1663[0];
var v$1665 = v$1663[1];
if (v$1665 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$1666 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$559(v$1664);
var v$1667 = v$1666[1];
var v$1668 = v$1666[0];
if (v$1667) {(v$1662[0] = [0,v$1668],0);
v$781;
} else {(v$1662[0] = [1,[v$1668,special_objects$0Name$1.current_matchcount$69(0)]],0);
v$781;
};
} else {v$781;
};
} };
};
if (v$781 == null) {return [1];
} else {var v$753 = v$781;
switch (v$753[0][0]) { case 0: {var v$766 = v$753[0][1];
var v$759 = tools$0IntStringFinMap$1.remove$262(v$780[2][0][1],v$766);
switch (v$759[0]) { case 0: {var v$765 = v$759[1];
return ((tools$0IntStringFinMap$1.isEmpty$128(0))(v$765))?[0,null]:[0,[[0,v$765]]];
 break; }default: {return [1];
} };
 break; }default: {var v$778 = v$753[0][1];
var v$779 = v$778[0];
var v$771 = tools$0IntStringFinMap$1.remove$262(v$780[2][0][1],v$779);
switch (v$771[0]) { case 0: {var v$777 = v$771[1];
return ((tools$0IntStringFinMap$1.isEmpty$128(0))(v$777))?[0,null]:[0,[[1,[v$777,special_objects$0Name$1.current_matchcount$69(0)]]]];
 break; }default: {return [1];
} };
} };
};
};
compiler_objects$0Lvars$1$2.dom$782 = function(v$785){if (v$785 == null) {return null;
} else {var t$1910 = basis$0List$1.map$697;
var t$1909 = function(v$793){return v$793[0];
};
var t$1908;
var t$1907 = tools$0IntStringFinMap$1.range$284;
var t$1906;
if (v$785 == null) {v$785;
} else {var v$1670 = v$785;
switch (v$1670[0][0]) { case 0: {v$785;
 break; }default: {var v$1671 = v$1670[0][1];
var v$1672 = v$1671[0];
var v$1673 = v$1671[1];
if (v$1673 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$1674 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$559(v$1672);
var v$1675 = v$1674[1];
var v$1676 = v$1674[0];
if (v$1675) {(v$1670[0] = [0,v$1676],0);
v$785;
} else {(v$1670[0] = [1,[v$1676,special_objects$0Name$1.current_matchcount$69(0)]],0);
v$785;
};
} else {v$785;
};
} };
};
if (v$785 == null) {t$1906 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$1357 = v$785;
switch (v$1357[0][0]) { case 0: {t$1906 = v$1357[0][1];
 break; }default: {t$1906 = v$1357[0][1][0];
} };
};
t$1908 = (t$1907(t$1906));
return t$1910(t$1909,t$1908);
};
};
compiler_objects$0Lvars$1$2.range$795 = function(v$798){if (v$798 == null) {return null;
} else {var t$1915 = basis$0List$1.map$697;
var t$1914 = function(v$806){return v$806[1];
};
var t$1913;
var t$1912 = tools$0IntStringFinMap$1.range$284;
var t$1911;
if (v$798 == null) {v$798;
} else {var v$1678 = v$798;
switch (v$1678[0][0]) { case 0: {v$798;
 break; }default: {var v$1679 = v$1678[0][1];
var v$1680 = v$1679[0];
var v$1681 = v$1679[1];
if (v$1681 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$1682 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$559(v$1680);
var v$1683 = v$1682[1];
var v$1684 = v$1682[0];
if (v$1683) {(v$1678[0] = [0,v$1684],0);
v$798;
} else {(v$1678[0] = [1,[v$1684,special_objects$0Name$1.current_matchcount$69(0)]],0);
v$798;
};
} else {v$798;
};
} };
};
if (v$798 == null) {t$1911 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$1361 = v$798;
switch (v$1361[0][0]) { case 0: {t$1911 = v$1361[0][1];
 break; }default: {t$1911 = v$1361[0][1][0];
} };
};
t$1913 = (t$1912(t$1911));
return t$1915(t$1914,t$1913);
};
};
compiler_objects$0Lvars$1$2.list$808 = function(v$811){if (v$811 == null) {return null;
} else {var t$1917 = tools$0IntStringFinMap$1.range$284;
var t$1916;
if (v$811 == null) {v$811;
} else {var v$1686 = v$811;
switch (v$1686[0][0]) { case 0: {v$811;
 break; }default: {var v$1687 = v$1686[0][1];
var v$1688 = v$1687[0];
var v$1689 = v$1687[1];
if (v$1689 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$1690 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$559(v$1688);
var v$1691 = v$1690[1];
var v$1692 = v$1690[0];
if (v$1691) {(v$1686[0] = [0,v$1692],0);
v$811;
} else {(v$1686[0] = [1,[v$1692,special_objects$0Name$1.current_matchcount$69(0)]],0);
v$811;
};
} else {v$811;
};
} };
};
if (v$811 == null) {t$1916 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$1365 = v$811;
switch (v$1365[0][0]) { case 0: {t$1916 = v$1365[0][1];
 break; }default: {t$1916 = v$1365[0][1][0];
} };
};
return t$1917(t$1916);
};
};
compiler_objects$0Lvars$1$2.fromList$817 = function(v$820){if (v$820 == null) {return null;
} else {var v$833;
var b$1369 = [tools$0IntStringFinMap$1.empty$117(0),true];
var fix$1918 = {};
fix$1918.$foldl = function(v$1372,v$1373){lab$foldl: while (true) {if (v$1373 == null) {return v$1372;
} else {var v$1374 = v$1373;
var v$1375 = v$1374[0];
var v$1376 = v$1374[1];
var t$1919;
var v$1695 = v$1375[0];
var v$1696 = v$1375[1];
var v$1698 = v$1372[0];
var v$1699 = v$1372[1];
t$1919 = [tools$0IntStringFinMap$1.add$237(v$1695[2][0][1],[v$1695,v$1696],v$1698),v$1699?v$1695[2][0][2]:false];
var t$1920 = t$1919;
var t$1921 = v$1376;
var v$1372 = t$1920;
var v$1373 = t$1921;
continue lab$foldl;
};
};
};
var foldl$1371 = fix$1918.$foldl;
v$833 = (foldl$1371(b$1369,v$820));
var v$834 = v$833[0];
return v$833[1]?[[0,v$834]]:[[1,[v$834,special_objects$0Name$1.current_matchcount$69(0)]]];
};
};
compiler_objects$0Lvars$1$2.composemap$852 = function(f$855,m$858){var v$863;
if (m$858 == null) {v$863 = null;
} else {var t$1923 = tools$0IntStringFinMap$1.range$284;
var t$1922;
if (m$858 == null) {m$858;
} else {var v$1701 = m$858;
switch (v$1701[0][0]) { case 0: {m$858;
 break; }default: {var v$1702 = v$1701[0][1];
var v$1703 = v$1702[0];
var v$1704 = v$1702[1];
if (v$1704 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$1705 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$559(v$1703);
var v$1706 = v$1705[1];
var v$1707 = v$1705[0];
if (v$1706) {(v$1701[0] = [0,v$1707],0);
m$858;
} else {(v$1701[0] = [1,[v$1707,special_objects$0Name$1.current_matchcount$69(0)]],0);
m$858;
};
} else {m$858;
};
} };
};
if (m$858 == null) {t$1922 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$1383 = m$858;
switch (v$1383[0][0]) { case 0: {t$1922 = v$1383[0][1];
 break; }default: {t$1922 = v$1383[0][1][0];
} };
};
v$863 = (t$1923(t$1922));
};
if (v$863 == null) {return null;
} else {var v$871;
var b$1386 = [tools$0IntStringFinMap$1.empty$117(0),true];
var fix$1924 = {};
fix$1924.$foldl = function(v$1389,v$1390){lab$foldl: while (true) {if (v$1390 == null) {return v$1389;
} else {var v$1391 = v$1390;
var v$1392 = v$1391[0];
var v$1393 = v$1391[1];
var t$1925;
var v$1710 = v$1392[0];
var v$1711 = v$1392[1];
var v$1713 = v$1389[0];
var v$1714 = v$1389[1];
t$1925 = [tools$0IntStringFinMap$1.add$237(v$1710[2][0][1],[v$1710,f$855(v$1711)],v$1713),v$1714?v$1710[2][0][2]:false];
var t$1926 = t$1925;
var t$1927 = v$1393;
var v$1389 = t$1926;
var v$1390 = t$1927;
continue lab$foldl;
};
};
};
var foldl$1388 = fix$1924.$foldl;
v$871 = (foldl$1388(b$1386,v$863));
var v$872 = v$871[0];
return v$871[1]?[[0,v$872]]:[[1,[v$872,special_objects$0Name$1.current_matchcount$69(0)]]];
};
};
compiler_objects$0Lvars$1$2.ComposeMap$890 = function(f$893,m$896){var v$901;
if (m$896 == null) {v$901 = null;
} else {var t$1929 = tools$0IntStringFinMap$1.range$284;
var t$1928;
if (m$896 == null) {m$896;
} else {var v$1716 = m$896;
switch (v$1716[0][0]) { case 0: {m$896;
 break; }default: {var v$1717 = v$1716[0][1];
var v$1718 = v$1717[0];
var v$1719 = v$1717[1];
if (v$1719 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$1720 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$559(v$1718);
var v$1721 = v$1720[1];
var v$1722 = v$1720[0];
if (v$1721) {(v$1716[0] = [0,v$1722],0);
m$896;
} else {(v$1716[0] = [1,[v$1722,special_objects$0Name$1.current_matchcount$69(0)]],0);
m$896;
};
} else {m$896;
};
} };
};
if (m$896 == null) {t$1928 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$1400 = m$896;
switch (v$1400[0][0]) { case 0: {t$1928 = v$1400[0][1];
 break; }default: {t$1928 = v$1400[0][1][0];
} };
};
v$901 = (t$1929(t$1928));
};
if (v$901 == null) {return null;
} else {var v$909;
var b$1403 = [tools$0IntStringFinMap$1.empty$117(0),true];
var fix$1930 = {};
fix$1930.$foldl = function(v$1406,v$1407){lab$foldl: while (true) {if (v$1407 == null) {return v$1406;
} else {var v$1408 = v$1407;
var v$1409 = v$1408[0];
var v$1410 = v$1408[1];
var t$1931;
var v$1725 = v$1409[0];
var v$1726 = v$1409[1];
var v$1728 = v$1406[0];
var v$1729 = v$1406[1];
t$1931 = [tools$0IntStringFinMap$1.add$237(v$1725[2][0][1],[v$1725,f$893([v$1725,v$1726])],v$1728),v$1729?v$1725[2][0][2]:false];
var t$1932 = t$1931;
var t$1933 = v$1410;
var v$1406 = t$1932;
var v$1407 = t$1933;
continue lab$foldl;
};
};
};
var foldl$1405 = fix$1930.$foldl;
v$909 = (foldl$1405(b$1403,v$901));
var v$910 = v$909[0];
return v$909[1]?[[0,v$910]]:[[1,[v$910,special_objects$0Name$1.current_matchcount$69(0)]]];
};
};
compiler_objects$0Lvars$1$2.fold$928 = function(f$931,b$934,m$937){var c$1417;
if (m$937 == null) {c$1417 = null;
} else {var t$1938 = basis$0List$1.map$697;
var t$1937 = function(v$1425){return v$1425[1];
};
var t$1936;
var t$1935 = tools$0IntStringFinMap$1.range$284;
var t$1934;
if (m$937 == null) {m$937;
} else {var v$1731 = m$937;
switch (v$1731[0][0]) { case 0: {m$937;
 break; }default: {var v$1732 = v$1731[0][1];
var v$1733 = v$1732[0];
var v$1734 = v$1732[1];
if (v$1734 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$1735 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$559(v$1733);
var v$1736 = v$1735[1];
var v$1737 = v$1735[0];
if (v$1736) {(v$1731[0] = [0,v$1737],0);
m$937;
} else {(v$1731[0] = [1,[v$1737,special_objects$0Name$1.current_matchcount$69(0)]],0);
m$937;
};
} else {m$937;
};
} };
};
if (m$937 == null) {t$1934 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$1427 = m$937;
switch (v$1427[0][0]) { case 0: {t$1934 = v$1427[0][1];
 break; }default: {t$1934 = v$1427[0][1][0];
} };
};
t$1936 = (t$1935(t$1934));
c$1417 = (t$1938(t$1937,t$1936));
};
var fix$1939 = {};
fix$1939.$foldl = function(v$1419,v$1420){lab$foldl: while (true) {if (v$1420 == null) {return v$1419;
} else {var v$1421 = v$1420;
var v$1422 = v$1421[0];
var v$1423 = v$1421[1];
var t$1940 = f$931([v$1422,v$1419]);
var t$1941 = v$1423;
var v$1419 = t$1940;
var v$1420 = t$1941;
continue lab$foldl;
};
};
};
var foldl$1418 = fix$1939.$foldl;
return foldl$1418(b$934,c$1417);
};
compiler_objects$0Lvars$1$2.Fold$938 = function(f$941,b$944,m$947){var c$1431;
if (m$947 == null) {c$1431 = null;
} else {var t$1943 = tools$0IntStringFinMap$1.range$284;
var t$1942;
if (m$947 == null) {m$947;
} else {var v$1739 = m$947;
switch (v$1739[0][0]) { case 0: {m$947;
 break; }default: {var v$1740 = v$1739[0][1];
var v$1741 = v$1740[0];
var v$1742 = v$1740[1];
if (v$1742 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$1743 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$559(v$1741);
var v$1744 = v$1743[1];
var v$1745 = v$1743[0];
if (v$1744) {(v$1739[0] = [0,v$1745],0);
m$947;
} else {(v$1739[0] = [1,[v$1745,special_objects$0Name$1.current_matchcount$69(0)]],0);
m$947;
};
} else {m$947;
};
} };
};
if (m$947 == null) {t$1942 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$1440 = m$947;
switch (v$1440[0][0]) { case 0: {t$1942 = v$1440[0][1];
 break; }default: {t$1942 = v$1440[0][1][0];
} };
};
c$1431 = (t$1943(t$1942));
};
var fix$1944 = {};
fix$1944.$foldl = function(v$1433,v$1434){lab$foldl: while (true) {if (v$1434 == null) {return v$1433;
} else {var v$1435 = v$1434;
var v$1436 = v$1435[0];
var v$1437 = v$1435[1];
var t$1945 = f$941([v$1436,v$1433]);
var t$1946 = v$1437;
var v$1433 = t$1945;
var v$1434 = t$1946;
continue lab$foldl;
};
};
};
var foldl$1432 = fix$1944.$foldl;
return foldl$1432(b$944,c$1431);
};
compiler_objects$0Lvars$1$2.filter$948 = function(f$951,m$954){var l$955;
if (m$954 == null) {l$955 = null;
} else {var t$1948 = tools$0IntStringFinMap$1.range$284;
var t$1947;
if (m$954 == null) {m$954;
} else {var v$1747 = m$954;
switch (v$1747[0][0]) { case 0: {m$954;
 break; }default: {var v$1748 = v$1747[0][1];
var v$1749 = v$1748[0];
var v$1750 = v$1748[1];
if (v$1750 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$1751 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$559(v$1749);
var v$1752 = v$1751[1];
var v$1753 = v$1751[0];
if (v$1752) {(v$1747[0] = [0,v$1753],0);
m$954;
} else {(v$1747[0] = [1,[v$1753,special_objects$0Name$1.current_matchcount$69(0)]],0);
m$954;
};
} else {m$954;
};
} };
};
if (m$954 == null) {t$1947 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$1444 = m$954;
switch (v$1444[0][0]) { case 0: {t$1947 = v$1444[0][1];
 break; }default: {t$1947 = v$1444[0][1][0];
} };
};
l$955 = (t$1948(t$1947));
};
var l$$956 = basis$0List$1.filter$417(f$951,l$955);
return compiler_objects$0Lvars$1$2.fromList$817(l$$956);
};
compiler_objects$0Lvars$1$2.addList$957 = function(l$960,m1$963){var m2$964 = compiler_objects$0Lvars$1$2.fromList$817(l$960);
return compiler_objects$0Lvars$1$2.plus$703(m1$963,m2$964);
};
compiler_objects$0Lvars$1$2.mergeMap$965 = function(f$968,m1$971,m2$974){if (m1$971 == null) {m1$971;
} else {var v$1755 = m1$971;
switch (v$1755[0][0]) { case 0: {m1$971;
 break; }default: {var v$1756 = v$1755[0][1];
var v$1757 = v$1756[0];
var v$1758 = v$1756[1];
if (v$1758 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$1759 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$559(v$1757);
var v$1760 = v$1759[1];
var v$1761 = v$1759[0];
if (v$1760) {(v$1755[0] = [0,v$1761],0);
m1$971;
} else {(v$1755[0] = [1,[v$1761,special_objects$0Name$1.current_matchcount$69(0)]],0);
m1$971;
};
} else {m1$971;
};
} };
};
if (m2$974 == null) {m2$974;
} else {var v$1763 = m2$974;
switch (v$1763[0][0]) { case 0: {m2$974;
 break; }default: {var v$1764 = v$1763[0][1];
var v$1765 = v$1764[0];
var v$1766 = v$1764[1];
if (v$1766 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$1767 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$559(v$1765);
var v$1768 = v$1767[1];
var v$1769 = v$1767[0];
if (v$1768) {(v$1763[0] = [0,v$1769],0);
m2$974;
} else {(v$1763[0] = [1,[v$1769,special_objects$0Name$1.current_matchcount$69(0)]],0);
m2$974;
};
} else {m2$974;
};
} };
};
var rhs3$1003 = function(obj$1020){var t$1957;
var t$1956;
var t$1955;
var t$1954;
var t$1953 = tools$0IntStringFinMap$1.mergeMap$374;
var t$1952 = function(v$1771){var v$1772 = v$1771[0];
var v$1773 = v$1772[0];
var v$1774 = v$1772[1];
var v$1775 = v$1771[1];
var v$1776 = v$1775[0];
var v$1777 = v$1775[1];
var t$1951;
var v$1778 = v$1773[2][0][1];
var v$1779 = v$1776[2][0][1];
t$1951 = ((v$1778[0] == v$1779[0])?(v$1778[1] == v$1779[1]):false);
if (t$1951) {return [v$1773,f$968([v$1774,v$1777])];
} else {return tools$0Crash$1.impossible$59("QuasiMap2.mergeMap, f'");
};
};
var t$1950;
if (m1$971 == null) {t$1950 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$1456 = m1$971;
switch (v$1456[0][0]) { case 0: {t$1950 = v$1456[0][1];
 break; }default: {t$1950 = v$1456[0][1][0];
} };
};
var t$1949;
if (m2$974 == null) {t$1949 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$1460 = m2$974;
switch (v$1460[0][0]) { case 0: {t$1949 = v$1460[0][1];
 break; }default: {t$1949 = v$1460[0][1][0];
} };
};
t$1954 = (t$1953(t$1952,t$1950,t$1949));
t$1955 = [t$1954,special_objects$0Name$1.current_matchcount$69(0)];
t$1956 = [1,t$1955];
t$1957 = [t$1956];
return t$1957;
};
if (m1$971 == null) {return m2$974;
} else {if (m2$974 == null) {return m1$971;
} else {var v$1012 = m1$971;
switch (v$1012[0][0]) { case 0: {var v$1014 = m2$974;
switch (v$1014[0][0]) { case 0: {var v$1016 = v$1012[0][1];
var v$1017 = v$1014[0][1];
return [[0,tools$0IntStringFinMap$1.mergeMap$374(function(v$1781){var v$1782 = v$1781[0];
var v$1783 = v$1782[0];
var v$1784 = v$1782[1];
var v$1785 = v$1781[1];
var v$1786 = v$1785[0];
var v$1787 = v$1785[1];
var t$1958;
var v$1788 = v$1783[2][0][1];
var v$1789 = v$1786[2][0][1];
t$1958 = ((v$1788[0] == v$1789[0])?(v$1788[1] == v$1789[1]):false);
if (t$1958) {return [v$1783,f$968([v$1784,v$1787])];
} else {return tools$0Crash$1.impossible$59("QuasiMap2.mergeMap, f'");
};
},v$1016,v$1017)]];
 break; }default: {return rhs3$1003(0);
} };
 break; }default: {return rhs3$1003(0);
} };
};
};
};
var fix$1959 = {};
fix$1959.$pp_lookup = function(v$1024,v$1027,v$1030){lab$pp_lookup: while (true) {if (v$1027 == null) {return tools$0Crash$1.impossible$59("QuasiMap2.pp_lookup; element not there");
} else {var v$1049 = v$1027;
var v$1050 = v$1049[0];
var v$1051 = v$1049[1];
var t$1960;
var v$1601 = v$1050[2][0][1];
t$1960 = ((v$1030[0] == v$1601[0])?(v$1030[1] == v$1601[1]):false);
if (t$1960) {return v$1024(v$1050);
} else {var t$1961 = v$1024;
var t$1962 = v$1051;
var t$1963 = v$1030;
var v$1024 = t$1961;
var v$1027 = t$1962;
var v$1030 = t$1963;
continue lab$pp_lookup;
};
};
};
};
compiler_objects$0Lvars$1$2.pp_lookup$1021 = fix$1959.$pp_lookup;
compiler_objects$0Lvars$1$2.en$Restrict$1053 = new String("Restrict");
compiler_objects$0Lvars$1$2.restrict$1054 = function(v$1868,v$1869,v$1067){if (v$1067 == null) {return null;
} else {if (v$1869 == null) {v$1869;
} else {var v$1793 = v$1869;
switch (v$1793[0][0]) { case 0: {v$1869;
 break; }default: {var v$1794 = v$1793[0][1];
var v$1795 = v$1794[0];
var v$1796 = v$1794[1];
if (v$1796 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$1797 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$559(v$1795);
var v$1798 = v$1797[1];
var v$1799 = v$1797[0];
if (v$1798) {(v$1793[0] = [0,v$1799],0);
v$1869;
} else {(v$1793[0] = [1,[v$1799,special_objects$0Name$1.current_matchcount$69(0)]],0);
v$1869;
};
} else {v$1869;
};
} };
};
if (v$1869 == null) {throw [compiler_objects$0Lvars$1$2.en$Restrict$1053,"[empty map]"];
} else {var im$1075;
if (v$1869 == null) {im$1075 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$1472 = v$1869;
switch (v$1472[0][0]) { case 0: {im$1075 = v$1472[0][1];
 break; }default: {im$1075 = v$1472[0][1][0];
} };
};
var ns$1076 = basis$0List$1.map$697(function(d$1475){return d$1475[2][0][1];
},v$1067);
var im$$1078;
try {var t$1970 = tools$0IntStringFinMap$1.restrict$391;
var t$1969;
var fix$1965 = {};
fix$1965.$pp_lookup = function(v$1883,v$1884){lab$pp_lookup: while (true) {if (v$1883 == null) {return tools$0Crash$1.impossible$59("QuasiMap2.pp_lookup; element not there");
} else {var v$1885 = v$1883;
var v$1886 = v$1885[0];
var v$1887 = v$1885[1];
var t$1966;
var v$1888 = v$1886[2][0][1];
t$1966 = ((v$1884[0] == v$1888[0])?(v$1884[1] == v$1888[1]):false);
if (t$1966) {return v$1868(v$1886);
} else {var t$1967 = v$1887;
var t$1968 = v$1884;
var v$1883 = t$1967;
var v$1884 = t$1968;
continue lab$pp_lookup;
};
};
};
};
var pp_lookup$1882 = fix$1965.$pp_lookup;
t$1969 = (function(v$1889){return pp_lookup$1882(v$1067,v$1889);
});
im$$1078 = (t$1970(t$1969,im$1075,ns$1076));
} catch(v$1964) {im$$1078 = ((function(v$1082){var t$1971 = v$1082;
if (t$1971[0] == tools$0IntStringFinMap$1.en$Restrict$390) {var s$1079 = v$1082[1];
throw [compiler_objects$0Lvars$1$2.en$Restrict$1053,s$1079];
} else {throw v$1082;
};
})(v$1964));
};
return (tools$0IntStringFinMap$1.fold$62(function(v$1087){var v$1092 = v$1087[0];
var v$1093 = v$1092[0];
return v$1087[1]?v$1093[2][0][2]:false;
},true,im$$1078))?[[0,im$$1078]]:[[1,[im$$1078,special_objects$0Name$1.current_matchcount$69(0)]]];
};
};
};
compiler_objects$0Lvars$1$2.enrich$1101 = function(f$1104,v$1108){var v$1132 = v$1108[0];
var v$1133 = v$1108[1];
if (v$1132 == null) {v$1132;
} else {var v$1801 = v$1132;
switch (v$1801[0][0]) { case 0: {v$1132;
 break; }default: {var v$1802 = v$1801[0][1];
var v$1803 = v$1802[0];
var v$1804 = v$1802[1];
if (v$1804 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$1805 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$559(v$1803);
var v$1806 = v$1805[1];
var v$1807 = v$1805[0];
if (v$1806) {(v$1801[0] = [0,v$1807],0);
v$1132;
} else {(v$1801[0] = [1,[v$1807,special_objects$0Name$1.current_matchcount$69(0)]],0);
v$1132;
};
} else {v$1132;
};
} };
};
if (v$1133 == null) {v$1133;
} else {var v$1809 = v$1133;
switch (v$1809[0][0]) { case 0: {v$1133;
 break; }default: {var v$1810 = v$1809[0][1];
var v$1811 = v$1810[0];
var v$1812 = v$1810[1];
if (v$1812 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$1813 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$559(v$1811);
var v$1814 = v$1813[1];
var v$1815 = v$1813[0];
if (v$1814) {(v$1809[0] = [0,v$1815],0);
v$1133;
} else {(v$1809[0] = [1,[v$1815,special_objects$0Name$1.current_matchcount$69(0)]],0);
v$1133;
};
} else {v$1133;
};
} };
};
if (v$1133 == null) {return true;
} else {if (v$1132 == null) {return false;
} else {var im1$1121;
if (v$1132 == null) {im1$1121 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$1480 = v$1132;
switch (v$1480[0][0]) { case 0: {im1$1121 = v$1480[0][1];
 break; }default: {im1$1121 = v$1480[0][1][0];
} };
};
var im2$1122;
if (v$1133 == null) {im2$1122 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$1484 = v$1133;
switch (v$1484[0][0]) { case 0: {im2$1122 = v$1484[0][1];
 break; }default: {im2$1122 = v$1484[0][1][0];
} };
};
return tools$0IntStringFinMap$1.enrich$414(function(v$1487){var v$1488 = v$1487[0];
var v$1489 = v$1488[1];
var v$1490 = v$1487[1];
var v$1491 = v$1490[1];
return f$1104([v$1489,v$1491]);
},[im1$1121,im2$1122]);
};
};
};
compiler_objects$0Lvars$1$2.layoutMap$1134 = function(v$1168,v$1170,v$1169,v$1167){return function(pp_dom$1143){return function(pp_range$1146){return function(m$1149){var t$1972;
var v$1165 = [0,v$1169];
var t$1979;
var t$1978 = basis$0List$1.map$697;
var t$1977 = function(v$1492){var v$1493 = v$1492[0];
var v$1494 = v$1492[1];
var t$1976;
var v$1495 = [0,v$1168];
t$1976 = [[pp_dom$1143(v$1493),[pp_range$1146(v$1494),null]],v$1495,"",1,""];
return [0,t$1976];
};
var t$1975;
if (m$1149 == null) {t$1975 = null;
} else {var t$1974 = tools$0IntStringFinMap$1.range$284;
var t$1973;
if (m$1149 == null) {m$1149;
} else {var v$1817 = m$1149;
switch (v$1817[0][0]) { case 0: {m$1149;
 break; }default: {var v$1818 = v$1817[0][1];
var v$1819 = v$1818[0];
var v$1820 = v$1818[1];
if (v$1820 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$1821 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$559(v$1819);
var v$1822 = v$1821[1];
var v$1823 = v$1821[0];
if (v$1822) {(v$1817[0] = [0,v$1823],0);
m$1149;
} else {(v$1817[0] = [1,[v$1823,special_objects$0Name$1.current_matchcount$69(0)]],0);
m$1149;
};
} else {m$1149;
};
} };
};
if (m$1149 == null) {t$1973 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$1498 = m$1149;
switch (v$1498[0][0]) { case 0: {t$1973 = v$1498[0][1];
 break; }default: {t$1973 = v$1498[0][1][0];
} };
};
t$1975 = (t$1974(t$1973));
};
t$1979 = (t$1978(t$1977,t$1975));
t$1972 = [t$1979,v$1165,v$1170,1,v$1167];
return [0,t$1972];
};
};
};
};
compiler_objects$0Lvars$1$2.reportMap$1171 = function(f$1174,m$1177){var t$1986 = tools$0Report$1.flatten$87;
var t$1985;
var t$1984 = basis$0List$1.map$697;
var t$1983 = f$1174;
var t$1982;
if (m$1177 == null) {t$1982 = null;
} else {var t$1981 = tools$0IntStringFinMap$1.range$284;
var t$1980;
if (m$1177 == null) {m$1177;
} else {var v$1825 = m$1177;
switch (v$1825[0][0]) { case 0: {m$1177;
 break; }default: {var v$1826 = v$1825[0][1];
var v$1827 = v$1826[0];
var v$1828 = v$1826[1];
if (v$1828 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$1829 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$559(v$1827);
var v$1830 = v$1829[1];
var v$1831 = v$1829[0];
if (v$1830) {(v$1825[0] = [0,v$1831],0);
m$1177;
} else {(v$1825[0] = [1,[v$1831,special_objects$0Name$1.current_matchcount$69(0)]],0);
m$1177;
};
} else {m$1177;
};
} };
};
if (m$1177 == null) {t$1980 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$1502 = m$1177;
switch (v$1502[0][0]) { case 0: {t$1980 = v$1502[0][1];
 break; }default: {t$1980 = v$1502[0][1][0];
} };
};
t$1982 = (t$1981(t$1980));
};
t$1985 = (t$1984(t$1983,t$1982));
return t$1986(t$1985);
};
compiler_objects$0Lvars$1$2.pu_map0$1178 = function(pu_d$1181,pu_a$1184){var pu_m$1193 = pickle$0pickle$1.combHash$2090(function(m$1504){return tools$0IntStringFinMap$1.fold$62(function(v$1505){return SmlPrims.chk_ovf_i32(v$1505[1] + 1);
},0,m$1504);
},tools$0IntStringFinMap$1.pu$488(pickle$0pickle$1.pairGen$1053([pickle$0pickle$1.int$729,pickle$0pickle$1.string$909]),pickle$0pickle$1.pairGen$1053([pu_d$1181,pu_a$1184])));
return pickle$0pickle$1.dataGen$1488(["QuasiMap.map0",function(v$1510){switch (v$1510[0]) { case 0: {return 0;
 break; }default: {return 1;
} };
},[function(v$1511){return pickle$0pickle$1.con1$2014(function(v$1512){return [0,v$1512];
},function(v$1513){switch (v$1513[0]) { case 0: {return v$1513[1];
 break; }default: {return tools$0Crash$1.impossible$59("QuasiMap2.pu_map0.Rigid");
} };
},pu_m$1193);
},[function(v$1516){return pickle$0pickle$1.con1$2014(function(v$1517){return [1,[v$1517[1],-1]];
},function(v$1518){switch (v$1518[0]) { case 1: {var v$1519 = v$1518[1];
return [v$1519[1],v$1519[0]];
 break; }default: {return tools$0Crash$1.impossible$59("QuasiMap2.pu_map0.Flexible");
} };
},pickle$0pickle$1.pairGen0$983(special_objects$0Name$1.pu_matchcount$298,pu_m$1193));
},null]]]);
};
compiler_objects$0Lvars$1$2.pu$1235 = function(pu_d$1238,pu_a$1241){return pickle$0pickle$1.convert$2342([function(v$1528){switch (v$1528[0]) { case 0: {var v$1529 = v$1528[1];
return v$1529;
 break; }default: {return null;
} };
},function(v$1530){if (v$1530 == null) {return [1];
} else {var v$1531 = v$1530;
var t$1989;
var t$1988 = tools$0IntStringFinMap$1.isEmpty$128(0);
var t$1987;
if (v$1530 == null) {t$1987 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$1533 = v$1530;
switch (v$1533[0][0]) { case 0: {t$1987 = v$1533[0][1];
 break; }default: {t$1987 = v$1533[0][1][0];
} };
};
t$1989 = (t$1988(t$1987));
if (t$1989) {return tools$0Crash$1.impossible$59("QuasiMap2.pu.hmmm");
} else {return [0,v$1531];
};
};
}],pickle$0pickle$1.optionGen$2134(pickle$0pickle$1.ref0ShGen$1268(compiler_objects$0Lvars$1$2.pu_map0$1178(pu_d$1238,pu_a$1241))));
};
return 0;
})();
