if ((typeof(basics$0PreElabTopdecGrammar$1$1)) == "undefined") {basics$0PreElabTopdecGrammar$1$1 = {};
};
(function(){basics$0PreElabTopdecGrammar$1$1.empty_topdec$202 = [0,[basics$0PreElabDecGrammar$1$2.bogus_info$146,[3,basics$0PreElabDecGrammar$1$2.bogus_info$146],[1]]];
basics$0PreElabTopdecGrammar$1$1.info_on_strexp$203 = function(v$206){switch (v$206[0]) { case 1: {return v$206[1][0];
 break; }case 3: {return v$206[1][0];
 break; }case 0: {return v$206[1][0];
 break; }case 2: {return v$206[1][0];
 break; }case 5: {return v$206[1][0];
 break; }default: {return v$206[1][0];
} };
};
basics$0PreElabTopdecGrammar$1$1.info_on_strdec$262 = function(v$265){switch (v$265[0]) { case 4: {return v$265[1][0];
 break; }case 0: {return v$265[1][0];
 break; }case 2: {return v$265[1][0];
 break; }case 3: {return v$265[1];
 break; }default: {return v$265[1][0];
} };
};
basics$0PreElabTopdecGrammar$1$1.info_on_strbind$306 = function(v$309){return v$309[1][0];
};
basics$0PreElabTopdecGrammar$1$1.info_on_sigexp$321 = function(v$324){switch (v$324[0]) { case 1: {return v$324[1][0];
 break; }case 2: {return v$324[1][0];
 break; }default: {return v$324[1][0];
} };
};
basics$0PreElabTopdecGrammar$1$1.info_on_sigdec$354 = function(v$357){return v$357[1][0];
};
basics$0PreElabTopdecGrammar$1$1.info_on_sigbind$365 = function(v$368){return v$368[1][0];
};
basics$0PreElabTopdecGrammar$1$1.info_on_spec$380 = function(v$383){switch (v$383[0]) { case 0: {return v$383[1][0];
 break; }case 1: {return v$383[1][0];
 break; }case 8: {return v$383[1][0];
 break; }case 10: {return v$383[1][0];
 break; }case 11: {return v$383[1][0];
 break; }case 7: {return v$383[1][0];
 break; }case 2: {return v$383[1][0];
 break; }case 6: {return v$383[1][0];
 break; }case 4: {return v$383[1][0];
 break; }case 3: {return v$383[1][0];
 break; }case 9: {return v$383[1];
 break; }default: {return v$383[1][0];
} };
};
basics$0PreElabTopdecGrammar$1$1.info_on_valdesc$484 = function(v$487){return v$487[1][0];
};
basics$0PreElabTopdecGrammar$1$1.info_on_typdesc$499 = function(v$502){return v$502[1][0];
};
basics$0PreElabTopdecGrammar$1$1.info_on_datdesc$514 = function(v$517){return v$517[1][0];
};
basics$0PreElabTopdecGrammar$1$1.info_on_condesc$531 = function(v$534){return v$534[1][0];
};
basics$0PreElabTopdecGrammar$1$1.info_on_exdesc$546 = function(v$549){return v$549[1][0];
};
basics$0PreElabTopdecGrammar$1$1.info_on_strdesc$561 = function(v$564){return v$564[1][0];
};
basics$0PreElabTopdecGrammar$1$1.info_on_fundec$576 = function(v$579){return v$579[1][0];
};
basics$0PreElabTopdecGrammar$1$1.info_on_funbind$587 = function(v$590){return v$590[1][0];
};
basics$0PreElabTopdecGrammar$1$1.info_on_topdec$606 = function(v$609){switch (v$609[0]) { case 0: {return v$609[1][0];
 break; }case 1: {return v$609[1][0];
 break; }default: {return v$609[1][0];
} };
};
var fix$1840 = {};
fix$1840.$map_strdec_info = function(f$705,strdec$708){switch (strdec$708[0]) { case 4: {var v$742 = strdec$708[1];
var v$743 = v$742[0];
var v$744 = v$742[1];
return [4,[f$705(v$743),basics$0PreElabDecGrammar$1$2.map_dec_info$818(f$705,v$744)]];
 break; }case 0: {var v$738 = strdec$708[1];
var v$739 = v$738[0];
var v$740 = v$738[1];
return [0,[f$705(v$739),fix$1840.$map_strbind_info(f$705,v$740)]];
 break; }case 2: {var v$733 = strdec$708[1];
var v$734 = v$733[0];
var v$735 = v$733[1];
var v$736 = v$733[2];
return [2,[f$705(v$734),fix$1840.$map_strdec_info(f$705,v$735),fix$1840.$map_strdec_info(f$705,v$736)]];
 break; }case 3: {var v$731 = strdec$708[1];
return [3,f$705(v$731)];
 break; }default: {var v$745 = strdec$708[1];
var v$746 = v$745[0];
var v$747 = v$745[1];
var v$748 = v$745[2];
return [1,[f$705(v$746),fix$1840.$map_strdec_info(f$705,v$747),fix$1840.$map_strdec_info(f$705,v$748)]];
} };
};
fix$1840.$map_strexp_info = function(f$644,strexp$647){switch (strexp$647[0]) { case 1: {var v$696 = strexp$647[1];
var v$697 = v$696[0];
var v$698 = v$696[1];
return [1,[f$644(v$697),fix$1840.$map_strdec_info(f$644,v$698)]];
 break; }case 3: {var v$692 = strexp$647[1];
var v$693 = v$692[0];
var v$694 = v$692[1];
return [3,[f$644(v$693),v$694]];
 break; }case 0: {var v$687 = strexp$647[1];
var v$688 = v$687[0];
var v$689 = v$687[1];
var v$690 = v$687[2];
return [0,[f$644(v$688),fix$1840.$map_strexp_info(f$644,v$689),v$690]];
 break; }case 2: {var v$682 = strexp$647[1];
var v$683 = v$682[0];
var v$684 = v$682[1];
var v$685 = v$682[2];
return [2,[f$644(v$683),fix$1840.$map_strexp_info(f$644,v$684),v$685]];
 break; }case 5: {var v$677 = strexp$647[1];
var v$678 = v$677[0];
var v$679 = v$677[1];
var v$680 = v$677[2];
return [5,[f$644(v$678),v$679,fix$1840.$map_strexp_info(f$644,v$680)]];
 break; }default: {var v$699 = strexp$647[1];
var v$700 = v$699[0];
var v$701 = v$699[1];
var v$702 = v$699[2];
return [4,[f$644(v$700),fix$1840.$map_strdec_info(f$644,v$701),fix$1840.$map_strexp_info(f$644,v$702)]];
} };
};
fix$1840.$map_strbind_info = function(f$751,strbind$754){var v$768 = strbind$754[1];
var v$769 = v$768[0];
var v$770 = v$768[1];
var v$771 = v$768[2];
var v$772 = v$768[3];
var t$2004;
var t$2003 = f$751(v$769);
var t$2002 = v$770;
var t$2001 = fix$1840.$map_strexp_info(f$751,v$771);
var t$2000;
switch (v$772[0]) { case 0: {var v$767 = v$772[1];
t$2000 = [0,fix$1840.$map_strbind_info(f$751,v$767)];
 break; }default: {t$2000 = [1];
} };
t$2004 = [t$2003,t$2002,t$2001,t$2000];
return [0,t$2004];
};
basics$0PreElabTopdecGrammar$1$1.map_strdec_info$640 = fix$1840.$map_strdec_info;
basics$0PreElabTopdecGrammar$1$1.map_strexp_info$641 = fix$1840.$map_strexp_info;
basics$0PreElabTopdecGrammar$1$1.map_strbind_info$639 = fix$1840.$map_strbind_info;
var fix$1841 = {};
fix$1841.$f = function(res$776,v$779){lab$f: while (true) {var v$800 = v$779[1];
var v$801 = v$800[2];
var v$802 = v$800[3];
var res$$785;
switch (v$801[0]) { case 1: {res$$785 = res$776;
 break; }default: {var v$791 = v$801[1];
res$$785 = (basis$0List$1.s$n$686(basics$0PreElabDecGrammar$1$2.getExplicitTyVarsTy$1806(v$791),res$776));
} };
switch (v$802[0]) { case 1: {return res$$785;
 break; }default: {var v$797 = v$802[1];
var t$1842 = res$$785;
var t$1843 = v$797;
var res$776 = t$1842;
var v$779 = t$1843;
continue lab$f;
} };
};
};
var f$773 = fix$1841.$f;
basics$0PreElabTopdecGrammar$1$1.getExplicitTyVarsCondesc$803;
var v$1822 = null;
basics$0PreElabTopdecGrammar$1$1.getExplicitTyVarsCondesc$803 = (function(v$1823){return f$773(v$1822,v$1823);
});
basics$0PreElabTopdecGrammar$1$1.INDENT$804 = 3;
var fix$1844 = {};
fix$1844.$makeList = function(f$808,x$811){var t$1999;
var t$1998 = x$811;
var t$1997;
var v$816 = f$808(x$811);
switch (v$816[0]) { case 0: {var v$818 = v$816[1];
t$1997 = (fix$1844.$makeList(f$808,v$818));
 break; }default: {t$1997 = null;
} };
t$1999 = [t$1998,t$1997];
return t$1999;
};
basics$0PreElabTopdecGrammar$1$1.makeList$805 = fix$1844.$makeList;
basics$0PreElabTopdecGrammar$1$1.layoutExdesc$822 = function(exdesc$1357){var exdescs$1358;
var fix$1845 = {};
fix$1845.$makeList = function(x$1701){var t$1848;
var t$1847 = x$1701;
var t$1846;
var v$1702 = x$1701[1][3];
switch (v$1702[0]) { case 0: {var v$1703 = v$1702[1];
t$1846 = (fix$1845.$makeList(v$1703));
 break; }default: {t$1846 = null;
} };
t$1848 = [t$1847,t$1846];
return t$1848;
};
var makeList$1700 = fix$1845.$makeList;
exdescs$1358 = (makeList$1700(exdesc$1357));
return [0,[basis$0List$1.map$697(function(v$1545){var v$1546 = v$1545[1];
var v$1547 = v$1546[1];
var v$1548 = v$1546[2];
var t$1853;
var t$1852;
var t$1851;
var t$1850 = tools$0PrettyPrint$1.layoutAtom$189(function(v$1824){return syntax_objects$0Ident$1.pr_id$62(v$1824);
},v$1547);
var t$1849;
switch (v$1548[0]) { case 0: {var v$1549 = v$1548[1];
t$1849 = [basics$0PreElabDecGrammar$1$2.layoutTy$1897(v$1549),null];
 break; }default: {t$1849 = null;
} };
t$1851 = [t$1850,t$1849];
t$1852 = t$1851;
t$1853 = [t$1852,[2," of "],"",0,""];
return [0,t$1853];
},exdescs$1358),[2," and "],"",0,""]];
};
basics$0PreElabTopdecGrammar$1$1.layoutDatdesc$823 = function(datdesc$1268){var datdescs$1269;
var fix$1854 = {};
fix$1854.$makeList = function(x$1708){var t$1857;
var t$1856 = x$1708;
var t$1855;
var v$1709 = x$1708[1][4];
switch (v$1709[0]) { case 0: {var v$1710 = v$1709[1];
t$1855 = (fix$1854.$makeList(v$1710));
 break; }default: {t$1855 = null;
} };
t$1857 = [t$1856,t$1855];
return t$1857;
};
var makeList$1707 = fix$1854.$makeList;
datdescs$1269 = (makeList$1707(datdesc$1268));
return [0,[basis$0List$1.map$697(function(v$1567){var v$1568 = v$1567[1];
var v$1569 = v$1568[1];
var v$1570 = v$1568[2];
var v$1571 = v$1568[3];
var t$1877;
var t$1876;
var t$1875;
var t$1874;
var t$1873;
var t$1872;
var t$1871 = basis$0List$1.s$n$686;
var t$1870;
var v$1575 = basics$0PreElabDecGrammar$1$2.layoutTyvarseq$1905(v$1569);
switch (v$1575[0]) { case 0: {t$1870 = [v$1575[1],null];
 break; }default: {t$1870 = null;
} };
t$1872 = (t$1871(t$1870,[tools$0PrettyPrint$1.layoutAtom$189(function(v$1825){return syntax_objects$0TyCon$1.pr_TyCon$62(v$1825);
},v$1570),null]));
t$1873 = [t$1872,[0," "],"",0,""];
t$1874 = [0,t$1873];
var t$1869;
var t$1868;
var t$1859;
var condescs$1577;
var fix$1858 = {};
fix$1858.$makeList = function(x$1715){var t$1862;
var t$1861 = x$1715;
var t$1860;
var v$1716 = x$1715[1][3];
switch (v$1716[0]) { case 0: {var v$1717 = v$1716[1];
t$1860 = (fix$1858.$makeList(v$1717));
 break; }default: {t$1860 = null;
} };
t$1862 = [t$1861,t$1860];
return t$1862;
};
var makeList$1714 = fix$1858.$makeList;
condescs$1577 = (makeList$1714(v$1571));
t$1859 = [0,[basis$0List$1.map$697(function(v$1579){var v$1580 = v$1579[1];
var v$1581 = v$1580[1];
var v$1582 = v$1580[2];
var t$1867;
var t$1866;
var t$1865;
var t$1864 = tools$0PrettyPrint$1.layoutAtom$189(function(v$1826){return syntax_objects$0Ident$1.pr_id$62(v$1826);
},v$1581);
var t$1863;
switch (v$1582[0]) { case 0: {var v$1583 = v$1582[1];
t$1863 = [basics$0PreElabDecGrammar$1$2.layoutTy$1897(v$1583),null];
 break; }default: {t$1863 = null;
} };
t$1865 = [t$1864,t$1863];
t$1866 = t$1865;
t$1867 = [t$1866,[2," of "],"",0,""];
return [0,t$1867];
},condescs$1577),[2," | "],"",0,""]];
t$1868 = [t$1859,null];
t$1869 = t$1868;
t$1875 = [t$1874,t$1869];
t$1876 = t$1875;
t$1877 = [t$1876,[0," = "],"",0,""];
return [0,t$1877];
},datdescs$1269),[2," and "],"",0,""]];
};
basics$0PreElabTopdecGrammar$1$1.layoutTypdesc$824 = function(typdesc$1231){var typdescs$1232;
var fix$1878 = {};
fix$1878.$makeList = function(x$1722){var t$1881;
var t$1880 = x$1722;
var t$1879;
var v$1723 = x$1722[1][3];
switch (v$1723[0]) { case 0: {var v$1724 = v$1723[1];
t$1879 = (fix$1878.$makeList(v$1724));
 break; }default: {t$1879 = null;
} };
t$1881 = [t$1880,t$1879];
return t$1881;
};
var makeList$1721 = fix$1878.$makeList;
typdescs$1232 = (makeList$1721(typdesc$1231));
return [0,[basis$0List$1.map$697(function(v$1584){var v$1585 = v$1584[1];
var v$1586 = v$1585[1];
var v$1587 = v$1585[2];
var t$1885;
var t$1884;
var t$1883 = basis$0List$1.s$n$686;
var t$1882;
var v$1588 = basics$0PreElabDecGrammar$1$2.layoutTyvarseq$1905(v$1586);
switch (v$1588[0]) { case 0: {t$1882 = [v$1588[1],null];
 break; }default: {t$1882 = null;
} };
t$1884 = (t$1883(t$1882,[tools$0PrettyPrint$1.layoutAtom$189(function(v$1827){return syntax_objects$0TyCon$1.pr_TyCon$62(v$1827);
},v$1587),null]));
t$1885 = [t$1884,[0," "],"",0,""];
return [0,t$1885];
},typdescs$1232),[2," and "],"",0,""]];
};
basics$0PreElabTopdecGrammar$1$1.layoutValdesc$825 = function(valdesc$1201){var valdescs$1202;
var fix$1886 = {};
fix$1886.$makeList = function(x$1729){var t$1889;
var t$1888 = x$1729;
var t$1887;
var v$1730 = x$1729[1][3];
switch (v$1730[0]) { case 0: {var v$1731 = v$1730[1];
t$1887 = (fix$1886.$makeList(v$1731));
 break; }default: {t$1887 = null;
} };
t$1889 = [t$1888,t$1887];
return t$1889;
};
var makeList$1728 = fix$1886.$makeList;
valdescs$1202 = (makeList$1728(valdesc$1201));
return [0,[basis$0List$1.map$697(function(v$1589){var v$1590 = v$1589[1];
var v$1591 = v$1590[1];
var v$1592 = v$1590[2];
return [0,[[tools$0PrettyPrint$1.layoutAtom$189(function(v$1828){return syntax_objects$0Ident$1.pr_id$62(v$1828);
},v$1591),[basics$0PreElabDecGrammar$1$2.layoutTy$1897(v$1592),null]],[2," : "],"",0,""]];
},valdescs$1202),[2," and "],"",0,""]];
};
var fix$1890 = {};
fix$1890.$layoutSpec = function(spec$1062){switch (spec$1062[0]) { case 0: {var v$1189 = spec$1062[1];
var v$1190 = v$1189[1];
var t$1996;
var t$1995;
var t$1994;
var t$1990;
var valdescs$1598;
var fix$1989 = {};
fix$1989.$makeList = function(x$1743){var t$1993;
var t$1992 = x$1743;
var t$1991;
var v$1744 = x$1743[1][3];
switch (v$1744[0]) { case 0: {var v$1745 = v$1744[1];
t$1991 = (fix$1989.$makeList(v$1745));
 break; }default: {t$1991 = null;
} };
t$1993 = [t$1992,t$1991];
return t$1993;
};
var makeList$1742 = fix$1989.$makeList;
valdescs$1598 = (makeList$1742(v$1190));
t$1990 = [0,[basis$0List$1.map$697(function(v$1600){var v$1601 = v$1600[1];
var v$1602 = v$1601[1];
var v$1603 = v$1601[2];
return [0,[[tools$0PrettyPrint$1.layoutAtom$189(function(v$1831){return syntax_objects$0Ident$1.pr_id$62(v$1831);
},v$1602),[basics$0PreElabDecGrammar$1$2.layoutTy$1897(v$1603),null]],[2," : "],"",0,""]];
},valdescs$1598),[2," and "],"",0,""]];
t$1994 = [t$1990,null];
t$1995 = t$1994;
t$1996 = [t$1995,[1],"",3,"val "];
return [0,t$1996];
 break; }case 1: {var v$1181 = spec$1062[1];
var v$1182 = v$1181[1];
var t$1988;
var t$1987;
var t$1986;
var t$1978;
var typdescs$1605;
var fix$1977 = {};
fix$1977.$makeList = function(x$1750){var t$1981;
var t$1980 = x$1750;
var t$1979;
var v$1751 = x$1750[1][3];
switch (v$1751[0]) { case 0: {var v$1752 = v$1751[1];
t$1979 = (fix$1977.$makeList(v$1752));
 break; }default: {t$1979 = null;
} };
t$1981 = [t$1980,t$1979];
return t$1981;
};
var makeList$1749 = fix$1977.$makeList;
typdescs$1605 = (makeList$1749(v$1182));
t$1978 = [0,[basis$0List$1.map$697(function(v$1607){var v$1608 = v$1607[1];
var v$1609 = v$1608[1];
var v$1610 = v$1608[2];
var t$1985;
var t$1984;
var t$1983 = basis$0List$1.s$n$686;
var t$1982;
var v$1611 = basics$0PreElabDecGrammar$1$2.layoutTyvarseq$1905(v$1609);
switch (v$1611[0]) { case 0: {t$1982 = [v$1611[1],null];
 break; }default: {t$1982 = null;
} };
t$1984 = (t$1983(t$1982,[tools$0PrettyPrint$1.layoutAtom$189(function(v$1832){return syntax_objects$0TyCon$1.pr_TyCon$62(v$1832);
},v$1610),null]));
t$1985 = [t$1984,[0," "],"",0,""];
return [0,t$1985];
},typdescs$1605),[2," and "],"",0,""]];
t$1986 = [t$1978,null];
t$1987 = t$1986;
t$1988 = [t$1987,[1],"",3,"type "];
return [0,t$1988];
 break; }case 8: {var v$1173 = spec$1062[1];
var v$1174 = v$1173[1];
var t$1976;
var t$1975;
var t$1974;
var t$1966;
var typdescs$1613;
var fix$1965 = {};
fix$1965.$makeList = function(x$1757){var t$1969;
var t$1968 = x$1757;
var t$1967;
var v$1758 = x$1757[1][3];
switch (v$1758[0]) { case 0: {var v$1759 = v$1758[1];
t$1967 = (fix$1965.$makeList(v$1759));
 break; }default: {t$1967 = null;
} };
t$1969 = [t$1968,t$1967];
return t$1969;
};
var makeList$1756 = fix$1965.$makeList;
typdescs$1613 = (makeList$1756(v$1174));
t$1966 = [0,[basis$0List$1.map$697(function(v$1615){var v$1616 = v$1615[1];
var v$1617 = v$1616[1];
var v$1618 = v$1616[2];
var t$1973;
var t$1972;
var t$1971 = basis$0List$1.s$n$686;
var t$1970;
var v$1619 = basics$0PreElabDecGrammar$1$2.layoutTyvarseq$1905(v$1617);
switch (v$1619[0]) { case 0: {t$1970 = [v$1619[1],null];
 break; }default: {t$1970 = null;
} };
t$1972 = (t$1971(t$1970,[tools$0PrettyPrint$1.layoutAtom$189(function(v$1833){return syntax_objects$0TyCon$1.pr_TyCon$62(v$1833);
},v$1618),null]));
t$1973 = [t$1972,[0," "],"",0,""];
return [0,t$1973];
},typdescs$1613),[2," and "],"",0,""]];
t$1974 = [t$1966,null];
t$1975 = t$1974;
t$1976 = [t$1975,[1],"",3,"eqtype "];
return [0,t$1976];
 break; }case 10: {var v$1165 = spec$1062[1];
var v$1166 = v$1165[1];
return [0,[[basics$0PreElabTopdecGrammar$1$1.layoutDatdesc$823(v$1166),null],[1],"",3,"datatype "]];
 break; }case 11: {var v$1155 = spec$1062[1];
var v$1156 = v$1155[0];
var v$1157 = v$1155[1];
var v$1158 = v$1155[2];
return basics$0PreElabDecGrammar$1$2.layout_datatype_replication$1907(v$1156,v$1157,v$1158);
 break; }case 7: {var v$1152 = spec$1062[1];
var v$1153 = v$1152[1];
var t$1964;
var t$1963;
var t$1962;
var t$1953;
var exdescs$1621;
var fix$1952 = {};
fix$1952.$makeList = function(x$1764){var t$1956;
var t$1955 = x$1764;
var t$1954;
var v$1765 = x$1764[1][3];
switch (v$1765[0]) { case 0: {var v$1766 = v$1765[1];
t$1954 = (fix$1952.$makeList(v$1766));
 break; }default: {t$1954 = null;
} };
t$1956 = [t$1955,t$1954];
return t$1956;
};
var makeList$1763 = fix$1952.$makeList;
exdescs$1621 = (makeList$1763(v$1153));
t$1953 = [0,[basis$0List$1.map$697(function(v$1623){var v$1624 = v$1623[1];
var v$1625 = v$1624[1];
var v$1626 = v$1624[2];
var t$1961;
var t$1960;
var t$1959;
var t$1958 = tools$0PrettyPrint$1.layoutAtom$189(function(v$1834){return syntax_objects$0Ident$1.pr_id$62(v$1834);
},v$1625);
var t$1957;
switch (v$1626[0]) { case 0: {var v$1627 = v$1626[1];
t$1957 = [basics$0PreElabDecGrammar$1$2.layoutTy$1897(v$1627),null];
 break; }default: {t$1957 = null;
} };
t$1959 = [t$1958,t$1957];
t$1960 = t$1959;
t$1961 = [t$1960,[2," of "],"",0,""];
return [0,t$1961];
},exdescs$1621),[2," and "],"",0,""]];
t$1962 = [t$1953,null];
t$1963 = t$1962;
t$1964 = [t$1963,[1],"",3,"exception "];
return [0,t$1964];
 break; }case 2: {var v$1144 = spec$1062[1];
var v$1145 = v$1144[1];
return [0,[[fix$1890.$layoutStrdesc(v$1145),null],[1],"",3,"structure "]];
 break; }case 6: {var v$1136 = spec$1062[1];
var v$1137 = v$1136[1];
return [0,[[fix$1890.$layoutSigexp(v$1137),null],[1],"",8,"include "]];
 break; }case 4: {var v$1126 = spec$1062[1];
var v$1128 = v$1126[1];
var v$1129 = v$1126[2];
var st_longtycon_withinfo_list$1119;
var t$1951;
var v$1124 = [2," = "];
t$1951 = [basis$0List$1.map$697(function(x$1631){var x$1772 = basics$0PreElabDecGrammar$1$2.strip_info$149(x$1631);
var v$1773 = syntax_objects$0TyCon$1.pr_LongTyCon$71(x$1772);
return [1,v$1773];
},v$1129),v$1124,"",3," sharing type "];
st_longtycon_withinfo_list$1119 = [0,t$1951];
return tools$0PrettyPrint$1.layout_together$245([fix$1890.$layoutSpec(v$1128),[st_longtycon_withinfo_list$1119,null]],3);
 break; }case 3: {var v$1114 = spec$1062[1];
var v$1116 = v$1114[1];
var v$1117 = v$1114[2];
var st_longstrid_withinfo_list$1107;
var t$1950;
var v$1112 = [2," = "];
t$1950 = [basis$0List$1.map$697(function(x$1639){var x$1778 = basics$0PreElabDecGrammar$1$2.strip_info$149(x$1639);
var v$1779 = syntax_objects$0StrId$1.pr_LongStrId$70(x$1778);
return [1,v$1779];
},v$1117),v$1112,"",3," sharing "];
st_longstrid_withinfo_list$1107 = [0,t$1950];
return tools$0PrettyPrint$1.layout_together$245([fix$1890.$layoutSpec(v$1116),[st_longstrid_withinfo_list$1107,null]],3);
 break; }case 9: {return [1,""];
 break; }default: {var v$1196 = spec$1062[1];
var v$1197 = v$1196[1];
var v$1198 = v$1196[2];
return [0,[[fix$1890.$layoutSpec(v$1197),[fix$1890.$layoutSpec(v$1198),null]],[0,"; "],"",0,""]];
} };
};
fix$1890.$layoutSigexp = function(sigexp$974){switch (sigexp$974[0]) { case 1: {var v$997 = sigexp$974[1];
var v$998 = v$997[1];
return [0,[[fix$1890.$layoutSpec(v$998),null],[1]," end",3,"sig "]];
 break; }case 2: {var v$989 = sigexp$974[1];
var v$990 = v$989[1];
return tools$0PrettyPrint$1.layoutAtom$189(function(v$1830){return syntax_objects$0SigId$1.pr_SigId$60(v$1830);
},v$990);
 break; }default: {var v$1011 = sigexp$974[1];
var v$1013 = v$1011[1];
var v$1014 = v$1011[2];
var v$1015 = v$1011[3];
var v$1016 = v$1011[4];
var t$1949 = tools$0PrettyPrint$1.layout_together$245;
var t$1948;
var t$1947;
var t$1946 = fix$1890.$layoutSigexp(v$1013);
var t$1945;
var t$1944;
var t$1943;
var t$1942;
var t$1941;
var t$1940;
var t$1939;
var t$1938 = tools$0PrettyPrint$1.layout_together$245;
var t$1937;
var t$1936 = basis$0List$1.s$n$686;
var t$1935;
var v$1003 = basics$0PreElabDecGrammar$1$2.layoutTyvarseq$1905(v$1014);
switch (v$1003[0]) { case 0: {t$1935 = [v$1003[1],null];
 break; }default: {t$1935 = null;
} };
t$1937 = (t$1936(t$1935,[[1,syntax_objects$0TyCon$1.pr_LongTyCon$71(v$1015)],null]));
t$1939 = (t$1938(t$1937,3));
t$1940 = [t$1939,[basics$0PreElabDecGrammar$1$2.layoutTy$1897(v$1016),null]];
t$1941 = t$1940;
t$1942 = [t$1941,[0," = "],"",0,"where type "];
t$1943 = [0,t$1942];
t$1944 = [t$1943,null];
t$1945 = t$1944;
t$1947 = [t$1946,t$1945];
t$1948 = t$1947;
return t$1949(t$1948,3);
} };
};
fix$1890.$layoutStrdesc = function(strdesc$1394){var strdescs$1395;
var fix$1931 = {};
fix$1931.$makeList = function(x$1736){var t$1934;
var t$1933 = x$1736;
var t$1932;
var v$1737 = x$1736[1][3];
switch (v$1737[0]) { case 0: {var v$1738 = v$1737[1];
t$1932 = (fix$1931.$makeList(v$1738));
 break; }default: {t$1932 = null;
} };
t$1934 = [t$1933,t$1932];
return t$1934;
};
var makeList$1735 = fix$1931.$makeList;
strdescs$1395 = (makeList$1735(strdesc$1394));
return [0,[basis$0List$1.map$697(function(v$1593){var v$1594 = v$1593[1];
var v$1595 = v$1594[1];
var v$1596 = v$1594[2];
return [0,[[tools$0PrettyPrint$1.layoutAtom$189(function(v$1829){return syntax_objects$0StrId$1.pr_StrId$61(v$1829);
},v$1595),[fix$1890.$layoutSigexp(v$1596),null]],[2," : "],"",0,""]];
},strdescs$1395),[2," and "],"",0,""]];
};
basics$0PreElabTopdecGrammar$1$1.layoutSpec$826 = fix$1890.$layoutSpec;
basics$0PreElabTopdecGrammar$1$1.layoutSigexp$829 = fix$1890.$layoutSigexp;
basics$0PreElabTopdecGrammar$1$1.layoutStrdesc$821 = fix$1890.$layoutStrdesc;
var fix$1891 = {};
fix$1891.$layoutStrdec = function(strdec$896){switch (strdec$896[0]) { case 4: {var v$932 = strdec$896[1];
var v$933 = v$932[1];
return basics$0PreElabDecGrammar$1$2.layoutDec$1908(v$933);
 break; }case 0: {var v$929 = strdec$896[1];
var v$930 = v$929[1];
return [0,[[fix$1891.$layoutStrbind(v$930),null],[1],"",3,"structure "]];
 break; }case 2: {var v$920 = strdec$896[1];
var v$921 = v$920[1];
var v$922 = v$920[2];
return [0,[[fix$1891.$layoutStrdec(v$921),[fix$1891.$layoutStrdec(v$922),null]],[2," in "]," end",3,"local "]];
 break; }case 3: {return [1,""];
 break; }default: {var v$939 = strdec$896[1];
var v$940 = v$939[1];
var v$941 = v$939[2];
return [0,[[fix$1891.$layoutStrdec(v$940),[fix$1891.$layoutStrdec(v$941),null]],[0,"; "],")",0,"("]];
} };
};
fix$1891.$layoutStrexp = function(strexp$835){switch (strexp$835[0]) { case 1: {var v$884 = strexp$835[1];
var v$885 = v$884[1];
return [0,[[fix$1891.$layoutStrdec(v$885),null],[1]," end",3,"struct "]];
 break; }case 3: {var v$876 = strexp$835[1];
var v$877 = v$876[1];
return tools$0PrettyPrint$1.layoutAtom$189(function(v$1835){return syntax_objects$0StrId$1.pr_LongStrId$70(v$1835);
},v$877);
 break; }case 0: {var v$872 = strexp$835[1];
var v$873 = v$872[1];
var v$874 = v$872[2];
return tools$0PrettyPrint$1.layout_together$245([fix$1891.$layoutStrexp(v$873),[[1,":"],[basics$0PreElabTopdecGrammar$1$1.layoutSigexp$829(v$874),null]]],3);
 break; }case 2: {var v$868 = strexp$835[1];
var v$869 = v$868[1];
var v$870 = v$868[2];
return tools$0PrettyPrint$1.layout_together$245([fix$1891.$layoutStrexp(v$869),[[1,":>"],[basics$0PreElabTopdecGrammar$1$1.layoutSigexp$829(v$870),null]]],3);
 break; }case 5: {var v$864 = strexp$835[1];
var v$865 = v$864[1];
var v$866 = v$864[2];
var t$1930;
var v$859 = (syntax_objects$0FunId$1.pr_FunId$60(v$865)) + "(";
t$1930 = [[fix$1891.$layoutStrexp(v$866),null],[1],")",3,v$859];
return [0,t$1930];
 break; }default: {var v$891 = strexp$835[1];
var v$892 = v$891[1];
var v$893 = v$891[2];
return [0,[[fix$1891.$layoutStrdec(v$892),[fix$1891.$layoutStrexp(v$893),null]],[2," in "]," end",3,"let "]];
} };
};
fix$1891.$layoutStrbind = function(strbind$944){var strbinds$945;
var fix$1926 = {};
fix$1926.$makeList = function(x$1783){var t$1929;
var t$1928 = x$1783;
var t$1927;
var v$1784 = x$1783[1][3];
switch (v$1784[0]) { case 0: {var v$1785 = v$1784[1];
t$1927 = (fix$1926.$makeList(v$1785));
 break; }default: {t$1927 = null;
} };
t$1929 = [t$1928,t$1927];
return t$1929;
};
var makeList$1782 = fix$1926.$makeList;
strbinds$945 = (makeList$1782(strbind$944));
return [0,[basis$0List$1.map$697(function(v$1644){var v$1645 = v$1644[1];
var v$1646 = v$1645[1];
var v$1647 = v$1645[2];
return [0,[[[1,syntax_objects$0StrId$1.pr_StrId$61(v$1646)],[fix$1891.$layoutStrexp(v$1647),null]],[0," = "],"",0,""]];
},strbinds$945),[2," and "],"",0,""]];
};
basics$0PreElabTopdecGrammar$1$1.layoutStrdec$831 = fix$1891.$layoutStrdec;
basics$0PreElabTopdecGrammar$1$1.layoutStrexp$832 = fix$1891.$layoutStrexp;
basics$0PreElabTopdecGrammar$1$1.layoutStrbind$830 = fix$1891.$layoutStrbind;
basics$0PreElabTopdecGrammar$1$1.layoutFunbind$819 = function(funbind$1437){var funbinds$1438;
var fix$1892 = {};
fix$1892.$makeList = function(x$1790){var t$1895;
var t$1894 = x$1790;
var t$1893;
var v$1791 = x$1790[1][5];
switch (v$1791[0]) { case 0: {var v$1792 = v$1791[1];
t$1893 = (fix$1892.$makeList(v$1792));
 break; }default: {t$1893 = null;
} };
t$1895 = [t$1894,t$1893];
return t$1895;
};
var makeList$1789 = fix$1892.$makeList;
funbinds$1438 = (makeList$1789(funbind$1437));
return [0,[basis$0List$1.map$697(function(v$1650){var v$1651 = v$1650[1];
var v$1652 = v$1651[1];
var v$1653 = v$1651[2];
var v$1654 = v$1651[3];
var v$1655 = v$1651[4];
var t$1900;
var t$1899;
var t$1898;
var t$1897;
var t$1896;
var v$1656 = (syntax_objects$0FunId$1.pr_FunId$60(v$1652)) + "(";
t$1896 = [[tools$0PrettyPrint$1.layoutAtom$189(function(v$1836){return syntax_objects$0StrId$1.pr_StrId$61(v$1836);
},v$1653),[basics$0PreElabTopdecGrammar$1$1.layoutSigexp$829(v$1654),null]],[2," : "],")",3,v$1656];
t$1897 = [0,t$1896];
t$1898 = [t$1897,[basics$0PreElabTopdecGrammar$1$1.layoutStrexp$832(v$1655),null]];
t$1899 = t$1898;
t$1900 = [t$1899,[0," = "],"",0,""];
return [0,t$1900];
},funbinds$1438),[2," and "],"",0,""]];
};
basics$0PreElabTopdecGrammar$1$1.layoutFundec$820 = function(v$1424){var v$1433 = v$1424[1];
var v$1434 = v$1433[1];
return [0,[[basics$0PreElabTopdecGrammar$1$1.layoutFunbind$819(v$1434),null],[1],"",3,"functor "]];
};
basics$0PreElabTopdecGrammar$1$1.layoutSigbind$827 = function(sigbind$1032){var sigbinds$1033;
var fix$1901 = {};
fix$1901.$makeList = function(x$1797){var t$1904;
var t$1903 = x$1797;
var t$1902;
var v$1798 = x$1797[1][3];
switch (v$1798[0]) { case 0: {var v$1799 = v$1798[1];
t$1902 = (fix$1901.$makeList(v$1799));
 break; }default: {t$1902 = null;
} };
t$1904 = [t$1903,t$1902];
return t$1904;
};
var makeList$1796 = fix$1901.$makeList;
sigbinds$1033 = (makeList$1796(sigbind$1032));
return [0,[basis$0List$1.map$697(function(v$1658){var v$1659 = v$1658[1];
var v$1660 = v$1659[1];
var v$1661 = v$1659[2];
return [0,[[tools$0PrettyPrint$1.layoutAtom$189(function(v$1837){return syntax_objects$0SigId$1.pr_SigId$60(v$1837);
},v$1660),[basics$0PreElabTopdecGrammar$1$1.layoutSigexp$829(v$1661),null]],[0," = "],"",0,""]];
},sigbinds$1033),[2," and "],"",0,""]];
};
basics$0PreElabTopdecGrammar$1$1.layoutSigdec$828 = function(v$1019){var v$1028 = v$1019[1];
var v$1029 = v$1028[1];
var t$1912;
var t$1911;
var t$1910;
var t$1906;
var sigbinds$1663;
var fix$1905 = {};
fix$1905.$makeList = function(x$1804){var t$1909;
var t$1908 = x$1804;
var t$1907;
var v$1805 = x$1804[1][3];
switch (v$1805[0]) { case 0: {var v$1806 = v$1805[1];
t$1907 = (fix$1905.$makeList(v$1806));
 break; }default: {t$1907 = null;
} };
t$1909 = [t$1908,t$1907];
return t$1909;
};
var makeList$1803 = fix$1905.$makeList;
sigbinds$1663 = (makeList$1803(v$1029));
t$1906 = [0,[basis$0List$1.map$697(function(v$1665){var v$1666 = v$1665[1];
var v$1667 = v$1666[1];
var v$1668 = v$1666[2];
return [0,[[tools$0PrettyPrint$1.layoutAtom$189(function(v$1838){return syntax_objects$0SigId$1.pr_SigId$60(v$1838);
},v$1667),[basics$0PreElabTopdecGrammar$1$1.layoutSigexp$829(v$1668),null]],[0," = "],"",0,""]];
},sigbinds$1663),[2," and "],"",0,""]];
t$1910 = [t$1906,null];
t$1911 = t$1910;
t$1912 = [t$1911,[1],"",3,"signature "];
return [0,t$1912];
};
basics$0PreElabTopdecGrammar$1$1.layoutTopdec$1475 = function(topdec$1478){var topdecs$1479;
var fix$1913 = {};
fix$1913.$makeList = function(x$1811){var t$1916;
var t$1915 = x$1811;
var t$1914;
var v$1812;
switch (x$1811[0]) { case 0: {v$1812 = x$1811[1][2];
 break; }case 1: {v$1812 = x$1811[1][2];
 break; }default: {v$1812 = x$1811[1][2];
} };
switch (v$1812[0]) { case 0: {var v$1813 = v$1812[1];
t$1914 = (fix$1913.$makeList(v$1813));
 break; }default: {t$1914 = null;
} };
t$1916 = [t$1915,t$1914];
return t$1916;
};
var makeList$1810 = fix$1913.$makeList;
topdecs$1479 = (makeList$1810(topdec$1478));
var t$1917;
var v$1517 = [0,"; "];
t$1917 = [basis$0List$1.map$697(function(v$1505){switch (v$1505[0]) { case 0: {var v$1510 = v$1505[1];
var v$1511 = v$1510[1];
return basics$0PreElabTopdecGrammar$1$1.layoutStrdec$831(v$1511);
 break; }case 1: {var v$1507 = v$1505[1];
var v$1508 = v$1507[1];
var v$1670 = v$1508[1];
var v$1671 = v$1670[1];
var t$1925;
var t$1924;
var t$1923;
var t$1919;
var sigbinds$1673;
var fix$1918 = {};
fix$1918.$makeList = function(x$1818){var t$1922;
var t$1921 = x$1818;
var t$1920;
var v$1819 = x$1818[1][3];
switch (v$1819[0]) { case 0: {var v$1820 = v$1819[1];
t$1920 = (fix$1918.$makeList(v$1820));
 break; }default: {t$1920 = null;
} };
t$1922 = [t$1921,t$1920];
return t$1922;
};
var makeList$1817 = fix$1918.$makeList;
sigbinds$1673 = (makeList$1817(v$1671));
t$1919 = [0,[basis$0List$1.map$697(function(v$1675){var v$1676 = v$1675[1];
var v$1677 = v$1676[1];
var v$1678 = v$1676[2];
return [0,[[tools$0PrettyPrint$1.layoutAtom$189(function(v$1839){return syntax_objects$0SigId$1.pr_SigId$60(v$1839);
},v$1677),[basics$0PreElabTopdecGrammar$1$1.layoutSigexp$829(v$1678),null]],[0," = "],"",0,""]];
},sigbinds$1673),[2," and "],"",0,""]];
t$1923 = [t$1919,null];
t$1924 = t$1923;
t$1925 = [t$1924,[1],"",3,"signature "];
return [0,t$1925];
 break; }default: {var v$1512 = v$1505[1];
var v$1513 = v$1512[1];
var v$1680 = v$1513[1];
var v$1681 = v$1680[1];
return [0,[[basics$0PreElabTopdecGrammar$1$1.layoutFunbind$819(v$1681),null],[1],"",3,"functor "]];
} };
},topdecs$1479),v$1517,"",0,""];
return [0,t$1917];
};
return 0;
})();
