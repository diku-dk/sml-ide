if ((typeof(basis$0Int31$1)) == "undefined") {basis$0Int31$1 = {};
};
(function(){basis$0Int31$1.quot$55 = function(v$64,v$65){if (v$65 == 0) {throw CompilerInitial.exn$Div$47;
} else {return SmlPrims.chk_ovf_i31(SmlPrims.quot(v$64,v$65));
};
};
basis$0Int31$1.rem$66 = function(v$75,v$76){if (v$76 == 0) {throw CompilerInitial.exn$Div$47;
} else {return v$75 % v$76;
};
};
basis$0Int31$1.toLarge$85 = function(x$88){return basis$0IntInfRep$1.fromInt31$1051(x$88);
};
basis$0Int31$1.fromLarge$89 = function(x$92){return basis$0IntInfRep$1.toInt31$1031(x$92);
};
basis$0Int31$1.toInt$93 = function(x$96){return x$96;
};
basis$0Int31$1.fromInt$97 = function(x$100){return SmlPrims.chk_ovf_i31(x$100);
};
basis$0Int31$1.precision$101 = [0,31];
basis$0Int31$1.maxInt$102 = [0,1073741823];
basis$0Int31$1.minInt$103 = [0,-1073741824];
basis$0Int31$1.s$p$104 = function(v$105){return SmlPrims.chk_ovf_i31(-(v$105));
};
basis$0Int31$1.s$t$106 = function(v$662,v$663){return SmlPrims.chk_ovf_i31(v$662 * v$663);
};
basis$0Int31$1.div$108 = function(v$664,v$665){return SmlPrims.div_i31(v$664,v$665,CompilerInitial.exn$Div$47);
};
basis$0Int31$1.mod$110 = function(v$666,v$667){return SmlPrims.mod_i31(v$666,v$667,CompilerInitial.exn$Div$47);
};
basis$0Int31$1.s$f$112 = function(v$668,v$669){return SmlPrims.chk_ovf_i31(v$668 + v$669);
};
basis$0Int31$1.s$g$114 = function(v$670,v$671){return SmlPrims.chk_ovf_i31(v$670 - v$671);
};
basis$0Int31$1.compare$116 = function(v$129,v$130){return (v$129 < v$130)?0:((v$129 > v$130)?1:2);
};
basis$0Int31$1.abs$131 = function(v$132){return SmlPrims.chk_ovf_i31(Math.abs(v$132));
};
basis$0Int31$1.min$133 = function(v$142,v$143){return (v$142 < v$143)?v$142:v$143;
};
basis$0Int31$1.max$144 = function(v$153,v$154){return (v$153 < v$154)?v$154:v$153;
};
basis$0Int31$1.sign$155 = function(i$158){return (i$158 > 0)?1:((i$158 < 0)?(-1):0);
};
basis$0Int31$1.sameSign$167 = function(v$172,v$173){return ((v$172 > 0)?1:((v$172 < 0)?(-1):0)) == ((v$173 > 0)?1:((v$173 < 0)?(-1):0));
};
var conv$213 = function(radix$216,i$219){var t$703;
var v$606 = [0,i$219];
var v$694 = [v$606,basis$0Int31$1.minInt$103];
t$703 = (basis$0General$1.eq_option$258(function(v$695){return v$695[0] == v$695[1];
},v$694));
if (t$703) {switch (radix$216) { case 2: {return "~1000000000000000000000000000000";
 break; }case 8: {return "~10000000000";
 break; }case 10: {return "~1073741824";
 break; }case 16: {return "~40000000";
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"conv"];
} };
} else {var fix$696 = {};
fix$696.$h = function(v$237,v$240){lab$h: while (true) {switch (v$237) { case 0: {return v$240;
 break; }default: {var t$700 = SmlPrims.div_i31(v$237,radix$216,CompilerInitial.exn$Div$47);
var t$699;
var t$698;
var t$697;
var i$526 = SmlPrims.mod_i31(v$237,radix$216,CompilerInitial.exn$Div$47);
if (i$526 < 10) {var i$527 = SmlPrims.chk_ovf_i31(i$526 + 48);
t$697 = (basis$0Char$1.chr$73(i$527));
} else {var i$529 = SmlPrims.chk_ovf_i31(i$526 + 55);
t$697 = (basis$0Char$1.chr$73(i$529));
};
t$698 = [t$697,v$240];
t$699 = t$698;
var t$701 = t$700;
var t$702 = t$699;
var v$237 = t$701;
var v$240 = t$702;
continue lab$h;
} };
};
};
var h$234 = fix$696.$h;
var t$717;
if (i$219 < 0) {var t$711;
var t$710 = 126;
var t$704;
var n$540 = SmlPrims.chk_ovf_i31(-(i$219));
var t$709 = h$234;
var t$708 = SmlPrims.div_i31(n$540,radix$216,CompilerInitial.exn$Div$47);
var t$707;
var t$706;
var t$705;
var i$542 = SmlPrims.mod_i31(n$540,radix$216,CompilerInitial.exn$Div$47);
if (i$542 < 10) {var i$544 = SmlPrims.chk_ovf_i31(i$542 + 48);
t$705 = (basis$0Char$1.chr$73(i$544));
} else {var i$546 = SmlPrims.chk_ovf_i31(i$542 + 55);
t$705 = (basis$0Char$1.chr$73(i$546));
};
t$706 = [t$705,null];
t$707 = t$706;
t$704 = (t$709(t$708,t$707));
t$711 = [t$710,t$704];
t$717 = t$711;
} else {var t$716 = h$234;
var t$715 = SmlPrims.div_i31(i$219,radix$216,CompilerInitial.exn$Div$47);
var t$714;
var t$713;
var t$712;
var i$551 = SmlPrims.mod_i31(i$219,radix$216,CompilerInitial.exn$Div$47);
if (i$551 < 10) {var i$553 = SmlPrims.chk_ovf_i31(i$551 + 48);
t$712 = (basis$0Char$1.chr$73(i$553));
} else {var i$555 = SmlPrims.chk_ovf_i31(i$551 + 55);
t$712 = (basis$0Char$1.chr$73(i$555));
};
t$713 = [t$712,null];
t$714 = t$713;
t$717 = (t$716(t$715,t$714));
};
return SmlPrims.implode(t$717);
};
};
basis$0Int31$1.scan$259 = function(radix$262,getc$265,source$268){var v$423;
switch (radix$262) { case 3: {v$423 = [function(c$443){return (48 <= c$443)?(c$443 <= 49):false;
},2];
 break; }case 0: {v$423 = [function(c$436){return (48 <= c$436)?(c$436 <= 55):false;
},8];
 break; }case 2: {v$423 = [function(c$557){return (48 <= c$557)?(c$557 <= 57):false;
},10];
 break; }default: {v$423 = [function(c$558){return ((48 <= c$558)?(c$558 <= 57):false)?true:(((97 <= c$558)?(c$558 <= 102):false)?true:((65 <= c$558)?(c$558 <= 70):false));
},16];
} };
var v$424 = v$423[0];
var v$425 = v$423[1];
var dig1$272 = function(v$275,v$278){switch (v$278[0]) { case 1: {return [1];
 break; }default: {var v$338 = v$278[1];
var v$339 = v$338[0];
var v$340 = v$338[1];
var fix$718 = {};
fix$718.$digr = function(res$292,next_val$295,src$298){lab$digr: while (true) {var v$304 = getc$265(src$298);
switch (v$304[0]) { case 1: {return [0,[res$292,src$298]];
 break; }default: {var v$309 = v$304[1];
var v$310 = v$309[0];
var v$311 = v$309[1];
if (v$424(v$310)) {var t$719 = next_val$295([v$425,res$292,((48 <= v$310)?(v$310 <= 57):false)?(SmlPrims.chk_ovf_i31((SmlPrims.chk_ovf_i31(v$310)) - 48)):(SmlPrims.mod_i31(SmlPrims.chk_ovf_i31((SmlPrims.chk_ovf_i31(v$310)) - 55),32,CompilerInitial.exn$Div$47))]);
var t$720 = next_val$295;
var t$721 = v$311;
var res$292 = t$719;
var next_val$295 = t$720;
var src$298 = t$721;
continue lab$digr;
} else {return [0,[res$292,src$298]];
};
} };
};
};
var digr$289 = fix$718.$digr;
var next_val$312 = (v$275 == 1)?(function(v$321){var v$322 = v$321[0];
var v$323 = v$321[1];
var v$324 = v$321[2];
return SmlPrims.chk_ovf_i31((SmlPrims.chk_ovf_i31(v$322 * v$323)) + v$324);
}):(function(v$329){var v$330 = v$329[0];
var v$331 = v$329[1];
var v$332 = v$329[2];
return SmlPrims.chk_ovf_i31((SmlPrims.chk_ovf_i31(v$330 * v$331)) - v$332);
});
if (v$424(v$339)) {return digr$289(SmlPrims.chk_ovf_i31(v$275 * (((48 <= v$339)?(v$339 <= 57):false)?(SmlPrims.chk_ovf_i31((SmlPrims.chk_ovf_i31(v$339)) - 48)):(SmlPrims.mod_i31(SmlPrims.chk_ovf_i31((SmlPrims.chk_ovf_i31(v$339)) - 55),32,CompilerInitial.exn$Div$47)))),next_val$312,v$340);
} else {return [1];
};
} };
};
var hexopt$356 = function(v$359,v$362){switch (v$362[0]) { case 1: {return [1];
 break; }default: {var v$376 = v$362[1];
switch (v$376[0]) { case 48: {var v$398 = v$376[1];
var t$723;
var t$722;
var v$661 = 1;
t$722 = (basis$0StringCvt$1.eq_radix$306(radix$262,v$661));
t$723 = (t$722?false:true);
if (t$723) {var inp$579 = getc$265(v$398);
var v$580 = dig1$272(v$359,inp$579);
switch (v$580[0]) { case 1: {return [0,[0,v$398]];
 break; }default: {return v$580;
} };
} else {var v$392 = getc$265(v$398);
switch (v$392[0]) { case 1: {return [0,[0,v$398]];
 break; }default: {var v$393 = v$392[1];
switch (v$393[0]) { case 120: {var v$396 = v$393[1];
var inp$583 = getc$265(v$396);
var v$584 = dig1$272(v$359,inp$583);
switch (v$584[0]) { case 1: {return [0,[0,v$398]];
 break; }default: {return v$584;
} };
 break; }case 88: {var v$395 = v$393[1];
var inp$587 = getc$265(v$395);
var v$588 = dig1$272(v$359,inp$587);
switch (v$588[0]) { case 1: {return [0,[0,v$398]];
 break; }default: {return v$588;
} };
 break; }default: {var v$592 = dig1$272(v$359,v$392);
switch (v$592[0]) { case 1: {return [0,[0,v$398]];
 break; }default: {return v$592;
} };
} };
} };
};
 break; }default: {return dig1$272(v$359,v$362);
} };
} };
};
var v$593 = getc$265((basis$0StringCvt$1.splitl$206(function(c$604){return (c$604 == 32)?true:((9 <= c$604)?(c$604 <= 13):false);
},getc$265,source$268))[1]);
switch (v$593[0]) { case 1: {return [1];
 break; }default: {var v$594 = v$593[1];
switch (v$594[0]) { case 126: {var v$595 = v$594[1];
return hexopt$356(-1,getc$265(v$595));
 break; }case 45: {var v$596 = v$594[1];
return hexopt$356(-1,getc$265(v$596));
 break; }case 43: {var v$597 = v$594[1];
return hexopt$356(1,getc$265(v$597));
 break; }default: {return hexopt$356(1,v$593);
} };
} };
};
basis$0Int31$1.fmt$448 = function(v$451){switch (v$451) { case 3: {return function(v$683){return conv$213(2,v$683);
};
 break; }case 0: {return function(v$685){return conv$213(8,v$685);
};
 break; }case 2: {return function(v$687){return conv$213(10,v$687);
};
 break; }default: {return function(v$689){return conv$213(16,v$689);
};
} };
};
basis$0Int31$1.toString$460 = function(i$463){return conv$213(10,i$463);
};
basis$0Int31$1.fromString$464 = function(s$467){var t$725 = basis$0StringCvt$1.scanString$163;
var t$724;
var v$690 = 2;
t$724 = (function(v$691){return function(v$692){return basis$0Int31$1.scan$259(v$690,v$691,v$692);
};
});
return t$725(t$724,s$467);
};
basis$0Int31$1.s$l$468 = function(v$672,v$673){return v$672 > v$673;
};
basis$0Int31$1.s$lk$470 = function(v$674,v$675){return v$674 >= v$675;
};
basis$0Int31$1.s$j$472 = function(v$676,v$677){return v$676 < v$677;
};
basis$0Int31$1.s$jk$474 = function(v$678,v$679){return v$678 <= v$679;
};
return 0;
})();
