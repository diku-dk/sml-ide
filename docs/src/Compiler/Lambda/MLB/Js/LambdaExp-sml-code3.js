if ((typeof(compiler_objects$0LambdaExp$1$3)) == "undefined") {compiler_objects$0LambdaExp$1$3 = {};
};
(function(){compiler_objects$0LambdaExp$1$3.eq_bal$1035 = function(v$1037,v$1038){switch (v$1037) { case 0: {switch (v$1038) { case 0: {return true;
 break; }default: {return false;
} };
 break; }case 1: {switch (v$1038) { case 1: {return true;
 break; }default: {return false;
} };
 break; }case 2: {switch (v$1038) { case 2: {return true;
 break; }default: {return false;
} };
 break; } };
};
compiler_objects$0LambdaExp$1$3.s$j$143 = function(v$1385,v$1386){return v$1385 < v$1386;
};
compiler_objects$0LambdaExp$1$3.s$kk$150 = function(v$159,v$160){return ((v$159 < v$160)?true:(v$160 < v$159))?false:true;
};
compiler_objects$0LambdaExp$1$3.en$Impossible$161 = new String("Impossible");
compiler_objects$0LambdaExp$1$3.impossible$162 = function(s$165){var s$166 = "Impossible.OrderSet." + s$165;
basis$0General$1.print$163(s$166);
throw [compiler_objects$0LambdaExp$1$3.en$Impossible$161,s$166];
};
compiler_objects$0LambdaExp$1$3.empty$174 = null;
compiler_objects$0LambdaExp$1$3.singleton$175 = function(i$178){return [i$178,null,null,2];
};
var fix$1391 = {};
fix$1391.$size = function(v$182){if (v$182 == null) {return 0;
} else {var v$189 = v$182;
var v$190 = v$189[1];
var v$191 = v$189[2];
return SmlPrims.chk_ovf_i32((SmlPrims.chk_ovf_i32(1 + (fix$1391.$size(v$190)))) + (fix$1391.$size(v$191)));
};
};
compiler_objects$0LambdaExp$1$3.size$179 = fix$1391.$size;
compiler_objects$0LambdaExp$1$3.isEmpty$192 = function(v$195){return (v$195 == null)?true:false;
};
compiler_objects$0LambdaExp$1$3.member$200 = function(i$203,s$206){var fix$1392 = {};
fix$1392.$search = function(v$210){lab$search: while (true) {if (v$210 == null) {return false;
} else {var v$226 = v$210;
var v$227 = v$226[0];
var v$228 = v$226[1];
var v$229 = v$226[2];
if (((i$203 < v$227)?true:(v$227 < i$203))?false:true) {return true;
} else {if (i$203 < v$227) {var t$1393 = v$228;
var v$210 = t$1393;
continue lab$search;
} else {var t$1394 = v$229;
var v$210 = t$1394;
continue lab$search;
};
};
};
};
};
var search$207 = fix$1392.$search;
return search$207(s$206);
};
compiler_objects$0LambdaExp$1$3.eq$230 = function(s1$233,s2$236){if ((compiler_objects$0LambdaExp$1$3.size$179(s1$233)) == (compiler_objects$0LambdaExp$1$3.size$179(s2$236))) {var fix$1395 = {};
fix$1395.$eq$ = function(v$244){lab$eq$: while (true) {if (v$244 == null) {return true;
} else {var v$260 = v$244;
var v$261 = v$260[0];
var v$262 = v$260[1];
var v$263 = v$260[2];
var t$1399;
var fix$1396 = {};
fix$1396.$search = function(v$1314){lab$search: while (true) {if (v$1314 == null) {return false;
} else {var v$1315 = v$1314;
var v$1316 = v$1315[0];
var v$1317 = v$1315[1];
var v$1318 = v$1315[2];
if (((v$261 < v$1316)?true:(v$1316 < v$261))?false:true) {return true;
} else {if (v$261 < v$1316) {var t$1397 = v$1317;
var v$1314 = t$1397;
continue lab$search;
} else {var t$1398 = v$1318;
var v$1314 = t$1398;
continue lab$search;
};
};
};
};
};
var search$1313 = fix$1396.$search;
t$1399 = (search$1313(s2$236));
if (t$1399) {if (fix$1395.$eq$(v$262)) {var t$1400 = v$263;
var v$244 = t$1400;
continue lab$eq$;
} else {return false;
};
} else {return false;
};
};
};
};
var eq$$241 = fix$1395.$eq$;
return eq$$241(s1$233);
} else {return false;
};
};
compiler_objects$0LambdaExp$1$3.en$ALREADYTHERE$264 = new String("ALREADYTHERE");
compiler_objects$0LambdaExp$1$3.exn$ALREADYTHERE$264 = [compiler_objects$0LambdaExp$1$3.en$ALREADYTHERE$264];
compiler_objects$0LambdaExp$1$3.insert$265 = function(k0$268,t$271){var fix$1401 = {};
fix$1401.$ins = function(v$275){if (v$275 == null) {return [true,[k0$268,null,null,2]];
} else {var v$428 = v$275;
var v$429 = v$428[0];
var v$430 = v$428[1];
var v$431 = v$428[2];
var v$432 = v$428[3];
if (((k0$268 < v$429)?true:(v$429 < k0$268))?false:true) {throw compiler_objects$0LambdaExp$1$3.exn$ALREADYTHERE$264;
} else {if (k0$268 < v$429) {var v$357 = fix$1401.$ins(v$430);
var v$358 = v$357[0];
var v$359 = v$357[1];
switch (v$432) { case 2: {return v$358?[true,[v$429,v$359,v$431,1]]:[false,[v$429,v$359,v$431,2]];
 break; }case 0: {return v$358?[false,[v$429,v$359,v$431,2]]:[false,[v$429,v$359,v$431,0]];
 break; }default: {if (v$358) {var v$345;
if (v$359 == null) {basis$0General$1.print$163("Impossible.OrderSet.empty tree01!");
throw [compiler_objects$0LambdaExp$1$3.en$Impossible$161,"Impossible.OrderSet.empty tree01!"];
} else {v$345 = v$359;
};
var v$346 = v$345[0];
var v$347 = v$345[1];
var v$348 = v$345[2];
var v$349 = v$345[3];
var t$1404;
var v$1248 = 1;
switch (v$349) { case 0: {switch (v$1248) { case 0: {t$1404 = true;
 break; }default: {t$1404 = false;
} };
 break; }case 1: {switch (v$1248) { case 1: {t$1404 = true;
 break; }default: {t$1404 = false;
} };
 break; }case 2: {switch (v$1248) { case 2: {t$1404 = true;
 break; }default: {t$1404 = false;
} };
 break; } };
if (t$1404) {return [false,[v$346,v$347,[v$429,v$348,v$431,2],2]];
} else {var v$333;
if (v$348 == null) {basis$0General$1.print$163("Impossible.OrderSet.empty tree02!");
throw [compiler_objects$0LambdaExp$1$3.en$Impossible$161,"Impossible.OrderSet.empty tree02!"];
} else {v$333 = v$348;
};
var v$334 = v$333[0];
var v$335 = v$333[1];
var v$336 = v$333[2];
var v$337 = v$333[3];
var t$1422 = false;
var t$1421;
var t$1420;
var t$1419 = v$334;
var t$1418;
var t$1417;
var t$1416 = v$346;
var t$1415 = v$347;
var t$1414 = v$335;
var t$1413;
var t$1412;
var v$1252 = 0;
switch (v$337) { case 0: {switch (v$1252) { case 0: {t$1412 = true;
 break; }default: {t$1412 = false;
} };
 break; }case 1: {switch (v$1252) { case 1: {t$1412 = true;
 break; }default: {t$1412 = false;
} };
 break; }case 2: {switch (v$1252) { case 2: {t$1412 = true;
 break; }default: {t$1412 = false;
} };
 break; } };
t$1413 = (t$1412?1:2);
t$1417 = [t$1416,t$1415,t$1414,t$1413];
t$1418 = t$1417;
var t$1411;
var t$1410;
var t$1409 = v$429;
var t$1408 = v$336;
var t$1407 = v$431;
var t$1406;
var t$1405;
var v$1254 = 1;
switch (v$337) { case 0: {switch (v$1254) { case 0: {t$1405 = true;
 break; }default: {t$1405 = false;
} };
 break; }case 1: {switch (v$1254) { case 1: {t$1405 = true;
 break; }default: {t$1405 = false;
} };
 break; }case 2: {switch (v$1254) { case 2: {t$1405 = true;
 break; }default: {t$1405 = false;
} };
 break; } };
t$1406 = (t$1405?0:2);
t$1410 = [t$1409,t$1408,t$1407,t$1406];
t$1411 = t$1410;
t$1420 = [t$1419,t$1418,t$1411,2];
t$1421 = t$1420;
return [t$1422,t$1421];
};
} else {return [false,[v$429,v$359,v$431,1]];
};
} };
} else {var v$425 = fix$1401.$ins(v$431);
var v$426 = v$425[0];
var v$427 = v$425[1];
switch (v$432) { case 2: {return v$426?[true,[v$429,v$430,v$427,0]]:[false,[v$429,v$430,v$427,2]];
 break; }case 1: {return v$426?[false,[v$429,v$430,v$427,2]]:[false,[v$429,v$430,v$427,1]];
 break; }default: {if (v$426) {var v$413;
if (v$427 == null) {basis$0General$1.print$163("Impossible.OrderSet.empty tree03!");
throw [compiler_objects$0LambdaExp$1$3.en$Impossible$161,"Impossible.OrderSet.empty tree03!"];
} else {v$413 = v$427;
};
var v$414 = v$413[0];
var v$415 = v$413[1];
var v$416 = v$413[2];
var v$417 = v$413[3];
var t$1423;
var v$1260 = 0;
switch (v$417) { case 0: {switch (v$1260) { case 0: {t$1423 = true;
 break; }default: {t$1423 = false;
} };
 break; }case 1: {switch (v$1260) { case 1: {t$1423 = true;
 break; }default: {t$1423 = false;
} };
 break; }case 2: {switch (v$1260) { case 2: {t$1423 = true;
 break; }default: {t$1423 = false;
} };
 break; } };
if (t$1423) {return [false,[v$414,[v$429,v$430,v$415,2],v$416,2]];
} else {var v$401;
if (v$415 == null) {basis$0General$1.print$163("Impossible.OrderSet.empty tree04!");
throw [compiler_objects$0LambdaExp$1$3.en$Impossible$161,"Impossible.OrderSet.empty tree04!"];
} else {v$401 = v$415;
};
var v$402 = v$401[0];
var v$403 = v$401[1];
var v$404 = v$401[2];
var v$405 = v$401[3];
var t$1441 = false;
var t$1440;
var t$1439;
var t$1438 = v$402;
var t$1437;
var t$1436;
var t$1435 = v$429;
var t$1434 = v$430;
var t$1433 = v$403;
var t$1432;
var t$1431;
var v$1264 = 0;
switch (v$405) { case 0: {switch (v$1264) { case 0: {t$1431 = true;
 break; }default: {t$1431 = false;
} };
 break; }case 1: {switch (v$1264) { case 1: {t$1431 = true;
 break; }default: {t$1431 = false;
} };
 break; }case 2: {switch (v$1264) { case 2: {t$1431 = true;
 break; }default: {t$1431 = false;
} };
 break; } };
t$1432 = (t$1431?1:2);
t$1436 = [t$1435,t$1434,t$1433,t$1432];
t$1437 = t$1436;
var t$1430;
var t$1429;
var t$1428 = v$414;
var t$1427 = v$404;
var t$1426 = v$416;
var t$1425;
var t$1424;
var v$1266 = 1;
switch (v$405) { case 0: {switch (v$1266) { case 0: {t$1424 = true;
 break; }default: {t$1424 = false;
} };
 break; }case 1: {switch (v$1266) { case 1: {t$1424 = true;
 break; }default: {t$1424 = false;
} };
 break; }case 2: {switch (v$1266) { case 2: {t$1424 = true;
 break; }default: {t$1424 = false;
} };
 break; } };
t$1425 = (t$1424?0:2);
t$1429 = [t$1428,t$1427,t$1426,t$1425];
t$1430 = t$1429;
t$1439 = [t$1438,t$1437,t$1430,2];
t$1440 = t$1439;
return [t$1441,t$1440];
};
} else {return [false,[v$429,v$430,v$427,0]];
};
} };
};
};
};
};
var ins$272 = fix$1401.$ins;
try {return (ins$272(t$271))[1];
} catch(v$1402) {return (function(ALREADYTHERE$439){var t$1403 = ALREADYTHERE$439;
if (t$1403[0] == compiler_objects$0LambdaExp$1$3.en$ALREADYTHERE$264) {return t$271;
} else {throw ALREADYTHERE$439;
};
})(v$1402);
};
};
compiler_objects$0LambdaExp$1$3.list$440 = function(s$443){var fix$1442 = {};
fix$1442.$f = function(v$447,v$450){lab$f: while (true) {if (v$447 == null) {return v$450;
} else {var v$462 = v$447;
var v$463 = v$462[0];
var v$464 = v$462[1];
var v$465 = v$462[2];
var t$1443 = v$464;
var t$1444 = [v$463,fix$1442.$f(v$465,v$450)];
var v$447 = t$1443;
var v$450 = t$1444;
continue lab$f;
};
};
};
var f$444 = fix$1442.$f;
return f$444(s$443,null);
};
var fix$1445 = {};
fix$1445.$fromList = function(l$470){if (l$470 == null) {return compiler_objects$0LambdaExp$1$3.empty$174;
} else {var v$477 = l$470;
var v$478 = v$477[0];
var v$479 = v$477[1];
return compiler_objects$0LambdaExp$1$3.insert$265(v$478,fix$1445.$fromList(v$479));
};
};
compiler_objects$0LambdaExp$1$3.fromList$467 = fix$1445.$fromList;
var fix$1446 = {};
fix$1446.$union = function(s1$483,s2$486){lab$union: while (true) {if (s2$486 == null) {return s1$483;
} else {var v$494 = s2$486;
var v$495 = v$494[0];
var v$496 = v$494[1];
var v$497 = v$494[2];
var t$1447 = fix$1446.$union(compiler_objects$0LambdaExp$1$3.insert$265(v$495,s1$483),v$496);
var t$1448 = v$497;
var s1$483 = t$1447;
var s2$486 = t$1448;
continue lab$union;
};
};
};
compiler_objects$0LambdaExp$1$3.union$480 = fix$1446.$union;
var fix$1449 = {};
fix$1449.$addList = function(v$501,v$504){lab$addList: while (true) {if (v$501 == null) {return v$504;
} else {var v$515 = v$501;
var v$516 = v$515[0];
var v$517 = v$515[1];
var t$1450 = v$517;
var t$1451 = compiler_objects$0LambdaExp$1$3.insert$265(v$516,v$504);
var v$501 = t$1450;
var v$504 = t$1451;
continue lab$addList;
};
};
};
compiler_objects$0LambdaExp$1$3.addList$498 = fix$1449.$addList;
compiler_objects$0LambdaExp$1$3.en$NOTFOUND$519 = new String("NOTFOUND");
compiler_objects$0LambdaExp$1$3.exn$NOTFOUND$519 = [compiler_objects$0LambdaExp$1$3.en$NOTFOUND$519];
compiler_objects$0LambdaExp$1$3.remove$520 = function(k0$523,t$526){var balance1$527 = function(v$530){if (v$530 == null) {basis$0General$1.print$163("Impossible.OrderSet.(balance1 on an empty tree)");
throw [compiler_objects$0LambdaExp$1$3.en$Impossible$161,"Impossible.OrderSet.(balance1 on an empty tree)"];
} else {var v$595 = v$530;
var v$596 = v$595[0];
var v$597 = v$595[1];
var v$598 = v$595[2];
switch (v$595[3]) { case 1: {return [[v$596,v$597,v$598,2],true];
 break; }case 2: {return [[v$596,v$597,v$598,0],false];
 break; }default: {var v$583;
if (v$598 == null) {basis$0General$1.print$163("Impossible.OrderSet.empty tree11!");
throw [compiler_objects$0LambdaExp$1$3.en$Impossible$161,"Impossible.OrderSet.empty tree11!"];
} else {v$583 = v$598;
};
var v$584 = v$583[0];
var v$585 = v$583[1];
var v$586 = v$583[2];
switch (v$583[3]) { case 1: {var v$571;
if (v$585 == null) {basis$0General$1.print$163("Impossible.OrderSet.empty tree12!");
throw [compiler_objects$0LambdaExp$1$3.en$Impossible$161,"Impossible.OrderSet.empty tree12!"];
} else {v$571 = v$585;
};
var v$572 = v$571[0];
var v$573 = v$571[1];
var v$574 = v$571[2];
var v$575 = v$571[3];
var t$1468;
var t$1467;
var t$1466 = v$572;
var t$1465;
var t$1464;
var t$1463 = v$596;
var t$1462 = v$597;
var t$1461 = v$573;
var t$1460;
var t$1459;
var v$1278 = 0;
switch (v$575) { case 0: {switch (v$1278) { case 0: {t$1459 = true;
 break; }default: {t$1459 = false;
} };
 break; }case 1: {switch (v$1278) { case 1: {t$1459 = true;
 break; }default: {t$1459 = false;
} };
 break; }case 2: {switch (v$1278) { case 2: {t$1459 = true;
 break; }default: {t$1459 = false;
} };
 break; } };
t$1460 = (t$1459?1:2);
t$1464 = [t$1463,t$1462,t$1461,t$1460];
t$1465 = t$1464;
var t$1458;
var t$1457;
var t$1456 = v$584;
var t$1455 = v$574;
var t$1454 = v$586;
var t$1453;
var t$1452;
var v$1280 = 1;
switch (v$575) { case 0: {switch (v$1280) { case 0: {t$1452 = true;
 break; }default: {t$1452 = false;
} };
 break; }case 1: {switch (v$1280) { case 1: {t$1452 = true;
 break; }default: {t$1452 = false;
} };
 break; }case 2: {switch (v$1280) { case 2: {t$1452 = true;
 break; }default: {t$1452 = false;
} };
 break; } };
t$1453 = (t$1452?0:2);
t$1457 = [t$1456,t$1455,t$1454,t$1453];
t$1458 = t$1457;
t$1467 = [t$1466,t$1465,t$1458,2];
t$1468 = t$1467;
return [t$1468,true];
 break; }case 2: {return [[v$584,[v$596,v$597,v$585,0],v$586,1],false];
 break; }default: {return [[v$584,[v$596,v$597,v$585,2],v$586,2],true];
} };
} };
};
};
var balance2$600 = function(v$603){if (v$603 == null) {basis$0General$1.print$163("Impossible.OrderSet.(balance2 on an empty tree)");
throw [compiler_objects$0LambdaExp$1$3.en$Impossible$161,"Impossible.OrderSet.(balance2 on an empty tree)"];
} else {var v$668 = v$603;
var v$669 = v$668[0];
var v$670 = v$668[1];
var v$671 = v$668[2];
switch (v$668[3]) { case 0: {return [[v$669,v$670,v$671,2],true];
 break; }case 2: {return [[v$669,v$670,v$671,1],false];
 break; }default: {var v$656;
if (v$670 == null) {basis$0General$1.print$163("Impossible.OrderSet.empty tree21!");
throw [compiler_objects$0LambdaExp$1$3.en$Impossible$161,"Impossible.OrderSet.empty tree21!"];
} else {v$656 = v$670;
};
var v$657 = v$656[0];
var v$658 = v$656[1];
var v$659 = v$656[2];
switch (v$656[3]) { case 0: {var v$644;
if (v$659 == null) {basis$0General$1.print$163("Impossible.OrderSet.empty tree22!");
throw [compiler_objects$0LambdaExp$1$3.en$Impossible$161,"Impossible.OrderSet.empty tree22!"];
} else {v$644 = v$659;
};
var v$645 = v$644[0];
var v$646 = v$644[1];
var v$647 = v$644[2];
var v$648 = v$644[3];
var t$1485;
var t$1484;
var t$1483 = v$645;
var t$1482;
var t$1481;
var t$1480 = v$657;
var t$1479 = v$658;
var t$1478 = v$646;
var t$1477;
var t$1476;
var v$1290 = 0;
switch (v$648) { case 0: {switch (v$1290) { case 0: {t$1476 = true;
 break; }default: {t$1476 = false;
} };
 break; }case 1: {switch (v$1290) { case 1: {t$1476 = true;
 break; }default: {t$1476 = false;
} };
 break; }case 2: {switch (v$1290) { case 2: {t$1476 = true;
 break; }default: {t$1476 = false;
} };
 break; } };
t$1477 = (t$1476?1:2);
t$1481 = [t$1480,t$1479,t$1478,t$1477];
t$1482 = t$1481;
var t$1475;
var t$1474;
var t$1473 = v$669;
var t$1472 = v$647;
var t$1471 = v$671;
var t$1470;
var t$1469;
var v$1288 = 1;
switch (v$648) { case 0: {switch (v$1288) { case 0: {t$1469 = true;
 break; }default: {t$1469 = false;
} };
 break; }case 1: {switch (v$1288) { case 1: {t$1469 = true;
 break; }default: {t$1469 = false;
} };
 break; }case 2: {switch (v$1288) { case 2: {t$1469 = true;
 break; }default: {t$1469 = false;
} };
 break; } };
t$1470 = (t$1469?0:2);
t$1474 = [t$1473,t$1472,t$1471,t$1470];
t$1475 = t$1474;
t$1484 = [t$1483,t$1482,t$1475,2];
t$1485 = t$1484;
return [t$1485,true];
 break; }case 2: {return [[v$657,v$658,[v$669,v$659,v$671,1],0],false];
 break; }default: {return [[v$657,v$658,[v$669,v$659,v$671,2],2],true];
} };
} };
};
};
var fix$1486 = {};
fix$1486.$remove_rightmost = function(v$676){if (v$676 == null) {basis$0General$1.print$163("Impossible.OrderSet.(remove_rightmost on empty tree)");
throw [compiler_objects$0LambdaExp$1$3.en$Impossible$161,"Impossible.OrderSet.(remove_rightmost on empty tree)"];
} else {var v$690 = v$676;
var v$691 = v$690[2];
if (v$691 == null) {return [v$690[1],v$690[0],true];
} else {var v$713 = v$690[0];
var v$714 = v$690[1];
var v$715 = v$690[3];
var v$709 = fix$1486.$remove_rightmost(v$691);
var v$710 = v$709[0];
var v$711 = v$709[1];
if (v$709[2]) {var v$706 = balance2$600([v$713,v$714,v$710,v$715]);
return [v$706[0],v$711,v$706[1]];
} else {return [[v$713,v$714,v$710,v$715],v$711,false];
};
};
};
};
var remove_rightmost$673 = fix$1486.$remove_rightmost;
var fix$1487 = {};
fix$1487.$del = function(v$719){if (v$719 == null) {throw compiler_objects$0LambdaExp$1$3.exn$NOTFOUND$519;
} else {var v$776 = v$719;
var v$777 = v$776[0];
var v$778 = v$776[1];
var v$779 = v$776[2];
var v$780 = v$776[3];
if (k0$523 < v$777) {var v$739 = fix$1487.$del(v$778);
var v$740 = v$739[0];
if (v$739[1]) {return balance1$527([v$777,v$740,v$779,v$780]);
} else {return [[v$777,v$740,v$779,v$780],false];
};
} else {if (v$777 < k0$523) {var v$753 = fix$1487.$del(v$779);
var v$754 = v$753[0];
if (v$753[1]) {return balance2$600([v$777,v$778,v$754,v$780]);
} else {return [[v$777,v$778,v$754,v$780],false];
};
} else {if (v$779 == null) {return [v$778,true];
} else {if (v$778 == null) {return [v$779,true];
} else {var v$772 = remove_rightmost$673(v$778);
var v$773 = v$772[0];
var v$774 = v$772[1];
if (v$772[2]) {return balance1$527([v$774,v$773,v$779,v$780]);
} else {return [[v$774,v$773,v$779,v$780],false];
};
};
};
};
};
};
};
var del$716 = fix$1487.$del;
try {return (del$716(t$526))[0];
} catch(v$1488) {return (function(NOTFOUND$787){var t$1489 = NOTFOUND$787;
if (t$1489[0] == compiler_objects$0LambdaExp$1$3.en$NOTFOUND$519) {return t$526;
} else {throw NOTFOUND$787;
};
})(v$1488);
};
};
var fix$1490 = {};
fix$1490.$difference = function(s1$791,s2$794){lab$difference: while (true) {if (s1$791 == null) {return null;
} else {if (s2$794 == null) {return s1$791;
} else {var v$806 = s2$794;
var v$807 = v$806[0];
var v$808 = v$806[1];
var v$809 = v$806[2];
var t$1491 = fix$1490.$difference(compiler_objects$0LambdaExp$1$3.remove$520(v$807,s1$791),v$808);
var t$1492 = v$809;
var s1$791 = t$1491;
var s2$794 = t$1492;
continue lab$difference;
};
};
};
};
compiler_objects$0LambdaExp$1$3.difference$788 = fix$1490.$difference;
compiler_objects$0LambdaExp$1$3.intersect$810 = function(s1$813,s2$816){var fix$1493 = {};
fix$1493.$inters = function(v$820,v$823){lab$inters: while (true) {if (v$820 == null) {return v$823;
} else {var v$839 = v$820;
var v$840 = v$839[0];
var v$841 = v$839[1];
var v$842 = v$839[2];
var t$1502 = v$841;
var t$1501;
var t$1500 = fix$1493.$inters;
var t$1499 = v$842;
var t$1498;
var t$1497;
var fix$1494 = {};
fix$1494.$search = function(v$1352){lab$search: while (true) {if (v$1352 == null) {return false;
} else {var v$1353 = v$1352;
var v$1354 = v$1353[0];
var v$1355 = v$1353[1];
var v$1356 = v$1353[2];
if (((v$840 < v$1354)?true:(v$1354 < v$840))?false:true) {return true;
} else {if (v$840 < v$1354) {var t$1495 = v$1355;
var v$1352 = t$1495;
continue lab$search;
} else {var t$1496 = v$1356;
var v$1352 = t$1496;
continue lab$search;
};
};
};
};
};
var search$1351 = fix$1494.$search;
t$1497 = (search$1351(s2$816));
t$1498 = (t$1497?(compiler_objects$0LambdaExp$1$3.insert$265(v$840,v$823)):v$823);
t$1501 = (t$1500(t$1499,t$1498));
var t$1503 = t$1502;
var t$1504 = t$1501;
var v$820 = t$1503;
var v$823 = t$1504;
continue lab$inters;
};
};
};
var inters$817 = fix$1493.$inters;
return inters$817(s1$813,compiler_objects$0LambdaExp$1$3.empty$174);
};
compiler_objects$0LambdaExp$1$3.partition$844 = function(f$847,s$850){var fix$1505 = {};
fix$1505.$g = function(v$854,v$857){lab$g: while (true) {if (v$854 == null) {return v$857;
} else {var v$875 = v$854;
var v$876 = v$875[0];
var v$877 = v$875[1];
var v$878 = v$875[2];
var v$880 = v$857[0];
var v$881 = v$857[1];
var b$870 = (f$847(v$876))?[compiler_objects$0LambdaExp$1$3.insert$265(v$876,v$880),v$881]:[v$880,compiler_objects$0LambdaExp$1$3.insert$265(v$876,v$881)];
var t$1506 = v$878;
var t$1507 = fix$1505.$g(v$877,b$870);
var v$854 = t$1506;
var v$857 = t$1507;
continue lab$g;
};
};
};
var g$851 = fix$1505.$g;
return g$851(s$850,[compiler_objects$0LambdaExp$1$3.empty$174,compiler_objects$0LambdaExp$1$3.empty$174]);
};
compiler_objects$0LambdaExp$1$3.fold$882 = function(f$885,e$888,t$891){var fix$1508 = {};
fix$1508.$fold$ = function(v$895,v$898){lab$fold$: while (true) {if (v$895 == null) {return v$898;
} else {var v$910 = v$895;
var v$911 = v$910[0];
var v$912 = v$910[1];
var v$913 = v$910[2];
var t$1509 = v$913;
var t$1510 = (f$885(v$911))(fix$1508.$fold$(v$912,v$898));
var v$895 = t$1509;
var v$898 = t$1510;
continue lab$fold$;
};
};
};
var fold$$892 = fix$1508.$fold$;
return fold$$892(t$891,e$888);
};
compiler_objects$0LambdaExp$1$3.listmap$915 = function(v$1387,v$1388){return basis$0List$1.map$697(v$1387,v$1388);
};
compiler_objects$0LambdaExp$1$3.map$916 = function(f$919,t$922){var t$1518 = compiler_objects$0LambdaExp$1$3.fromList$467;
var t$1517;
var t$1516 = basis$0List$1.map$697;
var t$1515 = f$919;
var t$1514;
var fix$1511 = {};
fix$1511.$f = function(v$1188,v$1189){lab$f: while (true) {if (v$1188 == null) {return v$1189;
} else {var v$1192 = v$1188;
var v$1193 = v$1192[0];
var v$1194 = v$1192[1];
var v$1195 = v$1192[2];
var t$1512 = v$1194;
var t$1513 = [v$1193,fix$1511.$f(v$1195,v$1189)];
var v$1188 = t$1512;
var v$1189 = t$1513;
continue lab$f;
};
};
};
var f$1187 = fix$1511.$f;
t$1514 = (f$1187(t$922,null));
t$1517 = (t$1516(t$1515,t$1514));
return t$1518(t$1517);
};
compiler_objects$0LambdaExp$1$3.subst$923 = function(v$935,v$936){return function(s$930){var t$1522;
var fix$1519 = {};
fix$1519.$search = function(v$1360){lab$search: while (true) {if (v$1360 == null) {return false;
} else {var v$1361 = v$1360;
var v$1362 = v$1361[0];
var v$1363 = v$1361[1];
var v$1364 = v$1361[2];
if (((v$936 < v$1362)?true:(v$1362 < v$936))?false:true) {return true;
} else {if (v$936 < v$1362) {var t$1520 = v$1363;
var v$1360 = t$1520;
continue lab$search;
} else {var t$1521 = v$1364;
var v$1360 = t$1521;
continue lab$search;
};
};
};
};
};
var search$1359 = fix$1519.$search;
t$1522 = (search$1359(s$930));
if (t$1522) {return compiler_objects$0LambdaExp$1$3.insert$265(v$935,compiler_objects$0LambdaExp$1$3.remove$520(v$936,s$930));
} else {return s$930;
};
};
};
compiler_objects$0LambdaExp$1$3.apply$937 = function(f$940,s$943){var fix$1523 = {};
fix$1523.$appl = function(v$947){lab$appl: while (true) {if (v$947 == null) {return 0;
} else {var v$959 = v$947;
var v$960 = v$959[0];
var v$961 = v$959[1];
var v$962 = v$959[2];
fix$1523.$appl(v$961);
f$940(v$960);
var t$1524 = v$962;
var v$947 = t$1524;
continue lab$appl;
};
};
};
var appl$944 = fix$1523.$appl;
return appl$944(s$943);
};
compiler_objects$0LambdaExp$1$3.layoutSet$963 = function(v$982,v$981,v$980){return function(layoutItem$971){return function(s$974){var t$1525;
var v$978 = [0,v$981];
var t$1532;
var t$1531 = basis$0List$1.map$697;
var t$1530 = layoutItem$971;
var t$1529;
var fix$1526 = {};
fix$1526.$f = function(v$1199,v$1200){lab$f: while (true) {if (v$1199 == null) {return v$1200;
} else {var v$1203 = v$1199;
var v$1204 = v$1203[0];
var v$1205 = v$1203[1];
var v$1206 = v$1203[2];
var t$1527 = v$1205;
var t$1528 = [v$1204,fix$1526.$f(v$1206,v$1200)];
var v$1199 = t$1527;
var v$1200 = t$1528;
continue lab$f;
};
};
};
var f$1198 = fix$1526.$f;
t$1529 = (f$1198(s$974,null));
t$1532 = (t$1531(t$1530,t$1529));
t$1525 = [t$1532,v$978,v$982,3,v$980];
return [0,t$1525];
};
};
};
compiler_objects$0LambdaExp$1$3.pu_bal$983 = pickle$0pickle$1.enumGen$2158(function(v$1208){var v$1209 = v$1208[0];
var v$1210 = v$1208[1];
switch (v$1209) { case 0: {switch (v$1210) { case 0: {return true;
 break; }default: {return false;
} };
 break; }case 1: {switch (v$1210) { case 1: {return true;
 break; }default: {return false;
} };
 break; }case 2: {switch (v$1210) { case 2: {return true;
 break; }default: {return false;
} };
 break; } };
},["OrderSet.bal",[1,[2,[0,null]]]]);
compiler_objects$0LambdaExp$1$3.pu$984 = function(pu_elt$987){var funE$996;
var v$1389 = null;
funE$996 = (function(v$1390){return pickle$0pickle$1.con0$1988(v$1389,v$1390);
});
return pickle$0pickle$1.dataGen$1488(["OrderSet.Set",function(v$1214){return (v$1214 == null)?0:1;
},[funE$996,[function(pu$1215){return pickle$0pickle$1.con1$2014(function(v$1216){return v$1216;
},function(v$1217){if (v$1217 == null) {basis$0General$1.print$163("Impossible.OrderSet.pu.N");
throw [compiler_objects$0LambdaExp$1$3.en$Impossible$161,"Impossible.OrderSet.pu.N"];
} else {return v$1217;
};
},pickle$0pickle$1.tup4Gen0$2377(pu_elt$987,pu$1215,pu$1215,compiler_objects$0LambdaExp$1$3.pu_bal$983));
},null]]]);
};
return 0;
})();
