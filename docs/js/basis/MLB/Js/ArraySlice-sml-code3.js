if ((typeof(basis$0ArraySlice$1$3)) == "undefined") {basis$0ArraySlice$1$3 = {};
};
(function(){basis$0ArraySlice$1$3.sub0$111 = function(v$1058,v$1059){return v$1058[v$1059];
};
basis$0ArraySlice$1$3.sub_vector0$118 = function(v$1060,v$1061){return v$1060[v$1061];
};
basis$0ArraySlice$1$3.update0$125 = function(v$1062,v$1063,v$1064){return (v$1062[v$1063] = v$1064,0);
};
basis$0ArraySlice$1$3.update_vector0$134 = function(v$1065,v$1066,v$1067){return (v$1065[v$1066] = v$1067,0);
};
basis$0ArraySlice$1$3.table0$143 = function(n$146){return Array(n$146);
};
basis$0ArraySlice$1$3.vector0$147 = function(n$150){return Array(n$150);
};
basis$0ArraySlice$1$3.length0$151 = function(t$154){return t$154.length;
};
basis$0ArraySlice$1$3.length_vector$155 = function(t$158){return t$158.length;
};
basis$0ArraySlice$1$3.array0$159 = function(v$1068,v$1069){return SmlPrims.wordTableInit(v$1068,v$1069);
};
basis$0ArraySlice$1$3.length$166 = function(v$1070,v$1071,v$1072){return v$1072;
};
basis$0ArraySlice$1$3.sub$175 = function(v$190,v$1073){var v$191 = v$190[0];
var v$192 = v$190[1];
var v$193 = v$190[2];
if ((v$1073 < 0)?true:(v$1073 >= v$193)) {throw CompilerInitial.exn$Subscript$52;
} else {return v$191[SmlPrims.chk_ovf_i32(v$192 + v$1073)];
};
};
basis$0ArraySlice$1$3.update$195 = function(v$211,v$1074,v$1075){var v$212 = v$211[0];
var v$213 = v$211[1];
var v$214 = v$211[2];
if ((v$1074 < 0)?true:(v$1074 >= v$214)) {throw CompilerInitial.exn$Subscript$52;
} else {return (v$212[SmlPrims.chk_ovf_i32(v$213 + v$1074)] = v$1075,0);
};
};
basis$0ArraySlice$1$3.slice$217 = function(v$250,v$251,v$252){var alen$223 = v$250.length;
switch (v$252[0]) { case 1: {if ((0 <= v$251)?(v$251 <= alen$223):false) {return [v$250,v$251,SmlPrims.chk_ovf_i32(alen$223 - v$251)];
} else {throw CompilerInitial.exn$Subscript$52;
};
 break; }default: {var v$249 = v$252[1];
if ((0 <= v$251)?((0 <= v$249)?(v$249 <= (SmlPrims.chk_ovf_i32(alen$223 - v$251))):false):false) {return [v$250,v$251,v$249];
} else {throw CompilerInitial.exn$Subscript$52;
};
} };
};
basis$0ArraySlice$1$3.full$253 = function(a$256){return [a$256,0,a$256.length];
};
basis$0ArraySlice$1$3.subslice$257 = function(v$1076,v$1077,v$274){switch (v$274[0]) { case 1: {var v$284 = v$1076[0];
var v$285 = v$1076[1];
var v$286 = v$1076[2];
if ((0 <= v$1077)?(v$1077 <= v$286):false) {return [v$284,SmlPrims.chk_ovf_i32(v$285 + v$1077),SmlPrims.chk_ovf_i32(v$286 - v$1077)];
} else {throw CompilerInitial.exn$Subscript$52;
};
 break; }default: {var v$301 = v$1076[0];
var v$302 = v$1076[1];
var v$303 = v$1076[2];
var v$305 = v$274[1];
if ((0 <= v$1077)?((0 <= v$305)?(v$305 <= (SmlPrims.chk_ovf_i32(v$303 - v$1077))):false):false) {return [v$301,SmlPrims.chk_ovf_i32(v$302 + v$1077),v$305];
} else {throw CompilerInitial.exn$Subscript$52;
};
} };
};
basis$0ArraySlice$1$3.base$306 = function(sli$309){return sli$309;
};
basis$0ArraySlice$1$3.vector$310 = function(v$329,v$330,v$331){var newvec$316 = Array(v$331);
var fix$1085 = {};
fix$1085.$copy = function(j$320){lab$copy: while (true) {if (j$320 < v$331) {(newvec$316[j$320] = v$329[SmlPrims.chk_ovf_i32(v$330 + j$320)],0);
var t$1086 = SmlPrims.chk_ovf_i32(j$320 + 1);
var j$320 = t$1086;
continue lab$copy;
} else {return 0;
};
};
};
var copy$317 = fix$1085.$copy;
copy$317(0);
return newvec$316;
};
basis$0ArraySlice$1$3.copy$332 = function(v$1078,v$1079,v$372){var v$373 = v$372[0];
var v$374 = v$372[1];
var v$375 = v$372[2];
if ((v$1078 < 0)?true:((SmlPrims.chk_ovf_i32(v$1078 + v$375)) > v$1079.length)) {throw CompilerInitial.exn$Subscript$52;
} else {if (v$374 < v$1078) {var fix$1087 = {};
fix$1087.$hi2lo = function(j$351){lab$hi2lo: while (true) {if (j$351 >= 0) {(v$1079[SmlPrims.chk_ovf_i32(v$1078 + j$351)] = v$373[SmlPrims.chk_ovf_i32(v$374 + j$351)],0);
var t$1088 = SmlPrims.chk_ovf_i32(j$351 - 1);
var j$351 = t$1088;
continue lab$hi2lo;
} else {return 0;
};
};
};
var hi2lo$348 = fix$1087.$hi2lo;
return hi2lo$348(SmlPrims.chk_ovf_i32(v$375 - 1));
} else {var fix$1089 = {};
fix$1089.$lo2hi = function(j$361){lab$lo2hi: while (true) {if (j$361 < v$375) {(v$1079[SmlPrims.chk_ovf_i32(v$1078 + j$361)] = v$373[SmlPrims.chk_ovf_i32(v$374 + j$361)],0);
var t$1090 = SmlPrims.chk_ovf_i32(j$361 + 1);
var j$361 = t$1090;
continue lab$lo2hi;
} else {return 0;
};
};
};
var lo2hi$358 = fix$1089.$lo2hi;
return lo2hi$358(0);
};
};
};
basis$0ArraySlice$1$3.copyVec$378 = function(v$412,v$411,v$410){var v$407 = v$410[0];
var v$408 = v$410[1];
var v$409 = v$410[2];
if ((v$412 < 0)?true:((SmlPrims.chk_ovf_i32(v$412 + v$409)) > v$411.length)) {throw CompilerInitial.exn$Subscript$52;
} else {var fix$1091 = {};
fix$1091.$lo2hi = function(j$395){lab$lo2hi: while (true) {if (j$395 < v$409) {(v$411[SmlPrims.chk_ovf_i32(v$412 + j$395)] = v$407[SmlPrims.chk_ovf_i32(v$408 + j$395)],0);
var t$1092 = SmlPrims.chk_ovf_i32(j$395 + 1);
var j$395 = t$1092;
continue lab$lo2hi;
} else {return 0;
};
};
};
var lo2hi$392 = fix$1091.$lo2hi;
return lo2hi$392(0);
};
};
basis$0ArraySlice$1$3.isEmpty$413 = function(v$1080,v$1081,v$1082){return v$1082 == 0;
};
basis$0ArraySlice$1$3.concat$418 = function(slis$421){var fix$1093 = {};
fix$1093.$acc = function(v$425,v$428){lab$acc: while (true) {if (v$425 == null) {return v$428;
} else {var v$439 = v$425;
var v$440 = v$439[0];
var v$441 = v$440[2];
var v$442 = v$439[1];
var t$1094 = v$442;
var t$1095 = SmlPrims.chk_ovf_i32(v$441 + v$428);
var v$425 = t$1094;
var v$428 = t$1095;
continue lab$acc;
};
};
};
var acc$422 = fix$1093.$acc;
var len$444 = acc$422(slis$421,0);
var newvec$445;
if (len$444 > 123456789) {throw CompilerInitial.exn$Size$53;
} else {newvec$445 = (Array(len$444));
};
var fix$1096 = {};
fix$1096.$copyall = function(v$453,v$456){lab$copyall: while (true) {if (v$456 == null) {return 0;
} else {var v$482 = v$456;
var v$483 = v$482[0];
var v$484 = v$483[0];
var v$485 = v$483[1];
var v$486 = v$483[2];
var v$487 = v$482[1];
var fix$1097 = {};
fix$1097.$copyv1 = function(j$472){lab$copyv1: while (true) {if (j$472 < v$486) {(newvec$445[SmlPrims.chk_ovf_i32(v$453 + j$472)] = v$484[SmlPrims.chk_ovf_i32(v$485 + j$472)],0);
var t$1098 = SmlPrims.chk_ovf_i32(j$472 + 1);
var j$472 = t$1098;
continue lab$copyv1;
} else {return 0;
};
};
};
var copyv1$469 = fix$1097.$copyv1;
copyv1$469(0);
var t$1099 = SmlPrims.chk_ovf_i32(v$453 + v$486);
var t$1100 = v$487;
var v$453 = t$1099;
var v$456 = t$1100;
continue lab$copyall;
};
};
};
var copyall$450 = fix$1096.$copyall;
copyall$450(0,slis$421);
return newvec$445;
};
basis$0ArraySlice$1$3.getItem$490 = function(v$1083,v$1084,v$503){switch (v$503) { case 0: {return [1];
 break; }default: {return [0,[v$1083[v$1084],[v$1083,SmlPrims.chk_ovf_i32(v$1084 + 1),SmlPrims.chk_ovf_i32(v$503 - 1)]]];
} };
};
basis$0ArraySlice$1$3.find$508 = function(p$511,v$516){var v$530 = v$516[0];
var v$531 = v$516[1];
var v$532 = v$516[2];
var stop$517 = SmlPrims.chk_ovf_i32(v$531 + v$532);
var fix$1101 = {};
fix$1101.$lr = function(j$521){lab$lr: while (true) {if (j$521 < stop$517) {if (p$511(v$530[j$521])) {return [0,v$530[j$521]];
} else {var t$1102 = SmlPrims.chk_ovf_i32(j$521 + 1);
var j$521 = t$1102;
continue lab$lr;
};
} else {return [1];
};
};
};
var lr$518 = fix$1101.$lr;
return lr$518(v$531);
};
basis$0ArraySlice$1$3.exists$533 = function(p$536,v$541){var v$555 = v$541[0];
var v$556 = v$541[1];
var v$557 = v$541[2];
var stop$542 = SmlPrims.chk_ovf_i32(v$556 + v$557);
var fix$1103 = {};
fix$1103.$lr = function(j$546){lab$lr: while (true) {if (j$546 < stop$542) {if (p$536(v$555[j$546])) {return true;
} else {var t$1104 = SmlPrims.chk_ovf_i32(j$546 + 1);
var j$546 = t$1104;
continue lab$lr;
};
} else {return false;
};
};
};
var lr$543 = fix$1103.$lr;
return lr$543(v$556);
};
basis$0ArraySlice$1$3.all$558 = function(p$561,v$566){var v$580 = v$566[0];
var v$581 = v$566[1];
var v$582 = v$566[2];
var stop$567 = SmlPrims.chk_ovf_i32(v$581 + v$582);
var fix$1105 = {};
fix$1105.$lr = function(j$571){lab$lr: while (true) {if (j$571 >= stop$567) {return true;
} else {if (p$561(v$580[j$571])) {var t$1106 = SmlPrims.chk_ovf_i32(j$571 + 1);
var j$571 = t$1106;
continue lab$lr;
} else {return false;
};
};
};
};
var lr$568 = fix$1105.$lr;
return lr$568(v$581);
};
basis$0ArraySlice$1$3.app$583 = function(f$586,v$591){var v$603 = v$591[0];
var v$604 = v$591[1];
var v$605 = v$591[2];
var stop$592 = SmlPrims.chk_ovf_i32(v$604 + v$605);
var fix$1107 = {};
fix$1107.$lr = function(j$596){lab$lr: while (true) {if (j$596 < stop$592) {f$586(v$603[j$596]);
var t$1108 = SmlPrims.chk_ovf_i32(j$596 + 1);
var j$596 = t$1108;
continue lab$lr;
} else {return 0;
};
};
};
var lr$593 = fix$1107.$lr;
return lr$593(v$604);
};
basis$0ArraySlice$1$3.map$606 = function(f$609,v$614){var v$629 = v$614[0];
var v$630 = v$614[1];
var v$631 = v$614[2];
var newvec$615 = Array(v$631);
var stop$616 = SmlPrims.chk_ovf_i32(v$630 + v$631);
var fix$1109 = {};
fix$1109.$lr = function(j$620){lab$lr: while (true) {if (j$620 < stop$616) {(newvec$615[SmlPrims.chk_ovf_i32(j$620 - v$630)] = (f$609(v$629[j$620])),0);
var t$1110 = SmlPrims.chk_ovf_i32(j$620 + 1);
var j$620 = t$1110;
continue lab$lr;
} else {return 0;
};
};
};
var lr$617 = fix$1109.$lr;
lr$617(v$630);
return newvec$615;
};
basis$0ArraySlice$1$3.foldl$632 = function(f$635,e$638,v$643){var v$656 = v$643[0];
var v$657 = v$643[1];
var v$658 = v$643[2];
var stop$644 = SmlPrims.chk_ovf_i32(v$657 + v$658);
var fix$1111 = {};
fix$1111.$lr = function(j$648,res$651){lab$lr: while (true) {if (j$648 < stop$644) {var t$1112 = SmlPrims.chk_ovf_i32(j$648 + 1);
var t$1113 = f$635([v$656[j$648],res$651]);
var j$648 = t$1112;
var res$651 = t$1113;
continue lab$lr;
} else {return res$651;
};
};
};
var lr$645 = fix$1111.$lr;
return lr$645(v$657,e$638);
};
basis$0ArraySlice$1$3.foldr$659 = function(f$662,e$665,v$670){var v$682 = v$670[0];
var v$683 = v$670[1];
var v$684 = v$670[2];
var fix$1114 = {};
fix$1114.$rl = function(j$674,res$677){lab$rl: while (true) {if (j$674 >= v$683) {var t$1115 = SmlPrims.chk_ovf_i32(j$674 - 1);
var t$1116 = f$662([v$682[j$674],res$677]);
var j$674 = t$1115;
var res$677 = t$1116;
continue lab$rl;
} else {return res$677;
};
};
};
var rl$671 = fix$1114.$rl;
return rl$671(SmlPrims.chk_ovf_i32((SmlPrims.chk_ovf_i32(v$683 + v$684)) - 1),e$665);
};
basis$0ArraySlice$1$3.modify$685 = function(f$688,v$693){var v$705 = v$693[0];
var v$706 = v$693[1];
var v$707 = v$693[2];
var stop$694 = SmlPrims.chk_ovf_i32(v$706 + v$707);
var fix$1117 = {};
fix$1117.$lr = function(j$698){lab$lr: while (true) {if (j$698 < stop$694) {(v$705[j$698] = (f$688(v$705[j$698])),0);
var t$1118 = SmlPrims.chk_ovf_i32(j$698 + 1);
var j$698 = t$1118;
continue lab$lr;
} else {return 0;
};
};
};
var lr$695 = fix$1117.$lr;
return lr$695(v$706);
};
basis$0ArraySlice$1$3.findi$708 = function(p$711,v$716){var v$730 = v$716[0];
var v$731 = v$716[1];
var v$732 = v$716[2];
var stop$717 = SmlPrims.chk_ovf_i32(v$731 + v$732);
var fix$1119 = {};
fix$1119.$lr = function(j$721){lab$lr: while (true) {if (j$721 < stop$717) {if (p$711([j$721,v$730[j$721]])) {return [0,[j$721,v$730[j$721]]];
} else {var t$1120 = SmlPrims.chk_ovf_i32(j$721 + 1);
var j$721 = t$1120;
continue lab$lr;
};
} else {return [1];
};
};
};
var lr$718 = fix$1119.$lr;
return lr$718(v$731);
};
basis$0ArraySlice$1$3.appi$733 = function(f$736,v$741){var v$753 = v$741[0];
var v$754 = v$741[1];
var v$755 = v$741[2];
var stop$742 = SmlPrims.chk_ovf_i32(v$754 + v$755);
var fix$1121 = {};
fix$1121.$lr = function(j$746){lab$lr: while (true) {if (j$746 < stop$742) {f$736([j$746,v$753[j$746]]);
var t$1122 = SmlPrims.chk_ovf_i32(j$746 + 1);
var j$746 = t$1122;
continue lab$lr;
} else {return 0;
};
};
};
var lr$743 = fix$1121.$lr;
return lr$743(v$754);
};
basis$0ArraySlice$1$3.mapi$756 = function(f$759,v$764){var v$779 = v$764[0];
var v$780 = v$764[1];
var v$781 = v$764[2];
var newvec$765 = Array(v$781);
var stop$766 = SmlPrims.chk_ovf_i32(v$780 + v$781);
var fix$1123 = {};
fix$1123.$lr = function(j$770){lab$lr: while (true) {if (j$770 < stop$766) {(newvec$765[SmlPrims.chk_ovf_i32(j$770 - v$780)] = (f$759([j$770,v$779[j$770]])),0);
var t$1124 = SmlPrims.chk_ovf_i32(j$770 + 1);
var j$770 = t$1124;
continue lab$lr;
} else {return 0;
};
};
};
var lr$767 = fix$1123.$lr;
lr$767(v$780);
return newvec$765;
};
basis$0ArraySlice$1$3.foldli$782 = function(f$785,e$788,v$793){var v$806 = v$793[0];
var v$807 = v$793[1];
var v$808 = v$793[2];
var stop$794 = SmlPrims.chk_ovf_i32(v$807 + v$808);
var fix$1125 = {};
fix$1125.$lr = function(j$798,res$801){lab$lr: while (true) {if (j$798 < stop$794) {var t$1126 = SmlPrims.chk_ovf_i32(j$798 + 1);
var t$1127 = f$785([j$798,v$806[j$798],res$801]);
var j$798 = t$1126;
var res$801 = t$1127;
continue lab$lr;
} else {return res$801;
};
};
};
var lr$795 = fix$1125.$lr;
return lr$795(v$807,e$788);
};
basis$0ArraySlice$1$3.foldri$809 = function(f$812,e$815,v$820){var v$832 = v$820[0];
var v$833 = v$820[1];
var v$834 = v$820[2];
var fix$1128 = {};
fix$1128.$rl = function(j$824,res$827){lab$rl: while (true) {if (j$824 >= v$833) {var t$1129 = SmlPrims.chk_ovf_i32(j$824 - 1);
var t$1130 = f$812([j$824,v$832[j$824],res$827]);
var j$824 = t$1129;
var res$827 = t$1130;
continue lab$rl;
} else {return res$827;
};
};
};
var rl$821 = fix$1128.$rl;
return rl$821(SmlPrims.chk_ovf_i32((SmlPrims.chk_ovf_i32(v$833 + v$834)) - 1),e$815);
};
basis$0ArraySlice$1$3.modifyi$835 = function(f$838,v$843){var v$855 = v$843[0];
var v$856 = v$843[1];
var v$857 = v$843[2];
var stop$844 = SmlPrims.chk_ovf_i32(v$856 + v$857);
var fix$1131 = {};
fix$1131.$lr = function(j$848){lab$lr: while (true) {if (j$848 < stop$844) {(v$855[j$848] = (f$838([j$848,v$855[j$848]])),0);
var t$1132 = SmlPrims.chk_ovf_i32(j$848 + 1);
var j$848 = t$1132;
continue lab$lr;
} else {return 0;
};
};
};
var lr$845 = fix$1131.$lr;
return lr$845(v$856);
};
basis$0ArraySlice$1$3.collate$858 = function(cmp$861,v$869){var v$896 = v$869[0];
var v$897 = v$896[0];
var v$898 = v$896[1];
var v$899 = v$896[2];
var v$900 = v$869[1];
var v$901 = v$900[0];
var v$902 = v$900[1];
var v$903 = v$900[2];
var stop$870 = (v$899 < v$903)?v$899:v$903;
var fix$1133 = {};
fix$1133.$h = function(j$878){lab$h: while (true) {if (j$878 == stop$870) {return (v$899 < v$903)?0:((v$899 > v$903)?1:2);
} else {var v$895 = cmp$861([v$897[SmlPrims.chk_ovf_i32(v$898 + j$878)],v$901[SmlPrims.chk_ovf_i32(v$902 + j$878)]]);
switch (v$895) { case 2: {var t$1134 = SmlPrims.chk_ovf_i32(j$878 + 1);
var j$878 = t$1134;
continue lab$h;
 break; }default: {return v$895;
} };
};
};
};
var h$875 = fix$1133.$h;
return h$875(0);
};
return 0;
})();
