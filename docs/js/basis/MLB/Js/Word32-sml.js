if ((typeof(basis$0Word32$1)) == "undefined") {basis$0Word32$1 = {};
};
(function(){basis$0Word32$1.wordSize$57 = 32;
basis$0Word32$1.toInt$63 = function(w$66){return SmlPrims.chk_ovf_i32(w$66);
};
basis$0Word32$1.toIntX$67 = function(w$70){return SmlPrims.w32_to_i32_X(w$70);
};
basis$0Word32$1.fromInt$71 = function(i$74){return SmlPrims.i32_to_w32(i$74);
};
basis$0Word32$1.toLargeWord$75 = function(w$78){return w$78;
};
basis$0Word32$1.toLarge$79 = function(w$538){return w$538;
};
basis$0Word32$1.toLargeWordX$80 = function(w$83){return w$83;
};
basis$0Word32$1.toLargeX$84 = function(w$539){return w$539;
};
basis$0Word32$1.fromLargeWord$85 = function(w$88){return w$88;
};
basis$0Word32$1.fromLarge$89 = function(w$540){return w$540;
};
basis$0Word32$1.toLargeInt$90 = function(w$93){return basis$0IntInfRep$1.fromWord32$1156(w$93);
};
basis$0Word32$1.toLargeIntX$94 = function(w$97){return basis$0IntInfRep$1.fromWord32X$1167(w$97);
};
basis$0Word32$1.fromLargeInt$98 = function(i$101){return basis$0IntInfRep$1.toWord32$1179(i$101);
};
basis$0Word32$1.orb$102 = function(v$662,v$663){return v$662 | v$663;
};
basis$0Word32$1.andb$109 = function(v$664,v$665){return v$664 & v$665;
};
basis$0Word32$1.xorb$116 = function(v$666,v$667){return v$666 ^ v$667;
};
basis$0Word32$1.notb$123 = function(x$126){return x$126 ^ 4294967295;
};
basis$0Word32$1.s$jj$152 = function(v$161,v$162){return (v$162 >= 32)?0:((v$161 << (v$162 & 31)) & 4294967295);
};
basis$0Word32$1.s$ll$163 = function(v$172,v$173){return (v$173 >= 32)?0:(v$172 >>> v$173);
};
basis$0Word32$1.s$pll$174 = function(v$187,v$188){return (v$188 >= 32)?(((SmlPrims.w32_to_i32_X(v$187)) >= 0)?0:(SmlPrims.i32_to_w32(-1))):(v$187 >> v$188);
};
basis$0Word32$1.s$f$189 = function(v$668,v$669){return (v$668 + v$669) & 4294967295;
};
basis$0Word32$1.s$g$196 = function(v$670,v$671){return (v$670 - v$671) & 4294967295;
};
basis$0Word32$1.s$t$203 = function(v$672,v$673){return (v$672 * v$673) & 4294967295;
};
basis$0Word32$1.div$210 = function(v$674,v$675){return SmlPrims.div_w32(v$674,v$675,CompilerInitial.exn$Div$47);
};
basis$0Word32$1.mod$217 = function(v$676,v$677){return SmlPrims.mod_w32(v$676,v$677,CompilerInitial.exn$Div$47);
};
basis$0Word32$1.s$p$224 = function(w$227){return SmlPrims.i32_to_w32(SmlPrims.chk_ovf_i32(-(SmlPrims.chk_ovf_i32(w$227))));
};
var conv$259 = function(radix$262,i$265){var fix$697 = {};
fix$697.$h = function(n$269,res$272){lab$h: while (true) {if (n$269 == (SmlPrims.i32_to_w32(0))) {return res$272;
} else {var t$701 = SmlPrims.div_w32(n$269,radix$262,CompilerInitial.exn$Div$47);
var t$700;
var t$699;
var t$698;
var i$567 = SmlPrims.mod_w32(n$269,radix$262,CompilerInitial.exn$Div$47);
t$698 = (((SmlPrims.chk_ovf_i32(i$567)) < 10)?(basis$0Char$1.chr$73(SmlPrims.chk_ovf_i32((i$567 + (SmlPrims.i32_to_w32(48))) & 4294967295))):(basis$0Char$1.chr$73(SmlPrims.chk_ovf_i32((i$567 + (SmlPrims.i32_to_w32(55))) & 4294967295))));
t$699 = [t$698,res$272];
t$700 = t$699;
var t$702 = t$701;
var t$703 = t$700;
var n$269 = t$702;
var res$272 = t$703;
continue lab$h;
};
};
};
var h$266 = fix$697.$h;
var t$709;
var t$708 = h$266;
var t$707 = SmlPrims.div_w32(i$265,radix$262,CompilerInitial.exn$Div$47);
var t$706;
var t$705;
var t$704;
var i$579 = SmlPrims.mod_w32(i$265,radix$262,CompilerInitial.exn$Div$47);
t$704 = (((SmlPrims.chk_ovf_i32(i$579)) < 10)?(basis$0Char$1.chr$73(SmlPrims.chk_ovf_i32((i$579 + (SmlPrims.i32_to_w32(48))) & 4294967295))):(basis$0Char$1.chr$73(SmlPrims.chk_ovf_i32((i$579 + (SmlPrims.i32_to_w32(55))) & 4294967295))));
t$705 = [t$704,null];
t$706 = t$705;
t$709 = (t$708(t$707,t$706));
return SmlPrims.implode(t$709);
};
basis$0Word32$1.scan$281 = function(radix$284,getc$287,source$290){var source$291 = (basis$0StringCvt$1.splitl$206(function(c$585){return (c$585 == 32)?true:((9 <= c$585)?(c$585 <= 13):false);
},getc$287,source$290))[1];
var v$402;
switch (radix$284) { case 3: {v$402 = [function(c$422){return (48 <= c$422)?(c$422 <= 49):false;
},2];
 break; }case 0: {v$402 = [function(c$415){return (48 <= c$415)?(c$415 <= 55):false;
},8];
 break; }case 2: {v$402 = [function(c$586){return (48 <= c$586)?(c$586 <= 57):false;
},10];
 break; }default: {v$402 = [function(c$587){return ((48 <= c$587)?(c$587 <= 57):false)?true:(((97 <= c$587)?(c$587 <= 102):false)?true:((65 <= c$587)?(c$587 <= 70):false));
},16];
} };
var v$403 = v$402[0];
var v$404 = v$402[1];
var dig1$295 = function(v$298){switch (v$298[0]) { case 1: {return [1];
 break; }default: {var v$339 = v$298[1];
var v$340 = v$339[0];
var v$341 = v$339[1];
var fix$710 = {};
fix$710.$digr = function(res$308,src$311){lab$digr: while (true) {var v$317 = getc$287(src$311);
switch (v$317[0]) { case 1: {return [0,[res$308,src$311]];
 break; }default: {var v$332 = v$317[1];
var v$333 = v$332[0];
var v$334 = v$332[1];
if (v$403(v$333)) {var res1$322 = (v$404 * res$308) & 4294967295;
var res2$323 = (res1$322 + (((48 <= v$333)?(v$333 <= 57):false)?(((SmlPrims.i32_to_w32(v$333)) - (SmlPrims.i32_to_w32(48))) & 4294967295):(SmlPrims.mod_w32(((SmlPrims.i32_to_w32(v$333)) - (SmlPrims.i32_to_w32(55))) & 4294967295,SmlPrims.i32_to_w32(32),CompilerInitial.exn$Div$47)))) & 4294967295;
if ((res1$322 < res$308)?true:(res2$323 < res1$322)) {throw CompilerInitial.exn$Overflow$50;
} else {var t$711 = res2$323;
var t$712 = v$334;
var res$308 = t$711;
var src$311 = t$712;
continue lab$digr;
};
} else {return [0,[res$308,src$311]];
};
} };
};
};
var digr$305 = fix$710.$digr;
if (v$403(v$340)) {return digr$305(((48 <= v$340)?(v$340 <= 57):false)?(((SmlPrims.i32_to_w32(v$340)) - (SmlPrims.i32_to_w32(48))) & 4294967295):(SmlPrims.mod_w32(((SmlPrims.i32_to_w32(v$340)) - (SmlPrims.i32_to_w32(55))) & 4294967295,SmlPrims.i32_to_w32(32),CompilerInitial.exn$Div$47)),v$341);
} else {return [1];
};
} };
};
var hexprefix$354 = function(after0$357,src$360){var t$713;
var v$661 = 1;
t$713 = ((basis$0StringCvt$1.eq_radix$306(radix$284,v$661))?false:true);
if (t$713) {var v$605 = dig1$295(getc$287(src$360));
switch (v$605[0]) { case 1: {return [0,[SmlPrims.i32_to_w32(0),after0$357]];
 break; }default: {return v$605;
} };
} else {var v$374 = getc$287(src$360);
switch (v$374[0]) { case 0: {var v$376 = v$374[1];
switch (v$376[0]) { case 120: {var v$379 = v$376[1];
var v$608 = dig1$295(getc$287(v$379));
switch (v$608[0]) { case 1: {return [0,[SmlPrims.i32_to_w32(0),after0$357]];
 break; }default: {return v$608;
} };
 break; }case 88: {var v$378 = v$376[1];
var v$611 = dig1$295(getc$287(v$378));
switch (v$611[0]) { case 1: {return [0,[SmlPrims.i32_to_w32(0),after0$357]];
 break; }default: {return v$611;
} };
 break; }default: {var v$614 = dig1$295(getc$287(src$360));
switch (v$614[0]) { case 1: {return [0,[SmlPrims.i32_to_w32(0),after0$357]];
 break; }default: {return v$614;
} };
} };
 break; }default: {return [0,[SmlPrims.i32_to_w32(0),after0$357]];
} };
};
};
var v$386 = getc$287(source$291);
switch (v$386[0]) { case 0: {var v$388 = v$386[1];
switch (v$388[0]) { case 48: {var v$401 = v$388[1];
var v$396 = getc$287(v$401);
switch (v$396[0]) { case 0: {var v$398 = v$396[1];
switch (v$398[0]) { case 119: {var v$400 = v$398[1];
return hexprefix$354(v$401,v$400);
 break; }default: {return hexprefix$354(v$401,v$401);
} };
 break; }default: {return [0,[SmlPrims.i32_to_w32(0),v$401]];
} };
 break; }default: {return dig1$295(getc$287(source$291));
} };
 break; }default: {return [1];
} };
};
basis$0Word32$1.fmt$427 = function(v$430){switch (v$430) { case 3: {var v$686 = SmlPrims.i32_to_w32(2);
return function(v$687){return conv$259(v$686,v$687);
};
 break; }case 0: {var v$688 = SmlPrims.i32_to_w32(8);
return function(v$689){return conv$259(v$688,v$689);
};
 break; }case 2: {var v$690 = SmlPrims.i32_to_w32(10);
return function(v$691){return conv$259(v$690,v$691);
};
 break; }default: {var v$692 = SmlPrims.i32_to_w32(16);
return function(v$693){return conv$259(v$692,v$693);
};
} };
};
basis$0Word32$1.toString$439 = function(w$442){return conv$259(SmlPrims.i32_to_w32(16),w$442);
};
basis$0Word32$1.fromString$443 = function(s$446){var t$715 = basis$0StringCvt$1.scanString$163;
var t$714;
var v$694 = 1;
t$714 = (function(v$695){return function(v$696){return basis$0Word32$1.scan$281(v$694,v$695,v$696);
};
});
return t$715(t$714,s$446);
};
basis$0Word32$1.min$447 = function(v$456,v$457){return (v$456 > v$457)?v$457:v$456;
};
basis$0Word32$1.max$458 = function(v$467,v$468){return (v$467 > v$468)?v$467:v$468;
};
basis$0Word32$1.compare$469 = function(v$482,v$483){return (v$482 < v$483)?0:((v$482 > v$483)?1:2);
};
basis$0Word32$1.s$l$484 = function(v$678,v$679){return v$678 > v$679;
};
basis$0Word32$1.s$lk$491 = function(v$680,v$681){return v$680 >= v$681;
};
basis$0Word32$1.s$j$498 = function(v$682,v$683){return v$682 < v$683;
};
basis$0Word32$1.s$jk$505 = function(v$684,v$685){return v$684 <= v$685;
};
return 0;
})();
