if ((typeof(rwp$0Rwp$1)) == "undefined") {rwp$0Rwp$1 = {};
};
(function(){rwp$0Rwp$1.eq_kind$1153 = function(v$1155,v$1156){switch (v$1155) { case 0: {switch (v$1156) { case 0: {return true;
 break; }default: {return false;
} };
 break; }case 1: {switch (v$1156) { case 1: {return true;
 break; }default: {return false;
} };
 break; } };
};
rwp$0Rwp$1.empty$66 = function(f$69){return [f$69,null];
};
var en$SAME$72 = new String("SAME");
var exn$SAME$72 = [en$SAME$72];
rwp$0Rwp$1.put$108 = function(t$113){var v$122 = t$113[1];
var v$123 = t$113[0];
return function(v$116){try {var t$2545 = v$123;
var t$2544;
var fix$2543 = {};
fix$2543.$insert = function(v$2429,v$2457){if (v$2429 == null) {return [v$2457,null];
} else {var v$2430 = v$2429;
var v$2431 = v$2430[0];
var v$2432 = v$2430[1];
if ((v$123(v$2457)) < (v$123(v$2431))) {return [v$2457,v$2429];
} else {if ((v$123(v$2431)) < (v$123(v$2457))) {return [v$2431,fix$2543.$insert(v$2432,v$2457)];
} else {throw exn$SAME$72;
};
};
};
};
var insert$2427 = fix$2543.$insert;
t$2544 = (insert$2427(v$122,v$116));
return [t$2545,t$2544];
} catch(v$2542) {return (function(SAME$121){var t$2546 = SAME$121;
if (t$2546[0] == en$SAME$72) {return t$113;
} else {throw SAME$121;
};
})(v$2542);
};
};
};
rwp$0Rwp$1.get$124 = function(v$2458,v$135){if (v$135 == null) {return [1];
} else {var v$138 = v$135;
return [0,[v$138[0],[v$2458,v$138[1]]]];
};
};
var c$142 = [0];
var c$155 = [1];
var h$160 = [[function(v$163){return v$163[1];
},null]];
var fix$2547 = {};
fix$2547.$eval = function(v$215){lab$eval: while (true) {var v$220;
var v$1309;
var v$1310 = h$160[0];
var v$1311 = v$1310[1];
if (v$1311 == null) {v$1309 = [1];
} else {var v$1312 = v$1311;
v$1309 = [0,[v$1312[0],[v$1310[0],v$1312[1]]]];
};
switch (v$1309[0]) { case 0: {var v$1313 = v$1309[1];
v$220 = [[0,v$1313[0]],(h$160[0] = v$1313[1],0)][0];
 break; }default: {v$220 = [1];
} };
switch (v$220[0]) { case 1: {return 0;
 break; }default: {var v$227 = v$220[1];
v$227[0](0);
var t$2548 = 0;
var v$215 = t$2548;
continue lab$eval;
} };
};
};
var eval$213 = fix$2547.$eval;
var newValue$236 = function(v$1158,b$239){var v$244 = b$239[0];
switch (v$244[0]) { case 0: {var v$255 = v$244[1];
return function(v$248){var t$2549;
var v$2065 = v$255[0];
t$2549 = (v$1158([v$248,v$2065]));
if (t$2549) {return 0;
} else {(v$255[0] = v$248,0);
var p$1325 = [function(v$1333){var v$1334 = b$239[0];
switch (v$1334[0]) { case 0: {var v$1335 = v$1334[1];
var v$1336 = v$1335[0];
var fix$2550 = {};
fix$2550.$app = function(v$1338){lab$app: while (true) {if (v$1338 == null) {return 0;
} else {var v$1339 = v$1338;
var v$1340 = v$1339[0];
var v$1341 = v$1339[1];
var v$1343 = v$1340[1];
v$1343(v$1336);
var t$2551 = v$1341;
var v$1338 = t$2551;
continue lab$app;
};
};
};
var app$1337 = fix$2550.$app;
return app$1337(basis$0List$1.rev$682(b$239[1][0]));
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"pack.comp.NONE"];
} };
},b$239[2]];
var t$2558 = h$160;
var t$2552;
var t$1327 = h$160[0];
var v$1328 = t$1327[1];
var v$1329 = t$1327[0];
try {var t$2556 = v$1329;
var t$2555;
var fix$2554 = {};
fix$2554.$insert = function(v$2437,v$2459){if (v$2437 == null) {return [v$2459,null];
} else {var v$2438 = v$2437;
var v$2439 = v$2438[0];
var v$2440 = v$2438[1];
if ((v$1329(v$2459)) < (v$1329(v$2439))) {return [v$2459,v$2437];
} else {if ((v$1329(v$2439)) < (v$1329(v$2459))) {return [v$2439,fix$2554.$insert(v$2440,v$2459)];
} else {throw exn$SAME$72;
};
};
};
};
var insert$2435 = fix$2554.$insert;
t$2555 = (insert$2435(v$1328,p$1325));
t$2552 = [t$2556,t$2555];
} catch(v$2553) {t$2552 = ((function(SAME$1331){var t$2557 = SAME$1331;
if (t$2557[0] == en$SAME$72) {return t$1327;
} else {throw SAME$1331;
};
})(v$2553));
};
return (t$2558[0] = t$2552,0);
};
};
 break; }default: {return function(v$258){var l$1345 = basis$0List$1.rev$682(b$239[1][0]);
var fix$2559 = {};
fix$2559.$app = function(v$1347){lab$app: while (true) {if (v$1347 == null) {return 0;
} else {var v$1348 = v$1347;
var v$1349 = v$1348[0];
var v$1350 = v$1348[1];
var v$2322 = v$1349[1];
v$2322(v$258);
var t$2560 = v$1350;
var v$1347 = t$2560;
continue lab$app;
};
};
};
var app$1346 = fix$2559.$app;
return app$1346(l$1345);
};
} };
};
rwp$0Rwp$1.current$271 = function(v$1159,b$274){var v$279 = b$274[0];
switch (v$279[0]) { case 0: {return v$279[1][0];
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"rwp.current.impossible"];
} };
};
rwp$0Rwp$1.addListener$286 = function(v$2460,v$293,v$2461){return function(f$292){return (v$293[0] = [[0,f$292],v$293[0]],0);
};
};
rwp$0Rwp$1.send$348 = function(v$1160,b$351,v$354){return (newValue$236(v$1160,b$351))(v$354);
};
var pairT$425 = function(v$1165,v$1166,v$429){var v$487 = v$429[0];
var v$488 = v$429[1];
var v$2072 = v$487[0];
var v$2073 = v$488[0];
switch (v$2072[0]) { case 0: {switch (v$2073[0]) { case 0: {var v$454 = v$2072[1];
var v$455 = v$2073[1];
var e$443;
var init$1393 = [0,[v$454[0],v$455[0]]];
var v$1394 = [c$142[0],(c$142[0] = (SmlPrims.chk_ovf_i32(c$142[0] + 1)),0)][0];
var v$1396 = [null];
e$443 = [basis$0Option$1.map$69(function(v$1397){return [v$1397];
},init$1393),v$1396,v$1394];
var v$1401 = v$487[1];
(v$1401[0] = [[0,function(v$2323){return (newValue$236(function(v$2324){if (v$1166([v$2324[0][0],v$2324[1][0]])) {return v$1165([v$2324[0][1],v$2324[1][1]]);
} else {return false;
};
},e$443))([v$2323,v$455[0]]);
}],v$1401[0]],0);
var v$1406 = v$488[1];
(v$1406[0] = [[0,function(v$2325){return (newValue$236(function(v$2326){if (v$1166([v$2326[0][0],v$2326[1][0]])) {return v$1165([v$2326[0][1],v$2326[1][1]]);
} else {return false;
};
},e$443))([v$454[0],v$2325]);
}],v$1406[0]],0);
return e$443;
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"pairT.impossible"];
} };
 break; }default: {switch (v$2073[0]) { case 1: {var e1s$458 = [null];
var e2s$459 = [null];
var e$460;
var init$1412 = [1];
var v$1413 = [c$142[0],(c$142[0] = (SmlPrims.chk_ovf_i32(c$142[0] + 1)),0)][0];
var v$1415 = [null];
e$460 = [basis$0Option$1.map$69(function(v$1416){return [v$1416];
},init$1412),v$1415,v$1413];
var v$1418 = v$487[1];
(v$1418[0] = [[0,function(v$2327){var v$2328;
if (e2s$459[0] == null) {v$2328 = [1];
} else {var v$2329 = e2s$459[0];
v$2328 = [[0,v$2329[0]],(e2s$459[0] = v$2329[1],0)][0];
};
switch (v$2328[0]) { case 1: {return (e1s$458[0] = (basis$0List$1.rev$682([v$2327,basis$0List$1.rev$682(e1s$458[0])])),0);
 break; }default: {var v$2330 = v$2328[1];
return (newValue$236(function(v$2331){if (v$1166([v$2331[0][0],v$2331[1][0]])) {return v$1165([v$2331[0][1],v$2331[1][1]]);
} else {return false;
};
},e$460))([v$2327,v$2330]);
} };
}],v$1418[0]],0);
var v$1430 = v$488[1];
(v$1430[0] = [[0,function(v$2332){var v$2333;
if (e1s$458[0] == null) {v$2333 = [1];
} else {var v$2334 = e1s$458[0];
v$2333 = [[0,v$2334[0]],(e1s$458[0] = v$2334[1],0)][0];
};
switch (v$2333[0]) { case 1: {return (e2s$459[0] = (basis$0List$1.rev$682([v$2332,basis$0List$1.rev$682(e2s$459[0])])),0);
 break; }default: {var v$2335 = v$2333[1];
return (newValue$236(function(v$2336){if (v$1166([v$2336[0][0],v$2336[1][0]])) {return v$1165([v$2336[0][1],v$2336[1][1]]);
} else {return false;
};
},e$460))([v$2335,v$2332]);
} };
}],v$1430[0]],0);
return e$460;
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"pairT.impossible"];
} };
} };
};
rwp$0Rwp$1.pair$489 = function(v$1173,v$1174){return function(v$2466){return pairT$425(v$1173,v$1174,v$2466);
};
};
rwp$0Rwp$1.tup3$490 = function(v$1175,v$1176,v$1177,v$495){var v$537 = v$495[0];
var v$538 = v$495[1];
var v$539 = v$495[2];
var v$2094 = v$537[0];
var v$2095 = v$538[0];
var v$2096 = v$539[0];
switch (v$2094[0]) { case 0: {switch (v$2095[0]) { case 0: {switch (v$2096[0]) { case 0: {var v$521 = v$2094[1];
var v$522 = v$2095[1];
var v$523 = v$2096[1];
var e$511;
var init$1443 = [0,[v$521[0],v$522[0],v$523[0]]];
var v$1444 = [c$142[0],(c$142[0] = (SmlPrims.chk_ovf_i32(c$142[0] + 1)),0)][0];
var v$1446 = [null];
e$511 = [basis$0Option$1.map$69(function(v$1447){return [v$1447];
},init$1443),v$1446,v$1444];
var v$1452 = v$537[1];
(v$1452[0] = [[0,function(v$2337){return (newValue$236(function(v$2338){if (v$1177([v$2338[0][0],v$2338[1][0]])) {if (v$1176([v$2338[0][1],v$2338[1][1]])) {return v$1175([v$2338[0][2],v$2338[1][2]]);
} else {return false;
};
} else {return false;
};
},e$511))([v$2337,v$522[0],v$523[0]]);
}],v$1452[0]],0);
var v$1458 = v$538[1];
(v$1458[0] = [[0,function(v$2339){return (newValue$236(function(v$2340){if (v$1177([v$2340[0][0],v$2340[1][0]])) {if (v$1176([v$2340[0][1],v$2340[1][1]])) {return v$1175([v$2340[0][2],v$2340[1][2]]);
} else {return false;
};
} else {return false;
};
},e$511))([v$521[0],v$2339,v$523[0]]);
}],v$1458[0]],0);
var v$1464 = v$539[1];
(v$1464[0] = [[0,function(v$2341){return (newValue$236(function(v$2342){if (v$1177([v$2342[0][0],v$2342[1][0]])) {if (v$1176([v$2342[0][1],v$2342[1][1]])) {return v$1175([v$2342[0][2],v$2342[1][2]]);
} else {return false;
};
} else {return false;
};
},e$511))([v$521[0],v$522[0],v$2341]);
}],v$1464[0]],0);
return e$511;
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"tup3.impossible"];
} };
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"tup3.impossible"];
} };
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"tup3.impossible"];
} };
};
rwp$0Rwp$1.merge$540 = function(v$1182,v$544){var v$550 = v$544[0];
var v$551 = v$544[1];
var e$545;
var init$1473 = [1];
var v$1474 = [c$142[0],(c$142[0] = (SmlPrims.chk_ovf_i32(c$142[0] + 1)),0)][0];
var v$1476 = [null];
e$545 = [basis$0Option$1.map$69(function(v$1477){return [v$1477];
},init$1473),v$1476,v$1474];
var v$1479 = v$550[1];
(v$1479[0] = [[0,newValue$236(v$1182,e$545)],v$1479[0]],0);
var v$1483 = v$551[1];
(v$1483[0] = [[0,newValue$236(v$1182,e$545)],v$1483[0]],0);
return e$545;
};
rwp$0Rwp$1.insertDOM_elem$552 = function(e$555,b$558){var v$563 = b$558[0];
switch (v$563[0]) { case 0: {var v$567 = v$563[1];
var v$559 = v$567[0];
(function(e,s){e.innerHTML = s;})(e$555,v$559);
var v$1489 = b$558[1];
return (v$1489[0] = [[0,function(s$2343){return (function(e,s){e.innerHTML = s;})(e$555,s$2343);
}],v$1489[0]],0);
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"insertDOM_elem impossible"];
} };
};
rwp$0Rwp$1.insertDOM$572 = function(id$575,b$578){var v$583 = (function(d,id){return SmlPrims.option(d.getElementById(id));})(js$0Js$1.document$88,id$575);
switch (v$583[0]) { case 0: {var v$585 = v$583[1];
var v$1498 = b$578[0];
switch (v$1498[0]) { case 0: {var v$1499 = v$1498[1];
var v$1500 = v$1499[0];
(function(e,s){e.innerHTML = s;})(v$585,v$1500);
var v$1504 = b$578[1];
return (v$1504[0] = [[0,function(s$1509){return (function(e,s){e.innerHTML = s;})(v$585,s$1509);
}],v$1504[0]],0);
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"insertDOM_elem impossible"];
} };
 break; }default: {throw [basis$0Initial$1.en$Fail$54,("insertDOM: element with id=" + id$575) + " not in dom"];
} };
};
rwp$0Rwp$1.setStyle_elem$586 = function(e$589,v$593){var v$610 = v$593[0];
var v$611 = v$593[1];
var v$598 = v$611[0];
switch (v$598[0]) { case 0: {var v$605 = v$598[1];
var v$594 = v$605[0];
(function(fp,s,v){fp[s] = v;})((function(fp,s){return fp[s];})(e$589,"style"),v$610,v$594);
var v$1520 = v$611[1];
return (v$1520[0] = [[0,function(v$2344){return (function(fp,s,v){fp[s] = v;})((function(fp,s){return fp[s];})(e$589,"style"),v$610,v$2344);
}],v$1520[0]],0);
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"setStyle_elem impossible"];
} };
};
rwp$0Rwp$1.setAttr_elem$612 = function(e$615,v$619){var v$636 = v$619[0];
var v$637 = v$619[1];
var v$624 = v$637[0];
switch (v$624[0]) { case 0: {var v$631 = v$624[1];
var v$620 = v$631[0];
(function(e,a,b){return e.setAttribute(a,b);})(e$615,v$636,v$620);
var v$1531 = v$637[1];
return (v$1531[0] = [[0,function(v$2345){return (function(e,a,b){return e.setAttribute(a,b);})(e$615,v$636,v$2345);
}],v$1531[0]],0);
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"setAttr_elem impossible"];
} };
};
rwp$0Rwp$1.setStyle$638 = function(id$641,v$645){var v$653 = v$645[0];
var v$654 = v$645[1];
var v$650 = (function(d,id){return SmlPrims.option(d.getElementById(id));})(js$0Js$1.document$88,id$641);
switch (v$650[0]) { case 0: {var v$652 = v$650[1];
var v$2350 = v$654[0];
switch (v$2350[0]) { case 0: {var v$2351 = v$2350[1];
var v$2352 = v$2351[0];
(function(fp,s,v){fp[s] = v;})((function(fp,s){return fp[s];})(v$652,"style"),v$653,v$2352);
var v$2353 = v$654[1];
return (v$2353[0] = [[0,function(v$2354){return (function(fp,s,v){fp[s] = v;})((function(fp,s){return fp[s];})(v$652,"style"),v$653,v$2354);
}],v$2353[0]],0);
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"setStyle_elem impossible"];
} };
 break; }default: {throw [basis$0Initial$1.en$Fail$54,("setStyle: element with id=" + id$641) + " not in dom"];
} };
};
rwp$0Rwp$1.setAttr$655 = function(id$658,v$662){var v$670 = v$662[0];
var v$671 = v$662[1];
var v$667 = (function(d,id){return SmlPrims.option(d.getElementById(id));})(js$0Js$1.document$88,id$658);
switch (v$667[0]) { case 0: {var v$669 = v$667[1];
var v$1550 = v$671[0];
switch (v$1550[0]) { case 0: {var v$1551 = v$1550[1];
var v$1552 = v$1551[0];
(function(e,a,b){return e.setAttribute(a,b);})(v$669,v$670,v$1552);
var v$1557 = v$671[1];
return (v$1557[0] = [[0,function(v$1564){return (function(e,a,b){return e.setAttribute(a,b);})(v$669,v$670,v$1564);
}],v$1557[0]],0);
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"setAttr_elem impossible"];
} };
 break; }default: {throw [basis$0Initial$1.en$Fail$54,("setAttr: element with id=" + id$658) + " not in dom"];
} };
};
rwp$0Rwp$1.delay$672 = function(v$1183,ms$675,b$678){var b$$679;
var init$1571;
var v$684 = b$678[0];
switch (v$684[0]) { case 0: {var v$686 = v$684[1];
var v$680 = v$686[0];
init$1571 = [0,v$680];
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"delay.impossible"];
} };
var v$1572 = [c$142[0],(c$142[0] = (SmlPrims.chk_ovf_i32(c$142[0] + 1)),0)][0];
var v$1574 = [null];
b$$679 = [basis$0Option$1.map$69(function(v$1575){return [v$1575];
},init$1571),v$1574,v$1572];
var v$1577 = b$678[1];
(v$1577[0] = [[0,function(v$2355){(function(i,f){return setTimeout(f,i);})(ms$675,function(v$2356){(newValue$236(v$1183,b$$679))(v$2355);
return eval$213(0);
});
return 0;
}],v$1577[0]],0);
return b$$679;
};
rwp$0Rwp$1.calm$702 = function(v$1184,ms$705,b$708){var b$$709;
var init$1583;
var v$714 = b$708[0];
switch (v$714[0]) { case 0: {var v$716 = v$714[1];
var v$710 = v$716[0];
init$1583 = [0,v$710];
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"calm.impossible"];
} };
var v$1584 = [c$142[0],(c$142[0] = (SmlPrims.chk_ovf_i32(c$142[0] + 1)),0)][0];
var v$1586 = [null];
b$$709 = [basis$0Option$1.map$69(function(v$1587){return [v$1587];
},init$1583),v$1586,v$1584];
var c$721 = [0];
var v$1594 = b$708[1];
(v$1594[0] = [[0,function(v$2357){(c$721[0] = (SmlPrims.chk_ovf_i32(c$721[0] + 1)),0);
(function(i,f){return setTimeout(f,i);})(ms$705,function(v$2358){var t$2561;
(c$721[0] = (SmlPrims.chk_ovf_i32(c$721[0] - 1)),0);
t$2561 = (c$721[0] == 0);
if (t$2561) {(newValue$236(v$1184,b$$709))(v$2357);
return eval$213(0);
} else {return 0;
};
});
return 0;
}],v$1594[0]],0);
return b$$709;
};
rwp$0Rwp$1.textField_elem$749 = function(e$752){var b$753;
var init$1604 = [0,(function(e){return e.value;})(e$752)];
var v$1605 = [c$142[0],(c$142[0] = (SmlPrims.chk_ovf_i32(c$142[0] + 1)),0)][0];
var v$1607 = [null];
b$753 = [basis$0Option$1.map$69(function(v$1608){return [v$1608];
},init$1604),v$1607,v$1605];
js$0Js$1.installEventHandler$197(e$752,2,function(v$1611){(newValue$236(function(v$1612){return v$1612[0] == v$1612[1];
},b$753))((function(e){return e.value;})(e$752));
eval$213(0);
return true;
});
return b$753;
};
rwp$0Rwp$1.textField$763 = function(id$766){var v$771 = (function(d,id){return SmlPrims.option(d.getElementById(id));})(js$0Js$1.document$88,id$766);
switch (v$771[0]) { case 0: {var v$773 = v$771[1];
var b$2360;
var init$2361 = [0,(function(e){return e.value;})(v$773)];
var v$2362 = [c$142[0],(c$142[0] = (SmlPrims.chk_ovf_i32(c$142[0] + 1)),0)][0];
var v$2363 = [null];
b$2360 = [basis$0Option$1.map$69(function(v$2364){return [v$2364];
},init$2361),v$2363,v$2362];
js$0Js$1.installEventHandler$197(v$773,2,function(v$2365){(newValue$236(function(v$2366){return v$2366[0] == v$2366[1];
},b$2360))((function(e){return e.value;})(v$773));
eval$213(0);
return true;
});
return b$2360;
 break; }default: {throw [basis$0Initial$1.en$Fail$54,("textField: element with id=" + id$766) + " not in dom"];
} };
};
rwp$0Rwp$1.mouseOver_elem$774 = function(e$777){var b$778;
var init$1621 = [0,false];
var v$1622 = [c$142[0],(c$142[0] = (SmlPrims.chk_ovf_i32(c$142[0] + 1)),0)][0];
var v$1624 = [null];
b$778 = [basis$0Option$1.map$69(function(v$1625){return [v$1625];
},init$1621),v$1624,v$1622];
js$0Js$1.installEventHandler$197(e$777,0,function(v$1627){(newValue$236(function(v$1628){return v$1628[0] == v$1628[1];
},b$778))(true);
eval$213(0);
return true;
});
js$0Js$1.installEventHandler$197(e$777,1,function(v$1630){(newValue$236(function(v$1631){return v$1631[0] == v$1631[1];
},b$778))(false);
eval$213(0);
return true;
});
return b$778;
};
rwp$0Rwp$1.mouseOver$793 = function(id$796){var v$801 = (function(d,id){return SmlPrims.option(d.getElementById(id));})(js$0Js$1.document$88,id$796);
switch (v$801[0]) { case 0: {var v$803 = v$801[1];
return rwp$0Rwp$1.mouseOver_elem$774(v$803);
 break; }default: {throw [basis$0Initial$1.en$Fail$54,("mouseOver: element with id=" + id$796) + " not in dom"];
} };
};
rwp$0Rwp$1.mouse_elem$804 = function(e$807){var b$808;
var init$1640 = [0,[0,0]];
var v$1641 = [c$142[0],(c$142[0] = (SmlPrims.chk_ovf_i32(c$142[0] + 1)),0)][0];
var v$1643 = [null];
b$808 = [basis$0Option$1.map$69(function(v$1644){return [v$1644];
},init$1640),v$1643,v$1641];
(js$0Js$1.onMouseMoveElem$340(e$807))(function(v$813){(newValue$236(function(v$1192){return (v$1192[0][0] == v$1192[1][0])?(v$1192[0][1] == v$1192[1][1]):false;
},b$808))(v$813);
return eval$213(0);
});
return b$808;
};
rwp$0Rwp$1.mouse_doc$816 = function(d$819){var b$820;
var init$1646 = [0,[0,0]];
var v$1647 = [c$142[0],(c$142[0] = (SmlPrims.chk_ovf_i32(c$142[0] + 1)),0)][0];
var v$1649 = [null];
b$820 = [basis$0Option$1.map$69(function(v$1650){return [v$1650];
},init$1646),v$1649,v$1647];
(js$0Js$1.onMouseMove$276(d$819))(function(v$825){(newValue$236(function(v$1198){return (v$1198[0][0] == v$1198[1][0])?(v$1198[0][1] == v$1198[1][1]):false;
},b$820))(v$825);
return eval$213(0);
});
return b$820;
};
rwp$0Rwp$1.mouse$828 = function(v$830){var b$2368;
var init$2369 = [0,[0,0]];
var v$2370 = [c$142[0],(c$142[0] = (SmlPrims.chk_ovf_i32(c$142[0] + 1)),0)][0];
var v$2371 = [null];
b$2368 = [basis$0Option$1.map$69(function(v$2372){return [v$2372];
},init$2369),v$2371,v$2370];
(js$0Js$1.onMouseMove$276(js$0Js$1.document$88))(function(v$2373){(newValue$236(function(v$2374){return (v$2374[0][0] == v$2374[1][0])?(v$2374[0][1] == v$2374[1][1]):false;
},b$2368))(v$2373);
return eval$213(0);
});
return b$2368;
};
rwp$0Rwp$1.click_elem$831 = function(v$1201,e$834,a$837){var t$838;
var init$1652 = [1];
var v$1653 = [c$142[0],(c$142[0] = (SmlPrims.chk_ovf_i32(c$142[0] + 1)),0)][0];
var v$1655 = [null];
t$838 = [basis$0Option$1.map$69(function(v$1656){return [v$1656];
},init$1652),v$1655,v$1653];
js$0Js$1.installEventHandler$197(e$834,4,function(v$842){(newValue$236(v$1201,t$838))(a$837);
eval$213(0);
return true;
});
return t$838;
};
rwp$0Rwp$1.click$847 = function(v$1202,id$850,a$853){var v$858 = (function(d,id){return SmlPrims.option(d.getElementById(id));})(js$0Js$1.document$88,id$850);
switch (v$858[0]) { case 0: {var v$860 = v$858[1];
var t$1662;
var init$1663 = [1];
var v$1664 = [c$142[0],(c$142[0] = (SmlPrims.chk_ovf_i32(c$142[0] + 1)),0)][0];
var v$1666 = [null];
t$1662 = [basis$0Option$1.map$69(function(v$1667){return [v$1667];
},init$1663),v$1666,v$1664];
js$0Js$1.installEventHandler$197(v$860,4,function(v$1668){(newValue$236(v$1202,t$1662))(a$853);
eval$213(0);
return true;
});
return t$1662;
 break; }default: {throw [basis$0Initial$1.en$Fail$54,("click: element with id=" + id$850) + " not in dom"];
} };
};
rwp$0Rwp$1.changes$861 = function(v$1203,b$864){var t$865;
var init$1675 = [1];
var v$1676 = [c$142[0],(c$142[0] = (SmlPrims.chk_ovf_i32(c$142[0] + 1)),0)][0];
var v$1678 = [null];
t$865 = [basis$0Option$1.map$69(function(v$1679){return [v$1679];
},init$1675),v$1678,v$1676];
var v$1681 = b$864[1];
(v$1681[0] = [[0,newValue$236(v$1203,t$865)],v$1681[0]],0);
return t$865;
};
rwp$0Rwp$1.hold$868 = function(v$1204,a$871,e$874){var b$875;
var init$1685 = [0,a$871];
var v$1686 = [c$142[0],(c$142[0] = (SmlPrims.chk_ovf_i32(c$142[0] + 1)),0)][0];
var v$1688 = [null];
b$875 = [basis$0Option$1.map$69(function(v$1689){return [v$1689];
},init$1685),v$1688,v$1686];
var v$1691 = e$874[1];
(v$1691[0] = [[0,newValue$236(v$1204,b$875)],v$1691[0]],0);
return b$875;
};
rwp$0Rwp$1.fold$878 = function(v$1205,v$1206,f$881,x$884,a$887){var t$888 = [x$884];
var es$889;
var init$1695 = [1];
var v$1696 = [c$142[0],(c$142[0] = (SmlPrims.chk_ovf_i32(c$142[0] + 1)),0)][0];
var v$1698 = [null];
es$889 = [basis$0Option$1.map$69(function(v$1699){return [v$1699];
},init$1695),v$1698,v$1696];
var v$1701 = a$887[1];
(v$1701[0] = [[0,function(v$2375){var r$2376 = f$881([v$2375,t$888[0]]);
(t$888[0] = r$2376,0);
return (newValue$236(v$1206,es$889))(r$2376);
}],v$1701[0]],0);
return es$889;
};
rwp$0Rwp$1.empty$898 = function(v$1207,v$900){var init$1707 = [1];
var v$1708 = [c$142[0],(c$142[0] = (SmlPrims.chk_ovf_i32(c$142[0] + 1)),0)][0];
var v$1710 = [null];
return [basis$0Option$1.map$69(function(v$1711){return [v$1711];
},init$1707),v$1710,v$1708];
};
rwp$0Rwp$1.const$901 = function(v$1208,a$904){var init$1713 = [0,a$904];
var v$1714 = [c$142[0],(c$142[0] = (SmlPrims.chk_ovf_i32(c$142[0] + 1)),0)][0];
var v$1716 = [null];
return [basis$0Option$1.map$69(function(v$1717){return [v$1717];
},init$1713),v$1716,v$1714];
};
rwp$0Rwp$1.poll$905 = function(v$1209,f$908,ms$911){var b$912;
var init$1719 = [0,f$908(0)];
var v$1720 = [c$142[0],(c$142[0] = (SmlPrims.chk_ovf_i32(c$142[0] + 1)),0)][0];
var v$1722 = [null];
b$912 = [basis$0Option$1.map$69(function(v$1723){return [v$1723];
},init$1719),v$1722,v$1720];
(function(i,f){return setInterval(f,i);})(ms$911,function(v$915){(newValue$236(v$1209,b$912))(f$908(v$915));
return eval$213(0);
});
return b$912;
};
rwp$0Rwp$1.timer$918 = function(m$921){var b$1729;
var init$1730 = [0,SmlPrims.getrealtime()];
var v$1731 = [c$142[0],(c$142[0] = (SmlPrims.chk_ovf_i32(c$142[0] + 1)),0)][0];
var v$1733 = [null];
b$1729 = [basis$0Option$1.map$69(function(v$1734){return [v$1734];
},init$1730),v$1733,v$1731];
(function(i,f){return setInterval(f,i);})(m$921,function(v$1737){(newValue$236(function(v$2378){return (v$2378[0][0] == v$2378[1][0])?(v$2378[0][1] == v$2378[1][1]):false;
},b$1729))(SmlPrims.getrealtime());
return eval$213(0);
});
return b$1729;
};
var addListener$$$926 = function(v$1213,b$929,f$932){var li$933;
var v$1740 = b$929[1];
var lid$1742 = [c$155[0],(c$155[0] = (SmlPrims.chk_ovf_i32(c$155[0] + 1)),0)][0];
(v$1740[0] = [[lid$1742,f$932],v$1740[0]],0);
li$933 = lid$1742;
return function(v$935){var v$1746 = b$929[1];
var fix$2562 = {};
fix$2562.$remove = function(v$1749){if (v$1749 == null) {return [null,false];
} else {var v$1750 = v$1749;
var v$1751 = v$1750[0];
var v$1752 = v$1751[0];
var v$1753 = v$1750[1];
if (v$1752 == li$933) {return [v$1753,true];
} else {var v$1754 = fix$2562.$remove(v$1753);
return [[v$1751,v$1754[0]],v$1754[1]];
};
};
};
var remove$1748 = fix$2562.$remove;
var v$1755 = remove$1748(v$1746[0]);
var v$1756 = v$1755[0];
var v$1757 = v$1755[1];
v$1757?(v$1746[0] = v$1756,0):0;
return v$1757;
};
};
rwp$0Rwp$1.flatten$936 = function(v$1214,a$939){var v$1761 = a$939[0];
switch (v$1761[0]) { case 0: {v$1761[1][0];
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"rwp.current.impossible"];
} };
var n$941;
var init$1763;
var t$2563;
var v$1773 = a$939[0];
var b$1769;
switch (v$1773[0]) { case 0: {b$1769 = v$1773[1][0];
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"rwp.current.impossible"];
} };
var v$1770 = b$1769[0];
switch (v$1770[0]) { case 0: {t$2563 = v$1770[1][0];
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"rwp.current.impossible"];
} };
init$1763 = [0,t$2563];
var v$1764 = [c$142[0],(c$142[0] = (SmlPrims.chk_ovf_i32(c$142[0] + 1)),0)][0];
var v$1766 = [null];
n$941 = [basis$0Option$1.map$69(function(v$1767){return [v$1767];
},init$1763),v$1766,v$1764];
var remLi$942;
var t$2567;
var t$2566 = addListener$$$926;
var t$2565 = v$1214;
var t$2564;
var v$1776 = a$939[0];
switch (v$1776[0]) { case 0: {t$2564 = v$1776[1][0];
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"rwp.current.impossible"];
} };
t$2567 = (t$2566(t$2565,t$2564,newValue$236(v$1214,n$941)));
remLi$942 = [t$2567];
var v$1778 = a$939[1];
(v$1778[0] = [[0,function(b$2380){remLi$942[0](0);
(remLi$942[0] = (addListener$$$926(v$1214,b$2380,newValue$236(v$1214,n$941))),0);
var t$2569 = newValue$236(v$1214,n$941);
var t$2568;
var v$2381 = b$2380[0];
switch (v$2381[0]) { case 0: {t$2568 = v$2381[1][0];
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"rwp.current.impossible"];
} };
return t$2569(t$2568);
}],v$1778[0]],0);
return n$941;
};
rwp$0Rwp$1.arr$952 = function(v$1227,v$1228,f$955,b0$958){var b$959;
var init$1787;
var v$964 = b0$958[0];
switch (v$964[0]) { case 0: {var v$966 = v$964[1];
var v$960 = v$966[0];
init$1787 = [0,f$955(v$960)];
 break; }default: {init$1787 = [1];
} };
var v$1788 = [c$142[0],(c$142[0] = (SmlPrims.chk_ovf_i32(c$142[0] + 1)),0)][0];
var v$1790 = [null];
b$959 = [basis$0Option$1.map$69(function(v$1791){return [v$1791];
},init$1787),v$1790,v$1788];
var v$1793 = b0$958[1];
var t$2575 = v$1793;
var t$2574;
var t$2573;
var t$2572;
var t$2571 = 0;
var t$2570;
var v$2235 = newValue$236(v$1228,b$959);
t$2570 = (function(x$1799){return v$2235(f$955(x$1799));
});
t$2572 = [t$2571,t$2570];
t$2573 = [t$2572,v$1793[0]];
t$2574 = t$2573;
(t$2575[0] = t$2574,0);
return b$959;
};
var fix$2576 = {};
fix$2576.$list = function(v$1229,v$976){if (v$976 == null) {var a$1801 = null;
var init$1802 = [0,a$1801];
var v$1803 = [c$142[0],(c$142[0] = (SmlPrims.chk_ovf_i32(c$142[0] + 1)),0)][0];
var v$1805 = [null];
return [basis$0Option$1.map$69(function(v$1806){return [v$1806];
},init$1802),v$1805,v$1803];
} else {var v$984 = v$976;
var v$985 = v$984[0];
var v$986 = v$984[1];
var t$2631 = rwp$0Rwp$1.arr$952;
var t$2630 = function(v$1230){if (v$1229([v$1230[0][0],v$1230[1][0]])) {var fix$2627 = {};
fix$2627.$eq_list = function(v$1818,v$1819){lab$eq_list: while (true) {if (v$1818 == null) {return (v$1819 == null)?true:false;
} else {if (v$1819 == null) {return false;
} else {var v$1820 = v$1818;
var v$1821 = v$1819;
if (v$1229([v$1820[0],v$1821[0]])) {var t$2628 = v$1820[1];
var t$2629 = v$1821[1];
var v$1818 = t$2628;
var v$1819 = t$2629;
continue lab$eq_list;
} else {return false;
};
};
};
};
};
var eq_list$1816 = fix$2627.$eq_list;
return eq_list$1816(v$1230[0][1],v$1230[1][1]);
} else {return false;
};
};
var t$2626;
var fix$2623 = {};
fix$2623.$eq_list = function(v$1826,v$1827){lab$eq_list: while (true) {if (v$1826 == null) {return (v$1827 == null)?true:false;
} else {if (v$1827 == null) {return false;
} else {var v$1828 = v$1826;
var v$1829 = v$1827;
if (v$1229([v$1828[0],v$1829[0]])) {var t$2624 = v$1828[1];
var t$2625 = v$1829[1];
var v$1826 = t$2624;
var v$1827 = t$2625;
continue lab$eq_list;
} else {return false;
};
};
};
};
};
var eq_list$1824 = fix$2623.$eq_list;
t$2626 = (function(v$2462){return eq_list$1824(v$2462[0],v$2462[1]);
});
var t$2622 = function(v$983){return v$983;
};
var t$2616;
var v$2469 = [v$985,fix$2576.$list(v$1229,v$986)];
var t$2621 = pairT$425;
var t$2620;
var fix$2617 = {};
fix$2617.$eq_list = function(v$2504,v$2505){lab$eq_list: while (true) {if (v$2504 == null) {return (v$2505 == null)?true:false;
} else {if (v$2505 == null) {return false;
} else {var v$2506 = v$2504;
var v$2507 = v$2505;
if (v$1229([v$2506[0],v$2507[0]])) {var t$2618 = v$2506[1];
var t$2619 = v$2507[1];
var v$2504 = t$2618;
var v$2505 = t$2619;
continue lab$eq_list;
} else {return false;
};
};
};
};
};
var eq_list$2503 = fix$2617.$eq_list;
t$2620 = (function(v$2508){return eq_list$2503(v$2508[0],v$2508[1]);
});
t$2616 = (t$2621(t$2620,v$1229,v$2469));
return t$2631(t$2630,t$2626,t$2622,t$2616);
};
};
rwp$0Rwp$1.list$973 = fix$2576.$list;
rwp$0Rwp$1.fst$987 = function(v$1231,v$1232,v$1233,f$990,p$993){var t$2596 = pairT$425;
var t$2595 = v$1232;
var t$2594 = v$1233;
var t$2593;
var t$2592;
var t$2591 = f$990;
var t$2584;
var v1opt$1844;
var v$1845 = p$993[0];
switch (v$1845[0]) { case 0: {var v$1846 = v$1845[1];
var v$1847 = v$1846[0][0];
v1opt$1844 = [0,v$1847];
 break; }default: {v1opt$1844 = [1];
} };
var e$1849;
var v$1850 = [c$142[0],(c$142[0] = (SmlPrims.chk_ovf_i32(c$142[0] + 1)),0)][0];
var v$1852 = [null];
e$1849 = [basis$0Option$1.map$69(function(v$1853){return [v$1853];
},v1opt$1844),v$1852,v$1850];
var v$1855 = p$993[1];
var t$2590 = v$1855;
var t$2589;
var t$2588;
var t$2587;
var t$2586 = 0;
var t$2585;
var v$2249 = newValue$236(v$1231,e$1849);
t$2585 = (function(x$1861){return v$2249(x$1861[0]);
});
t$2587 = [t$2586,t$2585];
t$2588 = [t$2587,v$1855[0]];
t$2589 = t$2588;
(t$2590[0] = t$2589,0);
t$2584 = e$1849;
t$2592 = (t$2591(t$2584));
var t$2577;
var v2opt$1866;
var v$1867 = p$993[0];
switch (v$1867[0]) { case 0: {var v$1868 = v$1867[1];
var v$1869 = v$1868[0][1];
v2opt$1866 = [0,v$1869];
 break; }default: {v2opt$1866 = [1];
} };
var e$1871;
var v$1872 = [c$142[0],(c$142[0] = (SmlPrims.chk_ovf_i32(c$142[0] + 1)),0)][0];
var v$1874 = [null];
e$1871 = [basis$0Option$1.map$69(function(v$1875){return [v$1875];
},v2opt$1866),v$1874,v$1872];
var v$1877 = p$993[1];
var t$2583 = v$1877;
var t$2582;
var t$2581;
var t$2580;
var t$2579 = 0;
var t$2578;
var v$2255 = newValue$236(v$1232,e$1871);
t$2578 = (function(x$1883){return v$2255(x$1883[1]);
});
t$2580 = [t$2579,t$2578];
t$2581 = [t$2580,v$1877[0]];
t$2582 = t$2581;
(t$2583[0] = t$2582,0);
t$2577 = e$1871;
t$2593 = [t$2592,t$2577];
return t$2596(t$2595,t$2594,t$2593);
};
rwp$0Rwp$1.s$lll$994 = function(v$999,v$1000){return function(x$1888){return v$1000(v$999(x$1888));
};
};
rwp$0Rwp$1.snd$1001 = function(v$1234,v$1235,v$1236,f$1004){return function(x$1895){var v$2523;
var v$2536 = rwp$0Rwp$1.arr$952(function(v$2537){if (v$1236([v$2537[0][0],v$2537[1][0]])) {return v$1234([v$2537[0][1],v$2537[1][1]]);
} else {return false;
};
},function(v$2538){if (v$1234([v$2538[0][0],v$2538[1][0]])) {return v$1236([v$2538[0][1],v$2538[1][1]]);
} else {return false;
};
},function(v$2539){return [v$2539[1],v$2539[0]];
},x$1895);
v$2523 = (rwp$0Rwp$1.fst$987(v$1234,v$1236,v$1235,f$1004,v$2536));
return rwp$0Rwp$1.arr$952(function(v$2524){if (v$1235([v$2524[0][0],v$2524[1][0]])) {return v$1236([v$2524[0][1],v$2524[1][1]]);
} else {return false;
};
},function(v$2525){if (v$1236([v$2525[0][0],v$2525[1][0]])) {return v$1235([v$2525[0][1],v$2525[1][1]]);
} else {return false;
};
},function(v$2526){return [v$2526[1],v$2526[0]];
},v$2523);
};
};
rwp$0Rwp$1.s$ttt$1012 = function(v$1241,v$1242,v$1243,v$1244,v$1016){var v$1017 = v$1016[0];
var v$1018 = v$1016[1];
var v$2270 = rwp$0Rwp$1.snd$1001(v$1241,v$1243,v$1244,v$1018);
return function(x$1911){return v$2270(rwp$0Rwp$1.fst$987(v$1242,v$1241,v$1244,v$1017,x$1911));
};
};
rwp$0Rwp$1.s$ccc$1019 = function(v$1245,v$1246,v$1247,v$1023){var v$1027 = v$1023[0];
var v$1028 = v$1023[1];
var v$2274;
var v$2278 = rwp$0Rwp$1.snd$1001(v$1245,v$1246,v$1247,v$1028);
v$2274 = (function(x$1932){return v$2278(rwp$0Rwp$1.fst$987(v$1245,v$1245,v$1247,v$1027,x$1932));
});
return function(x$1918){return v$2274(rwp$0Rwp$1.arr$952(v$1245,function(v$2532){if (v$1245([v$2532[0][0],v$2532[1][0]])) {return v$1245([v$2532[0][1],v$2532[1][1]]);
} else {return false;
};
},function(b$2533){return [b$2533,b$2533];
},x$1918));
};
};
rwp$0Rwp$1.iff$1029 = function(v$1249,v$1034){var v$1065 = v$1034[0];
var v$1066 = v$1034[1];
var v$1067 = v$1034[2];
var init$1035;
var t$2597;
var v$1935 = v$1065[0];
switch (v$1935[0]) { case 0: {t$2597 = v$1935[1][0];
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"rwp.current.impossible"];
} };
if (t$2597) {var v$1938 = v$1066[0];
switch (v$1938[0]) { case 0: {init$1035 = v$1938[1][0];
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"rwp.current.impossible"];
} };
} else {var v$1941 = v$1067[0];
switch (v$1941[0]) { case 0: {init$1035 = v$1941[1][0];
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"rwp.current.impossible"];
} };
};
var b$1040;
var init$1943 = [0,init$1035];
var v$1944 = [c$142[0],(c$142[0] = (SmlPrims.chk_ovf_i32(c$142[0] + 1)),0)][0];
var v$1946 = [null];
b$1040 = [basis$0Option$1.map$69(function(v$1947){return [v$1947];
},init$1943),v$1946,v$1944];
var v$1961 = v$1066[1];
(v$1961[0] = [[0,function(a$1969){var t$2600;
var v$1970 = v$1065[0];
switch (v$1970[0]) { case 0: {t$2600 = v$1970[1][0];
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"rwp.current.impossible"];
} };
if (t$2600) {var t$2599 = newValue$236(v$1249,b$1040);
var t$2598;
var v$1971 = v$1066[0];
switch (v$1971[0]) { case 0: {t$2598 = v$1971[1][0];
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"rwp.current.impossible"];
} };
return t$2599(t$2598);
} else {return 0;
};
}],v$1961[0]],0);
var v$1975 = v$1067[1];
(v$1975[0] = [[0,function(a$1983){var t$2604;
var t$2603;
var v$1984 = v$1065[0];
switch (v$1984[0]) { case 0: {t$2603 = v$1984[1][0];
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"rwp.current.impossible"];
} };
t$2604 = (t$2603?false:true);
if (t$2604) {var t$2602 = newValue$236(v$1249,b$1040);
var t$2601;
var v$1985 = v$1067[0];
switch (v$1985[0]) { case 0: {t$2601 = v$1985[1][0];
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"rwp.current.impossible"];
} };
return t$2602(t$2601);
} else {return 0;
};
}],v$1975[0]],0);
var v$1988 = v$1065[1];
(v$1988[0] = [[0,function(t$2388){if (t$2388) {var t$2606 = newValue$236(v$1249,b$1040);
var t$2605;
var v$2389 = v$1066[0];
switch (v$2389[0]) { case 0: {t$2605 = v$2389[1][0];
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"rwp.current.impossible"];
} };
return t$2606(t$2605);
} else {var t$2608 = newValue$236(v$1249,b$1040);
var t$2607;
var v$2390 = v$1067[0];
switch (v$2390[0]) { case 0: {t$2607 = v$2390[1][0];
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"rwp.current.impossible"];
} };
return t$2608(t$2607);
};
}],v$1988[0]],0);
return b$1040;
};
rwp$0Rwp$1.when$1068 = function(v$1252,v$1072){var v$1087 = v$1072[0];
var v$1088 = v$1072[1];
var init$1073;
var v$1999 = v$1088[0];
switch (v$1999[0]) { case 0: {init$1073 = v$1999[1][0];
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"rwp.current.impossible"];
} };
var e$2002;
var a$2395;
var b$2014 = pairT$425(v$1252,function(v$2405){return v$2405[0] == v$2405[1];
},[v$1087,v$1088]);
var t$2015;
var init$2016 = [1];
var v$2017 = [c$142[0],(c$142[0] = (SmlPrims.chk_ovf_i32(c$142[0] + 1)),0)][0];
var v$2019 = [null];
t$2015 = [basis$0Option$1.map$69(function(v$2020){return [v$2020];
},init$2016),v$2019,v$2017];
var v$2022 = b$2014[1];
(v$2022[0] = [[0,newValue$236(function(v$2406){if (v$2406[0][0] == v$2406[1][0]) {return v$1252([v$2406[0][1],v$2406[1][1]]);
} else {return false;
};
},t$2015)],v$2022[0]],0);
a$2395 = t$2015;
var t$2396 = [init$1073];
var es$2397;
var init$2398 = [1];
var v$2399 = [c$142[0],(c$142[0] = (SmlPrims.chk_ovf_i32(c$142[0] + 1)),0)][0];
var v$2400 = [null];
es$2397 = [basis$0Option$1.map$69(function(v$2401){return [v$2401];
},init$2398),v$2400,v$2399];
var v$2402 = a$2395[1];
(v$2402[0] = [[0,function(v$2403){var r$2404;
var v$2454 = t$2396[0];
var v$2444 = v$2403[0];
var v$2445 = v$2403[1];
r$2404 = (v$2444?v$2445:v$2454);
(t$2396[0] = r$2404,0);
return (newValue$236(v$1252,es$2397))(r$2404);
}],v$2402[0]],0);
e$2002 = es$2397;
var b$2003;
var init$2004 = [0,init$1073];
var v$2005 = [c$142[0],(c$142[0] = (SmlPrims.chk_ovf_i32(c$142[0] + 1)),0)][0];
var v$2007 = [null];
b$2003 = [basis$0Option$1.map$69(function(v$2008){return [v$2008];
},init$2004),v$2007,v$2005];
var v$2010 = e$2002[1];
(v$2010[0] = [[0,newValue$236(v$1252,b$2003)],v$2010[0]],0);
return b$2003;
};
rwp$0Rwp$1.until$1089 = function(v$1258,v$1093){var v$1125 = v$1093[0];
var v$1126 = v$1093[1];
var init$1094;
var t$2610;
var v$2029 = v$1126[0];
switch (v$2029[0]) { case 0: {t$2610 = v$2029[1][0];
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"rwp.current.impossible"];
} };
var t$2609;
var v$2032 = v$1125[0];
switch (v$2032[0]) { case 0: {t$2609 = v$2032[1][0];
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"rwp.current.impossible"];
} };
init$1094 = [t$2610,t$2609];
var t$2615 = rwp$0Rwp$1.arr$952;
var t$2614 = function(v$1260){return (v$1258([v$1260[0][0],v$1260[1][0]]))?(v$1260[0][1] == v$1260[1][1]):false;
};
var t$2613 = v$1258;
var t$2612 = function(v$1097){return v$1097[0];
};
var t$2611;
var e$2035;
var a$2411;
var b$2047 = pairT$425(v$1258,function(v$2421){return v$2421[0] == v$2421[1];
},[v$1125,v$1126]);
var t$2048;
var init$2049 = [1];
var v$2050 = [c$142[0],(c$142[0] = (SmlPrims.chk_ovf_i32(c$142[0] + 1)),0)][0];
var v$2052 = [null];
t$2048 = [basis$0Option$1.map$69(function(v$2053){return [v$2053];
},init$2049),v$2052,v$2050];
var v$2055 = b$2047[1];
(v$2055[0] = [[0,newValue$236(function(v$2422){if (v$2422[0][0] == v$2422[1][0]) {return v$1258([v$2422[0][1],v$2422[1][1]]);
} else {return false;
};
},t$2048)],v$2055[0]],0);
a$2411 = t$2048;
var t$2412 = [init$1094];
var es$2413;
var init$2414 = [1];
var v$2415 = [c$142[0],(c$142[0] = (SmlPrims.chk_ovf_i32(c$142[0] + 1)),0)][0];
var v$2416 = [null];
es$2413 = [basis$0Option$1.map$69(function(v$2417){return [v$2417];
},init$2414),v$2416,v$2415];
var v$2418 = a$2411[1];
(v$2418[0] = [[0,function(v$2419){var r$2420;
var v$2456 = t$2412[0];
if (v$2456[1]) {r$2420 = v$2456;
} else {var v$2450 = v$2419[0];
var v$2451 = v$2419[1];
r$2420 = (v$2450?[v$2451,true]:[v$2451,false]);
};
(t$2412[0] = r$2420,0);
return (newValue$236(function(v$2452){return (v$1258([v$2452[0][0],v$2452[1][0]]))?(v$2452[0][1] == v$2452[1][1]):false;
},es$2413))(r$2420);
}],v$2418[0]],0);
e$2035 = es$2413;
var b$2036;
var init$2037 = [0,init$1094];
var v$2038 = [c$142[0],(c$142[0] = (SmlPrims.chk_ovf_i32(c$142[0] + 1)),0)][0];
var v$2040 = [null];
b$2036 = [basis$0Option$1.map$69(function(v$2041){return [v$2041];
},init$2037),v$2040,v$2038];
var v$2043 = e$2035[1];
(v$2043[0] = [[0,newValue$236(function(v$2423){return (v$1258([v$2423[0][0],v$2423[1][0]]))?(v$2423[0][1] == v$2423[1][1]):false;
},b$2036)],v$2043[0]],0);
t$2611 = b$2036;
return t$2615(t$2614,t$2613,t$2612,t$2611);
};
return 0;
})();
