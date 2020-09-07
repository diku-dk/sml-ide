if ((typeof(utest$0utest$1)) == "undefined") {utest$0utest$1 = {};
};
(function(){var wrongCount$54 = [0];
var okCount$55 = [0];
var exnCount$56 = [0];
utest$0utest$1.check$75 = function(b$78){var s$211 = b$78?"OK":"WRONG";
var r$212;
switch (s$211) { case "OK": {r$212 = okCount$55;
 break; }case "WRONG": {r$212 = wrongCount$54;
 break; }case "EXN": {r$212 = exnCount$56;
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"Utest.impossible"];
} };
(r$212[0] = (SmlPrims.chk_ovf_i32(r$212[0] + 1)),0);
return s$211;
};
utest$0utest$1.check$$83 = function(f$86){var s$214;
try {s$214 = ((f$86(0))?"OK":"WRONG");
} catch(v$440) {s$214 = ((function(v$92){return "EXN";
})(v$440));
};
var r$215;
switch (s$214) { case "OK": {r$215 = okCount$55;
 break; }case "WRONG": {r$215 = wrongCount$54;
 break; }case "EXN": {r$215 = exnCount$56;
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"Utest.impossible"];
} };
(r$215[0] = (SmlPrims.chk_ovf_i32(r$215[0] + 1)),0);
return s$214;
};
var fix$441 = {};
fix$441.$range = function(v$109,v$110){return function(p$100){return (v$109 > v$110)?true:((p$100(v$109))?((fix$441.$range(SmlPrims.chk_ovf_i32(v$109 + 1),v$110))(p$100)):false);
};
};
utest$0utest$1.range$93 = fix$441.$range;
utest$0utest$1.checkrange$111 = function(bounds$114){var v$325 = utest$0utest$1.range$93(bounds$114[0],bounds$114[1]);
return function(x$222){var b$427 = v$325(x$222);
var s$428 = b$427?"OK":"WRONG";
var r$429;
switch (s$428) { case "OK": {r$429 = okCount$55;
 break; }case "WRONG": {r$429 = wrongCount$54;
 break; }case "EXN": {r$429 = exnCount$56;
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"Utest.impossible"];
} };
(r$429[0] = (SmlPrims.chk_ovf_i32(r$429[0] + 1)),0);
return s$428;
};
};
utest$0utest$1.tst0$115 = function(s$118,s$$121){return basis$0General$1.print$163(((s$118 + "    ") + s$$121) + "\n");
};
utest$0utest$1.tst$122 = function(s$125,b$128){var s$$231;
var s$236 = b$128?"OK":"WRONG";
var r$237;
switch (s$236) { case "OK": {r$237 = okCount$55;
 break; }case "WRONG": {r$237 = wrongCount$54;
 break; }case "EXN": {r$237 = exnCount$56;
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"Utest.impossible"];
} };
(r$237[0] = (SmlPrims.chk_ovf_i32(r$237[0] + 1)),0);
s$$231 = s$236;
return basis$0General$1.print$163(((s$125 + "    ") + s$$231) + "\n");
};
utest$0utest$1.tst$$129 = function(s$132,f$135){var s$$240;
var s$245;
try {s$245 = ((f$135(0))?"OK":"WRONG");
} catch(v$442) {s$245 = ((function(v$246){return "EXN";
})(v$442));
};
var r$247;
switch (s$245) { case "OK": {r$247 = okCount$55;
 break; }case "WRONG": {r$247 = wrongCount$54;
 break; }case "EXN": {r$247 = exnCount$56;
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"Utest.impossible"];
} };
(r$247[0] = (SmlPrims.chk_ovf_i32(r$247[0] + 1)),0);
s$$240 = s$245;
return basis$0General$1.print$163(((s$132 + "    ") + s$$240) + "\n");
};
utest$0utest$1.tstrange$136 = function(s$139,bounds$142){var v$351 = utest$0utest$1.range$93(bounds$142[0],bounds$142[1]);
return function(x$252){var b$434 = v$351(x$252);
var s$$435;
var s$436 = b$434?"OK":"WRONG";
var r$437;
switch (s$436) { case "OK": {r$437 = okCount$55;
 break; }case "WRONG": {r$437 = wrongCount$54;
 break; }case "EXN": {r$437 = exnCount$56;
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"Utest.impossible"];
} };
(r$437[0] = (SmlPrims.chk_ovf_i32(r$437[0] + 1)),0);
s$$435 = s$436;
return basis$0General$1.print$163(((s$139 + "    ") + s$$435) + "\n");
};
};
var module$147 = ["unknown module"];
utest$0utest$1.tstStart$148 = function(s$151){basis$0General$1.print$163(("Testing " + (("'" + s$151) + "'")) + "...\n");
(wrongCount$54[0] = 0,0);
(okCount$55[0] = 0,0);
(exnCount$56[0] = 0,0);
return (module$147[0] = s$151,0);
};
utest$0utest$1.tstEnd$170 = function(v$172){if ((wrongCount$54[0] == 0)?(exnCount$56[0] == 0):false) {return basis$0General$1.print$163((("Succesfully tested " + (("'" + module$147[0]) + "'")) + ":\n") + ((((" OK: " + (basis$0Int32$1.toString$458(okCount$55[0]))) + "\n") + ((" WRONG: " + (basis$0Int32$1.toString$458(wrongCount$54[0]))) + "\n")) + ((" EXN: " + (basis$0Int32$1.toString$458(exnCount$56[0]))) + "\n")));
} else {return basis$0General$1.print$163((("Failed test of " + (("'" + module$147[0]) + "'")) + ":\n") + ((((" OK: " + (basis$0Int32$1.toString$458(okCount$55[0]))) + "\n") + ((" WRONG: " + (basis$0Int32$1.toString$458(wrongCount$54[0]))) + "\n")) + ((" EXN: " + (basis$0Int32$1.toString$458(exnCount$56[0]))) + "\n")));
};
};
return 0;
})();