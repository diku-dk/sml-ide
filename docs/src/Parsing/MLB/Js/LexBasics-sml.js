if ((typeof(basics$0LexBasics$1)) == "undefined") {basics$0LexBasics$1 = {};
};
(function(){basics$0LexBasics$1.eq_SourceText$659 = function(v$661,v$662){switch (v$662[0]) { case 0: {var v$663 = v$661[1];
var v$664 = v$662[1];
if (v$663[0] == v$664[0]) {var fix$1146 = {};
fix$1146.$eq_list = function(v$676,v$677){lab$eq_list: while (true) {if (v$676 == null) {return (v$677 == null)?true:false;
} else {if (v$677 == null) {return false;
} else {var v$678 = v$676;
var v$679 = v$677;
var t$1147;
var v$970 = v$678[0];
var v$971 = v$679[0];
t$1147 = ((v$970[0] == v$971[0])?(v$970[1] == v$971[1]):false);
if (t$1147) {var t$1148 = v$678[1];
var t$1149 = v$679[1];
var v$676 = t$1148;
var v$677 = t$1149;
continue lab$eq_list;
} else {return false;
};
};
};
};
};
var eq_list$674 = fix$1146.$eq_list;
return eq_list$674(v$663[1],v$664[1]);
} else {return false;
};
 break; }default: {return false;
} };
};
var fix$1150 = {};
fix$1150.$spaces = function(v$76,v$77){lab$spaces: while (true) {if (v$76 <= 0) {return v$77;
} else {var t$1151 = SmlPrims.chk_ovf_i32(v$76 - 1);
var t$1152 = [32,v$77];
var v$76 = t$1151;
var v$77 = t$1152;
continue lab$spaces;
};
};
};
var spaces$67 = fix$1150.$spaces;
var fix$1153 = {};
fix$1153.$untabifyL = function(v$1116,v$93){if (v$93 == null) {return null;
} else {var v$95 = v$93;
var v$96 = v$95[0];
switch (v$96) { case 9: {var v$99 = v$95[1];
var gap$97 = SmlPrims.chk_ovf_i32(8 - (SmlPrims.mod_i32(v$1116,8,CompilerInitial.exn$Div$47)));
return spaces$67(gap$97,fix$1153.$untabifyL(SmlPrims.chk_ovf_i32(v$1116 + gap$97),v$99));
 break; }default: {var v$101 = v$95[1];
return [v$96,fix$1153.$untabifyL(SmlPrims.chk_ovf_i32(v$1116 + 1),v$101)];
} };
};
};
var untabifyL$78 = fix$1153.$untabifyL;
var fix$1154 = {};
fix$1154.$withAbsCharacter = function(v$1117,v$120){if (v$120 == null) {return null;
} else {var v$123 = v$120;
var v$124 = v$123[0];
var v$125 = v$123[1];
return [[v$1117,v$124],fix$1154.$withAbsCharacter(SmlPrims.chk_ovf_i32(v$1117 + v$124.length),v$125)];
};
};
var withAbsCharacter$109 = fix$1154.$withAbsCharacter;
var sourceReader$126 = function(getc$129,cs$132){var fix$1155 = {};
fix$1155.$loop = function(v$153,v$154,v$155){lab$loop: while (true) {var v$147 = getc$129(v$153);
switch (v$147[0]) { case 0: {var v$149 = v$147[1];
var v$150 = v$149[0];
switch (v$150) { case 10: {var v$151 = v$149[1];
var t$1156 = v$151;
var t$1157 = null;
var t$1158 = [SmlPrims.implode(basis$0List$1.rev$682([10,v$154])),v$155];
var v$153 = t$1156;
var v$154 = t$1157;
var v$155 = t$1158;
continue lab$loop;
 break; }default: {var v$152 = v$149[1];
var t$1159 = v$152;
var t$1160 = [v$150,v$154];
var t$1161 = v$155;
var v$153 = t$1159;
var v$154 = t$1160;
var v$155 = t$1161;
continue lab$loop;
} };
 break; }default: {return [0,[basis$0List$1.rev$682([SmlPrims.implode(basis$0List$1.rev$682(v$154)),v$155]),v$153]];
} };
};
};
var loop$133 = fix$1155.$loop;
return loop$133(cs$132,null,null);
};
var lexFromSourceText$298 = function(source$301){var v$332 = source$301[1];
var v$333 = v$332[0];
var v$334 = v$332[1];
var theLines$307 = [v$334];
return [0,[function(v$753){return 0;
},function(v$754){var v$755 = theLines$307[0];
if (v$755 == null) {return "";
} else {var v$756 = v$755;
var v$757 = v$756[0];
var v$758 = v$757[1];
var v$759 = v$756[1];
(theLines$307[0] = v$759,0);
return v$758;
};
},v$333,function(absPos$327){var v$978 = [source$301];
return function(v$764){var v$765 = v$978[0][1];
var v$766 = v$765[0];
var v$767 = v$765[1];
var fix$1162 = {};
fix$1162.$search = function(v$1118,v$1119,v$770){lab$search: while (true) {if (v$770 == null) {switch (v$1119[0]) { case 0: {return [SmlPrims.chk_ovf_i32(absPos$327 - v$1119[1][0]),v$766,(function(env$1164){return function(n$791){var v$1163 = env$1164[0];
var v$792 = v$1163[0][1];
var v$793 = v$792[1];
var t$1165;
var v$983 = SmlPrims.chk_ovf_i32(n$791 - 1);
var fix$1166 = {};
fix$1166.$h = function(v$798,v$799){lab$h: while (true) {if (v$798 == null) {throw CompilerInitial.exn$Subscript$52;
} else {var v$800 = v$798;
var v$801 = v$800[0];
var v$802 = v$800[1];
if (v$799 == 0) {return v$801;
} else {var t$1167 = v$802;
var t$1168 = SmlPrims.chk_ovf_i32(v$799 - 1);
var v$798 = t$1167;
var v$799 = t$1168;
continue lab$h;
};
};
};
};
var h$797 = fix$1166.$h;
if (v$983 < 0) {throw CompilerInitial.exn$Subscript$52;
} else {t$1165 = (h$797(v$793,v$983));
};
return t$1165[1];
};
})([v$978]),v$1118];
 break; }default: {return tools$0Crash$1.impossible$59("LexBasics.search(previous/2)");
} };
} else {var v$773 = v$770;
var v$774 = v$773[0];
var v$775 = v$774[0];
var v$776 = v$773[1];
if (absPos$327 < v$775) {switch (v$1119[0]) { case 0: {return [SmlPrims.chk_ovf_i32(absPos$327 - v$1119[1][0]),v$766,(function(env$1170){return function(n$777){var v$1169 = env$1170[0];
var v$778 = v$1169[0][1];
var v$779 = v$778[1];
var t$1171;
var v$981 = SmlPrims.chk_ovf_i32(n$777 - 1);
var fix$1172 = {};
fix$1172.$h = function(v$784,v$785){lab$h: while (true) {if (v$784 == null) {throw CompilerInitial.exn$Subscript$52;
} else {var v$786 = v$784;
var v$787 = v$786[0];
var v$788 = v$786[1];
if (v$785 == 0) {return v$787;
} else {var t$1173 = v$788;
var t$1174 = SmlPrims.chk_ovf_i32(v$785 - 1);
var v$784 = t$1173;
var v$785 = t$1174;
continue lab$h;
};
};
};
};
var h$783 = fix$1172.$h;
if (v$981 < 0) {throw CompilerInitial.exn$Subscript$52;
} else {t$1171 = (h$783(v$779,v$981));
};
return t$1171[1];
};
})([v$978]),v$1118];
 break; }default: {return tools$0Crash$1.impossible$59("LexBasics.search(previous/1)");
} };
} else {var t$1175 = SmlPrims.chk_ovf_i32(v$1118 + 1);
var t$1176 = [0,v$774];
var t$1177 = v$776;
var v$1118 = t$1175;
var v$1119 = t$1176;
var v$770 = t$1177;
continue lab$search;
};
};
};
};
var search$768 = fix$1162.$search;
return search$768(0,[1],v$767);
};
}]];
};
basics$0LexBasics$1.lexFromString$335 = function(x$806){var t$1189 = lexFromSourceText$298;
var t$1188;
var lines$1059;
var t$1187 = basis$0List$1.map$697;
var t$1186 = function(line$1060){var t$1185;
var t$1184 = untabifyL$78;
var t$1183 = 0;
var t$1182;
var fix$1179 = {};
fix$1179.$h = function(v$1063,v$1064){lab$h: while (true) {if (v$1063 < 0) {return v$1064;
} else {var t$1180 = SmlPrims.chk_ovf_i32(v$1063 - 1);
var t$1181 = [line$1060.charCodeAt(v$1063),v$1064];
var v$1063 = t$1180;
var v$1064 = t$1181;
continue lab$h;
};
};
};
var h$1061 = fix$1179.$h;
t$1182 = (h$1061(SmlPrims.chk_ovf_i32(line$1060.length - 1),null));
t$1185 = (t$1184(t$1183,t$1182));
return SmlPrims.implode(t$1185);
};
var t$1178;
var v$1065 = basis$0StringCvt$1.scanString$163(function(v$1124){return function(v$1125){return sourceReader$126(v$1124,v$1125);
};
},x$806);
switch (v$1065[0]) { case 0: {t$1178 = v$1065[1];
 break; }default: {t$1178 = ["",null];
} };
lines$1059 = (t$1187(t$1186,t$1178));
t$1188 = [0,["<string>",withAbsCharacter$109(0,lines$1059)]];
return t$1189(t$1188);
};
basics$0LexBasics$1.lexFromFile$339 = function(x$822){var t$1201 = lexFromSourceText$298;
var t$1190;
var stream$1076 = basis$0TextIO$1.openIn$169(x$822);
var lines$1077;
var t$1200 = basis$0List$1.map$697;
var t$1199 = function(line$1078){var t$1198;
var t$1197 = untabifyL$78;
var t$1196 = 0;
var t$1195;
var fix$1192 = {};
fix$1192.$h = function(v$1081,v$1082){lab$h: while (true) {if (v$1081 < 0) {return v$1082;
} else {var t$1193 = SmlPrims.chk_ovf_i32(v$1081 - 1);
var t$1194 = [line$1078.charCodeAt(v$1081),v$1082];
var v$1081 = t$1193;
var v$1082 = t$1194;
continue lab$h;
};
};
};
var h$1079 = fix$1192.$h;
t$1195 = (h$1079(SmlPrims.chk_ovf_i32(line$1078.length - 1),null));
t$1198 = (t$1197(t$1196,t$1195));
return SmlPrims.implode(t$1198);
};
var t$1191;
var v$1083 = basis$0TextIO$1.scanStream$196(function(v$1126){return function(v$1127){return sourceReader$126(v$1126,v$1127);
};
},stream$1076);
switch (v$1083[0]) { case 0: {t$1191 = v$1083[1];
 break; }default: {t$1191 = ["",null];
} };
lines$1077 = (t$1200(t$1199,t$1191));
basis$0TextIO$1.closeIn$172(stream$1076);
t$1190 = [0,[x$822,withAbsCharacter$109(0,lines$1077)]];
return t$1201(t$1190);
};
var highlight$341 = function(v$372,v$373,v$374){try {var fix$1203 = {};
fix$1203.$drop_nl = function(v$350){lab$drop_nl: while (true) {if (v$350 == null) {return null;
} else {var v$360 = v$350;
var v$361 = v$360[0];
switch (v$361) { case 10: {var v$362 = v$360[1];
var t$1204 = v$362;
var v$350 = t$1204;
continue lab$drop_nl;
 break; }default: {var v$363 = v$360[1];
return [v$361,fix$1203.$drop_nl(v$363)];
} };
};
};
};
var drop_nl$347 = fix$1203.$drop_nl;
var line$364;
var t$1210;
var t$1209 = drop_nl$347;
var t$1208;
var fix$1205 = {};
fix$1205.$h = function(v$838,v$839){lab$h: while (true) {if (v$838 < 0) {return v$839;
} else {var t$1206 = SmlPrims.chk_ovf_i32(v$838 - 1);
var t$1207 = [v$372.charCodeAt(v$838),v$839];
var v$838 = t$1206;
var v$839 = t$1207;
continue lab$h;
};
};
};
var h$836 = fix$1205.$h;
t$1208 = (h$836(SmlPrims.chk_ovf_i32(v$372.length - 1),null));
t$1210 = (t$1209(t$1208));
line$364 = (SmlPrims.implode(t$1210));
var width$365 = (v$374 <= 0)?1:v$374;
var t$1222 = tools$0Report$1.indent$88;
var t$1221 = 2;
var t$1220;
var t$1219 = tools$0Report$1.s$hh$64;
var t$1218 = tools$0Report$1.line$60(line$364);
var t$1217;
var t$1216 = tools$0Report$1.line$60;
var t$1215;
var t$1214;
var fix$1213 = {};
fix$1213.$f = function(v$847){switch (v$847) { case 0: {return null;
 break; }default: {return [32,fix$1213.$f(SmlPrims.chk_ovf_i32(v$847 - 1))];
} };
};
var f$846 = fix$1213.$f;
t$1214 = ((v$373 <= 0)?"":(SmlPrims.concat([SmlPrims.implode(f$846(SmlPrims.chk_ovf_i32(v$373 - 0))),["",null]])));
var t$1212;
var fix$1211 = {};
fix$1211.$f = function(v$853){switch (v$853) { case 0: {return null;
 break; }default: {return [94,fix$1211.$f(SmlPrims.chk_ovf_i32(v$853 - 1))];
} };
};
var f$852 = fix$1211.$f;
t$1212 = ((width$365 <= 0)?"":(SmlPrims.concat(["",[SmlPrims.implode(f$852(SmlPrims.chk_ovf_i32(width$365 - 0))),null]])));
t$1215 = (t$1214 + t$1212);
t$1217 = (t$1216(t$1215));
t$1220 = (t$1219(t$1218,t$1217));
return t$1222(t$1221,t$1220);
} catch(v$1202) {return (function(v$371){return tools$0Crash$1.impossible$59("LexBasics.highlight: width or column <0");
})(v$1202);
};
};
basics$0LexBasics$1.layoutPos$375 = function(v$378){if (v$378 == null) {return [1,"DUMMY"];
} else {var v$400 = v$378;
var v$395 = v$400(0);
var v$396 = v$395[1];
var v$397 = v$395[3];
var v$398 = v$395[0];
var v$399 = v$395[2];
var t$1223;
var v$393 = [0,","];
t$1223 = [[[1,("\"" + v$396) + "\""],[[1,"line " + (basis$0Int32$1.toString$458(v$397))],[[1,"column " + (basis$0Int32$1.toString$458(v$398))],[[1,("\"" + (v$399(v$397))) + "\""],null]]]],v$393,")",3,"POSITION("];
return [0,t$1223];
};
};
basics$0LexBasics$1.reportPosition$401 = function(v$414,v$1120){if (v$414 == null) {var t$1235 = tools$0Report$1.s$hh$64;
var t$1234;
var t$1233 = tools$0Report$1.s$hh$64;
var t$1232 = tools$0Report$1.line$60("(position unknown (*4*)): ");
var t$1231;
var t$1230 = tools$0PrettyPrint$1.reportStringTree$1098;
var t$1228;
if (v$414 == null) {t$1228 = [1,"DUMMY"];
} else {var v$1101 = v$414;
var v$1102 = v$1101(0);
var v$1103 = v$1102[1];
var v$1104 = v$1102[3];
var v$1105 = v$1102[0];
var v$1106 = v$1102[2];
var t$1229;
var v$1107 = [0,","];
t$1229 = [[[1,("\"" + v$1103) + "\""],[[1,"line " + (basis$0Int32$1.toString$458(v$1104))],[[1,"column " + (basis$0Int32$1.toString$458(v$1105))],[[1,("\"" + (v$1106(v$1104))) + "\""],null]]]],v$1107,")",3,"POSITION("];
t$1228 = [0,t$1229];
};
t$1231 = (t$1230(t$1228));
t$1234 = (t$1233(t$1232,t$1231));
var t$1227;
var t$1226 = tools$0PrettyPrint$1.reportStringTree$1098;
var t$1224;
if (v$1120 == null) {t$1224 = [1,"DUMMY"];
} else {var v$1109 = v$1120;
var v$1110 = v$1109(0);
var v$1111 = v$1110[1];
var v$1112 = v$1110[3];
var v$1113 = v$1110[0];
var v$1114 = v$1110[2];
var t$1225;
var v$1115 = [0,","];
t$1225 = [[[1,("\"" + v$1111) + "\""],[[1,"line " + (basis$0Int32$1.toString$458(v$1112))],[[1,"column " + (basis$0Int32$1.toString$458(v$1113))],[[1,("\"" + (v$1114(v$1112))) + "\""],null]]]],v$1115,")",3,"POSITION("];
t$1224 = [0,t$1225];
};
t$1227 = (t$1226(t$1224));
return t$1235(t$1234,t$1227);
} else {if (v$1120 == null) {var t$1247 = tools$0Report$1.s$hh$64;
var t$1246;
var t$1245 = tools$0Report$1.s$hh$64;
var t$1244 = tools$0Report$1.line$60("(position unknown (*4*)): ");
var t$1243;
var t$1242 = tools$0PrettyPrint$1.reportStringTree$1098;
var t$1240;
if (v$414 == null) {t$1240 = [1,"DUMMY"];
} else {var v$1085 = v$414;
var v$1086 = v$1085(0);
var v$1087 = v$1086[1];
var v$1088 = v$1086[3];
var v$1089 = v$1086[0];
var v$1090 = v$1086[2];
var t$1241;
var v$1091 = [0,","];
t$1241 = [[[1,("\"" + v$1087) + "\""],[[1,"line " + (basis$0Int32$1.toString$458(v$1088))],[[1,"column " + (basis$0Int32$1.toString$458(v$1089))],[[1,("\"" + (v$1090(v$1088))) + "\""],null]]]],v$1091,")",3,"POSITION("];
t$1240 = [0,t$1241];
};
t$1243 = (t$1242(t$1240));
t$1246 = (t$1245(t$1244,t$1243));
var t$1239;
var t$1238 = tools$0PrettyPrint$1.reportStringTree$1098;
var t$1236;
if (v$1120 == null) {t$1236 = [1,"DUMMY"];
} else {var v$1093 = v$1120;
var v$1094 = v$1093(0);
var v$1095 = v$1094[1];
var v$1096 = v$1094[3];
var v$1097 = v$1094[0];
var v$1098 = v$1094[2];
var t$1237;
var v$1099 = [0,","];
t$1237 = [[[1,("\"" + v$1095) + "\""],[[1,"line " + (basis$0Int32$1.toString$458(v$1096))],[[1,"column " + (basis$0Int32$1.toString$458(v$1097))],[[1,("\"" + (v$1098(v$1096))) + "\""],null]]]],v$1099,")",3,"POSITION("];
t$1236 = [0,t$1237];
};
t$1239 = (t$1238(t$1236));
return t$1247(t$1246,t$1239);
} else {var v$461 = v$414;
var v$462 = v$1120;
var v$456 = v$461(0);
var v$457 = v$456[1];
var v$458 = v$456[3];
var v$459 = v$456[0];
var v$460 = v$456[2];
var v$453 = v$462(0);
var v$454 = v$453[3];
var v$455 = v$453[0];
var theLine1$426 = v$460(v$458);
var theLine2$427 = v$460(v$454);
var len1$428 = SmlPrims.chk_ovf_i32(theLine1$426.length - 1);
SmlPrims.chk_ovf_i32(theLine2$427.length - 1);
var fix$1248 = {};
fix$1248.$highlightAll = function(v$441,v$442){if (v$441 > v$442) {return tools$0Report$1.null$59;
} else {var line$439 = v$460(v$441);
var width$440 = SmlPrims.chk_ovf_i32(line$439.length - 1);
return tools$0Report$1.s$hh$64(highlight$341(line$439,0,width$440),fix$1248.$highlightAll(SmlPrims.chk_ovf_i32(v$441 + 1),v$442));
};
};
var highlightAll$430 = fix$1248.$highlightAll;
var t$1256 = tools$0Report$1.s$hh$64;
var t$1255 = tools$0Report$1.line$60(((((v$457 + ", line ") + (basis$0Int32$1.toString$458(v$458))) + ", column ") + (basis$0Int32$1.toString$458(v$459))) + ":");
var t$1254;
if (v$458 == v$454) {t$1254 = (highlight$341(theLine1$426,v$459,SmlPrims.chk_ovf_i32(v$455 - v$459)));
} else {var t$1253 = tools$0Report$1.s$hh$64;
var t$1252;
var t$1251 = tools$0Report$1.s$hh$64;
var t$1250 = highlight$341(theLine1$426,v$459,SmlPrims.chk_ovf_i32(len1$428 - v$459));
var t$1249;
var lower$447 = SmlPrims.chk_ovf_i32(v$458 + 1);
var upper$448 = SmlPrims.chk_ovf_i32(v$454 - 1);
t$1249 = (((SmlPrims.chk_ovf_i32(upper$448 - lower$447)) > 5)?(tools$0Report$1.line$60("      (text omitted)")):(highlightAll$430(lower$447,upper$448)));
t$1252 = (t$1251(t$1250,t$1249));
t$1254 = (t$1253(t$1252,highlight$341(theLine2$427,0,v$455)));
};
return t$1256(t$1255,t$1254);
};
};
};
basics$0LexBasics$1.output_source$466 = function(v$479,v$1121,v$1122){if (v$479 == null) {return basis$0TextIO$1.output$110(v$1121,"*** POSITION UNKNOWN ***");
} else {if (v$1122 == null) {return basis$0TextIO$1.output$110(v$1121,"*** POSITION UNKNOWN ***");
} else {var v$549 = v$479;
var v$550 = v$1122;
var v$543 = v$549(0);
var v$545 = v$543[3];
var v$546 = v$543[0];
var v$547 = v$543[2];
var v$540 = v$550(0);
var v$541 = v$540[3];
var v$542 = v$540[0];
if (v$545 == v$541) {var line$521 = v$547(v$545);
var t$1263 = basis$0TextIO$1.output$110;
var t$1262 = v$1121;
var t$1257;
var s$882;
var v$1130 = [0,SmlPrims.chk_ovf_i32(v$542 - v$546)];
try {s$882 = (basis$0String$1.extract$116(line$521,v$546,v$1130));
} catch(v$1258) {s$882 = ((function(e$893){basis$0General$1.print$163("extract : line\n");
throw e$893;
})(v$1258));
};
var v$883;
var fix$1259 = {};
fix$1259.$h = function(v$887,v$888){lab$h: while (true) {if (v$887 < 0) {return v$888;
} else {var t$1260 = SmlPrims.chk_ovf_i32(v$887 - 1);
var t$1261 = [s$882.charCodeAt(v$887),v$888];
var v$887 = t$1260;
var v$888 = t$1261;
continue lab$h;
};
};
};
var h$885 = fix$1259.$h;
v$883 = (h$885(SmlPrims.chk_ovf_i32(s$882.length - 1),null));
if (v$883 == null) {t$1257 = (tools$0Crash$1.impossible$59("LexBasics.output_source"));
} else {var v$889 = v$883;
switch (v$889[0]) { case 58: {t$1257 = s$882;
 break; }case 61: {t$1257 = s$882;
 break; }default: {t$1257 = (" = " + s$882);
} };
};
return t$1263(t$1262,t$1257);
} else {var first$522 = v$547(v$545);
var first$523;
var s$896;
var v$1133 = [1];
try {s$896 = (basis$0String$1.extract$116(first$522,v$546,v$1133));
} catch(v$1264) {s$896 = ((function(e$907){basis$0General$1.print$163("extract : first\n");
throw e$907;
})(v$1264));
};
var v$897;
var fix$1265 = {};
fix$1265.$h = function(v$901,v$902){lab$h: while (true) {if (v$901 < 0) {return v$902;
} else {var t$1266 = SmlPrims.chk_ovf_i32(v$901 - 1);
var t$1267 = [s$896.charCodeAt(v$901),v$902];
var v$901 = t$1266;
var v$902 = t$1267;
continue lab$h;
};
};
};
var h$899 = fix$1265.$h;
v$897 = (h$899(SmlPrims.chk_ovf_i32(s$896.length - 1),null));
if (v$897 == null) {first$523 = (tools$0Crash$1.impossible$59("LexBasics.output_source"));
} else {var v$903 = v$897;
switch (v$903[0]) { case 58: {first$523 = s$896;
 break; }case 61: {first$523 = s$896;
 break; }default: {first$523 = (" = " + s$896);
} };
};
var last$524 = v$547(v$541);
var last$525;
var v$1136 = [0,v$542];
try {last$525 = (basis$0String$1.extract$116(last$524,0,v$1136));
} catch(v$1268) {last$525 = ((function(e$912){basis$0General$1.print$163("extract : last\n");
throw e$912;
})(v$1268));
};
var fix$1269 = {};
fix$1269.$get_lines = function(v$535,v$536){lab$get_lines: while (true) {if (v$535 == v$545) {return [first$523,v$536];
} else {var t$1270 = SmlPrims.chk_ovf_i32(v$535 - 1);
var t$1271 = [v$547(v$535),v$536];
var v$535 = t$1270;
var v$536 = t$1271;
continue lab$get_lines;
};
};
};
var get_lines$526 = fix$1269.$get_lines;
var fix$1272 = {};
fix$1272.$app = function(v$919){lab$app: while (true) {if (v$919 == null) {return 0;
} else {var v$920 = v$919;
var v$921 = v$920[0];
var v$922 = v$920[1];
basis$0TextIO$1.output$110(v$1121,v$921);
var t$1273 = v$922;
var v$919 = t$1273;
continue lab$app;
};
};
};
var app$918 = fix$1272.$app;
return app$918(get_lines$526(SmlPrims.chk_ovf_i32(v$541 - 1),[last$525,null]));
};
};
};
};
basics$0LexBasics$1.get_source$553 = function(v$564,v$1123){if (v$564 == null) {return tools$0Crash$1.impossible$59("LexBasics.get_source: POSITION UNKNOWN");
} else {if (v$1123 == null) {return tools$0Crash$1.impossible$59("LexBasics.get_source: POSITION UNKNOWN");
} else {var v$628 = v$564;
var v$629 = v$1123;
var v$623 = v$628(0);
var v$625 = v$623[3];
var v$626 = v$623[0];
var v$627 = v$623[2];
var v$620 = v$629(0);
var v$621 = v$620[3];
var v$622 = v$620[0];
if (v$625 == v$621) {var line$604 = v$627(v$625);
var s$934;
var v$1139 = [0,SmlPrims.chk_ovf_i32(v$622 - v$626)];
try {s$934 = (basis$0String$1.extract$116(line$604,v$626,v$1139));
} catch(v$1274) {s$934 = ((function(e$942){basis$0General$1.print$163("extract : line\n");
throw e$942;
})(v$1274));
};
try {var t$1276;
if (0 >= s$934.length) {throw CompilerInitial.exn$Subscript$52;
} else {t$1276 = (s$934.charCodeAt(0));
};
switch (t$1276) { case 58: {return s$934;
 break; }case 61: {return s$934;
 break; }default: {return " = " + s$934;
} };
} catch(v$1275) {return (function(v$939){return tools$0Crash$1.impossible$59("LexBasics.get_source");
})(v$1275);
};
} else {var first$605 = v$627(v$625);
var first$606;
var s$945;
var v$1142 = [1];
try {s$945 = (basis$0String$1.extract$116(first$605,v$626,v$1142));
} catch(v$1277) {s$945 = ((function(e$953){basis$0General$1.print$163("extract : first\n");
throw e$953;
})(v$1277));
};
try {var t$1279;
if (0 >= s$945.length) {throw CompilerInitial.exn$Subscript$52;
} else {t$1279 = (s$945.charCodeAt(0));
};
switch (t$1279) { case 58: {first$606 = s$945;
 break; }case 61: {first$606 = s$945;
 break; }default: {first$606 = (" = " + s$945);
} };
} catch(v$1278) {first$606 = ((function(v$950){return tools$0Crash$1.impossible$59("LexBasics.get_source");
})(v$1278));
};
var last$607 = v$627(v$621);
var last$608;
var v$1145 = [0,v$622];
try {last$608 = (basis$0String$1.extract$116(last$607,0,v$1145));
} catch(v$1280) {last$608 = ((function(e$958){basis$0General$1.print$163("extract : last\n");
throw e$958;
})(v$1280));
};
var fix$1281 = {};
fix$1281.$get_lines = function(v$618,v$619){lab$get_lines: while (true) {if (v$618 == v$625) {return [first$606,v$619];
} else {var t$1282 = SmlPrims.chk_ovf_i32(v$618 - 1);
var t$1283 = [v$627(v$618),v$619];
var v$618 = t$1282;
var v$619 = t$1283;
continue lab$get_lines;
};
};
};
var get_lines$609 = fix$1281.$get_lines;
return SmlPrims.concat(get_lines$609(SmlPrims.chk_ovf_i32(v$621 - 1),[last$608,null]));
};
};
};
};
basics$0LexBasics$1.en$LEXICAL_ERROR$632 = new String("LEXICAL_ERROR");
return 0;
})();
