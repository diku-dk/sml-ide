if ((typeof(special_objects$0Name$1)) == "undefined") {special_objects$0Name$1 = {};
};
(function(){var baseCurrent$60 = ["CompilerInitial"];
special_objects$0Name$1.baseSet$61 = function(s$64){return (baseCurrent$60[0] = s$64,0);
};
special_objects$0Name$1.baseGet$65 = function(v$67){return baseCurrent$60[0];
};
var current$68 = [0];
special_objects$0Name$1.current_matchcount$69 = function(v$71){return current$68[0];
};
special_objects$0Name$1.matchcount_lt$72 = function(v$552,v$553){return v$552 < v$553;
};
special_objects$0Name$1.matchcount_invalid$77 = -1;
special_objects$0Name$1.key$78 = function(v$81){return v$81[0][1];
};
special_objects$0Name$1.eq$86 = function(v$91,v$92){var v$414 = v$91[0][1];
var v$415 = v$92[0][1];
return (v$414[0] == v$415[0])?(v$414[1] == v$415[1]):false;
};
special_objects$0Name$1.lt$93 = function(v$118,v$119){var v$115 = v$118[0][1];
var v$116 = v$115[0];
var v$117 = v$115[1];
var v$112 = v$119[0][1];
var v$113 = v$112[0];
var v$114 = v$112[1];
return (v$116 < v$113)?true:((v$116 == v$113)?(v$117 < v$114):false);
};
special_objects$0Name$1.assignKey$120 = function(v$138,v$554){var v$139 = v$138[0][1];
var v$140 = v$139[1];
var v$141 = v$138[0][2];
var v$142 = v$138[0][0];
if (v$141) {return tools$0Crash$1.impossible$59("Name.assignKey on rigid name");
} else {return (v$138[0] = [v$142,[v$554,v$140],v$141],0);
};
};
special_objects$0Name$1.bucket$144 = [null];
var c$145 = [0];
special_objects$0Name$1.new$152 = function(v$154){var key$155;
var t$556;
var a$349 = c$145[0];
(c$145[0] = (SmlPrims.chk_ovf_i32(a$349 + 1)),0);
t$556 = a$349;
key$155 = [t$556,baseCurrent$60[0]];
var name$156 = [[[false],key$155,false]];
(special_objects$0Name$1.bucket$144[0] = [name$156,special_objects$0Name$1.bucket$144[0]],0);
return name$156;
};
special_objects$0Name$1.mk_rigid$162 = function(v$165){if (v$165[0][2]) {return 0;
} else {var v$176 = v$165[0][1];
return (v$165[0] = [[false],v$176,true],0);
};
};
special_objects$0Name$1.rigid$177 = function(v$180){return v$180[0][2];
};
special_objects$0Name$1.rematching$185 = [false];
special_objects$0Name$1.match$186 = function(v$201,v$555){var v$202 = v$201[0][0];
if (v$202[0]) {if (v$201[0][2]) {return 0;
} else {var v$205 = v$555[0][0];
if (v$205[0]) {var v$226 = v$201[0][1];
var v$227 = v$555[0][1];
var n0$190 = v$555[0];
if ((v$226[1] == v$227[1])?true:special_objects$0Name$1.rematching$185[0]) {(v$205[0] = false,0);
(v$201[0] = n0$190,0);
return (current$68[0] = (SmlPrims.chk_ovf_i32(current$68[0] + 1)),0);
} else {return 0;
};
} else {return 0;
};
};
} else {return 0;
};
};
special_objects$0Name$1.mark_gen$229 = function(v$232){return (v$232[0][0][0] = true,0);
};
special_objects$0Name$1.unmark_gen$237 = function(v$240){return (v$240[0][0][0] = false,0);
};
special_objects$0Name$1.is_gen$245 = function(v$248){return v$248[0][0][0];
};
special_objects$0Name$1.reg_top$261;
var n$465;
var key$466;
var t$557;
var a$467 = c$145[0];
(c$145[0] = (SmlPrims.chk_ovf_i32(a$467 + 1)),0);
t$557 = a$467;
key$466 = [t$557,baseCurrent$60[0]];
var name$468 = [[[false],key$466,false]];
(special_objects$0Name$1.bucket$144[0] = [name$468,special_objects$0Name$1.bucket$144[0]],0);
n$465 = name$468;
if (n$465[0][2]) {0;
} else {var v$469 = n$465[0][1];
(n$465[0] = [[false],v$469,true],0);
};
(special_objects$0Name$1.bucket$144[0] = null,0);
special_objects$0Name$1.reg_top$261 = n$465;
special_objects$0Name$1.reg_bot$262;
var n$471;
var key$472;
var t$558;
var a$473 = c$145[0];
(c$145[0] = (SmlPrims.chk_ovf_i32(a$473 + 1)),0);
t$558 = a$473;
key$472 = [t$558,baseCurrent$60[0]];
var name$474 = [[[false],key$472,false]];
(special_objects$0Name$1.bucket$144[0] = [name$474,special_objects$0Name$1.bucket$144[0]],0);
n$471 = name$474;
if (n$471[0][2]) {0;
} else {var v$475 = n$471[0][1];
(n$471[0] = [[false],v$475,true],0);
};
(special_objects$0Name$1.bucket$144[0] = null,0);
special_objects$0Name$1.reg_bot$262 = n$471;
special_objects$0Name$1.reg_string$263;
var n$477;
var key$478;
var t$559;
var a$479 = c$145[0];
(c$145[0] = (SmlPrims.chk_ovf_i32(a$479 + 1)),0);
t$559 = a$479;
key$478 = [t$559,baseCurrent$60[0]];
var name$480 = [[[false],key$478,false]];
(special_objects$0Name$1.bucket$144[0] = [name$480,special_objects$0Name$1.bucket$144[0]],0);
n$477 = name$480;
if (n$477[0][2]) {0;
} else {var v$481 = n$477[0][1];
(n$477[0] = [[false],v$481,true],0);
};
(special_objects$0Name$1.bucket$144[0] = null,0);
special_objects$0Name$1.reg_string$263 = n$477;
special_objects$0Name$1.reg_pair$264;
var n$483;
var key$484;
var t$560;
var a$485 = c$145[0];
(c$145[0] = (SmlPrims.chk_ovf_i32(a$485 + 1)),0);
t$560 = a$485;
key$484 = [t$560,baseCurrent$60[0]];
var name$486 = [[[false],key$484,false]];
(special_objects$0Name$1.bucket$144[0] = [name$486,special_objects$0Name$1.bucket$144[0]],0);
n$483 = name$486;
if (n$483[0][2]) {0;
} else {var v$487 = n$483[0][1];
(n$483[0] = [[false],v$487,true],0);
};
(special_objects$0Name$1.bucket$144[0] = null,0);
special_objects$0Name$1.reg_pair$264 = n$483;
special_objects$0Name$1.reg_array$265;
var n$489;
var key$490;
var t$561;
var a$491 = c$145[0];
(c$145[0] = (SmlPrims.chk_ovf_i32(a$491 + 1)),0);
t$561 = a$491;
key$490 = [t$561,baseCurrent$60[0]];
var name$492 = [[[false],key$490,false]];
(special_objects$0Name$1.bucket$144[0] = [name$492,special_objects$0Name$1.bucket$144[0]],0);
n$489 = name$492;
if (n$489[0][2]) {0;
} else {var v$493 = n$489[0][1];
(n$489[0] = [[false],v$493,true],0);
};
(special_objects$0Name$1.bucket$144[0] = null,0);
special_objects$0Name$1.reg_array$265 = n$489;
special_objects$0Name$1.reg_ref$266;
var n$495;
var key$496;
var t$562;
var a$497 = c$145[0];
(c$145[0] = (SmlPrims.chk_ovf_i32(a$497 + 1)),0);
t$562 = a$497;
key$496 = [t$562,baseCurrent$60[0]];
var name$498 = [[[false],key$496,false]];
(special_objects$0Name$1.bucket$144[0] = [name$498,special_objects$0Name$1.bucket$144[0]],0);
n$495 = name$498;
if (n$495[0][2]) {0;
} else {var v$499 = n$495[0][1];
(n$495[0] = [[false],v$499,true],0);
};
(special_objects$0Name$1.bucket$144[0] = null,0);
special_objects$0Name$1.reg_ref$266 = n$495;
special_objects$0Name$1.reg_triple$267;
var n$501;
var key$502;
var t$563;
var a$503 = c$145[0];
(c$145[0] = (SmlPrims.chk_ovf_i32(a$503 + 1)),0);
t$563 = a$503;
key$502 = [t$563,baseCurrent$60[0]];
var name$504 = [[[false],key$502,false]];
(special_objects$0Name$1.bucket$144[0] = [name$504,special_objects$0Name$1.bucket$144[0]],0);
n$501 = name$504;
if (n$501[0][2]) {0;
} else {var v$505 = n$501[0][1];
(n$501[0] = [[false],v$505,true],0);
};
(special_objects$0Name$1.bucket$144[0] = null,0);
special_objects$0Name$1.reg_triple$267 = n$501;
special_objects$0Name$1.exn_DIV$268;
var n$507;
var key$508;
var t$564;
var a$509 = c$145[0];
(c$145[0] = (SmlPrims.chk_ovf_i32(a$509 + 1)),0);
t$564 = a$509;
key$508 = [t$564,baseCurrent$60[0]];
var name$510 = [[[false],key$508,false]];
(special_objects$0Name$1.bucket$144[0] = [name$510,special_objects$0Name$1.bucket$144[0]],0);
n$507 = name$510;
if (n$507[0][2]) {0;
} else {var v$511 = n$507[0][1];
(n$507[0] = [[false],v$511,true],0);
};
(special_objects$0Name$1.bucket$144[0] = null,0);
special_objects$0Name$1.exn_DIV$268 = n$507;
special_objects$0Name$1.exn_MATCH$269;
var n$513;
var key$514;
var t$565;
var a$515 = c$145[0];
(c$145[0] = (SmlPrims.chk_ovf_i32(a$515 + 1)),0);
t$565 = a$515;
key$514 = [t$565,baseCurrent$60[0]];
var name$516 = [[[false],key$514,false]];
(special_objects$0Name$1.bucket$144[0] = [name$516,special_objects$0Name$1.bucket$144[0]],0);
n$513 = name$516;
if (n$513[0][2]) {0;
} else {var v$517 = n$513[0][1];
(n$513[0] = [[false],v$517,true],0);
};
(special_objects$0Name$1.bucket$144[0] = null,0);
special_objects$0Name$1.exn_MATCH$269 = n$513;
special_objects$0Name$1.exn_BIND$270;
var n$519;
var key$520;
var t$566;
var a$521 = c$145[0];
(c$145[0] = (SmlPrims.chk_ovf_i32(a$521 + 1)),0);
t$566 = a$521;
key$520 = [t$566,baseCurrent$60[0]];
var name$522 = [[[false],key$520,false]];
(special_objects$0Name$1.bucket$144[0] = [name$522,special_objects$0Name$1.bucket$144[0]],0);
n$519 = name$522;
if (n$519[0][2]) {0;
} else {var v$523 = n$519[0][1];
(n$519[0] = [[false],v$523,true],0);
};
(special_objects$0Name$1.bucket$144[0] = null,0);
special_objects$0Name$1.exn_BIND$270 = n$519;
special_objects$0Name$1.exn_OVERFLOW$271;
var n$525;
var key$526;
var t$567;
var a$527 = c$145[0];
(c$145[0] = (SmlPrims.chk_ovf_i32(a$527 + 1)),0);
t$567 = a$527;
key$526 = [t$567,baseCurrent$60[0]];
var name$528 = [[[false],key$526,false]];
(special_objects$0Name$1.bucket$144[0] = [name$528,special_objects$0Name$1.bucket$144[0]],0);
n$525 = name$528;
if (n$525[0][2]) {0;
} else {var v$529 = n$525[0][1];
(n$525[0] = [[false],v$529,true],0);
};
(special_objects$0Name$1.bucket$144[0] = null,0);
special_objects$0Name$1.exn_OVERFLOW$271 = n$525;
special_objects$0Name$1.exn_INTERRUPT$272;
var n$531;
var key$532;
var t$568;
var a$533 = c$145[0];
(c$145[0] = (SmlPrims.chk_ovf_i32(a$533 + 1)),0);
t$568 = a$533;
key$532 = [t$568,baseCurrent$60[0]];
var name$534 = [[[false],key$532,false]];
(special_objects$0Name$1.bucket$144[0] = [name$534,special_objects$0Name$1.bucket$144[0]],0);
n$531 = name$534;
if (n$531[0][2]) {0;
} else {var v$535 = n$531[0][1];
(n$531[0] = [[false],v$535,true],0);
};
(special_objects$0Name$1.bucket$144[0] = null,0);
special_objects$0Name$1.exn_INTERRUPT$272 = n$531;
special_objects$0Name$1.exn_SUBSCRIPT$273;
var n$537;
var key$538;
var t$569;
var a$539 = c$145[0];
(c$145[0] = (SmlPrims.chk_ovf_i32(a$539 + 1)),0);
t$569 = a$539;
key$538 = [t$569,baseCurrent$60[0]];
var name$540 = [[[false],key$538,false]];
(special_objects$0Name$1.bucket$144[0] = [name$540,special_objects$0Name$1.bucket$144[0]],0);
n$537 = name$540;
if (n$537[0][2]) {0;
} else {var v$541 = n$537[0][1];
(n$537[0] = [[false],v$541,true],0);
};
(special_objects$0Name$1.bucket$144[0] = null,0);
special_objects$0Name$1.exn_SUBSCRIPT$273 = n$537;
special_objects$0Name$1.exn_SIZE$274;
var n$543;
var key$544;
var t$570;
var a$545 = c$145[0];
(c$145[0] = (SmlPrims.chk_ovf_i32(a$545 + 1)),0);
t$570 = a$545;
key$544 = [t$570,baseCurrent$60[0]];
var name$546 = [[[false],key$544,false]];
(special_objects$0Name$1.bucket$144[0] = [name$546,special_objects$0Name$1.bucket$144[0]],0);
n$543 = name$546;
if (n$543[0][2]) {0;
} else {var v$547 = n$543[0][1];
(n$543[0] = [[false],v$547,true],0);
};
(special_objects$0Name$1.bucket$144[0] = null,0);
special_objects$0Name$1.exn_SIZE$274 = n$543;
var pu0$296 = pickle$0pickle$1.convert$2342([function(v$380){return [v$380[2],v$380[0],v$380[1]];
},function(v$381){return [v$381[1],v$381[2],v$381[0]];
}],pickle$0pickle$1.tup3Gen0$2349(pickle$0pickle$1.pairGen$1053([pickle$0pickle$1.int$729,pickle$0pickle$1.string$909]),pickle$0pickle$1.bool$732,pickle$0pickle$1.refOneGen$1282(pickle$0pickle$1.bool$732)));
special_objects$0Name$1.pu$297 = pickle$0pickle$1.hashConsEq$2577(function(v$382){var v$383 = v$382[0];
var v$384 = v$382[1];
var v$446 = v$383[0][1];
var v$447 = v$384[0][1];
return (v$446[0] == v$447[0])?(v$446[1] == v$447[1]):false;
},pickle$0pickle$1.register$2560("Name",[special_objects$0Name$1.reg_top$261,[special_objects$0Name$1.reg_bot$262,[special_objects$0Name$1.reg_string$263,[special_objects$0Name$1.reg_pair$264,[special_objects$0Name$1.reg_array$265,[special_objects$0Name$1.reg_ref$266,[special_objects$0Name$1.reg_triple$267,[special_objects$0Name$1.exn_DIV$268,[special_objects$0Name$1.exn_MATCH$269,[special_objects$0Name$1.exn_BIND$270,[special_objects$0Name$1.exn_OVERFLOW$271,[special_objects$0Name$1.exn_INTERRUPT$272,[special_objects$0Name$1.exn_SUBSCRIPT$273,[special_objects$0Name$1.exn_SIZE$274,null]]]]]]]]]]]]]],pickle$0pickle$1.ref0EqGen$1163(function(v$395){var v$396 = v$395[0];
var v$397 = v$395[1];
var v$454 = v$396[0][1];
var v$455 = v$397[0][1];
return (v$454[0] == v$455[0])?(v$454[1] == v$455[1]):false;
},pu0$296)));
special_objects$0Name$1.pu_matchcount$298 = pickle$0pickle$1.int$729;
return 0;
})();