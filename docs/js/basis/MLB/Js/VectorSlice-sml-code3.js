if ((typeof(basis$0VectorSlice$1$3)) == "undefined") {basis$0VectorSlice$1$3 = {};
};
(function(){basis$0VectorSlice$1$3.sub0$113 = function(v$1060,v$1061){return v$1060[v$1061];
};
basis$0VectorSlice$1$3.sub_vector0$120 = function(v$1062,v$1063){return v$1062[v$1063];
};
basis$0VectorSlice$1$3.update0$127 = function(v$1064,v$1065,v$1066){return (v$1064[v$1065] = v$1066,0);
};
basis$0VectorSlice$1$3.update_vector0$136 = function(v$1067,v$1068,v$1069){return (v$1067[v$1068] = v$1069,0);
};
basis$0VectorSlice$1$3.table0$145 = function(n$148){return Array(n$148);
};
basis$0VectorSlice$1$3.vector0$149 = function(n$152){return Array(n$152);
};
basis$0VectorSlice$1$3.length0$153 = function(t$156){return t$156.length;
};
basis$0VectorSlice$1$3.length_vector$157 = function(t$160){return t$160.length;
};
basis$0VectorSlice$1$3.array0$161 = function(v$1070,v$1071){return SmlPrims.wordTableInit(v$1070,v$1071);
};
basis$0VectorSlice$1$3.length$168 = function(v$1072,v$1073,v$1074){return v$1074;
};
basis$0VectorSlice$1$3.sub$177 = function(v$192,v$1075){var v$193 = v$192[0];
var v$194 = v$192[1];
var v$195 = v$192[2];
if ((v$1075 < 0)?true:(v$1075 >= v$195)) {throw CompilerInitial.exn$Subscript$52;
} else {return v$193[SmlPrims.chk_ovf_i32(v$194 + v$1075)];
};
};
basis$0VectorSlice$1$3.update$197 = function(v$213,v$1076,v$1077){var v$214 = v$213[0];
var v$215 = v$213[1];
var v$216 = v$213[2];
if ((v$1076 < 0)?true:(v$1076 >= v$216)) {throw CompilerInitial.exn$Subscript$52;
} else {return (v$214[SmlPrims.chk_ovf_i32(v$215 + v$1076)] = v$1077,0);
};
};
basis$0VectorSlice$1$3.slice$219 = function(v$252,v$253,v$254){var alen$225 = v$252.length;
switch (v$254[0]) { case 1: {if ((0 <= v$253)?(v$253 <= alen$225):false) {return [v$252,v$253,SmlPrims.chk_ovf_i32(alen$225 - v$253)];
} else {throw CompilerInitial.exn$Subscript$52;
};
 break; }default: {var v$251 = v$254[1];
if ((0 <= v$253)?((0 <= v$251)?(v$251 <= (SmlPrims.chk_ovf_i32(alen$225 - v$253))):false):false) {return [v$252,v$253,v$251];
} else {throw CompilerInitial.exn$Subscript$52;
};
} };
};
basis$0VectorSlice$1$3.full$255 = function(a$258){return [a$258,0,a$258.length];
};
basis$0VectorSlice$1$3.subslice$259 = function(v$1078,v$1079,v$276){switch (v$276[0]) { case 1: {var v$286 = v$1078[0];
var v$287 = v$1078[1];
var v$288 = v$1078[2];
if ((0 <= v$1079)?(v$1079 <= v$288):false) {return [v$286,SmlPrims.chk_ovf_i32(v$287 + v$1079),SmlPrims.chk_ovf_i32(v$288 - v$1079)];
} else {throw CompilerInitial.exn$Subscript$52;
};
 break; }default: {var v$303 = v$1078[0];
var v$304 = v$1078[1];
var v$305 = v$1078[2];
var v$307 = v$276[1];
if ((0 <= v$1079)?((0 <= v$307)?(v$307 <= (SmlPrims.chk_ovf_i32(v$305 - v$1079))):false):false) {return [v$303,SmlPrims.chk_ovf_i32(v$304 + v$1079),v$307];
} else {throw CompilerInitial.exn$Subscript$52;
};
} };
};
basis$0VectorSlice$1$3.base$308 = function(sli$311){return sli$311;
};
basis$0VectorSlice$1$3.vector$312 = function(v$331,v$332,v$333){var newvec$318 = Array(v$333);
var fix$1087 = {};
fix$1087.$copy = function(j$322){lab$copy: while (true) {if (j$322 < v$333) {(newvec$318[j$322] = v$331[SmlPrims.chk_ovf_i32(v$332 + j$322)],0);
var t$1088 = SmlPrims.chk_ovf_i32(j$322 + 1);
var j$322 = t$1088;
continue lab$copy;
} else {return 0;
};
};
};
var copy$319 = fix$1087.$copy;
copy$319(0);
return newvec$318;
};
basis$0VectorSlice$1$3.copy$334 = function(v$1080,v$1081,v$374){var v$375 = v$374[0];
var v$376 = v$374[1];
var v$377 = v$374[2];
if ((v$1080 < 0)?true:((SmlPrims.chk_ovf_i32(v$1080 + v$377)) > v$1081.length)) {throw CompilerInitial.exn$Subscript$52;
} else {if (v$376 < v$1080) {var fix$1089 = {};
fix$1089.$hi2lo = function(j$353){lab$hi2lo: while (true) {if (j$353 >= 0) {(v$1081[SmlPrims.chk_ovf_i32(v$1080 + j$353)] = v$375[SmlPrims.chk_ovf_i32(v$376 + j$353)],0);
var t$1090 = SmlPrims.chk_ovf_i32(j$353 - 1);
var j$353 = t$1090;
continue lab$hi2lo;
} else {return 0;
};
};
};
var hi2lo$350 = fix$1089.$hi2lo;
return hi2lo$350(SmlPrims.chk_ovf_i32(v$377 - 1));
} else {var fix$1091 = {};
fix$1091.$lo2hi = function(j$363){lab$lo2hi: while (true) {if (j$363 < v$377) {(v$1081[SmlPrims.chk_ovf_i32(v$1080 + j$363)] = v$375[SmlPrims.chk_ovf_i32(v$376 + j$363)],0);
var t$1092 = SmlPrims.chk_ovf_i32(j$363 + 1);
var j$363 = t$1092;
continue lab$lo2hi;
} else {return 0;
};
};
};
var lo2hi$360 = fix$1091.$lo2hi;
return lo2hi$360(0);
};
};
};
basis$0VectorSlice$1$3.copyVec$380 = function(v$414,v$413,v$412){var v$409 = v$412[0];
var v$410 = v$412[1];
var v$411 = v$412[2];
if ((v$414 < 0)?true:((SmlPrims.chk_ovf_i32(v$414 + v$411)) > v$413.length)) {throw CompilerInitial.exn$Subscript$52;
} else {var fix$1093 = {};
fix$1093.$lo2hi = function(j$397){lab$lo2hi: while (true) {if (j$397 < v$411) {(v$413[SmlPrims.chk_ovf_i32(v$414 + j$397)] = v$409[SmlPrims.chk_ovf_i32(v$410 + j$397)],0);
var t$1094 = SmlPrims.chk_ovf_i32(j$397 + 1);
var j$397 = t$1094;
continue lab$lo2hi;
} else {return 0;
};
};
};
var lo2hi$394 = fix$1093.$lo2hi;
return lo2hi$394(0);
};
};
basis$0VectorSlice$1$3.isEmpty$415 = function(v$1082,v$1083,v$1084){return v$1084 == 0;
};
basis$0VectorSlice$1$3.concat$420 = function(slis$423){var fix$1095 = {};
fix$1095.$acc = function(v$427,v$430){lab$acc: while (true) {if (v$427 == null) {return v$430;
} else {var v$441 = v$427;
var v$442 = v$441[0];
var v$443 = v$442[2];
var v$444 = v$441[1];
var t$1096 = v$444;
var t$1097 = SmlPrims.chk_ovf_i32(v$443 + v$430);
var v$427 = t$1096;
var v$430 = t$1097;
continue lab$acc;
};
};
};
var acc$424 = fix$1095.$acc;
var len$446 = acc$424(slis$423,0);
var newvec$447;
if (len$446 > 123456789) {throw CompilerInitial.exn$Size$53;
} else {newvec$447 = (Array(len$446));
};
var fix$1098 = {};
fix$1098.$copyall = function(v$455,v$458){lab$copyall: while (true) {if (v$458 == null) {return 0;
} else {var v$484 = v$458;
var v$485 = v$484[0];
var v$486 = v$485[0];
var v$487 = v$485[1];
var v$488 = v$485[2];
var v$489 = v$484[1];
var fix$1099 = {};
fix$1099.$copyv1 = function(j$474){lab$copyv1: while (true) {if (j$474 < v$488) {(newvec$447[SmlPrims.chk_ovf_i32(v$455 + j$474)] = v$486[SmlPrims.chk_ovf_i32(v$487 + j$474)],0);
var t$1100 = SmlPrims.chk_ovf_i32(j$474 + 1);
var j$474 = t$1100;
continue lab$copyv1;
} else {return 0;
};
};
};
var copyv1$471 = fix$1099.$copyv1;
copyv1$471(0);
var t$1101 = SmlPrims.chk_ovf_i32(v$455 + v$488);
var t$1102 = v$489;
var v$455 = t$1101;
var v$458 = t$1102;
continue lab$copyall;
};
};
};
var copyall$452 = fix$1098.$copyall;
copyall$452(0,slis$423);
return newvec$447;
};
basis$0VectorSlice$1$3.getItem$492 = function(v$1085,v$1086,v$505){switch (v$505) { case 0: {return [1];
 break; }default: {return [0,[v$1085[v$1086],[v$1085,SmlPrims.chk_ovf_i32(v$1086 + 1),SmlPrims.chk_ovf_i32(v$505 - 1)]]];
} };
};
basis$0VectorSlice$1$3.find$510 = function(p$513,v$518){var v$532 = v$518[0];
var v$533 = v$518[1];
var v$534 = v$518[2];
var stop$519 = SmlPrims.chk_ovf_i32(v$533 + v$534);
var fix$1103 = {};
fix$1103.$lr = function(j$523){lab$lr: while (true) {if (j$523 < stop$519) {if (p$513(v$532[j$523])) {return [0,v$532[j$523]];
} else {var t$1104 = SmlPrims.chk_ovf_i32(j$523 + 1);
var j$523 = t$1104;
continue lab$lr;
};
} else {return [1];
};
};
};
var lr$520 = fix$1103.$lr;
return lr$520(v$533);
};
basis$0VectorSlice$1$3.exists$535 = function(p$538,v$543){var v$557 = v$543[0];
var v$558 = v$543[1];
var v$559 = v$543[2];
var stop$544 = SmlPrims.chk_ovf_i32(v$558 + v$559);
var fix$1105 = {};
fix$1105.$lr = function(j$548){lab$lr: while (true) {if (j$548 < stop$544) {if (p$538(v$557[j$548])) {return true;
} else {var t$1106 = SmlPrims.chk_ovf_i32(j$548 + 1);
var j$548 = t$1106;
continue lab$lr;
};
} else {return false;
};
};
};
var lr$545 = fix$1105.$lr;
return lr$545(v$558);
};
basis$0VectorSlice$1$3.all$560 = function(p$563,v$568){var v$582 = v$568[0];
var v$583 = v$568[1];
var v$584 = v$568[2];
var stop$569 = SmlPrims.chk_ovf_i32(v$583 + v$584);
var fix$1107 = {};
fix$1107.$lr = function(j$573){lab$lr: while (true) {if (j$573 >= stop$569) {return true;
} else {if (p$563(v$582[j$573])) {var t$1108 = SmlPrims.chk_ovf_i32(j$573 + 1);
var j$573 = t$1108;
continue lab$lr;
} else {return false;
};
};
};
};
var lr$570 = fix$1107.$lr;
return lr$570(v$583);
};
basis$0VectorSlice$1$3.app$585 = function(f$588,v$593){var v$605 = v$593[0];
var v$606 = v$593[1];
var v$607 = v$593[2];
var stop$594 = SmlPrims.chk_ovf_i32(v$606 + v$607);
var fix$1109 = {};
fix$1109.$lr = function(j$598){lab$lr: while (true) {if (j$598 < stop$594) {f$588(v$605[j$598]);
var t$1110 = SmlPrims.chk_ovf_i32(j$598 + 1);
var j$598 = t$1110;
continue lab$lr;
} else {return 0;
};
};
};
var lr$595 = fix$1109.$lr;
return lr$595(v$606);
};
basis$0VectorSlice$1$3.map$608 = function(f$611,v$616){var v$631 = v$616[0];
var v$632 = v$616[1];
var v$633 = v$616[2];
var newvec$617 = Array(v$633);
var stop$618 = SmlPrims.chk_ovf_i32(v$632 + v$633);
var fix$1111 = {};
fix$1111.$lr = function(j$622){lab$lr: while (true) {if (j$622 < stop$618) {(newvec$617[SmlPrims.chk_ovf_i32(j$622 - v$632)] = (f$611(v$631[j$622])),0);
var t$1112 = SmlPrims.chk_ovf_i32(j$622 + 1);
var j$622 = t$1112;
continue lab$lr;
} else {return 0;
};
};
};
var lr$619 = fix$1111.$lr;
lr$619(v$632);
return newvec$617;
};
basis$0VectorSlice$1$3.foldl$634 = function(f$637,e$640,v$645){var v$658 = v$645[0];
var v$659 = v$645[1];
var v$660 = v$645[2];
var stop$646 = SmlPrims.chk_ovf_i32(v$659 + v$660);
var fix$1113 = {};
fix$1113.$lr = function(j$650,res$653){lab$lr: while (true) {if (j$650 < stop$646) {var t$1114 = SmlPrims.chk_ovf_i32(j$650 + 1);
var t$1115 = f$637([v$658[j$650],res$653]);
var j$650 = t$1114;
var res$653 = t$1115;
continue lab$lr;
} else {return res$653;
};
};
};
var lr$647 = fix$1113.$lr;
return lr$647(v$659,e$640);
};
basis$0VectorSlice$1$3.foldr$661 = function(f$664,e$667,v$672){var v$684 = v$672[0];
var v$685 = v$672[1];
var v$686 = v$672[2];
var fix$1116 = {};
fix$1116.$rl = function(j$676,res$679){lab$rl: while (true) {if (j$676 >= v$685) {var t$1117 = SmlPrims.chk_ovf_i32(j$676 - 1);
var t$1118 = f$664([v$684[j$676],res$679]);
var j$676 = t$1117;
var res$679 = t$1118;
continue lab$rl;
} else {return res$679;
};
};
};
var rl$673 = fix$1116.$rl;
return rl$673(SmlPrims.chk_ovf_i32((SmlPrims.chk_ovf_i32(v$685 + v$686)) - 1),e$667);
};
basis$0VectorSlice$1$3.modify$687 = function(f$690,v$695){var v$707 = v$695[0];
var v$708 = v$695[1];
var v$709 = v$695[2];
var stop$696 = SmlPrims.chk_ovf_i32(v$708 + v$709);
var fix$1119 = {};
fix$1119.$lr = function(j$700){lab$lr: while (true) {if (j$700 < stop$696) {(v$707[j$700] = (f$690(v$707[j$700])),0);
var t$1120 = SmlPrims.chk_ovf_i32(j$700 + 1);
var j$700 = t$1120;
continue lab$lr;
} else {return 0;
};
};
};
var lr$697 = fix$1119.$lr;
return lr$697(v$708);
};
basis$0VectorSlice$1$3.findi$710 = function(p$713,v$718){var v$732 = v$718[0];
var v$733 = v$718[1];
var v$734 = v$718[2];
var stop$719 = SmlPrims.chk_ovf_i32(v$733 + v$734);
var fix$1121 = {};
fix$1121.$lr = function(j$723){lab$lr: while (true) {if (j$723 < stop$719) {if (p$713([j$723,v$732[j$723]])) {return [0,[j$723,v$732[j$723]]];
} else {var t$1122 = SmlPrims.chk_ovf_i32(j$723 + 1);
var j$723 = t$1122;
continue lab$lr;
};
} else {return [1];
};
};
};
var lr$720 = fix$1121.$lr;
return lr$720(v$733);
};
basis$0VectorSlice$1$3.appi$735 = function(f$738,v$743){var v$755 = v$743[0];
var v$756 = v$743[1];
var v$757 = v$743[2];
var stop$744 = SmlPrims.chk_ovf_i32(v$756 + v$757);
var fix$1123 = {};
fix$1123.$lr = function(j$748){lab$lr: while (true) {if (j$748 < stop$744) {f$738([j$748,v$755[j$748]]);
var t$1124 = SmlPrims.chk_ovf_i32(j$748 + 1);
var j$748 = t$1124;
continue lab$lr;
} else {return 0;
};
};
};
var lr$745 = fix$1123.$lr;
return lr$745(v$756);
};
basis$0VectorSlice$1$3.mapi$758 = function(f$761,v$766){var v$781 = v$766[0];
var v$782 = v$766[1];
var v$783 = v$766[2];
var newvec$767 = Array(v$783);
var stop$768 = SmlPrims.chk_ovf_i32(v$782 + v$783);
var fix$1125 = {};
fix$1125.$lr = function(j$772){lab$lr: while (true) {if (j$772 < stop$768) {(newvec$767[SmlPrims.chk_ovf_i32(j$772 - v$782)] = (f$761([j$772,v$781[j$772]])),0);
var t$1126 = SmlPrims.chk_ovf_i32(j$772 + 1);
var j$772 = t$1126;
continue lab$lr;
} else {return 0;
};
};
};
var lr$769 = fix$1125.$lr;
lr$769(v$782);
return newvec$767;
};
basis$0VectorSlice$1$3.foldli$784 = function(f$787,e$790,v$795){var v$808 = v$795[0];
var v$809 = v$795[1];
var v$810 = v$795[2];
var stop$796 = SmlPrims.chk_ovf_i32(v$809 + v$810);
var fix$1127 = {};
fix$1127.$lr = function(j$800,res$803){lab$lr: while (true) {if (j$800 < stop$796) {var t$1128 = SmlPrims.chk_ovf_i32(j$800 + 1);
var t$1129 = f$787([j$800,v$808[j$800],res$803]);
var j$800 = t$1128;
var res$803 = t$1129;
continue lab$lr;
} else {return res$803;
};
};
};
var lr$797 = fix$1127.$lr;
return lr$797(v$809,e$790);
};
basis$0VectorSlice$1$3.foldri$811 = function(f$814,e$817,v$822){var v$834 = v$822[0];
var v$835 = v$822[1];
var v$836 = v$822[2];
var fix$1130 = {};
fix$1130.$rl = function(j$826,res$829){lab$rl: while (true) {if (j$826 >= v$835) {var t$1131 = SmlPrims.chk_ovf_i32(j$826 - 1);
var t$1132 = f$814([j$826,v$834[j$826],res$829]);
var j$826 = t$1131;
var res$829 = t$1132;
continue lab$rl;
} else {return res$829;
};
};
};
var rl$823 = fix$1130.$rl;
return rl$823(SmlPrims.chk_ovf_i32((SmlPrims.chk_ovf_i32(v$835 + v$836)) - 1),e$817);
};
basis$0VectorSlice$1$3.modifyi$837 = function(f$840,v$845){var v$857 = v$845[0];
var v$858 = v$845[1];
var v$859 = v$845[2];
var stop$846 = SmlPrims.chk_ovf_i32(v$858 + v$859);
var fix$1133 = {};
fix$1133.$lr = function(j$850){lab$lr: while (true) {if (j$850 < stop$846) {(v$857[j$850] = (f$840([j$850,v$857[j$850]])),0);
var t$1134 = SmlPrims.chk_ovf_i32(j$850 + 1);
var j$850 = t$1134;
continue lab$lr;
} else {return 0;
};
};
};
var lr$847 = fix$1133.$lr;
return lr$847(v$858);
};
basis$0VectorSlice$1$3.collate$860 = function(cmp$863,v$871){var v$898 = v$871[0];
var v$899 = v$898[0];
var v$900 = v$898[1];
var v$901 = v$898[2];
var v$902 = v$871[1];
var v$903 = v$902[0];
var v$904 = v$902[1];
var v$905 = v$902[2];
var stop$872 = (v$901 < v$905)?v$901:v$905;
var fix$1135 = {};
fix$1135.$h = function(j$880){lab$h: while (true) {if (j$880 == stop$872) {return (v$901 < v$905)?0:((v$901 > v$905)?1:2);
} else {var v$897 = cmp$863([v$899[SmlPrims.chk_ovf_i32(v$900 + j$880)],v$903[SmlPrims.chk_ovf_i32(v$904 + j$880)]]);
switch (v$897) { case 2: {var t$1136 = SmlPrims.chk_ovf_i32(j$880 + 1);
var j$880 = t$1136;
continue lab$h;
 break; }default: {return v$897;
} };
};
};
};
var h$877 = fix$1135.$h;
return h$877(0);
};
return 0;
})();
