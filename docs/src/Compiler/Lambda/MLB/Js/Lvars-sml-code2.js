if ((typeof(compiler_objects$0Lvars$1$2)) == "undefined") {compiler_objects$0Lvars$1$2 = {};
};
(function(){compiler_objects$0Lvars$1$2.die$475 = function(s$478){return tools$0Crash$1.impossible$59("QuasiMap2." + s$478);
};
compiler_objects$0Lvars$1$2.key$479 = function(v$1845,v$1846,v$1847,v$1848,v$1849,v$1850){return v$1847[0][1];
};
compiler_objects$0Lvars$1$2.rigid$483 = function(v$1851,v$1852,v$1853,v$1854,v$1855,v$1856){return v$1853[0][2];
};
compiler_objects$0Lvars$1$2.empty$491 = function(v$1879){return null;
};
compiler_objects$0Lvars$1$2.singleton$492 = function(v$503,v$504){var nd$497 = v$503[2];
var k$498 = nd$497[0][1];
return nd$497[0][2]?[[0,tools$0IntStringFinMap$1.singleton$118(k$498,[v$503,v$504])]]:[[1,[tools$0IntStringFinMap$1.singleton$118(k$498,[v$503,v$504]),special_objects$0Name$1.current_matchcount$69(0)]]];
};
compiler_objects$0Lvars$1$2.isEmpty$505 = function(v$508){return (v$508 == null)?true:false;
};
compiler_objects$0Lvars$1$2.imap$513 = function(v$516){if (v$516 == null) {return [1];
} else {var v$525 = v$516;
switch (v$525[0][0]) { case 0: {var v$527 = v$525[0][1];
return [0,v$527];
 break; }default: {var v$528 = v$525[0][1];
var v$529 = v$528[0];
return [0,v$529];
} };
};
};
compiler_objects$0Lvars$1$2.imap$$530 = function(v$533){if (v$533 == null) {return tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible");
} else {var v$543 = v$533;
switch (v$543[0][0]) { case 0: {return v$543[0][1];
 break; }default: {return v$543[0][1][0];
} };
};
};
compiler_objects$0Lvars$1$2.ensure_consistent_imap$548 = function(imap$551){var v$571 = tools$0IntStringFinMap$1.Fold$78(function(v$579){var v$588 = v$579[0];
var v$589 = v$588[0];
var v$590 = v$588[1];
var v$591 = v$590[0];
var v$592 = v$579[1];
var v$593 = v$592[0];
var v$594 = v$592[1];
var t$1880;
if (v$593) {var v$1534 = v$591[2][0][1];
t$1880 = ((v$1534[0] == v$589[0])?(v$1534[1] == v$589[1]):false);
} else {t$1880 = false;
};
return [t$1880,v$594?v$591[2][0][2]:false];
},[true,true],imap$551);
var v$572 = v$571[0];
var v$573 = v$571[1];
return [v$572?imap$551:(tools$0IntStringFinMap$1.fold$62(function(v$564){var v$565 = v$564[0];
var v$566 = v$565[0];
var v$567 = v$565[1];
var v$568 = v$564[1];
return tools$0IntStringFinMap$1.add$237(v$566[2][0][1],[v$566,v$567],v$568);
},tools$0IntStringFinMap$1.empty$117(0),imap$551)),v$573];
};
compiler_objects$0Lvars$1$2.ensure_consistent$595 = function(v$598){if (v$598 == null) {return v$598;
} else {var v$611 = v$598;
switch (v$611[0][0]) { case 0: {return v$598;
 break; }default: {var v$631 = v$611[0][1];
var v$632 = v$631[0];
var v$633 = v$631[1];
if (v$633 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$628 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$548(v$632);
var v$629 = v$628[1];
var v$630 = v$628[0];
if (v$629) {(v$611[0] = [0,v$630],0);
return v$598;
} else {(v$611[0] = [1,[v$630,special_objects$0Name$1.current_matchcount$69(0)]],0);
return v$598;
};
} else {return v$598;
};
} };
};
};
compiler_objects$0Lvars$1$2.mk_flex$634 = function(imap$637){return [[1,[imap$637,special_objects$0Name$1.current_matchcount$69(0)]]];
};
compiler_objects$0Lvars$1$2.mk_rigid$638 = function(imap$641){return [[0,imap$641]];
};
compiler_objects$0Lvars$1$2.lookup$642 = function(m$645,d$648){var v$653;
if (m$645 == null) {m$645;
} else {var v$1613 = m$645;
switch (v$1613[0][0]) { case 0: {m$645;
 break; }default: {var v$1614 = v$1613[0][1];
var v$1615 = v$1614[0];
var v$1616 = v$1614[1];
if (v$1616 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$1617 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$548(v$1615);
var v$1618 = v$1617[1];
var v$1619 = v$1617[0];
if (v$1618) {(v$1613[0] = [0,v$1619],0);
m$645;
} else {(v$1613[0] = [1,[v$1619,special_objects$0Name$1.current_matchcount$69(0)]],0);
m$645;
};
} else {m$645;
};
} };
};
if (m$645 == null) {v$653 = [1];
} else {var v$1314 = m$645;
switch (v$1314[0][0]) { case 0: {var v$1315 = v$1314[0][1];
v$653 = [0,v$1315];
 break; }default: {var v$1316 = v$1314[0][1];
var v$1317 = v$1316[0];
v$653 = [0,v$1317];
} };
};
switch (v$653[0]) { case 0: {var v$663 = v$653[1];
var v$659 = tools$0IntStringFinMap$1.lookup$129(v$663,d$648[2][0][1]);
switch (v$659[0]) { case 0: {var v$661 = v$659[1];
var v$662 = v$661[1];
return [0,v$662];
 break; }default: {return [1];
} };
 break; }default: {return [1];
} };
};
compiler_objects$0Lvars$1$2.add$664 = function(v$689,v$690,v$691){if (v$691 == null) {v$691;
} else {var v$1621 = v$691;
switch (v$1621[0][0]) { case 0: {v$691;
 break; }default: {var v$1622 = v$1621[0][1];
var v$1623 = v$1622[0];
var v$1624 = v$1622[1];
if (v$1624 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$1625 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$548(v$1623);
var v$1626 = v$1625[1];
var v$1627 = v$1625[0];
if (v$1626) {(v$1621[0] = [0,v$1627],0);
v$691;
} else {(v$1621[0] = [1,[v$1627,special_objects$0Name$1.current_matchcount$69(0)]],0);
v$691;
};
} else {v$691;
};
} };
};
if (v$691 == null) {var nd$1322 = v$689[2];
var k$1323 = nd$1322[0][1];
return nd$1322[0][2]?[[0,tools$0IntStringFinMap$1.singleton$118(k$1323,[v$689,v$690])]]:[[1,[tools$0IntStringFinMap$1.singleton$118(k$1323,[v$689,v$690]),special_objects$0Name$1.current_matchcount$69(0)]]];
} else {var v$678 = v$691;
switch (v$678[0][0]) { case 0: {var v$686 = v$678[0][1];
var nd$680 = v$689[2];
var i$681 = nd$680[0][1];
return nd$680[0][2]?[[0,tools$0IntStringFinMap$1.add$237(i$681,[v$689,v$690],v$686)]]:[[1,[tools$0IntStringFinMap$1.add$237(i$681,[v$689,v$690],v$686),special_objects$0Name$1.current_matchcount$69(0)]]];
 break; }default: {var v$687 = v$678[0][1];
var v$688 = v$687[0];
return [[1,[tools$0IntStringFinMap$1.add$237(v$689[2][0][1],[v$689,v$690],v$688),special_objects$0Name$1.current_matchcount$69(0)]]];
} };
};
};
compiler_objects$0Lvars$1$2.plus$692 = function(v$726,v$727){if (v$726 == null) {v$726;
} else {var v$1629 = v$726;
switch (v$1629[0][0]) { case 0: {v$726;
 break; }default: {var v$1630 = v$1629[0][1];
var v$1631 = v$1630[0];
var v$1632 = v$1630[1];
if (v$1632 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$1633 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$548(v$1631);
var v$1634 = v$1633[1];
var v$1635 = v$1633[0];
if (v$1634) {(v$1629[0] = [0,v$1635],0);
v$726;
} else {(v$1629[0] = [1,[v$1635,special_objects$0Name$1.current_matchcount$69(0)]],0);
v$726;
};
} else {v$726;
};
} };
};
if (v$727 == null) {v$727;
} else {var v$1637 = v$727;
switch (v$1637[0][0]) { case 0: {v$727;
 break; }default: {var v$1638 = v$1637[0][1];
var v$1639 = v$1638[0];
var v$1640 = v$1638[1];
if (v$1640 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$1641 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$548(v$1639);
var v$1642 = v$1641[1];
var v$1643 = v$1641[0];
if (v$1642) {(v$1637[0] = [0,v$1643],0);
v$727;
} else {(v$1637[0] = [1,[v$1643,special_objects$0Name$1.current_matchcount$69(0)]],0);
v$727;
};
} else {v$727;
};
} };
};
if (v$726 == null) {return v$727;
} else {if (v$727 == null) {return v$726;
} else {var v$717 = v$726;
switch (v$717[0][0]) { case 0: {var v$719 = v$727;
switch (v$719[0][0]) { case 0: {var v$721 = v$717[0][1];
var v$722 = v$719[0][1];
return [[0,tools$0IntStringFinMap$1.plus$255(v$721,v$722)]];
 break; }default: {var t$1887;
var t$1886;
var t$1885;
var t$1884;
var t$1883 = tools$0IntStringFinMap$1.plus$255;
var t$1882;
if (v$726 == null) {t$1882 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$1645 = v$726;
switch (v$1645[0][0]) { case 0: {t$1882 = v$1645[0][1];
 break; }default: {t$1882 = v$1645[0][1][0];
} };
};
var t$1881;
if (v$727 == null) {t$1881 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$1646 = v$727;
switch (v$1646[0][0]) { case 0: {t$1881 = v$1646[0][1];
 break; }default: {t$1881 = v$1646[0][1][0];
} };
};
t$1884 = (t$1883(t$1882,t$1881));
t$1885 = [t$1884,special_objects$0Name$1.current_matchcount$69(0)];
t$1886 = [1,t$1885];
t$1887 = [t$1886];
return t$1887;
} };
 break; }default: {var t$1894;
var t$1893;
var t$1892;
var t$1891;
var t$1890 = tools$0IntStringFinMap$1.plus$255;
var t$1889;
if (v$726 == null) {t$1889 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$1648 = v$726;
switch (v$1648[0][0]) { case 0: {t$1889 = v$1648[0][1];
 break; }default: {t$1889 = v$1648[0][1][0];
} };
};
var t$1888;
if (v$727 == null) {t$1888 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$1649 = v$727;
switch (v$1649[0][0]) { case 0: {t$1888 = v$1649[0][1];
 break; }default: {t$1888 = v$1649[0][1][0];
} };
};
t$1891 = (t$1890(t$1889,t$1888));
t$1892 = [t$1891,special_objects$0Name$1.current_matchcount$69(0)];
t$1893 = [1,t$1892];
t$1894 = [t$1893];
return t$1894;
} };
};
};
};
compiler_objects$0Lvars$1$2.remove$728 = function(v$769,v$770){if (v$770 == null) {v$770;
} else {var v$1651 = v$770;
switch (v$1651[0][0]) { case 0: {v$770;
 break; }default: {var v$1652 = v$1651[0][1];
var v$1653 = v$1652[0];
var v$1654 = v$1652[1];
if (v$1654 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$1655 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$548(v$1653);
var v$1656 = v$1655[1];
var v$1657 = v$1655[0];
if (v$1656) {(v$1651[0] = [0,v$1657],0);
v$770;
} else {(v$1651[0] = [1,[v$1657,special_objects$0Name$1.current_matchcount$69(0)]],0);
v$770;
};
} else {v$770;
};
} };
};
if (v$770 == null) {return [1];
} else {var v$742 = v$770;
switch (v$742[0][0]) { case 0: {var v$755 = v$742[0][1];
var v$748 = tools$0IntStringFinMap$1.remove$262(v$769[2][0][1],v$755);
switch (v$748[0]) { case 0: {var v$754 = v$748[1];
return ((tools$0IntStringFinMap$1.isEmpty$128(0))(v$754))?[0,null]:[0,[[0,v$754]]];
 break; }default: {return [1];
} };
 break; }default: {var v$767 = v$742[0][1];
var v$768 = v$767[0];
var v$760 = tools$0IntStringFinMap$1.remove$262(v$769[2][0][1],v$768);
switch (v$760[0]) { case 0: {var v$766 = v$760[1];
return ((tools$0IntStringFinMap$1.isEmpty$128(0))(v$766))?[0,null]:[0,[[1,[v$766,special_objects$0Name$1.current_matchcount$69(0)]]]];
 break; }default: {return [1];
} };
} };
};
};
compiler_objects$0Lvars$1$2.dom$771 = function(v$774){if (v$774 == null) {return null;
} else {var t$1899 = basis$0List$1.map$697;
var t$1898 = function(v$782){return v$782[0];
};
var t$1897;
var t$1896 = tools$0IntStringFinMap$1.range$284;
var t$1895;
if (v$774 == null) {v$774;
} else {var v$1659 = v$774;
switch (v$1659[0][0]) { case 0: {v$774;
 break; }default: {var v$1660 = v$1659[0][1];
var v$1661 = v$1660[0];
var v$1662 = v$1660[1];
if (v$1662 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$1663 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$548(v$1661);
var v$1664 = v$1663[1];
var v$1665 = v$1663[0];
if (v$1664) {(v$1659[0] = [0,v$1665],0);
v$774;
} else {(v$1659[0] = [1,[v$1665,special_objects$0Name$1.current_matchcount$69(0)]],0);
v$774;
};
} else {v$774;
};
} };
};
if (v$774 == null) {t$1895 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$1346 = v$774;
switch (v$1346[0][0]) { case 0: {t$1895 = v$1346[0][1];
 break; }default: {t$1895 = v$1346[0][1][0];
} };
};
t$1897 = (t$1896(t$1895));
return t$1899(t$1898,t$1897);
};
};
compiler_objects$0Lvars$1$2.range$784 = function(v$787){if (v$787 == null) {return null;
} else {var t$1904 = basis$0List$1.map$697;
var t$1903 = function(v$795){return v$795[1];
};
var t$1902;
var t$1901 = tools$0IntStringFinMap$1.range$284;
var t$1900;
if (v$787 == null) {v$787;
} else {var v$1667 = v$787;
switch (v$1667[0][0]) { case 0: {v$787;
 break; }default: {var v$1668 = v$1667[0][1];
var v$1669 = v$1668[0];
var v$1670 = v$1668[1];
if (v$1670 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$1671 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$548(v$1669);
var v$1672 = v$1671[1];
var v$1673 = v$1671[0];
if (v$1672) {(v$1667[0] = [0,v$1673],0);
v$787;
} else {(v$1667[0] = [1,[v$1673,special_objects$0Name$1.current_matchcount$69(0)]],0);
v$787;
};
} else {v$787;
};
} };
};
if (v$787 == null) {t$1900 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$1350 = v$787;
switch (v$1350[0][0]) { case 0: {t$1900 = v$1350[0][1];
 break; }default: {t$1900 = v$1350[0][1][0];
} };
};
t$1902 = (t$1901(t$1900));
return t$1904(t$1903,t$1902);
};
};
compiler_objects$0Lvars$1$2.list$797 = function(v$800){if (v$800 == null) {return null;
} else {var t$1906 = tools$0IntStringFinMap$1.range$284;
var t$1905;
if (v$800 == null) {v$800;
} else {var v$1675 = v$800;
switch (v$1675[0][0]) { case 0: {v$800;
 break; }default: {var v$1676 = v$1675[0][1];
var v$1677 = v$1676[0];
var v$1678 = v$1676[1];
if (v$1678 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$1679 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$548(v$1677);
var v$1680 = v$1679[1];
var v$1681 = v$1679[0];
if (v$1680) {(v$1675[0] = [0,v$1681],0);
v$800;
} else {(v$1675[0] = [1,[v$1681,special_objects$0Name$1.current_matchcount$69(0)]],0);
v$800;
};
} else {v$800;
};
} };
};
if (v$800 == null) {t$1905 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$1354 = v$800;
switch (v$1354[0][0]) { case 0: {t$1905 = v$1354[0][1];
 break; }default: {t$1905 = v$1354[0][1][0];
} };
};
return t$1906(t$1905);
};
};
compiler_objects$0Lvars$1$2.fromList$806 = function(v$809){if (v$809 == null) {return null;
} else {var v$822;
var b$1358 = [tools$0IntStringFinMap$1.empty$117(0),true];
var fix$1907 = {};
fix$1907.$foldl = function(v$1361,v$1362){lab$foldl: while (true) {if (v$1362 == null) {return v$1361;
} else {var v$1363 = v$1362;
var v$1364 = v$1363[0];
var v$1365 = v$1363[1];
var t$1908;
var v$1684 = v$1364[0];
var v$1685 = v$1364[1];
var v$1687 = v$1361[0];
var v$1688 = v$1361[1];
t$1908 = [tools$0IntStringFinMap$1.add$237(v$1684[2][0][1],[v$1684,v$1685],v$1687),v$1688?v$1684[2][0][2]:false];
var t$1909 = t$1908;
var t$1910 = v$1365;
var v$1361 = t$1909;
var v$1362 = t$1910;
continue lab$foldl;
};
};
};
var foldl$1360 = fix$1907.$foldl;
v$822 = (foldl$1360(b$1358,v$809));
var v$823 = v$822[0];
return v$822[1]?[[0,v$823]]:[[1,[v$823,special_objects$0Name$1.current_matchcount$69(0)]]];
};
};
compiler_objects$0Lvars$1$2.composemap$841 = function(f$844,m$847){var v$852;
if (m$847 == null) {v$852 = null;
} else {var t$1912 = tools$0IntStringFinMap$1.range$284;
var t$1911;
if (m$847 == null) {m$847;
} else {var v$1690 = m$847;
switch (v$1690[0][0]) { case 0: {m$847;
 break; }default: {var v$1691 = v$1690[0][1];
var v$1692 = v$1691[0];
var v$1693 = v$1691[1];
if (v$1693 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$1694 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$548(v$1692);
var v$1695 = v$1694[1];
var v$1696 = v$1694[0];
if (v$1695) {(v$1690[0] = [0,v$1696],0);
m$847;
} else {(v$1690[0] = [1,[v$1696,special_objects$0Name$1.current_matchcount$69(0)]],0);
m$847;
};
} else {m$847;
};
} };
};
if (m$847 == null) {t$1911 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$1372 = m$847;
switch (v$1372[0][0]) { case 0: {t$1911 = v$1372[0][1];
 break; }default: {t$1911 = v$1372[0][1][0];
} };
};
v$852 = (t$1912(t$1911));
};
if (v$852 == null) {return null;
} else {var v$860;
var b$1375 = [tools$0IntStringFinMap$1.empty$117(0),true];
var fix$1913 = {};
fix$1913.$foldl = function(v$1378,v$1379){lab$foldl: while (true) {if (v$1379 == null) {return v$1378;
} else {var v$1380 = v$1379;
var v$1381 = v$1380[0];
var v$1382 = v$1380[1];
var t$1914;
var v$1699 = v$1381[0];
var v$1700 = v$1381[1];
var v$1702 = v$1378[0];
var v$1703 = v$1378[1];
t$1914 = [tools$0IntStringFinMap$1.add$237(v$1699[2][0][1],[v$1699,f$844(v$1700)],v$1702),v$1703?v$1699[2][0][2]:false];
var t$1915 = t$1914;
var t$1916 = v$1382;
var v$1378 = t$1915;
var v$1379 = t$1916;
continue lab$foldl;
};
};
};
var foldl$1377 = fix$1913.$foldl;
v$860 = (foldl$1377(b$1375,v$852));
var v$861 = v$860[0];
return v$860[1]?[[0,v$861]]:[[1,[v$861,special_objects$0Name$1.current_matchcount$69(0)]]];
};
};
compiler_objects$0Lvars$1$2.ComposeMap$879 = function(f$882,m$885){var v$890;
if (m$885 == null) {v$890 = null;
} else {var t$1918 = tools$0IntStringFinMap$1.range$284;
var t$1917;
if (m$885 == null) {m$885;
} else {var v$1705 = m$885;
switch (v$1705[0][0]) { case 0: {m$885;
 break; }default: {var v$1706 = v$1705[0][1];
var v$1707 = v$1706[0];
var v$1708 = v$1706[1];
if (v$1708 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$1709 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$548(v$1707);
var v$1710 = v$1709[1];
var v$1711 = v$1709[0];
if (v$1710) {(v$1705[0] = [0,v$1711],0);
m$885;
} else {(v$1705[0] = [1,[v$1711,special_objects$0Name$1.current_matchcount$69(0)]],0);
m$885;
};
} else {m$885;
};
} };
};
if (m$885 == null) {t$1917 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$1389 = m$885;
switch (v$1389[0][0]) { case 0: {t$1917 = v$1389[0][1];
 break; }default: {t$1917 = v$1389[0][1][0];
} };
};
v$890 = (t$1918(t$1917));
};
if (v$890 == null) {return null;
} else {var v$898;
var b$1392 = [tools$0IntStringFinMap$1.empty$117(0),true];
var fix$1919 = {};
fix$1919.$foldl = function(v$1395,v$1396){lab$foldl: while (true) {if (v$1396 == null) {return v$1395;
} else {var v$1397 = v$1396;
var v$1398 = v$1397[0];
var v$1399 = v$1397[1];
var t$1920;
var v$1714 = v$1398[0];
var v$1715 = v$1398[1];
var v$1717 = v$1395[0];
var v$1718 = v$1395[1];
t$1920 = [tools$0IntStringFinMap$1.add$237(v$1714[2][0][1],[v$1714,f$882([v$1714,v$1715])],v$1717),v$1718?v$1714[2][0][2]:false];
var t$1921 = t$1920;
var t$1922 = v$1399;
var v$1395 = t$1921;
var v$1396 = t$1922;
continue lab$foldl;
};
};
};
var foldl$1394 = fix$1919.$foldl;
v$898 = (foldl$1394(b$1392,v$890));
var v$899 = v$898[0];
return v$898[1]?[[0,v$899]]:[[1,[v$899,special_objects$0Name$1.current_matchcount$69(0)]]];
};
};
compiler_objects$0Lvars$1$2.fold$917 = function(f$920,b$923,m$926){var c$1406;
if (m$926 == null) {c$1406 = null;
} else {var t$1927 = basis$0List$1.map$697;
var t$1926 = function(v$1414){return v$1414[1];
};
var t$1925;
var t$1924 = tools$0IntStringFinMap$1.range$284;
var t$1923;
if (m$926 == null) {m$926;
} else {var v$1720 = m$926;
switch (v$1720[0][0]) { case 0: {m$926;
 break; }default: {var v$1721 = v$1720[0][1];
var v$1722 = v$1721[0];
var v$1723 = v$1721[1];
if (v$1723 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$1724 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$548(v$1722);
var v$1725 = v$1724[1];
var v$1726 = v$1724[0];
if (v$1725) {(v$1720[0] = [0,v$1726],0);
m$926;
} else {(v$1720[0] = [1,[v$1726,special_objects$0Name$1.current_matchcount$69(0)]],0);
m$926;
};
} else {m$926;
};
} };
};
if (m$926 == null) {t$1923 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$1416 = m$926;
switch (v$1416[0][0]) { case 0: {t$1923 = v$1416[0][1];
 break; }default: {t$1923 = v$1416[0][1][0];
} };
};
t$1925 = (t$1924(t$1923));
c$1406 = (t$1927(t$1926,t$1925));
};
var fix$1928 = {};
fix$1928.$foldl = function(v$1408,v$1409){lab$foldl: while (true) {if (v$1409 == null) {return v$1408;
} else {var v$1410 = v$1409;
var v$1411 = v$1410[0];
var v$1412 = v$1410[1];
var t$1929 = f$920([v$1411,v$1408]);
var t$1930 = v$1412;
var v$1408 = t$1929;
var v$1409 = t$1930;
continue lab$foldl;
};
};
};
var foldl$1407 = fix$1928.$foldl;
return foldl$1407(b$923,c$1406);
};
compiler_objects$0Lvars$1$2.Fold$927 = function(f$930,b$933,m$936){var c$1420;
if (m$936 == null) {c$1420 = null;
} else {var t$1932 = tools$0IntStringFinMap$1.range$284;
var t$1931;
if (m$936 == null) {m$936;
} else {var v$1728 = m$936;
switch (v$1728[0][0]) { case 0: {m$936;
 break; }default: {var v$1729 = v$1728[0][1];
var v$1730 = v$1729[0];
var v$1731 = v$1729[1];
if (v$1731 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$1732 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$548(v$1730);
var v$1733 = v$1732[1];
var v$1734 = v$1732[0];
if (v$1733) {(v$1728[0] = [0,v$1734],0);
m$936;
} else {(v$1728[0] = [1,[v$1734,special_objects$0Name$1.current_matchcount$69(0)]],0);
m$936;
};
} else {m$936;
};
} };
};
if (m$936 == null) {t$1931 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$1429 = m$936;
switch (v$1429[0][0]) { case 0: {t$1931 = v$1429[0][1];
 break; }default: {t$1931 = v$1429[0][1][0];
} };
};
c$1420 = (t$1932(t$1931));
};
var fix$1933 = {};
fix$1933.$foldl = function(v$1422,v$1423){lab$foldl: while (true) {if (v$1423 == null) {return v$1422;
} else {var v$1424 = v$1423;
var v$1425 = v$1424[0];
var v$1426 = v$1424[1];
var t$1934 = f$930([v$1425,v$1422]);
var t$1935 = v$1426;
var v$1422 = t$1934;
var v$1423 = t$1935;
continue lab$foldl;
};
};
};
var foldl$1421 = fix$1933.$foldl;
return foldl$1421(b$933,c$1420);
};
compiler_objects$0Lvars$1$2.filter$937 = function(f$940,m$943){var l$944;
if (m$943 == null) {l$944 = null;
} else {var t$1937 = tools$0IntStringFinMap$1.range$284;
var t$1936;
if (m$943 == null) {m$943;
} else {var v$1736 = m$943;
switch (v$1736[0][0]) { case 0: {m$943;
 break; }default: {var v$1737 = v$1736[0][1];
var v$1738 = v$1737[0];
var v$1739 = v$1737[1];
if (v$1739 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$1740 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$548(v$1738);
var v$1741 = v$1740[1];
var v$1742 = v$1740[0];
if (v$1741) {(v$1736[0] = [0,v$1742],0);
m$943;
} else {(v$1736[0] = [1,[v$1742,special_objects$0Name$1.current_matchcount$69(0)]],0);
m$943;
};
} else {m$943;
};
} };
};
if (m$943 == null) {t$1936 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$1433 = m$943;
switch (v$1433[0][0]) { case 0: {t$1936 = v$1433[0][1];
 break; }default: {t$1936 = v$1433[0][1][0];
} };
};
l$944 = (t$1937(t$1936));
};
var l$$945 = basis$0List$1.filter$417(f$940,l$944);
return compiler_objects$0Lvars$1$2.fromList$806(l$$945);
};
compiler_objects$0Lvars$1$2.addList$946 = function(l$949,m1$952){var m2$953 = compiler_objects$0Lvars$1$2.fromList$806(l$949);
return compiler_objects$0Lvars$1$2.plus$692(m1$952,m2$953);
};
compiler_objects$0Lvars$1$2.mergeMap$954 = function(f$957,m1$960,m2$963){if (m1$960 == null) {m1$960;
} else {var v$1744 = m1$960;
switch (v$1744[0][0]) { case 0: {m1$960;
 break; }default: {var v$1745 = v$1744[0][1];
var v$1746 = v$1745[0];
var v$1747 = v$1745[1];
if (v$1747 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$1748 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$548(v$1746);
var v$1749 = v$1748[1];
var v$1750 = v$1748[0];
if (v$1749) {(v$1744[0] = [0,v$1750],0);
m1$960;
} else {(v$1744[0] = [1,[v$1750,special_objects$0Name$1.current_matchcount$69(0)]],0);
m1$960;
};
} else {m1$960;
};
} };
};
if (m2$963 == null) {m2$963;
} else {var v$1752 = m2$963;
switch (v$1752[0][0]) { case 0: {m2$963;
 break; }default: {var v$1753 = v$1752[0][1];
var v$1754 = v$1753[0];
var v$1755 = v$1753[1];
if (v$1755 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$1756 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$548(v$1754);
var v$1757 = v$1756[1];
var v$1758 = v$1756[0];
if (v$1757) {(v$1752[0] = [0,v$1758],0);
m2$963;
} else {(v$1752[0] = [1,[v$1758,special_objects$0Name$1.current_matchcount$69(0)]],0);
m2$963;
};
} else {m2$963;
};
} };
};
var rhs3$992 = function(obj$1009){var t$1946;
var t$1945;
var t$1944;
var t$1943;
var t$1942 = tools$0IntStringFinMap$1.mergeMap$374;
var t$1941 = function(v$1760){var v$1761 = v$1760[0];
var v$1762 = v$1761[0];
var v$1763 = v$1761[1];
var v$1764 = v$1760[1];
var v$1765 = v$1764[0];
var v$1766 = v$1764[1];
var t$1940;
var v$1767 = v$1762[2][0][1];
var v$1768 = v$1765[2][0][1];
t$1940 = ((v$1767[0] == v$1768[0])?(v$1767[1] == v$1768[1]):false);
if (t$1940) {return [v$1762,f$957([v$1763,v$1766])];
} else {return tools$0Crash$1.impossible$59("QuasiMap2.mergeMap, f'");
};
};
var t$1939;
if (m1$960 == null) {t$1939 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$1445 = m1$960;
switch (v$1445[0][0]) { case 0: {t$1939 = v$1445[0][1];
 break; }default: {t$1939 = v$1445[0][1][0];
} };
};
var t$1938;
if (m2$963 == null) {t$1938 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$1449 = m2$963;
switch (v$1449[0][0]) { case 0: {t$1938 = v$1449[0][1];
 break; }default: {t$1938 = v$1449[0][1][0];
} };
};
t$1943 = (t$1942(t$1941,t$1939,t$1938));
t$1944 = [t$1943,special_objects$0Name$1.current_matchcount$69(0)];
t$1945 = [1,t$1944];
t$1946 = [t$1945];
return t$1946;
};
if (m1$960 == null) {return m2$963;
} else {if (m2$963 == null) {return m1$960;
} else {var v$1001 = m1$960;
switch (v$1001[0][0]) { case 0: {var v$1003 = m2$963;
switch (v$1003[0][0]) { case 0: {var v$1005 = v$1001[0][1];
var v$1006 = v$1003[0][1];
return [[0,tools$0IntStringFinMap$1.mergeMap$374(function(v$1770){var v$1771 = v$1770[0];
var v$1772 = v$1771[0];
var v$1773 = v$1771[1];
var v$1774 = v$1770[1];
var v$1775 = v$1774[0];
var v$1776 = v$1774[1];
var t$1947;
var v$1777 = v$1772[2][0][1];
var v$1778 = v$1775[2][0][1];
t$1947 = ((v$1777[0] == v$1778[0])?(v$1777[1] == v$1778[1]):false);
if (t$1947) {return [v$1772,f$957([v$1773,v$1776])];
} else {return tools$0Crash$1.impossible$59("QuasiMap2.mergeMap, f'");
};
},v$1005,v$1006)]];
 break; }default: {return rhs3$992(0);
} };
 break; }default: {return rhs3$992(0);
} };
};
};
};
var fix$1948 = {};
fix$1948.$pp_lookup = function(v$1013,v$1016,v$1019){lab$pp_lookup: while (true) {if (v$1016 == null) {return tools$0Crash$1.impossible$59("QuasiMap2.pp_lookup; element not there");
} else {var v$1038 = v$1016;
var v$1039 = v$1038[0];
var v$1040 = v$1038[1];
var t$1949;
var v$1590 = v$1039[2][0][1];
t$1949 = ((v$1019[0] == v$1590[0])?(v$1019[1] == v$1590[1]):false);
if (t$1949) {return v$1013(v$1039);
} else {var t$1950 = v$1013;
var t$1951 = v$1040;
var t$1952 = v$1019;
var v$1013 = t$1950;
var v$1016 = t$1951;
var v$1019 = t$1952;
continue lab$pp_lookup;
};
};
};
};
compiler_objects$0Lvars$1$2.pp_lookup$1010 = fix$1948.$pp_lookup;
compiler_objects$0Lvars$1$2.en$Restrict$1042 = new String("Restrict");
compiler_objects$0Lvars$1$2.restrict$1043 = function(v$1857,v$1858,v$1056){if (v$1056 == null) {return null;
} else {if (v$1858 == null) {v$1858;
} else {var v$1782 = v$1858;
switch (v$1782[0][0]) { case 0: {v$1858;
 break; }default: {var v$1783 = v$1782[0][1];
var v$1784 = v$1783[0];
var v$1785 = v$1783[1];
if (v$1785 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$1786 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$548(v$1784);
var v$1787 = v$1786[1];
var v$1788 = v$1786[0];
if (v$1787) {(v$1782[0] = [0,v$1788],0);
v$1858;
} else {(v$1782[0] = [1,[v$1788,special_objects$0Name$1.current_matchcount$69(0)]],0);
v$1858;
};
} else {v$1858;
};
} };
};
if (v$1858 == null) {throw [compiler_objects$0Lvars$1$2.en$Restrict$1042,"[empty map]"];
} else {var im$1064;
if (v$1858 == null) {im$1064 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$1461 = v$1858;
switch (v$1461[0][0]) { case 0: {im$1064 = v$1461[0][1];
 break; }default: {im$1064 = v$1461[0][1][0];
} };
};
var ns$1065 = basis$0List$1.map$697(function(d$1464){return d$1464[2][0][1];
},v$1056);
var im$$1067;
try {var t$1959 = tools$0IntStringFinMap$1.restrict$391;
var t$1958;
var fix$1954 = {};
fix$1954.$pp_lookup = function(v$1872,v$1873){lab$pp_lookup: while (true) {if (v$1872 == null) {return tools$0Crash$1.impossible$59("QuasiMap2.pp_lookup; element not there");
} else {var v$1874 = v$1872;
var v$1875 = v$1874[0];
var v$1876 = v$1874[1];
var t$1955;
var v$1877 = v$1875[2][0][1];
t$1955 = ((v$1873[0] == v$1877[0])?(v$1873[1] == v$1877[1]):false);
if (t$1955) {return v$1857(v$1875);
} else {var t$1956 = v$1876;
var t$1957 = v$1873;
var v$1872 = t$1956;
var v$1873 = t$1957;
continue lab$pp_lookup;
};
};
};
};
var pp_lookup$1871 = fix$1954.$pp_lookup;
t$1958 = (function(v$1878){return pp_lookup$1871(v$1056,v$1878);
});
im$$1067 = (t$1959(t$1958,im$1064,ns$1065));
} catch(v$1953) {im$$1067 = ((function(v$1071){var t$1960 = v$1071;
if (t$1960[0] == tools$0IntStringFinMap$1.en$Restrict$390) {var s$1068 = v$1071[1];
throw [compiler_objects$0Lvars$1$2.en$Restrict$1042,s$1068];
} else {throw v$1071;
};
})(v$1953));
};
return (tools$0IntStringFinMap$1.fold$62(function(v$1076){var v$1081 = v$1076[0];
var v$1082 = v$1081[0];
return v$1076[1]?v$1082[2][0][2]:false;
},true,im$$1067))?[[0,im$$1067]]:[[1,[im$$1067,special_objects$0Name$1.current_matchcount$69(0)]]];
};
};
};
compiler_objects$0Lvars$1$2.enrich$1090 = function(f$1093,v$1097){var v$1121 = v$1097[0];
var v$1122 = v$1097[1];
if (v$1121 == null) {v$1121;
} else {var v$1790 = v$1121;
switch (v$1790[0][0]) { case 0: {v$1121;
 break; }default: {var v$1791 = v$1790[0][1];
var v$1792 = v$1791[0];
var v$1793 = v$1791[1];
if (v$1793 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$1794 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$548(v$1792);
var v$1795 = v$1794[1];
var v$1796 = v$1794[0];
if (v$1795) {(v$1790[0] = [0,v$1796],0);
v$1121;
} else {(v$1790[0] = [1,[v$1796,special_objects$0Name$1.current_matchcount$69(0)]],0);
v$1121;
};
} else {v$1121;
};
} };
};
if (v$1122 == null) {v$1122;
} else {var v$1798 = v$1122;
switch (v$1798[0][0]) { case 0: {v$1122;
 break; }default: {var v$1799 = v$1798[0][1];
var v$1800 = v$1799[0];
var v$1801 = v$1799[1];
if (v$1801 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$1802 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$548(v$1800);
var v$1803 = v$1802[1];
var v$1804 = v$1802[0];
if (v$1803) {(v$1798[0] = [0,v$1804],0);
v$1122;
} else {(v$1798[0] = [1,[v$1804,special_objects$0Name$1.current_matchcount$69(0)]],0);
v$1122;
};
} else {v$1122;
};
} };
};
if (v$1122 == null) {return true;
} else {if (v$1121 == null) {return false;
} else {var im1$1110;
if (v$1121 == null) {im1$1110 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$1469 = v$1121;
switch (v$1469[0][0]) { case 0: {im1$1110 = v$1469[0][1];
 break; }default: {im1$1110 = v$1469[0][1][0];
} };
};
var im2$1111;
if (v$1122 == null) {im2$1111 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$1473 = v$1122;
switch (v$1473[0][0]) { case 0: {im2$1111 = v$1473[0][1];
 break; }default: {im2$1111 = v$1473[0][1][0];
} };
};
return tools$0IntStringFinMap$1.enrich$414(function(v$1476){var v$1477 = v$1476[0];
var v$1478 = v$1477[1];
var v$1479 = v$1476[1];
var v$1480 = v$1479[1];
return f$1093([v$1478,v$1480]);
},[im1$1110,im2$1111]);
};
};
};
compiler_objects$0Lvars$1$2.layoutMap$1123 = function(v$1157,v$1159,v$1158,v$1156){return function(pp_dom$1132){return function(pp_range$1135){return function(m$1138){var t$1961;
var v$1154 = [0,v$1158];
var t$1968;
var t$1967 = basis$0List$1.map$697;
var t$1966 = function(v$1481){var v$1482 = v$1481[0];
var v$1483 = v$1481[1];
var t$1965;
var v$1484 = [0,v$1157];
t$1965 = [[pp_dom$1132(v$1482),[pp_range$1135(v$1483),null]],v$1484,"",1,""];
return [0,t$1965];
};
var t$1964;
if (m$1138 == null) {t$1964 = null;
} else {var t$1963 = tools$0IntStringFinMap$1.range$284;
var t$1962;
if (m$1138 == null) {m$1138;
} else {var v$1806 = m$1138;
switch (v$1806[0][0]) { case 0: {m$1138;
 break; }default: {var v$1807 = v$1806[0][1];
var v$1808 = v$1807[0];
var v$1809 = v$1807[1];
if (v$1809 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$1810 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$548(v$1808);
var v$1811 = v$1810[1];
var v$1812 = v$1810[0];
if (v$1811) {(v$1806[0] = [0,v$1812],0);
m$1138;
} else {(v$1806[0] = [1,[v$1812,special_objects$0Name$1.current_matchcount$69(0)]],0);
m$1138;
};
} else {m$1138;
};
} };
};
if (m$1138 == null) {t$1962 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$1487 = m$1138;
switch (v$1487[0][0]) { case 0: {t$1962 = v$1487[0][1];
 break; }default: {t$1962 = v$1487[0][1][0];
} };
};
t$1964 = (t$1963(t$1962));
};
t$1968 = (t$1967(t$1966,t$1964));
t$1961 = [t$1968,v$1154,v$1159,1,v$1156];
return [0,t$1961];
};
};
};
};
compiler_objects$0Lvars$1$2.reportMap$1160 = function(f$1163,m$1166){var t$1975 = tools$0Report$1.flatten$87;
var t$1974;
var t$1973 = basis$0List$1.map$697;
var t$1972 = f$1163;
var t$1971;
if (m$1166 == null) {t$1971 = null;
} else {var t$1970 = tools$0IntStringFinMap$1.range$284;
var t$1969;
if (m$1166 == null) {m$1166;
} else {var v$1814 = m$1166;
switch (v$1814[0][0]) { case 0: {m$1166;
 break; }default: {var v$1815 = v$1814[0][1];
var v$1816 = v$1815[0];
var v$1817 = v$1815[1];
if (v$1817 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$1818 = compiler_objects$0Lvars$1$2.ensure_consistent_imap$548(v$1816);
var v$1819 = v$1818[1];
var v$1820 = v$1818[0];
if (v$1819) {(v$1814[0] = [0,v$1820],0);
m$1166;
} else {(v$1814[0] = [1,[v$1820,special_objects$0Name$1.current_matchcount$69(0)]],0);
m$1166;
};
} else {m$1166;
};
} };
};
if (m$1166 == null) {t$1969 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$1491 = m$1166;
switch (v$1491[0][0]) { case 0: {t$1969 = v$1491[0][1];
 break; }default: {t$1969 = v$1491[0][1][0];
} };
};
t$1971 = (t$1970(t$1969));
};
t$1974 = (t$1973(t$1972,t$1971));
return t$1975(t$1974);
};
compiler_objects$0Lvars$1$2.pu_map0$1167 = function(pu_d$1170,pu_a$1173){var pu_m$1182 = pickle$0pickle$1.combHash$2090(function(m$1493){return tools$0IntStringFinMap$1.fold$62(function(v$1494){return SmlPrims.chk_ovf_i32(v$1494[1] + 1);
},0,m$1493);
},tools$0IntStringFinMap$1.pu$488(pickle$0pickle$1.pairGen$1053([pickle$0pickle$1.int$729,pickle$0pickle$1.string$909]),pickle$0pickle$1.pairGen$1053([pu_d$1170,pu_a$1173])));
return pickle$0pickle$1.dataGen$1488(["QuasiMap.map0",function(v$1499){switch (v$1499[0]) { case 0: {return 0;
 break; }default: {return 1;
} };
},[function(v$1500){return pickle$0pickle$1.con1$2014(function(v$1501){return [0,v$1501];
},function(v$1502){switch (v$1502[0]) { case 0: {return v$1502[1];
 break; }default: {return tools$0Crash$1.impossible$59("QuasiMap2.pu_map0.Rigid");
} };
},pu_m$1182);
},[function(v$1505){return pickle$0pickle$1.con1$2014(function(v$1506){return [1,[v$1506[1],-1]];
},function(v$1507){switch (v$1507[0]) { case 1: {var v$1508 = v$1507[1];
return [v$1508[1],v$1508[0]];
 break; }default: {return tools$0Crash$1.impossible$59("QuasiMap2.pu_map0.Flexible");
} };
},pickle$0pickle$1.pairGen0$983(special_objects$0Name$1.pu_matchcount$298,pu_m$1182));
},null]]]);
};
compiler_objects$0Lvars$1$2.pu$1224 = function(pu_d$1227,pu_a$1230){return pickle$0pickle$1.convert$2342([function(v$1517){switch (v$1517[0]) { case 0: {var v$1518 = v$1517[1];
return v$1518;
 break; }default: {return null;
} };
},function(v$1519){if (v$1519 == null) {return [1];
} else {var v$1520 = v$1519;
var t$1978;
var t$1977 = tools$0IntStringFinMap$1.isEmpty$128(0);
var t$1976;
if (v$1519 == null) {t$1976 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$1522 = v$1519;
switch (v$1522[0][0]) { case 0: {t$1976 = v$1522[0][1];
 break; }default: {t$1976 = v$1522[0][1][0];
} };
};
t$1978 = (t$1977(t$1976));
if (t$1978) {return tools$0Crash$1.impossible$59("QuasiMap2.pu.hmmm");
} else {return [0,v$1520];
};
};
}],pickle$0pickle$1.optionGen$2134(pickle$0pickle$1.ref0ShGen$1268(compiler_objects$0Lvars$1$2.pu_map0$1167(pu_d$1227,pu_a$1230))));
};
return 0;
})();
