if ((typeof(compiler_objects$0Lvars$1$1)) == "undefined") {compiler_objects$0Lvars$1$1 = {};
};
(function(){compiler_objects$0Lvars$1$1.new_named_lvar$65 = function(str$68){var v$69 = special_objects$0Name$1.new$152(0);
var v$71 = [false];
var v$72 = [false];
var v$73 = [0];
return [v$71,v$72,v$69,str$68,[false],v$73];
};
compiler_objects$0Lvars$1$1.newLvar$75 = function(v$77){var v$253 = special_objects$0Name$1.new$152(0);
var v$254 = [false];
var v$255 = [false];
var v$256 = [0];
return [v$254,v$255,v$253,"",[false],v$256];
};
compiler_objects$0Lvars$1$1.pr_lvar$78 = function(v$375,v$376,v$377,v$88,v$378,v$379){switch (v$88) { case "": {return "v" + (basis$0Int32$1.toString$458(v$377[0][1][0]));
 break; }default: {return v$88;
} };
};
compiler_objects$0Lvars$1$1.renew$94 = function(v$380,v$381,v$382,v$383,v$384,v$385){var v$102 = special_objects$0Name$1.new$152(0);
var v$103;
switch (v$383) { case "": {v$103 = ("v" + (basis$0Int32$1.toString$458(v$382[0][1][0])));
 break; }default: {v$103 = v$383;
} };
var v$104 = [false];
var v$105 = [false];
var v$106 = [0];
return [v$104,v$105,v$102,v$103,[v$384[0]],v$106];
};
compiler_objects$0Lvars$1$1.pr_lvar$$108 = function(v$386,v$387,v$125,v$124,v$388,v$389){var v$121 = v$125[0][1];
var v$122 = v$121[0];
var v$123 = v$121[1];
return ((((v$124 == "")?"v:":(v$124 + ":")) + (basis$0Int32$1.toString$458(v$122))) + ":") + v$123;
};
compiler_objects$0Lvars$1$1.name$126 = function(v$390,v$391,v$392,v$393,v$394,v$395){return v$392;
};
compiler_objects$0Lvars$1$1.key$131 = function(v$396,v$397,v$398,v$399,v$400,v$401){return v$398[0][1];
};
compiler_objects$0Lvars$1$1.lt$135 = function(v$140,v$141){var v$350 = v$140[2];
var v$351 = v$141[2];
var v$278 = v$350[0][1];
var v$279 = v$278[0];
var v$280 = v$278[1];
var v$281 = v$351[0][1];
var v$282 = v$281[0];
var v$283 = v$281[1];
return (v$279 < v$282)?true:((v$279 == v$282)?(v$280 < v$283):false);
};
compiler_objects$0Lvars$1$1.eq$142 = function(v$147,v$148){var v$352 = v$147[2];
var v$353 = v$148[2];
var v$289 = v$352[0][1];
var v$290 = v$353[0][1];
return (v$289[0] == v$290[0])?(v$289[1] == v$290[1]):false;
};
compiler_objects$0Lvars$1$1.leq$149 = function(v$158,v$159){var t$479;
var v$356 = v$158[2];
var v$357 = v$159[2];
var v$299 = v$356[0][1];
var v$300 = v$299[0];
var v$301 = v$299[1];
var v$302 = v$357[0][1];
var v$303 = v$302[0];
var v$304 = v$302[1];
t$479 = ((v$300 < v$303)?true:((v$300 == v$303)?(v$301 < v$304):false));
if (t$479) {return true;
} else {var v$360 = v$158[2];
var v$361 = v$159[2];
var v$311 = v$360[0][1];
var v$312 = v$361[0][1];
return (v$311[0] == v$312[0])?(v$311[1] == v$312[1]):false;
};
};
compiler_objects$0Lvars$1$1.str$160 = function(v$402,v$403,v$404,v$405,v$406,v$407){return v$405;
};
compiler_objects$0Lvars$1$1.usage$165 = function(v$408,v$409,v$410,v$411,v$412,v$413){return v$413;
};
compiler_objects$0Lvars$1$1.reset_use$170 = function(v$414,v$415,v$416,v$417,v$418,v$419){return (v$419[0] = 0,0);
};
compiler_objects$0Lvars$1$1.incr_use$174 = function(v$420,v$421,v$422,v$423,v$424,v$425){return (v$425[0] = (SmlPrims.chk_ovf_i32(v$425[0] + 1)),0);
};
compiler_objects$0Lvars$1$1.decr_use$178 = function(v$426,v$427,v$428,v$429,v$430,v$431){return (v$431[0] = (SmlPrims.chk_ovf_i32(v$431[0] - 1)),0);
};
compiler_objects$0Lvars$1$1.zero_use$182 = function(v$432,v$433,v$434,v$435,v$436,v$437){return v$437[0] == 0;
};
compiler_objects$0Lvars$1$1.one_use$186 = function(v$438,v$439,v$440,v$441,v$442,v$443){return v$443[0] == 1;
};
compiler_objects$0Lvars$1$1.set_ubf64$190 = function(v$444,v$445,v$446,v$447,v$448,v$449){return (v$448[0] = true,0);
};
compiler_objects$0Lvars$1$1.get_ubf64$198 = function(v$450,v$451,v$452,v$453,v$454,v$455){return v$454[0];
};
compiler_objects$0Lvars$1$1.match$206 = function(v$211,v$212){return special_objects$0Name$1.match$186(v$211[2],v$212[2]);
};
compiler_objects$0Lvars$1$1.is_free$213 = function(v$456,v$457,v$458,v$459,v$460,v$461){return v$456;
};
compiler_objects$0Lvars$1$1.is_inserted$218 = function(v$462,v$463,v$464,v$465,v$466,v$467){return v$463;
};
compiler_objects$0Lvars$1$1.name$223 = function(v$468,v$469,v$470,v$471,v$472,v$473){return v$470;
};
compiler_objects$0Lvars$1$1.pp$224 = function(v$474,v$475,v$476,v$333,v$477,v$478){switch (v$333) { case "": {return "v" + (basis$0Int32$1.toString$458(v$476[0][1][0]));
 break; }default: {return v$333;
} };
};
return 0;
})();
