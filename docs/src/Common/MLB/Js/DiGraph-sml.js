if ((typeof(tools$0DiGraph$1)) == "undefined") {tools$0DiGraph$1 = {};
};
(function(){tools$0DiGraph$1.eq_graphnode$1146 = function(v$1150,v$1147){var v$1148 = v$1147[0];
var v$1149 = v$1147[1];
switch (v$1149[0]) { case 0: {var v$1151 = v$1148[1];
var v$1152 = v$1149[1];
if (v$1151[0] == v$1152[0]) {if (v$1150([v$1151[1],v$1152[1]])) {var t$1879;
var fix$1876 = {};
fix$1876.$eq_list = function(v$1161,v$1162){lab$eq_list: while (true) {if (v$1161 == null) {return (v$1162 == null)?true:false;
} else {if (v$1162 == null) {return false;
} else {var v$1163 = v$1161;
var v$1164 = v$1162;
if (v$1163[0] == v$1164[0]) {var t$1877 = v$1163[1];
var t$1878 = v$1164[1];
var v$1161 = t$1877;
var v$1162 = t$1878;
continue lab$eq_list;
} else {return false;
};
};
};
};
};
var eq_list$1159 = fix$1876.$eq_list;
t$1879 = (eq_list$1159(v$1151[2],v$1152[2]));
return t$1879?(v$1151[3] == v$1152[3]):false;
} else {return false;
};
} else {return false;
};
 break; }default: {return false;
} };
};
tools$0DiGraph$1.mk_graph$83 = function(v$85){return null;
};
tools$0DiGraph$1.add_node_to_graph$86 = function(v$87){return v$87;
};
tools$0DiGraph$1.mk_node$88 = function(info$91){var t$1882 = tools$0UnionFindPoly$1.mkElement$135;
var t$1881;
var t$1880;
var v$93 = [false];
t$1880 = [[0],info$91,null,v$93];
t$1881 = [0,t$1880];
return t$1882(t$1881);
};
tools$0DiGraph$1.mk_edge$96 = function(v$116,v$117){var v$106 = tools$0UnionFindPoly$1.find_info$86(v$116);
var v$111 = v$106[1];
var v$112 = v$111[1];
var v$113 = v$111[2];
var v$114 = v$111[3];
var v$115 = v$111[0];
return tools$0UnionFindPoly$1.set_info$112(v$116,[0,[v$115,v$112,[v$117,v$113],v$114]]);
};
tools$0DiGraph$1.add_edges$118 = function(v$138,v$139){var v$128 = tools$0UnionFindPoly$1.find_info$86(v$138);
var v$133 = v$128[1];
var v$134 = v$133[1];
var v$135 = v$133[2];
var v$136 = v$133[3];
var v$137 = v$133[0];
return tools$0UnionFindPoly$1.set_info$112(v$138,[0,[v$137,v$134,basis$0List$1.s$n$686(v$139,v$135),v$136]]);
};
tools$0DiGraph$1.eq_nodes$140 = function(v$145,v$146){return tools$0UnionFindPoly$1.eq_Elements$128(v$145,v$146);
};
tools$0DiGraph$1.union$147 = function(info_combine$150,v$154){var v$181 = v$154[0];
var v$182 = v$154[1];
return tools$0UnionFindPoly$1.union$139(function(v$1168){var v$1169 = v$1168[0];
var v$1170 = v$1169[1];
var v$1171 = v$1170[1];
var v$1172 = v$1170[2];
var v$1173 = v$1168[1];
var v$1174 = v$1173[1];
var v$1175 = v$1174[1];
var v$1176 = v$1174[2];
var v$1177 = v$1174[0];
var v$1178 = v$1174[3];
return [0,[v$1177,info_combine$150([v$1171,v$1175]),basis$0List$1.s$n$686(v$1172,v$1176),v$1178]];
},[v$181,v$182]);
};
tools$0DiGraph$1.union_left$183 = function(info_combine$186,v$190){var v$217 = v$190[0];
var v$218 = v$190[1];
return tools$0UnionFindPoly$1.union$139(function(v$1179){var v$1180 = v$1179[0];
var v$1181 = v$1180[1];
var v$1182 = v$1181[1];
var v$1183 = v$1181[2];
var v$1184 = v$1181[3];
var v$1185 = v$1181[0];
var v$1186 = v$1179[1];
var v$1187 = v$1186[1];
var v$1188 = v$1187[1];
return [0,[v$1185,info_combine$186([v$1182,v$1188]),v$1183,v$1184]];
},[v$217,v$218]);
};
tools$0DiGraph$1.find_info$219 = function(n$222){return (tools$0UnionFindPoly$1.find_info$86(n$222))[1][1];
};
tools$0DiGraph$1.find_rep_and_info$228 = function(n$231){var v$235 = tools$0UnionFindPoly$1.find_rep_and_info$99(n$231);
return [v$235[0],v$235[1][1][1]];
};
tools$0DiGraph$1.union_graph$240 = function(v$243,v$246){if (v$246 == null) {return tools$0Crash$1.impossible$59("DiGraph.union_graph");
} else {var v$259 = v$246;
var v$260 = v$259[0];
var v$261 = v$259[1];
var fix$1883 = {};
fix$1883.$foldl = function(v$1191,v$1192){lab$foldl: while (true) {if (v$1192 == null) {return v$1191;
} else {var v$1193 = v$1192;
var v$1194 = v$1193[0];
var v$1195 = v$1193[1];
var t$1887 = tools$0UnionFindPoly$1.union$139((function(env$1886){return function(v$1834){var v$1884 = env$1886[0];
var v$1885 = env$1886[1];
var v$1835 = v$1834[0];
var v$1836 = v$1835[1];
var v$1837 = v$1836[1];
var v$1838 = v$1836[2];
var v$1839 = v$1834[1];
var v$1840 = v$1839[1];
var v$1841 = v$1840[1];
var v$1842 = v$1840[2];
var v$1843 = v$1840[0];
var v$1844 = v$1840[3];
return [0,[v$1843,v$1885([v$1837,v$1841]),v$1884(v$1838,v$1842),v$1844]];
};
})([basis$0List$1.s$n$686,v$243]),[v$1194,v$1191]);
var t$1888 = v$1195;
var v$1191 = t$1887;
var v$1192 = t$1888;
continue lab$foldl;
};
};
};
var foldl$1190 = fix$1883.$foldl;
return foldl$1190(v$260,v$261);
};
};
tools$0DiGraph$1.set_info$263 = function(n$266,info$$269){var v$275 = tools$0UnionFindPoly$1.find_info$86(n$266);
var v$280 = v$275[1];
var v$282 = v$280[2];
var v$283 = v$280[3];
var v$284 = v$280[0];
return tools$0UnionFindPoly$1.set_info$112(n$266,[0,[v$284,info$$269,v$282,v$283]]);
};
tools$0DiGraph$1.out_of_node$285 = function(n$288){return (tools$0UnionFindPoly$1.find_info$86(n$288))[1][2];
};
tools$0DiGraph$1.find_visited$316 = function(n$319){return (tools$0UnionFindPoly$1.find_info$86(n$319))[1][3];
};
tools$0DiGraph$1.unvisit$382 = function(g$385){var fix$1889 = {};
fix$1889.$app = function(v$1219){lab$app: while (true) {if (v$1219 == null) {return 0;
} else {var v$1220 = v$1219;
var v$1221 = v$1220[0];
var v$1222 = v$1220[1];
((tools$0UnionFindPoly$1.find_info$86(v$1221))[1][3][0] = false,0);
var t$1890 = v$1222;
var v$1219 = t$1890;
continue lab$app;
};
};
};
var app$1218 = fix$1889.$app;
return app$1218(g$385);
};
tools$0DiGraph$1.union_without_edge_duplication$396 = function(info_combine$399,visit_children$402,v$406){var v$468 = v$406[0];
var v$469 = v$406[1];
var visited_nodes$407 = [null];
var fix$1891 = {};
fix$1891.$onto = function(v$420,v$1847){lab$onto: while (true) {if (v$420 == null) {return v$1847;
} else {var v$435 = v$420;
var v$436 = v$435[0];
var v$437 = v$435[1];
var t$1893 = v$437;
var t$1892;
var r$422 = (tools$0UnionFindPoly$1.find_info$86(v$436))[1][3];
if (r$422[0]) {t$1892 = v$1847;
} else {(r$422[0] = true,0);
(visited_nodes$407[0] = [v$436,visited_nodes$407[0]],0);
t$1892 = ((visit_children$402((tools$0UnionFindPoly$1.find_info$86(v$436))[1][1]))?(fix$1891.$onto((tools$0UnionFindPoly$1.find_info$86(v$436))[1][2],v$1847)):[v$436,v$1847]);
};
var t$1894 = t$1893;
var t$1895 = t$1892;
var v$420 = t$1894;
var v$1847 = t$1895;
continue lab$onto;
};
};
};
var onto$408 = fix$1891.$onto;
return tools$0UnionFindPoly$1.union$139(function(v$1276){var v$1277 = v$1276[0];
var v$1278 = v$1277[1];
var v$1279 = v$1278[1];
var v$1280 = v$1278[2];
var v$1281 = v$1276[1];
var v$1282 = v$1281[1];
var v$1283 = v$1282[1];
var v$1284 = v$1282[2];
var v$1285 = v$1282[0];
var v$1286 = v$1282[3];
var t$1901;
var t$1900 = v$1285;
var t$1899 = info_combine$399([v$1279,v$1283]);
var t$1896;
var result$1287 = onto$408(v$1280,onto$408(v$1284,null));
var g$1288 = visited_nodes$407[0];
var fix$1897 = {};
fix$1897.$app = function(v$1290){lab$app: while (true) {if (v$1290 == null) {return 0;
} else {var v$1291 = v$1290;
var v$1292 = v$1291[0];
var v$1293 = v$1291[1];
((tools$0UnionFindPoly$1.find_info$86(v$1292))[1][3][0] = false,0);
var t$1898 = v$1293;
var v$1290 = t$1898;
continue lab$app;
};
};
};
var app$1289 = fix$1897.$app;
app$1289(g$1288);
t$1896 = result$1287;
t$1901 = [t$1900,t$1899,t$1896,v$1286];
return [0,t$1901];
},[v$468,v$469]);
};
tools$0DiGraph$1.layout_node$470 = function(layout_info$473,n$476){var v$479 = tools$0UnionFindPoly$1.find_info$86(n$476);
var v$480 = v$479[1];
var v$481 = v$480[1];
return layout_info$473(v$481);
};
var pu_boolref$504 = pickle$0pickle$1.refOneGen$1282(pickle$0pickle$1.bool$732);
var pu_intref$505 = pickle$0pickle$1.refOneGen$1282(pickle$0pickle$1.int$729);
tools$0DiGraph$1.pu$506 = function(v$568,v$567,v$569){return function(pu_info$514){var dummy$515;
var t$1902;
var v$517 = [false];
t$1902 = [[0],v$568,null,v$517];
dummy$515 = [0,t$1902];
var pu_node$526 = (pickle$0pickle$1.cache$2484("DiGraph.node"))(function(x$1317){var x$1867 = tools$0UnionFindPoly$1.pu$194(dummy$515,x$1317);
return v$569(pickle$0pickle$1.nameGen$2624("DiGraph.node",x$1867));
});
var pu_graph$527 = (pickle$0pickle$1.cache$2484("DiGraph.graph"))(function(x$1325){var x$1871 = pu_node$526(x$1325);
var v$1872 = pickle$0pickle$1.listGen$2109(x$1871);
return pickle$0pickle$1.nameGen$2624("DiGraph.graph",v$1872);
});
var pu_graphnode$528 = pickle$0pickle$1.dataGen$1488(["DiGraph.graphnode",function(v$1344){return 0;
},[function(pu$1345){var t$1909 = pickle$0pickle$1.maybeNewHash$2065;
var t$1908 = function(v$1346){var v$1347 = v$1346[1];
var v$1348 = v$1347[1];
return v$567(v$1348);
};
var t$1907;
var t$1906 = pickle$0pickle$1.con1$2014;
var t$1905 = function(v$1349){return [0,[v$1349[2],v$1349[0],v$1349[3],v$1349[1]]];
};
var t$1904 = function(v$1350){var v$1351 = v$1350[1];
return [v$1351[1],v$1351[3],v$1351[0],v$1351[2]];
};
var t$1903;
var v$1776 = pu_graph$527(pu$1345);
t$1903 = ((pickle$0pickle$1.convert0$2299(function(v$1357){var v$1358 = v$1357[0];
var v$1359 = v$1358[0];
var v$1360 = v$1358[1];
var v$1361 = v$1357[1];
return [v$1359,v$1360,v$1361[0],v$1361[1]];
},function(v$1362){return [[v$1362[0],v$1362[1]],[v$1362[2],v$1362[3]]];
}))(pickle$0pickle$1.pairGen0$983(pickle$0pickle$1.pairGen0$983(pu_info$514,pu_boolref$504),pickle$0pickle$1.pairGen0$983(pu_intref$505,v$1776))));
t$1907 = (t$1906(t$1905,t$1904,t$1903));
return t$1909(t$1908,t$1907);
},null]]);
return [pu_node$526(pu_graphnode$528),pu_graph$527(pu_graphnode$528)];
};
};
tools$0DiGraph$1.nodes$570 = function(g$573){return g$573;
};
var fix$1910 = {};
fix$1910.$visit_all = function(n$578){var r$579 = (tools$0UnionFindPoly$1.find_info$86(n$578))[1][3];
if (r$579[0]) {return 0;
} else {(r$579[0] = true,0);
return fix$1910.$visit_all$((tools$0UnionFindPoly$1.find_info$86(n$578))[1][2]);
};
};
fix$1910.$visit_all$ = function(v$588){if (v$588 == null) {return 0;
} else {var v$597 = v$588;
var v$598 = v$597[0];
var v$599 = v$597[1];
fix$1910.$visit_all(v$598);
return fix$1910.$visit_all$(v$599);
};
};
tools$0DiGraph$1.visit_all$575 = fix$1910.$visit_all;
var visit_all$$574 = fix$1910.$visit_all$;
var fix$1911 = {};
fix$1911.$unvisit_all = function(n$604){var r$605 = (tools$0UnionFindPoly$1.find_info$86(n$604))[1][3];
if (r$605[0]) {(r$605[0] = false,0);
return fix$1911.$unvisit_all$((tools$0UnionFindPoly$1.find_info$86(n$604))[1][2]);
} else {return 0;
};
};
fix$1911.$unvisit_all$ = function(v$614){if (v$614 == null) {return 0;
} else {var v$623 = v$614;
var v$624 = v$623[0];
var v$625 = v$623[1];
fix$1911.$unvisit_all(v$624);
return fix$1911.$unvisit_all$(v$625);
};
};
tools$0DiGraph$1.unvisit_all$601 = fix$1911.$unvisit_all;
var unvisit_all$$600 = fix$1911.$unvisit_all$;
tools$0DiGraph$1.bottom_up_dfs$626 = function(g$629){var fix$1912 = {};
fix$1912.$search = function(v$643,v$644){var r$636 = (tools$0UnionFindPoly$1.find_info$86(v$643))[1][3];
if (r$636[0]) {return v$644;
} else {(r$636[0] = true,0);
return fix$1912.$search$((tools$0UnionFindPoly$1.find_info$86(v$643))[1][2],[v$643,v$644]);
};
};
fix$1912.$search$ = function(v$656,v$1848){if (v$656 == null) {return v$1848;
} else {var v$658 = v$656;
var v$659 = v$658[0];
var v$660 = v$658[1];
return fix$1912.$search$(v$660,fix$1912.$search(v$659,v$1848));
};
};
var search$631 = fix$1912.$search;
var search$$630 = fix$1912.$search$;
var result$662 = search$$630(g$629,null);
var fix$1913 = {};
fix$1913.$app = function(v$1377){lab$app: while (true) {if (v$1377 == null) {return 0;
} else {var v$1378 = v$1377;
var v$1379 = v$1378[0];
var v$1380 = v$1378[1];
((tools$0UnionFindPoly$1.find_info$86(v$1379))[1][3][0] = false,0);
var t$1914 = v$1380;
var v$1377 = t$1914;
continue lab$app;
};
};
};
var app$1376 = fix$1913.$app;
app$1376(result$662);
return result$662;
};
tools$0DiGraph$1.dfs$665 = function(g$668){return basis$0List$1.rev$257(tools$0DiGraph$1.bottom_up_dfs$626(g$668));
};
tools$0DiGraph$1.subgraph$669 = function(l$672){return basis$0List$1.rev$257(tools$0DiGraph$1.bottom_up_dfs$626(l$672));
};
tools$0DiGraph$1.topsort$673 = function(l$676){var fix$1915 = {};
fix$1915.$search$ = function(v$1849,v$690){if (v$690 == null) {return v$1849;
} else {var v$693 = v$690;
var v$694 = v$693[0];
var v$695 = v$693[1];
return fix$1915.$search$(fix$1915.$search(v$694,v$1849),v$695);
};
};
fix$1915.$search = function(v$707,v$708){var r$700 = (tools$0UnionFindPoly$1.find_info$86(v$707))[1][3];
if (r$700[0]) {return v$708;
} else {(r$700[0] = true,0);
return [v$707,fix$1915.$search$(v$708,(tools$0UnionFindPoly$1.find_info$86(v$707))[1][2])];
};
};
var search$$678 = fix$1915.$search$;
var search$677 = fix$1915.$search;
var result$709 = search$$678(null,l$676);
var fix$1916 = {};
fix$1916.$app = function(v$1393){lab$app: while (true) {if (v$1393 == null) {return 0;
} else {var v$1394 = v$1393;
var v$1395 = v$1394[0];
var v$1396 = v$1394[1];
((tools$0UnionFindPoly$1.find_info$86(v$1395))[1][3][0] = false,0);
var t$1917 = v$1396;
var v$1393 = t$1917;
continue lab$app;
};
};
};
var app$1392 = fix$1916.$app;
app$1392(result$709);
return result$709;
};
var en$EmptyStack$712 = new String("EmptyStack");
var exn$EmptyStack$712 = [en$EmptyStack$712];
tools$0DiGraph$1.scc$750 = function(layout_info$753,g$756){var scc_list$757 = [null];
var fix$1918 = {};
fix$1918.$min_list = function(v$1850,v$770){lab$min_list: while (true) {if (v$770 == null) {return v$1850;
} else {var v$777 = v$770;
var v$778 = v$777[0];
var v$779 = v$777[1];
if (v$778 < v$1850) {var t$1919 = v$778;
var t$1920 = v$779;
var v$1850 = t$1919;
var v$770 = t$1920;
continue lab$min_list;
} else {var t$1921 = v$1850;
var t$1922 = v$779;
var v$1850 = t$1921;
var v$770 = t$1922;
continue lab$min_list;
};
};
};
};
var min_list$758 = fix$1918.$min_list;
var count$791 = [1];
var stack$796 = [null];
var fix$1923 = {};
fix$1923.$lowlink = function(n$800){((tools$0UnionFindPoly$1.find_info$86(n$800))[1][3][0] = true,0);
((tools$0UnionFindPoly$1.find_info$86(n$800))[1][0][0] = count$791[0],0);
(count$791[0] = (SmlPrims.chk_ovf_i32(count$791[0] + 1)),0);
(stack$796[0] = [n$800,stack$796[0]],0);
var low$809 = (tools$0UnionFindPoly$1.find_info$86(n$800))[1][0][0];
var low$810 = min_list$758(low$809,basis$0List$1.map$697(function(w$813){if ((tools$0UnionFindPoly$1.find_info$86(w$813))[1][3][0]) {var v$1800 = (tools$0UnionFindPoly$1.find_info$86(w$813))[1][0][0];
return (v$1800 == 0)?low$809:((low$809 < v$1800)?low$809:v$1800);
} else {return fix$1923.$lowlink(w$813);
};
},(tools$0UnionFindPoly$1.find_info$86(n$800))[1][2]));
var fix$1930 = {};
fix$1930.$loop = function(v$820){lab$loop: while (true) {var x$821;
var res$1443;
try {res$1443 = (basis$0List$1.hd$676(stack$796[0]));
} catch(v$1931) {res$1443 = (((function(env$1932){return function(Hd$1445){throw exn$EmptyStack$712;
};
})([]))(v$1931));
};
try {(stack$796[0] = (basis$0List$1.tl$677(stack$796[0])),0);
0;
} catch(v$1933) {((function(env$1934){return function(Tl$1448){throw exn$EmptyStack$712;
};
})([]))(v$1933);
};
x$821 = res$1443;
((tools$0UnionFindPoly$1.find_info$86(x$821))[1][0][0] = 0,0);
(scc_list$757[0] = [[x$821,basis$0List$1.hd$676(scc_list$757[0])],basis$0List$1.tl$677(scc_list$757[0])],0);
if (tools$0UnionFindPoly$1.eq_Elements$128(x$821,n$800)) {return 0;
} else {var t$1935 = 0;
var v$820 = t$1935;
continue lab$loop;
};
};
};
var loop$818 = fix$1930.$loop;
if (low$810 == (tools$0UnionFindPoly$1.find_info$86(n$800))[1][0][0]) {(scc_list$757[0] = [null,scc_list$757[0]],0);
loop$818(0);
} else {0;
};
return low$810;
};
var lowlink$797 = fix$1923.$lowlink;
var fix$1924 = {};
fix$1924.$app = function(v$1463){lab$app: while (true) {if (v$1463 == null) {return 0;
} else {var v$1464 = v$1463;
var v$1465 = v$1464[0];
var v$1466 = v$1464[1];
((tools$0UnionFindPoly$1.find_info$86(v$1465))[1][0][0] = 0,0);
var t$1925 = v$1466;
var v$1463 = t$1925;
continue lab$app;
};
};
};
var app$1462 = fix$1924.$app;
app$1462(g$756);
var fix$1926 = {};
fix$1926.$app = function(v$1478){lab$app: while (true) {if (v$1478 == null) {return 0;
} else {var v$1479 = v$1478;
var v$1480 = v$1479[0];
var v$1481 = v$1479[1];
if ((tools$0UnionFindPoly$1.find_info$86(v$1480))[1][3][0]) {0;
} else {lowlink$797(v$1480);
0;
};
var t$1927 = v$1481;
var v$1478 = t$1927;
continue lab$app;
};
};
};
var app$1477 = fix$1926.$app;
app$1477(g$756);
var fix$1928 = {};
fix$1928.$app = function(v$1488){lab$app: while (true) {if (v$1488 == null) {return 0;
} else {var v$1489 = v$1488;
var v$1490 = v$1489[0];
var v$1491 = v$1489[1];
((tools$0UnionFindPoly$1.find_info$86(v$1490))[1][3][0] = false,0);
var t$1929 = v$1491;
var v$1488 = t$1929;
continue lab$app;
};
};
};
var app$1487 = fix$1928.$app;
app$1487(g$756);
return basis$0List$1.rev$682(scc_list$757[0]);
};
tools$0DiGraph$1.bottom_up_eval$853 = function(f$856,g$859){var fix$1936 = {};
fix$1936.$search = function(n$863){var r$864 = (tools$0UnionFindPoly$1.find_info$86(n$863))[1][3];
if (r$864[0]) {return 0;
} else {var ns$869 = (tools$0UnionFindPoly$1.find_info$86(n$863))[1][2];
(r$864[0] = true,0);
return f$856([(tools$0UnionFindPoly$1.find_info$86(n$863))[1][1],basis$0List$1.map$697(function(n$$874){fix$1936.$search(n$$874);
return (tools$0UnionFindPoly$1.find_info$86(n$$874))[1][1];
},ns$869)]);
};
};
var search$860 = fix$1936.$search;
var fix$1937 = {};
fix$1937.$app = function(v$1506){lab$app: while (true) {if (v$1506 == null) {return 0;
} else {var v$1507 = v$1506;
var v$1508 = v$1507[0];
var v$1509 = v$1507[1];
search$860(v$1508);
var t$1938 = v$1509;
var v$1506 = t$1938;
continue lab$app;
};
};
};
var app$1505 = fix$1937.$app;
app$1505(g$859);
var fix$1939 = {};
fix$1939.$app = function(v$1512){lab$app: while (true) {if (v$1512 == null) {return 0;
} else {var v$1513 = v$1512;
var v$1514 = v$1513[0];
var v$1515 = v$1513[1];
((tools$0UnionFindPoly$1.find_info$86(v$1514))[1][3][0] = false,0);
var t$1940 = v$1515;
var v$1512 = t$1940;
continue lab$app;
};
};
};
var app$1511 = fix$1939.$app;
return app$1511(g$859);
};
tools$0DiGraph$1.quotient$917 = function(layout_info$920,info_combine$923,g$926){var g$$927 = basis$0List$1.map$697(function(v$1863){return tools$0DiGraph$1.union_graph$240(info_combine$923,v$1863);
},tools$0DiGraph$1.scc$750(layout_info$920,g$926));
var fix$1941 = {};
fix$1941.$do_children = function(xs$1600){lab$do_children: while (true) {if (xs$1600 == null) {return null;
} else {var v$1601 = xs$1600;
var v$1602 = v$1601[0];
var v$1603 = v$1601[1];
var r$1604 = (tools$0UnionFindPoly$1.find_info$86(v$1602))[1][3];
if (r$1604[0]) {var t$1942 = v$1603;
var xs$1600 = t$1942;
continue lab$do_children;
} else {(r$1604[0] = true,0);
return [v$1602,fix$1941.$do_children(v$1603)];
};
};
};
};
var do_children$1599 = fix$1941.$do_children;
var fix$1943 = {};
fix$1943.$app = function(v$1608){lab$app: while (true) {if (v$1608 == null) {return 0;
} else {var v$1609 = v$1608;
var v$1610 = v$1609[0];
var v$1611 = v$1609[1];
var children$1613 = (tools$0UnionFindPoly$1.find_info$86(v$1610))[1][2];
var fix$1944 = {};
fix$1944.$app = function(v$1615){lab$app: while (true) {if (v$1615 == null) {return 0;
} else {var v$1616 = v$1615;
var v$1617 = v$1616[0];
var v$1618 = v$1616[1];
((tools$0UnionFindPoly$1.find_info$86(v$1617))[1][3][0] = false,0);
var t$1945 = v$1618;
var v$1615 = t$1945;
continue lab$app;
};
};
};
var app$1614 = fix$1944.$app;
app$1614(children$1613);
((tools$0UnionFindPoly$1.find_info$86(v$1610))[1][3][0] = true,0);
var newout$1621 = do_children$1599(children$1613);
var v$1622 = tools$0UnionFindPoly$1.find_info$86(v$1610);
var v$1623 = v$1622[1];
var v$1624 = v$1623[1];
var v$1625 = v$1623[3];
var v$1626 = v$1623[0];
tools$0UnionFindPoly$1.set_info$112(v$1610,[0,[v$1626,v$1624,newout$1621,v$1625]]);
var t$1946 = v$1611;
var v$1608 = t$1946;
continue lab$app;
};
};
};
var app$1607 = fix$1943.$app;
app$1607(g$$927);
var fix$1947 = {};
fix$1947.$app = function(v$1629){lab$app: while (true) {if (v$1629 == null) {return 0;
} else {var v$1630 = v$1629;
var v$1631 = v$1630[0];
var v$1632 = v$1630[1];
((tools$0UnionFindPoly$1.find_info$86(v$1631))[1][3][0] = false,0);
var t$1948 = v$1632;
var v$1629 = t$1948;
continue lab$app;
};
};
};
var app$1628 = fix$1947.$app;
app$1628(g$$927);
return g$$927;
};
tools$0DiGraph$1.graft$930 = function(v$973,v$974){var fix$1949 = {};
fix$1949.$accum = function(v$949,v$1851,v$1852){lab$accum: while (true) {if (v$949 == null) {return [v$1851,v$1852];
} else {var v$956 = v$949;
var v$957 = v$956[0];
var v$958 = v$956[1];
if ((tools$0UnionFindPoly$1.find_info$86(v$957))[1][3][0]) {var t$1950 = v$958;
var t$1951 = v$1851;
var t$1952 = v$1852;
var v$949 = t$1950;
var v$1851 = t$1951;
var v$1852 = t$1952;
continue lab$accum;
} else {var t$1953 = v$958;
var t$1954 = [v$957,v$1851];
var t$1955 = [v$957,v$1852];
var v$949 = t$1953;
var v$1851 = t$1954;
var v$1852 = t$1955;
continue lab$accum;
};
};
};
};
var accum$935 = fix$1949.$accum;
var v$968;
var t$1959 = accum$935;
var t$1958 = v$973;
var t$1957 = null;
var t$1956;
tools$0DiGraph$1.visit_all$575(v$974);
t$1956 = (tools$0UnionFindPoly$1.find_info$86(v$974))[1][2];
v$968 = (t$1959(t$1958,t$1957,t$1956));
var v$969 = v$968[0];
var v$970 = v$968[1];
var v$1642 = tools$0UnionFindPoly$1.find_info$86(v$974);
var v$1643 = v$1642[1];
var v$1644 = v$1643[1];
var v$1645 = v$1643[3];
var v$1646 = v$1643[0];
tools$0UnionFindPoly$1.set_info$112(v$974,[0,[v$1646,v$1644,v$970,v$1645]]);
tools$0DiGraph$1.unvisit_all$601(v$974);
return [v$974,v$969];
};
tools$0DiGraph$1.multi_graft$975 = function(bound_to_free$978,l$981){return basis$0List$1.map$697(function(v$1659){var v$1660 = v$1659[0];
var v$1661 = v$1659[1];
var fix$1960 = {};
fix$1960.$accum = function(v$1664,v$1853){lab$accum: while (true) {if (v$1664 == null) {return v$1853;
} else {var v$1665 = v$1664;
var v$1666 = v$1665[0];
var v$1667 = v$1665[1];
var v$1669 = v$1853[0];
var v$1670 = v$1853[1];
var v$1671 = bound_to_free$978(v$1666);
switch (v$1671[0]) { case 0: {var v$1672 = v$1671[1];
if ((tools$0UnionFindPoly$1.find_info$86(v$1672))[1][3][0]) {var t$1961 = v$1667;
var t$1962 = [v$1669,v$1670];
var v$1664 = t$1961;
var v$1853 = t$1962;
continue lab$accum;
} else {var t$1963 = v$1667;
var t$1964 = [[v$1672,v$1669],[v$1672,v$1670]];
var v$1664 = t$1963;
var v$1853 = t$1964;
continue lab$accum;
};
 break; }default: {var t$1965 = v$1667;
var t$1966 = fix$1960.$accum((tools$0UnionFindPoly$1.find_info$86(v$1666))[1][2],v$1853);
var v$1664 = t$1965;
var v$1853 = t$1966;
continue lab$accum;
} };
};
};
};
var accum$1662 = fix$1960.$accum;
var v$1675;
var t$1971 = accum$1662;
var t$1970 = (tools$0UnionFindPoly$1.find_info$86(v$1660))[1][2];
var t$1969;
var t$1968 = null;
var t$1967;
tools$0DiGraph$1.visit_all$575(v$1661);
t$1967 = (tools$0UnionFindPoly$1.find_info$86(v$1661))[1][2];
t$1969 = [t$1968,t$1967];
v$1675 = (t$1971(t$1970,t$1969));
var v$1678 = v$1675[0];
var v$1679 = v$1675[1];
var v$1682 = tools$0UnionFindPoly$1.find_info$86(v$1661);
var v$1683 = v$1682[1];
var v$1684 = v$1683[1];
var v$1685 = v$1683[3];
var v$1686 = v$1683[0];
tools$0UnionFindPoly$1.set_info$112(v$1661,[0,[v$1686,v$1684,v$1679,v$1685]]);
tools$0DiGraph$1.unvisit_all$601(v$1661);
return [v$1661,v$1678];
},l$981);
};
tools$0DiGraph$1.layout_graph$1035 = function(layout_info$1038,g$1041){var t$1972;
var v$1045 = [0,","];
t$1972 = [basis$0List$1.map$697(function(n$1688){var v$1689 = (tools$0UnionFindPoly$1.find_info$86(n$1688))[1][2];
if (v$1689 == null) {var v$1693 = tools$0UnionFindPoly$1.find_info$86(n$1688);
var v$1694 = v$1693[1];
var v$1695 = v$1694[1];
return layout_info$1038(v$1695);
} else {var t$1973;
var v$1696 = [1];
var t$1980;
var t$1979;
var t$1978;
var v$1699 = tools$0UnionFindPoly$1.find_info$86(n$1688);
var v$1700 = v$1699[1];
var v$1701 = v$1700[1];
t$1978 = (layout_info$1038(v$1701));
var t$1977;
var t$1976;
var t$1975;
var t$1974;
var v$1702 = [0,","];
t$1974 = [basis$0List$1.map$697(function(n$1704){var v$1705 = tools$0UnionFindPoly$1.find_info$86(n$1704);
var v$1706 = v$1705[1];
var v$1707 = v$1706[1];
return layout_info$1038(v$1707);
},v$1689),v$1702,")",2,"("];
t$1975 = [0,t$1974];
t$1976 = [t$1975,null];
t$1977 = t$1976;
t$1979 = [t$1978,t$1977];
t$1980 = t$1979;
t$1973 = [t$1980,v$1696,"",0,""];
return [0,t$1973];
};
},g$1041),v$1045,"]",1,"["];
return [0,t$1972];
};
tools$0DiGraph$1.layout_nodes_deep$1047 = function(layout_info$1050,g$1053){var fix$1981 = {};
fix$1981.$layout = function(n$1074){lab$layout: while (true) {if ((tools$0UnionFindPoly$1.find_info$86(n$1074))[1][3][0]) {var t$1982;
var v$1082 = [1];
var t$1985;
var t$1984;
var t$1983;
var v$1713 = tools$0UnionFindPoly$1.find_info$86(n$1074);
var v$1714 = v$1713[1];
var v$1715 = v$1714[1];
t$1983 = (layout_info$1050(v$1715));
t$1984 = [t$1983,null];
t$1985 = t$1984;
t$1982 = [t$1985,v$1082,"",1,"@"];
return [0,t$1982];
} else {((tools$0UnionFindPoly$1.find_info$86(n$1074))[1][3][0] = true,0);
if ((tools$0UnionFindPoly$1.find_info$86(n$1074))[1][2] == null) {var v$1723 = tools$0UnionFindPoly$1.find_info$86(n$1074);
var v$1724 = v$1723[1];
var v$1725 = v$1724[1];
return layout_info$1050(v$1725);
} else {var t$1986;
var v$1098 = [1];
var t$1995;
var t$1994;
var t$1993;
var v$1728 = tools$0UnionFindPoly$1.find_info$86(n$1074);
var v$1729 = v$1728[1];
var v$1730 = v$1729[1];
t$1993 = (layout_info$1050(v$1730));
var t$1992;
var t$1991;
var t$1990;
var t$1987;
var v$1093 = [0,","];
t$1987 = [basis$0List$1.map$697((function(env$1989){return function(v$1873){var v$1988 = env$1989[0];
return v$1988(v$1873);
};
})([fix$1981.$layout]),(tools$0UnionFindPoly$1.find_info$86(n$1074))[1][2]),v$1093,")",1,"("];
t$1990 = [0,t$1987];
t$1991 = [t$1990,null];
t$1992 = t$1991;
t$1994 = [t$1993,t$1992];
t$1995 = t$1994;
t$1986 = [t$1995,v$1098,"",0,""];
return [0,t$1986];
};
};
};
};
var layout$1071 = fix$1981.$layout;
var t$2002;
var t$2000;
if (g$1053 == null) {var t$1999;
var v$1736 = [0,","];
t$1999 = [basis$0List$1.map$697(function(v$1875){return layout$1071(v$1875);
},g$1053),v$1736,"]",1,"["];
t$2000 = [0,t$1999];
} else {var v$1107 = g$1053;
if (v$1107[1] == null) {var v$1109 = v$1107[0];
t$2000 = (layout$1071(v$1109));
} else {var t$2001;
var v$1734 = [0,","];
t$2001 = [basis$0List$1.map$697(function(v$1874){return layout$1071(v$1874);
},g$1053),v$1734,"]",1,"["];
t$2000 = [0,t$2001];
};
};
var t$1998;
var fix$1996 = {};
fix$1996.$app = function(v$1739){lab$app: while (true) {if (v$1739 == null) {return 0;
} else {var v$1740 = v$1739;
var v$1741 = v$1740[0];
var v$1742 = v$1740[1];
tools$0DiGraph$1.unvisit_all$601(v$1741);
var t$1997 = v$1742;
var v$1739 = t$1997;
continue lab$app;
};
};
};
var app$1738 = fix$1996.$app;
t$1998 = (app$1738(g$1053));
t$2002 = [t$2000,t$1998];
return t$2002[0];
};
tools$0DiGraph$1.layout_nodes$1116 = function(l$1119){return function(v$1865){return tools$0DiGraph$1.layout_graph$1035(l$1119,v$1865);
};
};
return 0;
})();
