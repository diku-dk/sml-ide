if ((typeof(pickle$0bitstream$1)) == "undefined") {pickle$0bitstream$1 = {};
};
(function(){pickle$0bitstream$1.isEmpty$94 = function(v$1037,v$1038){return v$1038 >= ((8 * (SmlPrims.i32_to_w32(v$1037.length))) & 4294967295);
};
pickle$0bitstream$1.outwN$152 = function(n$155,v$159){var v$188 = v$159[0];
var v$189 = v$159[1];
var e$160 = v$188 & (255 & ((((n$155 >= 32)?0:((1 << (n$155 & 31)) & 4294967295)) - 1) & 4294967295));
var v$591 = v$189[1];
var v$592 = v$189[0];
var s$185;
if (((v$591 + n$155) & 4294967295) < (SmlPrims.i32_to_w32(SmlPrims.chk_ovf_i32(8 * v$592.length)))) {s$185 = v$189;
} else {var t$1096;
var sz$595 = v$592.length;
var newbuf$596;
var v$904 = SmlPrims.chk_ovf_i32(sz$595 * 2);
if (v$904 > 16777211) {throw CompilerInitial.exn$Size$53;
} else {var t$600 = Array(v$904);
var fix$1097 = {};
fix$1097.$loop = function(j$602){lab$loop: while (true) {if (j$602 < v$904) {(t$600[j$602] = 0,0);
var t$1098 = SmlPrims.chk_ovf_i32(j$602 + 1);
var j$602 = t$1098;
continue lab$loop;
} else {return 0;
};
};
};
var loop$601 = fix$1097.$loop;
loop$601(0);
newbuf$596 = t$600;
};
basis$0ByteTable$1$22.copy$3989(0,newbuf$596,v$592);
t$1096 = newbuf$596;
s$185 = [t$1096,v$591];
};
var v$186 = s$185[1];
var v$187 = s$185[0];
var v$182;
var pos_byte$604 = v$186 >>> 3;
v$182 = [(v$186 - ((pos_byte$604 << (3 & 31)) & 4294967295)) & 4294967295,SmlPrims.chk_ovf_i32(pos_byte$604)];
var v$183 = v$182[0];
var v$184 = v$182[1];
if (v$183 == 0) {if ((v$184 < 0)?true:(v$184 >= v$187.length)) {throw CompilerInitial.exn$Subscript$52;
} else {(v$187[v$184] = e$160,0);
};
} else {var w$172;
if ((v$184 < 0)?true:(v$184 >= v$187.length)) {throw CompilerInitial.exn$Subscript$52;
} else {w$172 = v$187[v$184];
};
var e$$173 = (v$183 >= 8)?0:(255 & ((e$160 << (v$183 & 31)) & 4294967295));
var w$$174 = w$172 | e$$173;
if ((v$184 < 0)?true:(v$184 >= v$187.length)) {throw CompilerInitial.exn$Subscript$52;
} else {(v$187[v$184] = w$$174,0);
};
if (n$155 <= ((8 - v$183) & 4294967295)) {0;
} else {var e$$$179;
var v$923 = (8 - v$183) & 4294967295;
e$$$179 = ((v$923 >= 8)?0:(e$160 >>> v$923));
var v$925 = SmlPrims.chk_ovf_i32(v$184 + 1);
if ((v$925 < 0)?true:(v$925 >= v$187.length)) {throw CompilerInitial.exn$Subscript$52;
} else {(v$187[v$925] = e$$$179,0);
};
0;
};
};
return [v$187,(v$186 + n$155) & 4294967295];
};
pickle$0bitstream$1.getwN$190 = function(n$193,v$197){var v$224 = v$197[1];
var v$225 = v$197[0];
if (((v$224 + n$193) & 4294967295) > (SmlPrims.i32_to_w32(SmlPrims.chk_ovf_i32(8 * v$225.length)))) {throw [basis$0Initial$1.en$Fail$54,"getwN: empty in-stream"];
} else {var v$221;
var pos_byte$635 = v$224 >>> 3;
v$221 = [(v$224 - ((pos_byte$635 << (3 & 31)) & 4294967295)) & 4294967295,SmlPrims.chk_ovf_i32(pos_byte$635)];
var v$222 = v$221[0];
var v$223 = v$221[1];
var t$1106;
var t$1105;
var t$1104;
var t$1099;
if (v$222 == 0) {if ((v$223 < 0)?true:(v$223 >= v$225.length)) {throw CompilerInitial.exn$Subscript$52;
} else {t$1099 = (v$225.charCodeAt(v$223));
};
} else {var w1$210;
if ((v$223 < 0)?true:(v$223 >= v$225.length)) {throw CompilerInitial.exn$Subscript$52;
} else {w1$210 = (v$225.charCodeAt(v$223));
};
var e1$211 = (v$222 >= 8)?0:(w1$210 >>> v$222);
if (n$193 <= ((8 - v$222) & 4294967295)) {t$1099 = e1$211;
} else {var w2$216;
var v$938 = SmlPrims.chk_ovf_i32(v$223 + 1);
if ((v$938 < 0)?true:(v$938 >= v$225.length)) {throw CompilerInitial.exn$Subscript$52;
} else {w2$216 = (v$225.charCodeAt(v$938));
};
var t$1103;
var t$1102 = e1$211;
var t$1101;
var t$1100;
var v$940 = (8 - v$222) & 4294967295;
t$1100 = ((v$940 >= 8)?0:(255 & ((w2$216 << (v$940 & 31)) & 4294967295)));
t$1101 = t$1100;
t$1103 = (t$1102 | t$1101);
t$1099 = t$1103;
};
};
t$1104 = t$1099;
t$1105 = (t$1104 & (255 & ((((n$193 >= 32)?0:((1 << (n$193 & 31)) & 4294967295)) - 1) & 4294967295)));
t$1106 = t$1105;
return [t$1106,[v$225,(v$224 + n$193) & 4294967295]];
};
};
pickle$0bitstream$1.outw1$226 = function(v$1044){return pickle$0bitstream$1.outwN$152(1,v$1044);
};
pickle$0bitstream$1.getw1$227 = function(v$1046){return pickle$0bitstream$1.getwN$190(1,v$1046);
};
pickle$0bitstream$1.outw2$228 = function(v$1048){return pickle$0bitstream$1.outwN$152(2,v$1048);
};
pickle$0bitstream$1.getw2$229 = function(v$1050){return pickle$0bitstream$1.getwN$190(2,v$1050);
};
pickle$0bitstream$1.outb$230 = function(v$1039,v$1040){var v$1055 = [v$1039?1:0,v$1040];
return pickle$0bitstream$1.outwN$152(1,v$1055);
};
pickle$0bitstream$1.getb$235 = function(x$676){var v$1021 = pickle$0bitstream$1.getwN$190(1,x$676);
var v$1022 = v$1021[0];
var t$1107;
switch (v$1022) { case 0: {t$1107 = false;
 break; }default: {t$1107 = true;
} };
return [t$1107,v$1021[1]];
};
pickle$0bitstream$1.outw8$240 = function(v$1052){return pickle$0bitstream$1.outwN$152(8,v$1052);
};
pickle$0bitstream$1.getw8$241 = function(v$1054){return pickle$0bitstream$1.getwN$190(8,v$1054);
};
pickle$0bitstream$1.outc$242 = function(v$1041,v$1042){var v$1057 = [v$1041,v$1042];
return pickle$0bitstream$1.outwN$152(8,v$1057);
};
pickle$0bitstream$1.getc$243 = function(x$693){var v$1028 = pickle$0bitstream$1.getwN$190(8,x$693);
return [v$1028[0],v$1028[1]];
};
pickle$0bitstream$1.outw$257 = function(v$266,v$267){var s$706;
var v$1059 = [255 & (v$266 >>> 0),v$267];
s$706 = (pickle$0bitstream$1.outwN$152(8,v$1059));
var s$707;
var v$1060 = [255 & (v$266 >>> 8),s$706];
s$707 = (pickle$0bitstream$1.outwN$152(8,v$1060));
var s$708;
var v$1061 = [255 & (v$266 >>> 16),s$707];
s$708 = (pickle$0bitstream$1.outwN$152(8,v$1061));
var v$1062 = [255 & (v$266 >>> 24),s$708];
return pickle$0bitstream$1.outwN$152(8,v$1062);
};
pickle$0bitstream$1.outw32$268 = function(v$277,v$278){var s$720;
var v$1063 = [255 & (v$277 >>> 0),v$278];
s$720 = (pickle$0bitstream$1.outwN$152(8,v$1063));
var s$721;
var v$1064 = [255 & (v$277 >>> 8),s$720];
s$721 = (pickle$0bitstream$1.outwN$152(8,v$1064));
var s$722;
var v$1065 = [255 & (v$277 >>> 16),s$721];
s$722 = (pickle$0bitstream$1.outwN$152(8,v$1065));
var v$1066 = [255 & (v$277 >>> 24),s$722];
return pickle$0bitstream$1.outwN$152(8,v$1066);
};
var getGen$279 = function(s$jj$282,s$f$285,fromWord8$288,s$291){var v$318 = pickle$0bitstream$1.getwN$190(8,s$291);
var v$319 = v$318[0];
var v$320 = v$318[1];
var v$315 = pickle$0bitstream$1.getwN$190(8,v$320);
var v$316 = v$315[0];
var v$317 = v$315[1];
var v$312 = pickle$0bitstream$1.getwN$190(8,v$317);
var v$313 = v$312[0];
var v$314 = v$312[1];
var v$309 = pickle$0bitstream$1.getwN$190(8,v$314);
var v$310 = v$309[0];
var v$311 = v$309[1];
var w0$304 = fromWord8$288(v$319);
var w1$305 = fromWord8$288(v$316);
var w2$306 = fromWord8$288(v$313);
var w3$307 = fromWord8$288(v$310);
return [s$f$285([s$f$285([s$f$285([w0$304,s$jj$282([w1$305,8])]),s$jj$282([w2$306,16])]),s$jj$282([w3$307,24])]),v$311];
};
pickle$0bitstream$1.getw$321 = function(s$324){return getGen$279(function(v$727){var v$728 = v$727[0];
var v$729 = v$727[1];
return (v$729 >= 32)?0:((v$728 << (v$729 & 31)) & 4294967295);
},function(v$730){return (v$730[0] + v$730[1]) & 4294967295;
},function(w$731){return SmlPrims.i32_to_w32(w$731);
},s$324);
};
pickle$0bitstream$1.getw32$325 = function(s$328){return getGen$279(function(v$732){var v$733 = v$732[0];
var v$734 = v$732[1];
return (v$734 >= 32)?0:((v$733 << (v$734 & 31)) & 4294967295);
},function(v$735){return (v$735[0] + v$735[1]) & 4294967295;
},function(w$736){return SmlPrims.i32_to_w32(w$736);
},s$328);
};
var fix$1108 = {};
fix$1108.$outwN$ = function(n$332,v$336){lab$outwN$: while (true) {var v$351 = v$336[0];
var v$352 = v$336[1];
if (n$332 > 31) {throw [basis$0Initial$1.en$Fail$54,"outwN'"];
} else {if (n$332 == 0) {return v$352;
} else {if (n$332 <= 7) {return pickle$0bitstream$1.outwN$152(n$332,[255 & v$351,v$352]);
} else {var s$349;
var v$1071 = [255 & v$351,v$352];
s$349 = (pickle$0bitstream$1.outwN$152(8,v$1071));
var w2$350 = v$351 >>> 8;
var t$1109 = (n$332 - 8) & 4294967295;
var t$1110 = [w2$350,s$349];
var n$332 = t$1109;
var v$336 = t$1110;
continue lab$outwN$;
};
};
};
};
};
pickle$0bitstream$1.outwN$$329 = fix$1108.$outwN$;
pickle$0bitstream$1.getwN$$353 = function(n$356,s$359){if (n$356 > 31) {throw [basis$0Initial$1.en$Fail$54,"getwN'"];
} else {var fix$1111 = {};
fix$1111.$loop = function(n$367,off$370,a$373,s$376){lab$loop: while (true) {if (n$367 == 0) {return [a$373,s$376];
} else {if (n$367 <= 7) {var v$388 = pickle$0bitstream$1.getwN$190(n$367,s$376);
var v$389 = v$388[0];
var v$390 = v$388[1];
var t$1113;
var t$1112;
var v$967 = SmlPrims.i32_to_w32(v$389);
t$1112 = ((off$370 >= 32)?0:((v$967 << (off$370 & 31)) & 4294967295));
t$1113 = (t$1112 | a$373);
return [t$1113,v$390];
} else {var v$395 = pickle$0bitstream$1.getwN$190(8,s$376);
var v$396 = v$395[0];
var v$397 = v$395[1];
var a$394;
var t$1114;
var v$971 = SmlPrims.i32_to_w32(v$396);
t$1114 = ((off$370 >= 32)?0:((v$971 << (off$370 & 31)) & 4294967295));
a$394 = (t$1114 | a$373);
var t$1115 = (n$367 - 8) & 4294967295;
var t$1116 = (off$370 + 8) & 4294967295;
var t$1117 = a$394;
var t$1118 = v$397;
var n$367 = t$1115;
var off$370 = t$1116;
var a$373 = t$1117;
var s$376 = t$1118;
continue lab$loop;
};
};
};
};
var loop$364 = fix$1111.$loop;
return loop$364(n$356,0,0,s$359);
};
};
pickle$0bitstream$1.outcw$398 = function(v$408,v$409){if (v$408 <= 254) {var v$1073 = [255 & v$408,v$409];
return pickle$0bitstream$1.outwN$152(8,v$1073);
} else {var s$407;
var v$1074 = [255,v$409];
s$407 = (pickle$0bitstream$1.outwN$152(8,v$1074));
var s$763;
var v$1075 = [255 & (v$408 >>> 0),s$407];
s$763 = (pickle$0bitstream$1.outwN$152(8,v$1075));
var s$764;
var v$1076 = [255 & (v$408 >>> 8),s$763];
s$764 = (pickle$0bitstream$1.outwN$152(8,v$1076));
var s$765;
var v$1077 = [255 & (v$408 >>> 16),s$764];
s$765 = (pickle$0bitstream$1.outwN$152(8,v$1077));
var v$1078 = [255 & (v$408 >>> 24),s$765];
return pickle$0bitstream$1.outwN$152(8,v$1078);
};
};
pickle$0bitstream$1.getcw$410 = function(s$413){var v$421 = pickle$0bitstream$1.getwN$190(8,s$413);
var v$422 = v$421[0];
var v$423 = v$421[1];
if (v$422 == 255) {return getGen$279(function(v$783){var v$784 = v$783[0];
var v$785 = v$783[1];
return (v$785 >= 32)?0:((v$784 << (v$785 & 31)) & 4294967295);
},function(v$786){return (v$786[0] + v$786[1]) & 4294967295;
},function(w$787){return SmlPrims.i32_to_w32(w$787);
},v$423);
} else {return [SmlPrims.i32_to_w32(v$422),v$423];
};
};
pickle$0bitstream$1.outcw2$424 = function(v$436,v$437){if (v$436 <= 65279) {var w1$433 = 255 & (SmlPrims.div_w32(v$436,256,CompilerInitial.exn$Div$47));
var w2$434 = 255 & (SmlPrims.mod_w32(v$436,256,CompilerInitial.exn$Div$47));
var v$1080;
var t$1120 = w2$434;
var t$1119;
var v$1081 = [w1$433,v$437];
t$1119 = (pickle$0bitstream$1.outwN$152(8,v$1081));
v$1080 = [t$1120,t$1119];
return pickle$0bitstream$1.outwN$152(8,v$1080);
} else {var s$435;
var v$1082 = [255,v$437];
s$435 = (pickle$0bitstream$1.outwN$152(8,v$1082));
var s$801;
var v$1083 = [255 & (v$436 >>> 0),s$435];
s$801 = (pickle$0bitstream$1.outwN$152(8,v$1083));
var s$802;
var v$1084 = [255 & (v$436 >>> 8),s$801];
s$802 = (pickle$0bitstream$1.outwN$152(8,v$1084));
var s$803;
var v$1085 = [255 & (v$436 >>> 16),s$802];
s$803 = (pickle$0bitstream$1.outwN$152(8,v$1085));
var v$1086 = [255 & (v$436 >>> 24),s$803];
return pickle$0bitstream$1.outwN$152(8,v$1086);
};
};
pickle$0bitstream$1.getcw2$438 = function(s$441){var v$457 = pickle$0bitstream$1.getwN$190(8,s$441);
var v$458 = v$457[0];
var v$459 = v$457[1];
if (v$458 == 255) {return getGen$279(function(v$821){var v$822 = v$821[0];
var v$823 = v$821[1];
return (v$823 >= 32)?0:((v$822 << (v$823 & 31)) & 4294967295);
},function(v$824){return (v$824[0] + v$824[1]) & 4294967295;
},function(w$825){return SmlPrims.i32_to_w32(w$825);
},v$459);
} else {var v$454 = pickle$0bitstream$1.getwN$190(8,v$459);
var v$455 = v$454[0];
var v$456 = v$454[1];
return [((((SmlPrims.i32_to_w32(v$458)) * 256) & 4294967295) + (SmlPrims.i32_to_w32(v$455))) & 4294967295,v$456];
};
};
pickle$0bitstream$1.outcw32$460 = function(v$470,v$471){if (v$470 <= 254) {var v$1089 = [255 & v$470,v$471];
return pickle$0bitstream$1.outwN$152(8,v$1089);
} else {var s$469;
var v$1090 = [255,v$471];
s$469 = (pickle$0bitstream$1.outwN$152(8,v$1090));
var s$839;
var v$1091 = [255 & (v$470 >>> 0),s$469];
s$839 = (pickle$0bitstream$1.outwN$152(8,v$1091));
var s$840;
var v$1092 = [255 & (v$470 >>> 8),s$839];
s$840 = (pickle$0bitstream$1.outwN$152(8,v$1092));
var s$841;
var v$1093 = [255 & (v$470 >>> 16),s$840];
s$841 = (pickle$0bitstream$1.outwN$152(8,v$1093));
var v$1094 = [255 & (v$470 >>> 24),s$841];
return pickle$0bitstream$1.outwN$152(8,v$1094);
};
};
pickle$0bitstream$1.getcw32$472 = function(s$475){var v$483 = pickle$0bitstream$1.getwN$190(8,s$475);
var v$484 = v$483[0];
var v$485 = v$483[1];
if (v$484 == 255) {return getGen$279(function(v$859){var v$860 = v$859[0];
var v$861 = v$859[1];
return (v$861 >= 32)?0:((v$860 << (v$861 & 31)) & 4294967295);
},function(v$862){return (v$862[0] + v$862[1]) & 4294967295;
},function(w$863){return SmlPrims.i32_to_w32(w$863);
},v$485);
} else {return [SmlPrims.i32_to_w32(v$484),v$485];
};
};
pickle$0bitstream$1.toString$495 = function(v$879,v$878){var pos_byte$880 = SmlPrims.chk_ovf_i32(v$878 >>> 3);
var slice$884 = basis$0ByteSlice$1$12.slice$3454(v$879,0,[0,SmlPrims.chk_ovf_i32(pos_byte$880 + 1)]);
var v$886 = slice$884[0];
var v$887 = slice$884[1];
var v$888 = slice$884[2];
var newvec$889 = Array(v$888);
var fix$1121 = {};
fix$1121.$copy = function(j$891){lab$copy: while (true) {if (j$891 < v$888) {(newvec$889[j$891] = v$886[SmlPrims.chk_ovf_i32(v$887 + j$891)],0);
var t$1122 = SmlPrims.chk_ovf_i32(j$891 + 1);
var j$891 = t$1122;
continue lab$copy;
} else {return 0;
};
};
};
var copy$890 = fix$1121.$copy;
copy$890(0);
return SmlPrims.charArrayToString(newvec$889);
};
pickle$0bitstream$1.openOut$499 = function(v$501){var t$1123;
var t$895 = Array(1024);
var fix$1124 = {};
fix$1124.$loop = function(j$897){lab$loop: while (true) {if (j$897 < 1024) {(t$895[j$897] = 0,0);
var t$1125 = SmlPrims.chk_ovf_i32(j$897 + 1);
var j$897 = t$1125;
continue lab$loop;
} else {return 0;
};
};
};
var loop$896 = fix$1124.$loop;
loop$896(0);
t$1123 = t$895;
return [t$1123,0];
};
pickle$0bitstream$1.openIn$510 = function(s$513){return [s$513,0];
};
return 0;
})();
