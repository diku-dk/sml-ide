if ((typeof(tools$0Report$1)) == "undefined") {tools$0Report$1 = {};
};
(function(){var fix$413 = {};
fix$413.$eq_Report = function(v$299,v$300){lab$eq_Report: while (true) {switch (v$299[0]) { case 0: {switch (v$300[0]) { case 0: {var v$301 = v$299[1];
var v$302 = v$300[1];
if (fix$413.$eq_Report(v$301[0],v$302[0])) {var t$417 = v$301[1];
var t$418 = v$302[1];
var v$299 = t$417;
var v$300 = t$418;
continue lab$eq_Report;
} else {return false;
};
 break; }default: {return false;
} };
 break; }case 1: {switch (v$300[0]) { case 1: {var v$304 = v$299[1];
var v$305 = v$300[1];
var fix$414 = {};
fix$414.$eq_list = function(v$311,v$312){lab$eq_list: while (true) {if (v$311 == null) {return (v$312 == null)?true:false;
} else {if (v$312 == null) {return false;
} else {var v$313 = v$311;
var v$314 = v$312;
if (v$313[0] == v$314[0]) {var t$415 = v$313[1];
var t$416 = v$314[1];
var v$311 = t$415;
var v$312 = t$416;
continue lab$eq_list;
} else {return false;
};
};
};
};
};
var eq_list$309 = fix$414.$eq_list;
return eq_list$309(v$304,v$305);
 break; }default: {return false;
} };
 break; } };
};
};
tools$0Report$1.eq_Report$297 = fix$413.$eq_Report;
tools$0Report$1.null$59 = [1,null];
tools$0Report$1.line$60 = function(s$63){return [1,[s$63,null]];
};
tools$0Report$1.s$hh$64 = function(v$85,v$86){switch (v$85[0]) { case 1: {if (v$85[1] == null) {return v$86;
} else {switch (v$86[0]) { case 1: {return (v$86[1] == null)?v$85:[0,[v$85,v$86]];
 break; }default: {return [0,[v$85,v$86]];
} };
};
 break; }default: {switch (v$86[0]) { case 1: {return (v$86[1] == null)?v$85:[0,[v$85,v$86]];
 break; }default: {return [0,[v$85,v$86]];
} };
} };
};
tools$0Report$1.flatten$87 = function(c$325){var fix$419 = {};
fix$419.$foldr = function(v$327){if (v$327 == null) {return tools$0Report$1.null$59;
} else {var v$328 = v$327;
var v$329 = v$328[0];
var v$330 = v$328[1];
var v$408 = fix$419.$foldr(v$330);
switch (v$329[0]) { case 1: {if (v$329[1] == null) {return v$408;
} else {switch (v$408[0]) { case 1: {return (v$408[1] == null)?v$329:[0,[v$329,v$408]];
 break; }default: {return [0,[v$329,v$408]];
} };
};
 break; }default: {switch (v$408[0]) { case 1: {return (v$408[1] == null)?v$329:[0,[v$329,v$408]];
 break; }default: {return [0,[v$329,v$408]];
} };
} };
};
};
var foldr$326 = fix$419.$foldr;
return foldr$326(c$325);
};
var fix$420 = {};
fix$420.$indent = function(v$409,v$101){switch (v$101[0]) { case 1: {var v$107 = v$101[1];
return [1,basis$0List$1.map$697(function(x$105){var t$443;
var fix$442 = {};
fix$442.$f = function(v$344){switch (v$344) { case 0: {return null;
 break; }default: {return [32,fix$442.$f(SmlPrims.chk_ovf_i32(v$344 - 1))];
} };
};
var f$343 = fix$442.$f;
t$443 = ((v$409 <= 0)?"":(SmlPrims.concat([SmlPrims.implode(f$343(SmlPrims.chk_ovf_i32(v$409 - 0))),["",null]])));
return t$443 + x$105;
},v$107)];
 break; }default: {var v$109 = v$101[1];
var v$110 = v$109[0];
var v$111 = v$109[1];
return [0,[fix$420.$indent(v$409,v$110),fix$420.$indent(v$409,v$111)]];
} };
};
tools$0Report$1.indent$88 = fix$420.$indent;
var fix$421 = {};
fix$421.$adjust = function(v$410,v$129){switch (v$129[0]) { case 1: {var v$131 = v$129[1];
if (v$131 == null) {return [1,null];
} else {var v$138 = v$131;
var v$139 = v$138[0];
var v$140 = v$138[1];
var t$441;
if (v$410 < 0) {t$441 = [basis$0String$1.extract$116(v$139,SmlPrims.chk_ovf_i32(-(v$410)),[1]),v$140];
} else {var t$440;
var t$439;
var t$438;
var fix$437 = {};
fix$437.$f = function(v$351){switch (v$351) { case 0: {return null;
 break; }default: {return [32,fix$437.$f(SmlPrims.chk_ovf_i32(v$351 - 1))];
} };
};
var f$350 = fix$437.$f;
t$438 = ((v$410 <= 0)?"":(SmlPrims.concat([SmlPrims.implode(f$350(SmlPrims.chk_ovf_i32(v$410 - 0))),["",null]])));
t$439 = (t$438 + v$139);
t$440 = [t$439,v$140];
t$441 = t$440;
};
return [1,t$441];
};
 break; }default: {var v$142 = v$129[1];
var v$143 = v$142[0];
var v$144 = v$142[1];
return [0,[fix$421.$adjust(v$410,v$143),fix$421.$adjust(v$410,v$144)]];
} };
};
tools$0Report$1.adjust$112 = fix$421.$adjust;
var fix$422 = {};
fix$422.$lines0 = function(v$148,v$151){lab$lines0: while (true) {switch (v$148[0]) { case 1: {var v$163 = v$148[1];
return basis$0List$1.s$n$686(v$163,v$151);
 break; }default: {var v$165 = v$148[1];
var v$166 = v$165[0];
var v$167 = v$165[1];
var t$423 = v$166;
var t$424 = fix$422.$lines0(v$167,v$151);
var v$148 = t$423;
var v$151 = t$424;
continue lab$lines0;
} };
};
};
var lines0$145 = fix$422.$lines0;
tools$0Report$1.decorate$173 = function(v$411,v$412){var rhs1$181 = function(obj$208){var include_text$189 = [true];
var space$190;
var n$353 = v$411.length;
var fix$425 = {};
fix$425.$f = function(v$357){switch (v$357) { case 0: {return null;
 break; }default: {return [32,fix$425.$f(SmlPrims.chk_ovf_i32(v$357 - 1))];
} };
};
var f$356 = fix$425.$f;
space$190 = ((n$353 <= 0)?"":(SmlPrims.concat([SmlPrims.implode(f$356(SmlPrims.chk_ovf_i32(n$353 - 0))),["",null]])));
var t$426;
var v$205 = lines0$145(v$412,null);
t$426 = ((v$205 == null)?[v$411,null]:(basis$0List$1.map$697(function(line$364){if (include_text$189[0]) {(include_text$189[0] = false,0);
return v$411 + line$364;
} else {return space$190 + line$364;
};
},v$205)));
return [1,t$426];
};
switch (v$412[0]) { case 1: {if (v$412[1] == null) {return [1,[v$411,null]];
} else {return rhs1$181(0);
};
 break; }default: {return rhs1$181(0);
} };
};
var fix$427 = {};
fix$427.$print = function(v$225){lab$print: while (true) {switch (v$225[0]) { case 1: {var v$236 = v$225[1];
basis$0List$1.map$697((function(env$429){return function(s$371){var v$428 = env$429[0];
return v$428(s$371 + "\n");
};
})([basis$0General$1.print$163]),v$236);
return 0;
 break; }default: {var v$239 = v$225[1];
var v$240 = v$239[0];
var v$241 = v$239[1];
fix$427.$print(v$240);
var t$430 = v$241;
var v$225 = t$430;
continue lab$print;
} };
};
};
tools$0Report$1.print$222 = fix$427.$print;
var fix$431 = {};
fix$431.$print$ = function(v$245,v$248){lab$print$: while (true) {switch (v$245[0]) { case 1: {var v$262 = v$245[1];
basis$0List$1.map$697((function(env$434){return function(s$374){var v$432 = env$434[0];
var v$433 = env$434[1];
v$433(v$432,s$374 + "\n");
return 0;
};
})([v$248,basis$0TextIO$1.output$110]),v$262);
return 0;
 break; }default: {var v$266 = v$245[1];
var v$267 = v$266[0];
var v$268 = v$266[1];
fix$431.$print$(v$267,v$248);
var t$435 = v$268;
var t$436 = v$248;
var v$245 = t$435;
var v$248 = t$436;
continue lab$print$;
} };
};
};
tools$0Report$1.print$$242 = fix$431.$print$;
tools$0Report$1.en$DeepError$270 = new String("DeepError");
return 0;
})();
