if ((typeof(tools$0IntFinMapPT$1)) == "undefined") {tools$0IntFinMapPT$1 = {};
};
(function(){var fix$1430 = {};
fix$1430.$eq_map = function(v$964,v$961){lab$eq_map: while (true) {var v$962 = v$961[0];
var v$963 = v$961[1];
switch (v$962[0]) { case 0: {switch (v$963[0]) { case 0: {var v$965 = v$962[1];
var v$966 = v$963[1];
if (v$965[0] == v$966[0]) {return v$964([v$965[1],v$966[1]]);
} else {return false;
};
 break; }default: {return false;
} };
 break; }case 1: {switch (v$963[0]) { case 1: {return true;
 break; }default: {return false;
} };
 break; }case 2: {switch (v$963[0]) { case 2: {var v$969 = v$962[1];
var v$970 = v$963[1];
if (v$969[0] == v$970[0]) {if (v$969[1] == v$970[1]) {if (fix$1430.$eq_map(v$964,[v$969[2],v$970[2]])) {var t$1431 = v$964;
var t$1432 = [v$969[3],v$970[3]];
var v$964 = t$1431;
var v$961 = t$1432;
continue lab$eq_map;
} else {return false;
};
} else {return false;
};
} else {return false;
};
 break; }default: {return false;
} };
 break; } };
};
};
tools$0IntFinMapPT$1.eq_map$960 = fix$1430.$eq_map;
tools$0IntFinMapPT$1.empty$136 = function(v$1429){return [1];
};
tools$0IntFinMapPT$1.singleton$148 = function(v$153,v$154){return [0,[SmlPrims.i32_to_w32(v$153),v$154]];
};
tools$0IntFinMapPT$1.isEmpty$155 = function(v$158){switch (v$158[0]) { case 1: {return true;
 break; }default: {return false;
} };
};
tools$0IntFinMapPT$1.lookup$203 = function(t$206,k$209){var w$1007 = SmlPrims.i32_to_w32(k$209);
var fix$1433 = {};
fix$1433.$look = function(v$1009){lab$look: while (true) {switch (v$1009[0]) { case 1: {return [1];
 break; }case 0: {var v$1010 = v$1009[1];
var v$1011 = v$1010[0];
var v$1012 = v$1010[1];
return (v$1011 == w$1007)?[0,v$1012]:[1];
 break; }default: {var v$1013 = v$1009[1];
var v$1014 = v$1013[0];
var v$1015 = v$1013[2];
var v$1016 = v$1013[3];
if (w$1007 <= v$1014) {var t$1434 = v$1015;
var v$1009 = t$1434;
continue lab$look;
} else {var t$1435 = v$1016;
var v$1009 = t$1435;
continue lab$look;
};
} };
};
};
var look$1008 = fix$1433.$look;
return look$1008(t$206);
};
var join$210 = function(v$223,v$224,v$225,v$226,v$227){var m$218;
var v$1181 = v$224 ^ v$226;
var x$$1027 = v$1181 & (((v$223 - 1) & 4294967295) ^ 4294967295);
var fix$1436 = {};
fix$1436.$highb = function(v$1032,v$1033){lab$highb: while (true) {if (v$1032 == v$1033) {return v$1033;
} else {var t$1437 = v$1032 & (v$1033 ^ 4294967295);
var t$1438 = (v$1033 + v$1033) & 4294967295;
var v$1032 = t$1437;
var v$1033 = t$1438;
continue lab$highb;
};
};
};
var highb$1030 = fix$1436.$highb;
m$218 = (highb$1030(x$$1027,v$223));
return (v$224 < v$226)?[2,[((v$224 | ((((m$218 - 1) & 4294967295) + m$218) & 4294967295)) - m$218) & 4294967295,m$218,v$225,v$227]]:[2,[((v$224 | ((((m$218 - 1) & 4294967295) + m$218) & 4294967295)) - m$218) & 4294967295,m$218,v$227,v$225]];
};
var insertw$228 = function(c$231,v$236){var v$276 = v$236[0];
var v$277 = v$236[1];
var v$278 = v$236[2];
var fix$1439 = {};
fix$1439.$ins = function(v$240){switch (v$240[0]) { case 1: {return [0,[v$276,v$277]];
 break; }case 0: {var v$260 = v$240[1];
var v$261 = v$260[0];
var v$262 = v$260[1];
if (v$261 == v$276) {return [0,[v$276,c$231([v$277,v$262])]];
} else {return join$210(1,v$276,[0,[v$276,v$277]],v$261,v$240);
};
 break; }default: {var v$271 = v$240[1];
var v$272 = v$271[0];
var v$273 = v$271[1];
var v$274 = v$271[2];
var v$275 = v$271[3];
if ((((v$276 | ((((v$273 - 1) & 4294967295) + v$273) & 4294967295)) - v$273) & 4294967295) == v$272) {return (v$276 <= v$272)?[2,[v$272,v$273,fix$1439.$ins(v$274),v$275]]:[2,[v$272,v$273,v$274,fix$1439.$ins(v$275)]];
} else {return join$210((v$273 + v$273) & 4294967295,v$276,[0,[v$276,v$277]],v$272,v$240);
};
} };
};
var ins$237 = fix$1439.$ins;
return ins$237(v$278);
};
tools$0IntFinMapPT$1.add$279 = function(v$289,v$290,v$291){return insertw$228(function(v$287){return v$287[0];
},[SmlPrims.i32_to_w32(v$289),v$290,v$291]);
};
var merge$292 = function(c$295,v$299){var v$384 = v$299[0];
var v$385 = v$299[1];
var fix$1440 = {};
fix$1440.$mrg = function(v$332,v$1382){switch (v$332[0]) { case 2: {switch (v$1382[0]) { case 2: {var v$373 = v$332[1];
var v$374 = v$373[0];
var v$375 = v$373[1];
var v$376 = v$373[2];
var v$377 = v$373[3];
var v$378 = v$1382[1];
var v$379 = v$378[0];
var v$380 = v$378[1];
var v$381 = v$378[2];
var v$382 = v$378[3];
if (v$375 < v$380) {if ((((v$374 | ((((v$380 - 1) & 4294967295) + v$380) & 4294967295)) - v$380) & 4294967295) == v$379) {return (v$374 <= v$379)?[2,[v$379,v$380,fix$1440.$mrg(v$332,v$381),v$382]]:[2,[v$379,v$380,v$381,fix$1440.$mrg(v$332,v$382)]];
} else {return join$210((v$380 + v$380) & 4294967295,v$374,v$332,v$379,v$1382);
};
} else {if (v$375 > v$380) {if ((((v$379 | ((((v$375 - 1) & 4294967295) + v$375) & 4294967295)) - v$375) & 4294967295) == v$374) {return (v$379 <= v$374)?[2,[v$374,v$375,fix$1440.$mrg(v$376,v$1382),v$377]]:[2,[v$374,v$375,v$376,fix$1440.$mrg(v$377,v$1382)]];
} else {return join$210((v$375 + v$375) & 4294967295,v$374,v$332,v$379,v$1382);
};
} else {if (v$374 == v$379) {return [2,[v$374,v$375,fix$1440.$mrg(v$376,v$381),fix$1440.$mrg(v$377,v$382)]];
} else {return join$210((v$375 + v$375) & 4294967295,v$374,v$332,v$379,v$1382);
};
};
};
 break; }case 0: {var v$341 = v$1382[1];
var v$342 = v$341[0];
var v$343 = v$341[1];
return insertw$228(function(x$1097){return c$295([x$1097[1],x$1097[0]]);
},[v$342,v$343,v$332]);
 break; }default: {return v$332;
} };
 break; }case 0: {var v$334 = v$332[1];
var v$335 = v$334[0];
var v$336 = v$334[1];
return insertw$228(c$295,[v$335,v$336,v$1382]);
 break; }default: {return v$1382;
} };
};
var mrg$300 = fix$1440.$mrg;
return mrg$300(v$384,v$385);
};
tools$0IntFinMapPT$1.plus$386 = function(v$395,v$396){return merge$292(function(v$393){return v$393[1];
},[v$395,v$396]);
};
tools$0IntFinMapPT$1.mergeMap$397 = function(c$400,s$403,t$406){return merge$292(c$400,[s$403,t$406]);
};
var fix$1441 = {};
fix$1441.$fold = function(v$410,v$413,v$416){lab$fold: while (true) {switch (v$416[0]) { case 1: {return v$413;
 break; }case 0: {var v$437 = v$416[1];
var v$439 = v$437[1];
return v$410([v$439,v$413]);
 break; }default: {var v$444 = v$416[1];
var v$445 = v$444[2];
var v$446 = v$444[3];
var t$1442 = v$410;
var t$1443 = fix$1441.$fold(v$410,v$413,v$445);
var t$1444 = v$446;
var v$410 = t$1442;
var v$413 = t$1443;
var v$416 = t$1444;
continue lab$fold;
} };
};
};
tools$0IntFinMapPT$1.fold$407 = fix$1441.$fold;
var fix$1445 = {};
fix$1445.$Fold = function(v$450,v$453,v$456){lab$Fold: while (true) {switch (v$456[0]) { case 1: {return v$453;
 break; }case 0: {var v$477 = v$456[1];
var v$478 = v$477[0];
var v$479 = v$477[1];
return v$450([[SmlPrims.chk_ovf_i32(v$478),v$479],v$453]);
 break; }default: {var v$484 = v$456[1];
var v$485 = v$484[2];
var v$486 = v$484[3];
var t$1446 = v$450;
var t$1447 = fix$1445.$Fold(v$450,v$453,v$485);
var t$1448 = v$486;
var v$450 = t$1446;
var v$453 = t$1447;
var v$456 = t$1448;
continue lab$Fold;
} };
};
};
tools$0IntFinMapPT$1.Fold$447 = fix$1445.$Fold;
var fix$1449 = {};
fix$1449.$removew = function(v$533,v$534){switch (v$534[0]) { case 1: {return [1];
 break; }case 0: {var v$509 = v$534[1];
var v$510 = v$509[0];
return (v$510 == v$533)?[0,[1]]:[1];
 break; }default: {var v$528 = v$534[1];
var v$529 = v$528[0];
var v$531 = v$528[2];
var v$532 = v$528[3];
if (v$533 <= v$529) {var v$520 = fix$1449.$removew(v$533,v$531);
switch (v$520[0]) { case 1: {return [1];
 break; }default: {var v$521 = v$520[1];
return [0,merge$292(function(v$1104){return v$1104[1];
},[v$521,v$532])];
} };
} else {var v$526 = fix$1449.$removew(v$533,v$532);
switch (v$526[0]) { case 1: {return [1];
 break; }default: {var v$527 = v$526[1];
return [0,merge$292(function(v$1108){return v$1108[1];
},[v$531,v$527])];
} };
};
} };
};
var removew$487 = fix$1449.$removew;
tools$0IntFinMapPT$1.remove$535 = function(v$540,v$541){return removew$487(SmlPrims.i32_to_w32(v$540),v$541);
};
var fix$1450 = {};
fix$1450.$composemap = function(v$545,v$548){switch (v$548[0]) { case 1: {return [1];
 break; }case 0: {var v$567 = v$548[1];
var v$568 = v$567[0];
var v$569 = v$567[1];
return [0,[v$568,v$545(v$569)]];
 break; }default: {var v$572 = v$548[1];
var v$573 = v$572[0];
var v$574 = v$572[1];
var v$575 = v$572[2];
var v$576 = v$572[3];
return [2,[v$573,v$574,fix$1450.$composemap(v$545,v$575),fix$1450.$composemap(v$545,v$576)]];
} };
};
tools$0IntFinMapPT$1.composemap$542 = fix$1450.$composemap;
var fix$1451 = {};
fix$1451.$ComposeMap = function(v$580,v$583){switch (v$583[0]) { case 1: {return [1];
 break; }case 0: {var v$602 = v$583[1];
var v$603 = v$602[0];
var v$604 = v$602[1];
return [0,[v$603,v$580([SmlPrims.chk_ovf_i32(v$603),v$604])]];
 break; }default: {var v$607 = v$583[1];
var v$608 = v$607[0];
var v$609 = v$607[1];
var v$610 = v$607[2];
var v$611 = v$607[3];
return [2,[v$608,v$609,fix$1451.$ComposeMap(v$580,v$610),fix$1451.$ComposeMap(v$580,v$611)]];
} };
};
tools$0IntFinMapPT$1.ComposeMap$577 = fix$1451.$ComposeMap;
tools$0IntFinMapPT$1.dom$645 = function(t$648){var fix$1452 = {};
fix$1452.$d = function(v$666,v$1383){lab$d: while (true) {switch (v$666[0]) { case 1: {return v$1383;
 break; }case 0: {return [SmlPrims.chk_ovf_i32(v$666[1][0]),v$1383];
 break; }default: {var v$673 = v$666[1];
var v$674 = v$673[2];
var v$675 = v$673[3];
var t$1453 = v$675;
var t$1454 = fix$1452.$d(v$674,v$1383);
var v$666 = t$1453;
var v$1383 = t$1454;
continue lab$d;
} };
};
};
var d$649 = fix$1452.$d;
return d$649(t$648,null);
};
tools$0IntFinMapPT$1.range$677 = function(m$680){var fix$1455 = {};
fix$1455.$fold = function(v$1314,v$1315){lab$fold: while (true) {switch (v$1315[0]) { case 1: {return v$1314;
 break; }case 0: {return [v$1315[1][1],v$1314];
 break; }default: {var v$1318 = v$1315[1];
var v$1319 = v$1318[2];
var v$1320 = v$1318[3];
var t$1456 = fix$1455.$fold(v$1314,v$1319);
var t$1457 = v$1320;
var v$1314 = t$1456;
var v$1315 = t$1457;
continue lab$fold;
} };
};
};
var fold$1313 = fix$1455.$fold;
var v$1387 = null;
return fold$1313(v$1387,m$680);
};
tools$0IntFinMapPT$1.list$682 = function(m$685){var fix$1458 = {};
fix$1458.$Fold = function(v$1325,v$1326){lab$Fold: while (true) {switch (v$1326[0]) { case 1: {return v$1325;
 break; }case 0: {var v$1327 = v$1326[1];
var v$1328 = v$1327[0];
var v$1329 = v$1327[1];
return [[SmlPrims.chk_ovf_i32(v$1328),v$1329],v$1325];
 break; }default: {var v$1330 = v$1326[1];
var v$1331 = v$1330[2];
var v$1332 = v$1330[3];
var t$1459 = fix$1458.$Fold(v$1325,v$1331);
var t$1460 = v$1332;
var v$1325 = t$1459;
var v$1326 = t$1460;
continue lab$Fold;
} };
};
};
var Fold$1324 = fix$1458.$Fold;
var v$1389 = null;
return Fold$1324(v$1389,m$685);
};
tools$0IntFinMapPT$1.filter$687 = function(f$690,m$693){var fix$1461 = {};
fix$1461.$Fold = function(v$1342,v$1343){lab$Fold: while (true) {switch (v$1343[0]) { case 1: {return v$1342;
 break; }case 0: {var v$1344 = v$1343[1];
var v$1345 = v$1344[0];
var v$1346 = v$1344[1];
var v$1380 = [SmlPrims.chk_ovf_i32(v$1345),v$1346];
var v$1352 = v$1380[0];
var v$1353 = v$1380[1];
if (f$690(v$1380)) {return insertw$228((function(env$1462){return function(v$1355){return v$1355[0];
};
})([]),[SmlPrims.i32_to_w32(v$1352),v$1353,v$1342]);
} else {return v$1342;
};
 break; }default: {var v$1347 = v$1343[1];
var v$1348 = v$1347[2];
var v$1349 = v$1347[3];
var t$1463 = fix$1461.$Fold(v$1342,v$1348);
var t$1464 = v$1349;
var v$1342 = t$1463;
var v$1343 = t$1464;
continue lab$Fold;
} };
};
};
var Fold$1341 = fix$1461.$Fold;
return Fold$1341(tools$0IntFinMapPT$1.empty$136(0),m$693);
};
var fix$1465 = {};
fix$1465.$addList = function(v$711,v$714){lab$addList: while (true) {if (v$711 == null) {return v$714;
} else {var v$726 = v$711;
var v$727 = v$726[0];
var v$728 = v$727[0];
var v$729 = v$727[1];
var v$730 = v$726[1];
var t$1467 = v$730;
var t$1468 = insertw$228((function(env$1466){return function(v$1121){return v$1121[0];
};
})([]),[SmlPrims.i32_to_w32(v$728),v$729,v$714]);
var v$711 = t$1467;
var v$714 = t$1468;
continue lab$addList;
};
};
};
tools$0IntFinMapPT$1.addList$708 = fix$1465.$addList;
tools$0IntFinMapPT$1.fromList$732 = function(l$735){return tools$0IntFinMapPT$1.addList$708(l$735,tools$0IntFinMapPT$1.empty$136(0));
};
tools$0IntFinMapPT$1.en$Restrict$736 = new String("Restrict");
tools$0IntFinMapPT$1.restrict$737 = function(v$768,v$769,v$770){var fix$1469 = {};
fix$1469.$res = function(v$755,v$1384){lab$res: while (true) {if (v$755 == null) {return v$1384;
} else {var v$764 = v$755;
var v$765 = v$764[0];
var v$766 = v$764[1];
var v$761;
var w$1125 = SmlPrims.i32_to_w32(v$765);
var fix$1470 = {};
fix$1470.$look = function(v$1127){lab$look: while (true) {switch (v$1127[0]) { case 1: {return [1];
 break; }case 0: {var v$1128 = v$1127[1];
var v$1129 = v$1128[0];
var v$1130 = v$1128[1];
return (v$1129 == w$1125)?[0,v$1130]:[1];
 break; }default: {var v$1131 = v$1127[1];
var v$1132 = v$1131[0];
var v$1133 = v$1131[2];
var v$1134 = v$1131[3];
if (w$1125 <= v$1132) {var t$1471 = v$1133;
var v$1127 = t$1471;
continue lab$look;
} else {var t$1472 = v$1134;
var v$1127 = t$1472;
continue lab$look;
};
} };
};
};
var look$1126 = fix$1470.$look;
v$761 = (look$1126(v$769));
switch (v$761[0]) { case 0: {var v$763 = v$761[1];
var t$1474 = v$766;
var t$1475 = insertw$228((function(env$1473){return function(v$1140){return v$1140[0];
};
})([]),[SmlPrims.i32_to_w32(v$765),v$763,v$1384]);
var v$755 = t$1474;
var v$1384 = t$1475;
continue lab$res;
 break; }default: {throw [tools$0IntFinMapPT$1.en$Restrict$736,v$768(v$765)];
} };
};
};
};
var res$743 = fix$1469.$res;
return res$743(v$770,tools$0IntFinMapPT$1.empty$136(0));
};
tools$0IntFinMapPT$1.enrich$771 = function(f$774,p$777){var fix$1476 = {};
fix$1476.$enr = function(v$1385,v$1386){lab$enr: while (true) {switch (v$1386[0]) { case 1: {return true;
 break; }default: {switch (v$1385[0]) { case 1: {return false;
 break; }case 0: {switch (v$1386[0]) { case 2: {return false;
 break; }default: {var v$1400 = v$1386[1];
var v$1401 = v$1400[0];
var v$1402 = v$1400[1];
var v$1403;
var fix$1477 = {};
fix$1477.$look = function(v$1405){lab$look: while (true) {switch (v$1405[0]) { case 1: {return [1];
 break; }case 0: {var v$1406 = v$1405[1];
var v$1407 = v$1406[0];
var v$1408 = v$1406[1];
return (v$1407 == v$1401)?[0,v$1408]:[1];
 break; }default: {var v$1409 = v$1405[1];
var v$1410 = v$1409[0];
var v$1411 = v$1409[2];
var v$1412 = v$1409[3];
if (v$1401 <= v$1410) {var t$1478 = v$1411;
var v$1405 = t$1478;
continue lab$look;
} else {var t$1479 = v$1412;
var v$1405 = t$1479;
continue lab$look;
};
} };
};
};
var look$1404 = fix$1477.$look;
v$1403 = (look$1404(v$1385));
switch (v$1403[0]) { case 0: {var v$1413 = v$1403[1];
return f$774([v$1413,v$1402]);
 break; }default: {return false;
} };
} };
 break; }default: {switch (v$1386[0]) { case 0: {var v$1415 = v$1386[1];
var v$1416 = v$1415[0];
var v$1417 = v$1415[1];
var v$1418;
var fix$1480 = {};
fix$1480.$look = function(v$1420){lab$look: while (true) {switch (v$1420[0]) { case 1: {return [1];
 break; }case 0: {var v$1421 = v$1420[1];
var v$1422 = v$1421[0];
var v$1423 = v$1421[1];
return (v$1422 == v$1416)?[0,v$1423]:[1];
 break; }default: {var v$1424 = v$1420[1];
var v$1425 = v$1424[0];
var v$1426 = v$1424[2];
var v$1427 = v$1424[3];
if (v$1416 <= v$1425) {var t$1481 = v$1426;
var v$1420 = t$1481;
continue lab$look;
} else {var t$1482 = v$1427;
var v$1420 = t$1482;
continue lab$look;
};
} };
};
};
var look$1419 = fix$1480.$look;
v$1418 = (look$1419(v$1385));
switch (v$1418[0]) { case 0: {var v$1428 = v$1418[1];
return f$774([v$1428,v$1417]);
 break; }default: {return false;
} };
 break; }default: {var v$842 = v$1385[1];
var v$843 = v$842[0];
var v$844 = v$842[2];
var v$845 = v$842[3];
var v$846 = v$1386[1];
var v$847 = v$846[0];
var v$848 = v$846[2];
var v$849 = v$846[3];
if (v$843 > v$847) {if (fix$1476.$enr(v$844,v$848)) {var t$1483 = v$1385;
var t$1484 = v$849;
var v$1385 = t$1483;
var v$1386 = t$1484;
continue lab$enr;
} else {return false;
};
} else {if (v$843 < v$847) {if (fix$1476.$enr(v$845,v$849)) {var t$1485 = v$1385;
var t$1486 = v$848;
var v$1385 = t$1485;
var v$1386 = t$1486;
continue lab$enr;
} else {return false;
};
} else {if (fix$1476.$enr(v$844,v$848)) {var t$1487 = v$845;
var t$1488 = v$849;
var v$1385 = t$1487;
var v$1386 = t$1488;
continue lab$enr;
} else {return false;
};
};
};
} };
} };
} };
};
};
var enr$778 = fix$1476.$enr;
return enr$778(p$777[0],p$777[1]);
};
tools$0IntFinMapPT$1.layoutMap$850 = function(v$883,v$885,v$884,v$882){return function(layoutDom$859){return function(layoutRan$862){return function(m$865){var t$1496;
var t$1495;
var t$1494 = basis$0List$1.map$697;
var t$1493 = function(v$869){var v$875 = v$869[0];
var v$876 = v$869[1];
return [0,[[layoutDom$859(v$875),[layoutRan$862(v$876),null]],[0,v$883],"",3,""]];
};
var t$1492;
var fix$1489 = {};
fix$1489.$Fold = function(v$1359,v$1360){lab$Fold: while (true) {switch (v$1360[0]) { case 1: {return v$1359;
 break; }case 0: {var v$1361 = v$1360[1];
var v$1362 = v$1361[0];
var v$1363 = v$1361[1];
return [[SmlPrims.chk_ovf_i32(v$1362),v$1363],v$1359];
 break; }default: {var v$1364 = v$1360[1];
var v$1365 = v$1364[2];
var v$1366 = v$1364[3];
var t$1490 = fix$1489.$Fold(v$1359,v$1365);
var t$1491 = v$1366;
var v$1359 = t$1490;
var v$1360 = t$1491;
continue lab$Fold;
} };
};
};
var Fold$1358 = fix$1489.$Fold;
var v$1393 = null;
t$1492 = (Fold$1358(v$1393,m$865));
t$1495 = (t$1494(t$1493,t$1492));
t$1496 = [t$1495,[0,v$884],v$885,3,v$882];
return [0,t$1496];
};
};
};
};
tools$0IntFinMapPT$1.reportMap$886 = function(f$889,t$892){var t$1504 = tools$0Report$1.flatten$87;
var t$1503;
var t$1502 = basis$0List$1.map$697;
var t$1501 = f$889;
var t$1500;
var fix$1497 = {};
fix$1497.$Fold = function(v$1371,v$1372){lab$Fold: while (true) {switch (v$1372[0]) { case 1: {return v$1371;
 break; }case 0: {var v$1373 = v$1372[1];
var v$1374 = v$1373[0];
var v$1375 = v$1373[1];
return [[SmlPrims.chk_ovf_i32(v$1374),v$1375],v$1371];
 break; }default: {var v$1376 = v$1372[1];
var v$1377 = v$1376[2];
var v$1378 = v$1376[3];
var t$1498 = fix$1497.$Fold(v$1371,v$1377);
var t$1499 = v$1378;
var v$1371 = t$1498;
var v$1372 = t$1499;
continue lab$Fold;
} };
};
};
var Fold$1370 = fix$1497.$Fold;
var v$1395 = null;
t$1500 = (Fold$1370(v$1395,t$892));
t$1503 = (t$1502(t$1501,t$1500));
return t$1504(t$1503);
};
tools$0IntFinMapPT$1.pu$893 = function(v$895,pu_a$898){var pu_Empty$910;
var v$1397 = [1];
pu_Empty$910 = (function(v$1398){return pickle$0pickle$1.con0$1988(v$1397,v$1398);
});
return pickle$0pickle$1.dataGen$1488(["IntFinMapPT.map",function(v$1159){switch (v$1159[0]) { case 1: {return 0;
 break; }case 0: {return 1;
 break; }default: {return 2;
} };
},[pu_Empty$910,[function(v$1160){return pickle$0pickle$1.con1$2014(function(v$1161){return [0,v$1161];
},function(v$1162){switch (v$1162[0]) { case 0: {return v$1162[1];
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"IntFinMapPT.pu_Lf"];
} };
},pickle$0pickle$1.pairGen0$983(pickle$0pickle$1.word$727,pu_a$898));
},[function(pu$1163){return pickle$0pickle$1.con1$2014(function(v$1164){return [2,v$1164];
},function(v$1165){switch (v$1165[0]) { case 2: {return v$1165[1];
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"IntFinMapPT.pu_Br"];
} };
},pickle$0pickle$1.tup4Gen0$2377(pickle$0pickle$1.word$727,pickle$0pickle$1.word$727,pu$1163,pu$1163));
},null]]]]);
};
return 0;
})();