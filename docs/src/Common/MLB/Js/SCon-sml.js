if ((typeof(syntax_objects$0SCon$1)) == "undefined") {syntax_objects$0SCon$1 = {};
};
(function(){syntax_objects$0SCon$1.eq_scon$250 = function(v$252,v$253){switch (v$252[0]) { case 0: {switch (v$253[0]) { case 0: {var v$254 = v$252[1];
var v$255 = v$253[1];
switch (v$255[0]) { case 0: {var v$358 = v$254[1];
var v$359 = v$255[1];
var t$444;
var fix$441 = {};
fix$441.$eq_list = function(v$362,v$363){lab$eq_list: while (true) {if (v$362 == null) {return (v$363 == null)?true:false;
} else {if (v$363 == null) {return false;
} else {var v$364 = v$362;
var v$365 = v$363;
if (v$364[0] == v$365[0]) {var t$442 = v$364[1];
var t$443 = v$365[1];
var v$362 = t$442;
var v$363 = t$443;
continue lab$eq_list;
} else {return false;
};
};
};
};
};
var eq_list$360 = fix$441.$eq_list;
t$444 = (eq_list$360(v$358[0],v$359[0]));
return t$444?(v$358[1] == v$359[1]):false;
 break; }default: {return false;
} };
 break; }default: {return false;
} };
 break; }case 1: {switch (v$253[0]) { case 1: {return v$252[1] == v$253[1];
 break; }default: {return false;
} };
 break; }case 2: {switch (v$253[0]) { case 2: {return v$252[1] == v$253[1];
 break; }default: {return false;
} };
 break; }case 3: {switch (v$253[0]) { case 3: {var v$262 = v$252[1];
var v$263 = v$253[1];
switch (v$263[0]) { case 0: {var v$369 = v$262[1];
var v$370 = v$263[1];
var t$440;
var fix$437 = {};
fix$437.$eq_list = function(v$373,v$374){lab$eq_list: while (true) {if (v$373 == null) {return (v$374 == null)?true:false;
} else {if (v$374 == null) {return false;
} else {var v$375 = v$373;
var v$376 = v$374;
if (v$375[0] == v$376[0]) {var t$438 = v$375[1];
var t$439 = v$376[1];
var v$373 = t$438;
var v$374 = t$439;
continue lab$eq_list;
} else {return false;
};
};
};
};
};
var eq_list$371 = fix$437.$eq_list;
t$440 = (eq_list$371(v$369[0],v$370[0]));
return t$440?(v$369[1] == v$370[1]):false;
 break; }default: {return false;
} };
 break; }default: {return false;
} };
 break; }case 4: {switch (v$253[0]) { case 4: {return v$252[1] == v$253[1];
 break; }default: {return false;
} };
 break; } };
};
syntax_objects$0SCon$1.lt$80 = function(v$112,v$435){switch (v$112[0]) { case 3: {switch (v$435[0]) { case 3: {var v$134 = v$112[1];
var v$135 = v$435[1];
return basis$0IntInf$1.s$j$2222(v$134,v$135);
 break; }default: {var t$452;
switch (v$112[0]) { case 3: {t$452 = 0;
 break; }case 1: {t$452 = 1;
 break; }case 2: {t$452 = 2;
 break; }case 0: {t$452 = 3;
 break; }default: {t$452 = 4;
} };
var t$451;
switch (v$435[0]) { case 3: {t$451 = 0;
 break; }case 1: {t$451 = 1;
 break; }case 2: {t$451 = 2;
 break; }case 0: {t$451 = 3;
 break; }default: {t$451 = 4;
} };
return t$452 < t$451;
} };
 break; }case 1: {switch (v$435[0]) { case 1: {return v$112[1] < v$435[1];
 break; }default: {var t$450;
switch (v$112[0]) { case 3: {t$450 = 0;
 break; }case 1: {t$450 = 1;
 break; }case 2: {t$450 = 2;
 break; }case 0: {t$450 = 3;
 break; }default: {t$450 = 4;
} };
var t$449;
switch (v$435[0]) { case 3: {t$449 = 0;
 break; }case 1: {t$449 = 1;
 break; }case 2: {t$449 = 2;
 break; }case 0: {t$449 = 3;
 break; }default: {t$449 = 4;
} };
return t$450 < t$449;
} };
 break; }case 2: {switch (v$435[0]) { case 2: {return v$112[1] < v$435[1];
 break; }default: {var t$448;
switch (v$112[0]) { case 3: {t$448 = 0;
 break; }case 1: {t$448 = 1;
 break; }case 2: {t$448 = 2;
 break; }case 0: {t$448 = 3;
 break; }default: {t$448 = 4;
} };
var t$447;
switch (v$435[0]) { case 3: {t$447 = 0;
 break; }case 1: {t$447 = 1;
 break; }case 2: {t$447 = 2;
 break; }case 0: {t$447 = 3;
 break; }default: {t$447 = 4;
} };
return t$448 < t$447;
} };
 break; }case 0: {switch (v$435[0]) { case 0: {var v$116 = v$112[1];
var v$117 = v$435[1];
return basis$0IntInfRep$1.s$j$1456(v$116,v$117);
 break; }default: {var t$446;
switch (v$112[0]) { case 3: {t$446 = 0;
 break; }case 1: {t$446 = 1;
 break; }case 2: {t$446 = 2;
 break; }case 0: {t$446 = 3;
 break; }default: {t$446 = 4;
} };
var t$445;
switch (v$435[0]) { case 3: {t$445 = 0;
 break; }case 1: {t$445 = 1;
 break; }case 2: {t$445 = 2;
 break; }case 0: {t$445 = 3;
 break; }default: {t$445 = 4;
} };
return t$446 < t$445;
} };
 break; }default: {switch (v$435[0]) { case 4: {return v$112[1] < v$435[1];
 break; }default: {var t$454;
switch (v$112[0]) { case 3: {t$454 = 0;
 break; }case 1: {t$454 = 1;
 break; }case 2: {t$454 = 2;
 break; }case 0: {t$454 = 3;
 break; }default: {t$454 = 4;
} };
var t$453;
switch (v$435[0]) { case 3: {t$453 = 0;
 break; }case 1: {t$453 = 1;
 break; }case 2: {t$453 = 2;
 break; }case 0: {t$453 = 3;
 break; }default: {t$453 = 4;
} };
return t$454 < t$453;
} };
} };
};
syntax_objects$0SCon$1.pr_scon$140 = function(v$143){switch (v$143[0]) { case 3: {var v$166 = v$143[1];
return basis$0IntInf$1.toString$2351(v$166);
 break; }case 0: {var v$164 = v$143[1];
return "0w" + (basis$0IntInf$1.toString$2351(v$164));
 break; }case 1: {var v$162 = v$143[1];
return ("\"" + (basis$0String$1.toString$446(v$162))) + "\"";
 break; }case 4: {var v$160 = v$143[1];
return ("#\"" + (SmlPrims.implode([basis$0General$1.chr$194(v$160),null]))) + "\"";
 break; }default: {return v$143[1];
} };
};
syntax_objects$0SCon$1.eq$168 = function(v$198,v$436){switch (v$198[0]) { case 3: {switch (v$436[0]) { case 3: {var v$218 = v$198[1];
var v$219 = v$436[1];
switch (v$219[0]) { case 0: {var v$391 = v$218[1];
var v$392 = v$219[1];
var t$462;
var fix$459 = {};
fix$459.$eq_list = function(v$395,v$396){lab$eq_list: while (true) {if (v$395 == null) {return (v$396 == null)?true:false;
} else {if (v$396 == null) {return false;
} else {var v$397 = v$395;
var v$398 = v$396;
if (v$397[0] == v$398[0]) {var t$460 = v$397[1];
var t$461 = v$398[1];
var v$395 = t$460;
var v$396 = t$461;
continue lab$eq_list;
} else {return false;
};
};
};
};
};
var eq_list$393 = fix$459.$eq_list;
t$462 = (eq_list$393(v$391[0],v$392[0]));
return t$462?(v$391[1] == v$392[1]):false;
 break; }default: {return false;
} };
 break; }default: {return false;
} };
 break; }case 0: {switch (v$436[0]) { case 0: {var v$213 = v$198[1];
var v$214 = v$436[1];
switch (v$214[0]) { case 0: {var v$413 = v$213[1];
var v$414 = v$214[1];
var t$458;
var fix$455 = {};
fix$455.$eq_list = function(v$417,v$418){lab$eq_list: while (true) {if (v$417 == null) {return (v$418 == null)?true:false;
} else {if (v$418 == null) {return false;
} else {var v$419 = v$417;
var v$420 = v$418;
if (v$419[0] == v$420[0]) {var t$456 = v$419[1];
var t$457 = v$420[1];
var v$417 = t$456;
var v$418 = t$457;
continue lab$eq_list;
} else {return false;
};
};
};
};
};
var eq_list$415 = fix$455.$eq_list;
t$458 = (eq_list$415(v$413[0],v$414[0]));
return t$458?(v$413[1] == v$414[1]):false;
 break; }default: {return false;
} };
 break; }default: {return false;
} };
 break; }case 1: {switch (v$436[0]) { case 1: {return v$198[1] == v$436[1];
 break; }default: {return false;
} };
 break; }case 4: {switch (v$436[0]) { case 4: {return v$198[1] == v$436[1];
 break; }default: {return false;
} };
 break; }default: {switch (v$436[0]) { case 2: {return v$198[1] == v$436[1];
 break; }default: {return false;
} };
} };
};
return 0;
})();