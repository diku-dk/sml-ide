if ((typeof(basis$0String$1)) == "undefined") {basis$0String$1 = {};
};
(function(){basis$0String$1.sub_unsafe$54 = function(v$613,v$614){return v$613.charCodeAt(v$614);
};
basis$0String$1.size$61 = function(s$64){return s$64.length;
};
basis$0String$1.s$r$65 = function(v$615,v$616){return v$615 + v$616;
};
basis$0String$1.sub_array_unsafe$72 = function(v$617,v$618){return v$617[v$618];
};
basis$0String$1.update_array_unsafe$79 = function(v$619,v$620,v$621){return (v$619[v$620] = v$621,0);
};
basis$0String$1.alloc_array_unsafe$88 = function(i$91){return Array(i$91);
};
basis$0String$1.length_array$92 = function(a$95){return a$95.length;
};
basis$0String$1.array_to_string$96 = function(a$99){return SmlPrims.charArrayToString(a$99);
};
basis$0String$1.maxSize$100 = 16777211;
basis$0String$1.sub$101 = function(v$114,v$115){if ((v$115 < 0)?true:(v$115 >= v$114.length)) {throw CompilerInitial.exn$Subscript$52;
} else {return v$114.charCodeAt(v$115);
};
};
basis$0String$1.extract$116 = function(v$166,v$167,v$168){var n$122;
switch (v$168[0]) { case 1: {n$122 = (SmlPrims.chk_ovf_i32(v$166.length - v$167));
 break; }default: {n$122 = v$168[1];
} };
var newvec$129;
if ((v$167 < 0)?true:((n$122 < 0)?true:((n$122 > 16777211)?true:((v$167 > v$166.length)?true:((SmlPrims.chk_ovf_i32(v$167 + n$122)) > v$166.length))))) {throw CompilerInitial.exn$Subscript$52;
} else {newvec$129 = (Array(n$122));
};
var fix$632 = {};
fix$632.$blit = function(v$162,v$163){lab$blit: while (true) {if (v$163 >= n$122) {return 0;
} else {var e$159 = v$166.charCodeAt(v$162);
(newvec$129[v$163] = e$159,0);
var t$633 = SmlPrims.chk_ovf_i32(v$162 + 1);
var t$634 = SmlPrims.chk_ovf_i32(v$163 + 1);
var v$162 = t$633;
var v$163 = t$634;
continue lab$blit;
};
};
};
var blit$150 = fix$632.$blit;
blit$150(v$167,0);
return SmlPrims.charArrayToString(newvec$129);
};
basis$0String$1.substring$169 = function(v$175,v$176,v$177){return basis$0String$1.extract$116(v$175,v$176,[0,v$177]);
};
basis$0String$1.concat$178 = function(x$181){return SmlPrims.concat(x$181);
};
basis$0String$1.concatWith$182 = function(v$185,v$188){if (v$188 == null) {return "";
} else {var t$638;
var t$637 = basis$0List$1.tl$677;
var t$635;
var b$508 = null;
var fix$636 = {};
fix$636.$foldr = function(v$511){if (v$511 == null) {return b$508;
} else {var v$512 = v$511;
var v$513 = v$512[0];
var v$514 = v$512[1];
return [v$185,[v$513,fix$636.$foldr(v$514)]];
};
};
var foldr$510 = fix$636.$foldr;
t$635 = (foldr$510(v$188));
t$638 = (t$637(t$635));
return SmlPrims.concat(t$638);
};
};
basis$0String$1.implode$205 = function(l$208){return SmlPrims.implode(l$208);
};
basis$0String$1.explode$209 = function(s$212){var fix$639 = {};
fix$639.$h = function(v$519,v$520){lab$h: while (true) {if (v$519 < 0) {return v$520;
} else {var t$640 = SmlPrims.chk_ovf_i32(v$519 - 1);
var t$641 = [s$212.charCodeAt(v$519),v$520];
var v$519 = t$640;
var v$520 = t$641;
continue lab$h;
};
};
};
var h$517 = fix$639.$h;
return h$517(SmlPrims.chk_ovf_i32(s$212.length - 1),null);
};
basis$0String$1.str$213 = function(c$216){return SmlPrims.implode([c$216,null]);
};
basis$0String$1.translate$217 = function(f$220,s$223){return basis$0StrBase$1.translate$288(f$220,[s$223,0,s$223.length]);
};
basis$0String$1.tokens$224 = function(p$227,s$230){return basis$0List$1.map$697(function(v$523){var v$524 = v$523[0];
var v$525 = v$523[1];
var v$526 = v$523[2];
return basis$0String$1.extract$116(v$524,v$525,[0,v$526]);
},basis$0StrBase$1.tokens$312(p$227,[s$230,0,s$230.length]));
};
basis$0String$1.fields$231 = function(p$234,s$237){return basis$0List$1.map$697(function(v$528){var v$529 = v$528[0];
var v$530 = v$528[1];
var v$531 = v$528[2];
return basis$0String$1.extract$116(v$529,v$530,[0,v$531]);
},basis$0StrBase$1.fields$345(p$234,[s$237,0,s$237.length]));
};
basis$0String$1.map$238 = function(x$241,a$534){var v$535 = a$534.length;
if ((v$535 < 0)?true:(v$535 > 16777211)) {throw CompilerInitial.exn$Size$53;
} else {var t$536 = Array(v$535);
var fix$642 = {};
fix$642.$loop = function(j$538){lab$loop: while (true) {if (j$538 < v$535) {(t$536[j$538] = (x$241(a$534.charCodeAt(j$538))),0);
var t$643 = SmlPrims.chk_ovf_i32(j$538 + 1);
var j$538 = t$643;
continue lab$loop;
} else {return 0;
};
};
};
var loop$537 = fix$642.$loop;
loop$537(0);
return SmlPrims.charArrayToString(t$536);
};
};
basis$0String$1.isSuffix$242 = function(s1$245,s2$248){var n1$249 = s1$245.length;
var n2$250 = s2$248.length;
var offset$251 = SmlPrims.chk_ovf_i32(n2$250 - n1$249);
var fix$644 = {};
fix$644.$h = function(j$255){lab$h: while (true) {if (j$255 == n1$249) {return true;
} else {if ((s1$245.charCodeAt(j$255)) == (s2$248.charCodeAt(SmlPrims.chk_ovf_i32(j$255 + offset$251)))) {var t$645 = SmlPrims.chk_ovf_i32(j$255 + 1);
var j$255 = t$645;
continue lab$h;
} else {return false;
};
};
};
};
var h$252 = fix$644.$h;
if (n1$249 <= n2$250) {return h$252(0);
} else {return false;
};
};
basis$0String$1.isSubstring$268 = function(v$271,v$274){switch (v$271) { case "": {return true;
 break; }default: {var n1$284 = v$271.length;
var n2$285 = v$274.length;
var stop1$286 = SmlPrims.chk_ovf_i32(n1$284 - 1);
var stop2$287 = SmlPrims.chk_ovf_i32(n2$285 - n1$284);
var fix$646 = {};
fix$646.$issub = function(offset$307){lab$issub: while (true) {if (offset$307 <= stop2$287) {var t$649;
if ((v$271.charCodeAt(stop1$286)) == (v$274.charCodeAt(SmlPrims.chk_ovf_i32(stop1$286 + offset$307)))) {var fix$647 = {};
fix$647.$h = function(j$551){lab$h: while (true) {if (j$551 >= stop1$286) {return true;
} else {if ((v$271.charCodeAt(j$551)) == (v$274.charCodeAt(SmlPrims.chk_ovf_i32(j$551 + offset$307)))) {var t$648 = SmlPrims.chk_ovf_i32(j$551 + 1);
var j$551 = t$648;
continue lab$h;
} else {return false;
};
};
};
};
var h$550 = fix$647.$h;
t$649 = (h$550(0));
} else {t$649 = false;
};
if (t$649) {return true;
} else {var t$650 = SmlPrims.chk_ovf_i32(offset$307 + 1);
var offset$307 = t$650;
continue lab$issub;
};
} else {return false;
};
};
};
var issub$304 = fix$646.$issub;
return issub$304(0);
} };
};
basis$0String$1.isPrefix$321 = function(s1$324,s2$327){var n1$328 = s1$324.length;
var n2$329 = s2$327.length;
var stop$330 = (n1$328 < n2$329)?n1$328:n2$329;
var fix$651 = {};
fix$651.$h = function(j$338){lab$h: while (true) {if (j$338 == stop$330) {return true;
} else {if ((s1$324.charCodeAt(j$338)) == (s2$327.charCodeAt(j$338))) {var t$652 = SmlPrims.chk_ovf_i32(j$338 + 1);
var j$338 = t$652;
continue lab$h;
} else {return false;
};
};
};
};
var h$335 = fix$651.$h;
if (n1$328 <= n2$329) {return h$335(0);
} else {return false;
};
};
basis$0String$1.compare$351 = function(v$364,v$365){return (v$364 < v$365)?0:((v$364 > v$365)?1:2);
};
basis$0String$1.collate$366 = function(cmp$369,v$373){var v$403 = v$373[0];
var v$404 = v$373[1];
var n1$374 = v$403.length;
var n2$375 = v$404.length;
var stop$376 = (n1$374 < n2$375)?n1$374:n2$375;
var fix$653 = {};
fix$653.$h = function(j$384){lab$h: while (true) {if (j$384 == stop$376) {return (n1$374 < n2$375)?0:((n1$374 > n2$375)?1:2);
} else {switch (cmp$369([v$403.charCodeAt(j$384),v$404.charCodeAt(j$384)])) { case 0: {return 0;
 break; }case 1: {return 1;
 break; }default: {var t$654 = SmlPrims.chk_ovf_i32(j$384 + 1);
var j$384 = t$654;
continue lab$h;
} };
};
};
};
var h$381 = fix$653.$h;
return h$381(0);
};
basis$0String$1.fromString$405 = function(s$408){var fix$655 = {};
fix$655.$h = function(src$420,res$423){lab$h: while (true) {var v$432 = (src$420 < s$408.length)?[0,[s$408.charCodeAt(src$420),SmlPrims.chk_ovf_i32(src$420 + 1)]]:[1];
switch (v$432[0]) { case 1: {return [0,SmlPrims.implode(basis$0List$1.rev$682(res$423))];
 break; }default: {var v$433 = v$432[1];
var v$434 = v$433[0];
switch (v$434) { case 92: {var v$444 = v$433[1];
var v$440 = basis$0StrBase$1.fromMLescape$467((function(env$657){return function(i$567){var v$656 = env$657[0];
return (i$567 < v$656.length)?[0,[v$656.charCodeAt(i$567),SmlPrims.chk_ovf_i32(i$567 + 1)]]:[1];
};
})([s$408]),v$444);
switch (v$440[0]) { case 1: {return [1];
 break; }default: {var v$441 = v$440[1];
var v$442 = v$441[0];
var v$443 = v$441[1];
var t$658 = v$443;
var t$659 = [v$442,res$423];
var src$420 = t$658;
var res$423 = t$659;
continue lab$h;
} };
 break; }default: {var v$445 = v$433[1];
var t$660 = v$445;
var t$661 = [v$434,res$423];
var src$420 = t$660;
var res$423 = t$661;
continue lab$h;
} };
} };
};
};
var h$417 = fix$655.$h;
return h$417(0,null);
};
basis$0String$1.toString$446 = function(s$449){return basis$0StrBase$1.translate$288(function(v$630){return basis$0StrBase$1.toMLescape$626(v$630);
},[s$449,0,s$449.length]);
};
basis$0String$1.fromCString$450 = function(s$453){return basis$0StrBase$1.fromCString$848(s$453);
};
basis$0String$1.toCString$454 = function(s$457){return basis$0StrBase$1.translate$288(function(v$631){return basis$0StrBase$1.toCescape$662(v$631);
},[s$457,0,s$457.length]);
};
basis$0String$1.s$j$458 = function(v$622,v$623){return v$622 < v$623;
};
basis$0String$1.s$jk$460 = function(v$624,v$625){return v$624 <= v$625;
};
basis$0String$1.s$l$462 = function(v$626,v$627){return v$626 > v$627;
};
basis$0String$1.s$lk$464 = function(v$628,v$629){return v$628 >= v$629;
};
basis$0String$1.substring$466 = function(v$572,v$573,v$574){return basis$0String$1.extract$116(v$572,v$573,[0,v$574]);
};
return 0;
})();