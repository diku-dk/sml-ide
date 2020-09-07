if ((typeof(basics$0GrammarUtils$1)) == "undefined") {basics$0GrammarUtils$1 = {};
};
(function(){basics$0GrammarUtils$1.impossible$94 = function(s$97){return tools$0Crash$1.impossible$59("GrammarUtils." + s$97);
};
basics$0GrammarUtils$1.inventId_from_atpat$98 = function(atpat$101){var v$106 = basics$0PreElabDecGrammar$1$2.find_topmost_id_in_atpat$1814(atpat$101);
switch (v$106[0]) { case 0: {var v$108 = v$106[1];
return syntax_objects$0Ident$1.invent_named_id$205(v$108);
 break; }default: {return syntax_objects$0Ident$1.inventId$203(0);
} };
};
basics$0GrammarUtils$1.mk_IdentLab$109 = function(v$1926){return syntax_objects$0Lab$1.mk_IdentLab$111(v$1926);
};
basics$0GrammarUtils$1.mk_IntegerLab$110 = function(v$1927){return syntax_objects$0Lab$1.mk_IntegerLab$113(v$1927);
};
basics$0GrammarUtils$1.mk_Id$111 = function(v$1928){return syntax_objects$0Ident$1.mk_Id$171(v$1928);
};
basics$0GrammarUtils$1.mk_LongId$112 = function(v$1929){return syntax_objects$0Ident$1.mk_LongId$173(v$1929);
};
basics$0GrammarUtils$1.mk_FunId$113 = function(v$1930){return syntax_objects$0FunId$1.mk_FunId$58(v$1930);
};
basics$0GrammarUtils$1.mk_StrId$114 = function(v$1931){return syntax_objects$0StrId$1.mk_StrId$103(v$1931);
};
basics$0GrammarUtils$1.mk_LongStrId$115 = function(v$1932){return syntax_objects$0StrId$1.mk_LongStrId$105(v$1932);
};
basics$0GrammarUtils$1.longStrIdOfStrId$116 = function(v$1933){return syntax_objects$0StrId$1.longStrIdOfStrId$130(v$1933);
};
basics$0GrammarUtils$1.mk_SigId$117 = function(v$1934){return syntax_objects$0SigId$1.mk_SigId$58(v$1934);
};
basics$0GrammarUtils$1.mk_TyVar$118 = function(v$1935){return syntax_objects$0SyntaxTyVar$1.mk_TyVar$58(v$1935);
};
basics$0GrammarUtils$1.mk_TyCon$119 = function(v$1936){return syntax_objects$0TyCon$1.mk_TyCon$145(v$1936);
};
basics$0GrammarUtils$1.mk_LongTyCon$120 = function(v$1937){return syntax_objects$0TyCon$1.mk_LongTyCon$147(v$1937);
};
basics$0GrammarUtils$1.mk_IntSCon$121 = function(v$122){return [3,v$122];
};
basics$0GrammarUtils$1.mk_WordSCon$123 = function(v$124){return [0,v$124];
};
basics$0GrammarUtils$1.mk_StringSCon$125 = function(v$126){return [1,v$126];
};
basics$0GrammarUtils$1.mk_CharSCon$127 = function(v$128){return [4,v$128];
};
basics$0GrammarUtils$1.mk_RealSCon$129 = function(v$130){return [2,v$130];
};
basics$0GrammarUtils$1.PP$131 = function(pos_l$134,pos_r$137){return basics$0ParseInfo$1.from_SourceInfo$67(basics$0SourceInfo$1.from_positions$60(pos_l$134,pos_r$137));
};
basics$0GrammarUtils$1.un_PP$138 = function(x$1336){return basics$0SourceInfo$1.to_positions$67(basics$0ParseInfo$1.to_SourceInfo$93(x$1336));
};
basics$0GrammarUtils$1.right$139 = function(x$1340){return (basics$0SourceInfo$1.to_positions$67(basics$0ParseInfo$1.to_SourceInfo$93(x$1340)))[1];
};
basics$0GrammarUtils$1.span_info$159 = function(v$164,v$165){var pos_l$1357 = (basics$0SourceInfo$1.to_positions$67(basics$0ParseInfo$1.to_SourceInfo$93(v$164)))[0];
var pos_r$1358 = (basics$0SourceInfo$1.to_positions$67(basics$0ParseInfo$1.to_SourceInfo$93(v$165)))[1];
return basics$0ParseInfo$1.from_SourceInfo$67(basics$0SourceInfo$1.from_positions$60(pos_l$1357,pos_r$1358));
};
basics$0GrammarUtils$1.rightmost$199 = function(v$202,v$205,v$208,v$211){switch (v$211[0]) { case 0: {var v$228 = v$211[1];
var x$1735 = v$208(v$228);
return (basics$0SourceInfo$1.to_positions$67(basics$0ParseInfo$1.to_SourceInfo$93(x$1735)))[1];
 break; }default: {var x$1738 = v$202(v$205);
return (basics$0SourceInfo$1.to_positions$67(basics$0ParseInfo$1.to_SourceInfo$93(x$1738)))[1];
} };
};
basics$0GrammarUtils$1.rightmost$$232 = function(v$235,v$238,v$241){switch (v$241[0]) { case 0: {var v$255 = v$241[1];
var x$1741 = v$238(v$255);
return (basics$0SourceInfo$1.to_positions$67(basics$0ParseInfo$1.to_SourceInfo$93(x$1741)))[1];
 break; }default: {return v$235;
} };
};
basics$0GrammarUtils$1.rightmost_of_three$258 = function(v$261,v$264,v$267,v$270,v$273){switch (v$273[0]) { case 0: {var v$296 = v$273[1];
var x$1744 = v$270(v$296);
return (basics$0SourceInfo$1.to_positions$67(basics$0ParseInfo$1.to_SourceInfo$93(x$1744)))[1];
 break; }default: {switch (v$267[0]) { case 0: {var v$301 = v$267[1];
var x$1747 = v$264(v$301);
return (basics$0SourceInfo$1.to_positions$67(basics$0ParseInfo$1.to_SourceInfo$93(x$1747)))[1];
 break; }default: {return v$261;
} };
} };
};
basics$0GrammarUtils$1.rightmost_of_four$306 = function(v$309,v$312,v$315,v$318,v$321,v$324,v$327){switch (v$327[0]) { case 0: {var v$361 = v$327[1];
var x$1750 = v$324(v$361);
return (basics$0SourceInfo$1.to_positions$67(basics$0ParseInfo$1.to_SourceInfo$93(x$1750)))[1];
 break; }default: {switch (v$321[0]) { case 0: {var v$367 = v$321[1];
var x$1753 = v$318(v$367);
return (basics$0SourceInfo$1.to_positions$67(basics$0ParseInfo$1.to_SourceInfo$93(x$1753)))[1];
 break; }default: {switch (v$315[0]) { case 0: {var v$373 = v$315[1];
var x$1756 = v$312(v$373);
return (basics$0SourceInfo$1.to_positions$67(basics$0ParseInfo$1.to_SourceInfo$93(x$1756)))[1];
 break; }default: {return v$309;
} };
} };
} };
};
var fix$1942 = {};
fix$1942.$wi_Convert = function(f$383,list$386){if (list$386 == null) {return null;
} else {var v$395 = list$386;
var v$396 = v$395[0];
var v$397 = v$396[1];
var v$398 = v$397[0];
var v$399 = v$397[1];
var v$400 = v$395[1];
return [[0,[v$398,f$383(v$399)]],fix$1942.$wi_Convert(f$383,v$400)];
};
};
basics$0GrammarUtils$1.wi_Convert$380 = fix$1942.$wi_Convert;
basics$0GrammarUtils$1.expOfAtexp$401 = function(atexp$404){return [5,[basics$0PreElabDecGrammar$1$2.get_info_atexp$230(atexp$404),atexp$404]];
};
basics$0GrammarUtils$1.patOfAtpat$405 = function(atpat$408){return [4,[basics$0PreElabDecGrammar$1$2.get_info_atpat$220(atpat$408),atpat$408]];
};
basics$0GrammarUtils$1.atexpOfIdent$409 = function(info$412,id$415){return [4,[info$412,[0,[syntax_objects$0Ident$1.idToLongId$212(id$415),false]],[1]]];
};
basics$0GrammarUtils$1.patOfIdent$423 = function(info$426,v$431){var v$432 = v$431[0];
var v$433 = v$431[1];
var v$434 = v$431[2];
var atpat$1362 = [4,[info$426,[0,[syntax_objects$0Ident$1.idToLongId$212(v$432),v$434]],v$433]];
return [4,[basics$0PreElabDecGrammar$1$2.get_info_atpat$220(atpat$1362),atpat$1362]];
};
basics$0GrammarUtils$1.topdecOfExp$435 = function(exp$438){var info$439 = basics$0PreElabDecGrammar$1$2.get_info_exp$228(exp$438);
var t$1955;
var t$1954 = info$439;
var t$1953;
var t$1952;
var t$1951 = info$439;
var t$1950;
var t$1949;
var t$1948 = info$439;
var t$1947 = null;
var t$1946;
var t$1945;
var t$1944 = info$439;
var t$1943;
var v$1638 = [1];
var atpat$1368 = [4,[info$439,[0,[syntax_objects$0Ident$1.idToLongId$212(syntax_objects$0Ident$1.id_IT$146),false]],v$1638]];
t$1943 = [4,[basics$0PreElabDecGrammar$1$2.get_info_atpat$220(atpat$1368),atpat$1368]];
t$1945 = [t$1944,t$1943,exp$438,[1]];
t$1946 = [1,t$1945];
t$1949 = [t$1948,t$1947,t$1946];
t$1950 = [0,t$1949];
t$1952 = [t$1951,t$1950];
t$1953 = [4,t$1952];
t$1955 = [t$1954,t$1953,[1]];
return [0,t$1955];
};
basics$0GrammarUtils$1.composeStrDec$444 = function(v$460,v$461,v$462){switch (v$461[0]) { case 3: {return v$462;
 break; }default: {switch (v$462[0]) { case 3: {return v$461;
 break; }default: {return [1,[v$460,v$461,v$462]];
} };
} };
};
basics$0GrammarUtils$1.composeSpec$463 = function(v$479,v$480,v$481){switch (v$480[0]) { case 9: {return v$481;
 break; }default: {switch (v$481[0]) { case 9: {return v$480;
 break; }default: {return [5,[v$479,v$480,v$481]];
} };
} };
};
basics$0GrammarUtils$1.inventStrId$482 = function(v$1938){return syntax_objects$0StrId$1.inventStrId$119(v$1938);
};
basics$0GrammarUtils$1.inventId$483 = function(v$1939){return syntax_objects$0Ident$1.inventId$203(v$1939);
};
basics$0GrammarUtils$1.composeDec$484 = function(v$500,v$501,v$502){switch (v$501[0]) { case 11: {return v$502;
 break; }default: {switch (v$502[0]) { case 11: {return v$501;
 break; }default: {return [3,[v$500,v$501,v$502]];
} };
} };
};
basics$0GrammarUtils$1.tuple_atexp_with_info$503 = function(info$506,exps$509,rv_opt$512){var fix$1956 = {};
fix$1956.$f = function(v$1904,v$524){if (v$524 == null) {return [1];
} else {var v$527 = v$524;
var v$528 = v$527[0];
var v$529 = v$527[1];
return [0,[0,[info$506,syntax_objects$0Lab$1.mk_IntegerLab$113(v$1904),v$528,fix$1956.$f(SmlPrims.chk_ovf_i32(v$1904 + 1),v$529)]]];
};
};
var f$513 = fix$1956.$f;
return [1,[info$506,f$513(1,exps$509),rv_opt$512]];
};
basics$0GrammarUtils$1.tuple_atexp$530 = function(v$533,v$536){if (v$533 == null) {return tools$0Crash$1.impossible$59("GrammarUtils.tuple_atexp _");
} else {var v$548 = v$533;
var v$549 = v$548[1];
if (v$549 == null) {return tools$0Crash$1.impossible$59("GrammarUtils.tuple_atexp _");
} else {var v$553 = v$548[0];
var v$554 = v$549;
var v$555 = v$554[0];
var v$556 = v$554[1];
var info$1371;
var v$1648 = basics$0PreElabDecGrammar$1$2.get_info_exp$228(v$553);
var v$1649;
try {v$1649 = (basics$0PreElabDecGrammar$1$2.get_info_exp$228(basis$0List$1.last$90([v$555,v$556])));
} catch(v$1957) {v$1649 = ((function(v$552){return tools$0Crash$1.impossible$59("GrammarUtils.tuple_atexp: last");
})(v$1957));
};
var pos_l$1384 = (basics$0SourceInfo$1.to_positions$67(basics$0ParseInfo$1.to_SourceInfo$93(v$1648)))[0];
var pos_r$1385 = (basics$0SourceInfo$1.to_positions$67(basics$0ParseInfo$1.to_SourceInfo$93(v$1649)))[1];
info$1371 = (basics$0ParseInfo$1.from_SourceInfo$67(basics$0SourceInfo$1.from_positions$60(pos_l$1384,pos_r$1385)));
var exps$1372 = [v$553,[v$555,v$556]];
var fix$1958 = {};
fix$1958.$f = function(v$1905,v$1376){if (v$1376 == null) {return [1];
} else {var v$1378 = v$1376;
var v$1379 = v$1378[0];
var v$1380 = v$1378[1];
return [0,[0,[info$1371,syntax_objects$0Lab$1.mk_IntegerLab$113(v$1905),v$1379,fix$1958.$f(SmlPrims.chk_ovf_i32(v$1905 + 1),v$1380)]]];
};
};
var f$1374 = fix$1958.$f;
return [1,[info$1371,f$1374(1,exps$1372),v$536]];
};
};
};
basics$0GrammarUtils$1.case_exp$559 = function(info$562,v$566){var v$567 = v$566[0];
var v$568 = v$566[1];
return [6,[info$562,[4,[basics$0PreElabDecGrammar$1$2.get_info_match$227(v$568),v$568]],[2,[basics$0PreElabDecGrammar$1$2.get_info_exp$228(v$567),v$567]]]];
};
basics$0GrammarUtils$1.sequenceExp$569 = function(exps$572){var fix$1959 = {};
fix$1959.$f = function(v$590,v$1906){if (v$590 == null) {return v$1906;
} else {var v$592 = v$590;
var v$593 = v$592[0];
var v$594 = v$592[1];
var info$1394 = basics$0PreElabDecGrammar$1$2.get_info_exp$228(v$593);
var v$1657;
var exp$1398 = fix$1959.$f(v$594,v$1906);
var info_exp$1399 = basics$0PreElabDecGrammar$1$2.get_info_exp$228(exp$1398);
v$1657 = [0,[info_exp$1399,[0,[info_exp$1399,[4,[info_exp$1399,[0,info_exp$1399]]],exp$1398]],[1]]];
return [6,[info$1394,[4,[basics$0PreElabDecGrammar$1$2.get_info_match$227(v$1657),v$1657]],[2,[basics$0PreElabDecGrammar$1$2.get_info_exp$228(v$593),v$593]]]];
};
};
var f$578 = fix$1959.$f;
var v$602 = basis$0List$1.rev$682(exps$572);
if (v$602 == null) {return tools$0Crash$1.impossible$59("GrammarUtils.sequenceExp");
} else {var v$604 = v$602;
var v$605 = v$604[0];
var v$606 = v$604[1];
return f$578(basis$0List$1.rev$682(v$606),v$605);
};
};
basics$0GrammarUtils$1.list_atexp$607 = function(info$610,exps$613){var nilExp$614;
var atexp$1404 = [4,[info$610,[0,[syntax_objects$0Ident$1.idToLongId$212(syntax_objects$0Ident$1.id_NIL$139),false]],[1]]];
nilExp$614 = [5,[basics$0PreElabDecGrammar$1$2.get_info_atexp$230(atexp$1404),atexp$1404]];
var consExp$615;
var atexp$1409 = [4,[info$610,[0,[syntax_objects$0Ident$1.idToLongId$212(syntax_objects$0Ident$1.id_CONS$140),false]],[1]]];
consExp$615 = [5,[basics$0PreElabDecGrammar$1$2.get_info_atexp$230(atexp$1409),atexp$1409]];
var fix$1960 = {};
fix$1960.$f = function(v$619){if (v$619 == null) {return nilExp$614;
} else {var v$627 = v$619;
var v$628 = v$627[0];
var v$629 = v$627[1];
return [6,[basics$0PreElabDecGrammar$1$2.get_info_exp$228(v$628),consExp$615,basics$0GrammarUtils$1.tuple_atexp$530([v$628,[fix$1960.$f(v$629),null]],[1])]];
};
};
var f$616 = fix$1960.$f;
return [2,[info$610,f$616(exps$613)]];
};
basics$0GrammarUtils$1.hash$630 = function(info$633,lab$636){var id$637 = syntax_objects$0Ident$1.inventId$203(0);
var t$1984;
var t$1983 = info$633;
var t$1982;
var t$1981;
var t$1980 = info$633;
var t$1979;
var t$1978;
var t$1977 = info$633;
var t$1976;
var t$1975;
var t$1974 = info$633;
var t$1973;
var t$1972;
var t$1971 = info$633;
var t$1970;
var t$1969;
var t$1968 = info$633;
var t$1967;
var t$1966;
var t$1965;
var t$1964 = info$633;
var t$1963 = lab$636;
var t$1962;
var v$1661 = [1];
var atpat$1417 = [4,[info$633,[0,[syntax_objects$0Ident$1.idToLongId$212(id$637),false]],v$1661]];
t$1962 = [4,[basics$0PreElabDecGrammar$1$2.get_info_atpat$220(atpat$1417),atpat$1417]];
t$1965 = [t$1964,t$1963,t$1962,[0,[1,info$633]]];
t$1966 = [0,t$1965];
t$1967 = [0,t$1966];
t$1969 = [t$1968,t$1967];
t$1970 = [2,t$1969];
t$1972 = [t$1971,t$1970];
t$1973 = [4,t$1972];
var t$1961;
var atexp$1420 = [4,[info$633,[0,[syntax_objects$0Ident$1.idToLongId$212(id$637),false]],[1]]];
t$1961 = [5,[basics$0PreElabDecGrammar$1$2.get_info_atexp$230(atexp$1420),atexp$1420]];
t$1975 = [t$1974,t$1973,t$1961];
t$1976 = [0,t$1975];
t$1978 = [t$1977,t$1976,[1]];
t$1979 = [0,t$1978];
t$1981 = [t$1980,t$1979];
t$1982 = [4,t$1981];
t$1984 = [t$1983,t$1982];
return [2,t$1984];
};
basics$0GrammarUtils$1.exp_true$642 = function(info$645){var atexp$1425 = [4,[info$645,[0,[syntax_objects$0Ident$1.idToLongId$212(syntax_objects$0Ident$1.id_TRUE$141),false]],[1]]];
return [5,[basics$0PreElabDecGrammar$1$2.get_info_atexp$230(atexp$1425),atexp$1425]];
};
basics$0GrammarUtils$1.exp_false$646 = function(info$649){var atexp$1430 = [4,[info$649,[0,[syntax_objects$0Ident$1.idToLongId$212(syntax_objects$0Ident$1.id_FALSE$142),false]],[1]]];
return [5,[basics$0PreElabDecGrammar$1$2.get_info_atexp$230(atexp$1430),atexp$1430]];
};
basics$0GrammarUtils$1.exp_quote$650 = function(info$653,s$656){var t$1987;
var t$1986 = info$653;
var t$1985;
var atexp$1435 = [4,[info$653,[0,[syntax_objects$0Ident$1.idToLongId$212(syntax_objects$0Ident$1.id_QUOTE$147),false]],[1]]];
t$1985 = [5,[basics$0PreElabDecGrammar$1$2.get_info_atexp$230(atexp$1435),atexp$1435]];
t$1987 = [t$1986,t$1985,[0,[info$653,[1,s$656],[1]]]];
return [6,t$1987];
};
basics$0GrammarUtils$1.exp_antiquote$658 = function(info$661,atexp$664){var t$1990;
var t$1989 = info$661;
var t$1988;
var atexp$1440 = [4,[info$661,[0,[syntax_objects$0Ident$1.idToLongId$212(syntax_objects$0Ident$1.id_ANTIQUOTE$148),false]],[1]]];
t$1988 = [5,[basics$0PreElabDecGrammar$1$2.get_info_atexp$230(atexp$1440),atexp$1440]];
t$1990 = [t$1989,t$1988,atexp$664];
return [6,t$1990];
};
basics$0GrammarUtils$1.if_then_else_exp$666 = function(info$669,v$674){var v$677 = v$674[0];
var v$678 = v$674[1];
var v$679 = v$674[2];
var mruleT$675;
var t$1993;
var t$1992 = info$669;
var t$1991;
var v$1664 = [1];
var atpat$1448 = [4,[info$669,[0,[syntax_objects$0Ident$1.idToLongId$212(syntax_objects$0Ident$1.id_TRUE$141),false]],v$1664]];
t$1991 = [4,[basics$0PreElabDecGrammar$1$2.get_info_atpat$220(atpat$1448),atpat$1448]];
t$1993 = [t$1992,t$1991,v$678];
mruleT$675 = [0,t$1993];
var mruleF$676;
var t$1996;
var t$1995 = info$669;
var t$1994;
var v$1667 = [1];
var atpat$1454 = [4,[info$669,[0,[syntax_objects$0Ident$1.idToLongId$212(syntax_objects$0Ident$1.id_FALSE$142),false]],v$1667]];
t$1994 = [4,[basics$0PreElabDecGrammar$1$2.get_info_atpat$220(atpat$1454),atpat$1454]];
t$1996 = [t$1995,t$1994,v$679];
mruleF$676 = [0,t$1996];
var v$1670 = [0,[info$669,mruleT$675,[0,[0,[info$669,mruleF$676,[1]]]]]];
return [6,[info$669,[4,[basics$0PreElabDecGrammar$1$2.get_info_match$227(v$1670),v$1670]],[2,[basics$0PreElabDecGrammar$1$2.get_info_exp$228(v$677),v$677]]]];
};
basics$0GrammarUtils$1.while_exp$680 = function(info$683,v$687){var v$701 = v$687[0];
var v$702 = v$687[1];
var v$688 = syntax_objects$0Ident$1.inventLongId$209(0);
var varExp$689 = [5,[info$683,[4,[info$683,[0,[v$688,false]],[1]]]]];
var unitAtExp$690 = [1,[info$683,[1],[1]]];
var unitExp$691 = [5,[info$683,unitAtExp$690]];
var varPat$692 = [4,[info$683,[4,[info$683,[0,[v$688,false]],[1]]]]];
var unitPat$693 = [4,[info$683,[2,[info$683,[1]]]]];
var callVar$694 = [6,[info$683,varExp$689,unitAtExp$690]];
return [5,[info$683,[3,[info$683,[0,[info$683,null,[0,[info$683,[1,[info$683,varPat$692,[4,[info$683,[0,[info$683,[0,[info$683,unitPat$693,basics$0GrammarUtils$1.if_then_else_exp$666(info$683,[v$701,basics$0GrammarUtils$1.sequenceExp$569([v$702,[callVar$694,null]]),unitExp$691])]],[1]]]]],[1]]]]]]],callVar$694]]]];
};
var fix$1997 = {};
fix$1997.$rewriteDatBind = function(v$1066,v$1067){var fix$2018 = {};
fix$2018.$replaceTy = function(tyvarseq$747,tyseq$750,ty$753){switch (ty$753[0]) { case 0: {var v$809 = ty$753[1];
var v$811 = v$809[1];
var i$796;
var v$801;
var fix$2046 = {};
fix$2046.$count = function(v$1898,v$1899){lab$count: while (true) {if (v$1898 == null) {return [1];
} else {var v$1900 = v$1898;
var v$1901 = v$1900[0];
var v$1902 = v$1900[1];
if (syntax_objects$0SyntaxTyVar$1.eq_SyntaxTyVar$125(v$1901,v$811)) {return [0,v$1899];
} else {var t$2047 = v$1902;
var t$2048 = SmlPrims.chk_ovf_i32(v$1899 + 1);
var v$1898 = t$2047;
var v$1899 = t$2048;
continue lab$count;
};
};
};
};
var count$1897 = fix$2046.$count;
v$801 = (count$1897(tyvarseq$747,0));
switch (v$801[0]) { case 0: {i$796 = v$801[1];
 break; }default: {i$796 = (tools$0Crash$1.unimplemented$80("No check for tyvar on rsh in lhs of withtype defined type"));
} };
try {var fix$2050 = {};
fix$2050.$h = function(v$1469,v$1470){lab$h: while (true) {if (v$1469 == null) {throw CompilerInitial.exn$Subscript$52;
} else {var v$1471 = v$1469;
var v$1472 = v$1471[0];
var v$1473 = v$1471[1];
if (v$1470 == 0) {return v$1472;
} else {var t$2051 = v$1473;
var t$2052 = SmlPrims.chk_ovf_i32(v$1470 - 1);
var v$1469 = t$2051;
var v$1470 = t$2052;
continue lab$h;
};
};
};
};
var h$1468 = fix$2050.$h;
if (i$796 < 0) {throw CompilerInitial.exn$Subscript$52;
} else {return h$1468(tyseq$750,i$796);
};
} catch(v$2049) {return (function(v$808){return tools$0Crash$1.impossible$59("GrammarUtils.rewriteDatBind---replaceTy");
})(v$2049);
};
 break; }case 1: {var v$790 = ty$753[1];
var v$791 = v$790[1];
switch (v$791[0]) { case 1: {return ty$753;
 break; }default: {var v$793 = v$790[0];
var v$794 = v$791[1];
return [1,[v$793,[0,fix$2018.$replaceTyrow(tyvarseq$747,tyseq$750,v$794)]]];
} };
 break; }case 4: {var v$785 = ty$753[1];
var v$786 = v$785[0];
var v$787 = v$785[1];
var v$788 = v$785[2];
return [4,[v$786,basis$0List$1.map$697(function(v$1915){return fix$2018.$replaceTy(tyvarseq$747,tyseq$750,v$1915);
},v$787),v$788]];
 break; }case 3: {var v$780 = ty$753[1];
var v$781 = v$780[0];
var v$782 = v$780[1];
var v$783 = v$780[2];
return [3,[v$781,fix$2018.$replaceTy(tyvarseq$747,tyseq$750,v$782),fix$2018.$replaceTy(tyvarseq$747,tyseq$750,v$783)]];
 break; }default: {var v$812 = ty$753[1];
var v$813 = v$812[0];
var v$814 = v$812[1];
return [2,[v$813,fix$2018.$replaceTy(tyvarseq$747,tyseq$750,v$814)]];
} };
};
fix$2018.$replaceTyrow = function(tyvarseq$817,tyseq$820,tyrow$823){var v$835 = tyrow$823[1];
var v$836 = v$835[3];
switch (v$836[0]) { case 1: {var v$837 = v$835[0];
var v$838 = v$835[1];
var v$839 = v$835[2];
return [0,[v$837,v$838,fix$2018.$replaceTy(tyvarseq$817,tyseq$820,v$839),[1]]];
 break; }default: {var v$840 = v$835[0];
var v$841 = v$835[1];
var v$842 = v$835[2];
var v$843 = v$836[1];
return [0,[v$840,v$841,fix$2018.$replaceTy(tyvarseq$817,tyseq$820,v$842),[0,fix$2018.$replaceTyrow(tyvarseq$817,tyseq$820,v$843)]]];
} };
};
var replaceTy$744 = fix$2018.$replaceTy;
var replaceTyrow$743 = fix$2018.$replaceTyrow;
var en$Lookup_tycon$844 = new String("Lookup_tycon");
var exn$Lookup_tycon$844 = [en$Lookup_tycon$844];
var fix$2019 = {};
fix$2019.$rewriteTy = function(ty$884){switch (ty$884[0]) { case 0: {return ty$884;
 break; }case 1: {var v$942 = ty$884[1];
var v$943 = v$942[1];
switch (v$943[0]) { case 1: {return ty$884;
 break; }default: {var v$945 = v$942[0];
var v$946 = v$943[1];
return [1,[v$945,[0,fix$2019.$rewriteTyrow(v$946)]]];
} };
 break; }case 4: {var v$937 = ty$884[1];
var v$938 = v$937[0];
var v$939 = v$937[1];
var v$940 = v$937[2];
var v$934 = syntax_objects$0TyCon$1.explode_LongTyCon$106(v$940);
var v$935 = v$934[0];
var v$936 = v$934[1];
var t$2032;
var v$1687 = null;
var fix$2033 = {};
fix$2033.$eq_list = function(v$1919,v$1920){lab$eq_list: while (true) {if (v$1919 == null) {return (v$1920 == null)?true:false;
} else {if (v$1920 == null) {return false;
} else {var v$1921 = v$1919;
var v$1922 = v$1920;
if (syntax_objects$0StrId$1.eq_strid$181(v$1921[0],v$1922[0])) {var t$2034 = v$1921[1];
var t$2035 = v$1922[1];
var v$1919 = t$2034;
var v$1920 = t$2035;
continue lab$eq_list;
} else {return false;
};
};
};
};
};
var eq_list$1918 = fix$2033.$eq_list;
t$2032 = (eq_list$1918(v$935,v$1687));
if (t$2032) {try {var v$928;
var fix$2036 = {};
fix$2036.$lookup_tycon = function(typbind$1768){lab$lookup_tycon: while (true) {var v$1769 = typbind$1768[1];
var v$1770 = v$1769[4];
switch (v$1770[0]) { case 1: {var v$1771 = v$1769[1];
var v$1772 = v$1769[2];
var v$1773 = v$1769[3];
if (syntax_objects$0TyCon$1.eq_tycon$229(v$1772,v$936)) {return [v$1771,v$1773];
} else {throw exn$Lookup_tycon$844;
};
 break; }default: {var v$1779 = v$1769[1];
var v$1780 = v$1769[2];
var v$1781 = v$1769[3];
var v$1782 = v$1770[1];
if (syntax_objects$0TyCon$1.eq_tycon$229(v$1780,v$936)) {return [v$1779,v$1781];
} else {var t$2037 = v$1782;
var typbind$1768 = t$2037;
continue lab$lookup_tycon;
};
} };
};
};
var lookup_tycon$1767 = fix$2036.$lookup_tycon;
v$928 = (lookup_tycon$1767(v$1067));
var v$929 = v$928[0];
var v$930 = v$928[1];
var t$2041;
var v$1688;
var fix$2038 = {};
fix$2038.$acc = function(v$1502,v$1503){lab$acc: while (true) {if (v$1502 == null) {return v$1503;
} else {var v$1504 = v$1502;
var v$1505 = v$1504[1];
var t$2039 = v$1505;
var t$2040 = SmlPrims.chk_ovf_i32(v$1503 + 1);
var v$1502 = t$2039;
var v$1503 = t$2040;
continue lab$acc;
};
};
};
var acc$1501 = fix$2038.$acc;
v$1688 = (acc$1501(v$939,0));
var v$1689;
var fix$2042 = {};
fix$2042.$acc = function(v$1508,v$1509){lab$acc: while (true) {if (v$1508 == null) {return v$1509;
} else {var v$1510 = v$1508;
var v$1511 = v$1510[1];
var t$2043 = v$1511;
var t$2044 = SmlPrims.chk_ovf_i32(v$1509 + 1);
var v$1508 = t$2043;
var v$1509 = t$2044;
continue lab$acc;
};
};
};
var acc$1507 = fix$2042.$acc;
v$1689 = (acc$1507(v$929,0));
t$2041 = ((v$1688 == v$1689)?false:true);
t$2041?(tools$0Crash$1.unimplemented$80("GrammarUtils.rewriteDatBind< insert error info into i >")):0;
return replaceTy$744(v$929,v$939,v$930);
} catch(v$2031) {return (function(Lookup_tycon$933){var t$2045 = Lookup_tycon$933;
if (t$2045[0] == en$Lookup_tycon$844) {return [4,[v$938,basis$0List$1.map$697(function(v$1940){return fix$2019.$rewriteTy(v$1940);
},v$939),v$940]];
} else {throw Lookup_tycon$933;
};
})(v$2031);
};
} else {return [4,[v$938,basis$0List$1.map$697(function(v$1941){return fix$2019.$rewriteTy(v$1941);
},v$939),v$940]];
};
 break; }case 3: {var v$909 = ty$884[1];
var v$910 = v$909[0];
var v$911 = v$909[1];
var v$912 = v$909[2];
return [3,[v$910,fix$2019.$rewriteTy(v$911),fix$2019.$rewriteTy(v$912)]];
 break; }default: {var v$948 = ty$884[1];
var v$949 = v$948[0];
var v$950 = v$948[1];
return [2,[v$949,fix$2019.$rewriteTy(v$950)]];
} };
};
fix$2019.$rewriteTyrow = function(tyrow$953){var v$965 = tyrow$953[1];
var v$966 = v$965[3];
switch (v$966[0]) { case 1: {var v$967 = v$965[0];
var v$968 = v$965[1];
var v$969 = v$965[2];
return [0,[v$967,v$968,fix$2019.$rewriteTy(v$969),[1]]];
 break; }default: {var v$970 = v$965[0];
var v$971 = v$965[1];
var v$972 = v$965[2];
var v$973 = v$966[1];
return [0,[v$970,v$971,fix$2019.$rewriteTy(v$972),[0,fix$2019.$rewriteTyrow(v$973)]]];
} };
};
var rewriteTy$881 = fix$2019.$rewriteTy;
var rewriteTyrow$880 = fix$2019.$rewriteTyrow;
var fix$2020 = {};
fix$2020.$rewriteConBind = function(v$977){var v$998 = v$977[1];
var v$999 = v$998[2];
switch (v$999[0]) { case 1: {var v$1000 = v$998[3];
switch (v$1000[0]) { case 1: {return [0,[v$998[0],v$998[1],[1],[1]]];
 break; }default: {var v$1003 = v$998[0];
var v$1004 = v$998[1];
var v$1005 = v$1000[1];
return [0,[v$1003,v$1004,[1],[0,fix$2020.$rewriteConBind(v$1005)]]];
} };
 break; }default: {var v$1006 = v$998[3];
switch (v$1006[0]) { case 1: {var v$1007 = v$998[0];
var v$1008 = v$998[1];
var v$1009 = v$999[1];
return [0,[v$1007,v$1008,[0,rewriteTy$881(v$1009)],[1]]];
 break; }default: {var v$1010 = v$998[0];
var v$1011 = v$998[1];
var v$1012 = v$999[1];
var v$1013 = v$1006[1];
return [0,[v$1010,v$1011,[0,rewriteTy$881(v$1012)],[0,fix$2020.$rewriteConBind(v$1013)]]];
} };
} };
};
var rewriteConBind$974 = fix$2020.$rewriteConBind;
var v$1051 = v$1066[1];
var v$1052 = v$1051[4];
switch (v$1052[0]) { case 1: {var v$1055 = v$1051[0];
var v$1056 = v$1051[1];
var v$1057 = v$1051[2];
var v$1058 = v$1051[3];
var t$2022;
try {var fix$2023 = {};
fix$2023.$lookup_tycon = function(typbind$1791){lab$lookup_tycon: while (true) {var v$1792 = typbind$1791[1];
var v$1793 = v$1792[4];
switch (v$1793[0]) { case 1: {var v$1794 = v$1792[1];
var v$1795 = v$1792[2];
var v$1796 = v$1792[3];
if (syntax_objects$0TyCon$1.eq_tycon$229(v$1795,v$1057)) {return [v$1794,v$1796];
} else {throw exn$Lookup_tycon$844;
};
 break; }default: {var v$1802 = v$1792[1];
var v$1803 = v$1792[2];
var v$1804 = v$1792[3];
var v$1805 = v$1793[1];
if (syntax_objects$0TyCon$1.eq_tycon$229(v$1803,v$1057)) {return [v$1802,v$1804];
} else {var t$2024 = v$1805;
var typbind$1791 = t$2024;
continue lab$lookup_tycon;
};
} };
};
};
var lookup_tycon$1790 = fix$2023.$lookup_tycon;
lookup_tycon$1790(v$1067);
t$2022 = true;
} catch(v$2021) {t$2022 = ((function(Lookup_tycon$1521){var t$2025 = Lookup_tycon$1521;
if (t$2025[0] == en$Lookup_tycon$844) {return false;
} else {throw Lookup_tycon$1521;
};
})(v$2021));
};
if (t$2022) {var pos$1522 = (basics$0SourceInfo$1.to_positions$67(basics$0ParseInfo$1.to_SourceInfo$93(v$1055)))[0];
throw [basics$0LexBasics$1.en$LEXICAL_ERROR$632,[pos$1522,("type constructor " + (syntax_objects$0TyCon$1.pr_TyCon$62(v$1057))) + " is bound by both datatype binding and withtype binding"]];
} else {0;
};
return [0,[v$1055,v$1056,v$1057,rewriteConBind$974(v$1058),[1]]];
 break; }default: {var v$1061 = v$1051[0];
var v$1062 = v$1051[1];
var v$1063 = v$1051[2];
var v$1064 = v$1051[3];
var v$1065 = v$1052[1];
var t$2027;
try {var fix$2028 = {};
fix$2028.$lookup_tycon = function(typbind$1816){lab$lookup_tycon: while (true) {var v$1817 = typbind$1816[1];
var v$1818 = v$1817[4];
switch (v$1818[0]) { case 1: {var v$1819 = v$1817[1];
var v$1820 = v$1817[2];
var v$1821 = v$1817[3];
if (syntax_objects$0TyCon$1.eq_tycon$229(v$1820,v$1063)) {return [v$1819,v$1821];
} else {throw exn$Lookup_tycon$844;
};
 break; }default: {var v$1827 = v$1817[1];
var v$1828 = v$1817[2];
var v$1829 = v$1817[3];
var v$1830 = v$1818[1];
if (syntax_objects$0TyCon$1.eq_tycon$229(v$1828,v$1063)) {return [v$1827,v$1829];
} else {var t$2029 = v$1830;
var typbind$1816 = t$2029;
continue lab$lookup_tycon;
};
} };
};
};
var lookup_tycon$1815 = fix$2028.$lookup_tycon;
lookup_tycon$1815(v$1067);
t$2027 = true;
} catch(v$2026) {t$2027 = ((function(Lookup_tycon$1529){var t$2030 = Lookup_tycon$1529;
if (t$2030[0] == en$Lookup_tycon$844) {return false;
} else {throw Lookup_tycon$1529;
};
})(v$2026));
};
if (t$2027) {var pos$1530 = (basics$0SourceInfo$1.to_positions$67(basics$0ParseInfo$1.to_SourceInfo$93(v$1061)))[0];
throw [basics$0LexBasics$1.en$LEXICAL_ERROR$632,[pos$1530,("type constructor " + (syntax_objects$0TyCon$1.pr_TyCon$62(v$1063))) + " is bound by both datatype binding and withtype binding"]];
} else {0;
};
return [0,[v$1061,v$1062,v$1063,rewriteConBind$974(v$1064),[0,fix$1997.$rewriteDatBind(v$1065,v$1067)]]];
} };
};
basics$0GrammarUtils$1.rewriteDatBind$738 = fix$1997.$rewriteDatBind;
basics$0GrammarUtils$1.tuple_atpat_with_info$1068 = function(info$1071,pats$1074){var fix$1998 = {};
fix$1998.$f = function(v$1908,v$1086){if (v$1086 == null) {return [1];
} else {var v$1089 = v$1086;
var v$1090 = v$1089[0];
var v$1091 = v$1089[1];
return [0,[0,[info$1071,syntax_objects$0Lab$1.mk_IntegerLab$113(v$1908),v$1090,fix$1998.$f(SmlPrims.chk_ovf_i32(v$1908 + 1),v$1091)]]];
};
};
var f$1075 = fix$1998.$f;
return [2,[info$1071,f$1075(1,pats$1074)]];
};
basics$0GrammarUtils$1.tuple_atpat$1092 = function(v$1095){if (v$1095 == null) {return tools$0Crash$1.impossible$59("GrammarUtils.tuple_atpat");
} else {var v$1105 = v$1095;
var v$1106 = v$1105[1];
if (v$1106 == null) {return tools$0Crash$1.impossible$59("GrammarUtils.tuple_atpat");
} else {var v$1110 = v$1105[0];
var v$1111 = v$1106;
var v$1112 = v$1111[0];
var v$1113 = v$1111[1];
var info$1535;
var v$1698 = basics$0PreElabDecGrammar$1$2.get_info_pat$221(v$1110);
var v$1699;
try {v$1699 = (basics$0PreElabDecGrammar$1$2.get_info_pat$221(basis$0List$1.last$90([v$1112,v$1113])));
} catch(v$1999) {v$1699 = ((function(v$1109){return tools$0Crash$1.impossible$59("GrammarUtils.tuple_atpat: last");
})(v$1999));
};
var pos_l$1547 = (basics$0SourceInfo$1.to_positions$67(basics$0ParseInfo$1.to_SourceInfo$93(v$1698)))[0];
var pos_r$1548 = (basics$0SourceInfo$1.to_positions$67(basics$0ParseInfo$1.to_SourceInfo$93(v$1699)))[1];
info$1535 = (basics$0ParseInfo$1.from_SourceInfo$67(basics$0SourceInfo$1.from_positions$60(pos_l$1547,pos_r$1548)));
var pats$1536 = [v$1110,[v$1112,v$1113]];
var fix$2000 = {};
fix$2000.$f = function(v$1909,v$1539){if (v$1539 == null) {return [1];
} else {var v$1541 = v$1539;
var v$1542 = v$1541[0];
var v$1543 = v$1541[1];
return [0,[0,[info$1535,syntax_objects$0Lab$1.mk_IntegerLab$113(v$1909),v$1542,fix$2000.$f(SmlPrims.chk_ovf_i32(v$1909 + 1),v$1543)]]];
};
};
var f$1537 = fix$2000.$f;
return [2,[info$1535,f$1537(1,pats$1536)]];
};
};
};
basics$0GrammarUtils$1.list_atpat$1115 = function(info$1118,pats$1121){var fix$2001 = {};
fix$2001.$f = function(v$1125){if (v$1125 == null) {var v$1707 = [1];
var atpat$1562 = [4,[info$1118,[0,[syntax_objects$0Ident$1.idToLongId$212(syntax_objects$0Ident$1.id_NIL$139),false]],v$1707]];
return [4,[basics$0PreElabDecGrammar$1$2.get_info_atpat$220(atpat$1562),atpat$1562]];
} else {var v$1133 = v$1125;
var v$1134 = v$1133[0];
var v$1135 = v$1133[1];
return [3,[basics$0PreElabDecGrammar$1$2.get_info_pat$221(v$1134),[0,[syntax_objects$0Ident$1.idToLongId$212(syntax_objects$0Ident$1.id_CONS$140),false]],basics$0GrammarUtils$1.tuple_atpat$1092([v$1134,[fix$2001.$f(v$1135),null]])]];
};
};
var f$1122 = fix$2001.$f;
return [3,[info$1118,f$1122(pats$1121)]];
};
basics$0GrammarUtils$1.en$LAYERPAT_ERROR$1136 = new String("LAYERPAT_ERROR");
basics$0GrammarUtils$1.layeredPat$1137 = function(v$1197,v$1198,v$1199){switch (v$1198[0]) { case 1: {var v$1184 = v$1198[1];
var v$1185 = v$1184[1];
switch (v$1185[0]) { case 4: {var v$1187 = v$1185[1];
var v$1188 = v$1187[1];
switch (v$1188[0]) { case 4: {var v$1190 = v$1188[1];
switch (v$1190[2][0]) { case 1: {var v$1192 = v$1190[1];
var v$1193 = v$1192[1];
var v$1194 = v$1193[0];
var v$1195 = v$1193[1];
var v$1196 = v$1184[2];
var t$2011;
var t$2010 = v$1197;
var t$2009;
var t$2008;
var t$2007;
var v$1564 = syntax_objects$0Ident$1.decompose$96(v$1194);
if (v$1564[0] == null) {t$2007 = v$1564[1];
} else {throw [basics$0GrammarUtils$1.en$LAYERPAT_ERROR$1136,basics$0SourceInfo$1.to_positions$67(basics$0ParseInfo$1.to_SourceInfo$93(v$1197))];
};
t$2008 = [t$2007,v$1195];
t$2009 = [0,t$2008];
t$2011 = [t$2010,t$2009,[0,v$1196],v$1199];
return [2,t$2011];
 break; }default: {throw [basics$0GrammarUtils$1.en$LAYERPAT_ERROR$1136,basics$0SourceInfo$1.to_positions$67(basics$0ParseInfo$1.to_SourceInfo$93(v$1197))];
} };
 break; }default: {throw [basics$0GrammarUtils$1.en$LAYERPAT_ERROR$1136,basics$0SourceInfo$1.to_positions$67(basics$0ParseInfo$1.to_SourceInfo$93(v$1197))];
} };
 break; }default: {throw [basics$0GrammarUtils$1.en$LAYERPAT_ERROR$1136,basics$0SourceInfo$1.to_positions$67(basics$0ParseInfo$1.to_SourceInfo$93(v$1197))];
} };
 break; }case 4: {var v$1173 = v$1198[1];
var v$1174 = v$1173[1];
switch (v$1174[0]) { case 4: {var v$1176 = v$1174[1];
switch (v$1176[2][0]) { case 1: {var v$1178 = v$1176[1];
var v$1179 = v$1178[1];
var v$1180 = v$1179[0];
var v$1181 = v$1179[1];
var t$2006;
var t$2005 = v$1197;
var t$2004;
var t$2003;
var t$2002;
var v$1569 = syntax_objects$0Ident$1.decompose$96(v$1180);
if (v$1569[0] == null) {t$2002 = v$1569[1];
} else {throw [basics$0GrammarUtils$1.en$LAYERPAT_ERROR$1136,basics$0SourceInfo$1.to_positions$67(basics$0ParseInfo$1.to_SourceInfo$93(v$1197))];
};
t$2003 = [t$2002,v$1181];
t$2004 = [0,t$2003];
t$2006 = [t$2005,t$2004,[1],v$1199];
return [2,t$2006];
 break; }default: {throw [basics$0GrammarUtils$1.en$LAYERPAT_ERROR$1136,basics$0SourceInfo$1.to_positions$67(basics$0ParseInfo$1.to_SourceInfo$93(v$1197))];
} };
 break; }default: {throw [basics$0GrammarUtils$1.en$LAYERPAT_ERROR$1136,basics$0SourceInfo$1.to_positions$67(basics$0ParseInfo$1.to_SourceInfo$93(v$1197))];
} };
 break; }default: {throw [basics$0GrammarUtils$1.en$LAYERPAT_ERROR$1136,basics$0SourceInfo$1.to_positions$67(basics$0ParseInfo$1.to_SourceInfo$93(v$1197))];
} };
};
basics$0GrammarUtils$1.tuple_type$1200 = function(info$1203,tys$1206){var fix$2012 = {};
fix$2012.$f = function(v$1910,v$1218){if (v$1218 == null) {return [1];
} else {var v$1221 = v$1218;
var v$1222 = v$1221[0];
var v$1223 = v$1221[1];
return [0,[0,[info$1203,syntax_objects$0Lab$1.mk_IntegerLab$113(v$1910),v$1222,fix$2012.$f(SmlPrims.chk_ovf_i32(v$1910 + 1),v$1223)]]];
};
};
var f$1207 = fix$2012.$f;
return [1,[info$1203,f$1207(1,tys$1206)]];
};
basics$0GrammarUtils$1.rewrite_type_abbreviation_spec$1224 = function(v$1232,v$1233,v$1234,v$1235,v$1236){return [v$1235,[6,[v$1235,[0,[v$1235,[1,[v$1236,[1,[v$1236,[0,[v$1236,v$1232,v$1233,[1]]]]]]],v$1232,syntax_objects$0TyCon$1.implode_LongTyCon$99(null,v$1233),v$1234]]]]];
};
basics$0GrammarUtils$1.fold_specs_to_spec$1258 = function(i_spec_s$1261){var v$1266;
if (i_spec_s$1261 == null) {v$1266 = [1];
} else {var v$1587 = i_spec_s$1261;
var v$1588 = v$1587[0];
var v$1589 = v$1587[1];
var t$2017;
var fix$2013 = {};
fix$2013.$foldl = function(v$1594,v$1595){lab$foldl: while (true) {if (v$1595 == null) {return v$1594;
} else {var v$1596 = v$1595;
var v$1597 = v$1596[0];
var v$1598 = v$1596[1];
var t$2014;
var v$1883 = v$1597[0];
var v$1884 = v$1597[1];
var v$1886 = v$1594[0];
var v$1887 = v$1594[1];
var i12$1888;
var pos_l$1889 = (basics$0SourceInfo$1.to_positions$67(basics$0ParseInfo$1.to_SourceInfo$93(v$1886)))[0];
var pos_r$1890 = (basics$0SourceInfo$1.to_positions$67(basics$0ParseInfo$1.to_SourceInfo$93(v$1883)))[1];
i12$1888 = (basics$0ParseInfo$1.from_SourceInfo$67(basics$0SourceInfo$1.from_positions$60(pos_l$1889,pos_r$1890)));
t$2014 = [i12$1888,[5,[i12$1888,v$1887,v$1884]]];
var t$2015 = t$2014;
var t$2016 = v$1598;
var v$1594 = t$2015;
var v$1595 = t$2016;
continue lab$foldl;
};
};
};
var foldl$1593 = fix$2013.$foldl;
t$2017 = (foldl$1593(v$1588,v$1589));
v$1266 = [0,t$2017];
};
switch (v$1266[0]) { case 0: {return v$1266[1][1];
 break; }default: {return tools$0Crash$1.impossible$59("GrammarUtils.fold_specs_to_spec");
} };
};
basics$0GrammarUtils$1.raise_lexical_error_if_none$1286 = function(v$1289,v$1292){switch (v$1292[0]) { case 1: {throw [basics$0LexBasics$1.en$LEXICAL_ERROR$632,[v$1289,"constant too big"]];
 break; }default: {return v$1292[1];
} };
};
basics$0GrammarUtils$1.reportPosition_from_info$1304 = function(x$1609){return basics$0SourceInfo$1.report$78(basics$0ParseInfo$1.to_SourceInfo$93(x$1609));
};
return 0;
})();