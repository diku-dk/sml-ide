if ((typeof(special_objects$0TyName$1$2)) == "undefined") {special_objects$0TyName$1$2 = {};
};
(function(){special_objects$0TyName$1$2.die$1201 = function(s$1204){return tools$0Crash$1.impossible$59("QuasiMap2." + s$1204);
};
special_objects$0TyName$1$2.key$1205 = function(v$2571,v$2572,v$2573,v$2574,v$2575,v$2576){return v$2573[0][1];
};
special_objects$0TyName$1$2.rigid$1209 = function(v$2577,v$2578,v$2579,v$2580,v$2581,v$2582){return v$2579[0][2];
};
special_objects$0TyName$1$2.empty$1217 = function(v$2605){return null;
};
special_objects$0TyName$1$2.singleton$1218 = function(v$1229,v$1230){var nd$1223 = v$1229[2];
var k$1224 = nd$1223[0][1];
return nd$1223[0][2]?[[0,tools$0IntStringFinMap$1.singleton$118(k$1224,[v$1229,v$1230])]]:[[1,[tools$0IntStringFinMap$1.singleton$118(k$1224,[v$1229,v$1230]),special_objects$0Name$1.current_matchcount$69(0)]]];
};
special_objects$0TyName$1$2.isEmpty$1231 = function(v$1234){return (v$1234 == null)?true:false;
};
special_objects$0TyName$1$2.imap$1239 = function(v$1242){if (v$1242 == null) {return [1];
} else {var v$1251 = v$1242;
switch (v$1251[0][0]) { case 0: {var v$1253 = v$1251[0][1];
return [0,v$1253];
 break; }default: {var v$1254 = v$1251[0][1];
var v$1255 = v$1254[0];
return [0,v$1255];
} };
};
};
special_objects$0TyName$1$2.imap$$1256 = function(v$1259){if (v$1259 == null) {return tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible");
} else {var v$1269 = v$1259;
switch (v$1269[0][0]) { case 0: {return v$1269[0][1];
 break; }default: {return v$1269[0][1][0];
} };
};
};
special_objects$0TyName$1$2.ensure_consistent_imap$1274 = function(imap$1277){var v$1297 = tools$0IntStringFinMap$1.Fold$78(function(v$1305){var v$1314 = v$1305[0];
var v$1315 = v$1314[0];
var v$1316 = v$1314[1];
var v$1317 = v$1316[0];
var v$1318 = v$1305[1];
var v$1319 = v$1318[0];
var v$1320 = v$1318[1];
var t$2606;
if (v$1319) {var v$2260 = v$1317[2][0][1];
t$2606 = ((v$2260[0] == v$1315[0])?(v$2260[1] == v$1315[1]):false);
} else {t$2606 = false;
};
return [t$2606,v$1320?v$1317[2][0][2]:false];
},[true,true],imap$1277);
var v$1298 = v$1297[0];
var v$1299 = v$1297[1];
return [v$1298?imap$1277:(tools$0IntStringFinMap$1.fold$62(function(v$1290){var v$1291 = v$1290[0];
var v$1292 = v$1291[0];
var v$1293 = v$1291[1];
var v$1294 = v$1290[1];
return tools$0IntStringFinMap$1.add$237(v$1292[2][0][1],[v$1292,v$1293],v$1294);
},tools$0IntStringFinMap$1.empty$117(0),imap$1277)),v$1299];
};
special_objects$0TyName$1$2.ensure_consistent$1321 = function(v$1324){if (v$1324 == null) {return v$1324;
} else {var v$1337 = v$1324;
switch (v$1337[0][0]) { case 0: {return v$1324;
 break; }default: {var v$1357 = v$1337[0][1];
var v$1358 = v$1357[0];
var v$1359 = v$1357[1];
if (v$1359 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$1354 = special_objects$0TyName$1$2.ensure_consistent_imap$1274(v$1358);
var v$1355 = v$1354[1];
var v$1356 = v$1354[0];
if (v$1355) {(v$1337[0] = [0,v$1356],0);
return v$1324;
} else {(v$1337[0] = [1,[v$1356,special_objects$0Name$1.current_matchcount$69(0)]],0);
return v$1324;
};
} else {return v$1324;
};
} };
};
};
special_objects$0TyName$1$2.mk_flex$1360 = function(imap$1363){return [[1,[imap$1363,special_objects$0Name$1.current_matchcount$69(0)]]];
};
special_objects$0TyName$1$2.mk_rigid$1364 = function(imap$1367){return [[0,imap$1367]];
};
special_objects$0TyName$1$2.lookup$1368 = function(m$1371,d$1374){var v$1379;
if (m$1371 == null) {m$1371;
} else {var v$2339 = m$1371;
switch (v$2339[0][0]) { case 0: {m$1371;
 break; }default: {var v$2340 = v$2339[0][1];
var v$2341 = v$2340[0];
var v$2342 = v$2340[1];
if (v$2342 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$2343 = special_objects$0TyName$1$2.ensure_consistent_imap$1274(v$2341);
var v$2344 = v$2343[1];
var v$2345 = v$2343[0];
if (v$2344) {(v$2339[0] = [0,v$2345],0);
m$1371;
} else {(v$2339[0] = [1,[v$2345,special_objects$0Name$1.current_matchcount$69(0)]],0);
m$1371;
};
} else {m$1371;
};
} };
};
if (m$1371 == null) {v$1379 = [1];
} else {var v$2040 = m$1371;
switch (v$2040[0][0]) { case 0: {var v$2041 = v$2040[0][1];
v$1379 = [0,v$2041];
 break; }default: {var v$2042 = v$2040[0][1];
var v$2043 = v$2042[0];
v$1379 = [0,v$2043];
} };
};
switch (v$1379[0]) { case 0: {var v$1389 = v$1379[1];
var v$1385 = tools$0IntStringFinMap$1.lookup$129(v$1389,d$1374[2][0][1]);
switch (v$1385[0]) { case 0: {var v$1387 = v$1385[1];
var v$1388 = v$1387[1];
return [0,v$1388];
 break; }default: {return [1];
} };
 break; }default: {return [1];
} };
};
special_objects$0TyName$1$2.add$1390 = function(v$1415,v$1416,v$1417){if (v$1417 == null) {v$1417;
} else {var v$2347 = v$1417;
switch (v$2347[0][0]) { case 0: {v$1417;
 break; }default: {var v$2348 = v$2347[0][1];
var v$2349 = v$2348[0];
var v$2350 = v$2348[1];
if (v$2350 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$2351 = special_objects$0TyName$1$2.ensure_consistent_imap$1274(v$2349);
var v$2352 = v$2351[1];
var v$2353 = v$2351[0];
if (v$2352) {(v$2347[0] = [0,v$2353],0);
v$1417;
} else {(v$2347[0] = [1,[v$2353,special_objects$0Name$1.current_matchcount$69(0)]],0);
v$1417;
};
} else {v$1417;
};
} };
};
if (v$1417 == null) {var nd$2048 = v$1415[2];
var k$2049 = nd$2048[0][1];
return nd$2048[0][2]?[[0,tools$0IntStringFinMap$1.singleton$118(k$2049,[v$1415,v$1416])]]:[[1,[tools$0IntStringFinMap$1.singleton$118(k$2049,[v$1415,v$1416]),special_objects$0Name$1.current_matchcount$69(0)]]];
} else {var v$1404 = v$1417;
switch (v$1404[0][0]) { case 0: {var v$1412 = v$1404[0][1];
var nd$1406 = v$1415[2];
var i$1407 = nd$1406[0][1];
return nd$1406[0][2]?[[0,tools$0IntStringFinMap$1.add$237(i$1407,[v$1415,v$1416],v$1412)]]:[[1,[tools$0IntStringFinMap$1.add$237(i$1407,[v$1415,v$1416],v$1412),special_objects$0Name$1.current_matchcount$69(0)]]];
 break; }default: {var v$1413 = v$1404[0][1];
var v$1414 = v$1413[0];
return [[1,[tools$0IntStringFinMap$1.add$237(v$1415[2][0][1],[v$1415,v$1416],v$1414),special_objects$0Name$1.current_matchcount$69(0)]]];
} };
};
};
special_objects$0TyName$1$2.plus$1418 = function(v$1452,v$1453){if (v$1452 == null) {v$1452;
} else {var v$2355 = v$1452;
switch (v$2355[0][0]) { case 0: {v$1452;
 break; }default: {var v$2356 = v$2355[0][1];
var v$2357 = v$2356[0];
var v$2358 = v$2356[1];
if (v$2358 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$2359 = special_objects$0TyName$1$2.ensure_consistent_imap$1274(v$2357);
var v$2360 = v$2359[1];
var v$2361 = v$2359[0];
if (v$2360) {(v$2355[0] = [0,v$2361],0);
v$1452;
} else {(v$2355[0] = [1,[v$2361,special_objects$0Name$1.current_matchcount$69(0)]],0);
v$1452;
};
} else {v$1452;
};
} };
};
if (v$1453 == null) {v$1453;
} else {var v$2363 = v$1453;
switch (v$2363[0][0]) { case 0: {v$1453;
 break; }default: {var v$2364 = v$2363[0][1];
var v$2365 = v$2364[0];
var v$2366 = v$2364[1];
if (v$2366 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$2367 = special_objects$0TyName$1$2.ensure_consistent_imap$1274(v$2365);
var v$2368 = v$2367[1];
var v$2369 = v$2367[0];
if (v$2368) {(v$2363[0] = [0,v$2369],0);
v$1453;
} else {(v$2363[0] = [1,[v$2369,special_objects$0Name$1.current_matchcount$69(0)]],0);
v$1453;
};
} else {v$1453;
};
} };
};
if (v$1452 == null) {return v$1453;
} else {if (v$1453 == null) {return v$1452;
} else {var v$1443 = v$1452;
switch (v$1443[0][0]) { case 0: {var v$1445 = v$1453;
switch (v$1445[0][0]) { case 0: {var v$1447 = v$1443[0][1];
var v$1448 = v$1445[0][1];
return [[0,tools$0IntStringFinMap$1.plus$255(v$1447,v$1448)]];
 break; }default: {var t$2613;
var t$2612;
var t$2611;
var t$2610;
var t$2609 = tools$0IntStringFinMap$1.plus$255;
var t$2608;
if (v$1452 == null) {t$2608 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$2371 = v$1452;
switch (v$2371[0][0]) { case 0: {t$2608 = v$2371[0][1];
 break; }default: {t$2608 = v$2371[0][1][0];
} };
};
var t$2607;
if (v$1453 == null) {t$2607 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$2372 = v$1453;
switch (v$2372[0][0]) { case 0: {t$2607 = v$2372[0][1];
 break; }default: {t$2607 = v$2372[0][1][0];
} };
};
t$2610 = (t$2609(t$2608,t$2607));
t$2611 = [t$2610,special_objects$0Name$1.current_matchcount$69(0)];
t$2612 = [1,t$2611];
t$2613 = [t$2612];
return t$2613;
} };
 break; }default: {var t$2620;
var t$2619;
var t$2618;
var t$2617;
var t$2616 = tools$0IntStringFinMap$1.plus$255;
var t$2615;
if (v$1452 == null) {t$2615 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$2374 = v$1452;
switch (v$2374[0][0]) { case 0: {t$2615 = v$2374[0][1];
 break; }default: {t$2615 = v$2374[0][1][0];
} };
};
var t$2614;
if (v$1453 == null) {t$2614 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$2375 = v$1453;
switch (v$2375[0][0]) { case 0: {t$2614 = v$2375[0][1];
 break; }default: {t$2614 = v$2375[0][1][0];
} };
};
t$2617 = (t$2616(t$2615,t$2614));
t$2618 = [t$2617,special_objects$0Name$1.current_matchcount$69(0)];
t$2619 = [1,t$2618];
t$2620 = [t$2619];
return t$2620;
} };
};
};
};
special_objects$0TyName$1$2.remove$1454 = function(v$1495,v$1496){if (v$1496 == null) {v$1496;
} else {var v$2377 = v$1496;
switch (v$2377[0][0]) { case 0: {v$1496;
 break; }default: {var v$2378 = v$2377[0][1];
var v$2379 = v$2378[0];
var v$2380 = v$2378[1];
if (v$2380 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$2381 = special_objects$0TyName$1$2.ensure_consistent_imap$1274(v$2379);
var v$2382 = v$2381[1];
var v$2383 = v$2381[0];
if (v$2382) {(v$2377[0] = [0,v$2383],0);
v$1496;
} else {(v$2377[0] = [1,[v$2383,special_objects$0Name$1.current_matchcount$69(0)]],0);
v$1496;
};
} else {v$1496;
};
} };
};
if (v$1496 == null) {return [1];
} else {var v$1468 = v$1496;
switch (v$1468[0][0]) { case 0: {var v$1481 = v$1468[0][1];
var v$1474 = tools$0IntStringFinMap$1.remove$262(v$1495[2][0][1],v$1481);
switch (v$1474[0]) { case 0: {var v$1480 = v$1474[1];
return ((tools$0IntStringFinMap$1.isEmpty$128(0))(v$1480))?[0,null]:[0,[[0,v$1480]]];
 break; }default: {return [1];
} };
 break; }default: {var v$1493 = v$1468[0][1];
var v$1494 = v$1493[0];
var v$1486 = tools$0IntStringFinMap$1.remove$262(v$1495[2][0][1],v$1494);
switch (v$1486[0]) { case 0: {var v$1492 = v$1486[1];
return ((tools$0IntStringFinMap$1.isEmpty$128(0))(v$1492))?[0,null]:[0,[[1,[v$1492,special_objects$0Name$1.current_matchcount$69(0)]]]];
 break; }default: {return [1];
} };
} };
};
};
special_objects$0TyName$1$2.dom$1497 = function(v$1500){if (v$1500 == null) {return null;
} else {var t$2625 = basis$0List$1.map$697;
var t$2624 = function(v$1508){return v$1508[0];
};
var t$2623;
var t$2622 = tools$0IntStringFinMap$1.range$284;
var t$2621;
if (v$1500 == null) {v$1500;
} else {var v$2385 = v$1500;
switch (v$2385[0][0]) { case 0: {v$1500;
 break; }default: {var v$2386 = v$2385[0][1];
var v$2387 = v$2386[0];
var v$2388 = v$2386[1];
if (v$2388 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$2389 = special_objects$0TyName$1$2.ensure_consistent_imap$1274(v$2387);
var v$2390 = v$2389[1];
var v$2391 = v$2389[0];
if (v$2390) {(v$2385[0] = [0,v$2391],0);
v$1500;
} else {(v$2385[0] = [1,[v$2391,special_objects$0Name$1.current_matchcount$69(0)]],0);
v$1500;
};
} else {v$1500;
};
} };
};
if (v$1500 == null) {t$2621 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$2072 = v$1500;
switch (v$2072[0][0]) { case 0: {t$2621 = v$2072[0][1];
 break; }default: {t$2621 = v$2072[0][1][0];
} };
};
t$2623 = (t$2622(t$2621));
return t$2625(t$2624,t$2623);
};
};
special_objects$0TyName$1$2.range$1510 = function(v$1513){if (v$1513 == null) {return null;
} else {var t$2630 = basis$0List$1.map$697;
var t$2629 = function(v$1521){return v$1521[1];
};
var t$2628;
var t$2627 = tools$0IntStringFinMap$1.range$284;
var t$2626;
if (v$1513 == null) {v$1513;
} else {var v$2393 = v$1513;
switch (v$2393[0][0]) { case 0: {v$1513;
 break; }default: {var v$2394 = v$2393[0][1];
var v$2395 = v$2394[0];
var v$2396 = v$2394[1];
if (v$2396 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$2397 = special_objects$0TyName$1$2.ensure_consistent_imap$1274(v$2395);
var v$2398 = v$2397[1];
var v$2399 = v$2397[0];
if (v$2398) {(v$2393[0] = [0,v$2399],0);
v$1513;
} else {(v$2393[0] = [1,[v$2399,special_objects$0Name$1.current_matchcount$69(0)]],0);
v$1513;
};
} else {v$1513;
};
} };
};
if (v$1513 == null) {t$2626 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$2076 = v$1513;
switch (v$2076[0][0]) { case 0: {t$2626 = v$2076[0][1];
 break; }default: {t$2626 = v$2076[0][1][0];
} };
};
t$2628 = (t$2627(t$2626));
return t$2630(t$2629,t$2628);
};
};
special_objects$0TyName$1$2.list$1523 = function(v$1526){if (v$1526 == null) {return null;
} else {var t$2632 = tools$0IntStringFinMap$1.range$284;
var t$2631;
if (v$1526 == null) {v$1526;
} else {var v$2401 = v$1526;
switch (v$2401[0][0]) { case 0: {v$1526;
 break; }default: {var v$2402 = v$2401[0][1];
var v$2403 = v$2402[0];
var v$2404 = v$2402[1];
if (v$2404 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$2405 = special_objects$0TyName$1$2.ensure_consistent_imap$1274(v$2403);
var v$2406 = v$2405[1];
var v$2407 = v$2405[0];
if (v$2406) {(v$2401[0] = [0,v$2407],0);
v$1526;
} else {(v$2401[0] = [1,[v$2407,special_objects$0Name$1.current_matchcount$69(0)]],0);
v$1526;
};
} else {v$1526;
};
} };
};
if (v$1526 == null) {t$2631 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$2080 = v$1526;
switch (v$2080[0][0]) { case 0: {t$2631 = v$2080[0][1];
 break; }default: {t$2631 = v$2080[0][1][0];
} };
};
return t$2632(t$2631);
};
};
special_objects$0TyName$1$2.fromList$1532 = function(v$1535){if (v$1535 == null) {return null;
} else {var v$1548;
var b$2084 = [tools$0IntStringFinMap$1.empty$117(0),true];
var fix$2633 = {};
fix$2633.$foldl = function(v$2087,v$2088){lab$foldl: while (true) {if (v$2088 == null) {return v$2087;
} else {var v$2089 = v$2088;
var v$2090 = v$2089[0];
var v$2091 = v$2089[1];
var t$2634;
var v$2410 = v$2090[0];
var v$2411 = v$2090[1];
var v$2413 = v$2087[0];
var v$2414 = v$2087[1];
t$2634 = [tools$0IntStringFinMap$1.add$237(v$2410[2][0][1],[v$2410,v$2411],v$2413),v$2414?v$2410[2][0][2]:false];
var t$2635 = t$2634;
var t$2636 = v$2091;
var v$2087 = t$2635;
var v$2088 = t$2636;
continue lab$foldl;
};
};
};
var foldl$2086 = fix$2633.$foldl;
v$1548 = (foldl$2086(b$2084,v$1535));
var v$1549 = v$1548[0];
return v$1548[1]?[[0,v$1549]]:[[1,[v$1549,special_objects$0Name$1.current_matchcount$69(0)]]];
};
};
special_objects$0TyName$1$2.composemap$1567 = function(f$1570,m$1573){var v$1578;
if (m$1573 == null) {v$1578 = null;
} else {var t$2638 = tools$0IntStringFinMap$1.range$284;
var t$2637;
if (m$1573 == null) {m$1573;
} else {var v$2416 = m$1573;
switch (v$2416[0][0]) { case 0: {m$1573;
 break; }default: {var v$2417 = v$2416[0][1];
var v$2418 = v$2417[0];
var v$2419 = v$2417[1];
if (v$2419 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$2420 = special_objects$0TyName$1$2.ensure_consistent_imap$1274(v$2418);
var v$2421 = v$2420[1];
var v$2422 = v$2420[0];
if (v$2421) {(v$2416[0] = [0,v$2422],0);
m$1573;
} else {(v$2416[0] = [1,[v$2422,special_objects$0Name$1.current_matchcount$69(0)]],0);
m$1573;
};
} else {m$1573;
};
} };
};
if (m$1573 == null) {t$2637 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$2098 = m$1573;
switch (v$2098[0][0]) { case 0: {t$2637 = v$2098[0][1];
 break; }default: {t$2637 = v$2098[0][1][0];
} };
};
v$1578 = (t$2638(t$2637));
};
if (v$1578 == null) {return null;
} else {var v$1586;
var b$2101 = [tools$0IntStringFinMap$1.empty$117(0),true];
var fix$2639 = {};
fix$2639.$foldl = function(v$2104,v$2105){lab$foldl: while (true) {if (v$2105 == null) {return v$2104;
} else {var v$2106 = v$2105;
var v$2107 = v$2106[0];
var v$2108 = v$2106[1];
var t$2640;
var v$2425 = v$2107[0];
var v$2426 = v$2107[1];
var v$2428 = v$2104[0];
var v$2429 = v$2104[1];
t$2640 = [tools$0IntStringFinMap$1.add$237(v$2425[2][0][1],[v$2425,f$1570(v$2426)],v$2428),v$2429?v$2425[2][0][2]:false];
var t$2641 = t$2640;
var t$2642 = v$2108;
var v$2104 = t$2641;
var v$2105 = t$2642;
continue lab$foldl;
};
};
};
var foldl$2103 = fix$2639.$foldl;
v$1586 = (foldl$2103(b$2101,v$1578));
var v$1587 = v$1586[0];
return v$1586[1]?[[0,v$1587]]:[[1,[v$1587,special_objects$0Name$1.current_matchcount$69(0)]]];
};
};
special_objects$0TyName$1$2.ComposeMap$1605 = function(f$1608,m$1611){var v$1616;
if (m$1611 == null) {v$1616 = null;
} else {var t$2644 = tools$0IntStringFinMap$1.range$284;
var t$2643;
if (m$1611 == null) {m$1611;
} else {var v$2431 = m$1611;
switch (v$2431[0][0]) { case 0: {m$1611;
 break; }default: {var v$2432 = v$2431[0][1];
var v$2433 = v$2432[0];
var v$2434 = v$2432[1];
if (v$2434 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$2435 = special_objects$0TyName$1$2.ensure_consistent_imap$1274(v$2433);
var v$2436 = v$2435[1];
var v$2437 = v$2435[0];
if (v$2436) {(v$2431[0] = [0,v$2437],0);
m$1611;
} else {(v$2431[0] = [1,[v$2437,special_objects$0Name$1.current_matchcount$69(0)]],0);
m$1611;
};
} else {m$1611;
};
} };
};
if (m$1611 == null) {t$2643 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$2115 = m$1611;
switch (v$2115[0][0]) { case 0: {t$2643 = v$2115[0][1];
 break; }default: {t$2643 = v$2115[0][1][0];
} };
};
v$1616 = (t$2644(t$2643));
};
if (v$1616 == null) {return null;
} else {var v$1624;
var b$2118 = [tools$0IntStringFinMap$1.empty$117(0),true];
var fix$2645 = {};
fix$2645.$foldl = function(v$2121,v$2122){lab$foldl: while (true) {if (v$2122 == null) {return v$2121;
} else {var v$2123 = v$2122;
var v$2124 = v$2123[0];
var v$2125 = v$2123[1];
var t$2646;
var v$2440 = v$2124[0];
var v$2441 = v$2124[1];
var v$2443 = v$2121[0];
var v$2444 = v$2121[1];
t$2646 = [tools$0IntStringFinMap$1.add$237(v$2440[2][0][1],[v$2440,f$1608([v$2440,v$2441])],v$2443),v$2444?v$2440[2][0][2]:false];
var t$2647 = t$2646;
var t$2648 = v$2125;
var v$2121 = t$2647;
var v$2122 = t$2648;
continue lab$foldl;
};
};
};
var foldl$2120 = fix$2645.$foldl;
v$1624 = (foldl$2120(b$2118,v$1616));
var v$1625 = v$1624[0];
return v$1624[1]?[[0,v$1625]]:[[1,[v$1625,special_objects$0Name$1.current_matchcount$69(0)]]];
};
};
special_objects$0TyName$1$2.fold$1643 = function(f$1646,b$1649,m$1652){var c$2132;
if (m$1652 == null) {c$2132 = null;
} else {var t$2653 = basis$0List$1.map$697;
var t$2652 = function(v$2140){return v$2140[1];
};
var t$2651;
var t$2650 = tools$0IntStringFinMap$1.range$284;
var t$2649;
if (m$1652 == null) {m$1652;
} else {var v$2446 = m$1652;
switch (v$2446[0][0]) { case 0: {m$1652;
 break; }default: {var v$2447 = v$2446[0][1];
var v$2448 = v$2447[0];
var v$2449 = v$2447[1];
if (v$2449 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$2450 = special_objects$0TyName$1$2.ensure_consistent_imap$1274(v$2448);
var v$2451 = v$2450[1];
var v$2452 = v$2450[0];
if (v$2451) {(v$2446[0] = [0,v$2452],0);
m$1652;
} else {(v$2446[0] = [1,[v$2452,special_objects$0Name$1.current_matchcount$69(0)]],0);
m$1652;
};
} else {m$1652;
};
} };
};
if (m$1652 == null) {t$2649 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$2142 = m$1652;
switch (v$2142[0][0]) { case 0: {t$2649 = v$2142[0][1];
 break; }default: {t$2649 = v$2142[0][1][0];
} };
};
t$2651 = (t$2650(t$2649));
c$2132 = (t$2653(t$2652,t$2651));
};
var fix$2654 = {};
fix$2654.$foldl = function(v$2134,v$2135){lab$foldl: while (true) {if (v$2135 == null) {return v$2134;
} else {var v$2136 = v$2135;
var v$2137 = v$2136[0];
var v$2138 = v$2136[1];
var t$2655 = f$1646([v$2137,v$2134]);
var t$2656 = v$2138;
var v$2134 = t$2655;
var v$2135 = t$2656;
continue lab$foldl;
};
};
};
var foldl$2133 = fix$2654.$foldl;
return foldl$2133(b$1649,c$2132);
};
special_objects$0TyName$1$2.Fold$1653 = function(f$1656,b$1659,m$1662){var c$2146;
if (m$1662 == null) {c$2146 = null;
} else {var t$2658 = tools$0IntStringFinMap$1.range$284;
var t$2657;
if (m$1662 == null) {m$1662;
} else {var v$2454 = m$1662;
switch (v$2454[0][0]) { case 0: {m$1662;
 break; }default: {var v$2455 = v$2454[0][1];
var v$2456 = v$2455[0];
var v$2457 = v$2455[1];
if (v$2457 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$2458 = special_objects$0TyName$1$2.ensure_consistent_imap$1274(v$2456);
var v$2459 = v$2458[1];
var v$2460 = v$2458[0];
if (v$2459) {(v$2454[0] = [0,v$2460],0);
m$1662;
} else {(v$2454[0] = [1,[v$2460,special_objects$0Name$1.current_matchcount$69(0)]],0);
m$1662;
};
} else {m$1662;
};
} };
};
if (m$1662 == null) {t$2657 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$2155 = m$1662;
switch (v$2155[0][0]) { case 0: {t$2657 = v$2155[0][1];
 break; }default: {t$2657 = v$2155[0][1][0];
} };
};
c$2146 = (t$2658(t$2657));
};
var fix$2659 = {};
fix$2659.$foldl = function(v$2148,v$2149){lab$foldl: while (true) {if (v$2149 == null) {return v$2148;
} else {var v$2150 = v$2149;
var v$2151 = v$2150[0];
var v$2152 = v$2150[1];
var t$2660 = f$1656([v$2151,v$2148]);
var t$2661 = v$2152;
var v$2148 = t$2660;
var v$2149 = t$2661;
continue lab$foldl;
};
};
};
var foldl$2147 = fix$2659.$foldl;
return foldl$2147(b$1659,c$2146);
};
special_objects$0TyName$1$2.filter$1663 = function(f$1666,m$1669){var l$1670;
if (m$1669 == null) {l$1670 = null;
} else {var t$2663 = tools$0IntStringFinMap$1.range$284;
var t$2662;
if (m$1669 == null) {m$1669;
} else {var v$2462 = m$1669;
switch (v$2462[0][0]) { case 0: {m$1669;
 break; }default: {var v$2463 = v$2462[0][1];
var v$2464 = v$2463[0];
var v$2465 = v$2463[1];
if (v$2465 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$2466 = special_objects$0TyName$1$2.ensure_consistent_imap$1274(v$2464);
var v$2467 = v$2466[1];
var v$2468 = v$2466[0];
if (v$2467) {(v$2462[0] = [0,v$2468],0);
m$1669;
} else {(v$2462[0] = [1,[v$2468,special_objects$0Name$1.current_matchcount$69(0)]],0);
m$1669;
};
} else {m$1669;
};
} };
};
if (m$1669 == null) {t$2662 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$2159 = m$1669;
switch (v$2159[0][0]) { case 0: {t$2662 = v$2159[0][1];
 break; }default: {t$2662 = v$2159[0][1][0];
} };
};
l$1670 = (t$2663(t$2662));
};
var l$$1671 = basis$0List$1.filter$417(f$1666,l$1670);
return special_objects$0TyName$1$2.fromList$1532(l$$1671);
};
special_objects$0TyName$1$2.addList$1672 = function(l$1675,m1$1678){var m2$1679 = special_objects$0TyName$1$2.fromList$1532(l$1675);
return special_objects$0TyName$1$2.plus$1418(m1$1678,m2$1679);
};
special_objects$0TyName$1$2.mergeMap$1680 = function(f$1683,m1$1686,m2$1689){if (m1$1686 == null) {m1$1686;
} else {var v$2470 = m1$1686;
switch (v$2470[0][0]) { case 0: {m1$1686;
 break; }default: {var v$2471 = v$2470[0][1];
var v$2472 = v$2471[0];
var v$2473 = v$2471[1];
if (v$2473 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$2474 = special_objects$0TyName$1$2.ensure_consistent_imap$1274(v$2472);
var v$2475 = v$2474[1];
var v$2476 = v$2474[0];
if (v$2475) {(v$2470[0] = [0,v$2476],0);
m1$1686;
} else {(v$2470[0] = [1,[v$2476,special_objects$0Name$1.current_matchcount$69(0)]],0);
m1$1686;
};
} else {m1$1686;
};
} };
};
if (m2$1689 == null) {m2$1689;
} else {var v$2478 = m2$1689;
switch (v$2478[0][0]) { case 0: {m2$1689;
 break; }default: {var v$2479 = v$2478[0][1];
var v$2480 = v$2479[0];
var v$2481 = v$2479[1];
if (v$2481 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$2482 = special_objects$0TyName$1$2.ensure_consistent_imap$1274(v$2480);
var v$2483 = v$2482[1];
var v$2484 = v$2482[0];
if (v$2483) {(v$2478[0] = [0,v$2484],0);
m2$1689;
} else {(v$2478[0] = [1,[v$2484,special_objects$0Name$1.current_matchcount$69(0)]],0);
m2$1689;
};
} else {m2$1689;
};
} };
};
var rhs3$1718 = function(obj$1735){var t$2672;
var t$2671;
var t$2670;
var t$2669;
var t$2668 = tools$0IntStringFinMap$1.mergeMap$374;
var t$2667 = function(v$2486){var v$2487 = v$2486[0];
var v$2488 = v$2487[0];
var v$2489 = v$2487[1];
var v$2490 = v$2486[1];
var v$2491 = v$2490[0];
var v$2492 = v$2490[1];
var t$2666;
var v$2493 = v$2488[2][0][1];
var v$2494 = v$2491[2][0][1];
t$2666 = ((v$2493[0] == v$2494[0])?(v$2493[1] == v$2494[1]):false);
if (t$2666) {return [v$2488,f$1683([v$2489,v$2492])];
} else {return tools$0Crash$1.impossible$59("QuasiMap2.mergeMap, f'");
};
};
var t$2665;
if (m1$1686 == null) {t$2665 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$2171 = m1$1686;
switch (v$2171[0][0]) { case 0: {t$2665 = v$2171[0][1];
 break; }default: {t$2665 = v$2171[0][1][0];
} };
};
var t$2664;
if (m2$1689 == null) {t$2664 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$2175 = m2$1689;
switch (v$2175[0][0]) { case 0: {t$2664 = v$2175[0][1];
 break; }default: {t$2664 = v$2175[0][1][0];
} };
};
t$2669 = (t$2668(t$2667,t$2665,t$2664));
t$2670 = [t$2669,special_objects$0Name$1.current_matchcount$69(0)];
t$2671 = [1,t$2670];
t$2672 = [t$2671];
return t$2672;
};
if (m1$1686 == null) {return m2$1689;
} else {if (m2$1689 == null) {return m1$1686;
} else {var v$1727 = m1$1686;
switch (v$1727[0][0]) { case 0: {var v$1729 = m2$1689;
switch (v$1729[0][0]) { case 0: {var v$1731 = v$1727[0][1];
var v$1732 = v$1729[0][1];
return [[0,tools$0IntStringFinMap$1.mergeMap$374(function(v$2496){var v$2497 = v$2496[0];
var v$2498 = v$2497[0];
var v$2499 = v$2497[1];
var v$2500 = v$2496[1];
var v$2501 = v$2500[0];
var v$2502 = v$2500[1];
var t$2673;
var v$2503 = v$2498[2][0][1];
var v$2504 = v$2501[2][0][1];
t$2673 = ((v$2503[0] == v$2504[0])?(v$2503[1] == v$2504[1]):false);
if (t$2673) {return [v$2498,f$1683([v$2499,v$2502])];
} else {return tools$0Crash$1.impossible$59("QuasiMap2.mergeMap, f'");
};
},v$1731,v$1732)]];
 break; }default: {return rhs3$1718(0);
} };
 break; }default: {return rhs3$1718(0);
} };
};
};
};
var fix$2674 = {};
fix$2674.$pp_lookup = function(v$1739,v$1742,v$1745){lab$pp_lookup: while (true) {if (v$1742 == null) {return tools$0Crash$1.impossible$59("QuasiMap2.pp_lookup; element not there");
} else {var v$1764 = v$1742;
var v$1765 = v$1764[0];
var v$1766 = v$1764[1];
var t$2675;
var v$2316 = v$1765[2][0][1];
t$2675 = ((v$1745[0] == v$2316[0])?(v$1745[1] == v$2316[1]):false);
if (t$2675) {return v$1739(v$1765);
} else {var t$2676 = v$1739;
var t$2677 = v$1766;
var t$2678 = v$1745;
var v$1739 = t$2676;
var v$1742 = t$2677;
var v$1745 = t$2678;
continue lab$pp_lookup;
};
};
};
};
special_objects$0TyName$1$2.pp_lookup$1736 = fix$2674.$pp_lookup;
special_objects$0TyName$1$2.en$Restrict$1768 = new String("Restrict");
special_objects$0TyName$1$2.restrict$1769 = function(v$2583,v$2584,v$1782){if (v$1782 == null) {return null;
} else {if (v$2584 == null) {v$2584;
} else {var v$2508 = v$2584;
switch (v$2508[0][0]) { case 0: {v$2584;
 break; }default: {var v$2509 = v$2508[0][1];
var v$2510 = v$2509[0];
var v$2511 = v$2509[1];
if (v$2511 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$2512 = special_objects$0TyName$1$2.ensure_consistent_imap$1274(v$2510);
var v$2513 = v$2512[1];
var v$2514 = v$2512[0];
if (v$2513) {(v$2508[0] = [0,v$2514],0);
v$2584;
} else {(v$2508[0] = [1,[v$2514,special_objects$0Name$1.current_matchcount$69(0)]],0);
v$2584;
};
} else {v$2584;
};
} };
};
if (v$2584 == null) {throw [special_objects$0TyName$1$2.en$Restrict$1768,"[empty map]"];
} else {var im$1790;
if (v$2584 == null) {im$1790 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$2187 = v$2584;
switch (v$2187[0][0]) { case 0: {im$1790 = v$2187[0][1];
 break; }default: {im$1790 = v$2187[0][1][0];
} };
};
var ns$1791 = basis$0List$1.map$697(function(d$2190){return d$2190[2][0][1];
},v$1782);
var im$$1793;
try {var t$2685 = tools$0IntStringFinMap$1.restrict$391;
var t$2684;
var fix$2680 = {};
fix$2680.$pp_lookup = function(v$2598,v$2599){lab$pp_lookup: while (true) {if (v$2598 == null) {return tools$0Crash$1.impossible$59("QuasiMap2.pp_lookup; element not there");
} else {var v$2600 = v$2598;
var v$2601 = v$2600[0];
var v$2602 = v$2600[1];
var t$2681;
var v$2603 = v$2601[2][0][1];
t$2681 = ((v$2599[0] == v$2603[0])?(v$2599[1] == v$2603[1]):false);
if (t$2681) {return v$2583(v$2601);
} else {var t$2682 = v$2602;
var t$2683 = v$2599;
var v$2598 = t$2682;
var v$2599 = t$2683;
continue lab$pp_lookup;
};
};
};
};
var pp_lookup$2597 = fix$2680.$pp_lookup;
t$2684 = (function(v$2604){return pp_lookup$2597(v$1782,v$2604);
});
im$$1793 = (t$2685(t$2684,im$1790,ns$1791));
} catch(v$2679) {im$$1793 = ((function(v$1797){var t$2686 = v$1797;
if (t$2686[0] == tools$0IntStringFinMap$1.en$Restrict$390) {var s$1794 = v$1797[1];
throw [special_objects$0TyName$1$2.en$Restrict$1768,s$1794];
} else {throw v$1797;
};
})(v$2679));
};
return (tools$0IntStringFinMap$1.fold$62(function(v$1802){var v$1807 = v$1802[0];
var v$1808 = v$1807[0];
return v$1802[1]?v$1808[2][0][2]:false;
},true,im$$1793))?[[0,im$$1793]]:[[1,[im$$1793,special_objects$0Name$1.current_matchcount$69(0)]]];
};
};
};
special_objects$0TyName$1$2.enrich$1816 = function(f$1819,v$1823){var v$1847 = v$1823[0];
var v$1848 = v$1823[1];
if (v$1847 == null) {v$1847;
} else {var v$2516 = v$1847;
switch (v$2516[0][0]) { case 0: {v$1847;
 break; }default: {var v$2517 = v$2516[0][1];
var v$2518 = v$2517[0];
var v$2519 = v$2517[1];
if (v$2519 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$2520 = special_objects$0TyName$1$2.ensure_consistent_imap$1274(v$2518);
var v$2521 = v$2520[1];
var v$2522 = v$2520[0];
if (v$2521) {(v$2516[0] = [0,v$2522],0);
v$1847;
} else {(v$2516[0] = [1,[v$2522,special_objects$0Name$1.current_matchcount$69(0)]],0);
v$1847;
};
} else {v$1847;
};
} };
};
if (v$1848 == null) {v$1848;
} else {var v$2524 = v$1848;
switch (v$2524[0][0]) { case 0: {v$1848;
 break; }default: {var v$2525 = v$2524[0][1];
var v$2526 = v$2525[0];
var v$2527 = v$2525[1];
if (v$2527 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$2528 = special_objects$0TyName$1$2.ensure_consistent_imap$1274(v$2526);
var v$2529 = v$2528[1];
var v$2530 = v$2528[0];
if (v$2529) {(v$2524[0] = [0,v$2530],0);
v$1848;
} else {(v$2524[0] = [1,[v$2530,special_objects$0Name$1.current_matchcount$69(0)]],0);
v$1848;
};
} else {v$1848;
};
} };
};
if (v$1848 == null) {return true;
} else {if (v$1847 == null) {return false;
} else {var im1$1836;
if (v$1847 == null) {im1$1836 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$2195 = v$1847;
switch (v$2195[0][0]) { case 0: {im1$1836 = v$2195[0][1];
 break; }default: {im1$1836 = v$2195[0][1][0];
} };
};
var im2$1837;
if (v$1848 == null) {im2$1837 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$2199 = v$1848;
switch (v$2199[0][0]) { case 0: {im2$1837 = v$2199[0][1];
 break; }default: {im2$1837 = v$2199[0][1][0];
} };
};
return tools$0IntStringFinMap$1.enrich$414(function(v$2202){var v$2203 = v$2202[0];
var v$2204 = v$2203[1];
var v$2205 = v$2202[1];
var v$2206 = v$2205[1];
return f$1819([v$2204,v$2206]);
},[im1$1836,im2$1837]);
};
};
};
special_objects$0TyName$1$2.layoutMap$1849 = function(v$1883,v$1885,v$1884,v$1882){return function(pp_dom$1858){return function(pp_range$1861){return function(m$1864){var t$2687;
var v$1880 = [0,v$1884];
var t$2694;
var t$2693 = basis$0List$1.map$697;
var t$2692 = function(v$2207){var v$2208 = v$2207[0];
var v$2209 = v$2207[1];
var t$2691;
var v$2210 = [0,v$1883];
t$2691 = [[pp_dom$1858(v$2208),[pp_range$1861(v$2209),null]],v$2210,"",1,""];
return [0,t$2691];
};
var t$2690;
if (m$1864 == null) {t$2690 = null;
} else {var t$2689 = tools$0IntStringFinMap$1.range$284;
var t$2688;
if (m$1864 == null) {m$1864;
} else {var v$2532 = m$1864;
switch (v$2532[0][0]) { case 0: {m$1864;
 break; }default: {var v$2533 = v$2532[0][1];
var v$2534 = v$2533[0];
var v$2535 = v$2533[1];
if (v$2535 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$2536 = special_objects$0TyName$1$2.ensure_consistent_imap$1274(v$2534);
var v$2537 = v$2536[1];
var v$2538 = v$2536[0];
if (v$2537) {(v$2532[0] = [0,v$2538],0);
m$1864;
} else {(v$2532[0] = [1,[v$2538,special_objects$0Name$1.current_matchcount$69(0)]],0);
m$1864;
};
} else {m$1864;
};
} };
};
if (m$1864 == null) {t$2688 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$2213 = m$1864;
switch (v$2213[0][0]) { case 0: {t$2688 = v$2213[0][1];
 break; }default: {t$2688 = v$2213[0][1][0];
} };
};
t$2690 = (t$2689(t$2688));
};
t$2694 = (t$2693(t$2692,t$2690));
t$2687 = [t$2694,v$1880,v$1885,1,v$1882];
return [0,t$2687];
};
};
};
};
special_objects$0TyName$1$2.reportMap$1886 = function(f$1889,m$1892){var t$2701 = tools$0Report$1.flatten$87;
var t$2700;
var t$2699 = basis$0List$1.map$697;
var t$2698 = f$1889;
var t$2697;
if (m$1892 == null) {t$2697 = null;
} else {var t$2696 = tools$0IntStringFinMap$1.range$284;
var t$2695;
if (m$1892 == null) {m$1892;
} else {var v$2540 = m$1892;
switch (v$2540[0][0]) { case 0: {m$1892;
 break; }default: {var v$2541 = v$2540[0][1];
var v$2542 = v$2541[0];
var v$2543 = v$2541[1];
if (v$2543 < (special_objects$0Name$1.current_matchcount$69(0))) {var v$2544 = special_objects$0TyName$1$2.ensure_consistent_imap$1274(v$2542);
var v$2545 = v$2544[1];
var v$2546 = v$2544[0];
if (v$2545) {(v$2540[0] = [0,v$2546],0);
m$1892;
} else {(v$2540[0] = [1,[v$2546,special_objects$0Name$1.current_matchcount$69(0)]],0);
m$1892;
};
} else {m$1892;
};
} };
};
if (m$1892 == null) {t$2695 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$2217 = m$1892;
switch (v$2217[0][0]) { case 0: {t$2695 = v$2217[0][1];
 break; }default: {t$2695 = v$2217[0][1][0];
} };
};
t$2697 = (t$2696(t$2695));
};
t$2700 = (t$2699(t$2698,t$2697));
return t$2701(t$2700);
};
special_objects$0TyName$1$2.pu_map0$1893 = function(pu_d$1896,pu_a$1899){var pu_m$1908 = pickle$0pickle$1.combHash$2090(function(m$2219){return tools$0IntStringFinMap$1.fold$62(function(v$2220){return SmlPrims.chk_ovf_i32(v$2220[1] + 1);
},0,m$2219);
},tools$0IntStringFinMap$1.pu$488(pickle$0pickle$1.pairGen$1053([pickle$0pickle$1.int$729,pickle$0pickle$1.string$909]),pickle$0pickle$1.pairGen$1053([pu_d$1896,pu_a$1899])));
return pickle$0pickle$1.dataGen$1488(["QuasiMap.map0",function(v$2225){switch (v$2225[0]) { case 0: {return 0;
 break; }default: {return 1;
} };
},[function(v$2226){return pickle$0pickle$1.con1$2014(function(v$2227){return [0,v$2227];
},function(v$2228){switch (v$2228[0]) { case 0: {return v$2228[1];
 break; }default: {return tools$0Crash$1.impossible$59("QuasiMap2.pu_map0.Rigid");
} };
},pu_m$1908);
},[function(v$2231){return pickle$0pickle$1.con1$2014(function(v$2232){return [1,[v$2232[1],-1]];
},function(v$2233){switch (v$2233[0]) { case 1: {var v$2234 = v$2233[1];
return [v$2234[1],v$2234[0]];
 break; }default: {return tools$0Crash$1.impossible$59("QuasiMap2.pu_map0.Flexible");
} };
},pickle$0pickle$1.pairGen0$983(special_objects$0Name$1.pu_matchcount$298,pu_m$1908));
},null]]]);
};
special_objects$0TyName$1$2.pu$1950 = function(pu_d$1953,pu_a$1956){return pickle$0pickle$1.convert$2342([function(v$2243){switch (v$2243[0]) { case 0: {var v$2244 = v$2243[1];
return v$2244;
 break; }default: {return null;
} };
},function(v$2245){if (v$2245 == null) {return [1];
} else {var v$2246 = v$2245;
var t$2704;
var t$2703 = tools$0IntStringFinMap$1.isEmpty$128(0);
var t$2702;
if (v$2245 == null) {t$2702 = (tools$0Crash$1.impossible$59("QuasiMap2.imap': impossible"));
} else {var v$2248 = v$2245;
switch (v$2248[0][0]) { case 0: {t$2702 = v$2248[0][1];
 break; }default: {t$2702 = v$2248[0][1][0];
} };
};
t$2704 = (t$2703(t$2702));
if (t$2704) {return tools$0Crash$1.impossible$59("QuasiMap2.pu.hmmm");
} else {return [0,v$2246];
};
};
}],pickle$0pickle$1.optionGen$2134(pickle$0pickle$1.ref0ShGen$1268(special_objects$0TyName$1$2.pu_map0$1893(pu_d$1953,pu_a$1956))));
};
return 0;
})();